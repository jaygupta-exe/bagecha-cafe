import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import FloatingParticles from "@/components/FloatingParticles";
import VisitUs from "@/components/VisitUs";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Find Us: Map, Operating Hours & Contact | Bagecha by Adis",
  description:
    "Get direction maps, active contact numbers, and opening hours for Bagecha by Adis. Visit the best aesthetic cafe in Jalandhar for a premium dining experience.",
  alternates: {
    canonical: "https://bagechabyadis.in/location",
  },
  openGraph: {
    title: "Find Us: Map, Operating Hours & Contact | Bagecha by Adis",
    description:
      "Get direction maps, active contact numbers, and opening hours for Bagecha by Adis. Visit the best aesthetic cafe in Jalandhar for a premium dining experience.",
    url: "https://bagechabyadis.in/location",
    siteName: "Bagecha by Adis",
    images: [
      {
        url: "https://bagechabyadis.in/logo.png",
        width: 512,
        height: 512,
        alt: "Bagecha by Adis Cafe Location Map and Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Find Us: Map, Operating Hours & Contact | Bagecha by Adis",
    description:
      "Get direction maps, active contact numbers, and opening hours for Bagecha by Adis. Visit the best aesthetic cafe in Jalandhar for a premium dining experience.",
    images: ["https://bagechabyadis.in/logo.png"],
  },
};

export default function LocationPage() {
  return (
    <main className="relative min-h-screen" style={{ backgroundColor: "#364c11" }}>
      <Navbar />
      <FloatingParticles />

      {/* Spacer for fixed navbar */}
      <div className="pt-24" />

      {/* Location Page Header / H1 */}
      <div className="text-center pt-16 pb-4 px-6 relative z-10 max-w-4xl mx-auto">
        <h1 
          className="text-4xl md:text-6xl font-bold text-[#d4af37] tracking-tight"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Our Location in Jalandhar
        </h1>
        <p 
          className="text-white/70 mt-4 text-base md:text-lg font-light leading-relaxed"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Looking for the best aesthetic cafe in Jalandhar? Find our full address, maps, timings, and contact details below. We look forward to welcoming you!
        </p>
        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-6" />
      </div>

      {/* Visit Us — map, hours, contact, socials */}
      <VisitUs />

      {/* Footer */}
      <Footer />
    </main>
  );
}
