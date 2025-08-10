// app/page.tsx
import Image from "next/image";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import { HiOutlineBookOpen, HiOutlineStar } from "react-icons/hi";
import { PiHeartFill } from "react-icons/pi";
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
              <span className="text-purple-700">SMK Al Badar </span>
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
              <button className="bg-blue-600 text-white font-bold px-8 py-3 rounded-full">Kontak Kami</button>
              <button className="bg-yellow-400 text-black font-bold px-8 py-3">Daftar Sekarang</button>
            </div>
          </div>

          {/* Right */}
          <div className="relative hidden lg:block">
            <div className="absolute -z-10 w-72 h-72 bg-yellow-400 rounded-full top-0 right-0"></div>
            <Image src="/assets/images/santri.png" alt="Kepala Sekolah" width={400} height={400} className="relative z-10" />
            <p className="mt-4 font-bold text-[#FFD700] text-2xl border-b border-white" style={{ textShadow: "2px 1px 2px rgba(0,0,0,0.37)" }}>
              Hj. Airin Rachmi Diani
            </p>
            <p className="text-lg text-white">Kepala SMK Al Badar</p>
          </div>
        </div>
      </section>

      {/* Sekilas Tentang Kita */}
      <section className="bg-[#a000ff] text-white py-16 px-3 md:px-30 relative">
        <div className="max-w-7xl mx-auto px-4 text-center md:text-left">
          <h2 className="text-3xl font-bold text-center mb-10">Sekilas Tentang SMK AL Badar Tangerang</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <Image src="/assets/images/contoh.jpg" alt="Tentang Kita" width={280} height={280} className="rounded-lg" />
            <div className="ml-10">
              <p className="mb-4 text-justify">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. and more recently with desktop publishing software like Aldus PageMaker including versions of
                Lorem
              </p>
              <button className="bg-yellow-400 text-black px-4 py-2 rounded-full">Selengkapnya</button>
            </div>
          </div>
        </div>
      </section>

      {/* Jurusan */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center text-3xl font-bold mb-12 relative after:content-[''] after:block after:h-[3px] after:w-12 after:bg-yellow-400 after:mx-auto">Jurusan</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Manajemen Perkantoran", color: "bg-gray-100" },
              { title: "Teknik Kendaraan Ringan", color: "bg-yellow-100" },
              { title: "Teknik Sepeda Motor", color: "bg-blue-100" },
            ].map((item, idx) => (
              <div key={idx} className={`${item.color} rounded-lg p-6 text-center shadow`}>
                <div className="bg-gray-300 h-40 mb-4 rounded"></div>
                <h3 className="font-bold">{item.title}</h3>
                <p className="text-sm text-gray-600 mt-2">Lorem ipsum is simply dummy text...</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Unggulan */}
      <section className="bg-purple-700 px-3 md:px-30 text-white py-16">
        <h2 className="text-center text-3xl font-bold mb-12 relative after:content-[''] after:block after:h-[3px] after:w-12 after:bg-yellow-400 after:mx-auto">Program Unggulan</h2>
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <p className="text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries
            </p>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4">
            {[
              { icon: <HiOutlineBookOpen />, label: "Tahfidz" },
              { icon: "📚", label: "Bahasa Arab" },
              { icon: <PiHeartFill />, label: "Akhlak" },
              { icon: <HiOutlineStar />, label: "Prestasi" },
            ].map((prog, idx) => (
              <div key={idx} className="bg-white text-black rounded-full px-4 py-2 flex items-center gap-2 font-bold">
                {prog.icon}
                {prog.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aktivitas */}
      <section className="py-16 px-3 md:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-3xl font-bold mb-12 underline decoration-yellow-400">Aktivitas</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Gambar besar */}
            <div className="bg-gray-300 rounded-lg h-80 md:col-span-2 md:row-span-2"></div>

            {/* Gambar kecil */}
            <div className="bg-gray-200 rounded-lg h-40"></div>
            <div className="bg-gray-200 rounded-lg h-40"></div>
            <div className="bg-gray-200 rounded-lg h-40"></div>
            <div className="bg-gray-200 rounded-lg h-40"></div>
          </div>
        </div>
      </section>

      <hr className="border-t-[3px] border-[#DDDDDD] w-[90%] mx-auto" />

      {/* Kata Wali Murid */}
      <section className="py-16 px-3 md:px-10 mt-20">
        <div className="text-center">
          <h1 className="text-center text-3xl font-bold mb-12 underline decoration-yellow-400">Apa Kata Wali Murid?</h1>
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

      {/* Hubungi Kami */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div>
            <div className="bg-gray-300 w-full h-48 rounded-lg mb-4"></div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Buka Maps</button>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 relative after:content-[''] after:block after:h-[3px] after:w-12 after:bg-yellow-400">Hubungi Kami</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-2">
                <MdPhone /> 081234567891
              </li>
              <li className="flex items-center gap-2">
                <MdEmail /> admin@albadar.ac.id
              </li>
              <li className="flex items-center gap-2">
                <FaWhatsapp /> 081234567891
              </li>
              <li className="flex items-center gap-2">
                <FaInstagram /> @albadartangerang
              </li>
              <li>SMK Al Badar Tangerang, Sukamantri, Kec. Balajara, Kabupaten Tangerang, Banten 15810</li>
            </ul>
          </div>

          <form className="bg-white shadow rounded-lg p-4 space-y-4">
            <input type="text" placeholder="Nama" className="w-full border rounded px-3 py-2" />
            <input type="text" placeholder="No. HP" className="w-full border rounded px-3 py-2" />
            <textarea placeholder="Tulis pesan di sini..." rows={4} className="w-full border rounded px-3 py-2" />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Kirim</button>
          </form>
        </div>
      </section>
    </main>
  );
}
