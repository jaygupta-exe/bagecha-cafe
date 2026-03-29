import HeroSlider from "@/components/HeroSlider";

import FloatingParticles from "@/components/FloatingParticles";
import VisitUs from "@/components/VisitUs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative" style={{ backgroundColor: "#364c11" }}>
      {/* Ambient floating particles across entire page */}
      <FloatingParticles />

      {/* Hero: cinematic video slider */}
      <HeroSlider />



      {/* Visit Us — map, hours, contact, socials */}
      <VisitUs />

      {/* Footer */}
      <Footer />
    </main>
  );
}
