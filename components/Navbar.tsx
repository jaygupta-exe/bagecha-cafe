"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "Locations", href: "/#locations" },
  { name: "About Us", href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [active, setActive] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Sync active state with pathname
  useEffect(() => {
    const current = navLinks.find(link => link.href === pathname);
    if (current) setActive(current.name);
  }, [pathname]);

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
          <div className="relative w-10 h-10 md:w-14 md:h-14 rounded-full overflow-hidden bg-[#2b3a0e]/10 p-1 border border-white/20">
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
                <motion.span 
                  layoutId="activeTab"
                  className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#d78a3a] rounded-full" 
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Right: CTA Button */}
        <div className="flex items-center">
          <a
            href="tel:+918360032762"
            className="bg-[#364c11] text-white px-5 py-2.5 md:px-6 md:py-3 rounded-full text-xs md:text-sm tracking-wider font-semibold transition-transform hover:scale-105 shadow-md flex items-center gap-2"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            <Phone className="w-3 h-3 md:w-4 md:h-4" />
            <span className="hidden xs:inline">BOOK A TABLE</span>
            <span className="xs:hidden">BOOK</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden ml-4 p-2 text-[#2b2b2b] hover:bg-black/5 rounded-full transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="absolute top-full left-0 right-0 mt-4 mx-4 p-6 rounded-3xl shadow-2xl border border-white/20 md:hidden"
              style={{
                background: "linear-gradient(135deg, rgba(162, 172, 142, 0.98) 0%, rgba(182, 189, 159, 0.98) 100%)",
                backdropFilter: "blur(15px)",
                WebkitBackdropFilter: "blur(15px)",
              }}
            >
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => {
                      setActive(link.name);
                      setIsMenuOpen(false);
                    }}
                    className={`text-xl font-semibold tracking-wide transition-colors ${
                      active === link.name ? "text-[#364c11]" : "text-[#2b2b2b]"
                    }`}
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
