"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Footer() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer
      ref={ref}
      className="relative py-28 md:py-36 flex flex-col items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.3) 100%)",
      }}
    >
      {/* Decorative top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[1px]"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(245,230,211,0.15) 50%, transparent 100%)",
        }}
      />

      {/* Brand */}
      <motion.div
        className="relative z-10 text-center px-6"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Logo mark */}
        <motion.div
          className="mb-8 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-white/20" />
          <div className="mx-4 w-2 h-2 rounded-full bg-white/15 border border-white/10" />
          <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-white/20" />
        </motion.div>

        <h4
          className="text-3xl md:text-5xl font-bold text-white/85 tracking-tight"
          style={{
            fontFamily: "var(--font-playfair)",
            textShadow: "0 4px 30px rgba(0,0,0,0.3)",
          }}
        >
          Bagecha
        </h4>
        <p
          className="mt-2 text-sm md:text-base tracking-[0.3em] text-white/35 uppercase"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          by Adi&apos;s Cafe
        </p>

        <motion.div
          className="mt-10 h-[1px] w-20 mx-auto bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
        />

        <p
          className="mt-10 text-xs md:text-sm tracking-[0.25em] text-white/30 uppercase"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Crafted Taste, Premium Experience
        </p>
      </motion.div>

      {/* Bottom bar */}
      <motion.div
        className="absolute bottom-6 text-center w-full px-6"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <p
          className="text-[10px] md:text-xs tracking-[0.15em] text-white/15"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          © 2026 Bagecha by Adi&apos;s Cafe. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
}
