import Image from "next/image";
import { School, Home, Users, Wrench, Cpu, Library, Church, Volleyball, LayoutDashboard, Activity } from "lucide-react";

export default function FasilitasPage() {
  const fasilitas = [
    {
      title: "Gedung Milik Sendiri",
      desc: "Bangunan sekolah permanen yang representatif, nyaman, dan mendukung kegiatan belajar mengajar.",
      icon: <School className="w-8 h-8 text-blue-600" />,
      img: "/assets/images/fasilitas/images.png",
    },
    {
      title: "Asrama Pesantren",
      desc: "Asrama modern untuk santri, lengkap dengan pembinaan akhlak, kajian kitab, dan kegiatan keagamaan.",
      icon: <Home className="w-8 h-8 text-blue-600" />,
      img: "/assets/images/fasilitas/images.png",
    },
    {
      title: "RPS TKR Otomotif",
      desc: "Ruang praktik standar industri untuk Teknik Kendaraan Ringan, dilengkapi peralatan otomotif terkini.",
      icon: <Wrench className="w-8 h-8 text-blue-600" />,
      img: "/assets/images/fasilitas/images.png",
    },
    {
      title: "Laboratorium Komputer",
      desc: "Lab komputer dengan koneksi internet untuk mendukung pembelajaran digital dan teknologi informasi.",
      icon: <Cpu className="w-8 h-8 text-blue-600" />,
      img: "/assets/images/fasilitas/images.png",
    },
    {
      title: "Bengkel Otomotif",
      desc: "Tempat praktik otomotif sesuai standar bengkel, mempersiapkan siswa menghadapi dunia kerja nyata.",
      icon: <Activity className="w-8 h-8 text-blue-600" />,
      img: "/assets/images/fasilitas/images.png",
    },
    {
      title: "Bengkel Sepeda Motor",
      desc: "Workshop khusus Teknik Bisnis Sepeda Motor (TBSM) dengan peralatan lengkap untuk praktik servis motor.",
      icon: <Wrench className="w-8 h-8 text-blue-600" />,
      img: "/assets/images/fasilitas/images.png",
    },
    {
      title: "Laboratorium Office",
      desc: "Lab khusus jurusan Manajemen Perkantoran untuk praktik administrasi modern dan digital office.",
      icon: <LayoutDashboard className="w-8 h-8 text-blue-600" />,
      img: "/assets/images/fasilitas/images.png",
    },
    {
      title: "Ruang Pertemuan",
      desc: "Aula serbaguna untuk kegiatan seminar, rapat, dan kegiatan siswa lainnya.",
      icon: <Users className="w-8 h-8 text-blue-600" />,
      img: "/assets/images/fasilitas/images.png",
    },
    {
      title: "Perpustakaan",
      desc: "Koleksi buku pelajaran, referensi, serta literatur keagamaan yang menunjang pembelajaran.",
      icon: <Library className="w-8 h-8 text-blue-600" />,
      img: "/assets/images/fasilitas/images.png",
    },
    {
      title: "Sarana Ibadah",
      desc: "Masjid/ mushola yang nyaman sebagai pusat kegiatan ibadah dan pembinaan akhlak siswa.",
      icon: <Church className="w-8 h-8 text-blue-600" />,
      img: "/assets/images/fasilitas/images.png",
    },
    {
      title: "Lapangan Olahraga",
      desc: "Lapangan serbaguna untuk olahraga basket, voli, dan kegiatan ekstrakurikuler.",
      icon: <Volleyball className="w-8 h-8 text-blue-600" />,
      img: "/assets/images/fasilitas/images.png",
    },
    {
      title: "Lapangan Futsal Vinyl Indoor",
      desc: "Fasilitas futsal indoor dengan lantai vinyl modern, mendukung prestasi olahraga siswa.",
      icon: <Volleyball className="w-8 h-8 text-blue-600" />,
      img: "/assets/images/fasilitas/images.png",
    },
    {
      title: "Ruang OSIS",
      desc: "Ruang khusus bagi organisasi siswa sebagai pusat kegiatan ekstrakurikuler dan kepemimpinan.",
      icon: <Users className="w-8 h-8 text-blue-600" />,
      img: "/assets/images/fasilitas/images.png",
    },
  ];

  return (
    <section className="min-h-screen bg-[#f9fbff]">
      {/* Hero */}
      <div className="relative bg-gradient-to-br from-[#2563eb] via-[#1e3a8a] to-[#1e40af] text-white overflow-hidden">
        {/* Background Ornaments */}
        <div className="absolute inset-0 opacity-20 bg-[url('/assets/pattern-dots.svg')] bg-cover" />
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-blue-400/30 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-indigo-500/20 blur-2xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
          {/* Text */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Fasilitas <span className="text-yellow-300 drop-shadow">SMK Al Badar</span>
            </h1>
            <p className="text-gray-200 max-w-xl mx-auto md:mx-0 text-lg leading-relaxed">
              Berbagai fasilitas modern dan representatif tersedia untuk mendukung proses belajar, praktik, kegiatan keagamaan, hingga pengembangan minat dan bakat siswa.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
              <a href="#daftar-fasilitas" className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-6 py-3 rounded-full shadow-md transition">
                Lihat Fasilitas
              </a>
              <a href="/pendaftaran" className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white font-semibold px-6 py-3 rounded-full shadow-md border border-white/30 transition">
                Daftar Sekarang
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative w-full h-72 md:h-96 rounded-3xl overflow-hidden shadow-2xl">
            <Image src="/assets/images/images.png" alt="Fasilitas unggulan" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-transparent" />
          </div>
        </div>
      </div>

      {/* Grid Fasilitas */}
      <div className="max-w-7xl mx-auto py-16 px-6 md:px-10" id="daftar-fasilitas">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {fasilitas.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden border border-gray-100">
              <div className="relative w-full h-44">
                <Image src={item.img} alt={item.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  {item.icon}
                  <h3 className="text-xl font-semibold text-[#2563eb]">{item.title}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
