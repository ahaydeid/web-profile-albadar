"use client";

import { useState } from "react";
import { Camera, ChevronRight, ChevronLeft, Save, CheckCircle2, FileText } from "lucide-react";
import Image from "next/image";

const tabs = [
  "Data Utama",
  "Alamat & Lokasi",
  "Keluarga / Wali",
  "Akademik & Bantuan",
  "Kesehatan & Keuangan",
];

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const nextTab = () => setActiveTab((prev) => Math.min(prev + 1, tabs.length - 1));
  const prevTab = () => setActiveTab((prev) => Math.max(prev - 1, 0));

  if (isSubmitted) {
    return (
        <div className="space-y-6 pb-10">
            <div className="bg-green-50 border border-green-100 p-6 rounded-3xl text-center space-y-4">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 size={32} />
                </div>
                <div className="space-y-1">
                    <h2 className="text-xl font-bold text-slate-800">Pendaftaran Terkirim!</h2>
                    <p className="text-slate-500 text-sm font-medium">Data Anda sedang dalam proses verifikasi oleh panitia.</p>
                </div>
            </div>

            <div className="bg-white rounded-3x border border-slate-100 p-6 shadow-sm space-y-6">
                <h3 className="font-bold text-slate-800 border-b pb-4">Ringkasan Pendaftaran</h3>
                
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                        <p className="text-[10px] font-bold text-slate-400 uppercase">No. Registrasi</p>
                        <p className="text-sm font-bold text-slate-700">PPDB-2026001</p>
                    </div>
                    <div className="space-y-1">
                        <p className="text-[10px] font-bold text-slate-400 uppercase">Jalur</p>
                        <p className="text-sm font-bold text-slate-700">Prestasi</p>
                    </div>
                    <div className="space-y-1">
                        <p className="text-[10px] font-bold text-slate-400 uppercase">Nama</p>
                        <p className="text-sm font-bold text-slate-700">Joni Doe</p>
                    </div>
                    <div className="space-y-1">
                        <p className="text-[10px] font-bold text-slate-400 uppercase">Status</p>
                        <p className="text-xs font-bold text-purple-600 bg-purple-50 px-2 py-0.5 rounded-full inline-block">Menunggu Verifikasi</p>
                    </div>
                </div>

                <div className="bg-slate-50 p-4 rounded-2xl flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-slate-400 border border-slate-100">
                            <FileText size={20} />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-slate-700">Bukti Pendaftaran.pdf</p>
                            <p className="text-[10px] text-slate-400 font-bold uppercase">Dokumen</p>
                        </div>
                    </div>
                    <button className="text-purple-600 font-bold text-xs hover:underline">Download</button>
                </div>
            </div>

            <button 
                onClick={() => setIsSubmitted(false)}
                className="w-full py-4 border border-slate-200 text-slate-500 rounded-2xl font-bold text-sm hover:bg-slate-50 transition-all active:scale-95"
            >
                Edit Data Kembali
            </button>
        </div>
    )
  }

  return (
    <div className="space-y-6 pb-10">
      <div className="flex flex-col gap-1">
        <h2 className="text-xl font-bold text-slate-800">Formulir Pendaftaran</h2>
        <p className="text-slate-500 text-sm">Lengkapi data pendaftaran Anda dengan benar.</p>
      </div>

      {/* Tab Navigation - Scrollable on mobile */}
      <div className="flex border-b border-slate-200 overflow-x-auto no-scrollbar -mx-4 px-4 sticky top-16 bg-slate-50 z-30 py-2">
        {tabs.map((tab, index) => (
          <button
            key={tab}
            onClick={() => setActiveTab(index)}
            className={`whitespace-nowrap px-4 py-2 text-xs font-bold transition-all border-b-2 rounded-t-lg mr-2 ${
              activeTab === index
                ? "text-purple-700 border-purple-700 bg-purple-50/50"
                : "text-slate-400 border-transparent hover:text-slate-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Form Content */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 min-h-[400px]">
        {activeTab === 0 && <TabDataUtama />}
        {activeTab === 1 && <TabAlamatLokasi />}
        {activeTab === 2 && <TabKeluargaWali />}
        {activeTab === 3 && <TabAkademikBantuan />}
        {activeTab === 4 && <TabKesehatanKeuangan />}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center gap-4">
        <button
          onClick={prevTab}
          disabled={activeTab === 0}
          className="flex-1 flex items-center justify-center gap-2 py-3 border border-slate-200 rounded-xl font-bold text-slate-600 hover:bg-slate-50 disabled:opacity-30 active:scale-95 transition-all text-sm"
        >
          <ChevronLeft size={18} />
          Sebelumnya
        </button>
        {activeTab === tabs.length - 1 ? (
          <button
            onClick={() => setIsSubmitted(true)}
            className="flex-1 flex items-center justify-center gap-2 py-3 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700 active:scale-95 transition-all text-sm"
          >
            <Save size={18} />
            Kirim Data
          </button>
        ) : (
          <button
            onClick={nextTab}
            className="flex-1 flex items-center justify-center gap-2 py-3 bg-purple-700 text-white rounded-xl font-bold hover:bg-purple-800 active:scale-95 transition-all text-sm"
          >
            Selanjutnya
            <ChevronRight size={18} />
          </button>
        )}
      </div>
    </div>
  );
}

function InputField({ label, placeholder, type = "text", required = false }: { label: string; placeholder?: string; type?: string; required?: boolean }) {
    return (
        <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">{label} {required && <span className="text-red-500">*</span>}</label>
            <input 
                type={type}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600/20 focus:border-purple-600 transition-all"
                placeholder={placeholder}
            />
        </div>
    )
}

function SelectField({ label, options, required = false }: { label: string; options: string[]; required?: boolean }) {
    return (
        <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">{label} {required && <span className="text-red-500">*</span>}</label>
            <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600/20 focus:border-purple-600 transition-all">
                {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
        </div>
    )
}

function TabDataUtama() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col items-center gap-4 mb-6">
                <div className="relative group">
                    <div className="w-24 h-24 rounded-full bg-slate-100 border-2 border-dashed border-slate-300 flex items-center justify-center overflow-hidden">
                        <Camera size={24} className="text-slate-400" />
                    </div>
                    <button className="absolute bottom-0 right-0 bg-purple-600 text-white p-2 rounded-full shadow-lg active:scale-90 transition-all">
                        <Camera size={14} />
                    </button>
                </div>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest text-center leading-relaxed">
                    Foto Siswa (Formal)<br/>Max 2MB, JPG/PNG 
                </p>
            </div>

            <InputField label="Nama Lengkap" placeholder="Sesuai Ijazah/Akta" required />
            <div className="grid grid-cols-2 gap-4">
                <InputField label="NIPD" placeholder="NIPD" />
                <InputField label="NISN" placeholder="Nomor NISN" />
            </div>
            <SelectField label="Jenis Kelamin" options={["Laki-laki", "Perempuan"]} />
            <div className="grid grid-cols-2 gap-4">
                <InputField label="Tempat Lahir" placeholder="Kota/Kab" />
                <InputField label="Tanggal Lahir" type="date" />
            </div>
            <InputField label="NIK (Sesuai KK)" placeholder="16 Digit NIK" />
            <InputField label="Agama" placeholder="Isi Agama" />
        </div>
    )
}

function TabAlamatLokasi() {
    return (
        <div className="space-y-6">
            <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Alamat Lengkap</label>
                <textarea 
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600/20 focus:border-purple-600 transition-all min-h-[100px]"
                    placeholder="Nama Jalan, Blok, No Rumah..."
                />
            </div>
            <div className="grid grid-cols-3 gap-4">
                <InputField label="RT" placeholder="001" />
                <InputField label="RW" placeholder="001" />
                <InputField label="Kode Pos" placeholder="15xxx" />
            </div>
            <InputField label="Dusun" placeholder="Nama Dusun" />
            <InputField label="Kelurahan" placeholder="Nama Kelurahan" />
            <InputField label="Kecamatan" placeholder="Nama Kecamatan" />
            
            <div className="mt-8 pt-6 border-t border-slate-100">
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-widest mb-4">Koordinat Lokasi (Opsional)</h4>
                <div className="grid grid-cols-2 gap-4">
                    <InputField label="Lintang" placeholder="-6.12345" />
                    <InputField label="Bujur" placeholder="106.12345" />
                </div>
                <InputField label="Jarak ke Sekolah (KM)" placeholder="Isi perkiraan KM" />
            </div>
        </div>
    )
}

function TabKeluargaWali() {
    return (
        <div className="space-y-10">
            {/* Ayah */}
            <section className="space-y-4">
                <h4 className="text-xs font-bold text-purple-700 uppercase tracking-widest border-l-4 border-purple-600 pl-3">Data Ayah Kandung</h4>
                <InputField label="Nama Ayah" placeholder="Nama Lengkap" />
                <div className="grid grid-cols-2 gap-4">
                    <InputField label="Tahun Lahir" placeholder="Contoh: 1980" />
                    <InputField label="Pendidikan" placeholder="Pendidikan Terakhir" />
                </div>
                <InputField label="Pekerjaan" placeholder="Contoh: Karyawan Swasta" />
                <InputField label="Penghasilan" placeholder="Isi perkiraan per bulan" />
                <InputField label="NIK Ayah" placeholder="16 Digit NIK" />
            </section>

            {/* Ibu */}
            <section className="space-y-4">
                <h4 className="text-xs font-bold text-purple-700 uppercase tracking-widest border-l-4 border-purple-600 pl-3">Data Ibu Kandung</h4>
                <InputField label="Nama Ibu" placeholder="Nama Lengkap" />
                <div className="grid grid-cols-2 gap-4">
                    <InputField label="Tahun Lahir" placeholder="Contoh: 1985" />
                    <InputField label="Pendidikan" placeholder="Pendidikan Terakhir" />
                </div>
                <InputField label="Pekerjaan" placeholder="Contoh: Ibu Rumah Tangga" />
                <InputField label="Penghasilan" placeholder="Isi perkiraan per bulan" />
                <InputField label="NIK Ibu" placeholder="16 Digit NIK" />
            </section>

            {/* Wali */}
            <section className="space-y-4">
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest border-l-4 border-slate-300 pl-3">Data Wali (Opsional)</h4>
                <InputField label="Nama Wali" placeholder="Nama Lengkap" />
                <div className="grid grid-cols-2 gap-4">
                    <InputField label="Tahun Lahir" placeholder="Pendidikan" />
                    <InputField label="Pendidikan" placeholder="Pendidikan Terakhir" />
                </div>
                <InputField label="Pekerjaan" placeholder="Pekerjaan" />
                <InputField label="NIK Wali" placeholder="NIK Wali" />
            </section>
        </div>
    )
}

function TabAkademikBantuan() {
    return (
        <div className="space-y-6">
            <section className="space-y-4">
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-widest mb-4">Kontak & Lainnya</h4>
                <SelectField label="Jenis Tinggal" options={["Bersama Orang Tua", "Wali", "Kos/Kontrak", "Asrama", "Panti Asuhan"]} />
                <InputField label="Alat Transportasi" placeholder="Contoh: Motor / Jalan Kaki" />
                <InputField label="Telepon Rumah" placeholder="Isi jika ada" />
                <InputField label="Nomor HP / WhatsApp" placeholder="08xxxxxxxx" required />
                <InputField label="Email Aktif" placeholder="email@anda.com" type="email" />
            </section>

            <section className="space-y-4 pt-6 mt-6 border-t border-slate-100">
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-widest mb-4">Informasi Akademik</h4>
                <InputField label="Sekolah Asal" placeholder="Nama SMP/MTs" required />
                <InputField label="Nomor Peserta UN" placeholder="No Seri UN" />
                <InputField label="Nomor Seri Ijazah" placeholder="Cek di Ijazah SMP" />
                <InputField label="Nomor Seri SKHUN" placeholder="Isi jika ada" />
            </section>

            <section className="space-y-4 pt-6 mt-6 border-t border-slate-100">
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-widest mb-4">Bantuan Pemerintah (KPS/KIP)</h4>
                <SelectField label="Penerima KPS" options={["TIDAK", "YA"]} />
                <InputField label="Nomor KPS" placeholder="Isi nomor kartu KPS" />
                <SelectField label="Penerima KIP" options={["TIDAK", "YA"]} />
                <InputField label="Nomor KIP" placeholder="Isi nomor kartu KIP" />
                <InputField label="Nama Tertera di KIP" placeholder="Nama sesuai Kartu" />
            </section>
        </div>
    )
}

function TabKesehatanKeuangan() {
    return (
        <div className="space-y-6">
            <section className="space-y-4">
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-widest mb-4">Identitas & Keluarga</h4>
                <InputField label="Nomor Kartu Keluarga (KK)" placeholder="16 Digit No KK" required />
                <InputField label="No Registrasi Akta Lahir" placeholder="Cek di Akta Lahir" />
                <div className="grid grid-cols-2 gap-4">
                    <InputField label="Anak Ke-" placeholder="1" />
                    <InputField label="Jumlah Saudara Kandung" placeholder="0" />
                </div>
            </section>

            <section className="space-y-4 pt-6 mt-6 border-t border-slate-100">
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-widest mb-4">Kesehatan & Fisik</h4>
                <InputField label="Kebutuhan Khusus" placeholder="Isi jika ada" />
                <div className="grid grid-cols-2 gap-4">
                    <InputField label="Berat Badan (KG)" placeholder="Contoh: 55" />
                    <InputField label="Tinggi Badan (CM)" placeholder="Contoh: 165" />
                </div>
                <InputField label="Lingkar Kepala (CM)" placeholder="Contoh: 54" />
            </section>

            <section className="space-y-4 pt-6 mt-6 border-t border-slate-100">
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-widest mb-4">Informasi Perbankan</h4>
                <InputField label="Nama Bank" placeholder="Contoh: BRI / BNI / MANDIRI" />
                <InputField label="Nomor Rekening Bank" placeholder="No Rekening" />
                <InputField label="Rekening Atas Nama" placeholder="Nama Pemilik Rekening" />
            </section>
        </div>
    )
}
