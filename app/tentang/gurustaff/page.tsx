// app/tentang/gurustaff/page.tsx
import Image from "next/image";

export default function GuruStaffPage() {
  // Data guru/staff
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
  ];

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Judul Halaman */}
        <div className="text-center mb-14">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 text-[#5b00b2]">
            Guru & <span className="text-yellow-500">Staf</span>
          </h1>
          <p className="text-gray-700 text-sm md:text-base max-w-2xl mx-auto">Tenaga pendidik dan staf terbaik yang berkomitmen untuk mendidik, membimbing, serta melayani siswa dengan sepenuh hati.</p>
          <hr className="border-t-[3px] mt-5 border-[#DDDDDD] w-[50%] mx-auto" />
        </div>
        <div className="overflow-x-auto shadow-lg rounded-xl bg-white">
          <table className="w-full text-sm text-gray-700">
            <thead className="bg-gradient-to-r from-purple-700 to-indigo-500 text-white">
              <tr>
                <th className="py-4 px-6 text-left">No</th>
                <th className="py-4 px-6 text-left">Foto</th>
                <th className="py-4 px-6 text-left">Nama Lengkap</th>
                <th className="py-4 px-6 text-left">Jenis Kelamin</th>
                <th className="py-4 px-6 text-left">Posisi</th>
                <th className="py-4 px-6 text-left">Jurusan</th>
                <th className="py-4 px-6 text-left">Almamater</th>
              </tr>
            </thead>
            <tbody>
              {dataGuruStaff.map((item, index) => (
                <tr key={index} className={`hover:bg-blue-50 transition ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                  <td className="py-4 px-6">{index + 1}</td>
                  <td className="py-4 px-6">
                    <div className="w-14 h-14 relative rounded-full overflow-hidden shadow-md">
                      <Image src={item.foto} alt={item.nama} fill className="object-cover" />
                    </div>
                  </td>
                  <td className="py-4 px-6 font-medium">{item.nama}</td>
                  <td className="py-4 px-6">{item.gender}</td>
                  <td className="py-4 px-6">{item.jabatan}</td>
                  <td className="py-4 px-6">{item.jurusan}</td>
                  <td className="py-4 px-6">{item.universitas}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
