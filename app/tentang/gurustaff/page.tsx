import Image from "next/image";

export default function GuruStafPage() {
  const guru = [
    { nama: "Siti Rahmawati, S.Pd", jabatan: "Wakil Kepala Sekolah", img: "/assets/images/images.jpeg" },
    { nama: "Kamaludin, S.Kom", jabatan: "Guru Coding", img: "/assets/images/images.jpeg" },
    { nama: "Joko Santoso, S.Kom", jabatan: "Guru Produktif", img: "/assets/images/images.jpeg" },
    { nama: "Lina Marlina, S.Pd", jabatan: "Guru Bahasa", img: "/assets/images/images.jpeg" },
    { nama: "Nur Aini, M.Pd", jabatan: "Guru Matematika", img: "/assets/images/images.jpeg" },
  ];

  const staf = [
    { nama: "Rudi Hartono, S.E", jabatan: "Staf Administrasi", img: "/assets/images/images.jpeg" },
    { nama: "Wati Susanti", jabatan: "Staf Tata Usaha", img: "/assets/images/images.jpeg" },
  ];

  return (
    <section className="min-h-screen bg-[#faf9ff] py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Judul Halaman */}
        <div className="text-center mb-14">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 text-[#5b00b2]">
            Guru & <span className="text-yellow-500">Staf</span>
          </h1>
          <p className="text-gray-700 text-sm md:text-base max-w-2xl mx-auto">Tenaga pendidik dan staf terbaik yang berkomitmen untuk mendidik, membimbing, serta melayani siswa dengan sepenuh hati.</p>
        <hr className="border-t-[3px] mt-5 border-[#DDDDDD] w-[50%] mx-auto" />
        </div>


        {/* Bagian Kepala Sekolah */}
        <div className="mb-20">
          <h2 className="text-2xl md:text-4xl font-bold text-yellow-500 mb-8 text-center">Kepala Sekolah</h2>
          <div className="flex justify-center">
            <div className="bg-white w-72 h-[380px] flex flex-col rounded-2xl shadow-lg overflow-hidden group border border-[#5b00b2]/20 hover:shadow-xl transition">
              <div className="relative w-full h-56 overflow-hidden">
                <Image src="/assets/images/images.jpeg" alt="Nama Kepala Sekolah" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#5b00b2]/60 via-transparent opacity-0 group-hover:opacity-100 transition"></div>
              </div>
              <div className="p-4 text-center flex-grow flex flex-col justify-center">
                <h2 className="text-2xl font-semibold text-[#5b00b2]">Suhaili, S.Pd</h2>
                <p className="text-sm text-gray-600">Kepala Sekolah</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bagian Guru */}
        <div className="mb-20">
          <h2 className="text-2xl md:text-4xl font-bold text-[#5b00b2] mb-8 text-center">Guru</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {guru.map((person, i) => (
              <div key={i} className="bg-white w-64 h-[350px] flex flex-col rounded-2xl shadow-lg overflow-hidden group border border-[#5b00b2]/20 hover:shadow-xl transition">
                <div className="relative w-full h-48 overflow-hidden">
                  <Image src={person.img} alt={person.nama} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#5b00b2]/60 via-transparent opacity-0 group-hover:opacity-100 transition"></div>
                </div>
                <div className="p-4 text-center flex-grow flex flex-col justify-center">
                  <h3 className="text-lg font-semibold text-[#5b00b2]">{person.nama}</h3>
                  <p className="text-sm text-gray-600">{person.jabatan}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bagian Staf */}
        <div>
          <h2 className="text-2xl md:text-4xl font-bold text-yellow-500 mb-8 text-center">Staf</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {staf.map((person, i) => (
              <div key={i} className="bg-white w-64 h-[350px] flex flex-col rounded-2xl shadow-lg overflow-hidden group border border-[#5b00b2]/20 hover:shadow-xl transition">
                <div className="relative w-full h-48 overflow-hidden">
                  <Image src={person.img} alt={person.nama} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#5b00b2]/60 via-transparent opacity-0 group-hover:opacity-100 transition"></div>
                </div>
                <div className="p-4 text-center flex-grow flex flex-col justify-center">
                  <h3 className="text-lg font-semibold text-[#5b00b2]">{person.nama}</h3>
                  <p className="text-sm text-gray-600">{person.jabatan}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer / Catatan */}
        <div className="text-center mt-20">
          <p className="text-gray-700 max-w-2xl mx-auto">Mereka adalah bagian penting dari perjalanan SMK Al-Badar dalam mencetak generasi yang berkarakter, cerdas, dan berdaya saing.</p>
        </div>
      </div>
    </section>
  );
}
