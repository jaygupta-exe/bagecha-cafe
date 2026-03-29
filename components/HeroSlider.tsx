"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const slides = [
  {
    id: 1,
    label: "Signature Blend",
    title: "Hazelnut Latte",
    subtitle: "Smooth, creamy, unforgettable.",
    cta: "Explore Menu",
    video: "/assests/cofee second final.mp4"
  },
  {
    id: 2,
    label: "Fresh Bites",
    title: "Spinach Corn Sandwich",
    subtitle: "Grilled perfection with a green twist.",
    cta: "Order Now",
    video: "/assests/sandwich second final.mp4"
  },
  {
    id: 3,
    label: "Refreshing Sips",
    title: "Virgin Mint Mojito",
    subtitle: "Fresh. Cool. Elevated.",
    cta: "Discover Drinks",
    video: "/assests/second final.mp4"
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-play interval
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isHovered]);

  // Subtle parallax on mouse move
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    setMousePos({ x, y });
  };

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  // Minimal luxury parallax max +/- 10px
  const parallaxX = mousePos.x * 20;
  const parallaxY = mousePos.y * 20;

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-[#1a2308]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); setMousePos({x:0, y:0}); }}
      onMouseMove={handleMouseMove}
    >
      {/* Background Videos Layer */}
      {slides.map((slide, index) => (
        <video
          key={slide.id}
          src={slide.video}
          autoPlay
          muted
          loop
          playsInline
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          // First video loads immediately, others load metadata in the background
          preload={index === 0 ? "auto" : "metadata"}
        />
      ))}

      {/* Dark Gradient Overlay for readability on the left */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-20 pointer-events-none" />

      {/* Logo Component (Fixed Top Left) */}
      <div className="absolute top-5 left-5 md:top-8 md:left-8 z-30">
        <div
          className="relative w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden"
          style={{
            background: "rgba(54, 76, 17, 0.35)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "1px solid rgba(245, 230, 211, 0.1)",
            boxShadow: "0 4px 24px rgba(0, 0, 0, 0.2)",
            padding: "6px",
          }}
        >
          <Image
            src="/logo.png"
            alt="Bagecha by Adi's Cafe"
            fill
            className="object-contain p-1"
            sizes="96px"
            priority
          />
        </div>
      </div>

      {/* Text Content */}
      <div className="absolute inset-0 flex items-center z-30 px-6 md:px-16 lg:px-24">
        <motion.div 
          className="w-full max-w-3xl flex justify-center md:justify-start"
          animate={{ x: parallaxX, y: parallaxY }}
          transition={{ type: "spring", stiffness: 100, damping: 30 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex flex-col items-center text-center md:items-start md:text-left mt-20 md:mt-0"
            >
              <motion.span 
                className="text-white/75 uppercase tracking-[0.3em] text-xs md:text-sm lg:text-base mb-3 md:mb-4 font-medium"
                style={{ fontFamily: 'var(--font-inter)' }}
              >
                {slides[currentSlide].label}
              </motion.span>
              
              <motion.h1 
                className="text-5xl md:text-6xl lg:text-8xl font-bold text-white mb-4 md:mb-6 leading-[1.1] whitespace-pre-wrap"
                style={{ fontFamily: 'var(--font-playfair)', textShadow: "0 4px 30px rgba(0,0,0,0.5)" }}
              >
                {slides[currentSlide].title}
              </motion.h1>

              <motion.p 
                className="text-base md:text-lg lg:text-2xl text-white/90 italic mb-8 md:mb-10"
                style={{ fontFamily: 'var(--font-playfair)', textShadow: "0 2px 15px rgba(0,0,0,0.4)" }}
              >
                {slides[currentSlide].subtitle}
              </motion.p>

              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(255,255,255,0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 md:px-8 md:py-4 bg-white/10 backdrop-blur-md border border-white/30 rounded-full text-white tracking-[0.2em] uppercase text-xs md:text-sm font-medium transition-colors hover:bg-white/20 hover:border-white/50"
                style={{ fontFamily: 'var(--font-inter)' }}
              >
                {slides[currentSlide].cta}
              </motion.button>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 right-0 left-0 flex justify-center md:left-auto md:right-16 md:bottom-12 z-30 flex-col md:flex-row items-center gap-6">
        {/* Indicators for Mobile (Top) / Desktop (Left) */}
        <div className="flex items-center gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1.5 rounded-full transition-all duration-500 hover:bg-white/70 ${
                index === currentSlide ? "w-8 bg-white" : "w-3 bg-white/30"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Arrows for Desktop right, Mobile bottom */}
        <div className="flex gap-4">
          <button 
            onClick={prevSlide}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 bg-black/20 backdrop-blur-md flex items-center justify-center hover:bg-white/10 hover:border-white/50 transition-all text-white/70 hover:text-white"
            aria-label="Previous Slide"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>
          <button 
            onClick={nextSlide}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 bg-black/20 backdrop-blur-md flex items-center justify-center hover:bg-white/10 hover:border-white/50 transition-all text-white/70 hover:text-white"
            aria-label="Next Slide"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>
      </div>
    </div>
  );
}
