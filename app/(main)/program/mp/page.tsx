"use client";

import Image from "next/image";
import { CheckCircle2, Briefcase, GraduationCap, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function MPPage() {
  const kompetensi = [
    "Korespondensi & komunikasi bisnis",
    "Pengelolaan arsip & dokumen perkantoran",
    "Penggunaan aplikasi komputer (Word, Excel, PowerPoint)",
    "Pelayanan tamu & hubungan masyarakat",
    "Pengelolaan keuangan sederhana",
    "Manajemen organisasi & administrasi modern",
  ];

  const prospek = [
    "Sekretaris & Asisten Administrasi",
    "Resepsionis & Front Office",
    "Staf Administrasi Perkantoran",
    "Operator Komputer & Data Entry",
    "Tenaga Arsiparis / Dokumentasi",
    "Wirausaha & Studi Lanjut",
  ];

  return (
    <main className="min-h-screen bg-white font-fredoka">
      {/* Hero Section */}
      <section className="relative bg-[#3B2F63] text-white py-24 px-6 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-yellow-400 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-400 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-yellow-400 text-[#3B2F63] rounded-full text-xs font-bold mb-8 uppercase tracking-[0.2em]">
            PROGRAM KEAHLIAN
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Manajemen <span className="text-yellow-400">Perkantoran</span>
          </h1>
          <p className="text-lg md:text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed font-medium">
            Membekali siswa dengan kompetensi administrasi modern, teknologi digital perkantoran, dan etika profesional berstandar industri.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto py-24 px-6 md:px-10 space-y-32">
        {/* Profil Jurusan */}
        <section className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-purple-100 rounded-[40px] rotate-3 transition-transform group-hover:rotate-0" />
            <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden shadow-2xl border-4 border-white">
              <Image 
                src="/assets/images/images.png" 
                alt="Profil MP" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
              />
            </div>
          </div>
          <div>
            <div className="inline-flex items-center gap-2 px-6 py-2 bg-[#3B2F63] text-white rounded-full text-xs font-bold mb-6 uppercase tracking-[0.2em]">
              TENTANG JURUSAN
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#3B2F63] mb-8 leading-tight">
              Membangun Profesional Muda di Era Digital
            </h2>
            <p className="text-slate-600 leading-relaxed text-lg font-medium mb-8">
              Kompetensi Keahlian <span className="text-[#3B2F63] font-bold">Manajemen Perkantoran (MP)</span> mempersiapkan peserta didik agar memiliki pengetahuan, keterampilan, dan sikap dalam bidang administrasi perkantoran, pengelolaan dokumen, pelayanan informasi, serta penguasaan teknologi perkantoran berbasis digital.
            </p>
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm italic text-slate-500">
              &quot;Lulusan jurusan ini siap bersaing di dunia industri modern dengan kompetensi yang relevan dan karakter yang kuat.&quot;
            </div>
          </div>
        </section>

        {/* Kompetensi */}
        <section>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-2 bg-yellow-400 text-[#3B2F63] rounded-full text-xs font-bold mb-6 uppercase tracking-[0.2em]">
              KOMPETENSI
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#3B2F63]">Apa Yang Dipelajari?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {kompetensi.map((item, i) => (
              <div key={i} className="group bg-white p-8 rounded-[40px] shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-start text-left">
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-[#3B2F63] mb-6 group-hover:bg-[#3B2F63] group-hover:text-white transition-colors">
                  <CheckCircle2 size={24} />
                </div>
                <p className="text-slate-700 font-bold leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Prospek Kerja */}
        <section className="bg-slate-50 rounded-[60px] p-12 md:p-20 shadow-inner">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-2 bg-[#3B2F63] text-white rounded-full text-xs font-bold mb-6 uppercase tracking-[0.2em]">
              KARIR
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#3B2F63]">Peluang Masa Depan</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {prospek.map((job, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-md border border-slate-100 hover:shadow-2xl transition-all flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center text-[#3B2F63] shadow-sm transform transition-transform group-hover:scale-110">
                  <Briefcase size={18} />
                </div>
                <p className="text-[#3B2F63] font-black text-sm uppercase tracking-wider">{job}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
             <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur px-8 py-4 rounded-full shadow-sm border border-slate-200">
               <GraduationCap className="text-yellow-500" size={24} />
               <p className="text-slate-600 font-medium">Bisa melanjutkan ke Sekolah Tinggi / Universitas Terkemuka</p>
             </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#3B2F63] to-[#5b4a92] rounded-[50px] p-12 md:p-20 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-yellow-400 opacity-0 group-hover:opacity-5 transition-opacity" />
            <h3 className="text-3xl md:text-4xl font-extrabold mb-8 relative z-10">
              Siap Menjadi Tenaga Administrasi Handal?
            </h3>
            <p className="text-purple-100 mb-10 text-lg font-medium relative z-10 opacity-90">
              Daftar sekarang dan mulailah perjalanan karir Anda bersama SMK Al-Badar Dangdeur di jurusan Manajemen Perkantoran.
            </p>
            <div className="flex flex-wrap justify-center gap-4 relative z-10">
              <Link href="/pendaftaran" className="bg-yellow-400 hover:bg-yellow-300 text-[#3B2F63] px-10 py-4 rounded-full font-bold text-lg shadow-lg transition transform hover:scale-105 active:scale-95 flex items-center gap-2">
                Daftar Sekarang <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
