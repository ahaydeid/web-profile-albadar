"use client";

import { useEffect, useState } from "react";

interface Jurusan {
  id: number;
  kode: string;
  nama: string;
  kuota: number;
  terisi: number;
  sisa: number;
}

interface PPDBData {
  gelombang: string;
  tahun_ajaran: string;
  periode: {
    mulai: string;
    selesai: string;
    mulai_raw: string;
    selesai_raw: string;
  };
  deskripsi: string;
  panitia: string;
  status: string;
  kuota_jurusan: Jurusan[];
}

export default function PendaftaranPage() {
  const [ppdbData, setPpdbData] = useState<PPDBData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasActivePPDB, setHasActivePPDB] = useState(true);

  useEffect(() => {
    async function fetchActivePPDB() {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
        console.log('Fetching PPDB data from:', `${apiUrl}/api/ppdb/active-period`);
        
        const response = await fetch(`${apiUrl}/api/ppdb/active-period`);
        
        // Handle 404 or other HTTP errors
        if (!response.ok) {
          console.warn(`API returned ${response.status}: ${response.statusText}`);
          setHasActivePPDB(false);
          setIsLoading(false);
          return;
        }
        
        const result = await response.json();

        if (result.success && result.data) {
          setPpdbData(result.data);
          setHasActivePPDB(true);
        } else {
          setHasActivePPDB(false);
        }
      } catch (error) {
        console.error("Failed to fetch PPDB data:", error);
        setHasActivePPDB(false);
      } finally {
        setIsLoading(false);
      }
    }

    fetchActivePPDB();
  }, []);

  return (
    <main className="bg-slate-50 text-slate-900 min-h-screen pb-20" suppressHydrationWarning>
      {/* Hero Section */}
      <section className="bg-[#3B2F63] text-white py-16 mb-10">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-[#FFD700] font-bold uppercase tracking-widest mb-4">SMK Al Badar Tangerang</h2>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Prosedur Pendaftaran</h1>
          <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
            Bergabunglah bersama kami untuk masa depan yang lebih cerah dan kompeten di bidang teknologi dan kuliner.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4">
        {/* PPDB Berjalan Section */}
        {isLoading ? (
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-12 mb-12 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-purple-600 mx-auto mb-4"></div>
            <p className="text-slate-500">Memuat informasi PPDB...</p>
          </div>
        ) : hasActivePPDB && ppdbData ? (
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden mb-12 transform transition-all">
            <div className="bg-sky-100 p-4 flex justify-between items-center text-white">
              <h2 className="text-lg font-bold flex items-center gap-2 text-gray-800">
                PPDB SEDANG BERJALAN
              </h2>
              <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
                <span className="text-gray-800 text-xs font-bold uppercase tracking-wider">{ppdbData.status}</span>
              </div>
            </div>
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Info Utama */}
                <div>
                  <div className="space-y-6">
                    <div>
                      <p className="text-sm text-slate-500 uppercase font-bold tracking-wider mb-1">Gelombang</p>
                      <h3 className="text-2xl font-black text-[#3B2F63]">{ppdbData.gelombang.toUpperCase()}</h3>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 uppercase font-bold tracking-wider mb-1">Tahun Ajaran</p>
                      <p className="text-lg font-semibold text-slate-700">{ppdbData.tahun_ajaran}</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 uppercase font-bold tracking-wider mb-1">Periode Pendaftaran</p>
                      <p className="text-lg font-semibold text-slate-700">{ppdbData.periode.mulai} – {ppdbData.periode.selesai}</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 uppercase font-bold tracking-wider mb-1">Deskripsi</p>
                      <p className="text-slate-600 leading-relaxed">
                        {ppdbData.deskripsi}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Kuota Jurusan */}
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                  <h4 className="font-bold text-[#3B2F63] mb-4 flex items-center gap-2">
                    Kuota Per Jurusan
                  </h4>
                  <div className="space-y-4">
                    {ppdbData.kuota_jurusan.map((jurusan) => (
                      <div key={jurusan.id} className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm border border-slate-100">
                        <div className="flex flex-col">
                          <span className="font-medium text-slate-700">{jurusan.nama} ({jurusan.kode})</span>
                          <span className="text-xs text-slate-500">Terisi: {jurusan.terisi} / Sisa: {jurusan.sisa}</span>
                        </div>
                        <span className="bg-[#3B2F63] text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                          {jurusan.kuota} Siswa
                        </span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 text-xs text-slate-400 italic">
                    * Kuota dapat berubah sewaktu-waktu sesuai kebijakan sekolah.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-8 mb-12 text-center">
            <h3 className="text-xl font-bold text-yellow-800 mb-2">Tidak Ada PPDB Aktif</h3>
            <p className="text-yellow-700">Saat ini tidak ada periode PPDB yang sedang berjalan. Silakan hubungi sekolah untuk informasi lebih lanjut.</p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Sisi Kiri: Prosedur */}
          <div className="lg:col-span-2 space-y-10">
            {/* Info Pendaftaran */}
            <div className="bg-white shadow-sm border border-slate-100 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-[#3B2F63] mb-6 flex items-center gap-3">
                <span className="bg-[#FFD700] w-1.5 h-6 rounded-full"></span>
                Prosedur & Ketentuan
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-bold text-[#3B2F63] mb-4 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-xs">A</span>
                    Proses Pendaftaran
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {["Pembukaan PPDB (aktif)", "Mengisi formulir pendaftaran", "Melengkapi dokumen persyaratan", "Mengikuti tes seleksi masuk"].map((step, idx) => (
                      <div key={idx} className={`p-4 rounded-lg border text-sm font-medium ${idx === 0 ? 'bg-blue-50 border-blue-300 text-blue-800' : 'bg-slate-50 border-slate-100'}`}>
                        {step}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[#3B2F63] mb-4 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-xs">B</span>
                    Proses Seleksi
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Tes Tulis (Matematika, Bahasa Indonesia, Bahasa Inggris)",
                      "Wawancara Siswa & Orang Tua",
                      "Penilaian berkas dan prestasi",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-700">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#FFD700] flex-shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-bold text-[#3B2F63] mb-3">Waktu & Tempat</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Seleksi dilaksanakan setiap hari Sabtu pukul 08.00 WIB di ruang ujian SMK Al Badar Tangerang.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#3B2F63] mb-3">Pengumuman</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Diumumkan melalui WhatsApp atau papan pengumuman sekolah maksimal 3 hari setelah tes.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[#3B2F63] mb-4 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-xs">E</span>
                    Ketentuan Administrasi
                  </h3>
                  <div className="space-y-3">
                    {["Melunasi biaya pendaftaran", "Melunasi uang seragam & perlengkapan", "Membayar SPP bulan pertama"].map((admin, idx) => (
                      <div key={idx} className="flex justify-between items-center p-3 border-b border-slate-50 last:border-0">
                        <span className="text-slate-700 font-medium">{admin}</span>
                        <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center">
                          <svg className="w-3 h-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sisi Kanan: Dokumen & Kontak */}
          <div className="space-y-8">
            <div className="bg-white shadow-sm border border-slate-100 rounded-xl p-6">
              <h2 className="text-xl font-bold text-[#3B2F63] mb-6 flex items-center gap-2">
                Dokumen Persyaratan
              </h2>
              <ul className="space-y-4">
                {[
                  "Fotokopi Ijazah SMP Sederajat (2 lbr)",
                  "Fotokopi Kartu Keluarga (2 lbr)",
                  "Fotokopi KTP Orang Tua (2 lbr)",
                  "Fotokopi Akta Kelahiran (2 lbr)",
                  "Fotokopi SKL (jika ada, 1 lbr)",
                  "Fotokopi KIP (jika ada)",
                  "Surat Ket. Kematian (bagi yatim)",
                ].map((doc, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-slate-600 font-medium">
                    <svg className="w-4 h-4 text-[#FFD700]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {doc}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#3B2F63] text-white rounded-xl p-6 shadow-md">
              <h2 className="text-xl font-bold mb-4">Butuh Bantuan?</h2>
              <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                Tim administrasi kami siap membantu proses pendaftaran Anda. Hubungi kami melalui:
              </p>
              <div className="space-y-4">
                <a href="tel:02112345678" className="flex items-center gap-3 hover:text-[#FFD700] transition-colors group">
                  <div className="p-2 bg-white/10 rounded-lg group-hover:bg-[#FFD700]/20">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="text-sm">021-12345678</span>
                </a>
                <a href="https://wa.me/6285814888500" className="flex items-center gap-3 hover:text-[#FFD700] transition-colors group text-[#FFD700]">
                  <div className="p-2 bg-white/10 rounded-lg group-hover:bg-[#FFD700]/20">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </div>
                  <span className="text-sm font-bold">WhatsApp: 0812-3456-7890</span>
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <a 
                href="https://wa.me/6285814888500" 
                className="w-full bg-[#FFD700] text-[#3B2F63] py-4 rounded-xl text-center font-black uppercase tracking-wider shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 block"
              >
                Daftar Sekarang
              </a>
              <p className="text-center text-xs text-slate-400">
                Pendaftaran juga dapat dilakukan secara langsung di Kantor SMK Al Badar.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
