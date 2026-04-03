"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Droplets,
  Leaf,
  Camera,
  Sparkles,
  Star,
  MapPin,
  ChevronRight,
  Quote,
} from "lucide-react";
import Footer from "@/components/Footer";

/* ─── tiny animated section wrapper ─── */
function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ─── data ─── */
const usps = [
  {
    icon: Droplets,
    title: "First Water Sitting Cafe",
    desc: "Jalandhar's only cafe where you dine above gently flowing water — a sensory experience you won't find anywhere else in the city.",
  },
  {
    icon: Leaf,
    title: "Nature-Immersed Ambiance",
    desc: "Surrounded by lush indoor greenery and natural textures, every corner of Bagecha feels like a serene garden escape.",
  },
  {
    icon: Sparkles,
    title: "Premium Continental Cuisine",
    desc: "From hand-crafted coffees to gourmet continental dishes, each plate is a masterpiece prepared by our experienced chef.",
  },
  {
    icon: Camera,
    title: "Instagram-Worthy Aesthetics",
    desc: "Every detail is designed to be photogenic — from the water reflections to the ambient lighting. Your feed will thank you.",
  },
];

const videoShowcase = [
  {
    src: "/assests/why%20visit%20bagecha%20video/video%201.mp4",
    overlay: "Feel the Vibe",
  },
  {
    src: "/assests/why%20visit%20bagecha%20video/video%202.mp4",
    overlay: "Experience the Calm",
  },
  {
    src: "/assests/why%20visit%20bagecha%20video/video%203.mp4",
    overlay: "Where Dining Meets Nature",
  },
];

const testimonials = [
  {
    name: "Priya M.",
    location: "Jalandhar",
    stars: 5,
    text: "The water sitting area is absolutely magical. I've never experienced anything like this in Jalandhar. The ambiance, the food, the vibes — everything is next level!",
  },
  {
    name: "Rahul S.",
    location: "Chandigarh",
    stars: 5,
    text: "Drove 140 km just to visit Bagecha after seeing it on Instagram and it was totally worth it. The continental food was restaurant-quality and the atmosphere is unreal.",
  },
  {
    name: "Ananya K.",
    location: "Amritsar",
    stars: 5,
    text: "Perfect date spot! The water seating with ambient lights is so romantic. We ended up staying for 3 hours because we didn't want to leave. A must-visit cafe!",
  },
];

/* ─── page ─── */
export default function WhyBagechaPage() {
  return (
    <main
      className="min-h-screen text-[#F5E6D3] overflow-x-hidden selection:bg-[#364c11] relative"
      style={{ background: "linear-gradient(180deg, #364c11 0%, #253609 100%)" }}
    >
      {/* ══════════ A. HERO ══════════ */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "brightness(0.35) saturate(1.2)" }}
        >
          <source
            src="/assests/why%20visit%20bagecha%20video/video%201.mp4"
            type="video/mp4"
          />
        </video>

        {/* Gradient overlays */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(15,42,29,0.7) 0%, rgba(15,42,29,0.3) 40%, rgba(15,42,29,0.8) 100%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <Droplets
              className="w-14 h-14 mx-auto mb-6"
              strokeWidth={1.2}
              style={{ color: "#d4af37" }}
            />
          </motion.div>

          <motion.p
            className="uppercase tracking-[0.35em] text-sm md:text-base mb-4"
            style={{ color: "rgba(212, 175, 55, 0.8)", fontFamily: "var(--font-inter)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Jalandhar&apos;s Only
          </motion.p>

          <motion.h1
            className="mb-6"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
              fontWeight: 700,
              lineHeight: 1.08,
              background: "linear-gradient(to right, #F5E6D3, #d4af37)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            First Water Sitting
            <br />
            Cafe in Jalandhar
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10"
            style={{ fontFamily: "var(--font-inter)", fontWeight: 300 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Step into Bagecha by Adis — where water, nature, and premium dining
            come together to create an experience you&apos;ll never forget.
          </motion.p>

          <motion.a
            href="https://www.google.com/maps/place/Bagecha"
            target="_blank"
            rel="noopener noreferrer"
            className="why-hero-cta group inline-flex items-center gap-3 px-10 py-5 rounded-full text-lg font-semibold transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #2E5A3D, #3d7a52)",
              boxShadow:
                "0 12px 40px rgba(54, 76, 17, 0.5), 0 0 60px rgba(212, 175, 55, 0.15)",
              fontFamily: "var(--font-inter)",
              color: "#fff",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            whileHover={{
              scale: 1.06,
              boxShadow:
                "0 18px 50px rgba(54, 76, 17, 0.7), 0 0 80px rgba(212, 175, 55, 0.25)",
            }}
            whileTap={{ scale: 0.97 }}
          >
            <MapPin className="w-5 h-5" />
            Experience Bagecha
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/25 rounded-full flex justify-center p-2">
            <motion.div
              className="w-1.5 h-1.5 bg-white/50 rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* ══════════ B. EXPERIENCE SECTION ══════════ */}
      <section className="relative py-28 md:py-36 px-6">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 30% 50%, rgba(212, 175, 55, 0.06) 0%, transparent 60%)",
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <Reveal>
            <p
              className="uppercase tracking-[0.3em] text-sm mb-4"
              style={{ color: "#d4af37", fontFamily: "var(--font-inter)" }}
            >
              The Experience
            </p>
            <h2
              className="mb-8"
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 700,
                color: "#F5E6D3",
              }}
            >
              Dine Above Water. Surrounded by Nature.
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <div
              className="why-glass-card p-10 md:p-14 rounded-3xl text-left md:text-center max-w-4xl mx-auto"
            >
              {/* Corner decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#d4af37]/10 to-transparent rounded-bl-full pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#364c11]/20 to-transparent rounded-tr-full pointer-events-none" />

              <div className="relative z-10 space-y-6 text-white/80 text-lg leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>
                <p>
                  Imagine sitting just above a gently flowing stream of water, the{" "}
                  <span className="text-[#d4af37] font-medium">
                    soft sound of ripples
                  </span>{" "}
                  harmonising with curated ambient music. Around you, lush green
                  plants breathe life into every corner while warm, golden hues
                  paint the air.
                </p>
                <p>
                  At <span className="text-[#d4af37] font-semibold" style={{ fontFamily: "var(--font-playfair)" }}>Bagecha by Adis</span>, we
                  haven&apos;t just built a cafe — we&apos;ve created a{" "}
                  <span className="text-white font-medium">sensory sanctuary</span>.
                  The aroma of freshly brewed coffee mingles with the earthy
                  fragrance of indoor plants, and every sip feels like an escape
                  from the ordinary.
                </p>
                <p>
                  This isn&apos;t just the{" "}
                  <span className="text-[#d4af37] font-medium">
                    best cafe in Jalandhar
                  </span>{" "}
                  — it&apos;s a destination. A moment frozen in time where food,
                  nature, and artistry converge to give you a{" "}
                  <span className="text-white font-medium">
                    unique cafe experience
                  </span>{" "}
                  that stays with you long after you leave.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════ C. USP SECTION ══════════ */}
      <section className="relative py-24 md:py-32 px-6">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, transparent, rgba(54, 76, 17, 0.08) 50%, transparent)",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-16 md:mb-20">
              <p
                className="uppercase tracking-[0.3em] text-sm mb-4"
                style={{ color: "#d4af37", fontFamily: "var(--font-inter)" }}
              >
                Why Choose Us
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  fontWeight: 700,
                  color: "#F5E6D3",
                }}
              >
                What Makes Bagecha Unforgettable
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {usps.map((usp, i) => {
              const Icon = usp.icon;
              return (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="why-glass-card why-usp-card p-8 rounded-2xl group h-full">
                    <div className="relative z-10">
                      <div className="why-icon-circle mb-5">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3
                        className="text-xl md:text-2xl mb-3"
                        style={{
                          fontFamily: "var(--font-playfair)",
                          fontWeight: 600,
                          color: "#F5E6D3",
                        }}
                      >
                        {usp.title}
                      </h3>
                      <p
                        className="text-white/60 leading-relaxed"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        {usp.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════ D. VIDEO SHOWCASE ══════════ */}
      <section className="relative py-24 md:py-32 px-6 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-16 md:mb-20">
              <p
                className="uppercase tracking-[0.3em] text-sm mb-4"
                style={{ color: "#d4af37", fontFamily: "var(--font-inter)" }}
              >
                See It For Yourself
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  fontWeight: 700,
                  color: "#F5E6D3",
                }}
              >
                A Glimpse Into Bagecha
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {videoShowcase.map((vid, i) => (
              <Reveal key={i} delay={i * 0.12}>
                <div className="why-video-card group relative rounded-2xl overflow-hidden aspect-[9/16] md:aspect-[9/14]">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  >
                    <source src={vid.src} type="video/mp4" />
                  </video>

                  {/* gradient overlay */}
                  <div
                    className="absolute inset-0 transition-opacity duration-500"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(54,76,17,0.85) 0%, rgba(54,76,17,0.2) 40%, rgba(54,76,17,0.1) 100%)",
                    }}
                  />

                  {/* border glow on hover */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#d4af37]/30 rounded-2xl transition-all duration-500 pointer-events-none" />

                  {/* overlay text */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10">
                    <h3
                      className="text-2xl md:text-3xl"
                      style={{
                        fontFamily: "var(--font-playfair)",
                        fontWeight: 700,
                        color: "#fff",
                        textShadow: "0 4px 20px rgba(0,0,0,0.5)",
                      }}
                    >
                      {vid.overlay}
                    </h3>
                    <div
                      className="mt-3 w-12 h-[2px] bg-[#d4af37] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                    />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ E. SOCIAL PROOF ══════════ */}
      <section className="relative py-24 md:py-32 px-6">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 70% 50%, rgba(212, 175, 55, 0.05) 0%, transparent 60%)",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-16 md:mb-20">
              <p
                className="uppercase tracking-[0.3em] text-sm mb-4"
                style={{ color: "#d4af37", fontFamily: "var(--font-inter)" }}
              >
                Loved By Visitors
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  fontWeight: 700,
                  color: "#F5E6D3",
                }}
              >
                What People Are Saying
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="why-glass-card why-testimonial-card p-8 rounded-2xl h-full flex flex-col">
                  <div className="relative z-10 flex flex-col h-full">
                    <Quote
                      className="w-8 h-8 mb-4"
                      strokeWidth={1.2}
                      style={{ color: "rgba(212, 175, 55, 0.3)" }}
                    />

                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: t.stars }).map((_, j) => (
                        <Star
                          key={j}
                          className="w-4 h-4"
                          fill="#d4af37"
                          stroke="#d4af37"
                        />
                      ))}
                    </div>

                    <p
                      className="text-white/70 leading-relaxed flex-1 mb-6"
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: "0.95rem",
                      }}
                    >
                      &ldquo;{t.text}&rdquo;
                    </p>

                    <div className="pt-4 border-t border-white/8">
                      <p
                        className="text-[#d4af37] font-semibold"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        {t.name}
                      </p>
                      <p className="text-white/40 text-sm flex items-center gap-1 mt-1">
                        <MapPin className="w-3 h-3" />
                        {t.location}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ F. FINAL CTA ══════════ */}
      <section className="relative py-32 md:py-44 px-6 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at center, rgba(54,76,17,0.25) 0%, transparent 60%)",
          }}
        />

        {/* Floating water-like glow */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(212,175,55,0.06), transparent)",
          }}
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        <Reveal>
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <motion.div
              animate={{
                textShadow: [
                  "0 0 20px rgba(212, 175, 55, 0.3)",
                  "0 0 40px rgba(212, 175, 55, 0.6)",
                  "0 0 20px rgba(212, 175, 55, 0.3)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <h2
                className="mb-8"
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "clamp(2.5rem, 6vw, 5rem)",
                  fontWeight: 700,
                  background:
                    "linear-gradient(to right, #d4af37, #F5E6D3, #d4af37)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Your Table Awaits
              </h2>
            </motion.div>

            <p
              className="text-xl text-white/60 mb-12 max-w-2xl mx-auto"
              style={{ fontFamily: "var(--font-inter)", fontWeight: 300 }}
            >
              Don&apos;t just hear about it — come feel the water beneath your
              feet, taste the difference, and create memories that last forever.
            </p>

            <motion.a
              href="https://www.google.com/maps/place/Bagecha"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-12 py-5 rounded-full overflow-hidden text-lg font-semibold transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #d4af37, #b8932d)",
                boxShadow:
                  "0 15px 40px rgba(212, 175, 55, 0.35), 0 0 60px rgba(212, 175, 55, 0.15)",
                color: "#364c11",
                fontFamily: "var(--font-inter)",
              }}
              whileHover={{
                scale: 1.06,
                boxShadow:
                  "0 20px 50px rgba(212, 175, 55, 0.5), 0 0 80px rgba(212, 175, 55, 0.25)",
              }}
              whileTap={{ scale: 0.96 }}
            >
              <span className="relative z-10 flex items-center gap-3">
                <MapPin className="w-5 h-5" />
                Plan Your Visit Today
              </span>
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%", skewX: -15 }}
                whileHover={{ x: "200%" }}
                transition={{ duration: 0.8 }}
              />
            </motion.a>

            {/* Decorative elements */}
            <div className="mt-16 flex justify-center gap-8 md:gap-12 flex-wrap text-white/30">
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.1, color: "#d4af37" }}
              >
                <Droplets className="w-7 h-7 mx-auto mb-2" />
                <p className="text-xs" style={{ fontFamily: "var(--font-inter)" }}>Water Sitting</p>
              </motion.div>
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.1, color: "#d4af37" }}
              >
                <Leaf className="w-7 h-7 mx-auto mb-2" />
                <p className="text-xs" style={{ fontFamily: "var(--font-inter)" }}>Nature Vibes</p>
              </motion.div>
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.1, color: "#d4af37" }}
              >
                <Sparkles className="w-7 h-7 mx-auto mb-2" />
                <p className="text-xs" style={{ fontFamily: "var(--font-inter)" }}>Premium Dining</p>
              </motion.div>
            </div>
          </div>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}
