import CoffeeScroll from "@/components/CoffeeScroll";
import CategoryShowcase from "@/components/CategoryShowcase";
import FloatingParticles from "@/components/FloatingParticles";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative" style={{ backgroundColor: "#00735C" }}>
      {/* Ambient floating particles across entire page */}
      <FloatingParticles />

      {/* Hero: scroll-linked image sequence animation */}
      <CoffeeScroll />

      {/* Category showcases after hero */}
      <CategoryShowcase />

      {/* Footer */}
      <Footer />
    </main>
  );
}
