import Image from "next/image";
import Link from "next/link";

export default function SejarahPage() {
  return (
    <section className="min-h-screen bg-[#faf9ff] py-16 px-4 md:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Judul */}
        <div className="text-center mb-14">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 text-[#4b0082]">
            Sejarah <span className="text-yellow-500">SMK Al-Badar</span>
          </h1>
          <p className="text-gray-700 text-sm md:text-base max-w-2xl mx-auto">
            Kisah perjalanan berdirinya SMK Al-Badar yang lahir dari sebuah keprihatinan, tumbuh menjadi tekad, dan berkembang hingga menjadi salah satu lembaga pendidikan yang berkarakter, mandiri, serta berlandaskan iman.
          </p>
        </div>

        {/* Hero Section */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl mb-20">
          <Image src="/assets/images/images.png" alt="Sejarah SMK Al-Badar" width={1200} height={500} className="object-cover w-full h-[300px] md:h-[450px]" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-[#5b00b2]/80 to-[#8e2de2]/70 flex items-center justify-center">
            <h2 className="text-white text-2xl md:text-4xl font-bold text-center drop-shadow-lg px-4">Dari Keprihatinan Menjadi Harapan</h2>
          </div>
        </div>

        {/* Awal Berdiri */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-[#5b00b2]">Awal Berdirinya</h3>
            <p className="text-gray-800 leading-relaxed text-justify mb-4">
              Berawal dari sebuah keprihatinan, muncul sebuah pemikiran dan terbentuklah sebuah tekad. Keprihatinan muncul ketika melihat maraknya <span className="font-semibold">materialisme</span> dan
              <span className="font-semibold"> konsumerisme</span> yang dibuktikan dengan habisnya tanah dan sawah dijual tanpa mempertimbangkan masa depan anak cucu.
            </p>
            <p className="text-gray-800 leading-relaxed text-justify mb-4">
              Pertanyaan besar pun muncul: <em>“Mau tinggal di mana mereka? Mau diwariskan apa anak cucu kita nanti?”</em>. Sayangnya, yang terpikir saat itu hanyalah bagaimana sawah dan tanah cepat menjadi uang.
            </p>
            <p className="text-gray-800 leading-relaxed text-justify">
              Akhirnya lahirlah sebuah pemikiran besar: tidak ada solusi lain kecuali anak cucu harus dibekali ilmu yang berlandaskan iman, dan pendidikan tersebut tidak boleh membebani orang tua.
            </p>
          </div>

          <div className="relative w-full h-72 rounded-2xl overflow-hidden shadow-lg border-4 border-[#5b00b2]/30">
            <Image src="/assets/images/images.png" alt="Awal berdirinya" fill className="object-cover" />
          </div>
        </div>

        {/* Perjuangan Awal */}
        <div className="mt-20">
          <h3 className="text-xl md:text-2xl font-semibold mb-6 text-[#5b00b2] text-center">Tekad di Tahun 2008</h3>
          <p className="text-gray-800 leading-relaxed text-justify mb-4">
            Pada tahun <span className="font-semibold">2008</span>, berbekal niat ibadah seraya memohon ridho dan perlindungan Allah SWT, para pendiri Al-Badar bertekad melawan kebodohan dengan prinsip:
            <span className="italic"> belajar, belajar, dan terus belajar</span>. Meski tidak dapat mewariskan harta berupa sawah dan tanah, mereka berharap dengan ilmu dan ijazah, generasi muda Banten kelak tidak menjadi “tamu di rumahnya
            sendiri”.
          </p>
          <p className="text-gray-800 leading-relaxed text-justify">
            Tantangan, rintangan, cemoohan, bahkan fitnah silih berganti menghadang. Namun berkat kesungguhan dan pertolongan Allah SWT, Al-Badar yang awalnya hanya memiliki <span className="font-bold">143 siswa</span> di tahun 2008, kini
            telah berkembang pesat hingga mencapai lebih dari <span className="font-bold">1.898 siswa</span>.
          </p>
        </div>

        {/* Perkembangan */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-20">
          <div className="relative w-full h-72 rounded-2xl overflow-hidden shadow-lg border-4 border-[#5b00b2]/30 md:order-1 order-2">
            <Image src="/assets/images/images.png" alt="Perkembangan sekolah" fill className="object-cover" />
          </div>

          <div className="order-1 md:order-2">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-[#5b00b2]">Perjalanan & Perkembangan</h3>
            <p className="text-gray-800 leading-relaxed text-justify mb-4">
              Meski didominasi oleh para alumni pondok pesantren modern, Al-Badar tetap berkomitmen mempertahankan tradisi pesantren salafi. Tradisi ini diwujudkan melalui <em>ngaji sorogan</em>, pengkajian kitab-kitab klasik seperti{" "}
              <em>Amil</em> dan <em>Jurumiyah</em>
              karya ulama besar Banten Syeikh Nawawi al-Bantani, serta metode pengajian kitab kuning dengan sistem “coretan”.
            </p>
            <p className="text-gray-800 leading-relaxed text-justify">
              Namun untuk kedisiplinan santri, digunakan sistem pondok pesantren modern. Hal ini menjadi cerminan prinsip Al-Badar: menjaga
              <span className="font-semibold"> tradisi ulama salafi</span> sebagai sebuah keharusan, sekaligus menerima modernisasi dan industrialisasi yang positif sebagai sebuah keniscayaan.
            </p>
          </div>
        </div>

        {/* Call To Action */}
        <div className="text-center mt-24">
          <h4 className="text-xl md:text-2xl font-semibold mb-4 text-[#5b00b2]">Bersama Membangun Generasi Berkarakter</h4>
          <p className="text-gray-700 max-w-2xl mx-auto mb-6">
            Sejarah SMK Al-Badar adalah bukti nyata bahwa dengan tekad, iman, dan kesungguhan, sebuah keprihatinan bisa berubah menjadi harapan besar. Mari bersama-sama melanjutkan perjuangan ini, mencetak generasi unggul, mandiri, dan
            berakhlak mulia.
          </p>
          <Link href="/" className="inline-block bg-[#5b00b2] hover:bg-[#4a0099] text-white font-medium px-8 py-3 rounded-full shadow-lg transition">
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </section>
  );
}
