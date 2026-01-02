"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProfilPage() {
  const [activeTab, setActiveTab] = useState("sejarah");

  const missions = [
    "Meningkatkan literasi dan kompetensi IT pada guru dan siswa sesuai tuntutan revolusi industri 4.0.",
    "Mengembangkan dan memperkuat sinergi link and match dengan mitra industri di dalam dan luar negeri.",
    "Menguatkan hubungan kemitraan dengan lembaga pendidikan tinggi vokasi di dalam dan luar negeri.",
    "Mengembangkan kurikulum internasional dengan Bahasa Inggris sebagai bahasa pengantar wajib dalam pembelajaran produktif.",
    "Menguatkan fungsi LSP sebagai lembaga berwenang assessment berbasis industri.",
    "Mengembangkan PBM melalui Hybrid Model Learning System (daring dan luring, LMS, teleconference, Canva, Forms Guide).",
    "Menanamkan nilai-nilai religius, integritas, kerja keras, pantang menyerah, profesionalisme, dan entrepreneurship.",
    "Menguatkan pembinaan karakter & moral Pancasila melalui keteladanan guru.",
    "Meningkatkan kemampuan berpikir kritis siswa melalui penguatan pembelajaran STEAM.",
    "Mengembangkan sekolah pencetak wirausaha melalui Teaching Factory.",
    "Mengembangkan program SMK-Fast Track (jalur cepat setara Diploma 2) untuk kompetensi hospitality, IT, dan bisnis.",
  ];

  const scrollTo = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Account for sticky header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <main className="min-h-screen bg-white font-fredoka">
      {/* Hero Section */}
      <section className="relative bg-[#3B2F63] text-white py-24 px-6 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-yellow-400 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-400 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Profil <span className="text-yellow-400">SMK Al-Badar Dangdeur</span>
          </h1>
          <p className="text-lg md:text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed font-medium">
            Mengenal lebih dekat perjalanan, nilai, dan cita-cita luhur lembaga pendidikan yang berkarakter, mandiri, dan berlandaskan iman.
          </p>
        </div>
      </section>

      {/* Navigation Shortcuts */}
      <div className="sticky top-20 z-40 bg-white/80 backdrop-blur-md border-b border-slate-100 py-4 shadow-sm hidden md:block">
        <div className="max-w-6xl mx-auto px-6 flex justify-center gap-12">
          {['sejarah', 'visi', 'misi'].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className={`relative py-2 text-sm font-bold uppercase tracking-widest transition-colors ${
                activeTab === item ? "text-[#3B2F63]" : "text-slate-400 hover:text-[#3B2F63]"
              }`}
            >
              {item}
              {activeTab === item && (
                <div className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400 rounded-full" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Sejarah Section */}
      <section id="sejarah" className="py-24 px-6 md:px-10 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16 items-center mb-20">
            <div className="md:w-1/2">
              <div className="inline-flex items-center gap-2 px-6 py-2 bg-[#3B2F63] text-white rounded-full text-xs font-bold mb-6 uppercase tracking-[0.2em]">
                SEJARAH KAMI
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#3B2F63] mb-8 leading-tight">
                Dari Keprihatinan Menjadi Harapan Besar
              </h2>
              <div className="space-y-6 text-slate-700 leading-relaxed text-lg font-medium">
                <p>
                  Berawal dari sebuah keprihatinan melihat maraknya materialisme yang mengancam masa depan tanah kelahiran, para pendiri Al-Badar Dangdeur bertekad membekali anak cucu dengan ilmu yang berlandaskan iman.
                </p>
                <p>
                  Pada tahun <strong>2008</strong>, dengan prinsip <span className="text-purple-600 font-bold italic">&quot;belajar, belajar, dan terus belajar&quot;</span>, SMK Al-Badar Dangdeur resmi berdiri. Meski diawali dengan tantangan dan keterbatasan, tekad untuk membangun generasi Banten yang mandiri tidak pernah surut.
                </p>
              </div>
            </div>
            <div className="md:w-1/2 relative group">
              <div className="absolute -inset-4 bg-purple-100 rounded-3xl rotate-3 transition-transform group-hover:rotate-0" />
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <Image src="/assets/images/images.png" alt="Sejarah SMK Al-Badar Dangdeur" fill className="object-cover" />
              </div>
            </div>
          </div>

          <div className="bg-[#3B2F63] rounded-[40px] p-10 md:p-16 text-white shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-2xl" />
             <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                   <h3 className="text-2xl font-bold text-yellow-400 mb-6">Perjalanan & Perkembangan</h3>
                   <p className="text-purple-50 leading-relaxed text-lg opacity-90">
                      Al-Badar Dangdeur berkomitmen menjaga tradisi ulama salafi Banten melalui <em>ngaji sorogan</em> dan kitab kuning, namun tetap terbuka terhadap modernisasi dan industrialisasi sebagai keniscayaan masa depan.
                   </p>
                </div>
                <div className="flex flex-col justify-center">
                   <div className="grid grid-cols-2 gap-8 text-center">
                      <div>
                         <p className="text-4xl md:text-5xl font-black text-white mb-2">143</p>
                        <p className="text-sm font-bold uppercase tracking-widest text-purple-200">Siswa Awal (2008)</p>
                      </div>
                      <div>
                        <p className="text-4xl md:text-5xl font-black text-white mb-2">1.8K+</p>
                        <p className="text-sm font-bold uppercase tracking-widest text-purple-200">Siswa Saat Ini</p>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Visi Section */}
      <section id="visi" className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-[#3B2F63] text-white rounded-full text-xs font-bold mb-6 uppercase tracking-[0.2em]">
            VISI KAMI
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#3B2F63] mb-12">
            Membangun Karakter, Menggapai Dunia
          </h2>
          <div className="relative p-1 bg-gradient-to-br from-purple-100 to-yellow-100 rounded-[40px]">
            <div className="bg-white p-10 md:p-16 rounded-[38px] shadow-sm">
              <p className="text-2xl md:text-3xl font-bold text-slate-700 leading-relaxed max-w-3xl mx-auto italic">
                &quot;Menjadi Lembaga Pendidikan Vokasional yang Menanamkan Nilai Pancasila dan Mempersiapkan Siswanya Memiliki Kompetensi Industri Berstandar Internasional.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Misi Section */}
      <section id="misi" className="py-24 px-6 md:px-10 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-2 bg-[#3B2F63] text-white rounded-full text-xs font-bold mb-6 uppercase tracking-[0.2em]">
              MISI KAMI
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#3B2F63]">Langkah Strategis Perubahan</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {missions.map((misi, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-[#3B2F63] font-black text-xl mb-6 group-hover:bg-[#3B2F63] group-hover:text-white transition-colors">
                  {i + 1}
                </div>
                <p className="text-slate-600 font-medium leading-relaxed">
                  {misi}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-[#3B2F63] to-[#5b4a92] rounded-[50px] p-12 md:p-20 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-yellow-400 opacity-0 group-hover:opacity-5 transition-opacity" />
          <h3 className="text-3xl md:text-4xl font-extrabold mb-8 relative z-10">
            Mari Bergabung Membangun Masa Depan Berkarakter!
          </h3>
          <p className="text-purple-100 mb-10 text-lg font-medium relative z-10 opacity-90">
            Wujudkan cita-cita Anda bersama SMK Al-Badar Dangdeur. Pendidikan berkualitas yang memadukan keahlian industri dan nilai-nilai luhur Islami.
          </p>
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            <Link href="/pendaftaran" className="bg-yellow-400 hover:bg-yellow-300 text-[#3B2F63] px-10 py-4 rounded-full font-bold text-lg shadow-lg transition transform hover:scale-105 active:scale-95">
              Daftar Sekarang
            </Link>
            <Link href="/" className="bg-white/10 hover:bg-white/20 text-white px-10 py-4 rounded-full font-bold text-lg backdrop-blur-md border border-white/30 transition transform hover:scale-105 active:scale-95">
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
