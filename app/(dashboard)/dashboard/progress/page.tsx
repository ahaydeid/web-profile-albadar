"use client";

import { CheckCircle2, Clock, AlertCircle, FileText } from "lucide-react";

export default function ProgressPage() {
  const steps = [
    {
      title: "Akun Dibuat",
      time: "02 Jan 2026, 20:00",
      status: "completed",
      desc: "Akun pendaftaran berhasil dibuat dan diverifikasi.",
    },
    {
      title: "Pengisian Data",
      time: "02 Jan 2026, 21:30",
      status: "completed",
      desc: "Seluruh data pendaftaran dan berkas telah lengkap diisi.",
    },
    {
      title: "Verifikasi Berkas",
      time: "Sedang Berlangsung",
      status: "current",
      desc: "Panitia PPDB sedang meninjau kelengkapan berkas Anda.",
    },
    {
      title: "Hasil Seleksi",
      time: "--",
      status: "pending",
      desc: "Pengumuman hasil seleksi akan diinformasikan kemudian.",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-1">
        <h2 className="text-xl font-bold text-slate-800">Status Pendaftaran</h2>
        <p className="text-slate-500 text-sm">Lihat sejauh mana proses pendaftaran Anda.</p>
      </div>

      {/* Main Status Card */}
      <div className="bg-purple-700 rounded-3xl p-6 text-white shadow-lg overflow-hidden relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl" />
        <div className="relative z-10 flex items-center justify-between">
          <div>
            <p className="text-purple-200 text-xs font-bold uppercase tracking-widest mb-1">Status Saat Ini</p>
            <h3 className="text-xl font-bold">Verifikasi Berkas</h3>
          </div>
          <div className="bg-white/20 p-3 rounded-2xl">
            <Clock className="text-white" size={24} />
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-white/10 flex items-center gap-3">
             <div className="bg-white/10 px-3 py-1 rounded-full text-[10px] font-bold">
                 Jalur Prestasi
             </div>
             <div className="bg-white/10 px-3 py-1 rounded-full text-[10px] font-bold">
                 Gelombang 1
             </div>
        </div>
      </div>

      {/* Progress Timeline */}
      <div className="space-y-4">
        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">Timeline Timeline</h4>
        
        <div className="relative space-y-6 before:absolute before:left-5 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200 pl-1">
          {steps.map((step, index) => (
            <div key={step.title} className="flex gap-4 relative">
              <div className={`z-10 w-10 h-10 rounded-full flex items-center justify-center border-4 border-white shadow-sm ${
                step.status === 'completed' ? 'bg-green-100 text-green-600' : 
                step.status === 'current' ? 'bg-purple-100 text-purple-600' : 
                'bg-slate-100 text-slate-300'
              }`}>
                {step.status === 'completed' ? <CheckCircle2 size={18} /> : 
                 step.status === 'current' ? <Clock size={18} className="animate-pulse" /> : 
                 <FileText size={18} />}
              </div>
              <div className="flex-1 pt-1">
                <div className="flex justify-between items-start mb-1">
                  <h5 className={`text-sm font-bold ${step.status === 'pending' ? 'text-slate-400' : 'text-slate-800'}`}>
                    {step.title}
                  </h5>
                  <span className="text-[10px] font-medium text-slate-400">{step.time}</span>
                </div>
                <p className={`text-xs ${step.status === 'pending' ? 'text-slate-300' : 'text-slate-500'}`}>
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-amber-50 border border-amber-100 p-4 rounded-2xl flex gap-4 mt-8">
           <AlertCircle className="text-amber-500 shrink-0" size={20} />
           <div className="space-y-1">
               <h6 className="text-xs font-bold text-amber-800">Catatan Panitia</h6>
               <p className="text-[11px] text-amber-700 leading-relaxed">
                   Pastikan nomor WhatsApp Anda aktif untuk menerima informasi jadwal wawancara lebih lanjut.
               </p>
           </div>
      </div>
    </div>
  );
}
