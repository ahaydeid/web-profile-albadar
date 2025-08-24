import Image from "next/image";

export default function KulinerPage() {
  return (
    <section className="min-h-screen bg-[#fffaf5]">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#d946ef] to-[#ec4899] text-white py-20 px-6 md:px-16 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/assets/images/images.png" alt="Kuliner background" fill className="object-cover" />
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 relative z-10">
          Kuliner <span className="text-yellow-300">(Tata Boga)</span>
        </h1>
        <p className="max-w-3xl mx-auto text-base md:text-lg text-gray-200 relative z-10">
          Jurusan yang membekali siswa dengan keterampilan memasak, tata hidang, pengolahan makanan modern dan tradisional, serta manajemen usaha kuliner agar siap berkarier di industri perhotelan, restoran, maupun wirausaha.
        </p>
      </div>

      <div className="max-w-7xl mx-auto py-16 px-4 md:px-10 space-y-20">
        {/* Profil Jurusan */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#ec4899] mb-6">Profil Jurusan</h2>
            <p className="text-gray-700 leading-relaxed">
              Kompetensi Keahlian <span className="font-semibold">Kuliner (Tata Boga)</span>
              mempersiapkan peserta didik agar memiliki pengetahuan, keterampilan, dan sikap dalam mengolah makanan, mengelola usaha kuliner, serta memahami standar kebersihan dan keamanan pangan. Lulusan jurusan ini mampu bekerja di dunia
              industri kuliner, hotel, restoran, katering, maupun menjadi wirausaha mandiri.
            </p>
          </div>
          <div className="relative w-full h-72 rounded-2xl overflow-hidden shadow-lg">
            <Image src="/assets/images/images.png" alt="Ilustrasi Kuliner" fill className="object-cover" />
          </div>
        </div>

        {/* Kompetensi */}
        <div>
          <h2 className="text-3xl font-bold text-[#ec4899] mb-10 text-center">Kompetensi yang Dipelajari</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {["Pengolahan makanan Indonesia, Asia, & Barat", "Teknik Pastry & Bakery (roti, kue, dessert)", "Tata Hidang & Penyajian Makanan", "Gizi & Sanitasi Makanan", "Dekorasi & Garnishing", "Manajemen Usaha Kuliner & Catering"].map(
              (item, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-md border border-[#ec4899]/20 hover:shadow-lg transition flex items-center">
                  <span className="w-3 h-3 rounded-full bg-[#ec4899] mr-3"></span>
                  <p className="text-gray-700">{item}</p>
                </div>
              )
            )}
          </div>
        </div>

        {/* Prospek Kerja */}
        <div className="bg-white rounded-3xl shadow-lg p-10">
          <h2 className="text-3xl font-bold text-[#ec4899] mb-10 text-center">Prospek Kerja</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
            {["Chef di Hotel & Restoran", "Tenaga Pastry & Bakery", "Barista & Beverage Specialist", "Staf Catering & Tata Hidang", "Entrepreneur di bidang Kuliner", "Studi lanjut di bidang Perhotelan & Gizi"].map((job, i) => (
              <div key={i} className="bg-gradient-to-br from-[#fffaf5] to-white p-8 rounded-2xl shadow-md border border-[#ec4899]/20 hover:shadow-xl transition flex items-center justify-center">
                <p className="text-gray-700 font-medium">{job}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-[#ec4899] mb-6">Tertarik Bergabung di Jurusan Kuliner (Tata Boga)?</h3>
          <a href="/pendaftaran" className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-300 hover:opacity-90 text-black font-semibold px-10 py-3 rounded-full shadow-md transition">
            Daftar Sekarang
          </a>
        </div>
      </div>
    </section>
  );
}
