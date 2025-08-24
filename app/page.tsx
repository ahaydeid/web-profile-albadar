// app/page.tsx
import Image from "next/image";
import JurusanSection from "./components/JurusanSection";
import AboutSection from "./components/AboutSection";
import ProgramUnggulanSection from "./components/ProgramUnggulanSection";
import AktivitasSection from "./components/AktivitasSection";
import TestimoniSection from "./components/TestimoniSection";
import KerjasamaSection from "./components/KerjasamaSection";
import ContactSection from "./components/ContactSection";

import "./globals.css";

export default function HomePage() {
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="py-12 px-20 relative overflow-hidden">
        {/* Background SVG wave */}
        <div className="absolute inset-x-0 bottom-0 h-40 -z-10 pointer-events-none">
          <Image src="/assets/images/hero2.svg" alt="Wave" width={1920} height={160} className="absolute bottom-0 left-0 w-full pointer-events-none" />
        </div>
        {/* Optional SVG tambahan */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-no-repeat bg-bottom bg-contain pointer-events-none" style={{ backgroundImage: "url('/assets/images/hero2.svg')" }}></div>

        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          {/* Left */}
          <div className="max-w-lg">
            <h2 className="text-3xl font-medium">Selamat datang di</h2>
            <h1 className="text-6xl font-bold" style={{ textShadow: "2px 1px 2px rgba(0,0,0,0.37)" }}>
              <span className="text-purple-700">SMKS Al Badar </span>
              <span className="text-[#FFD700]">Tangerang</span>
            </h1>
            <p className="italic text-gray-400 text-lg font-bold mt-5">&quot;Mencetak santri berilmu, berakhlak, dan bermanfaat bagi umat.&quot;</p>
            {/* <div className="flex items-center mt-15 gap-2 text-gray-700">
              <FaMapMarkerAlt className="text-red-500" />
              <span>Sukamantri, Kec. Balajara, Kabupaten Tangerang, Banten 15810</span>
            </div> */}

            {/* Social */}
            <div className="flex gap-4 mt-15">
              <a href="https://wa.me/6285814888500" target="_blank" rel="noopener noreferrer" aria-label="Hubungi via WhatsApp" className="transition transform hover:scale-110 hover:shadow-lg rounded-full">
                <Image src="/assets/icons/wa.png" alt="WhatsApp" width={40} height={40} />
              </a>

              <a href="mailto:smksalbadaroke@gmail.com" aria-label="Kirim Email" className="transition transform hover:scale-110 hover:shadow-lg rounded-full">
                <Image src="/assets/icons/mail.png" alt="Email" width={40} height={40} />
              </a>

              <a href="https://www.instagram.com/smk_albadar/?hl=id" target="_blank" rel="noopener noreferrer" aria-label="Kunjungi Instagram" className="transition transform hover:scale-110 hover:shadow-lg rounded-full">
                <Image src="/assets/icons/instagram.png" alt="Instagram" width={40} height={40} />
              </a>
            </div>

            <div className="flex gap-4 mt-4">
              <button className="bg-blue-600 text-white font-bold px-6 py-3 md:px-8 md:py-3 text-sm sm:text-lg rounded-full">Kontak Kami</button>
              <button className="bg-yellow-400 text-black font-bold px-6 py-3 md:px-8 md:py-3 text-sm sm:text-lg">Daftar Sekarang</button>
            </div>
          </div>

          {/* Right */}
          <div className="relative hidden lg:block">
            <div className="absolute -z-10 w-72 h-72 bg-yellow-400 rounded-full top-0 right-0"></div>
            <Image src="/assets/images/images.png" alt="Kepala Sekolah" width={400} height={400} className="relative z-10" />
            <p className="mt-4 font-bold text-[#FFD700] text-2xl border-b border-white" style={{ textShadow: "2px 1px 2px rgba(0,0,0,0.37)" }}>
              KH. Waskurni, S.Ag., M.Si.
            </p>
            <p className="text-lg text-white">Kepala Yayasan Al Badar</p>
          </div>
        </div>
      </section>

      {/* Sekilas Tentang Kita */}
      <AboutSection />

      {/* Jurusan */}
      <JurusanSection />

      {/* Program Unggulan */}
      <ProgramUnggulanSection />

      {/* Aktivitas */}
      <AktivitasSection />

      <hr className="border-t-[3px] border-[#DDDDDD] w-[90%] mx-auto" />

      {/* Kata Wali Murid */}
      <TestimoniSection />

      <hr className="border-t-[3px] border-[#DDDDDD] w-[90%] mx-auto" />

      {/* Kerjasama Perusahaan */}
      <KerjasamaSection />

      {/* Hubungi Kami */}
      <ContactSection />
    </main>
  );
}
