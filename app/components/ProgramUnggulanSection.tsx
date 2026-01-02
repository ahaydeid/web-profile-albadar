"use client";

import React from "react";

// --- Custom Animated Icon Components ---

const HiringPartnerIcon = () => (
  <div className="relative w-16 h-16 flex items-center justify-center">
    <svg viewBox="0 0 24 24" className="w-12 h-12 fill-none stroke-current">
      <rect x="3" y="7" width="18" height="13" rx="2" className="stroke-2" />
      <path d="M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3" className="stroke-2" />
      <path d="M12 11v4M10 13h4" className="stroke-2 transition-transform duration-500 group-hover:rotate-90 origin-center" />
    </svg>
    <div className="absolute top-1 right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse opacity-0 group-hover:opacity-100" />
  </div>
);

const KitabKuningIcon = () => (
  <div className="relative w-16 h-16 flex items-center justify-center">
    <svg viewBox="0 0 24 24" className="w-12 h-12 fill-none stroke-current">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" className="stroke-2" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" className="stroke-2" />
      <path d="M8 7h8M8 11h8M8 15h5" className="stroke-[1.5] transition-all duration-700 group-hover:stroke-yellow-500" />
    </svg>
    <div className="absolute inset-0 border-2 border-yellow-400/20 rounded-lg scale-90 group-hover:scale-110 transition-transform duration-500 opacity-0 group-hover:opacity-100" />
  </div>
);

const AkhlakIcon = () => (
  <div className="relative w-16 h-16 flex items-center justify-center">
    <svg viewBox="0 0 24 24" className="w-12 h-12 fill-none stroke-current">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" className="stroke-2 transition-all duration-500 group-hover:fill-current group-hover:scale-110 origin-center" />
    </svg>
    <div className="absolute inset-0 bg-yellow-400/10 rounded-full animate-ping opacity-0 group-hover:opacity-100" />
  </div>
);

const PrestasiIcon = () => (
  <div className="relative w-16 h-16 flex items-center justify-center">
    <svg viewBox="0 0 24 24" className="w-12 h-12 fill-none stroke-current">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18" className="stroke-2" />
      <path d="M4 22h16" className="stroke-2" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" className="stroke-2" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" className="stroke-2" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2z" className="stroke-2 transition-all duration-500 group-hover:-translate-y-1" />
    </svg>
    <div className="absolute top-0 right-2 w-1 h-4 bg-yellow-400/40 rotate-45 scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom" />
  </div>
);

// --- Main Component ---

const programs = [
  { 
    label: "Hiring Partner", 
    sub: "Koneksi Industri Luas",
    Icon: HiringPartnerIcon 
  },
  { 
    label: "Kajian Kitab Kuning", 
    sub: "Kedalaman Literasi Islam",
    Icon: KitabKuningIcon 
  },
  { 
    label: "Pembinaan Akhlak", 
    sub: "Karakter Islami Unggul",
    Icon: AkhlakIcon 
  },
  { 
    label: "Prestasi Unggul", 
    sub: "Juara di Berbagai Bidang",
    Icon: PrestasiIcon 
  },
];

export default function ProgramUnggulanSection() {

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background Subtle Shapes */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 bg-purple-900 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#3B2F63] mb-6 leading-tight">
            Program <span className="text-yellow-500">Unggulan</span> Kami
          </h2>
          <div className="h-2 w-20 bg-yellow-400 rounded-full mb-8"></div>
          <p className="text-lg text-slate-600 font-medium leading-relaxed">
            Mengintegrasikan keahlian vokasional, pembinaan karakter Islami, dan peluang kerja yang luas untuk mencetak lulusan yang siap bersaing di era global.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Detailed Description Card */}
          <div className="lg:col-span-12 xl:col-span-5 flex flex-col justify-center">
            <div className="relative p-1 bg-gradient-to-br from-purple-100 to-yellow-50 rounded-3xl group">
              <div className="relative bg-white/80 backdrop-blur-xl p-8 md:p-10 rounded-[22px] border border-white shadow-xl transition-all duration-500 group-hover:shadow-2xl">
                <div className="space-y-6">
                  <p className="text-lg text-slate-700 leading-relaxed italic">
                    &quot;SMK Al-Badar Dangdeur dirancang sebagai jembatan antara dunia pendidikan kontemporer dengan nilai-nilai luhur kepesantrenan.&quot;
                  </p>
                  <p className="text-[16px] text-slate-600 leading-relaxed">
                    Kami menggabungkan kurikulum industri yang relevan dengan tradisi intelektual Islam melalui <strong>Kajian Kitab Kuning</strong> dan <strong>Tahfiz Qur&apos;an</strong>.
                  </p>
                  <div className="pt-6 border-t border-slate-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">✓</div>
                      <p className="text-slate-700 font-semibold">Pendidikan Gratis Hingga Lulus</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">✓</div>
                      <p className="text-slate-700 font-semibold">Sertifikasi Profesi Nasional (LSP)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Feature Grid */}
          <div className="lg:col-span-12 xl:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {programs.map((item, idx) => (
              <div 
                key={idx}
                className="group relative border border-slate-100 p-8 rounded-3xl hover:shadow-2xl hover:bg-purple-900 transition-all duration-500 flex flex-col items-center text-center cursor-default hover:-translate-y-2"
              >
                {/* Decorative Element */}
                <div className="absolute top-4 right-6 text-slate-100 group-hover:text-white/10 transition-colors">
                  <span className="text-4xl">★</span>
                </div>

                <div className="mb-6 text-purple-700 group-hover:text-yellow-400 transition-colors duration-500">
                  <item.Icon />
                </div>

                <h3 className="text-xl font-bold text-purple-700 group-hover:text-white transition-colors duration-500 mb-2">
                  {item.label}
                </h3>
                <p className="text-sm text-slate-500 group-hover:text-purple-200 transition-colors duration-500 font-medium">
                  {item.sub}
                </p>

                {/* Hover Indicator */}
                <div className="mt-8 w-12 h-1 bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
