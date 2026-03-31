import AboutSection from "@/components/AboutSection";
import CategoryShowcase from "@/components/CategoryShowcase";
import FloatingParticles from "@/components/FloatingParticles";
import VisitUs from "@/components/VisitUs";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="relative" style={{ backgroundColor: "#364c11" }}>
      <Navbar />
      {/* Ambient floating particles across entire page */}
      <FloatingParticles />

      {/* About Us section */}
      <AboutSection />

      {/* Menu Showcase section */}
      <CategoryShowcase />

      {/* Visit Us — map, hours, contact, socials */}
      <div id="locations">
        <VisitUs />
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
