"use client";

import Image from "next/image";

export default function GuruStaffPage() {
  const dataGuruStaff = [
    { foto: "/assets/images/man.png", nama: "Hambali, S.Pd.I", gender: "Laki-laki", jabatan: "Wakasek Bidang Kurikulum SMP", jurusan: "Pendidikan Agama Islam", universitas: "STITMAA Jakarta" },
    { foto: "/assets/images/man.png", nama: "Eva Ocvayanti, S.Pd", gender: "Perempuan", jabatan: "Wakasek Kesiswaan SMK", jurusan: "Pendidikan Bahasa dan Sastra Indonesia", universitas: "STKIP Siliwangi Bandung" },
    { foto: "/assets/images/man.png", nama: "Nailan Indah Bestari, SE", gender: "Perempuan", jabatan: "Guru", jurusan: "Akuntansi", universitas: "STIE Tridharma" },
    { foto: "/assets/images/man.png", nama: "Rian Putra Perdana", gender: "Laki-laki", jabatan: "Guru", jurusan: "Otomotif", universitas: "SMK PGRI 1 Kertosono" },
    { foto: "/assets/images/man.png", nama: "Maya Kusmiati", gender: "Perempuan", jabatan: "Guru/BP/BK SMP", jurusan: "Pendidikan Agama Islam", universitas: "IAIN SMH Banten" },
    { foto: "/assets/images/man.png", nama: "Samsul Muarip", gender: "Laki-laki", jabatan: "Satpam", jurusan: "-", universitas: "SD Dangdeur 1" },
    { foto: "/assets/images/man.png", nama: "Indrayani Hidayat S.Kom", gender: "Laki-laki", jabatan: "Wakasek Kurikulum SMK", jurusan: "Sistem Informasi", universitas: "STMIK Insan Pembangunan" },
    { foto: "/assets/images/man.png", nama: "Rina Haafizoh. PS, S.Pd", gender: "Perempuan", jabatan: "Guru", jurusan: "Tadris Bahasa Inggris", universitas: "UIN Sultan Maulana Hasanudin Banten" },
    { foto: "/assets/images/man.png", nama: "Muhamad Bagus Rizki Fajar", gender: "Laki-laki", jabatan: "Guru", jurusan: "Hukum Keluarga Islam", universitas: "Universitas Syekh Nawawi Banten" },
    { foto: "/assets/images/man.png", nama: "Ayati, S. Pd", gender: "Perempuan", jabatan: "Guru", jurusan: "Pendidikan Ekonomi", universitas: "STKIP Panca Sakti Bekasi" },
    { foto: "/assets/images/man.png", nama: "Maman Fathurahman, S. Pd", gender: "Laki-laki", jabatan: "Guru", jurusan: "Psikologi Pendidikan", universitas: "STAI Publisistik Thawalib Jakarta" },
    { foto: "/assets/images/man.png", nama: "Drs. Muhamad Hanafi", gender: "Laki-laki", jabatan: "Kep.Program Otomotif", jurusan: "Pendidikan Teknik Mesin", universitas: "UNS (Universitas Sebelas Maret)" },
    { foto: "/assets/images/man.png", nama: "Muhamad Rizki Pawuzi S.Pd", gender: "Laki-laki", jabatan: "Guru", jurusan: "Pendidikan Pancasila dan Kewarganegaraan", universitas: "Universitas Pamulang" },
    { foto: "/assets/images/man.png", nama: "Syahroni", gender: "Laki-laki", jabatan: "Ka.Kejuruan Otomotif TKR dan TBSM", jurusan: "Otomtif", universitas: "STAI Darul Qalam" },
    { foto: "/assets/images/man.png", nama: "Nurhayati, SE", gender: "Perempuan", jabatan: "Kaprog. MPLB", jurusan: "Ekonomi/Manajemen", universitas: "Untirta Banten" },
    { foto: "/assets/images/man.png", nama: "Ayunah, S.Pd", gender: "Perempuan", jabatan: "Guru", jurusan: "-", universitas: "-" },
    { foto: "/assets/images/man.png", nama: "Ahmad Idham Firdaus", gender: "Laki-laki", jabatan: "Bendahara SMK", jurusan: "Managemen Perkantoran", universitas: "SMK Albadar" },
    { foto: "/assets/images/man.png", nama: "Moh. Sarif Hidayatullah", gender: "Laki-laki", jabatan: "Guru", jurusan: "Teknik Informatika", universitas: "UNIS Tangerang" },
    { foto: "/assets/images/man.png", nama: "Dudy Ruchyat, S.Kom", gender: "Laki-laki", jabatan: "Guru", jurusan: "-", universitas: "-" },
    { foto: "/assets/images/man.png", nama: "Mohamad Abdul Rohim S.Pd", gender: "Laki-laki", jabatan: "Guru", jurusan: "PJOK", universitas: "STKIP Pelita Pratama Serang" },
    { foto: "/assets/images/man.png", nama: "Gusti Ario Galang Marhaendra", gender: "Laki-laki", jabatan: "Guru", jurusan: "Ilmu hukum", universitas: "UNPAM" },
    { foto: "/assets/images/man.png", nama: "Alvian Prihatno,S.Pd", gender: "Laki-laki", jabatan: "Guru", jurusan: "Matematika", universitas: "-" },
    { foto: "/assets/images/man.png", nama: "Aniza Sari, .S.Si", gender: "Perempuan", jabatan: "Guru", jurusan: "Matematika dan Ilmu Pengetahuan Alam", universitas: "Universitas Negri Padang" },
    { foto: "/assets/images/man.png", nama: "Kamaludin,S.Kom", gender: "Laki-laki", jabatan: "Guru", jurusan: "Sarjana Komputer", universitas: "STT Telematika" },
    { foto: "/assets/images/man.png", nama: "Rahmadan Akbar", gender: "Laki-laki", jabatan: "Guru", jurusan: "D3 Manajemen Informatika", universitas: "BSI Bina Sarana Informatika" },
    { foto: "/assets/images/man.png", nama: "Anggita", gender: "Laki-laki", jabatan: "Guru", jurusan: "-", universitas: "-" },
    { foto: "/assets/images/man.png", nama: "Ahadi, S.Kom", gender: "Laki-laki", jabatan: "Guru", jurusan: "Teknologi Informasi", universitas: "Universitas Insan Pembangunan Indonesia" },
    { foto: "/assets/images/man.png", nama: "Abdul Kholik", gender: "Laki-laki", jabatan: "Guru", jurusan: "Pendidikan", universitas: "Universitas Salahuddin Al Ayubi Jakarta" },
  ];

  return (
    <main className="min-h-screen bg-slate-50 font-fredoka">
      {/* Hero Section */}
      <section className="relative bg-[#3B2F63] text-white py-24 px-6 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-yellow-400 rounded-full blur-3xl opacity-20" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-400 rounded-full blur-3xl opacity-20" />
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-yellow-400 text-[#3B2F63] rounded-full text-xs font-bold mb-8 uppercase tracking-[0.2em]">
            AKADEMIK
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Guru & <span className="text-yellow-400">Staff</span>
          </h1>
          <p className="text-lg md:text-xl text-purple-100 max-w-2xl mx-auto leading-relaxed font-medium">
            Daftar tenaga pendidik dan kependidikan profesional SMKS Al-Badar Dangdeur.
          </p>
        </div>
      </section>

      {/* Table Section */}
      <section className="py-24 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-lg shadow border border-slate-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#3B2F63] text-white">
                    <th className="py-6 px-8 text-xs font-black uppercase tracking-widest">No</th>
                    <th className="py-6 px-8 text-xs font-black uppercase tracking-widest">Foto</th>
                    <th className="py-6 px-8 text-xs font-black uppercase tracking-widest">Nama Lengkap</th>
                    <th className="py-6 px-8 text-xs font-black uppercase tracking-widest">Jabatan</th>
                    <th className="py-6 px-8 text-xs font-black uppercase tracking-widest">Keahlian / Jurusan</th>
                    <th className="py-6 px-8 text-xs font-black uppercase tracking-widest">Universitas / Almamater</th>
                  </tr>
                </thead>
                <tbody>
                  {dataGuruStaff.map((staff, index) => (
                    <tr 
                      key={index} 
                      className={`group border-b border-slate-100 hover:bg-slate-50 transition-colors duration-300 ${index % 2 === 0 ? "bg-white" : "bg-slate-50/30"}`}
                    >
                      <td className="py-6 px-8 text-[#3B2F63] font-bold text-sm">
                        {String(index + 1).padStart(2, '0')}
                      </td>
                      <td className="py-6 px-8">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md group-hover:scale-110 transition-transform">
                          <Image src={staff.foto} alt={staff.nama} fill className="object-cover" />
                        </div>
                      </td>
                      <td className="py-6 px-8">
                        <p className="font-bold text-[#3B2F63] text-base group-hover:translate-x-1 transition-transform">
                          {staff.nama}
                        </p>
                        <p className="text-xs text-slate-400 font-medium">{staff.gender}</p>
                      </td>
                      <td className="py-6 px-8">
                        <span className={`inline-flex px-4 py-1.5 whitespace-nowrap rounded-full text-[10px] font-black uppercase tracking-wider ${
                          staff.jabatan.toLowerCase().includes('wakasek') || staff.jabatan.toLowerCase().includes('kep.') || staff.jabatan.toLowerCase().includes('ka.')
                          ? "bg-[#3B2F63] text-white" 
                          : "bg-yellow-400 text-[#3B2F63]"
                        }`}>
                          {staff.jabatan}
                        </span>
                      </td>
                      <td className="py-6 px-8 text-slate-600 text-sm font-medium">
                        {staff.jurusan !== "-" ? staff.jurusan : "—"}
                      </td>
                      <td className="py-6 px-8 text-slate-600 text-sm font-medium">
                        {staff.universitas !== "-" ? staff.universitas : "—"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Footer */}
      <section className="pb-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
           <p className="text-[#3B2F63] font-bold text-lg mb-4 italic opacity-80">&quot;Mendidik dengan hati, membimbing dengan keteladanan.&quot;</p>
           <div className="w-20 h-1 bg-yellow-400 mx-auto rounded-full" />
        </div>
      </section>
    </main>
  );
}
