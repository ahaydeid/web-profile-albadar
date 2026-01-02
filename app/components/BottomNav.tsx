"use client";

import { Home, ClipboardList, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    { label: "Home", icon: <Home size={24} />, href: "/dashboard" },
    { label: "Progress", icon: <ClipboardList size={24} />, href: "/dashboard/progress" },
    { label: "Data Diri", icon: <User size={24} />, href: "/dashboard/profil" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 z-50">
      <div className="flex justify-around items-center h-16 max-w-lg mx-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex flex-col items-center justify-center space-y-1 w-full h-full transition-colors ${
                isActive ? "text-purple-700" : "text-slate-500 hover:text-purple-600"
              }`}
            >
              {item.icon}
              <span className={`text-[10px] font-bold ${isActive ? "text-purple-700" : "text-slate-500"}`}>
                {item.label}
              </span>
              {isActive && (
                <div className="w-1 h-1 rounded-full bg-purple-700 transition-all" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
