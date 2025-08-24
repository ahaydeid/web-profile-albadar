"use client";

import { Building2, BookOpen, Heart, Award } from "lucide-react";

export default function ProgramUnggulanSection() {
  return (
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
            { icon: <Building2 className="w-10 h-10" />, label: "Hiring Partner" },
            { icon: <BookOpen className="w-10 h-10" />, label: "Kajian Kitab Kuning" },
            { icon: <Heart className="w-10 h-10" />, label: "Pembinaan Akhlak" },
            { icon: <Award className="w-10 h-10" />, label: "Prestasi Unggul" },
          ].map((prog, idx) => (
            <div key={idx} className="bg-white text-purple-800 rounded-2xl shadow-lg hover:shadow-yellow-400/40 transition transform hover:-translate-y-2 p-6 flex flex-col items-center justify-center text-center">
              <div className="mb-3">{prog.icon}</div>
              <p className="font-bold text-lg">{prog.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
