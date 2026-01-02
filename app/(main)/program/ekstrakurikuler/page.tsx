"use client";

import Image from "next/image";
import { ArrowRight, Star, Heart, Zap, Camera, Mic2, Trophy, Users, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function EkstrakurikulerPage() {
  const ekstrakurikuler = [
    {
      name: "PMR",
      img: "/assets/images/images.png",
      desc: "Palang Merah Remaja, melatih kepedulian dan keterampilan pertolongan pertama.",
      icon: <Heart size={20} />,
    },
    {
      name: "Pramuka",
      img: "/assets/images/images.png",
      desc: "Pembinaan jiwa kepemimpinan, kemandirian, dan kebersamaan melalui kegiatan kepramukaan.",
      icon: <Zap size={20} />,
    },
    {
      name: "Paskibraka",
      img: "/assets/images/images.png",
      desc: "Pelatihan baris-berbaris dan pengibaran bendera dengan disiplin tinggi.",
      icon: <ShieldCheck size={20} />,
    },
    {
      name: "Jepang Club",
      img: "/assets/images/images.png",
      desc: "Belajar bahasa dan budaya Jepang secara menyenangkan.",
      icon: <Users size={20} />,
    },
    {
      name: "Pencak Silat",
      img: "/assets/images/images.png",
      desc: "Seni bela diri tradisional untuk melatih fisik, mental, dan sportivitas.",
      icon: <Trophy size={20} />,
    },
    {
      name: "Futsal",
      img: "/assets/images/images.png",
      desc: "Olahraga tim untuk meningkatkan kebugaran dan kerja sama.",
      icon: <Star size={20} />,
    },
    {
      name: "Marawis",
      img: "/assets/images/images.png",
      desc: "Kesenian musik Islami yang menumbuhkan rasa cinta budaya.",
      icon: <Mic2 size={20} />,
    },
    {
      name: "Volly Ball",
      img: "/assets/images/images.png",
      desc: "Olahraga bola tangan beregu yang mengasah kerja sama dan ketangkasan.",
      icon: <Trophy size={20} />,
    },
    {
      name: "Sinematografi",
      img: "/assets/images/images.png",
      desc: "Belajar membuat film, video kreatif, dan dokumentasi kegiatan.",
      icon: <Camera size={20} />,
    },
    {
      name: "Al Badar Media",
      img: "/assets/images/images.png",
      desc: "Pengelolaan media sekolah dan pembuatan konten kreatif.",
      icon: <Users size={20} />,
    },
  ];

  return (
    <main className="min-h-screen bg-white font-fredoka">
      {/* Hero Section */}
      <section className="relative bg-[#3B2F63] text-white py-24 px-6 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-yellow-400 rounded-full blur-3xl opacity-20" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-400 rounded-full blur-3xl opacity-20" />
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-yellow-400 text-[#3B2F63] rounded-full text-xs font-bold mb-8 uppercase tracking-[0.2em]">
            KEGIATAN SISWA
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Ekstra<span className="text-yellow-400">kurikuler</span>
          </h1>
          <p className="text-lg md:text-xl text-purple-100 max-w-2xl mx-auto leading-relaxed font-medium">
             Wadah pengembangan minat, bakat, dan kreativitas siswa untuk membentuk pribadi yang berprestasi dan berkarakter unggul.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
             <h2 className="text-3xl md:text-4xl font-extrabold text-[#3B2F63] mb-6">Pilih Passion-mu!</h2>
             <p className="text-slate-500 max-w-2xl mx-auto text-lg font-medium">Berbagai pilihan kegiatan yang dirancang untuk mengasah kemampuan non-akademik dan jiwa kepemimpinan setiap siswa Al-Badar Dangdeur.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {ekstrakurikuler.map((item, i) => (
              <div 
                key={i} 
                className="group bg-white rounded-[40px] shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:-translate-y-2 flex flex-col relative overflow-hidden"
              >
                {/* Image Container */}
                <div className="relative h-56 w-full overflow-hidden">
                  <Image 
                    src={item.img} 
                    alt={item.name} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                  <div className="absolute bottom-6 left-6 flex items-center gap-3">
                     <div className="w-10 h-10 bg-[#3B2F63] rounded-2xl flex items-center justify-center shadow-lg group-hover:bg-yellow-400 transition-transform group-hover:scale-110">
                        {/* Ensure icon color is white when on purple background */}
                        <div className="text-white group-hover:text-[#3B2F63] transition-colors">
                          {item.icon}
                        </div>
                     </div>
                     <h3 className="text-2xl font-bold text-white uppercase tracking-wider">{item.name}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <p className="text-slate-600 font-medium leading-relaxed mb-6 italic opacity-80">
                    &quot;{item.desc}&quot;
                  </p>
                  
                  <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                     <span className="text-xs font-black text-slate-300 uppercase tracking-widest group-hover:text-yellow-500 transition-colors">
                        Aktif Berprestasi
                     </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Polish CTA */}
      <section className="pb-24 px-6 text-center">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-[50px] p-12 md:p-20 text-[#3B2F63] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl" />
          <h3 className="text-3xl md:text-5xl font-black mb-6 relative z-10 leading-tight">
            Kembangkan Bakatmu <br /> Bersama Kami!
          </h3>
          <p className="text-[#3B2F63]/80 mb-10 text-lg font-bold relative z-10 max-w-2xl mx-auto">
            Jangan biarkan potensimu terpendam. Pilih ekstrakurikuler favoritmu dan raih prestasi membanggakan.
          </p>
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            <Link href="/pendaftaran" className="bg-yellow-400 hover:bg-yellow-300 text-[#3B2F63] px-8 py-3 rounded-full font-bold shadow-lg transition transform hover:scale-105 active:scale-95 flex items-center gap-2">
              Daftar Sekarang <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
