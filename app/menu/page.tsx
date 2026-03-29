"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MENU_DATA } from "@/data/menu";
import MenuCategorySection from "@/components/MenuCategorySection";
import { motion } from "framer-motion";

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1f3d1f] to-[#0f1f0f] text-[#F5E6D3] overflow-x-hidden selection:bg-[#364c11]">
      <Navbar />

      {/* Hero Section for Menu */}
      <section className="relative pt-36 pb-16 md:pt-48 md:pb-24 px-4 text-center z-10">
        <div className="absolute inset-0 z-0 bg-transparent flex items-center justify-center opacity-5 pointer-events-none">
          <div className="w-[800px] h-[800px] border border-white rounded-full"></div>
          <div className="absolute w-[600px] h-[600px] border border-white rounded-full"></div>
        </div>

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="relative z-10 max-w-4xl mx-auto"
        >
          <p className="text-[#a2ac8e] font-sans tracking-[0.3em] uppercase mb-4 text-sm md:text-base">
            Taste the Magic
          </p>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F5E6D3] via-white to-[#a2ac8e] leading-tight mb-8 drop-shadow-lg">
            Our Menu
          </h1>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#d78a3a] to-transparent mx-auto"></div>
        </motion.div>
      </section>

      {/* Menu Categories */}
      <div className="flex flex-col gap-12 md:gap-24 lg:gap-32 w-full pb-32">
        {MENU_DATA.map((category, index) => (
          <MenuCategorySection 
            key={category.id} 
            category={category} 
            index={index} 
          />
        ))}
      </div>

      <Footer />
    </main>
  );
}
