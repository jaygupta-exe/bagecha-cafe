"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "#menu" },
  { name: "Locations", href: "#locations" },
  { name: "About Us", href: "#about" },
];

export default function Navbar() {
  const pathname = usePathname();
  // We can use a simple state to track the active item, or rely on intersection observer for scroll.
  // For now, let's just use "Home" as default active for this demo.
  const [active, setActive] = useState("Home");

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 pt-6 pb-4 flex justify-center pointer-events-none">
      <div 
        className="w-full max-w-7xl flex items-center justify-between pointer-events-auto rounded-full px-6 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.1)] border border-white/10"
        style={{
          background: "linear-gradient(135deg, rgba(162, 172, 142, 0.9) 0%, rgba(182, 189, 159, 0.85) 100%)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
        }}
      >
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden bg-[#2b3a0e]/10 p-1 border border-white/20">
            <Image
              src="/logo.png"
              alt="Logo"
              fill
              className="object-contain p-1"
              sizes="56px"
              priority
            />
          </div>
        </Link>

        {/* Center: Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setActive(link.name)}
              className="relative text-[#2b2b2b] font-medium text-sm lg:text-base tracking-wide transition-colors hover:text-[#364c11]"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              {link.name}
              {active === link.name && (
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#d78a3a] rounded-full" />
              )}
            </Link>
          ))}
        </nav>

        {/* Right: CTA Button */}
        <div className="flex items-center">
          <Link
            href="#book"
            className="bg-[#364c11] text-white px-5 py-2.5 md:px-6 md:py-3 rounded-full text-xs md:text-sm tracking-wider font-semibold transition-transform hover:scale-105 shadow-md"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            BOOK A TABLE
          </Link>

          {/* Mobile Menu Toggle (hidden on desktop) */}
          <button className="md:hidden ml-4 p-2 text-[#2b2b2b]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
