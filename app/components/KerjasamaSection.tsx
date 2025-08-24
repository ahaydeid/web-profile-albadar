"use client";

import Image from "next/image";

export default function KerjasamaSection() {
  const perusahaan = [
    { nama: "PT. Yamaha Motor Indonesia", logo: "/assets/images/logoperusahaan/yamaha.jpeg" },
    { nama: "PT. Citra Bina Maju Jaya", logo: "/assets/images/logoperusahaan/citrabina.jpg" },
    { nama: "PT. Rusli Jaya Mandiri", logo: "/assets/images/logoperusahaan/ruslijaya.png" },
    { nama: "PT. Bank Central Asia Tbk", logo: "/assets/images/logoperusahaan/bca.png" },
    { nama: "PT. Telekomunikasi Indonesia", logo: "/assets/images/logoperusahaan/telkom.webp" },
    { nama: "PT. Simetri Putra Perkasa", logo: "/assets/images/logoperusahaan/simetri.png" },
    { nama: "PT. Wings Surya", logo: "/assets/images/logoperusahaan/wings.png" },
    { nama: "PT. Herbatama Indo Perkasa", logo: "/assets/images/logoperusahaan/herba.png" },
    { nama: "Hotel Olive Tangerang", logo: null },
  ];

  return (
    <section className="py-20 px-4 md:px-10 mt-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Kerjasama <span className="text-yellow-500">Perusahaan</span>
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
            Kami menjalin kerjasama strategis dengan berbagai perusahaan ternama
            untuk mendukung pengembangan kompetensi dan peluang karir peserta didik.
          </p>
        </div>

        {/* SLIDER */}
        <div className="overflow-hidden relative w-full">
          {[perusahaan].map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={`flex gap-16 py-3 items-center ${
                rowIndex === 0 ? "animate-slide" : "animate-slide-reverse"
              }`}
            >
              {row.concat(row).map((pt, index) => (
                <div
                  key={`${pt.nama}-${index}`}
                  className="flex items-center gap-4 shrink-0 bg-white rounded-full px-6 py-3 shadow hover:shadow-lg hover:scale-105 transition duration-300"
                >
                  {pt.logo ? (
                    <Image
                      src={pt.logo}
                      alt={pt.nama}
                      width={80}
                      height={80}
                      className="object-contain w-16 md:w-20 h-16 md:h-20"
                      priority
                    />
                  ) : (
                    <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-gray-200 text-gray-500 text-xs rounded-full">
                      NO LOGO
                    </div>
                  )}
                  <span className="text-base md:text-lg font-semibold text-gray-700 whitespace-nowrap">
                    {pt.nama}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
