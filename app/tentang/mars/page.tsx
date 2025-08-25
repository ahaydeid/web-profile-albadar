"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Play, Pause } from "lucide-react";

export default function MarsPage() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <main className="bg-gradient-to-br from-purple-800 via-purple-900 to-purple-950 min-h-screen text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-6 text-center overflow-hidden">
        <Image src="/assets/images/images.png" alt="Mars Al Badar" fill className="object-cover opacity-20" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Mars Al Badar</h1>
          <p className="text-lg text-gray-200">Lagu kebanggaan yang membangkitkan semangat dan persatuan civitas Al Badar.</p>
        </div>
      </section>

      {/* Konten Lirik */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-bold text-yellow-400 mb-6">Lirik Mars Al Badar</h2>
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. <br />
              Duis aute irure dolor in reprehenderit in voluptate.
            </p>
            <p>
              Excepteur sint occaecat cupidatat non proident. <br />
              Sunt in culpa qui officia deserunt mollit anim id est laborum. <br />
              Pellentesque habitant morbi tristique senectus et netus et malesuada. <br />
              Fusce dapibus tellus ac cursus commodo.
            </p>
            <p className="font-semibold text-yellow-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit!</p>
          </div>
        </div>
      </section>

      {/* Custom Audio Player */}
      <section className="text-center pb-20">
        <button onClick={togglePlay} className="bg-yellow-400 text-purple-900 p-6 rounded-full shadow-lg hover:scale-110 transition-transform">
          {isPlaying ? <Pause size={40} /> : <Play size={40} />}
        </button>
        <p className="mt-3 text-gray-300 text-sm">{isPlaying ? "Memutar Mars Al Badar" : "Klik untuk Memutar"}</p>
        <audio ref={audioRef} src="/audio/lagutemplate.mp3" />
      </section>
    </main>
  );
}
