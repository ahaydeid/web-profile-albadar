"use client";

import { useState, useEffect } from "react";
import BottomNav from "@/app/components/BottomNav";
import { LogOut, Bell } from "lucide-react";
import Image from "next/image";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="min-h-screen bg-slate-50" />;
  }

  return (
    <div className="min-h-screen bg-slate-50 font-fredoka flex flex-col">
      {/* Top Bar - Minimal */}
      <header className="h-16 bg-white border-b border-slate-100 flex items-center justify-between px-6 sticky top-0 z-40 w-full max-w-lg mx-auto lg:max-w-none">
        <div className="flex items-center gap-2">
            <div className="bg-purple-100 p-1 rounded-lg">
                <Image src="/assets/images/albadar-logo.png" alt="Logo" width={24} height={24} />
            </div>
            <h1 className="text-sm font-bold text-slate-800">Al Badar <span className="text-purple-600">PPDB</span></h1>
        </div>

        <div className="flex items-center gap-3">
            <button className="text-slate-400 p-1.5 hover:text-purple-600 transition-colors">
                <Bell size={20} />
            </button>
            <div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white shadow-sm flex items-center justify-center text-slate-600 font-bold text-xs uppercase">
                FA
            </div>
        </div>
      </header>

      {/* Main Scrollable Content */}
      <main className="flex-1 pb-20 overflow-y-auto w-full px-4 pt-6 max-w-4xl mx-auto">
        {children}
      </main>

      {/* Sticky Bottom Nav */}
      <BottomNav />
    </div>
  );
}
