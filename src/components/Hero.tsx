import { Button } from "@/components/ui/button";
import ConnectivityGraphic from "./ConnectivityGraphic";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Cinematic Aura - Theme Aware */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 mesh-gradient opacity-20 dark:opacity-30 animate-pulse-slow" />
      
      {/* High-End Floating Blobs with Cinematic Depth */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-connectic-purple/10 dark:bg-connectic-purple/20 blur-[120px] animate-float opacity-50" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-connectic-pink/10 dark:bg-connectic-pink/20 blur-[150px] animate-float-delayed opacity-40" />
      <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] rounded-full bg-blue-500/5 dark:bg-blue-500/10 blur-[100px] animate-float opacity-30" />
      
      <div className="container mx-auto px-6 md:px-12 lg:px-20 pt-20 pb-12 relative z-10 max-w-[1440px]">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-connectic-purple/10 border border-connectic-purple/20 mb-6 group cursor-default shadow-sm hover:shadow-connectic-purple/10 transition-all duration-500">
              <span className="w-2 h-2 rounded-full bg-connectic-purple animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-connectic-purple">AI-Powered Digital Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.15] mb-8 tracking-tight">
              We Build the{" "}
              <span className="relative inline-block">
                <span className="gradient-text animate-gradient-shift">Digital Future</span>
                <div className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-r from-connectic-purple to-connectic-pink blur-md opacity-30 dark:opacity-50" />
              </span>
              <br />
              <span className="text-foreground drop-shadow-2xl">AI & Automation</span>
            </h1>
            
            <p className="text-xl md:text-lg text-muted-foreground mb-10 max-w-xl leading-relaxed font-light tracking-wide">
              Empowering global brands with <span className="text-foreground font-medium italic underline decoration-connectic-purple/50 underline-offset-4">intelligent ecosystems</span>. 
              We don't just build websites; we engineer high-performance digital legacies.
            </p>
            
            <div className="flex flex-wrap gap-6 items-center">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-connectic-purple to-connectic-pink rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <Button variant="hero" size="xl" className="relative transition-transform duration-500 hover:scale-105 active:scale-95 px-10 py-8 text-lg font-bold">
                  Start Your Audit
                  <ArrowRight className="ml-2 w-6 h-6 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
              
              <Button variant="heroOutline" size="xl" className="group backdrop-blur-xl border-white/10 hover:border-white/30 hover:bg-white/5 transition-all duration-500 px-10 py-8 text-lg font-semibold">
                View Portfolio
              </Button>
            </div>
            
            {/* Trust indicators - Bento Style (Theme Aware) */}
            <div className="mt-10 inline-flex flex-wrap items-center gap-6 p-1 bg-foreground/[0.03] border border-foreground/10 rounded-[2rem] backdrop-blur-3xl shadow-sm">
              <div className="px-8 py-4 text-center">
                <div className="text-3xl font-black text-foreground tracking-tighter">50+</div>
                <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground/60">Successes</div>
              </div>
              <div className="w-[1px] h-10 bg-foreground/10" />
              <div className="px-8 py-4 text-center">
                <div className="text-3xl font-black text-foreground tracking-tighter">100%</div>
                <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground/60">Trust Rate</div>
              </div>
              <div className="w-[1px] h-10 bg-foreground/10" />
              <div className="px-8 py-4 text-center">
                <div className="text-3xl font-black text-foreground tracking-tighter">24/7</div>
                <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground/60">Support</div>
              </div>
            </div>
          </div>
          
          {/* Right graphic - Premium Floating Frame (Theme Aware) */}
          <div className="relative lg:h-[700px] animate-fade-in group md:mt-0 mt-12">
            <div className="absolute -inset-10 bg-connectic-purple/10 blur-[100px] group-hover:bg-connectic-purple/20 transition-all duration-1000" />
            <div className="relative h-full glass-card rounded-[3rem] overflow-hidden border border-foreground/10 shadow-[0_0_80px_-20px_rgba(155,135,245,0.2)] group-hover:border-foreground/20 transition-all duration-700 active:scale-[0.99]">
              <ConnectivityGraphic />
              
              {/* Floating Meta Details Overlay */}
              <div className="absolute top-6 right-6 px-4 py-2 bg-background/50 backdrop-blur-xl border border-foreground/10 rounded-full animate-float opacity-80 shadow-lg">
                <span className="text-[10px] font-bold text-foreground tracking-widest uppercase italic">Engineered Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
