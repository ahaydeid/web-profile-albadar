import Image from "next/image";
import Link from "next/link";

export default function VisiMisiPage() {
  return (
    <main className="bg-gray-50">
      {/* Hero */}
      <section className="relative bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20 px-4 md:px-10">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Visi & Misi</h1>
          <p className="text-gray-200 text-base md:text-lg max-w-3xl mx-auto">
            Menjadi lembaga pendidikan vokasional yang menanamkan nilai
            Pancasila dan mempersiapkan siswanya memiliki kompetensi industri
            berstandar internasional.
          </p>
        </div>
      </section>

      {/* Visi */}
      <section className="py-16 px-4 md:px-10 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/assets/images/images.png"
              alt="Visi sekolah"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-semibold mb-6 text-gray-900">Visi</h2>
            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-xl shadow-sm">
              <p className="text-gray-700 text-lg leading-relaxed">
                Menjadi Lembaga Pendidikan Vokasional yang Menanamkan Nilai
                Pancasila dan Mempersiapkan Siswanya Memiliki Kompetensi
                Industri Berstandar Internasional Sehingga Lulusannya Memiliki
                Hard Skill, Soft Skill & Performa Karakter Unggul yang Mampu
                Bersaing dalam Kompetisi Global.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Misi */}
      <section className="py-20 px-4 md:px-10 bg-gray-100">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Misi <span className="text-purple-600">Kami</span>
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Strategi yang ditempuh untuk mewujudkan visi SMK Al Badar.
          </p>
        </div>

        <ol className="max-w-4xl mx-auto space-y-6 text-left">
          {[
            "Meningkatkan literasi dan kompetensi IT pada guru dan siswa sesuai tuntutan revolusi industri 4.0.",
            "Mengembangkan dan memperkuat sinergi link and match dengan mitra industri di dalam dan luar negeri.",
            "Menguatkan hubungan kemitraan dengan lembaga pendidikan tinggi vokasi di dalam dan luar negeri.",
            "Mengembangkan kurikulum internasional dengan Bahasa Inggris sebagai bahasa pengantar wajib dalam pembelajaran produktif.",
            "Menguatkan fungsi LSP sebagai lembaga berwenang assessment berbasis industri.",
            "Mengembangkan PBM melalui Hybrid Model Learning System (daring dan luring, LMS, teleconference, Canva, Forms Guide).",
            "Menanamkan nilai-nilai religius, integritas, kerja keras, pantang menyerah, profesionalisme, dan entrepreneurship.",
            "Menguatkan pembinaan karakter & moral Pancasila melalui keteladanan guru.",
            "Meningkatkan kemampuan berpikir kritis siswa melalui penguatan pembelajaran STEAM.",
            "Mengembangkan sekolah pencetak wirausaha melalui Teaching Factory.",
            "Mengembangkan program SMK-Fast Track (jalur cepat setara Diploma 2) untuk kompetensi hospitality, IT, dan bisnis.",
          ].map((misi, i) => (
            <li
              key={i}
              className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <span className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-100 text-purple-600 font-bold shrink-0">
                {i + 1}
              </span>
              <p className="text-gray-700 leading-relaxed">{misi}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 md:px-10 bg-gradient-to-r from-yellow-400 to-orange-400 text-center text-black">
        <h3 className="text-2xl md:text-3xl font-semibold mb-4">
          Bersama Mewujudkan Visi & Misi
        </h3>
        <p className="text-gray-800 max-w-2xl mx-auto mb-6">
          Mari bersinergi untuk mencetak generasi yang siap menghadapi
          tantangan zaman dengan iman, ilmu, dan amal.
        </p>
        <Link
          href="/"
          className="inline-block bg-black hover:bg-gray-900 text-white font-medium px-6 py-3 rounded-full shadow transition"
        >
          Kembali ke Beranda
        </Link>
      </section>
    </main>
  );
}
