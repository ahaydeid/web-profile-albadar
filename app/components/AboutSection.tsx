"use client";

export default function AboutSection() {
  return (
    <section className="relative bg-gradient-to-br from-purple-700 via-purple-600 to-purple-800 text-white py-24 px-6 md:px-12 overflow-hidden">
      {/* Subtle Decorative Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Sekilas Tentang
          </h2>
          <p className="text-xl md:text-2xl font-semibold text-yellow-300">
            SMK Al Badar Dangdeur
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Video Container */}
          <div className="w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <div className="aspect-video bg-black/20">
                <iframe
                  src="https://www.youtube.com/embed/0FX5UhGqb6Q?si=o2GWuhwcnZRFOuMs"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  loading="lazy"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="w-full space-y-6">
            <div className="space-y-4">
              <p className="text-base md:text-lg leading-relaxed text-white/95">
                Berawal dari sebuah keprihatinan, muncul sebuah pemikiran dan terbentuklah sebuah tekad. Keprihatinan melihat materialisme dan konsumerisme yang dibuktikan hampir sebagian besar tanah dan sawah habis dijual tanpa memikirkan anak cucu ke depan.
              </p>
              
              <p className="text-base md:text-lg leading-relaxed text-white/95">
                Mau tinggal dimana mereka? Mau diwariskan apa anak cucu kita nanti? Nampaknya nyaris tidak ada pikiran saat itu...
              </p>
            </div>

            <div className="pt-2">
              <a 
                href="/tentang/profil" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-purple-900 font-semibold rounded-xl shadow-lg transition-all"
              >
                Selengkapnya
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
