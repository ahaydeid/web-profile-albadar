"use client";

import { useState, useEffect, useRef, FormEvent, Suspense } from "react";
import { ArrowLeft, RefreshCw } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

function VerifyContent() {
    const searchParams = useSearchParams();
    const email = searchParams.get("email") || "";
    
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const [resendTimer, setResendTimer] = useState(60);
    const [otpExpiryTimer, setOtpExpiryTimer] = useState(600); // 10 minutes
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    // Protect route: redirect if no email parameter
    useEffect(() => {
        if (!email) {
            window.location.href = "/register";
        }
    }, [email]);

    // Resend timer countdown
    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (resendTimer > 0) {
            interval = setInterval(() => {
                setResendTimer((prev) => prev - 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [resendTimer]);

    // OTP expiry timer countdown
    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (otpExpiryTimer > 0) {
            interval = setInterval(() => {
                setOtpExpiryTimer((prev) => prev - 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [otpExpiryTimer]);

    // Format timer to MM:SS
    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const handleChange = (index: number, value: string) => {
        if (!/^\d*$/.test(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value.slice(-1);
        setOtp(newOtp);

        // Move to next input if value is entered
        if (value && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handleResend = async () => {
        if (resendTimer === 0) {
            setError("");
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/ppdb/resend-otp`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ email }),
                });

                const result = await response.json();

                if (response.status === 429) {
                    setError(result.message || "Silakan tunggu beberapa saat sebelum mengirim ulang.");
                    return;
                }

                if (!response.ok) {
                    setError(result.message || "Gagal mengirim ulang kode OTP.");
                    return;
                }

                // Reset both timers
                setResendTimer(60);
                setOtpExpiryTimer(600);
            } catch (err) {
                setError("Tidak dapat terhubung ke server. Silakan coba lagi.");
            }
        }
    };

    async function submit(e: FormEvent) {
        e.preventDefault();
        setError("");
        setIsLoading(true);

        try {
            const otpCode = otp.join("");
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/ppdb/verify-otp`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    otp_code: otpCode,
                }),
            });

            const result = await response.json();

            if (!response.ok) {
                setError(result.message || "Kode OTP tidak valid atau sudah kadaluarsa.");
                setIsLoading(false);
                return;
            }

            // Redirect to login on success
            window.location.href = "/login";
        } catch (err) {
            setError("Tidak dapat terhubung ke server. Silakan coba lagi.");
            setIsLoading(false);
        }
    }

    return (
        <main className="min-h-screen bg-slate-50 font-fredoka">
            {isLoading && (
                <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-purple-600 mb-4"></div>
                    <p className="text-purple-700 font-medium text-lg animate-pulse">
                        Memverifikasi Kode...
                    </p>
                </div>
            )}
            
            <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8">
                <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden px-6 md:px-10 py-10">
                    {/* Form Container */}
                    <div className="flex flex-col justify-center">
                        <div className="mb-8">
                            <div className="mb-4 inline-flex items-center text-purple-600 font-bold text-sm cursor-pointer hover:underline">
                                <Link href="/register" className="flex items-center gap-2">
                                    <ArrowLeft size={16} /> Kembali
                                </Link>
                            </div>
                            <h1 className="text-2xl font-semibold text-purple-700 mb-2">
                                Masukkan Kode OTP
                            </h1>
                            <p className="text-sm text-gray-500 mb-3">
                                Kami telah mengirimkan kode 6-digit ke email Anda.
                            </p>
                            {otpExpiryTimer > 0 ? (
                                <div className="bg-blue-50 border border-blue-200 rounded-lg px-3 py-2 text-sm">
                                    <span className="text-blue-800">
                                        Kode berlaku: <span className="font-bold">{formatTime(otpExpiryTimer)}</span>
                                    </span>
                                </div>
                            ) : (
                                <div className="bg-red-50 border border-red-200 rounded-lg px-3 py-2 text-sm">
                                    <span className="text-red-800 font-bold">
                                        Kode OTP sudah kadaluarsa. Silakan kirim ulang.
                                    </span>
                                </div>
                            )}
                        </div>

                        <form onSubmit={submit} className="space-y-8">
                            <div className="flex justify-between gap-2 md:gap-4">
                                {otp.map((digit, index) => (
                                    <input
                                        key={index}
                                        ref={(el) => { inputRefs.current[index] = el; }}
                                        type="text"
                                        maxLength={1}
                                        value={digit}
                                        onChange={(e) => handleChange(index, e.target.value)}
                                        onKeyDown={(e) => handleKeyDown(index, e)}
                                        className="w-10 h-12 md:w-12 md:h-14 text-center text-xl font-bold border-2 border-gray-200 rounded-xl focus:border-purple-600 focus:outline-none transition-all bg-slate-50"
                                    />
                                ))}
                            </div>

                            {error && (
                                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                                    {error}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isLoading || otp.some(d => d === "")}
                                className="w-full cursor-pointer bg-purple-700 disabled:bg-gray-300 hover:bg-purple-800 text-white text-sm font-bold py-3 rounded-full transition-all active:scale-95 mt-4"
                            >
                                Verifikasi Sekarang
                            </button>

                            <div className="text-center space-y-4">
                                <p className="text-sm text-gray-500">
                                    Tidak menerima kode?{" "}
                                    {resendTimer > 0 ? (
                                        <span className="font-bold text-purple-600">
                                            Kirim ulang dalam {resendTimer}s
                                        </span>
                                    ) : (
                                        <button
                                            type="button"
                                            onClick={handleResend}
                                            className="text-purple-600 font-bold hover:underline cursor-pointer inline-flex items-center gap-1"
                                        >
                                            <RefreshCw size={14} /> Kirim Ulang
                                        </button>
                                    )}
                                </p>
                            </div>
                        </form>
                    </div>
                </div>

                <footer className="text-center text-xs text-gray-400 mt-8">
                    Created By{" "}
                    <a
                        href="https://ahadi.my.id"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-700 hover:font-bold transition-all"
                    >
                        Hadi
                    </a>
                </footer>
            </div>
        </main>
    );
}

export default function VerifyPage() {
    return (
        <Suspense fallback={
            <main className="min-h-screen bg-slate-50 font-fredoka flex items-center justify-center">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-purple-600"></div>
            </main>
        }>
            <VerifyContent />
        </Suspense>
    );
}
