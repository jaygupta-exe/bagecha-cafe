"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PIZZA_ITEMS = [
  { name: "Melted Bliss Margherita", desc: "Classic mozzarella & fresh basil", price: "₹249" },
  { name: "Golden Cheese Corn Pizza", desc: "Sweet corn with molten cheese", price: "₹269" },
  { name: "Exotic Farmhouse Pizza", desc: "Fresh veggies & farm goodness", price: "₹289" },
  { name: "Chilly Mushroom Fantasy", desc: "Spiced mushrooms & jalapeños", price: "₹299" },
  { name: "Tandoori Paneer Tikka Pizza", desc: "Smoky paneer with special spices", price: "₹329" },
  { name: "Adi's Garden Authentic Pizza", desc: "Chef's signature garden fresh loaded", price: "₹349" },
];

export default function PizzaMenu() {
  // Start at a high index to allow seamless infinite backward/forward scrolling
  const [realIndex, setRealIndex] = useState(PIZZA_ITEMS.length * 10); 
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setRealIndex((prev) => prev + 1);
    }, 3500); 
    return () => clearInterval(interval);
  }, [isHovered]);

  const activeIndex = realIndex % PIZZA_ITEMS.length;
  
  // Create a virtually infinite list by repeating the base items many times. 
  // 100 copies = 600 total items, well beyond normal user interaction.
  const repeatedItems = Array(100).fill(PIZZA_ITEMS).flat();

  // Fixed container and item heights are necessary to mathematically scroll to the perfect centered position.
  const ITEM_HEIGHT = 120; // Includes padding/margin spacing
  const MENU_CONTAINER_HEIGHT = 500;

  return (
    <section 
      className="relative w-full min-h-[80vh] flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-24 z-10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* BACKGROUND EFFECTS */}
      {/* We rely on the page wrapper's #364c11 but can add a subtle vignette or glow here if needed */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent pointer-events-none" />

      {/* LEFT SIDE: Text Menu */}
      <div className="w-full md:w-[55%] flex flex-col justify-center relative overflow-hidden" style={{ height: `${MENU_CONTAINER_HEIGHT}px` }}>
        {/* Soft gradient masks for top and bottom to create cinematic fade matching background #364c11 */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#364c11] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#364c11] to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex flex-col w-full"
          animate={{ y: -(realIndex * ITEM_HEIGHT) + (MENU_CONTAINER_HEIGHT / 2) - (ITEM_HEIGHT / 2) }} 
          transition={{ ease: [0.25, 1, 0.5, 1], duration: 0.8 }}
        >
          {repeatedItems.map((item, idx) => {
            const isActive = idx === realIndex;
            return (
              <div 
                key={idx} 
                className={`flex justify-between items-center w-full px-4 md:px-8 transition-all duration-700 cursor-pointer ${isActive ? 'opacity-100 scale-100' : 'opacity-30 scale-95'}`}
                style={{ height: `${ITEM_HEIGHT}px`, minHeight: `${ITEM_HEIGHT}px` }}
                onClick={() => setRealIndex(idx)}
              >
                <div className="flex flex-col justify-center max-w-[70%]">
                  <h3 className={`font-serif tracking-wide transition-colors duration-700 ${isActive ? 'text-[#facc15] text-2xl md:text-4xl drop-shadow-[0_0_12px_rgba(250,204,21,0.5)]' : 'text-stone-300 text-lg md:text-2xl'}`}>
                    {item.name}
                  </h3>
                  <p className={`mt-2 font-light tracking-wider transition-all duration-700 ${isActive ? 'text-stone-200 text-sm md:text-base' : 'text-stone-500 text-xs md:text-sm'}`}>
                    {item.desc}
                  </p>
                </div>
                <div className="flex items-center pl-4 text-right">
                  <span className={`font-serif tracking-wider transition-all duration-700 whitespace-nowrap ${isActive ? 'text-[#facc15] text-xl md:text-3xl font-semibold drop-shadow-[0_0_12px_rgba(250,204,21,0.5)]' : 'text-stone-400 text-lg md:text-xl'}`}>
                    {item.price}
                  </span>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* RIGHT SIDE: Image Presentation */}
      <div className="w-full md:w-[45%] h-[400px] md:h-[600px] flex items-center justify-center relative perspective-[1200px] mb-12 md:mb-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 0.8, x: 50, filter: "blur(8px)" }}
            animate={{ opacity: 1, scale: 1, x: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 1.1, x: -50, filter: "blur(8px)" }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
            className="absolute w-[300px] h-[300px] md:w-[480px] md:h-[480px]"
          >
             {/* The single placeholder pizza image, rotating continuously */}
            <motion.img 
              src="/categories/pizza.png" 
              alt={PIZZA_ITEMS[activeIndex].name}
              className="w-full h-full object-contain filter drop-shadow-[0_30px_40px_rgba(0,0,0,0.6)]"
              animate={{ rotate: 360 }}
              transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
