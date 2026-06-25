"use client";

import { motion } from "framer-motion";
import { Sparkles, MapPin, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function HomeHero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Blur */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/assests/about-hero.jpg')`,
          filter: "blur(2px)",
          transform: "scale(1.05)",
        }}
      />
      
      {/* Premium Dark Forest Green Overlay Gradient */}
      <div 
        className="absolute inset-0 animate-fade-in" 
        style={{
          background: "linear-gradient(to bottom, rgba(54, 76, 17, 0.5) 0%, rgba(10, 18, 10, 0.85) 100%)"
        }}
      />

      {/* Decorative Light Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#d4af37]/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl pt-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-[#d4af37]" />
            <span className="text-xs md:text-sm tracking-[0.2em] text-[#F5E6D3] uppercase font-medium" style={{ fontFamily: "var(--font-inter)" }}>
              Welcome to Bagecha by Adis
            </span>
          </div>
        </motion.div>
        
        <motion.h1 
          className="mb-6 tracking-tight text-[#F5E6D3]"
          style={{ 
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            fontWeight: 800,
            lineHeight: 1.15,
            textShadow: "0 4px 20px rgba(0,0,0,0.4)"
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Best Aesthetic Cafe <br className="hidden sm:inline" /> in Jalandhar
        </motion.h1>
        
        <motion.p 
          className="text-base sm:text-lg md:text-xl mb-10 text-white/80 max-w-2xl mx-auto leading-relaxed"
          style={{ fontFamily: "var(--font-inter)", fontWeight: 300 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Step into a nature-infused garden sanctuary. Experience Jalandhar's first water-sitting dining concept paired with artisanal coffees and premium continental delicacies.
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link
            href="/menu"
            className="group relative w-full sm:w-auto px-8 py-4 rounded-full overflow-hidden transition-all duration-300 font-semibold"
            style={{
              background: "linear-gradient(135deg, #d4af37, #bfa032)",
              boxShadow: "0 10px 30px rgba(212, 175, 55, 0.3)",
              color: "#000",
              fontFamily: "var(--font-inter)"
            }}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Explore Our Menu
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>

          <Link
            href="/why-bagecha"
            className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/20 text-[#F5E6D3] hover:bg-white/5 transition-all flex items-center justify-center gap-2 font-medium"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            <MapPin className="w-4 h-4 text-[#d4af37]" />
            Why Visit Us?
          </Link>
        </motion.div>
      </div>

      {/* Floating Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1.5">
          <motion.div 
            className="w-1.5 h-1.5 bg-[#d4af37] rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
