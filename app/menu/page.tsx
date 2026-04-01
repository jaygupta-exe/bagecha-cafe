"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MENU_DATA } from "@/data/menu";
import MenuCategorySection from "@/components/MenuCategorySection";
import { motion } from "framer-motion";
import FloatingParticles from "@/components/FloatingParticles";

import HeroSlider from "@/components/HeroSlider";

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-[#364c11] text-[#F5E6D3] overflow-x-hidden selection:bg-[#364c11] relative">
      <Navbar />
      <FloatingParticles />

      {/* Hero: cinematic video slider */}
      <HeroSlider />

      {/* Menu Categories */}
      <div className="flex flex-col gap-12 md:gap-24 lg:gap-32 w-full pb-16">
        {MENU_DATA.map((category, index) => (
          <MenuCategorySection 
            key={category.id} 
            category={category} 
            index={index} 
          />
        ))}
      </div>

      {/* Online Order Section */}
      <section className="relative w-full py-24 px-6 bg-gradient-to-b from-[#364c11] to-[#253609] flex flex-col items-center justify-center text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 
              className="text-4xl md:text-5xl font-bold text-[#d4af37] mb-6 tracking-tight"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Order Online
            </h2>
            <p className="text-white/80 mb-10 text-lg md:text-xl font-light" style={{ fontFamily: 'var(--font-inter)' }}>
              Enjoy our aromatic coffees and delicious meals at home. Order now through our quick delivery partners.
            </p>
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 w-full justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <a 
              href="https://www.google.com/amp/s/www.zomato.com/jalandhar/bgecha-by-adis-cafe-preet-nagar-road%3famp=1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 px-8 py-4 bg-[#E23744] hover:bg-[#c92d3b] text-white rounded-full font-bold text-lg transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(226,55,68,0.4)]"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              Order on Zomato
            </a>
            <a 
              href="https://www.swiggy.com/city/jalandhar/bagecha-by-adis-cafe-north-jalandhar-rest1328875" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 px-8 py-4 bg-[#FC8019] hover:bg-[#e26e10] text-white rounded-full font-bold text-lg transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(252,128,25,0.4)]"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              Order on Swiggy
            </a>
          </motion.div>
        </div>
        
        {/* Background Decorative Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05)_0%,transparent_60%)] pointer-events-none" />
      </section>

      <Footer />
    </main>
  );
}
