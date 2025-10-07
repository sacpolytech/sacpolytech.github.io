import Header from "@/components/polytech/header";
import HeroSection from "@/components/polytech/hero-section";
import ContentBlocks from "@/components/polytech/content-blocks";
import Testimonials from "@/components/polytech/testimonials";
import Footer from "@/components/polytech/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ContentBlocks />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
