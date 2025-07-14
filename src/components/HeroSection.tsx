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
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-hero-bg to-background overflow-hidden">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <div className="space-y-2">
                <h1 className="text-2xl lg:text-3xl font-bold text-primary">
                  THARUN PACKERS & MOVERS
                </h1>
                <h2 className="text-3xl lg:text-5xl font-bold text-text-primary leading-tight">
                  Trusted <span className="text-primary">Relocation Services</span> in Chennai
                </h2>
              </div>
              <p className="text-lg text-text-primary font-medium">Since 2012</p>
              <p className="text-xl text-text-secondary leading-relaxed max-w-2xl">
                Safe, professional house shifting and relocation services you can count on.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={handleCall}
                size="lg"
                className="bg-primary hover:bg-trust-blue-dark text-primary-foreground font-semibold px-8 py-4 text-lg shadow-[--shadow-button] transition-[--transition-smooth]"
              >
                <Phone className="mr-2 h-5 w-5" />
                📞 Call Now
              </Button>
              <Button 
                onClick={handleWhatsApp}
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-4 text-lg transition-[--transition-smooth]"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                💬 WhatsApp
              </Button>
            </div>
            
            <div className="text-center lg:text-left">
              <p className="text-2xl font-bold text-primary">+91 9952111001</p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;