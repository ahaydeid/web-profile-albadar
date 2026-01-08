"use client";

import { useState, FormEvent } from "react";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";

export default function RegisterPage() {
    const [data, setData] = useState({
        nama: "",
        username: "",
        password: "",
        confirmPassword: "",
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    async function submit(e: FormEvent) {
        e.preventDefault();
        setError("");
        setIsLoading(true);

        try {
            const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
            console.log('Registering to:', `${apiUrl}/api/ppdb/register`);
            console.log('Payload:', { nama_lengkap: data.nama, email: data.username });

            const response = await fetch(`${apiUrl}/api/ppdb/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    nama_lengkap: data.nama,
                    email: data.username,
                    password: data.password,
                }),
            });

            console.log('Response status:', response.status);
            const result = await response.json();
            console.log('Response data:', result);

            if (!response.ok) {
                // Show detailed error from backend
                if (result.errors) {
                    // Validation errors
                    const errorMessages = Object.values(result.errors).flat().join(', ');
                    setError(errorMessages);
                } else {
                    setError(result.message || "Terjadi kesalahan saat mendaftar");
                }
                setIsLoading(false);
                return;
            }

            // Redirect to verify page with email parameter
            window.location.href = `/verify?email=${encodeURIComponent(data.username)}`;
        } catch (err) {
            console.error('Registration error:', err);
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
                        Memproses Pendaftaran...
                    </p>
                </div>
            )}
            
            <div className="min-h-screen flex flex-col items-center justify-between px-4 py-8 md:py-12">
                <div className="w-full max-w-[880px] bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2 md:h-[600px] my-auto">
                    {/* Left Side: Illustration */}
                    <div
                        className="hidden md:flex items-center justify-center bg-purple-200 bg-no-repeat bg-center bg-cover relative"
                        style={{ backgroundImage: "url('/assets/images/bg-login.webp')" }}
                    >
                        <div className="absolute inset-0 bg-black/70" />
                        <div className="relative z-10 text-white text-center p-8">
                            <h2 className="text-3xl font-bold mb-2">Pendaftaran Akun</h2>
                            <p className="text-purple-100 font-medium">Bergabung dengan Civitas Al Badar</p>
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="px-6 md:px-14 flex flex-col justify-center py-10">
                        <div className="mb-8">
                            <h1 className="text-2xl font-semibold text-purple-700 mb-2">
                                Daftar Akun
                            </h1>
                            <p className="text-sm text-gray-500 font-bold">
                                SMKS Al Badar <span className="text-purple-700">Dangdeur</span>
                            </p>
                        </div>

                        <form onSubmit={submit} className="space-y-4">
                            <div>
                                <label className="text-xs text-gray-500 uppercase tracking-widest font-bold">
                                    Nama Lengkap
                                </label>
                                <input
                                    className="w-full border-b border-gray-300 py-2 text-sm focus:outline-none focus:border-purple-600 transition-colors bg-transparent"
                                    placeholder="Nama Sesuai Akta Kelahiran"
                                    value={data.nama}
                                    onChange={(e) => setData({ ...data, nama: e.target.value })}
                                    required
                                />
                            </div>

                            <div>
                                <label className="text-xs text-gray-500 uppercase tracking-widest font-bold">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="w-full border-b border-gray-300 py-2 text-sm focus:outline-none focus:border-purple-600 transition-colors bg-transparent"
                                    placeholder="your@email.com"
                                    value={data.username}
                                    onChange={(e) => setData({ ...data, username: e.target.value })}
                                    required
                                />
                            </div>

                            <div className="relative">
                                <label className="text-xs text-gray-500 uppercase tracking-widest font-bold">
                                    Password
                                </label>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    className="w-full border-b border-gray-300 py-2 pr-10 text-sm focus:outline-none focus:border-purple-600 transition-colors bg-transparent"
                                    placeholder="Minimal 8 karakter"
                                    value={data.password}
                                    onChange={(e) => setData({ ...data, password: e.target.value })}
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-2 top-7 text-gray-400 hover:text-purple-600"
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>

                            <div className="relative">
                                <label className="text-xs text-gray-500 uppercase tracking-widest font-bold">
                                    Konfirmasi Password
                                </label>
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    className={`w-full border-b py-2 pr-10 text-sm focus:outline-none transition-colors bg-transparent ${
                                        data.confirmPassword && data.password !== data.confirmPassword
                                            ? "border-red-500 focus:border-red-600"
                                            : "border-gray-300 focus:border-purple-600"
                                    }`}
                                    placeholder="Ulangi password"
                                    value={data.confirmPassword}
                                    onChange={(e) => setData({ ...data, confirmPassword: e.target.value })}
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute right-2 top-7 text-gray-400 hover:text-purple-600"
                                >
                                    {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                                {data.confirmPassword && data.password !== data.confirmPassword && (
                                    <p className="text-[10px] text-red-500 mt-1">
                                        Password tidak cocok!
                                    </p>
                                )}
                            </div>

                            {error && (
                                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                                    {error}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isLoading || (data.confirmPassword !== "" && data.password !== data.confirmPassword)}
                                className="w-full cursor-pointer bg-purple-700 disabled:bg-gray-300 hover:bg-purple-800 text-white text-sm font-bold py-3 rounded-full transition-all active:scale-95 mt-4"
                            >
                                Daftar
                            </button>

                            <p className="text-xs text-center text-gray-500 mt-6">
                                Sudah punya akun?{" "}
                                <Link
                                    href="/login"
                                    className="text-purple-600 font-bold hover:underline"
                                >
                                    Masuk di sini
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
