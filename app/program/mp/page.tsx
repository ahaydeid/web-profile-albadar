import Image from "next/image";

export default function MPPage() {
  return (
    <section className="min-h-screen bg-[#faf9ff]">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#5b00b2] to-[#3f2b96] text-white py-20 px-6 md:px-16 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/assets/images/images.png" alt="MP background" fill className="object-cover" />
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 relative z-10">
          Manajemen <span className="text-yellow-400">Perkantoran</span>
        </h1>
        <p className="max-w-3xl mx-auto text-base md:text-lg text-gray-200 relative z-10">
          Jurusan yang membekali siswa dengan keterampilan administrasi modern, teknologi perkantoran, serta etika profesional untuk siap terjun di dunia kerja maupun melanjutkan pendidikan.
        </p>
      </div>

      <div className="max-w-7xl mx-auto py-16 px-4 md:px-10 space-y-20">
        {/* Profil Jurusan */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#5b00b2] mb-6">Profil Jurusan</h2>
            <p className="text-gray-700 leading-relaxed">
              Kompetensi Keahlian <span className="font-semibold">Manajemen Perkantoran (MP)</span>
              mempersiapkan peserta didik agar memiliki pengetahuan, keterampilan, dan sikap dalam bidang administrasi perkantoran, pengelolaan dokumen, pelayanan informasi, serta penguasaan teknologi perkantoran berbasis digital. Lulusan
              jurusan ini siap bekerja di dunia usaha maupun dunia industri, atau melanjutkan ke jenjang pendidikan yang lebih tinggi.
            </p>
          </div>
          <div className="relative w-full h-72 rounded-2xl overflow-hidden shadow-lg">
            <Image src="/assets/images/images.png" alt="Ilustrasi MP" fill className="object-cover" />
          </div>
        </div>

        {/* Kompetensi */}
        <div>
          <h2 className="text-3xl font-bold text-[#5b00b2] mb-10 text-center">Kompetensi yang Dipelajari</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Korespondensi & komunikasi bisnis",
              "Pengelolaan arsip & dokumen perkantoran",
              "Penggunaan aplikasi komputer (Word, Excel, PowerPoint)",
              "Pelayanan tamu & hubungan masyarakat",
              "Pengelolaan keuangan sederhana",
              "Manajemen organisasi & administrasi modern",
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-md border border-[#5b00b2]/20 hover:shadow-lg transition flex items-center">
                <span className="w-3 h-3 rounded-full bg-[#5b00b2] mr-3"></span>
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Prospek Kerja */}
        <div className="bg-white rounded-3xl shadow-lg p-10">
          <h2 className="text-3xl font-bold text-[#5b00b2] mb-10 text-center">Prospek Kerja</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
            {["Sekretaris & Asisten Administrasi", "Resepsionis & Front Office", "Staf Administrasi Perkantoran", "Operator Komputer & Data Entry", "Tenaga Arsiparis / Dokumentasi", "Wirausaha & Studi Lanjut"].map((job, i) => (
              <div key={i} className="bg-gradient-to-br from-[#faf9ff] to-white p-8 rounded-2xl shadow-md border border-[#5b00b2]/20 hover:shadow-xl transition flex items-center justify-center">
                <p className="text-gray-700 font-medium">{job}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-[#5b00b2] mb-6">Tertarik Bergabung di Jurusan Manajemen Perkantoran?</h3>
          <a href="/pendaftaran" className="inline-block bg-gradient-to-r from-yellow-500 to-yellow-400 hover:opacity-90 text-black font-semibold px-10 py-3 rounded-full shadow-md transition">
            Daftar Sekarang
          </a>
        </div>
      </div>
    </section>
  );
}
