// app/page.tsx
import JurusanSection from "../components/JurusanSection";
import AboutSection from "../components/AboutSection";
import ProgramUnggulanSection from "../components/ProgramUnggulanSection";
import TestimoniSection from "../components/TestimoniSection";
import KerjasamaSection from "../components/KerjasamaSection";
import HeroSection from "../components/HeroSection";

import "../globals.css";

export default function HomePage() {
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <HeroSection />

      {/* Sekilas Tentang Kita */}
      <AboutSection />

      {/* Jurusan */}
      <JurusanSection />

      {/* Program Unggulan */}
      <ProgramUnggulanSection />

      <hr className="border-t-[3px] border-[#DDDDDD] w-[90%] mx-auto" />

      {/* Kata Wali Murid */}
      <TestimoniSection />

      <hr className="border-t-[3px] border-[#DDDDDD] w-[90%] mx-auto" />

      {/* Kerjasama Perusahaan */}
      <KerjasamaSection />
    </main>
  );
}
