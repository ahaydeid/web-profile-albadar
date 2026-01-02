// app/kegiatan/pondok/page.tsx
import { BookOpen, ScrollText, PenLine, PenTool, Landmark, Quote, Heart, GraduationCap, PenSquare } from "lucide-react";
import Image from "next/image";

export default function PondokPage() {
  const kegiatanPondok = [
    { name: "Tafsir Qur’an", icon: BookOpen },
    { name: "Amil dan Jurumiyah", icon: PenTool },
    { name: "Tijanud Durori", icon: ScrollText },
    { name: "Shulamu Thaufid", icon: PenLine },
    { name: "Tamhqihul Qaul", icon: PenSquare },
    { name: "Bulugul Marom", icon: BookOpen },
    { name: "Sittin", icon: Landmark },
    { name: "Riyadul Badi’ah", icon: Heart },
    { name: "Ahlakul Banin Wa Bannat", icon: GraduationCap },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] w-full">
        <Image src="/assets/images/images.png" alt="Kegiatan Pondok" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">Kegiatan Pondok</h1>
            <p className="max-w-2xl mx-auto text-lg text-amber-100">Menumbuhkan keilmuan, akhlak, dan spiritualitas santri melalui kegiatan pondok yang terarah dan penuh keberkahan.</p>
          </div>
        </div>
      </section>

      {/* Deskripsi Singkat */}
      <section className="max-w-5xl mx-auto py-12 px-4 text-center">
        <p className="text-gray-700 leading-relaxed text-lg">
          Pondok Pesantren Al Badar membekali santri dengan kegiatan yang berfokus pada pendalaman ilmu agama, pembentukan karakter, serta pengamalan ajaran Islam dalam kehidupan sehari-hari.
        </p>
      </section>

      {/* List Kegiatan Pondok */}
      <section className="max-w-7xl mx-auto py-8 px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {kegiatanPondok.map((item, i) => (
            <div key={i} className="bg-amber-100 border border-amber-200 rounded-2xl shadow-md p-6 text-center hover:shadow-lg hover:bg-amber-200 transition">
              <div className="flex items-center justify-center w-14 h-14 mx-auto mb-4 bg-amber-300 text-amber-800 rounded-full">
                <item.icon className="w-7 h-7" />
              </div>
              <h2 className="text-lg font-semibold text-amber-800">{item.name}</h2>
            </div>
          ))}
        </div>
      </section>

      {/* Quote Penutup */}
      <section className="bg-amber-600 text-white py-12 px-4 text-center">
        <Quote className="w-10 h-10 mx-auto mb-4 opacity-80" />
        <p className="max-w-2xl mx-auto italic text-lg mb-4">“Barangsiapa yang menempuh jalan untuk mencari ilmu, maka Allah akan memudahkan baginya jalan menuju surga.”</p>
        <span className="block text-amber-200">— HR. Muslim</span>
      </section>
    </main>
  );
}
