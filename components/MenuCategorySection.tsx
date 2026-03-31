"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MenuCategory } from "@/data/menu";

interface MenuCategorySectionProps {
  category: MenuCategory;
  index: number;
}

export default function MenuCategorySection({ category, index }: MenuCategorySectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const isImageLeft = index % 2 === 0;

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % category.images.length);
  }, [category.images.length]);

  // Auto-cycle through images every 2 seconds
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(nextImage, 2000);
    return () => clearInterval(timer);
  }, [nextImage, isHovered]);

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
      {/* 1. IMAGE CONTAINER (FULL FRAME SLIDER) */}
      <div 
        className="w-full lg:w-1/2 overflow-hidden rounded-3xl relative shadow-[0_20px_50px_rgba(0,0,0,0.5)] h-[400px] md:h-[500px] border border-white/10 group bg-[#0a120a]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Subtle interior gradient overlay for depth */}
        <div className="absolute inset-0 z-10 pointer-events-none rounded-3xl"
             style={{ background: "radial-gradient(circle, transparent 40%, rgba(10, 18, 10, 0.7) 120%)" }}
        />
        
        {/* Slider Logic - Cross-fading for instant response */}
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
                duration: 0.6,
                ease: "easeInOut",
            }}
            className="absolute inset-0 w-full h-full"
          >
            <Image 
              src={category.images[currentIndex]} 
              fill 
              className="object-cover" 
              alt={`${category.title} showcase photo`}
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={currentIndex === 0 || currentIndex === 1}
            />
          </motion.div>
        </AnimatePresence>

        {/* Dot Indicators (Bottom Center) */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {category.images.map((_, idx) => (
                <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        currentIndex === idx 
                        ? "bg-[#d78a3a] w-6 shadow-[0_0_10px_rgba(215,138,58,0.5)]" 
                        : "bg-white/30 hover:bg-white/50"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                />
            ))}
        </div>

        {/* Improved preloading for nearby images */}
        <div className="hidden">
            {category.images.map((src, idx) => (
                <Image key={idx} src={src} width={100} height={100} alt="preload" priority={false} />
            ))}
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

