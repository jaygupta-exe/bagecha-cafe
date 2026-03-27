"use client";

import React from "react";
import MenuCategorySection from "./MenuCategorySection";
import { MENU_DATA } from "@/data/menu";

export default function FullMenu() {
  return (
    <div className="w-full flex flex-col relative z-20 bg-transparent">
      {/* Define the horizontal marquee animation globally for all sections once */}
      {/* This ensures extremely high performance without duplicate CSS injection limits */}
      <style>{`
        @keyframes marquee-scroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); } 
        }
        .animate-marquee-scroll {
          animation: marquee-scroll 45s linear infinite;
          display: flex;
          width: max-content;
        }
        .marquee-container:hover .animate-marquee-scroll {
          animation-play-state: paused;
        }
      `}</style>
      
      {MENU_DATA.map((category, index) => (
        <MenuCategorySection 
          key={category.id} 
          category={category} 
          index={index} 
        />
      ))}
    </div>
  );
}
