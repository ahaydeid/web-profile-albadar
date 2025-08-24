// app/page.tsx
import Image from "next/image";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
// import { HiOutlineBookOpen, HiOutlineStar } from "react-icons/hi";
// import { PiHeartFill } from "react-icons/pi";
import "./globals.css";
// import Link from "next/link";

// Data Wali Murid (JSON)
const waliMurid = [
  {
    foto: "/assets/images/wali1.jpg",
    nama: "Budi Santoso",
    deskripsi: "Sekolah ini luar biasa! Anak saya jadi lebih semangat belajar setiap hari dan hasilnya pun semakin meningkat.",
  },
  {
    foto: "/assets/images/wali2.jpg",
    nama: "Siti Aminah",
    deskripsi: "Guru-gurunya sangat sabar dan perhatian. Lingkungannya aman dan nyaman untuk anak-anak.",
  },
  {
    foto: "/assets/images/wali3.jpg",
    nama: "Ahmad Fauzi",
    deskripsi: "Program pembelajarannya kreatif, membuat anak saya jadi lebih percaya diri dan aktif di kelas.",
  },
  {
    foto: "/assets/images/wali4.jpeg",
    nama: "Maria Clara",
    deskripsi: "Komunikasi antara sekolah dan orang tua sangat baik. Saya selalu tahu perkembangan anak setiap minggunya.",
  },
  {
    foto: "/assets/images/wali4.jpeg",
    nama: "Maria Clara",
    deskripsi: "Komunikasi antara sekolah dan orang tua sangat baik. Saya selalu tahu perkembangan anak setiap minggunya.",
  },
];

export default function HomePage() {
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="py-12 px-20 relative overflow-hidden">
        {/* Background SVG wave */}
        <div className="absolute inset-x-0 bottom-0 h-40 -z-10 pointer-events-none">
          <Image src="/assets/images/hero2.svg" alt="Wave" width={1920} height={160} className="absolute bottom-0 left-0 w-full pointer-events-none" />
        </div>
        {/* Optional SVG tambahan */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-no-repeat bg-bottom bg-contain pointer-events-none" style={{ backgroundImage: "url('/assets/images/hero2.svg')" }}></div>

        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          {/* Left */}
          <div className="max-w-lg">
            <h2 className="text-3xl font-medium">Selamat datang di</h2>
            <h1 className="text-6xl font-bold" style={{ textShadow: "2px 1px 2px rgba(0,0,0,0.37)" }}>
              <span className="text-purple-700">SMKS Al Badar </span>
              <span className="text-[#FFD700]">Tangerang</span>
            </h1>
            <p className="italic text-gray-400 text-lg font-bold mt-5">&quot;Lorem Ipsum is simply dummy text&quot;</p>
            {/* <div className="flex items-center mt-15 gap-2 text-gray-700">
              <FaMapMarkerAlt className="text-red-500" />
              <span>Sukamantri, Kec. Balajara, Kabupaten Tangerang, Banten 15810</span>
            </div> */}

            {/* Social */}
            <div className="flex gap-4 mt-15">
              <a href="https://wa.me/628123456789" target="_blank" rel="noopener noreferrer">
                <Image src="/assets/icons/wa.png" alt="WhatsApp" width={40} height={40} className="hover:opacity-80 transition" />
              </a>

              <a href="mailto:email@example.com">
                <Image src="/assets/icons/mail.png" alt="Email" width={40} height={40} className="hover:opacity-80 transition" />
              </a>

              <a href="https://instagram.com/username" target="_blank" rel="noopener noreferrer">
                <Image src="/assets/icons/instagram.png" alt="Instagram" width={40} height={40} className="hover:opacity-80 transition" />
              </a>
            </div>
            <div className="flex gap-4 mt-4">
              <button className="bg-blue-600 text-white font-bold px-6 py-3 md:px-8 md:py-3 text-sm sm:text-lg rounded-full">Kontak Kami</button>
              <button className="bg-yellow-400 text-black font-bold px-6 py-3 md:px-8 md:py-3 text-sm sm:text-lg">Daftar Sekarang</button>
            </div>
          </div>

          {/* Right */}
          <div className="relative hidden lg:block">
            <div className="absolute -z-10 w-72 h-72 bg-yellow-400 rounded-full top-0 right-0"></div>
            <Image src="/assets/images/santri.png" alt="Kepala Sekolah" width={400} height={400} className="relative z-10" />
            <p className="mt-4 font-bold text-[#FFD700] text-2xl border-b border-white" style={{ textShadow: "2px 1px 2px rgba(0,0,0,0.37)" }}>
              KH. Waskurni, S.Ag., M.Si.
            </p>
            <p className="text-lg text-white">Kepala Yayasan Al Badar</p>
          </div>
        </div>
      </section>

      {/* Sekilas Tentang Kita */}
      <section className="bg-[#a000ff] text-white py-16 px-3 md:px-30 relative">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 leading-tight">
            Sekilas Tentang <span className="text-yellow-300">SMK AL Badar Tangerang</span>
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Gambar */}
            <Image src="/assets/images/contoh.jpg" alt="Tentang Kita" width={320} height={320} className="rounded-2xl shadow-xl object-cover" />

            {/* Konten */}
            <div className="md:ml-8 max-w-2xl">
              <p className="mb-6 text-lg leading-relaxed text-justify opacity-90">
                Berawal dari sebuah keprihatinan, muncul sebuah pemikiran dan terbentuklah sebuah tekad. Keprihatinan melihat materialisme dan konsumerisme yang dibuktikan hampir sebagian besar tanah dan sawah habis dijual tanpa memikirkan
                anak cucu ke depan. Mau tinggal dimana mereka? Mau diwariskan apa anak cucu kita nanti? Nampaknya nyaris tidak ada pikiran saat itu, yang ada hanya bagaimana sawah dan tanah cepat jadi uang. Akhirnya muncul sebuah pemikiran,
                tidak ada solusi lain kecuali mereka harus dibekali ilmu yang ...
              </p>

              <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full shadow-md transition-transform transform hover:scale-105">Selengkapnya</button>
            </div>
          </div>
        </div>
      </section>

      {/* Jurusan */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-center text-3xl font-bold mb-12 relative after:content-[''] after:block after:h-[3px] after:w-16 after:bg-yellow-400 after:mx-auto">Jurusan</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { title: "Manajemen Perkantoran", color: "bg-white" },
              { title: "Teknik Kendaraan Ringan", color: "bg-white" },
              { title: "Teknik Sepeda Motor", color: "bg-white" },
              { title: "Kuliner (Tata Boga)", color: "bg-white" },
            ].map((item, idx) => (
              <div key={idx} className={`${item.color} rounded-2xl p-6 text-center shadow hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 w-72 border border-gray-200`}>
                <div className="bg-gradient-to-br from-yellow-200 to-yellow-400 h-40 mb-4 rounded-lg flex items-center justify-center text-gray-700 font-semibold">Gambar</div>
                <h3 className="font-bold text-lg text-gray-800">{item.title}</h3>
                <p className="text-sm text-gray-500 mt-2">Program unggulan dengan kurikulum modern berbasis industri.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Unggulan */}
      <section className="bg-gradient-to-br from-purple-700 via-purple-800 to-purple-900 text-white py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 relative inline-block">
            Program Unggulan
            <span className="block h-[4px] w-16 bg-yellow-400 mx-auto mt-3 rounded-full"></span>
          </h2>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">Mengintegrasikan keahlian vokasional, pembinaan karakter Islami, dan peluang kerja yang luas untuk mencetak lulusan unggul.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Deskripsi */}
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl text-left hover:shadow-yellow-400/40 transition">
            <p className="text-lg leading-relaxed">
              <strong>SMK Al Badar</strong> dirancang untuk memadukan keahlian vokasional dengan pembinaan karakter Islami. Siswa dibekali keterampilan di bidang
              <span className="text-yellow-400 font-semibold"> Manajemen Perkantoran, Kuliner (Tata Boga), Teknik Kendaraan Ringan,</span> dan
              <span className="text-yellow-400 font-semibold"> Teknik Bisnis Sepeda Motor</span>, serta mendapatkan penguatan spiritual melalui
              <span className="text-yellow-400 font-semibold"> kajian kitab kuning, tahfiz Qur’an,</span> dan pembentukan akhlak mulia.
            </p>
            <p className="mt-4 text-lg leading-relaxed">
              Dengan pendidikan <span className="text-yellow-400 font-bold">gratis hingga lulus</span> dan dukungan fasilitas modern, siswa siap menghadapi dunia kerja. Kolaborasi dengan perusahaan nasional membuka jalan karier melalui
              <span className="text-yellow-400 font-semibold"> Job Fair</span> dan
              <span className="text-yellow-400 font-semibold"> LSP (Lembaga Sertifikasi Profesi)</span>.
            </p>
          </div>

          {/* Icon Box */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: "🏢", label: "Hiring Partner" },
              { icon: "📖", label: "Kajian Kitab Kuning" },
              { icon: "❤️", label: "Pembinaan Akhlak" },
              { icon: "⭐", label: "Prestasi Unggul" },
            ].map((prog, idx) => (
              <div key={idx} className="bg-white text-purple-800 rounded-2xl shadow-lg hover:shadow-yellow-400/40 transition transform hover:-translate-y-2 p-6 flex flex-col items-center justify-center text-center">
                <div className="text-4xl mb-3">{prog.icon}</div>
                <p className="font-bold text-lg">{prog.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aktivitas */}
      <section className="py-16 px-4 md:px-10 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Judul */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Aktivitas <span className="text-yellow-500">Kami</span>
            </h2>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">Berbagai kegiatan menarik dan inspiratif yang mendukung pengembangan karakter, kreativitas, dan kompetensi peserta didik.</p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Gambar besar */}
            <div className="relative bg-gray-200 rounded-2xl overflow-hidden md:col-span-2 md:row-span-2 group">
              <Image src="/assets/images/aktivitas/act1.jpeg" alt="Kegiatan utama" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white text-lg font-semibold">Kegiatan Utama</span>
              </div>
            </div>

            {/* Kolom kanan atas */}
            <div className="relative bg-gray-200 rounded-2xl overflow-hidden group h-48">
              <Image src="/assets/images/aktivitas/act2.jpeg" alt="Ekstrakurikuler" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white text-sm md:text-base font-medium">Ekstrakurikuler</span>
              </div>
            </div>

            <div className="relative bg-gray-200 rounded-2xl overflow-hidden group h-48">
              <Image src="/assets/images/aktivitas/act2.jpeg" alt="Praktek Lapangan" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white text-sm md:text-base font-medium">Praktek Lapangan</span>
              </div>
            </div>

            {/* Kolom kanan bawah */}
            <div className="relative bg-gray-200 rounded-2xl overflow-hidden group h-48">
              <Image src="/assets/images/aktivitas/act2.jpeg" alt="Kegiatan Sosial" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white text-sm md:text-base font-medium">Kegiatan Sosial</span>
              </div>
            </div>

            <div className="relative bg-gray-200 rounded-2xl overflow-hidden group h-48">
              <Image src="/assets/images/aktivitas/act2.jpeg" alt="Prestasi Siswa" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white text-sm md:text-base font-medium">Prestasi Siswa</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-t-[3px] border-[#DDDDDD] w-[90%] mx-auto" />

      {/* Kata Wali Murid */}
      <section className="py-16 px-3 md:px-10 mt-20">
        <div className="text-center">
          <h1 className="text-center text-3xl font-bold mb-12 underline decoration-yellow-400">Apa Kata Wali Murid?</h1>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">Testimoni nyata dari para wali murid tentang pengalaman dan kepuasan mereka terhadap layanan dan pendidikan yang diberikan.</p>
        </div>

        {/* Wrapper Slider */}
        <div className="overflow-hidden pb-5 relative w-full mt-10">
          {/* SLIDE KIRI */}
          <div className="flex animate-slide gap-5">
            {waliMurid.map((wali, idx) => (
              <div key={idx} className="flex bg-white shadow-md rounded-[100px_20px_20px_100px] p-4 md:p-[18px] h-auto md:h-[135px] w-full md:w-[650px] shrink-0">
                <div className="h-[80px] w-[80px] md:h-[100px] md:w-[100px] flex-shrink-0">
                  <Image src={wali.foto} width={100} height={100} alt={wali.nama} className="h-[80px] w-[80px] md:h-[100px] md:w-[100px] rounded-full object-cover bg-gray-300" />
                </div>
                <div className="pl-4 md:pl-8 flex flex-col justify-center">
                  <p className="text-sm md:text-[15px] leading-[1.5em]">“{wali.deskripsi}”</p>
                  <h6 className="mt-2 md:mt-[15px] font-bold">~ {wali.nama}</h6>
                </div>
              </div>
            ))}
            {waliMurid.map((wali, idx) => (
              <div key={idx} className="flex bg-white shadow-md rounded-[100px_20px_20px_100px] p-4 md:p-[18px] h-auto md:h-[135px] w-full md:w-[650px] shrink-0">
                <div className="h-[80px] w-[80px] md:h-[100px] md:w-[100px] flex-shrink-0">
                  <Image src={wali.foto} width={100} height={100} alt={wali.nama} className="h-[80px] w-[80px] md:h-[100px] md:w-[100px] rounded-full object-cover bg-gray-300" />
                </div>
                <div className="pl-4 md:pl-8 flex flex-col justify-center">
                  <p className="text-sm md:text-[15px] leading-[1.5em]">“{wali.deskripsi}”</p>
                  <h6 className="mt-2 md:mt-[15px] font-bold">~ {wali.nama}</h6>
                </div>
              </div>
            ))}
          </div>

          {/* key={`rev-${idx}`} */}

          {/* SLIDE KANAN */}
          <div className="flex animate-slide-reverse gap-5 mt-5">
            {waliMurid
              .slice()
              .reverse()
              .map((wali, idx) => (
                <div
                  key={`rev-${idx}`}
                  className="flex bg-white shadow-md rounded-[100px_20px_20px_100px] 
                 p-4 md:p-[18px] h-auto md:h-[135px] w-full md:w-[650px] shrink-0"
                >
                  <div className="h-[80px] w-[80px] md:h-[100px] md:w-[100px] flex-shrink-0">
                    <Image src={wali.foto} width={100} height={100} alt={wali.nama} className="h-[80px] w-[80px] md:h-[100px] md:w-[100px] rounded-full object-cover bg-gray-300" />
                  </div>
                  <div className="pl-4 md:pl-8 flex flex-col justify-center">
                    <p className="text-sm md:text-[15px] leading-[1.5em]">“{wali.deskripsi}”</p>
                    <h6 className="mt-2 md:mt-[15px] font-bold">~ {wali.nama}</h6>
                  </div>
                </div>
              ))}

            {/* Duplikat untuk looping mulus */}
            {waliMurid
              .slice()
              .reverse()
              .map((wali, idx) => (
                <div
                  key={`revdup-${idx}`}
                  className="flex bg-white shadow-md rounded-[100px_20px_20px_100px] 
                 p-4 md:p-[18px] h-auto md:h-[135px] w-full md:w-[650px] shrink-0"
                >
                  <div className="h-[80px] w-[80px] md:h-[100px] md:w-[100px] flex-shrink-0">
                    <Image src={wali.foto} width={100} height={100} alt={wali.nama} className="h-[80px] w-[80px] md:h-[100px] md:w-[100px] rounded-full object-cover bg-gray-300" />
                  </div>
                  <div className="pl-4 md:pl-8 flex flex-col justify-center">
                    <p className="text-sm md:text-[15px] leading-[1.5em]">“{wali.deskripsi}”</p>
                    <h6 className="mt-2 md:mt-[15px] font-bold">~ {wali.nama}</h6>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      <hr className="border-t-[3px] border-[#DDDDDD] w-[90%] mx-auto" />

      {/* Kerjasama Perusahaan */}
      <section className="py-20 px-4 md:px-10 mt-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Kerjasama <span className="text-yellow-500">Perusahaan</span>
            </h2>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">Kami menjalin kerjasama strategis dengan berbagai perusahaan ternama untuk mendukung pengembangan kompetensi dan peluang karir peserta didik.</p>
          </div>

          {/* SLIDER */}
          <div className="overflow-hidden relative w-full">
            {[
              [
                { nama: "PT. Yamaha Motor Indonesia", logo: "/assets/images/logoperusahaan/yamaha.jpeg" },
                { nama: "PT. Citra Bina Maju Jaya", logo: "/assets/images/logoperusahaan/citrabina.jpg" },
                { nama: "PT. Rusli Jaya Mandiri", logo: "/assets/images/logoperusahaan/ruslijaya.png" },
                { nama: "PT. Bank Central Asia Tbk", logo: "/assets/images/logoperusahaan/bca.png" },
                { nama: "PT. Telekomunikasi Indonesia", logo: "/assets/images/logoperusahaan/telkom.webp" },
                { nama: "PT. Simetri Putra Perkasa", logo: "/assets/images/logoperusahaan/simetri.png" },
                { nama: "PT. Wings Surya", logo: "/assets/images/logoperusahaan/wings.png" },
                { nama: "PT. Herbatama Indo Perkasa", logo: "/assets/images/logoperusahaan/herba.png" },
                { nama: "Hotel Olive Tangerang", logo: null },
              ],
            ].map((row, rowIndex) => (
              <div key={rowIndex} className={`flex gap-16 py-3 items-center ${rowIndex === 0 ? "animate-slide" : "animate-slide-reverse"}`}>
                {row.concat(row).map((pt, index) => (
                  <div key={`${pt.nama}-${index}`} className="flex items-center gap-4 shrink-0 bg-white rounded-full px-6 py-3 shadow hover:shadow-lg hover:scale-105 transition duration-300">
                    {pt.logo ? (
                      <Image src={pt.logo} alt={pt.nama} width={80} height={80} className="object-contain w-16 md:w-20 h-16 md:h-20" priority />
                    ) : (
                      <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-gray-200 text-gray-500 text-xs rounded-full">NO LOGO</div>
                    )}
                    <span className="text-base md:text-lg font-semibold text-gray-700 whitespace-nowrap">{pt.nama}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <hr className="border-t-[3px] border-[#DDDDDD] w-[90%] mx-auto" /> */}

      {/* Hubungi Kami */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          {/* MAP */}
          <div className="flex flex-col">
            <div className="rounded-2xl overflow-hidden shadow-lg h-64 md:h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.435278684083!2d106.42082587459917!3d-6.206173393781628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e4203e9f8c11e7b%3A0x4ac748bdb0718b70!2sSMK%20AL-BADAR!5e0!3m2!1sid!2sid!4v1756051543968!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a href="https://maps.app.goo.gl/thVvcoRuaAiEzDTV8" target="_blank" rel="noopener noreferrer" className="mt-6 inline-block text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-xl shadow transition">
              Buka di Google Maps
            </a>
          </div>

          {/* KONTAK */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Hubungi Kami</h3>
            <ul className="space-y-5 text-gray-700 text-base">
              <li className="flex items-center gap-3">
                <MdPhone className="text-blue-600 text-lg" /> 0812-3456-7891
              </li>
              <li className="flex items-center gap-3">
                <MdEmail className="text-blue-600 text-lg" /> admin@albadar.ac.id
              </li>
              <li className="flex items-center gap-3">
                <FaWhatsapp className="text-green-500 text-lg" /> 0812-3456-7891
              </li>
              <li className="flex items-center gap-3">
                <FaInstagram className="text-pink-500 text-lg" /> @albadartangerang
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600">📍</span>
                <p className="leading-relaxed">SMK Al Badar Tangerang, Sukamantri, Kec. Balajara, Kabupaten Tangerang, Banten 15810</p>
              </li>
            </ul>
          </div>

          {/* FORM */}
          <form className="bg-white rounded-2xl shadow-lg p-8 space-y-5">
            <input type="text" placeholder="Nama" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none" />
            <input type="text" placeholder="No. HP" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none" />
            <textarea placeholder="Tulis pesan di sini..." rows={4} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none" />
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg shadow transition">Kirim Pesan</button>
          </form>
        </div>
      </section>
    </main>
  );
}
