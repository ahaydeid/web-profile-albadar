"use client";

import Image from "next/image";

export default function AktivitasSection() {
  return (
    <section className="py-16 px-4 md:px-10 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Judul */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Aktivitas <span className="text-yellow-500">Kami</span>
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
            Berbagai kegiatan menarik dan inspiratif yang mendukung pengembangan
            karakter, kreativitas, dan kompetensi peserta didik.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Gambar besar */}
          <div className="relative bg-gray-200 rounded-2xl overflow-hidden md:col-span-2 md:row-span-2 group">
            <Image
              src="/assets/images/aktivitas/act1.jpeg"
              alt="Kegiatan utama"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-white text-lg font-semibold">
                Kegiatan Utama
              </span>
            </div>
          </div>

          {/* Kolom kanan atas */}
          <div className="relative bg-gray-200 rounded-2xl overflow-hidden group h-48">
            <Image
              src="/assets/images/aktivitas/act2.jpeg"
              alt="Ekstrakurikuler"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-white text-sm md:text-base font-medium">
                Ekstrakurikuler
              </span>
            </div>
          </div>

          <div className="relative bg-gray-200 rounded-2xl overflow-hidden group h-48">
            <Image
              src="/assets/images/aktivitas/act2.jpeg"
              alt="Praktek Lapangan"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-white text-sm md:text-base font-medium">
                Praktek Lapangan
              </span>
            </div>
          </div>

          {/* Kolom kanan bawah */}
          <div className="relative bg-gray-200 rounded-2xl overflow-hidden group h-48">
            <Image
              src="/assets/images/aktivitas/act2.jpeg"
              alt="Kegiatan Sosial"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-white text-sm md:text-base font-medium">
                Kegiatan Sosial
              </span>
            </div>
          </div>

          <div className="relative bg-gray-200 rounded-2xl overflow-hidden group h-48">
            <Image
              src="/assets/images/aktivitas/act2.jpeg"
              alt="Prestasi Siswa"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-white text-sm md:text-base font-medium">
                Prestasi Siswa
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
