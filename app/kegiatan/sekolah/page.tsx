// app/kegiatan/sekolah/page.tsx
import Image from "next/image";

export default function KegiatanSekolah() {
  const kegiatanPondok = ["Tafsir Qur’an", "Amil dan Jurumiyah", "Tijanud Durori", "Shulamu Thaufid", "Tamhqihul Qaul", "Bulugul Marom", "Sittin", "Riyadul Badi’ah", "Ahlakul Banin Wa Bannat"];

  const kitabKuning = ["Amtsilati", "Muhadoroh", "Jamiyatul Quro", "Jamiyatul Hufadz", "Leadership", "Nahwu & Sorof", "Kitab Kuning", "Manasik Haji", "Amaliah Imamah", "Tahujul Mayit"];

  const ekstrakurikuler = ["PMR", "Pramuka", "Paskibraka", "Jepang Club", "Pencak Silat", "Futsal", "Marawis", "Volly Ball", "Sinematografi", "Al Badar Media"];

  const jobFair = [
    "PT Yamaha Motor Indonesia",
    "PT Citra Bina Maju Jaya",
    "PT Rusli Jaya Mandiri",
    "PT Bank Central Asia Tbk",
    "PT Telekomunikasi Indonesia",
    "PT Simetri Putra Perkasa",
    "PT Wings Surya",
    "PT Herbatama Indo Perkasa",
    "Hotel Olive Tangerang",
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Kegiatan Sekolah & Pondok Pesantren Al Badar</h1>
        <p className="max-w-3xl mx-auto text-lg">Menumbuhkan potensi akademik, keterampilan, dan karakter islami melalui kegiatan pondok, kajian kitab kuning, ekstrakurikuler, dan job fair.</p>
      </section>

      {/* Kegiatan Pondok */}
      <section className="max-w-6xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-bold mb-6 text-blue-700">Kegiatan Pondok</h2>
        <ul className="grid md:grid-cols-2 gap-4 list-disc list-inside bg-white p-6 rounded-2xl shadow">
          {kegiatanPondok.map((item, i) => (
            <li key={i} className="text-gray-700">
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Kajian Kitab Kuning */}
      <section className="max-w-6xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-bold mb-6 text-blue-700">Kajian Kitab Kuning</h2>
        <ul className="grid md:grid-cols-2 gap-4 list-disc list-inside bg-white p-6 rounded-2xl shadow">
          {kitabKuning.map((item, i) => (
            <li key={i} className="text-gray-700">
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Ekstrakurikuler */}
      <section className="max-w-6xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-bold mb-6 text-blue-700">Ekstrakurikuler</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {ekstrakurikuler.map((item, i) => (
            <div key={i} className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
              <p className="text-gray-800 font-medium">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Job Fair */}
      <section className="max-w-6xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-bold mb-6 text-blue-700">Job Fair</h2>
        <p className="text-gray-600 mb-4">SMK Al Badar bekerja sama dengan berbagai perusahaan ternama untuk penempatan lulusan ke dunia kerja.</p>
        <ul className="grid sm:grid-cols-2 gap-4 list-disc list-inside bg-white p-6 rounded-2xl shadow">
          {jobFair.map((item, i) => (
            <li key={i} className="text-gray-700">
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Galeri */}
      <section className="max-w-6xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-bold mb-6 text-blue-700">Galeri</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div key={n} className="relative w-full h-48 rounded-xl overflow-hidden shadow">
              <Image src={`/images/kegiatan-${n}.jpg`} alt={`Kegiatan ${n}`} fill className="object-cover hover:scale-105 transition-transform" />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
