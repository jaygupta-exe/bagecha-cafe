import Navbar from "@/components/Navbar";
import FloatingParticles from "@/components/FloatingParticles";
import VisitUs from "@/components/VisitUs";
import Footer from "@/components/Footer";

export default function LocationPage() {
  return (
    <main className="relative min-h-screen" style={{ backgroundColor: "#364c11" }}>
      <Navbar />
      <FloatingParticles />

      {/* Spacer for fixed navbar */}
      <div className="pt-24" />

      {/* Visit Us — map, hours, contact, socials */}
      <VisitUs />

      {/* Footer */}
      <Footer />
    </main>
  );
}
