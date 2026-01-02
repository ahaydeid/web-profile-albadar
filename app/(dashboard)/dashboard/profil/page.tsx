"use client";

import { User, Mail, Phone, MapPin, Calendar, GraduationCap } from "lucide-react";

export default function ProfilePage() {
  const profileData = [
    { icon: <User size={18} />, label: "Nama Lengkap", value: "Joni Doe" },
    { icon: <Mail size={18} />, label: "Email", value: "joni.doe@example.com" },
    { icon: <Phone size={18} />, label: "No. HP", value: "0812-3456-7890" },
    { icon: <Calendar size={18} />, label: "TMT Lahir", value: "Tangerang, 10 Jan 2010" },
    { icon: <GraduationCap size={18} />, label: "Sekolah Asal", value: "SMP Negeri 1 Tangerang" },
    { icon: <MapPin size={18} />, label: "Alamat", value: "Jl. Raya Dangdeur No. 123, Kec. Jayanti, Tangerang" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-1">
        <h2 className="text-xl font-bold text-slate-800">Data Diri</h2>
        <p className="text-slate-500 text-sm">Ringkasan profil pendaftaran Anda.</p>
      </div>

      <div className="flex flex-col items-center gap-4 py-6">
        <div className="relative">
          <div className="w-28 h-28 rounded-full bg-purple-100 border-4 border-white shadow-md overflow-hidden flex items-center justify-center text-purple-700 text-3xl font-black">
            FA
          </div>
          <div className="absolute bottom-1 right-1 w-6 h-6 bg-green-500 border-2 border-white rounded-full shadow-sm" />
        </div>
        <div className="text-center">
          <h3 className="text-lg font-bold text-slate-800">Fatimah Azzahra</h3>
          <p className="text-xs font-bold text-purple-600 bg-purple-50 px-3 py-1 rounded-full mt-1 uppercase tracking-widest">
            Calon Siswa
          </p>
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 divide-y divide-slate-50 overflow-hidden">
        {profileData.map((item, index) => (
          <div key={index} className="flex items-center gap-4 p-5 hover:bg-slate-50 transition-colors">
            <div className="text-slate-400 shrink-0">
              {item.icon}
            </div>
            <div className="space-y-0.5">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{item.label}</p>
              <p className="text-sm font-bold text-slate-700 leading-tight">{item.value}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full py-4 bg-slate-100 text-slate-600 rounded-2xl font-bold text-sm hover:bg-slate-200 transition-all active:scale-95">
        Edit Profil Akun
      </button>

      <div className="pt-4">
        <button className="w-full py-4 border border-red-100 text-red-500 rounded-2xl font-bold text-sm hover:bg-red-50 transition-all active:scale-95">
          Keluar Aplikasi
        </button>
      </div>
    </div>
  );
}
