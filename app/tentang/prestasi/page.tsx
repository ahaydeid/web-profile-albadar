import React from "react";
import Image from "next/image";

function page() {
  return (
    <div className="bg-gray-50 rounded-3xl shadow-lg p-10">
      <h2 className="text-3xl font-bold text-[#003366] mb-10 text-center">Prestasi Siswa</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {[
          { title: "Juara 1 LKS Otomotif", img: "/assets/images/images.png" },
          { title: "Finalis Olimpiade Akuntansi", img: "/assets/images/images.png" },
          { title: "Juara 2 Lomba Robotik", img: "/assets/images/images.png" },
          { title: "Juara 1 LKS Otomotif", img: "/assets/images/images.png" },
          { title: "Finalis Olimpiade Akuntansi", img: "/assets/images/images.png" },
          { title: "Juara 2 Lomba Robotik", img: "/assets/images/images.png" },
        ].map((prestasi, i) => (
          <div key={i} className="rounded-2xl overflow-hidden shadow-md border border-[#003366]/20 bg-white">
            <div className="relative w-full h-48">
              <Image src={prestasi.img} alt={prestasi.title} fill className="object-cover" />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-[#003366]">{prestasi.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default page;
