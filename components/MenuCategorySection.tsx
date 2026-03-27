"use client";

import React from "react";
import Image from "next/image";
import { MenuCategory } from "@/data/menu";

interface Props {
  category: MenuCategory;
  index: number;
}

export default function MenuCategorySection({ category, index }: Props) {
  // Duplicate images perfectly to create a seamless infinite loop
  const marqueeImages = [...category.images, ...category.images];

  return (
    <section 
      id={category.id} 
      className="relative w-full min-h-[70vh] flex flex-col-reverse md:flex-row items-center justify-between py-20 z-10 overflow-hidden border-b border-white/5 last:border-0"
    >
      {/* Background vignette styling */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent pointer-events-none" />

      {/* LEFT SIDE: Static Menu List */}
      <div className="w-full md:w-[45%] flex flex-col justify-center px-6 md:px-16 lg:px-24 relative z-20 mt-12 md:mt-0">
        <h2 className="text-[#facc15] font-serif text-4xl md:text-5xl mb-12 drop-shadow-lg tracking-wide">
          {category.title}
        </h2>
        
        <div className="flex flex-col gap-8 md:gap-10 w-full">
          {category.items.map((item, idx) => (
            <div 
              key={idx} 
              className="group flex justify-between items-end w-full border-b border-stone-500/30 pb-4 transition-all duration-300 hover:border-[#facc15]/60 hover:translate-x-3 cursor-default"
            >
              <div className="flex flex-col justify-center max-w-[70%] md:max-w-[75%]">
                <h3 className="font-serif tracking-wide text-stone-200 text-xl md:text-2xl transition-colors duration-300 group-hover:text-white drop-shadow-sm">
                  {item.name}
                </h3>
                {item.desc && (
                  <p className="mt-2 font-light tracking-wider text-stone-400 text-xs md:text-sm transition-colors duration-300 group-hover:text-stone-300">
                    {item.desc}
                  </p>
                )}
              </div>
              <div className="flex items-end text-right pl-4">
                <span className="font-serif tracking-wider text-[#facc15] text-xl md:text-2xl font-semibold drop-shadow-[0_0_8px_rgba(250,204,21,0.3)]">
                  {item.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE: Horizontal Image Marquee */}
      {/* Container carefully sized to seamlessly crop sliding images at the edges */}
      <div className="w-full md:w-[55%] h-[320px] md:h-auto py-8 flex items-center relative z-20 overflow-hidden marquee-container pl-6 md:pl-0">
        
        {/* Soft gradient masks for cinematic fade on the edges, gracefully bleeding into #364c11 */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#364c11] to-transparent z-30 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#364c11] to-transparent z-30 pointer-events-none" />

        {/* The animate-marquee-scroll class is injected globally by FullMenu */}
        {/* gap-6 is exactly matched with pr-6 to ensure flawless -50% translateX math */}
        <div className="animate-marquee-scroll gap-6 pr-6 py-4">
          {marqueeImages.map((src, idx) => (
            <div 
              key={idx} 
              className="relative w-[240px] h-[240px] md:w-[320px] md:h-[320px] flex-shrink-0 rounded-[2rem] overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.5)] border border-white/10 group bg-stone-900"
            >
              <Image 
                src={src} 
                alt={`${category.title} presentation ${idx + 1}`}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                unoptimized
                priority={index < 2 && idx < 4} // Eager load the first few images of the very first sections
              />
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
