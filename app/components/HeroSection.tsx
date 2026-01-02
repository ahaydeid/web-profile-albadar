"use client";

// components/HeroSection.tsx
import { Mail, Instagram, MessageCircle } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative py-16 md:pb-25 md:pt-20 overflow-hidden">
      {/* Decorative Elements - Subtle Purple */}
      <div className="absolute top-0 right-10 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-100/40 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 py-2 text-gray-700 text-3xl font-semibold">
              Selamat datang...
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-purple-700">SMKS Al Badar</span>
              <br />
              <span className="text-yellow-500">Dangdeur</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Mencetak santri berilmu, berakhlak, dan bermanfaat bagi umat.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a 
                href="/pendaftaran" 
                className="px-6 py-3 bg-purple-700 text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-purple-600/30"
              >
                Daftar Sekarang
              </a>
              
              <a 
                href="https://wa.me/6285814888500" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white text-purple-700 font-semibold rounded-xl border hover:bg-purple-600 hover:text-white transition-all"
              >
                Hubungi Kami
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-4">
              <span className="text-lg text-gray-500 font-medium">Ikuti kami:</span>
              <div className="flex gap-2">
                <a 
                  href="https://wa.me/6285814888500" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="WhatsApp"
                  className="w-12 h-12 flex items-center justify-center bg-gray-100 text-gray-600 rounded-lg hover:bg-purple-600 hover:text-white transition-all"
                >
                  <MessageCircle className="w-6 h-6" />
                </a>
                
                <a 
                  href="https://www.instagram.com/smk_albadar/?hl=id" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Instagram"
                  className="w-12 h-12 flex items-center justify-center bg-gray-100 text-gray-600 rounded-lg hover:bg-purple-600 hover:text-white transition-all"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                
                <a 
                  href="mailto:smksalbadaroke@gmail.com" 
                  aria-label="Email"
                  className="w-12 h-12 flex items-center justify-center bg-gray-100 text-gray-600 rounded-lg hover:bg-purple-600 hover:text-white transition-all"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Right 3D Illustration - 3 BUKU BERTUMPUK */}
          <div className="hidden md:flex relative items-center justify-center py-12 hero-books-container">
            <div className="relative w-full h-96">
              <div className="relative w-full h-full flex items-center justify-center pt-20">
                {/* 3D Book Stack Animation - Shifted down and right */}
                <div className="relative w-full h-full translate-x-8 translate-y-8">
                  {/* Book 1 - Purple */}
                  <div className="book-1 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-56 bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg shadow-2xl">
                    <div className="absolute top-4 left-4 right-4">
                      <div className="h-2 bg-white/30 rounded mb-2"></div>
                      <div className="h-2 bg-white/30 rounded w-3/4"></div>
                    </div>
                  </div>
                  
                  {/* Book 2 - Yellow */}
                  <div className="book-2 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-56 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg shadow-2xl">
                    <div className="absolute top-4 left-4 right-4">
                      <div className="h-2 bg-white/30 rounded mb-2"></div>
                      <div className="h-2 bg-white/30 rounded w-2/3"></div>
                    </div>
                  </div>
                  
                  {/* Book 3 - Purple Light */}
                  <div className="book-3 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-56 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg shadow-2xl">
                    <div className="absolute top-4 left-4 right-4">
                      <div className="h-2 bg-white/30 rounded mb-2"></div>
                      <div className="h-2 bg-white/30 rounded w-4/5"></div>
                    </div>
                  </div>
                  
                  {/* Graduation Cap */}
                  <div className="cap absolute top-8 right-1/4 w-20 h-20">
                    <div className="relative">
                      {/* Cap Top */}
                      <div className="w-20 h-3 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-sm shadow-lg transform rotate-[-10deg]"></div>
                      {/* Cap Base */}
                      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-12 h-8 bg-gradient-to-b from-yellow-500 to-yellow-600 rounded-b-lg"></div>
                      {/* Tassel */}
                      <div className="absolute top-0 right-2 w-1 h-8 bg-yellow-600"></div>
                      <div className="absolute top-8 right-1 w-3 h-3 bg-yellow-600 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Floating Stars */}
                  <div className="star-1 absolute top-12 left-1/4 text-2xl">⭐</div>
                  <div className="star-2 absolute bottom-16 right-1/4 text-2xl">⭐</div>
                  <div className="star-3 absolute top-1/2 left-12 text-xl">✨</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes book-float-1 {
          0%, 100% {
            transform: translate(-50%, -50%) rotate(-15deg) translateY(0px);
          }
          50% {
            transform: translate(-50%, -50%) rotate(-15deg) translateY(-20px);
          }
        }

        @keyframes book-float-2 {
          0%, 100% {
            transform: translate(-50%, -50%) rotate(5deg) translateX(32px) translateY(0px);
          }
          50% {
            transform: translate(-50%, -50%) rotate(5deg) translateX(32px) translateY(-15px);
          }
        }

        @keyframes book-float-3 {
          0%, 100% {
            transform: translate(-50%, -50%) rotate(15deg) translateX(-8px) translateY(16px);
          }
          50% {
            transform: translate(-50%, -50%) rotate(15deg) translateX(-8px) translateY(-4px);
          }
        }

        @keyframes cap-float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(-5deg);
          }
        }

        @keyframes star-twinkle {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.3;
            transform: scale(0.8);
          }
        }

        .book-1 {
          animation: book-float-1 4s ease-in-out infinite;
          will-change: transform;
        }

        .book-2 {
          animation: book-float-2 4.5s ease-in-out infinite;
          will-change: transform;
        }

        .book-3 {
          animation: book-float-3 5s ease-in-out infinite;
          will-change: transform;
        }

        .cap {
          animation: cap-float 3s ease-in-out infinite;
          will-change: transform;
        }

        .star-1 {
          animation: star-twinkle 2s ease-in-out infinite;
          will-change: opacity, transform;
        }

        .star-2 {
          animation: star-twinkle 2.5s ease-in-out infinite;
          will-change: opacity, transform;
        }

        .star-3 {
          animation: star-twinkle 3s ease-in-out infinite;
          will-change: opacity, transform;
        }

        @media (max-width: 767px) {
          .hero-books-container {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
