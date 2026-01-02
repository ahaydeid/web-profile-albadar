"use client";

import Image from "next/image";

const waliMurid = [
  {
    foto: "/assets/images/man.png",
    nama: "Budi Santoso",
    deskripsi: "Sekolah ini luar biasa! Anak saya jadi lebih semangat belajar setiap hari dan hasilnya pun semakin meningkat.",
  },
  {
    foto: "/assets/images/woman.png",
    nama: "Siti Aminah",
    deskripsi: "Guru-gurunya sangat sabar dan perhatian. Lingkungannya aman dan nyaman untuk anak-anak.",
  },
  {
    foto: "/assets/images/man.png",
    nama: "Ahmad Fauzi",
    deskripsi: "Program pembelajarannya kreatif, membuat anak saya jadi lebih percaya diri dan aktif di kelas.",
  },
  {
    foto: "/assets/images/woman.png",
    nama: "Siti Rahmawati",
    deskripsi: "Guru-guru selalu memberikan informasi perkembangan anak dengan detail, sehingga saya bisa mendampingi belajar di rumah dengan lebih tepat.",
  },
  {
    foto: "/assets/images/man.png",
    nama: "Andi Pratama",
    deskripsi: "Sekolah aktif berkomunikasi dengan orang tua. Saya merasa dilibatkan dalam setiap langkah pendidikan anak.",
  },
  {
    foto: "/assets/images/man.png",
    nama: "Budi Santoso",
    deskripsi: "Sekolah selalu terbuka untuk berdiskusi dengan orang tua. Kami merasa tenang karena anak mendapat bimbingan yang tepat.",
  },
  {
    foto: "/assets/images/woman.png",
    nama: "Dewi Lestari",
    deskripsi: "Setiap kegiatan anak selalu diinformasikan dengan cepat, membuat kami sebagai orang tua merasa sangat dihargai.",
  },
  {
    foto: "/assets/images/man.png",
    nama: "Abdul Hakim",
    deskripsi: "Anak saya semakin percaya diri sejak bersekolah di sini. Kerja sama guru dan orang tua sangat baik.",
  },
  {
    foto: "/assets/images/woman.png",
    nama: "Ratna Wulandari",
    deskripsi: "Lingkungan sekolah yang positif membuat anak betah belajar. Saya senang bisa terlibat dalam kegiatan sekolah.",
  },
  {
    foto: "/assets/images/man.png",
    nama: "Hendra Wijaya",
    deskripsi: "Pendekatan personal dari guru membuat perkembangan anak terasa signifikan. Komunikasi sangat lancar.",
  },
];

const reversedWaliMurid = [...waliMurid].reverse();

export default function TestimoniSection() {
  return (
    <section className="py-16 px-3 md:px-10 mt-20">
      <div className="text-center">
        <h1 className="text-center text-3xl font-bold mb-12 underline decoration-yellow-400">Apa Kata Wali Murid?</h1>
        <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">Testimoni nyata dari para wali murid tentang pengalaman dan kepuasan mereka terhadap layanan dan pendidikan yang diberikan.</p>
      </div>

      {/* Wrapper Slider */}
      <div className="overflow-hidden pb-5 relative w-full mt-10">
        {/* SLIDE KIRI */}
        <div className="flex animate-slide gap-5">
          {[...waliMurid, ...waliMurid].map((wali, idx) => (
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

        {/* SLIDE KANAN */}
        <div className="flex animate-slide-reverse gap-5 mt-5">
          {[...reversedWaliMurid, ...reversedWaliMurid].map((wali, idx) => (
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
      </div>
    </section>
  );
}
