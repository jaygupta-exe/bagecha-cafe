"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

/* ─── tiny inline SVG icons ─── */
const MapPinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const ClockIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const LeafIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(245,230,211,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 20A7 7 0 0 1 9.8 6.9C15.5 4.9 17 3.5 19 2c1 2 2 4.5 2 8 0 5.5-3.8 10-10 10z" />
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
  </svg>
);

/* ─── Glass card sub-component ─── */
function GlassCard({
  children,
  delay = 0,
  isInView,
}: {
  children: React.ReactNode;
  delay?: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      className="visit-glass-card"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ─── Main component ─── */
export default function VisitUs() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="locations"
      className="relative overflow-hidden py-24 md:py-36 px-6 md:px-12 lg:px-20"
      style={{
        background:
          "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0.25) 100%)",
      }}
    >
      {/* Decorative radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 20%, rgba(245,230,211,0.03) 0%, transparent 60%)",
        }}
      />

      {/* ── Section header ── */}
      <motion.div
        className="relative z-10 text-center mb-16 md:mb-24"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <p
          className="text-sm md:text-base tracking-[0.4em] text-white/40 uppercase mb-4"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Visit Us
        </p>


        <div className="flex items-center justify-center gap-3 mb-3">
          <LeafIcon />
          <h2
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white/90 tracking-tight"
            style={{
              fontFamily: "var(--font-playfair)",
              textShadow: "0 4px 30px rgba(0,0,0,0.3)",
            }}
          >
            Come Experience the Vibe
          </h2>
          <LeafIcon />
        </div>

        <p
          className="text-base md:text-lg text-white/40 tracking-wide"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          at Bagecha
        </p>

        <motion.div
          className="mt-8 h-[1px] w-24 mx-auto bg-gradient-to-r from-transparent via-white/30 to-transparent"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
        />
      </motion.div>

      {/* ── 2-column layout ── */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16">
        {/* Left — Map */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: -60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="visit-map-wrapper">
            <iframe
              title="Bagecha Cafe Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.5!2d75.57!3d31.32!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5b4a610e3df1%3A0xaefe7c7cf872e909!2sBagecha!5e0!3m2!1sen!2sin!4v1711000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Green overlay */}
            <div className="visit-map-overlay" />
          </div>
        </motion.div>

        {/* Right — Info Cards */}
        <div className="w-full lg:w-1/2 flex flex-col gap-5">
          {/* Location */}
          <GlassCard delay={0.15} isInView={isInView}>
            <div className="flex items-start gap-4">
              <div className="visit-icon-circle">
                <MapPinIcon />
              </div>
              <div>
                <h3
                  className="text-lg md:text-xl font-semibold text-white/90 mb-2"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Our Location
                </h3>
                <p
                  className="text-sm md:text-base text-white/50 leading-relaxed"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Bagecha, Doaba Chowk, Near Doaba Chowk, Vikas Puri, Santokh
                  Pura, Jalandhar, Punjab 144008
                </p>
                <a
                  href="https://www.google.com/maps/place/Bagecha,+Bagecha,+Doaba+Chowk,+Near+Doaba+Chowk,+Vikas+Puri,+Santokh+Pura,+Jalandhar,+Punjab+144008/data=!4m2!3m1!1s0x391a5b4a610e3df1:0xaefe7c7cf872e909"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-xs tracking-[0.15em] text-white/35 uppercase hover:text-white/60 transition-colors"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Get Directions →
                </a>
              </div>
            </div>
          </GlassCard>

          {/* Hours */}
          <GlassCard delay={0.25} isInView={isInView}>
            <div className="flex items-start gap-4">
              <div className="visit-icon-circle">
                <ClockIcon />
              </div>
              <div>
                <h3
                  className="text-lg md:text-xl font-semibold text-white/90 mb-2"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Operating Hours
                </h3>
                <p
                  className="text-sm md:text-base text-white/50 leading-relaxed"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Monday – Sunday
                </p>
                <p
                  className="text-lg md:text-xl font-medium text-white/75 visit-glow-text mt-1"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  10:00 AM – 10:30 PM
                </p>
              </div>
            </div>
          </GlassCard>

          {/* Contact */}
          <GlassCard delay={0.35} isInView={isInView}>
            <div className="flex items-start gap-4">
              <div className="visit-icon-circle">
                <PhoneIcon />
              </div>
              <div className="flex-1">
                <h3
                  className="text-lg md:text-xl font-semibold text-white/90 mb-2"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Get in Touch
                </h3>
                <p
                  className="text-sm md:text-base text-white/50 mb-4"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  +91 83600 32762
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="tel:+918360032762"
                    className="visit-cta-btn visit-cta-call"
                  >
                    <PhoneIcon />
                    <span>Call Now</span>
                  </a>
                  <a
                    href="https://wa.me/918360032762"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="visit-cta-btn visit-cta-whatsapp"
                  >
                    <WhatsAppIcon />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </GlassCard>

          {/* Social */}
          <GlassCard delay={0.45} isInView={isInView}>
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <p
                  className="text-sm tracking-[0.2em] text-white/40 uppercase mb-4"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Follow Us for Updates
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/bagecha_jalandhar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="visit-social-icon"
                    aria-label="Instagram"
                  >
                    <InstagramIcon />
                  </a>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>

      {/* Bottom glowing separator */}
      <motion.div
        className="mt-20 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <div className="w-1 h-1 rounded-full bg-white/20" />
        <div className="mx-3 w-16 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
        <div className="mx-3 w-16 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        <div className="w-1 h-1 rounded-full bg-white/20" />
      </motion.div>
    </section>
  );
}
