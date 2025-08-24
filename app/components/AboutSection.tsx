"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="bg-[#a000ff] text-white py-16 px-3 md:px-30 relative">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 leading-tight">
          Sekilas Tentang <span className="text-yellow-300">SMK AL Badar Tangerang</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Gambar */}
          <Image src="/assets/images/images.png" alt="Tentang Kita" width={320} height={320} className="rounded-2xl shadow-xl object-cover" />

          {/* Konten */}
          <div className="md:ml-8 max-w-2xl">
            <p className="mb-6 text-lg leading-relaxed text-justify opacity-90">
              Berawal dari sebuah keprihatinan, muncul sebuah pemikiran dan terbentuklah sebuah tekad. Keprihatinan melihat materialisme dan konsumerisme yang dibuktikan hampir sebagian besar tanah dan sawah habis dijual tanpa memikirkan
              anak cucu ke depan. Mau tinggal dimana mereka? Mau diwariskan apa anak cucu kita nanti? Nampaknya nyaris tidak ada pikiran saat itu, yang ada hanya bagaimana sawah dan tanah cepat jadi uang. Akhirnya muncul sebuah pemikiran,
              tidak ada solusi lain kecuali mereka harus dibekali ilmu yang ...
            </p>

            <a href="/tentang/sejarah" className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full shadow-md transition-transform transform hover:scale-105">
              Selengkapnya
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
