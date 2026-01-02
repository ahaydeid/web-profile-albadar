"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Beranda", href: "/" },
  {
    name: "Tentang",
    dropdown: [
      { name: "Profil Sekolah", href: "/tentang/profil" },
      { name: "Mars Al-Badar Dangdeur", href: "/tentang/mars" },
      { name: "Guru & Staff", href: "/tentang/gurustaff" },
    ],
  },
  {
    name: "Program",
    dropdown: [
      { name: "Manajemen Perkantoran", href: "/program/mp" },
      { name: "Teknik Kendaraan Ringan", href: "/program/tkr" },
      { name: "Teknik Sepeda Motor", href: "/program/tsm" },
      { name: "Tata Boga (Kuliner)", href: "/program/kuliner" },
      { name: "Ekstrakurikuler", href: "/program/ekstrakurikuler" },
    ],
  },
  { name: "Fasilitas", href: "/fasilitas" },
  { name: "Info PPDB", href: "/pendaftaran" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setDropdownOpen(null);
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = (name: string) => {
    setDropdownOpen((prev) => (prev === name ? null : name));
  };

  const isActive = (href: string) => {
    return pathname === href;
  };

  return (
    <nav ref={navRef} className="bg-white shadow-sm fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-4">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/assets/images/albadar-logo.png" alt="Logo" width={40} height={40} className="h-10 w-10" />
            <span className="text-purple-700 font-bold text-sm sm:text-base leading-tight">
              SMKS Al Badar <br />
              Dangdeur
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center relative">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.name} className="relative">
                  <button
                    onClick={() => toggleDropdown(link.name)}
                    className={`flex pb-1 items-center font-semibold transition-colors ${link.dropdown.some((item) => isActive(item.href)) ? "text-black border-b-2 border-[#FFD700]" : "text-gray-600 hover:text-black"}`}
                  >
                    {link.name}
                    <ChevronDown size={16} className={`ml-1 transition-transform ${dropdownOpen === link.name ? "rotate-180" : ""}`} />
                  </button>

                  {dropdownOpen === link.name && (
                    <div className="absolute left-0 top-full mt-2 bg-white shadow-lg rounded-lg w-56 z-50">
                      {link.dropdown.map((item) => (
                        <Link key={item.name} href={item.href} className={`block px-4 py-2 transition-colors ${isActive(item.href) ? "text-black bg-gray-100" : "text-gray-700 hover:bg-gray-100"}`}>
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link key={link.name} href={link.href!} className={`font-semibold relative pb-1 transition-colors ${isActive(link.href!) ? "text-black border-b-2 border-[#FFD700]" : "text-gray-600 hover:text-black"}`}>
                  {link.name}
                </Link>
              )
            )}
            
            {/* Login Button */}
            <Link 
              href="/login" 
              className="ml-4 flex items-center gap-2 hover:bg-black hover:text-white bg-white text-black border border-gray-400 px-5 py-1 rounded-full font-bold text-sm transition-all active:scale-95"
            >
              Login
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white shadow-sm">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.name}>
                <button
                  onClick={() => toggleDropdown(link.name)}
                  className={`flex justify-between items-center w-full py-2 font-semibold transition-colors ${link.dropdown.some((item) => isActive(item.href)) ? "text-black border-b border-[#FFD700]" : "text-gray-700 hover:text-black"}`}
                >
                  {link.name}
                  <ChevronDown size={16} className={`transition-transform ${dropdownOpen === link.name ? "rotate-180" : ""}`} />
                </button>
                {dropdownOpen === link.name && (
                  <div className="pl-4 space-y-1">
                    {link.dropdown.map((item) => (
                      <Link key={item.name} href={item.href} onClick={() => setIsOpen(false)} className={`block py-1 transition-colors ${isActive(item.href) ? "text-black font-semibold" : "text-gray-600 hover:text-black"}`}>
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.name}
                href={link.href!}
                onClick={() => setIsOpen(false)}
                className={`block py-2 font-semibold transition-colors ${isActive(link.href!) ? "text-black border-b border-[#FFD700]" : "text-gray-600 hover:text-black"}`}
              >
                {link.name}
              </Link>
            )
          )}
          
          {/* Mobile Login Button */}
          <Link
            href="/login"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 w-full mt-4 bg-sky-500 text-white py-3 rounded-xl font-bold transition-all active:scale-[0.98]"
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
}
