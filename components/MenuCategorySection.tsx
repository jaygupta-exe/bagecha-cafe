"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MenuCategory } from "@/data/menu";

interface MenuCategorySectionProps {
  category: MenuCategory;
  index: number;
}

export default function MenuCategorySection({ category, index }: MenuCategorySectionProps) {
  // Alternate layout: even index = images on left, text on right
  const isImageLeft = index % 2 === 0;

  // Ensure we have enough images for a seamless long scroll (at least 6-8)
  const baseImages = Array.from({ length: Math.max(1, Math.ceil(8 / category.images.length)) }, () => category.images).flat();

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 flex flex-col ${
        isImageLeft ? "lg:flex-row" : "lg:flex-row-reverse"
      } gap-12 lg:gap-20 items-center`}
    >
      {/* 1. IMAGE CONTAINER (MARQUEE) */}
      <div className="w-full lg:w-1/2 overflow-hidden rounded-3xl relative shadow-[0_20px_50px_rgba(0,0,0,0.5)] h-[400px] md:h-[500px] border border-white/10 group bg-[#0a120a]">
        {/* Subtle interior gradient overlay for depth */}
        <div className="absolute inset-0 z-10 pointer-events-none rounded-3xl"
             style={{ background: "radial-gradient(circle, transparent 40%, rgba(10, 18, 10, 0.7) 120%)" }}
        />
        
        {/* Soft edge gradients to mask the scroll entering/leaving */}
        <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-[#0a120a] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-[#0a120a] to-transparent z-10 pointer-events-none" />

        {/* Scrolling wrapper */}
        <div className="flex h-full w-max animate-marquee hover:[animation-play-state:paused] items-center transition-all duration-500">
          
          {/* Half 1 */}
          <div className="flex gap-4 md:gap-6 pr-4 md:pr-6 h-full py-6 pl-4 md:pl-6">
            {baseImages.map((src, idx) => (
              <div key={`h1-${idx}`} className="relative w-[240px] md:w-[280px] h-full rounded-2xl overflow-hidden shrink-0 border border-white/5 shadow-lg relative group/item">
                <Image 
                  src={src} 
                  fill 
                  className="object-cover transition-transform duration-[1.5s] ease-out group-hover/item:scale-110" 
                  alt={`${category.title} sample ${idx}`}
                  sizes="(max-width: 768px) 240px, 280px"
                />
              </div>
            ))}
          </div>

          {/* Half 2 (Exact Clone for seamless loop) */}
          <div className="flex gap-4 md:gap-6 pr-4 md:pr-6 h-full py-6">
            {baseImages.map((src, idx) => (
              <div key={`h2-${idx}`} className="relative w-[240px] md:w-[280px] h-full rounded-2xl overflow-hidden shrink-0 border border-white/5 shadow-lg relative group/item">
                <Image 
                  src={src} 
                  fill 
                  className="object-cover transition-transform duration-[1.5s] ease-out group-hover/item:scale-110" 
                  alt={`${category.title} sample ${idx}`}
                  sizes="(max-width: 768px) 240px, 280px"
                />
              </div>
            ))}
          </div>
          
        </div>
      </div>

      {/* 2. TEXT CONTENT PANEL */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <motion.div
           initial={{ opacity: 0, x: isImageLeft ? 30 : -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          {/* Section Header */}
          <div className="mb-8 md:mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#F5E6D3] mb-3 tracking-wide">
              {category.title}
            </h2>
            <div className="flex items-center gap-4">
              <span className="h-[1px] w-12 bg-[#d78a3a]/60"></span>
              <p className="text-[#a2ac8e] text-sm md:text-base font-sans tracking-widest uppercase">
                {category.subtitle}
              </p>
            </div>
          </div>

          {/* Items List */}
          <div className="flex flex-col gap-5 md:gap-6">
            {category.items.map((item, idx) => (
              <div 
                 key={idx} 
                 className="flex flex-col group/list cursor-default"
              >
                <div className="flex items-end justify-between w-full mb-1">
                  <span className="text-lg md:text-xl font-medium text-white/90 font-sans group-hover/list:text-[#F5E6D3] transition-colors">
                    {item.name}
                  </span>
                  <div className="menu-leader group-hover/list:border-[rgba(245,230,211,0.6)] transition-colors"></div>
                  <span className="text-lg md:text-xl font-semibold text-[#d78a3a] font-serif shrink-0">
                    ₹{item.price}
                  </span>
                </div>
                {item.desc && (
                  <p className="text-sm text-white/50 font-sans w-3/4 leading-relaxed group-hover/list:text-white/70 transition-colors">
                    {item.desc}
                  </p>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
