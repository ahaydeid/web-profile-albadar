"use client";

import React from "react";
import Link from "next/link";

// --- Custom Animated Icon Components ---

const MPIcon = () => (
  <div className="relative w-16 h-16 flex items-center justify-center">
    <svg viewBox="0 0 24 24" className="w-12 h-12 fill-none stroke-current">
      {/* Briefcase Base */}
      <rect x="3" y="7" width="18" height="13" rx="2" className="stroke-2 transition-all duration-500 group-hover:scale-105" />
      {/* Handle */}
      <path d="M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3" className="stroke-2" />
      {/* Animated Document inside */}
      <path d="M12 11h4M12 15h4M8 11h.01M8 15h.01" className="stroke-2 opacity-50 transition-all duration-500 group-hover:translate-x-1 group-hover:opacity-100" />
    </svg>
    <div className="absolute inset-0 bg-yellow-400/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-700 opacity-0 group-hover:opacity-30" />
  </div>
);

const TKRIcon = () => (
  <div className="relative w-16 h-16 flex items-center justify-center">
    <svg viewBox="0 0 24 24" className="w-12 h-12 fill-none stroke-current">
      {/* Gear */}
      <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" className="stroke-2" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1Z" 
        className="stroke-2 origin-center transition-transform duration-1000 group-hover:rotate-180" 
      />
    </svg>
    {/* Animated Sparkles */}
    <div className="absolute top-0 right-0 w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-0 group-hover:opacity-100" />
  </div>
);

const TSMIcon = () => (
  <div className="relative w-16 h-16 flex items-center justify-center">
    <svg viewBox="0 0 24 24" className="w-12 h-12 fill-none stroke-current">
      {/* Wheel Hub */}
      <circle cx="12" cy="12" r="3" className="stroke-2" />
      {/* Outer Wheel */}
      <circle cx="12" cy="12" r="9" className="stroke-2 stroke-dasharray-4 transition-all duration-700 group-hover:rotate-90 origin-center" />
      {/* Spokes */}
      <path d="M12 3v6M12 15v6M3 12h6M15 12h6" className="stroke-2 transition-transform duration-700 group-hover:rotate-45 origin-center" />
    </svg>
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-yellow-400/30 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
  </div>
);

const KulinerIcon = () => (
  <div className="relative w-16 h-16 flex items-center justify-center">
    <svg viewBox="0 0 24 24" className="w-12 h-12 fill-none stroke-current">
      {/* Plate/Bowl */}
      <path d="M3 12h18c0 4.4-3.6 8-8 8s-8-3.6-8-8Z" className="stroke-2" />
      {/* Chef Hat / Steam */}
      <path d="M12 12V7M9 10V5M15 10V5" className="stroke-2 transition-all duration-500 group-hover:-translate-y-2 opacity-60 group-hover:opacity-100" />
      <path d="M7 12V10a5 5 0 0 1 10 0v2" className="stroke-2 transition-all duration-500 group-hover:scale-y-110 origin-bottom" />
    </svg>
    {/* Steam Particles */}
    <div className="absolute top-2 w-1 h-1 bg-yellow-400 rounded-full animate-bounce delay-75 opacity-0 group-hover:opacity-100" />
    <div className="absolute top-1 left-2/3 w-1 h-1 bg-yellow-400 rounded-full animate-bounce delay-150 opacity-0 group-hover:opacity-100" />
  </div>
);

// --- Main Component ---

const jurusan = [
  {
    title: "Manajemen Perkantoran",
    desc: "Membekali siswa dengan keterampilan administrasi & teknologi perkantoran modern.",
    Icon: MPIcon,
    href: "/program/mp",
  },
  {
    title: "Teknik Kendaraan Ringan",
    desc: "Fokus pada perawatan, perbaikan mesin, dan teknologi otomotif roda empat.",
    Icon: TKRIcon,
    href: "/program/tkr",
  },
  {
    title: "Teknik Sepeda Motor",
    desc: "Menguasai teknologi perawatan & perbaikan sepeda motor modern.",
    Icon: TSMIcon,
    href: "/program/tsm",
  },
  {
    title: "Kuliner (Tata Boga)",
    desc: "Mengasah keterampilan kuliner, pastry, hingga tata hidang profesional.",
    Icon: KulinerIcon,
    href: "/program/kuliner",
  },
];

export default function JurusanSection() {

  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      {/* SVG Clip Path Definition for the Whole Card */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id="cardClip" clipPathUnits="objectBoundingBox">
            <path d="M 0,0.1 C 0,-0.05 1,-0.05 1,0.1 V 1 C 0.7,0.94 0.3,0.94 0,1 Z" />
          </clipPath>
        </defs>
      </svg>

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#3B2F63] mb-4">
            Program Keahlian
          </h2>
          <div className="h-1.5 w-24 bg-yellow-500 mx-auto rounded-full shadow-sm"></div>
          <p className="mt-4 text-slate-500 max-w-2xl mx-auto font-medium">
            Pilih passion Anda dan raih masa depan gemilang bersama SMK Al-Badar Dangdeur.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {jurusan.map((item) => (
            <Link 
              key={item.title} 
              href={item.href}
              className="block group"
            >
              <div
                className="relative bg-white border border-slate-200 shadow-md px-6 pb-16 pt-16 flex flex-col items-center justify-center text-center transition-all duration-500 ease-out hover:shadow-2xl hover:bg-[#FFD700] hover:border-yellow-400 hover:-translate-y-3 cursor-pointer overflow-hidden"
                style={{ 
                  clipPath: "url(#cardClip)",
                  minHeight: '480px'
                }}
              >
                {/* Background Decor */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-slate-50 rounded-full group-hover:bg-purple-900/5 transition-colors duration-500" />
                
                {/* Custom Icon Wrapper */}
                <div className="mb-8 text-yellow-300 transition-colors duration-500 group-hover:text-[#3B2F63]">
                  <item.Icon />
                </div>

                {/* Judul */}
                <h3 className="text-2xl font-bold text-[#3B2F63] transition-colors duration-500 leading-tight">
                  {item.title}
                </h3>

                {/* Deskripsi */}
                <p className="mt-4 text-[15px] text-slate-600 font-medium group-hover:text-[#3B2F63] transition-colors duration-500 leading-relaxed">
                  {item.desc}
                </p>

                {/* Divider Decor */}
                <div className="mt-6 w-8 h-1 bg-yellow-500 group-hover:bg-[#3B2F63] rounded-full transition-colors" />
                
                {/* Decorative Star inside card */}
                <div className="absolute top-4 right-4 text-slate-100 group-hover:text-[#3B2F63]/20 transition-colors">
                  <span className="text-4xl select-none">★</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
