"use client";

import { useState, FormEvent } from "react";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
    const [data, setData] = useState({
        username: "",
        password: "",
    });

    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    async function submit(e: FormEvent) {
        e.preventDefault();
        setError("");
        setIsLoading(true);

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/ppdb/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: data.username,
                    password: data.password,
                }),
            });

            const result = await response.json();

            // Handle unverified email (403 Forbidden)
            if (response.status === 403) {
                window.location.href = `/verify?email=${encodeURIComponent(data.username)}`;
                return;
            }

            if (!response.ok) {
                setError(result.message || "Email atau password salah.");
                setIsLoading(false);
                return;
            }

            // Store token and redirect to dashboard
            if (result.access_token) {
                localStorage.setItem("access_token", result.access_token);
                localStorage.setItem("token_type", result.token_type || "Bearer");
                
                // Store user info
                if (result.user) {
                    localStorage.setItem("user", JSON.stringify(result.user));
                }
                
                window.location.href = "/dashboard";
            }
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
                        Tunggu Sebentar...
                    </p>
                </div>
            )}
            
            <div className="min-h-screen flex flex-col items-center justify-between px-4 py-8 md:py-12">
                <div className="w-full max-w-[880px] bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2 md:h-[520px] my-auto">
                    {/* Left Side: Illustration/Background */}
                    <div
                        className="hidden md:flex items-center justify-center bg-purple-200 bg-no-repeat bg-center bg-cover relative"
                        style={{ backgroundImage: "url('/assets/images/bg-login.webp')" }}
                    >
                        <div className="absolute inset-0 bg-black/70" />
                        <div className="relative z-10 text-white text-center p-8">
                            <h2 className="text-3xl font-bold mb-2">SMKS Al Badar</h2>
                            <p className="text-purple-100 font-medium">Dangdeur - Tangerang</p>
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="px-6 md:px-14 flex flex-col justify-center py-10 md:py-0">
                        <div className="mb-8">
                            <h1 className="text-2xl font-semibold text-purple-700 mb-2">
                                Login
                            </h1>
                            <p className="text-sm text-gray-500 font-bold">
                                SMKS Al Badar <span className="text-purple-700">Dangdeur</span>
                            </p>
                        </div>

                        <form onSubmit={submit}>
                            <div className="mb-4">
                                <label className="text-xs text-gray-500 uppercase tracking-widest font-bold">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="w-full border-b border-gray-300 py-3 text-sm focus:outline-none focus:border-purple-600 transition-colors bg-transparent"
                                    placeholder="your@email.com"
                                    value={data.username}
                                    onChange={(e) =>
                                        setData({ ...data, username: e.target.value })
                                    }
                                    required
                                />
                            </div>

                            <div className="mb-6 relative">
                                <label className="text-xs text-gray-500 uppercase tracking-widest font-bold">
                                    Password
                                </label>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    className="w-full border-b border-gray-300 py-3 pr-10 text-sm focus:outline-none focus:border-purple-600 transition-colors bg-transparent"
                                    placeholder="••••••••"
                                    value={data.password}
                                    onChange={(e) =>
                                        setData({ ...data, password: e.target.value })
                                    }
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-2 top-8 text-gray-400 hover:text-purple-600 transition-colors"
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                                <div className="text-right mt-2">
                                    <Link
                                        href="#"
                                        className="text-xs text-purple-600 hover:underline font-bold"
                                    >
                                        Lupa password?
                                    </Link>
                                </div>
                            </div>

                            {error && (
                                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                                    {error}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full cursor-pointer bg-purple-700 hover:bg-purple-800 text-white text-sm font-bold py-3 rounded-full transition-all active:scale-95 mt-4"
                            >
                                Masuk
                            </button>

                            <p className="text-xs text-center text-gray-500 mt-8">
                                Belum Punya Akun?{" "}
                                <Link
                                    href="/register"
                                    className="text-purple-600 font-bold hover:underline"
                                >
                                    Daftar Di Sini
                                </Link>
                            </p>
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
