import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";


const HeroSection = () => {
  const handleCall = () => {
    window.open("tel:+919952111001", "_self");
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/919952111001", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-hero-bg via-background to-section-bg overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent"></div>
      <div className="absolute top-10 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-trust-blue/5 rounded-full blur-3xl"></div>
      
      <div className="container-spacing relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12 animate-fade-in">
          
          {/* Brand Identity */}
          <div className="space-y-6">
            <div className="inline-block px-6 py-3 bg-primary/10 border border-primary/20 rounded-full">
              <p className="text-primary font-semibold text-lg tracking-wider">
                SINCE 2012 • TRUSTED • VERIFIED
              </p>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-text-primary leading-[1.1] tracking-tight">
                <span className="block mb-2">THARUN PACKERS</span>
                <span className="block text-gradient">& MOVERS</span>
              </h1>
              
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-text-secondary leading-relaxed max-w-3xl mx-auto">
                Chennai's Most Trusted Relocation Experts
              </h2>
            </div>
            
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto font-medium">
              Safe, professional house shifting and relocation services you can count on across South India.
            </p>
          </div>
          
          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              onClick={handleCall}
              size="lg"
              className="bg-primary hover:bg-trust-blue-dark text-primary-foreground font-bold px-10 py-6 text-lg rounded-xl shadow-[--shadow-button] transition-[--transition-smooth] hover:scale-105 border-2 border-primary hover:border-trust-blue-dark group"
            >
              <Phone className="mr-3 h-6 w-6 group-hover:animate-pulse" />
              📞 Call Now
            </Button>
            
            <Button 
              onClick={handleWhatsApp}
              variant="outline"
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold px-10 py-6 text-lg rounded-xl transition-[--transition-smooth] hover:scale-105 bg-background/80 backdrop-blur-sm group"
            >
              <MessageCircle className="mr-3 h-6 w-6 group-hover:animate-pulse" />
              💬 WhatsApp
            </Button>
          </div>
          
          {/* Contact Number Highlight */}
          <div className="text-center p-6 bg-gradient-to-r from-primary/5 to-trust-blue/5 rounded-2xl border border-primary/20 backdrop-blur-sm">
            <p className="text-3xl md:text-4xl font-black text-primary tracking-wide">
              +91 9952111001
            </p>
            <p className="text-text-secondary font-medium mt-2">
              Available 24/7 for your moving needs
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;