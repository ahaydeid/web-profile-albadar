"use client";

import { MdPhone, MdEmail } from "react-icons/md";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Background dekorasi */}
      <div className="absolute inset-0 -z-10">
        <div className="w-40 h-40 bg-blue-200/40 rounded-full blur-3xl absolute top-10 left-10" />
        <div className="w-60 h-60 bg-purple-200/40 rounded-full blur-3xl absolute bottom-10 right-10" />
      </div>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12 relative z-10">
        {/* MAP */}
        <div className="flex flex-col">
          <div className="rounded-2xl overflow-hidden shadow-lg h-64 md:h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.435278684083!2d106.42082587459917!3d-6.206173393781628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e4203e9f8c11e7b%3A0x4ac748bdb0718b70!2sSMK%20AL-BADAR!5e0!3m2!1sid!2sid!4v1756051543968!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <a href="https://maps.app.goo.gl/thVvcoRuaAiEzDTV8" target="_blank" rel="noopener noreferrer" className="mt-6 inline-block text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-xl shadow transition">
            Buka di Google Maps
          </a>
        </div>

        {/* KONTAK */}
        <div>
          <h3 className="text-2xl font-bold mb-8">Hubungi Kami</h3>
          <ul className="space-y-5 text-gray-700 text-base">
            <li className="flex items-center gap-3">
              <MdPhone className="text-blue-600 text-lg" /> 0812-3456-7891
            </li>
            <li className="flex items-center gap-3">
              <MdEmail className="text-blue-600 text-lg" /> admin@albadar.ac.id
            </li>
            <li className="flex items-center gap-3">
              <FaWhatsapp className="text-green-500 text-lg" /> 0812-3456-7891
            </li>
            <li className="flex items-center gap-3">
              <FaInstagram className="text-pink-500 text-lg" /> @albadartangerang
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600">📍</span>
              <p className="leading-relaxed">SMK Al Badar Tangerang, Sukamantri, Kec. Balajara, Kabupaten Tangerang, Banten 15810</p>
            </li>
          </ul>
        </div>

        {/* FORM */}
        <form className="bg-white rounded-2xl shadow-sm p-8 space-y-5">
          <input type="text" placeholder="Nama" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none" />
          <input type="text" placeholder="No. HP" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none" />
          <textarea placeholder="Tulis pesan di sini..." rows={4} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none" />
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg shadow transition">Kirim Pesan</button>
        </form>
      </div>
    </section>
  );
}
