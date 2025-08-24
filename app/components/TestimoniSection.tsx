"use client";

import Image from "next/image";

const waliMurid = [
  {
    foto: "/assets/images/wali1.jpg",
    nama: "Budi Santoso",
    deskripsi:
      "Sekolah ini luar biasa! Anak saya jadi lebih semangat belajar setiap hari dan hasilnya pun semakin meningkat.",
  },
  {
    foto: "/assets/images/wali2.jpg",
    nama: "Siti Aminah",
    deskripsi:
      "Guru-gurunya sangat sabar dan perhatian. Lingkungannya aman dan nyaman untuk anak-anak.",
  },
  {
    foto: "/assets/images/wali3.jpg",
    nama: "Ahmad Fauzi",
    deskripsi:
      "Program pembelajarannya kreatif, membuat anak saya jadi lebih percaya diri dan aktif di kelas.",
  },
  {
    foto: "/assets/images/wali4.jpeg",
    nama: "Maria Clara",
    deskripsi:
      "Komunikasi antara sekolah dan orang tua sangat baik. Saya selalu tahu perkembangan anak setiap minggunya.",
  },
  {
    foto: "/assets/images/wali4.jpeg",
    nama: "Maria Clara",
    deskripsi:
      "Komunikasi antara sekolah dan orang tua sangat baik. Saya selalu tahu perkembangan anak setiap minggunya.",
  },
];

export default function TestimoniSection() {
  return (
    <section className="py-16 px-3 md:px-10 mt-20">
      <div className="text-center">
        <h1 className="text-center text-3xl font-bold mb-12 underline decoration-yellow-400">
          Apa Kata Wali Murid?
        </h1>
        <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
          Testimoni nyata dari para wali murid tentang pengalaman dan kepuasan
          mereka terhadap layanan dan pendidikan yang diberikan.
        </p>
      </div>

      {/* Wrapper Slider */}
      <div className="overflow-hidden pb-5 relative w-full mt-10">
        {/* SLIDE KIRI */}
        <div className="flex animate-slide gap-5">
          {waliMurid.map((wali, idx) => (
            <div
              key={idx}
              className="flex bg-white shadow-md rounded-[100px_20px_20px_100px] p-4 md:p-[18px] h-auto md:h-[135px] w-full md:w-[650px] shrink-0"
            >
              <div className="h-[80px] w-[80px] md:h-[100px] md:w-[100px] flex-shrink-0">
                <Image
                  src={wali.foto}
                  width={100}
                  height={100}
                  alt={wali.nama}
                  className="h-[80px] w-[80px] md:h-[100px] md:w-[100px] rounded-full object-cover bg-gray-300"
                />
              </div>
              <div className="pl-4 md:pl-8 flex flex-col justify-center">
                <p className="text-sm md:text-[15px] leading-[1.5em]">
                  “{wali.deskripsi}”
                </p>
                <h6 className="mt-2 md:mt-[15px] font-bold">~ {wali.nama}</h6>
              </div>
            </div>
          ))}
          {waliMurid.map((wali, idx) => (
            <div
              key={`dup-${idx}`}
              className="flex bg-white shadow-md rounded-[100px_20px_20px_100px] p-4 md:p-[18px] h-auto md:h-[135px] w-full md:w-[650px] shrink-0"
            >
              <div className="h-[80px] w-[80px] md:h-[100px] md:w-[100px] flex-shrink-0">
                <Image
                  src={wali.foto}
                  width={100}
                  height={100}
                  alt={wali.nama}
                  className="h-[80px] w-[80px] md:h-[100px] md:w-[100px] rounded-full object-cover bg-gray-300"
                />
              </div>
              <div className="pl-4 md:pl-8 flex flex-col justify-center">
                <p className="text-sm md:text-[15px] leading-[1.5em]">
                  “{wali.deskripsi}”
                </p>
                <h6 className="mt-2 md:mt-[15px] font-bold">~ {wali.nama}</h6>
              </div>
            </div>
          ))}
        </div>

        {/* SLIDE KANAN */}
        <div className="flex animate-slide-reverse gap-5 mt-5">
          {waliMurid
            .slice()
            .reverse()
            .map((wali, idx) => (
              <div
                key={`rev-${idx}`}
                className="flex bg-white shadow-md rounded-[100px_20px_20px_100px] p-4 md:p-[18px] h-auto md:h-[135px] w-full md:w-[650px] shrink-0"
              >
                <div className="h-[80px] w-[80px] md:h-[100px] md:w-[100px] flex-shrink-0">
                  <Image
                    src={wali.foto}
                    width={100}
                    height={100}
                    alt={wali.nama}
                    className="h-[80px] w-[80px] md:h-[100px] md:w-[100px] rounded-full object-cover bg-gray-300"
                  />
                </div>
                <div className="pl-4 md:pl-8 flex flex-col justify-center">
                  <p className="text-sm md:text-[15px] leading-[1.5em]">
                    “{wali.deskripsi}”
                  </p>
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
                className="flex bg-white shadow-md rounded-[100px_20px_20px_100px] p-4 md:p-[18px] h-auto md:h-[135px] w-full md:w-[650px] shrink-0"
              >
                <div className="h-[80px] w-[80px] md:h-[100px] md:w-[100px] flex-shrink-0">
                  <Image
                    src={wali.foto}
                    width={100}
                    height={100}
                    alt={wali.nama}
                    className="h-[80px] w-[80px] md:h-[100px] md:w-[100px] rounded-full object-cover bg-gray-300"
                  />
                </div>
                <div className="pl-4 md:pl-8 flex flex-col justify-center">
                  <p className="text-sm md:text-[15px] leading-[1.5em]">
                    “{wali.deskripsi}”
                  </p>
                  <h6 className="mt-2 md:mt-[15px] font-bold">~ {wali.nama}</h6>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
