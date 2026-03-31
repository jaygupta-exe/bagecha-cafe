"use client";

import { motion } from "framer-motion";
import { Leaf, ChevronRight, MapPin } from "lucide-react";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="relative py-24 px-6 overflow-hidden bg-[#364c11]">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#d4af37]/10 to-transparent rounded-bl-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-black/20 to-transparent rounded-tr-full pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-10 md:p-16 rounded-[2rem] backdrop-blur-xl border border-white/10 shadow-2xl relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(0, 0, 0, 0.4))",
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.3)",
          }}
        >
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="mb-8 p-4 rounded-full bg-white/5 border border-white/10"
            >
              <Leaf className="w-10 h-10 text-[#d4af37]" strokeWidth={1.5} />
            </motion.div>

            <h2
              className="text-4xl md:text-6xl font-bold mb-8 text-white tracking-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Bagecha by Adis Café
            </h2>

            <div className="space-y-6 text-lg md:text-xl text-white/80 max-w-3xl leading-relaxed font-light">
              <p>
                A beautifully designed garden-themed café where nature meets comfort.
                Built on passion, growth, and a deep love for creating memorable moments.
              </p>
              <p>
                Our journey began in 2019 with a vision to bring unique flavors and warm hospitality
                to our community. Today, Bagecha stands as a testament to that dedication.
              </p>
            </div>

            <motion.div
              className="mt-12 flex flex-col sm:flex-row gap-6 items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Link
                href="/about"
                className="group relative px-8 py-4 rounded-full bg-[#d4af37] text-black font-semibold flex items-center gap-2 transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]"
              >
                Our Full Story
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="#location"
                className="px-8 py-4 rounded-full border border-white/20 text-white/80 hover:bg-white/5 transition-all flex items-center gap-2"
              >
                <MapPin className="w-4 h-4" />
                Find Us
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
