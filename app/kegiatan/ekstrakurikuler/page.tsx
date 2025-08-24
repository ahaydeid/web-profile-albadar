// app/kegiatan/ekstrakurikuler/page.tsx
import Image from "next/image";

export default function EkstrakurikulerPage() {
  const ekstrakurikuler = [
    {
      name: "PMR",
      img: "/assets/images/images.png",
      desc: "Palang Merah Remaja, melatih kepedulian dan keterampilan pertolongan pertama.",
    },
    {
      name: "Pramuka",
      img: "/assets/images/images.png",
      desc: "Pembinaan jiwa kepemimpinan, kemandirian, dan kebersamaan melalui kegiatan kepramukaan.",
    },
    {
      name: "Paskibraka",
      img: "/assets/images/images.png",
      desc: "Pelatihan baris-berbaris dan pengibaran bendera dengan disiplin tinggi.",
    },
    {
      name: "Jepang Club",
      img: "/assets/images/images.png",
      desc: "Belajar bahasa dan budaya Jepang secara menyenangkan.",
    },
    {
      name: "Pencak Silat",
      img: "/assets/images/images.png",
      desc: "Seni bela diri tradisional untuk melatih fisik, mental, dan sportivitas.",
    },
    {
      name: "Futsal",
      img: "/assets/images/images.png",
      desc: "Olahraga tim untuk meningkatkan kebugaran dan kerja sama.",
    },
    {
      name: "Marawis",
      img: "/assets/images/images.png",
      desc: "Kesenian musik Islami yang menumbuhkan rasa cinta budaya.",
    },
    {
      name: "Volly Ball",
      img: "/assets/images/images.png",
      desc: "Olahraga bola tangan beregu yang mengasah kerja sama dan ketangkasan.",
    },
    {
      name: "Sinematografi",
      img: "/assets/images/images.png",
      desc: "Belajar membuat film, video kreatif, dan dokumentasi kegiatan.",
    },
    {
      name: "Al Badar Media",
      img: "/assets/images/images.png",
      desc: "Pengelolaan media sekolah dan pembuatan konten kreatif.",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative h-[300px] md:h-[400px] w-full">
        <Image src="/assets/images/images.png" alt="Ekstrakurikuler" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">Ekstrakurikuler</h1>
            <p className="max-w-2xl mx-auto text-lg text-gray-200">Mengembangkan minat, bakat, dan kreativitas siswa melalui berbagai kegiatan yang menyenangkan dan bermanfaat.</p>
          </div>
        </div>
      </section>

      {/* List Ekstrakurikuler */}
      <section className="max-w-7xl mx-auto py-16 px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {ekstrakurikuler.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition transform">
              <div className="relative h-48 w-full">
                <Image src={item.img} alt={item.name} fill className="object-cover" />
              </div>
              <div className="p-5">
                <h2 className="text-xl font-semibold text-blue-700 mb-2">{item.name}</h2>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
