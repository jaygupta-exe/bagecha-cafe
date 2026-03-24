"use client";

import { motion, AnimatePresence } from "framer-motion";

interface PreloaderProps {
  progress: number;
  isLoaded: boolean;
}

export default function Preloader({ progress, isLoaded }: PreloaderProps) {
  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center"
          style={{ backgroundColor: "#00735C" }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute -top-1/4 -right-1/4 w-[60vw] h-[60vw] rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)",
              }}
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 10, 0],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -bottom-1/4 -left-1/4 w-[50vw] h-[50vw] rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)",
              }}
              animate={{
                scale: [1.1, 1, 1.1],
                rotate: [0, -10, 0],
              }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          {/* Logo / Brand */}
          <motion.div
            className="relative z-10 flex flex-col items-center gap-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Brand name */}
            <div className="text-center">
              <motion.h1
                className="text-5xl md:text-7xl font-bold tracking-[0.2em] text-white/90"
                style={{ fontFamily: "var(--font-playfair)" }}
                initial={{ opacity: 0, letterSpacing: "0.5em" }}
                animate={{ opacity: 1, letterSpacing: "0.2em" }}
                transition={{ duration: 1.2, delay: 0.3 }}
              >
                HOMIE
              </motion.h1>
              <motion.p
                className="mt-3 text-sm md:text-base tracking-[0.4em] text-white/50 uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                Coffee
              </motion.p>
            </div>

            {/* Progress section */}
            <div className="flex flex-col items-center gap-4 w-64 md:w-80">
              {/* Progress bar */}
              <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    background: "linear-gradient(90deg, rgba(245,230,211,0.6), rgba(245,230,211,0.9))",
                  }}
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </div>

              {/* Percentage */}
              <motion.span
                className="text-xs tracking-[0.3em] text-white/40 tabular-nums"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {progress}%
              </motion.span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
