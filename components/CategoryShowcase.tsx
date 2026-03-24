"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import SteamEffect from "./SteamEffect";

interface Category {
  id: string;
  title: string;
  description: string;
  image: string;
  hasSteam?: boolean;
}

const categories: Category[] = [
  {
    id: "pizza",
    title: "Pizza",
    description: "Stone-fired perfection with artisan toppings",
    image: "/categories/pizza.png",
  },
  {
    id: "garlic-bread",
    title: "Garlic Bread",
    description: "Golden crust kissed with herb butter",
    image: "/categories/garlic-bread.png",
  },
  {
    id: "thick-shakes",
    title: "Thick Shakes",
    description: "Indulgent blends topped with pure decadence",
    image: "/categories/thick-shakes.png",
  },
  {
    id: "steam-momos",
    title: "Steam Momos",
    description: "Delicate folds filled with bold flavors",
    image: "/categories/steam-momos.png",
    hasSteam: true,
  },
  {
    id: "mocktails",
    title: "Mocktails",
    description: "Vibrant sips crafted without compromise",
    image: "/categories/mocktails.png",
  },
  {
    id: "hot-coffee",
    title: "Hot Coffee",
    description: "Rich aromas poured with precision",
    image: "/categories/hot-coffee.png",
    hasSteam: true,
  },
  {
    id: "cold-coffee",
    title: "Cold Coffee",
    description: "Chilled perfection in every glass",
    image: "/categories/cold-coffee.png",
  },
  {
    id: "iced-latte",
    title: "Iced Latte",
    description: "Silky layers of espresso over ice",
    image: "/categories/iced-latte.png",
  },
  {
    id: "sandwich",
    title: "Sandwich",
    description: "Stacked high with gourmet goodness",
    image: "/categories/sandwich.png",
  },
  {
    id: "burgers",
    title: "Burgers",
    description: "Juicy, loaded, and unapologetically bold",
    image: "/categories/burgers.png",
  },
  {
    id: "french-fries",
    title: "French Fries",
    description: "Crisp golden bites of pure satisfaction",
    image: "/categories/french-fries.png",
  },
  {
    id: "pasta",
    title: "Pasta",
    description: "Al dente dreams in velvety sauces",
    image: "/categories/pasta.png",
    hasSteam: true,
  },
  {
    id: "grilled-wraps",
    title: "Grilled Wraps",
    description: "Charred perfection rolled with flavor",
    image: "/categories/grilled-wraps.png",
  },
  {
    id: "munchies",
    title: "Munchies",
    description: "Irresistible bites for every craving",
    image: "/categories/munchies.png",
  },
  {
    id: "noodles-fried-rice",
    title: "Noodles & Fried Rice",
    description: "Wok-tossed magic with smoky depth",
    image: "/categories/noodles-fried-rice.png",
    hasSteam: true,
  },
];

// Layout types cycle: left, right, center
type LayoutType = "left" | "right" | "center";
const layoutCycle: LayoutType[] = ["left", "right", "center"];

function CategoryCard({
  category,
  index,
}: {
  category: Category;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const layout = layoutCycle[index % 3];

  // Very subtle glow variations — no color shift from base #00735C
  const bgGradients = [
    "radial-gradient(ellipse at 30% 50%, rgba(245,230,211,0.02) 0%, transparent 70%)",
    "radial-gradient(ellipse at 70% 50%, rgba(245,230,211,0.015) 0%, transparent 70%)",
    "radial-gradient(ellipse at 50% 30%, rgba(245,230,211,0.02) 0%, transparent 60%)",
  ];

  if (layout === "center") {
    return (
      <motion.section
        ref={ref}
        className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden"
        style={{ background: bgGradients[index % 3] }}
      >
        {/* Decorative glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(245,230,211,0.03) 0%, transparent 50%)",
          }}
        />

        <motion.div
          className="relative z-10 flex flex-col items-center max-w-3xl w-full"
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Image */}
          <div className="category-image-wrapper w-full max-w-2xl aspect-[4/3] relative rounded-2xl overflow-hidden mb-10">
            <div className="category-image-glow" />
            <Image
              src={category.image}
              alt={category.title}
              fill
              className="object-cover category-image"
              sizes="(max-width: 768px) 100vw, 672px"
            />
            {category.hasSteam && <SteamEffect />}
          </div>

          {/* Text */}
          <motion.h3
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white/90 text-center tracking-tight"
            style={{
              fontFamily: "var(--font-playfair)",
              textShadow: "0 4px 30px rgba(0,0,0,0.3)",
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {category.title}
          </motion.h3>
          <motion.p
            className="mt-4 text-base md:text-lg text-white/50 tracking-wide text-center"
            style={{ fontFamily: "var(--font-inter)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            {category.description}
          </motion.p>
        </motion.div>
      </motion.section>
    );
  }

  const isLeft = layout === "left";

  return (
    <motion.section
      ref={ref}
      className="relative min-h-screen flex items-center px-6 md:px-12 lg:px-20 py-20 overflow-hidden"
      style={{ background: bgGradients[index % 3] }}
    >
      {/* Decorative glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: isLeft
            ? "radial-gradient(circle at 25% 50%, rgba(245,230,211,0.03) 0%, transparent 50%)"
            : "radial-gradient(circle at 75% 50%, rgba(245,230,211,0.03) 0%, transparent 50%)",
        }}
      />

      <div
        className={`relative z-10 flex flex-col ${
          isLeft ? "md:flex-row" : "md:flex-row-reverse"
        } items-center gap-10 md:gap-16 lg:gap-24 w-full max-w-7xl mx-auto`}
      >
        {/* Image */}
        <motion.div
          className="category-image-wrapper w-full md:w-1/2 aspect-[4/3] relative rounded-2xl overflow-hidden flex-shrink-0"
          initial={{
            opacity: 0,
            x: isLeft ? -80 : 80,
          }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="category-image-glow" />
          <Image
            src={category.image}
            alt={category.title}
            fill
            className="object-cover category-image"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {category.hasSteam && <SteamEffect />}
        </motion.div>

        {/* Text */}
        <motion.div
          className={`w-full md:w-1/2 ${
            isLeft ? "md:text-left" : "md:text-right"
          } text-center`}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <h3
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-white/90 tracking-tight"
            style={{
              fontFamily: "var(--font-playfair)",
              textShadow: "0 4px 30px rgba(0,0,0,0.3)",
            }}
          >
            {category.title}
          </h3>
          <p
            className="mt-4 md:mt-6 text-base md:text-lg text-white/50 tracking-wide"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            {category.description}
          </p>

          {/* Decorative line */}
          <motion.div
            className={`mt-8 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent ${
              isLeft ? "md:w-1/2" : "md:w-1/2 md:ml-auto"
            } w-1/2 mx-auto md:mx-0`}
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          />
        </motion.div>
      </div>
    </motion.section>
  );
}

// Section divider with a subtle animated line
function SectionDivider() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className="flex items-center justify-center py-4"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 1 }}
    >
      <div className="w-1 h-1 rounded-full bg-white/20" />
      <div className="mx-3 w-16 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
      <div className="mx-3 w-16 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <div className="w-1 h-1 rounded-full bg-white/20" />
    </motion.div>
  );
}

export default function CategoryShowcase() {
  return (
    <div className="relative">
      {/* Section header */}
      <div className="flex flex-col items-center justify-center py-24 px-6">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p
            className="text-sm md:text-base tracking-[0.4em] text-white/40 uppercase mb-4"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Our Menu
          </p>
          <h2
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white/90 tracking-tight"
            style={{
              fontFamily: "var(--font-playfair)",
              textShadow: "0 4px 30px rgba(0,0,0,0.3)",
            }}
          >
            What We Serve
          </h2>
          <motion.div
            className="mt-8 h-[1px] w-24 mx-auto bg-gradient-to-r from-transparent via-white/30 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </motion.div>
      </div>

      {/* Category sections */}
      {categories.map((category, index) => (
        <div key={category.id}>
          <CategoryCard category={category} index={index} />
          {index < categories.length - 1 && <SectionDivider />}
        </div>
      ))}
    </div>
  );
}
