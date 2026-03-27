import CoffeeScroll from "@/components/CoffeeScroll";
import CategoryShowcase from "@/components/CategoryShowcase";
import FullMenu from "@/components/FullMenu";
import FloatingParticles from "@/components/FloatingParticles";
import VisitUs from "@/components/VisitUs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative" style={{ backgroundColor: "#364c11" }}>
      {/* Ambient floating particles across entire page */}
      <FloatingParticles />

      {/* Hero: scroll-linked image sequence animation */}
      <CoffeeScroll />

      {/* Complete Extensive Cafe Menu Showcase */}
      <FullMenu />

      {/* Category showcases after hero */}
      <CategoryShowcase />

      {/* Visit Us — map, hours, contact, socials */}
      <VisitUs />

      {/* Footer */}
      <Footer />
    </main>
  );
}
