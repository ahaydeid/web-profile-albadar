"use client";

import { useRef, useState } from "react";
import { Play, Pause, Music, Volume2, SkipBack, SkipForward } from "lucide-react";

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
    <main className="min-h-screen bg-white font-fredoka">
      {/* Hero Section */}
      <section className="relative bg-[#3B2F63] text-white py-24 px-6 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-yellow-400 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-400 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-yellow-400 text-[#3B2F63] rounded-full text-xs font-bold mb-8 uppercase tracking-[0.2em]">
            HYMNE & MARS
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Mars <span className="text-yellow-400">Al-Badar Dangdeur</span>
          </h1>
          <p className="text-lg md:text-xl text-purple-100 max-w-2xl mx-auto leading-relaxed font-medium">
            Lagu kebanggaan yang mengobarkan semangat persatuan, integritas, dan pengabdian seluruh civitas SMK Al-Badar Dangdeur.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 px-6 md:px-10 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="relative group">
            {/* Animated Musical Notes (visible when playing) */}
            {isPlaying && (
              <div className="absolute -top-10 -left-10 w-full h-full pointer-events-none z-0">
                <Music className="absolute text-purple-200 animate-bounce transition-all duration-1000 top-0 left-[10%]" size={24} />
                <Music className="absolute text-yellow-200 animate-pulse transition-all duration-1000 top-10 left-[80%] delay-300" size={32} />
                <Music className="absolute text-purple-100 animate-bounce transition-all duration-1000 top-40 left-[5%] delay-700" size={20} />
              </div>
            )}

            <div className="relative z-10 p-1 bg-gradient-to-br from-purple-100 to-yellow-50 rounded-[40px] shadow-xl">
              <div className="bg-white/90 backdrop-blur-xl p-10 md:p-16 rounded-[38px] border border-white">
                <div className="text-center mb-12">
                   <div className="inline-flex items-center gap-2 px-6 py-2 bg-[#3B2F63] text-white rounded-full text-xs font-bold mb-6 uppercase tracking-[0.2em]">
                      LIRIK LAGU
                   </div>
                </div>
                
                <div className="space-y-10 text-center text-slate-700 leading-relaxed text-xl font-medium">
                  <div className="space-y-2">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                    <p>Duis aute irure dolor in reprehenderit in voluptate.</p>
                  </div>

                  <div className="space-y-2">
                    <p>Excepteur sint occaecat cupidatat non proident.</p>
                    <p>Sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada.</p>
                    <p>Fusce dapibus tellus ac cursus commodo.</p>
                  </div>

                  <div className="pt-8 space-y-2">
                    <p className="font-bold text-slate-800 text-yellow-600 italic">Lorem ipsum dolor sit amet, consectetur adipiscing elit!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Audio Player Bar */}
      <section className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-3rem)] max-w-2xl">
        <div className="bg-[#3B2F63]/90 backdrop-blur-2xl p-4 md:p-6 rounded-full shadow-[0_20px_50px_rgba(59,47,99,0.3)] border border-white/20 flex items-center justify-between gap-6">
          <div className="flex items-center gap-4">
             <div className="hidden sm:flex w-12 h-12 bg-yellow-400 rounded-full items-center justify-center text-[#3B2F63] shadow-inner">
                <Music size={24} className={isPlaying ? "animate-spin-slow" : ""} />
             </div>
             <div className="text-white">
                <p className="font-bold text-sm md:text-base truncate max-w-[120px] md:max-w-none">Mars Al Badar</p>
                <p className="text-[10px] md:text-xs text-purple-300 font-medium uppercase tracking-widest">SMK Al Badar Dangdur</p>
             </div>
          </div>

          <div className="flex items-center gap-4 md:gap-8">
             <button className="text-white/40 hover:text-white transition-colors">
                <SkipBack size={20} />
             </button>
             <button 
                onClick={togglePlay}
                className="w-12 h-12 md:w-16 md:h-16 bg-white text-[#3B2F63] rounded-full flex items-center justify-center shadow-lg hover:bg-yellow-400 transition-all transform hover:scale-105 active:scale-95"
             >
                {isPlaying ? <Pause size={28} /> : <Play size={28} className="translate-x-0.5" />}
             </button>
             <button className="text-white/40 hover:text-white transition-colors">
                <SkipForward size={20} />
             </button>
          </div>

          <div className="hidden md:flex items-center gap-3 pr-4">
             <Volume2 size={20} className="text-purple-300" />
             <div className="w-20 h-1 bg-white/20 rounded-full overflow-hidden">
                <div className="w-2/3 h-full bg-yellow-400 rounded-full" />
             </div>
          </div>
        </div>
        <audio ref={audioRef} src="/audio/lagutemplate.mp3" />

        <style jsx>{`
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-spin-slow {
            animation: spin-slow 8s linear infinite;
          }
        `}</style>
      </section>

      {/* Spacer for fixed player */}
      <div className="h-40" />
    </main>
  );
}
