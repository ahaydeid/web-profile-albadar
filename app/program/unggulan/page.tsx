import Image from "next/image";

export default function UnggulanPage() {
  return (
    <section className="min-h-screen bg-[#fafafa]">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#003366] to-[#0055a5] text-white py-20 px-6 md:px-16 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image src="/assets/images/images.png" alt="Unggulan Background" fill className="object-cover" />
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 relative z-10">
          Program <span className="text-yellow-400">Unggulan</span>
        </h1>
        <p className="max-w-3xl mx-auto text-base md:text-lg text-gray-200 relative z-10">
          Berbagai program inovatif untuk mengembangkan potensi siswa, meningkatkan kompetensi, dan mencetak generasi berprestasi yang siap bersaing di dunia kerja maupun akademik.
        </p>
      </div>

      <div className="max-w-7xl mx-auto py-16 px-4 md:px-10 space-y-20">
        {/* Keunggulan Sekolah */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#003366] mb-6">Keunggulan Sekolah</h2>
          <p className="text-gray-700 max-w-4xl mx-auto leading-relaxed">
            SMK Al-Badar memiliki berbagai program unggulan yang dirancang untuk memberikan nilai tambah bagi siswa. Melalui kerja sama dengan industri, pembelajaran berbasis proyek, dan sertifikasi keahlian, siswa siap menghadapi tantangan
            global.
          </p>
        </div>

        {/* Kegiatan & Program */}
        <div>
          <h2 className="text-3xl font-bold text-[#003366] mb-10 text-center">Kegiatan & Program</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Kelas Industri", desc: "Kolaborasi dengan dunia usaha & dunia industri untuk pembelajaran berbasis kerja nyata." },
              { title: "Sertifikasi Kompetensi", desc: "Uji kompetensi dan sertifikat resmi dari lembaga berlisensi nasional." },
              { title: "Ekstrakurikuler Unggulan", desc: "Pilihan kegiatan pengembangan minat bakat seperti futsal, pramuka, hingga robotik." },
              { title: "Magang & PKL", desc: "Program praktik kerja lapangan di perusahaan mitra industri." },
              { title: "Kewirausahaan", desc: "Pembekalan keterampilan bisnis dan pengelolaan usaha mandiri." },
              { title: "Lomba & Kompetisi", desc: "Partisipasi aktif dalam lomba akademik maupun non-akademik tingkat daerah hingga nasional." },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-md border border-[#003366]/20 hover:shadow-xl transition">
                <h3 className="text-xl font-semibold text-[#003366] mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Prestasi */}
        <div className="bg-gray-50 rounded-3xl shadow-lg p-10">
          <h2 className="text-3xl font-bold text-[#003366] mb-10 text-center">Prestasi Siswa</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { title: "Juara 1 LKS Otomotif", img: "/assets/images/images.png" },
              { title: "Finalis Olimpiade Akuntansi", img: "/assets/images/images.png" },
              { title: "Juara 2 Lomba Robotik", img: "/assets/images/images.png" },
            ].map((prestasi, i) => (
              <div key={i} className="rounded-2xl overflow-hidden shadow-md border border-[#003366]/20 bg-white">
                <div className="relative w-full h-48">
                  <Image src={prestasi.img} alt={prestasi.title} fill className="object-cover" />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-[#003366]">{prestasi.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-[#003366] mb-6">Ingin Menjadi Bagian dari Program Unggulan Kami?</h3>
          <a href="/pendaftaran" className="inline-block bg-gradient-to-r from-[#f7b500] to-[#ffcc33] hover:opacity-90 text-[#003366] font-semibold px-10 py-3 rounded-full shadow-md transition">
            Daftar Sekarang
          </a>
        </div>
      </div>
    </section>
  );
}
