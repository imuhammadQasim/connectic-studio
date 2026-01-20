import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Send, CheckCircle2, MessageSquare, Clock, Globe } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const toggleService = (service: string) => {
    setSelectedServices(prev => 
      prev.includes(service) 
        ? prev.filter(s => s !== service) 
        : [...prev, service]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setSelectedServices([]);
    toast.success("Message sent successfully! We'll get back to you soon.");
  };

  return (
    <section id="contact" className="relative py-12 overflow-hidden bg-background">
      {/* Decorative background  */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10 max-w-[1440px]">
        <div>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Content: Info - Elite Bento Layout */}
            <div className="animate-slide-up lg:sticky lg:top-24">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-connectic-purple/10 border border-connectic-purple/20 mb-8 group cursor-default shadow-sm hover:shadow-connectic-purple/10 transition-all duration-500">
                <span className="w-2 h-2 rounded-full bg-connectic-purple animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-connectic-purple">Let's Connect</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 md:mb-8 tracking-tight leading-[1.1]">
                Ready to transform your <br className="hidden sm:block" />
                <span className="gradient-text">Digital Presence?</span>
              </h2>
              
              <p className="text-base sm:text-lg text-muted-foreground mb-12 md:mb-16 max-w-lg leading-relaxed">
                Whether you have a specific project in mind or just want to explore possibilities, 
                our team is here to help you navigate the future of technology.
              </p>

              {/* Bento Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-12">
                <div className="group/card relative overflow-hidden glass-card p-5 md:p-6 rounded-[2rem] border-foreground/5 transition-all duration-500 hover:border-connectic-purple/30 hover:shadow-2xl hover:shadow-connectic-purple/5">
                  <div className="absolute -inset-10 bg-connectic-purple/5 blur-3xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-1000" />
                  <div className="relative z-10 space-y-3 md:space-y-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-connectic-purple/10 flex items-center justify-center group-hover/card:scale-110 group-hover/card:bg-connectic-purple transition-all duration-500">
                      <Mail className="w-5 h-5 md:w-6 md:h-6 group-hover/card:text-white" />
                    </div>
                    <div>
                      <h4 className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60 mb-1">Email</h4>
                      <p className="font-bold text-sm md:text-base text-foreground break-all">mq80140@gmail.com</p>
                    </div>
                  </div>
                </div>

                <div className="group/card relative overflow-hidden glass-card p-5 md:p-6 rounded-[2rem] border-foreground/5 transition-all duration-500 hover:border-connectic-blue/30 hover:shadow-2xl hover:shadow-connectic-blue/5">
                  <div className="absolute -inset-10 bg-connectic-blue/5 blur-3xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-1000" />
                  <div className="relative z-10 space-y-3 md:space-y-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-connectic-blue/10 flex items-center justify-center group-hover/card:scale-110 group-hover/card:bg-connectic-blue transition-all duration-500">
                      <Phone className="w-5 h-5 md:w-6 md:h-6 group-hover/card:text-white" />
                    </div>
                    <div>
                      <h4 className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60 mb-1">Direct Line</h4>
                      <p className="font-bold text-sm md:text-base text-foreground">Let's Connect</p>
                    </div>
                  </div>
                </div>

                <div className="sm:col-span-2 group/card relative overflow-hidden glass-card p-5 md:p-6 rounded-[2rem] border-foreground/5 transition-all duration-500 hover:border-foreground/20 hover:shadow-2xl">
                  <div className="absolute -inset-10 bg-foreground/5 blur-3xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-1000" />
                  <div className="relative z-10 flex items-center gap-4 md:gap-6">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-foreground/5 flex items-center justify-center">
                      <Globe className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div>
                      <h4 className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60 mb-1">Global Presence</h4>
                      <p className="font-bold text-sm md:text-base text-foreground">Remote-First • Operating Worldwide</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust indicators - Mobile Wrapped */}
              <div className="pt-8 border-t border-border flex flex-wrap items-center gap-6 md:gap-8">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-emerald-500/10 flex items-center justify-center">
                    <Clock className="w-3.5 h-3.5 md:w-4 md:h-4 text-emerald-500" />
                  </div>
                  <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-muted-foreground">24h Response</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle2 className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
                  </div>
                  <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-muted-foreground">Expert Consultation</span>
                </div>
              </div>
            </div>

            {/* Right Content: Form - Elite Cinematic Styling */}
            <div className="animate-fade-in relative mt-12 lg:mt-0">
              <div className="absolute -inset-4 bg-gradient-to-br from-connectic-purple/10 to-connectic-blue/10 blur-[100px] opacity-30 dark:opacity-50" />
              
              <div className="relative glass-card p-6 sm:p-8 md:p-12 rounded-[2rem] border-white/5 dark:border-white/10 shadow-3xl overflow-hidden shadow-black/20">
                {/* Submit Success Overlay */}
                {isSubmitted && (
                  <div className="absolute inset-0 bg-background/98 backdrop-blur-xl z-20 flex flex-col items-center justify-center text-center p-8 animate-fade-in">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-6 animate-float">
                      <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black mb-3 text-foreground tracking-tighter">Transmission Successful</h3>
                    <p className="text-sm sm:text-base text-muted-foreground mb-10 max-w-sm leading-relaxed">
                      Your vision has been received. Our elite team will analyze and respond within 24 hours.
                    </p>
                    <Button variant="outline" size="xl" onClick={() => setIsSubmitted(false)} className="rounded-xl border-connectic-purple/30 text-connectic-purple hover:bg-connectic-purple hover:text-white px-8 py-6 h-auto">
                      Send New Vision
                    </Button>
                  </div>
                )}

                <div className="mb-8 md:mb-10 space-y-2">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">Initiate Project</h3>
                  <p className="text-[9px] text-muted-foreground/60 uppercase font-black tracking-[0.2em] italic">Phase 01: Requirement Analysis</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    <div className="space-y-3">
                      <label className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/40 px-1">Full Name</label>
                      <Input 
                        placeholder="Alex Architect" 
                        required 
                        className="h-12 md:h-14 bg-foreground/[0.03] border-foreground/5 focus:border-connectic-purple/30 focus:ring-0 transition-all rounded-2xl placeholder:text-foreground/20 font-medium text-sm"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/40 px-1">Email Endpoint</label>
                      <Input 
                        type="email" 
                        placeholder="connect@brand.ai" 
                        required 
                        className="h-12 md:h-14 bg-foreground/[0.03] border-foreground/5 focus:border-connectic-blue/30 focus:ring-0 transition-all rounded-2xl placeholder:text-foreground/20 font-medium text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/40 px-1">Service Intelligence</label>
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {["SaaS Development", "AI Integration", "Web Architecture", "UI/UX Design", "Graphic Design", "Cloud Systems", "AI-SEO", "Social Media Management" ].map((service) => (
                        <button
                          key={service}
                          type="button"
                          onClick={() => toggleService(service)}
                          className={`px-4 py-2 md:px-5 md:py-2.5 rounded-xl md:rounded-2xl text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] border transition-all duration-300 active:scale-95 ${
                            selectedServices.includes(service) 
                              ? "bg-connectic-purple text-white border-connectic-purple shadow-lg shadow-connectic-purple/20" 
                              : "border-foreground/5 bg-foreground/[0.02] text-muted-foreground hover:bg-connectic-purple/10 hover:border-connectic-purple/30 hover:text-connectic-purple"
                          }`}
                        >
                          {service}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/40 px-1">Executive Briefing</label>
                    <Textarea 
                      placeholder="Tell us about the future you want to build..." 
                      className="min-h-[160px] bg-foreground/[0.03] border-foreground/5 focus:border-connectic-purple/30 focus:ring-0 transition-all rounded-2xl resize-none placeholder:text-foreground/20 font-medium leading-relaxed"
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    size="xl"
                    className="w-full relative overflow-hidden gradient-bg hover:opacity-100 transition-all shadow-2xl shadow-primary/30 group"
                  >
                    <div className="absolute inset-x-0 bottom-0 h-1 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                    {isSubmitting ? (
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span className="text-xs uppercase font-black tracking-widest">Processing Vision...</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center gap-3">
                        <span className="text-sm uppercase font-black tracking-widest">Establish Connection</span>
                        <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </div>
                    )}
                  </Button>
                  
                  <div className="text-center">
                    <p className="text-[9px] uppercase font-black tracking-[0.4em] text-muted-foreground/30">
                      Encrypted End-to-End • Phase 01 Established
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
