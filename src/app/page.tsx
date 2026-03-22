import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ValueStrip from "@/components/ValueStrip";
import ProductGrid from "@/components/ProductGrid";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import StarterKit from "@/components/StarterKit";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ValueStrip />
      <ProductGrid />
      <HowItWorks />
      <Testimonials />
      <StarterKit />
      <Footer />
    </main>
  );
}
