
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import MobileApp from "@/components/MobileApp";
import Integrations from "@/components/Integrations";
import Partners from "@/components/Partners";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <MobileApp />
      <Integrations />
      <Partners />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
