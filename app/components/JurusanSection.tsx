import Link from "next/link";
import Image from "next/image";

export default function JurusanSection() {
  const jurusan = [
    {
      title: "Manajemen Perkantoran",
      desc: "Membekali siswa dengan keterampilan administrasi & teknologi perkantoran modern.",
      img: "/assets/images/images.png",
      color: "from-purple-200 via-purple-100 to-white",
      accent: "group-hover:text-purple-600",
      accentColor: "bg-purple-500",
      href: "/program/mp",
    },
    {
      title: "Teknik Kendaraan Ringan",
      desc: "Fokus pada perawatan, perbaikan mesin, dan teknologi otomotif roda empat.",
      img: "/assets/images/images.png",
      color: "from-blue-200 via-blue-100 to-white",
      accent: "group-hover:text-blue-600",
      accentColor: "bg-blue-500",
      href: "/program/tkr",
    },
    {
      title: "Teknik Sepeda Motor",
      desc: "Menguasai teknologi perawatan & perbaikan sepeda motor modern.",
      img: "/assets/images/images.png",
      color: "from-green-200 via-green-100 to-white",
      accent: "group-hover:text-green-600",
      accentColor: "bg-green-500",
      href: "/program/tsm",
    },
    {
      title: "Kuliner (Tata Boga)",
      desc: "Mengasah keterampilan kuliner, pastry, hingga tata hidang profesional.",
      img: "/assets/images/images.png",
      color: "from-pink-200 via-pink-100 to-white",
      accent: "group-hover:text-pink-600",
      accentColor: "bg-pink-500",
      href: "/program/kuliner",
    },
  ];

  return (
    <section className="py-20 from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Title */}
        <h2 className="text-center text-4xl font-extrabold text-gray-900 mb-16 relative">
          Jurusan
          <span className="block mx-auto mt-4 h-1 w-24 bg-yellow-400 rounded-full"></span>
        </h2>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-10">
          {jurusan.map((item, idx) => (
            <Link key={idx} href={item.href} className="group relative w-full sm:w-[300px] md:w-[30%] max-w-sm rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
              {/* Image */}
              <div className={`relative h-48 bg-gradient-to-br ${item.color} flex items-center justify-center overflow-hidden`}>
                <Image src={item.img} alt={item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className={`text-lg font-bold text-gray-900 transition ${item.accent}`}>{item.title}</h3>
                <p className="text-sm text-gray-600 mt-3 leading-relaxed">{item.desc}</p>
              </div>

              {/* Hover accent (dinamis sesuai jurusan) */}
              <div className={`absolute inset-x-0 bottom-0 h-1 ${item.accentColor} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
