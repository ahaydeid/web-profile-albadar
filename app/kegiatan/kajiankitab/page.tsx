// app/kegiatan/kajiankitab/page.tsx
import { BookOpen, Users, ScrollText, BookMarked, Target, Globe2, Landmark, Compass, HeartHandshake, GraduationCap } from "lucide-react";

export default function KajianKitabPage() {
  const kajianKitab = [
    {
      name: "Amtsilati",
      desc: "Metode cepat memahami kaidah bahasa Arab secara praktis dan mudah diingat.",
      icon: BookOpen,
    },
    {
      name: "Muhadoroh",
      desc: "Latihan berbicara di depan umum untuk membentuk mental percaya diri.",
      icon: Users,
    },
    {
      name: "Jamiyatul Quro",
      desc: "Membaca Al-Qur’an secara tartil bersama-sama untuk memperkuat bacaan.",
      icon: ScrollText,
    },
    {
      name: "Jamiyatul Hufadz",
      desc: "Pembinaan hafalan Al-Qur’an secara rutin dan disiplin.",
      icon: BookMarked,
    },
    {
      name: "Leadership",
      desc: "Pembentukan jiwa kepemimpinan Islami yang berkarakter dan amanah.",
      icon: Target,
    },
    {
      name: "Nahwu & Sorof",
      desc: "Pendalaman tata bahasa Arab untuk memahami kitab kuning secara mendalam.",
      icon: Globe2,
    },
    {
      name: "Kitab Kuning",
      desc: "Kajian kitab klasik karya ulama salaf sebagai pedoman hidup Islami.",
      icon: Landmark,
    },
    {
      name: "Manasik Haji",
      desc: "Simulasi tata cara ibadah haji sesuai tuntunan syariat.",
      icon: Compass,
    },
    {
      name: "Amaliah Imamah",
      desc: "Pelatihan memimpin shalat dan tata cara menjadi imam yang benar.",
      icon: HeartHandshake,
    },
    {
      name: "Tahujul Mayit",
      desc: "Pembelajaran tata cara mengurus jenazah dengan benar sesuai sunnah.",
      icon: GraduationCap,
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      {/* Hero */}
      <section className="py-16 px-4 text-center bg-gradient-to-r from-emerald-600 to-green-500 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Kajian Kitab Kuning</h1>
        <p className="max-w-3xl mx-auto text-lg text-emerald-100">Mengkaji kitab-kitab klasik untuk membentuk generasi yang berilmu, berakhlak mulia, dan siap mengamalkan ajaran Islam.</p>
      </section>

      {/* Grid Kajian */}
      <section className="max-w-7xl mx-auto py-16 px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {kajianKitab.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl hover:bg-emerald-50 transition">
              <div className="flex items-center justify-center w-14 h-14 mx-auto mb-4 bg-emerald-100 text-emerald-600 rounded-full">
                <item.icon className="w-7 h-7" />
              </div>
              <h2 className="text-lg font-semibold text-emerald-700">{item.name}</h2>
              <p className="text-gray-600 mt-2 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-emerald-600 text-white py-12 px-4 text-center">
        <h2 className="text-2xl font-bold mb-3">Ingin Bergabung?</h2>
        <p className="max-w-2xl mx-auto text-emerald-100 mb-6">Jadilah bagian dari kajian kitab kuning di Al Badar dan raih ilmu yang bermanfaat dunia akhirat.</p>
        <a href="/pendaftaran" className="inline-block bg-white text-emerald-700 font-semibold px-6 py-3 rounded-full shadow hover:bg-emerald-100 transition">
          Daftar Sekarang
        </a>
      </section>
    </main>
  );
}
