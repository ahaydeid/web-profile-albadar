import Image from "next/image";

export default function TKRPage() {
  return (
    <section className="min-h-screen bg-[#fdfdfd]">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#c1121f] to-[#780000] text-white py-20 px-6 md:px-16 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/assets/images/images.png" alt="TKR background" fill className="object-cover" />
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 relative z-10">
          Teknik Kendaraan <span className="text-yellow-400">Ringan</span>
        </h1>
        <p className="max-w-3xl mx-auto text-base md:text-lg text-gray-200 relative z-10">Jurusan yang membekali peserta didik dengan keterampilan perawatan, perbaikan, dan penguasaan teknologi otomotif modern pada kendaraan roda empat.</p>
      </div>

      <div className="max-w-7xl mx-auto py-16 px-4 md:px-10 space-y-20">
        {/* Profil Jurusan */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#c1121f] mb-6">Profil Jurusan</h2>
            <p className="text-gray-700 leading-relaxed">
              Kompetensi Keahlian <span className="font-semibold">Teknik Kendaraan Ringan (TKR)</span>
              menyiapkan siswa agar mampu melakukan diagnosa, perawatan, dan perbaikan sistem otomotif seperti mesin, sasis, kelistrikan, serta menguasai perkembangan teknologi kendaraan modern.
            </p>
          </div>
          <div className="relative w-full h-72 rounded-2xl overflow-hidden shadow-lg">
            <Image src="/assets/images/images.png" alt="Ilustrasi TKR" fill className="object-cover" />
          </div>
        </div>

        {/* Kompetensi */}
        <div>
          <h2 className="text-3xl font-bold text-[#c1121f] mb-10 text-center">Kompetensi yang Dipelajari</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Perawatan & perbaikan mesin kendaraan ringan",
              "Sistem pemindah tenaga (transmisi, kopling, diferensial)",
              "Perawatan sistem kelistrikan & elektronika kendaraan",
              "Perbaikan sasis, suspensi, & sistem kemudi",
              "Sistem rem hidrolik & ABS",
              "Penggunaan peralatan bengkel otomotif modern",
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-md border border-[#c1121f]/30 hover:shadow-xl transition flex items-center">
                <span className="w-3 h-3 rounded-full bg-[#c1121f] mr-3"></span>
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Prospek Kerja */}
        <div className="bg-gray-50 rounded-3xl shadow-lg p-10">
          <h2 className="text-3xl font-bold text-[#c1121f] mb-10 text-center">Prospek Kerja</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
            {[
              "Mekanik Otomotif (Mobil & Kendaraan Ringan)",
              "Teknisi Bengkel Resmi (Dealer/ATP)",
              "Teknisi Perawatan & Perbaikan Sistem Elektrik",
              "Staf Perawatan Kendaraan di Perusahaan",
              "Wirausaha Bengkel & Sparepart",
              "Melanjutkan Studi ke Perguruan Tinggi",
            ].map((job, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-md border border-[#c1121f]/30 hover:shadow-lg transition flex items-center justify-center">
                <p className="text-gray-700 font-medium">{job}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-[#c1121f] mb-6">Siap Menjadi Ahli Otomotif Masa Depan?</h3>
          <a href="/pendaftaran" className="inline-block bg-gradient-to-r from-[#c1121f] to-[#780000] hover:opacity-90 text-white font-semibold px-10 py-3 rounded-full shadow-md transition">
            Daftar Sekarang
          </a>
        </div>
      </div>
    </section>
  );
}
