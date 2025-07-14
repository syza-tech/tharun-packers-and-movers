import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock,
  Mail,
  ExternalLink 
} from "lucide-react";

const ContactSection = () => {
  const handleCall = () => {
    window.open("tel:+919952111001", "_self");
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/919952111001", "_blank");
  };

  return (
    <section className="section-padding bg-gradient-to-b from-section-bg to-background relative">
      <div className="section-divider"></div>
      
      <div className="container-spacing">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-black text-text-primary mb-8 tracking-tight">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-xl lg:text-2xl text-text-secondary leading-relaxed max-w-3xl mx-auto font-medium">
              Ready to move? Contact us for a free quote and personalized service
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Information */}
            <div className="space-y-10 animate-slide-up">
              
              {/* Phone Contact */}
              <Card className="p-8 bg-gradient-to-br from-primary/5 to-trust-blue/5 border border-primary/20 rounded-2xl shadow-[--shadow-card] card-interactive">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-2xl flex items-center justify-center">
                    <Phone className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-text-primary">Call Us Directly</h3>
                    <p className="text-4xl font-black text-primary tracking-wide">+91 9952111001</p>
                    <p className="text-text-secondary leading-relaxed">
                      Available 24/7 for immediate assistance and free quotations
                    </p>
                    <Button 
                      onClick={handleCall}
                      className="bg-primary hover:bg-trust-blue-dark text-primary-foreground font-bold px-8 py-3 rounded-xl transition-[--transition-smooth] hover:scale-105 group"
                    >
                      <Phone className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                      Call Now
                    </Button>
                  </div>
                </div>
              </Card>

              {/* WhatsApp Contact */}
              <Card className="p-8 bg-gradient-to-br from-success-green/5 to-trust-blue/5 border border-success-green/20 rounded-2xl shadow-[--shadow-card] card-interactive">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-success-green rounded-2xl flex items-center justify-center">
                    <MessageCircle className="h-8 w-8 text-background" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-text-primary">WhatsApp Chat</h3>
                    <p className="text-text-secondary leading-relaxed">
                      Quick responses and easy communication for your moving needs
                    </p>
                    <Button 
                      onClick={handleWhatsApp}
                      className="bg-success-green hover:bg-success-green/90 text-background font-bold px-8 py-3 rounded-xl transition-[--transition-smooth] hover:scale-105 group"
                    >
                      <MessageCircle className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                      WhatsApp Us
                    </Button>
                  </div>
                </div>
              </Card>
            </div>

            {/* Office Address */}
            <div className="space-y-10 animate-fade-in">
              <Card className="p-8 bg-card border border-border rounded-2xl shadow-[--shadow-card] card-interactive">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center">
                      <MapPin className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-text-primary">Our Office</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="text-lg font-semibold text-text-primary">Tharun Packers & Movers</div>
                    <address className="text-text-secondary leading-relaxed not-italic">
                      7/3A, Dhanasekaran Street,<br />
                      VGP Salai, Duraiswamy Garden,<br />
                      West Saidapet, Chennai – 600015<br />
                      Tamil Nadu, India
                    </address>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-text-primary">Business Hours</h4>
                    <div className="text-text-secondary space-y-1">
                      <p>Monday - Sunday: 24/7 Available</p>
                      <p className="text-sm text-primary font-medium">Emergency services available anytime</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-20 p-10 bg-gradient-to-r from-primary/10 to-trust-blue/10 rounded-3xl border border-primary/20 animate-scale-in">
            <h3 className="text-3xl font-bold text-text-primary mb-6">Ready to Move?</h3>
            <p className="text-xl text-text-secondary mb-8 leading-relaxed">
              Get your free quote today and experience stress-free relocation
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                onClick={handleCall}
                size="lg"
                className="bg-primary hover:bg-trust-blue-dark text-primary-foreground font-bold px-10 py-6 text-lg rounded-xl shadow-[--shadow-button] transition-[--transition-smooth] hover:scale-105 group"
              >
                <Phone className="mr-3 h-6 w-6 group-hover:animate-pulse" />
                Get Free Quote
              </Button>
              <Button 
                onClick={handleWhatsApp}
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold px-10 py-6 text-lg rounded-xl transition-[--transition-smooth] hover:scale-105 group"
              >
                <MessageCircle className="mr-3 h-6 w-6 group-hover:animate-pulse" />
                Chat with Us
              </Button>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ContactSection;