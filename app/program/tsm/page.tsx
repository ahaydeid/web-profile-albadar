import Image from "next/image";

export default function TSMPage() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#5b00b2] to-[#8b2be2] text-white py-20 px-6 md:px-16 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/assets/images/images.png" alt="TSM background" fill className="object-cover" />
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 relative z-10">
          Teknik Sepeda <span className="text-yellow-400">Motor</span>
        </h1>
        <p className="max-w-3xl mx-auto text-base md:text-lg text-gray-200 relative z-10">
          Jurusan yang fokus pada perawatan, perbaikan, dan inovasi teknologi sepeda motor, membekali siswa dengan keahlian otomotif roda dua yang dibutuhkan di dunia kerja.
        </p>
      </div>

      <div className="max-w-7xl mx-auto py-16 px-4 md:px-10 space-y-20">
        {/* Profil Jurusan */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#5b00b2] mb-6">Profil Jurusan</h2>
            <p className="text-gray-700 leading-relaxed">
              Kompetensi Keahlian Teknik Sepeda Motor (TSM) menyiapkan peserta didik agar mampu melakukan perawatan, perbaikan, dan modifikasi sepeda motor berbasis teknologi modern. Lulusan diharapkan siap bekerja di bengkel resmi,
              industri otomotif, maupun membuka usaha mandiri.
            </p>
          </div>
          <div className="relative w-full h-72 rounded-2xl overflow-hidden shadow-lg">
            <Image src="/assets/images/images.png" alt="Ilustrasi TSM" fill className="object-cover" />
          </div>
        </div>

        {/* Kompetensi */}
        <div>
          <h2 className="text-3xl font-bold text-[#5b00b2] mb-10 text-center">Kompetensi yang Dipelajari</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Perawatan & perbaikan mesin sepeda motor",
              "Sistem kelistrikan & injeksi bahan bakar",
              "Sasis, rem, suspensi, & roda",
              "Sistem pendinginan & pelumasan",
              "Diagnosis kerusakan & perbaikan",
              "Modifikasi & inovasi teknologi sepeda motor",
            ].map((item, i) => (
              <div key={i} className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-md border border-[#5b00b2]/20 hover:shadow-xl transition">
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Prospek Kerja */}
        <div className="bg-white rounded-3xl shadow-lg p-10">
          <h2 className="text-3xl font-bold text-[#5b00b2] mb-10 text-center">Prospek Kerja</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
            {[
              "Mekanik Sepeda Motor di Bengkel Resmi (Honda, Yamaha, Suzuki, Kawasaki)",
              "Teknisi Injeksi & Elektronik Sepeda Motor",
              "Staf Servis di Dealer Otomotif",
              "Instruktur / Trainer Otomotif",
              "Wirausaha Bengkel & Sparepart",
              "Melanjutkan Studi ke Perguruan Tinggi",
            ].map((job, i) => (
              <div key={i} className="bg-gradient-to-br from-[#faf9ff] to-white p-8 rounded-2xl shadow-md border border-[#5b00b2]/20 hover:shadow-lg transition flex items-center justify-center">
                <p className="text-gray-700 font-medium">{job}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-[#5b00b2] mb-6">Bergabunglah & Kuasai Dunia Otomotif Roda Dua</h3>
          <a href="/pendaftaran" className="inline-block bg-gradient-to-r from-[#5b00b2] to-[#8b2be2] hover:opacity-90 text-white font-medium px-8 py-3 rounded-full shadow transition">
            Daftar Sekarang
          </a>
        </div>
      </div>
    </section>
  );
}
