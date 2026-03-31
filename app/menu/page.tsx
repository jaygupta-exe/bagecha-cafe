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
