"use client";

// import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="relative bg-[#a000ff] text-white py-16 px-3 md:px-30 overflow-hidden">
      {/* Dekorasi blur lingkaran */}
      <div className="absolute bottom-0 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-[-4rem] right-10 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 leading-tight">
          Sekilas Tentang <span className="text-yellow-300">SMK AL Badar Tangerang</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Video */}
          <div className="w-full md:w-1/2">
            <div className="relative group">
              {/* Layer dekorasi */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-yellow-400 via-pink-400 to-purple-700 rounded-2xl blur opacity-30 group-hover:opacity-50 transition"></div>
              {/* Card video */}
              <div className="relative bg-white/10 rounded-2xl shadow-2xl overflow-hidden">
                <div className="aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/0FX5UhGqb6Q?si=o2GWuhwcnZRFOuMs"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          {/* Konten */}
          <div className="w-full md:w-1/2 md:ml-8 max-w-2xl">
            <p className="mb-6 text-lg leading-relaxed text-justify opacity-90">
              Berawal dari sebuah keprihatinan, muncul sebuah pemikiran dan terbentuklah sebuah tekad. Keprihatinan melihat materialisme dan konsumerisme yang dibuktikan hampir sebagian besar tanah dan sawah habis dijual tanpa memikirkan
              anak cucu ke depan. Mau tinggal dimana mereka? Mau diwariskan apa anak cucu kita nanti? Nampaknya nyaris tidak ada pikiran saat itu ...
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
