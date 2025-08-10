// app/pendaftaran/page.tsx
export default function PendaftaranPage() {
  return (
    <main className="bg-gray-50 text-gray-900">
      <section className="max-w-5xl mx-auto px-4 py-10">
        {/* Judul */}
        <div className="text-center mb-10">
          <h2 className="text-sm font-semibold text-pink-600 uppercase tracking-wide">
            SMK Al Badar Tangerang
          </h2>
          <h1 className="text-3xl md:text-4xl font-bold">
            Prosedur Pendaftaran Siswa Baru
          </h1>
        </div>

        {/* Info Pendaftaran */}
        <div className="bg-white shadow-lg rounded-lg p-6 md:p-10">
          <h2 className="text-xl font-bold mb-4">Info Pendaftaran</h2>
          <p className="mb-6 leading-relaxed">
            SMK Al Badar Tangerang membuka pendaftaran siswa baru untuk tahun ajaran 2025-2026. 
            Pendaftaran dibuka mulai tanggal <strong>20 Oktober 2025</strong> dan akan ditutup jika kuota terpenuhi.
          </p>

          {/* Proses Pendaftaran */}
          <h3 className="font-semibold mb-2">A. Proses Pendaftaran</h3>
          <ol className="list-decimal list-inside mb-6 space-y-1">
            <li>Mengisi formulir pendaftaran</li>
            <li>Melengkapi dokumen persyaratan</li>
            <li>Mengikuti tes seleksi masuk</li>
          </ol>

          {/* Proses Seleksi */}
          <h3 className="font-semibold mb-2">B. Proses Seleksi</h3>
          <ol className="list-decimal list-inside mb-6 space-y-1">
            <li>Tes Tulis (Matematika, Bahasa Indonesia, Bahasa Inggris)</li>
            <li>Wawancara</li>
            <li>Penilaian berkas dan prestasi</li>
          </ol>

          {/* Waktu & Tempat Seleksi */}
          <h3 className="font-semibold mb-2">C. Waktu & Tempat Seleksi</h3>
          <p className="mb-6">
            Seleksi akan dilaksanakan setiap hari Sabtu pukul 08.00 WIB di ruang ujian SMK Al Badar Tangerang.
          </p>

          {/* Pengumuman */}
          <h3 className="font-semibold mb-2">D. Pengumuman</h3>
          <p className="mb-6">
            Hasil seleksi akan diumumkan melalui WhatsApp atau papan pengumuman sekolah maksimal 3 hari setelah tes.
          </p>

          {/* Administrasi */}
          <h3 className="font-semibold mb-2">E. Ketentuan Administrasi</h3>
          <ol className="list-decimal list-inside mb-6 space-y-1">
            <li>Melunasi biaya pendaftaran</li>
            <li>Melunasi uang seragam & perlengkapan</li>
            <li>Membayar SPP bulan pertama</li>
          </ol>

          {/* Kontak */}
          <h3 className="font-semibold mb-2">F. Informasi Kontak</h3>
          <p className="mb-2">Hubungi Panitia PPDB SMK Al Badar Tangerang:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Telepon: 021-12345678</li>
            <li>WhatsApp: 0812-3456-7890</li>
            <li>Email: info@smkalbadar.sch.id</li>
          </ul>
        </div>

        {/* Dokumen Persyaratan */}
        <div className="bg-white shadow-lg rounded-lg p-6 md:p-10 mt-10">
          <h2 className="text-xl font-bold mb-4">Dokumen Persyaratan</h2>
          <ol className="list-decimal list-inside space-y-1">
            <li>Fotokopi Akta Kelahiran (3 lembar)</li>
            <li>Fotokopi Kartu Keluarga (3 lembar)</li>
            <li>Fotokopi KTP Orang Tua/Wali (3 lembar)</li>
            <li>Pas foto berwarna ukuran 3x4 (4 lembar)</li>
            <li>Fotokopi Ijazah SMP/MTs (legalisir, 3 lembar)</li>
            <li>Surat Keterangan Lulus (jika ijazah belum keluar)</li>
            <li>Surat pernyataan calon siswa</li>
            <li>Surat pernyataan orang tua/wali</li>
          </ol>
        </div>

        {/* Tombol Daftar */}
        <div className="flex justify-center mt-10">
          <a
            href="https://wa.me/6281234567890"
            className="bg-pink-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-pink-700 transition"
          >
            Daftar Sekarang
          </a>
        </div>
      </section>
    </main>
  );
}