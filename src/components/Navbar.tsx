import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/20">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-[1440px]">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <span className="text-xl font-bold">Connectic</span>
          </a>
          
          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
              Services
            </a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
            <Button variant="hero" size="sm">
              Get Started
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile nav overlay */}
        <div className={`
          fixed inset-0 top-[64px] z-40 bg-background/80 backdrop-blur-xl transition-all duration-300 md:hidden
          ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}>
          <div className={`
            flex flex-col gap-6 p-8 h-full transition-transform duration-300
            ${isOpen ? "translate-y-0" : "-translate-y-4"}
          `}>
            <a 
              href="#services" 
              onClick={() => setIsOpen(false)}
              className="text-2xl font-semibold hover:text-primary transition-colors py-2 border-b border-border/50"
            >
              Services
            </a>
            <a 
              href="#about" 
              onClick={() => setIsOpen(false)}
              className="text-2xl font-semibold hover:text-primary transition-colors py-2 border-b border-border/50"
            >
              About
            </a>
            <a 
              href="#contact" 
              onClick={() => setIsOpen(false)}
              className="text-2xl font-semibold hover:text-primary transition-colors py-2 border-b border-border/50"
            >
              Contact
            </a>
            <div className="mt-4">
              <Button variant="hero" className="w-full text-lg h-14" onClick={() => setIsOpen(false)}>
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
