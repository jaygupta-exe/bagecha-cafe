"use client";

import React from "react";
import Image from "next/image";

const PIZZA_ITEMS = [
  { name: "Melted Bliss Margherita", desc: "Classic mozzarella & fresh basil", price: "₹249" },
  { name: "Golden Cheese Corn Pizza", desc: "Sweet corn with molten cheese", price: "₹269" },
  { name: "Exotic Farmhouse Pizza", desc: "Fresh veggies & farm goodness", price: "₹289" },
  { name: "Chilly Mushroom Fantasy", desc: "Spiced mushrooms & jalapeños", price: "₹299" },
  { name: "Tandoori Paneer Tikka Pizza", desc: "Smoky paneer with special spices", price: "₹329" },
  { name: "Adi's Garden Authentic Pizza", desc: "Chef's signature garden fresh loaded", price: "₹349" },
];

// Fetching distinct high-quality pizza photos from Unsplash for realistic variety
const PIZZA_IMAGES = [
  "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1511685332617-688ee4137df7?w=600&h=600&fit=crop",
];

export default function PizzaMenu() {
  // We duplicate the images array perfectly to create a seamless infinite loop
  const marqueeImages = [...PIZZA_IMAGES, ...PIZZA_IMAGES];

  return (
    <section className="relative w-full min-h-[80vh] flex flex-col-reverse md:flex-row items-center justify-between py-24 z-10 overflow-hidden">
      
      {/* Inline styles for the seamless horizontal marquee */}
      <style>{`
        @keyframes marquee-pizza {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); } 
        }
        .animate-marquee-pizza {
          animation: marquee-pizza 40s linear infinite;
          display: flex;
          width: max-content;
        }
        .marquee-container:hover .animate-marquee-pizza {
          animation-play-state: paused;
        }
      `}</style>
      
      {/* Background vignette styling to blend elegantly with surrounding page components */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent pointer-events-none" />

      {/* LEFT SIDE: Static Menu List */}
      <div className="w-full md:w-[45%] flex flex-col justify-center px-6 md:px-16 lg:px-24 relative z-20 mt-16 md:mt-0">
        <h2 className="text-[#facc15] font-serif text-4xl md:text-5xl mb-12 drop-shadow-lg tracking-wide">
          Our Wood Fired Pizzas
        </h2>
        
        <div className="flex flex-col gap-8 md:gap-10 w-full">
          {PIZZA_ITEMS.map((item, idx) => (
            <div 
              key={idx} 
              className="group flex justify-between items-end w-full border-b border-stone-500/30 pb-4 transition-all duration-300 hover:border-[#facc15]/60 hover:translate-x-3 cursor-default"
            >
              <div className="flex flex-col justify-center max-w-[70%] md:max-w-[75%]">
                <h3 className="font-serif tracking-wide text-stone-200 text-xl md:text-2xl transition-colors duration-300 group-hover:text-white drop-shadow-sm">
                  {item.name}
                </h3>
                <p className="mt-2 font-light tracking-wider text-stone-400 text-xs md:text-sm transition-colors duration-300 group-hover:text-stone-300">
                  {item.desc}
                </p>
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
      {/* Container uses overflow-hidden to hide items sliding out of view */}
      <div className="w-full md:w-[55%] h-[320px] md:h-auto py-8 flex items-center relative z-20 overflow-hidden marquee-container pl-6 md:pl-0">
        
        {/* Soft gradient masks for cinematic fade on the edges of the image reel (blending into #364c11) */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#364c11] to-transparent z-30 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#364c11] to-transparent z-30 pointer-events-none" />

        {/* The gap-6 applies a 1.5rem gap. The pr-6 on the container equals this 1.5rem, ensuring perfect half-width mathematics for the -50% translation. */}
        <div className="animate-marquee-pizza gap-6 pr-6 py-4">
          {marqueeImages.map((src, idx) => (
            <div 
              key={idx} 
              className="relative w-[240px] h-[240px] md:w-[320px] md:h-[320px] flex-shrink-0 rounded-[2rem] overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.5)] border border-white/10 group bg-stone-900"
            >
              <Image 
                src={src} 
                alt={`Premium Pizza ${idx + 1}`}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                unoptimized // Bypasses the need for Next.js external image domains config
                priority={idx < 4} // Loads the very first few images faster for a snappy experience
              />
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
