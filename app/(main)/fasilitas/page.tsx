import Image from "next/image";
import Link from "next/link";

export default function FasilitasPage() {
  const fasilitas = [
    {
      title: "Gedung Milik Sendiri",
      desc: "Bangunan sekolah permanen yang representatif, nyaman, dan mendukung kegiatan belajar mengajar.",
      img: "/assets/images/fasilitas/images.png",
    },
    {
      title: "Asrama Pesantren",
      desc: "Asrama modern untuk santri, lengkap dengan pembinaan akhlak, kajian kitab, dan kegiatan keagamaan.",
      img: "/assets/images/fasilitas/images.png",
    },
    {
      title: "RPS TKR Otomotif",
      desc: "Ruang praktik standar industri untuk Teknik Kendaraan Ringan, dilengkapi peralatan otomotif terkini.",
      img: "/assets/images/fasilitas/images.png",
    },
    {
      title: "Laboratorium Komputer",
      desc: "Lab komputer dengan koneksi internet untuk mendukung pembelajaran digital dan teknologi informasi.",
      img: "/assets/images/fasilitas/images.png",
    },
    {
      title: "Bengkel Otomotif",
      desc: "Tempat praktik otomotif sesuai standar bengkel, mempersiapkan siswa menghadapi dunia kerja nyata.",
      img: "/assets/images/fasilitas/images.png",
    },
    {
      title: "Bengkel Sepeda Motor",
      desc: "Workshop khusus Teknik Bisnis Sepeda Motor (TBSM) dengan peralatan lengkap untuk praktik servis motor.",
      img: "/assets/images/fasilitas/images.png",
    },
    {
      title: "Laboratorium Office",
      desc: "Lab khusus jurusan Manajemen Perkantoran untuk praktik administrasi modern dan digital office.",
      img: "/assets/images/fasilitas/images.png",
    },
    {
      title: "Ruang Pertemuan",
      desc: "Aula serbaguna untuk kegiatan seminar, rapat, dan kegiatan siswa lainnya.",
      img: "/assets/images/fasilitas/images.png",
    },
    {
      title: "Perpustakaan",
      desc: "Koleksi buku pelajaran, referensi, serta literatur keagamaan yang menunjang pembelajaran.",
      img: "/assets/images/fasilitas/images.png",
    },
    {
      title: "Sarana Ibadah",
      desc: "Masjid/ mushola yang nyaman sebagai pusat kegiatan ibadah dan pembinaan akhlak siswa.",
      img: "/assets/images/fasilitas/images.png",
    },
    {
      title: "Lapangan Olahraga",
      desc: "Lapangan serbaguna untuk olahraga basket, voli, dan kegiatan ekstrakurikuler.",
      img: "/assets/images/fasilitas/images.png",
    },
    {
      title: "Lapangan Futsal Vinyl Indoor",
      desc: "Fasilitas futsal indoor dengan lantai vinyl modern, mendukung prestasi olahraga siswa.",
      img: "/assets/images/fasilitas/images.png",
    },
    {
      title: "Ruang OSIS",
      desc: "Ruang khusus bagi organisasi siswa sebagai pusat kegiatan ekstrakurikuler dan kepemimpinan.",
      img: "/assets/images/fasilitas/images.png",
    },
  ];

  return (
    <main className="min-h-screen bg-white font-fredoka">
      {/* Hero Section */}
      <section className="relative bg-[#3B2F63] text-white py-24 px-6 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-yellow-400 rounded-full blur-3xl opacity-20" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-400 rounded-full blur-3xl opacity-20" />
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-yellow-400 text-[#3B2F63] rounded-full text-xs font-bold mb-8 uppercase tracking-[0.2em]">
            SARANA & PRASARANA
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Fasilitas <span className="text-yellow-400">SMK Al-Badar Dangdeur</span>
          </h1>
          <p className="text-lg md:text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed font-medium">
            Mencukupi kebutuhan belajar, praktik, dan pengembangan minat bakat dengan fasilitas yang representatif dan berstandar industri.
          </p>
        </div>
      </section>

      {/* Intro & Grid Fasilitas */}
      <div className="max-w-7xl mx-auto py-24 px-6 md:px-10" id="daftar-fasilitas">
        <div className="text-center mb-16">
           <h2 className="text-3xl md:text-4xl font-extrabold text-[#3B2F63] mb-4">Lingkungan Belajar Ideal</h2>
           <p className="text-slate-500 max-w-xl mx-auto font-medium">Kami terus berinvestasi pada sarana pendukung pendidikan untuk kenyamanan dan kualitas belajar terbaik bagi siswa.</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {fasilitas.map((item, i) => (
            <div key={i} className="group bg-white rounded-xl shadow-sm hover:bg-[#3B2F63] hover:text-white hover:shadow-md transition-all duration-300 overflow-hidden border border-slate-100 flex flex-col">
              <div className="relative w-full h-48 overflow-hidden">
                <Image 
                  src={item.img} 
                  alt={item.title} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-105" 
                />
              </div>
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors uppercase tracking-tight">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed group-hover:text-white font-medium opacity-80 transition-colors">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <section className="pb-24 px-6 text-center">
        <div className="max-w-4xl mx-auto bg-slate-50 rounded-2xl p-12 md:p-16 border border-slate-100 shadow-sm relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-black text-[#3B2F63] mb-6">
              Ingin melihat fasilitas kami secara langsung?
            </h3>
            <p className="text-slate-600 mb-8 text-lg font-medium max-w-2xl mx-auto">
              Kunjungi kampus SMK Al-Badar dan rasakan langsung lingkungan belajar yang inspiratif dan mendukung masa depanmu.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/pendaftaran" className="bg-yellow-400 hover:bg-yellow-300 text-[#3B2F63] px-10 py-4 rounded-full font-bold text-lg shadow-lg transition transform hover:scale-105 active:scale-95">
                Daftar Sekarang
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
