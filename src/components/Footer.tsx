import { Mail, MapPin, Phone, Github, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#050505] text-background py-12 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-[1440px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center shadow-lg shadow-primary/20">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <span className="text-xl font-bold tracking-tight">Connectic</span>
            </div>
            <p className="text-background/60 leading-relaxed text-sm md:text-base">
              Building the digital future with AI, code, and automation. 
              Helping businesses scale with intelligent, state-of-the-art solutions.
            </p>
            <div className="flex flex-col gap-4 text-background/60">
              <div className="flex items-center gap-3 group transition-colors hover:text-primary">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-sm">mq80140@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 group transition-colors hover:text-primary">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold mb-6 uppercase tracking-wider text-background/90">Quick Links</h3>
            <ul className="space-y-4 text-background/60">
              <li><a href="#services" className="text-sm hover:text-primary transition-colors hover:translate-x-1 inline-block transform duration-200">Services</a></li>
              <li><a href="#about" className="text-sm hover:text-primary transition-colors hover:translate-x-1 inline-block transform duration-200">About Us</a></li>
              <li><a href="#" className="text-sm hover:text-primary transition-colors hover:translate-x-1 inline-block transform duration-200">Portfolio</a></li>
              <li><a href="#contact" className="text-sm hover:text-primary transition-colors hover:translate-x-1 inline-block transform duration-200">Contact</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold mb-6 uppercase tracking-wider text-background/90">Our Services</h3>
            <ul className="space-y-4 text-background/60">
              <li><a href="#" className="text-sm hover:text-primary transition-colors hover:translate-x-1 inline-block transform duration-200">Web Development</a></li>
              <li><a href="#" className="text-sm hover:text-primary transition-colors hover:translate-x-1 inline-block transform duration-200">AI Integration</a></li>
              <li><a href="#" className="text-sm hover:text-primary transition-colors hover:translate-x-1 inline-block transform duration-200">Cloud Solutions</a></li>
              <li><a href="#" className="text-sm hover:text-primary transition-colors hover:translate-x-1 inline-block transform duration-200">UI/UX Design</a></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-sm font-semibold mb-6 uppercase tracking-wider text-background/90">Follow Us</h3>
            <p className="text-sm text-background/60 mb-6">Stay updated with our latest innovations and insights.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 border border-white/10">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 border border-white/10">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 border border-white/10">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 border border-white/10">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-background/40 text-xs md:text-sm">
            © 2024 Connectic Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-8 text-xs md:text-sm text-background/40">
            <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-background transition-colors">Terms of Service</a>
          </div>
          <p className="text-xs md:text-sm text-background/60">
            Built with ❤️ by <span className="gradient-text font-bold">Muhammad</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
