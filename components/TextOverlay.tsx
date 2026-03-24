"use client";

import { motion, useTransform, MotionValue } from "framer-motion";

interface TextOverlayProps {
  scrollYProgress: MotionValue<number>;
}

interface TextSection {
  id: string;
  headline: string;
  subtitle?: string;
  alignment: "center" | "left" | "right";
  fadeIn: number;
  peakStart: number;
  peakEnd: number;
  fadeOut: number;
  isCtA?: boolean;
}

const sections: TextSection[] = [
  {
    id: "intro",
    headline: "BAGECHA.",
    subtitle: "by adis's cafe.",
    alignment: "center",
    fadeIn: 0.0,
    peakStart: 0.02,
    peakEnd: 0.12,
    fadeOut: 0.15,
  },
  {
    id: "cherry",
    headline: "The journey begins\nwith the cherry.",
    alignment: "left",
    fadeIn: 0.22,
    peakStart: 0.27,
    peakEnd: 0.37,
    fadeOut: 0.42,
  },
  {
    id: "roasted",
    headline: "Roasted for Depth.\nGround for Flavor.",
    alignment: "right",
    fadeIn: 0.47,
    peakStart: 0.52,
    peakEnd: 0.62,
    fadeOut: 0.67,
  },
  {
    id: "cta",
    headline: "Made for\nthe Homies.",
    subtitle: "Crafted with love, served with soul.",
    alignment: "center",
    fadeIn: 0.77,
    peakStart: 0.82,
    peakEnd: 0.95,
    fadeOut: 1.0,
    isCtA: true,
  },
];

function TextBlock({
  section,
  scrollYProgress,
}: {
  section: TextSection;
  scrollYProgress: MotionValue<number>;
}) {
  const opacity = useTransform(
    scrollYProgress,
    [section.fadeIn, section.peakStart, section.peakEnd, section.fadeOut],
    [0, 1, 1, 0]
  );

  const y = useTransform(
    scrollYProgress,
    [section.fadeIn, section.peakStart, section.peakEnd, section.fadeOut],
    [40, 0, 0, -30]
  );

  const scale = useTransform(
    scrollYProgress,
    [section.fadeIn, section.peakStart, section.peakEnd, section.fadeOut],
    [0.95, 1, 1, 0.98]
  );

  const alignClass =
    section.alignment === "left"
      ? "items-start text-left pl-8 md:pl-16 lg:pl-24"
      : section.alignment === "right"
      ? "items-end text-right pr-8 md:pr-16 lg:pr-24"
      : "items-center text-center";

  return (
    <motion.div
      className={`absolute inset-0 flex flex-col justify-center ${alignClass} pointer-events-none px-6`}
      style={{ opacity, y, scale }}
    >
      <div className="max-w-xl">
        <h2
          className={`
            font-bold leading-[1.1] tracking-tight text-white/90
            ${section.isCtA
              ? "text-5xl md:text-7xl lg:text-8xl"
              : "text-4xl md:text-6xl lg:text-7xl"
            }
          `}
          style={{
            fontFamily: "var(--font-playfair)",
            textShadow: "0 4px 30px rgba(0,0,0,0.3)",
            whiteSpace: "pre-line",
          }}
        >
          {section.headline}
        </h2>

        {section.subtitle && (
          <p
            className="mt-4 md:mt-6 text-base md:text-lg lg:text-xl text-white/60 tracking-wide"
            style={{
              fontFamily: "var(--font-inter)",
              textShadow: "0 2px 15px rgba(0,0,0,0.2)",
            }}
          >
            {section.subtitle}
          </p>
        )}

        {section.isCtA && (
          <motion.button
            className="mt-8 md:mt-10 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 
                       rounded-full text-white/90 text-sm md:text-base tracking-[0.2em] uppercase
                       hover:bg-white/20 transition-all duration-300 pointer-events-auto cursor-pointer"
            style={{ fontFamily: "var(--font-inter)" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Order Now
          </motion.button>
        )}
      </div>
    </motion.div>
  );
}

export default function TextOverlay({ scrollYProgress }: TextOverlayProps) {
  return (
    <>
      {sections.map((section) => (
        <TextBlock
          key={section.id}
          section={section}
          scrollYProgress={scrollYProgress}
        />
      ))}
    </>
  );
}
