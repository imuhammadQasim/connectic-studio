import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import CEOSpotlight from "@/components/CEOSpotlight";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Services />
      <CEOSpotlight />
      <Portfolio />
      <TechStack />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
