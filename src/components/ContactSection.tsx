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

  const handleMapClick = () => {
    window.open(
      "https://maps.google.com/?q=7/3A,+Dhanasekaran+Street,+VGP+Salai,+Duraiswamy+Garden,+West+Saidapet,+Chennai+600015",
      "_blank"
    );
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-background to-hero-bg">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-text-primary">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Ready to move? Contact us for a free quote and consultation
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <Card className="p-8 bg-card border-trust-blue-light shadow-[--shadow-card]">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-trust-blue-light rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-text-primary">Phone Number</h3>
                    <p className="text-xl font-semibold text-primary">+91 9952111001</p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    onClick={handleCall}
                    className="bg-primary hover:bg-trust-blue-dark text-primary-foreground font-semibold px-8 py-3 shadow-[--shadow-button] transition-[--transition-smooth] flex-1"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now
                  </Button>
                  <Button 
                    onClick={handleWhatsApp}
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-3 transition-[--transition-smooth] flex-1"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp
                  </Button>
                </div>
              </div>
            </Card>
            
            <Card className="p-8 bg-card border-trust-blue-light shadow-[--shadow-card]">
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-trust-blue-light rounded-full">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-text-primary">Office Address</h3>
                    <p className="text-text-secondary leading-relaxed">
                      7/3A, Dhanasekaran Street,<br />
                      VGP Salai, Duraiswamy Garden,<br />
                      West Saidapet, Chennai – 600015
                    </p>
                  </div>
                </div>
                
                <Button 
                  onClick={handleMapClick}
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold py-3 transition-[--transition-smooth]"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View on Google Maps
                </Button>
              </div>
            </Card>
            
            <Card className="p-8 bg-card border-trust-blue-light shadow-[--shadow-card]">
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-trust-blue-light rounded-full">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-text-primary">Business Hours</h3>
                    <p className="text-text-secondary">Available 7 days a week</p>
                    <p className="text-text-secondary">Call anytime for emergency moves</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="space-y-8">
            <Card className="p-8 bg-trust-blue-light/50 border-primary">
              <div className="space-y-6 text-center">
                <h3 className="text-2xl font-bold text-text-primary">Ready to Move?</h3>
                <p className="text-text-secondary leading-relaxed">
                  Get a free quote today! Our team is ready to help you with your next move. 
                  We provide transparent pricing with no hidden charges.
                </p>
                <div className="space-y-4">
                  <Button 
                    onClick={handleCall}
                    size="lg"
                    className="w-full bg-primary hover:bg-trust-blue-dark text-primary-foreground font-bold px-8 py-4 text-lg shadow-[--shadow-button] transition-[--transition-smooth]"
                  >
                    <Phone className="mr-3 h-6 w-6" />
                    Call for Free Quote
                  </Button>
                  <p className="text-sm text-text-secondary">
                    Available 24/7 for consultations
                  </p>
                </div>
              </div>
            </Card>
            
            <Card className="p-8 bg-card border-trust-blue-light shadow-[--shadow-card]">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-text-primary text-center">Service Areas</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Chennai City", "Coimbatore", "Trichy", "Salem",
                    "Tirupur", "Tirupati", "Pudukkottai", "Dindigul",
                    "Telangana", "Thoothukudi", "All South India", "Interstate"
                  ].map((area, index) => (
                    <div key={index} className="text-center p-3 bg-trust-blue-light rounded-lg">
                      <p className="text-sm font-medium text-primary">{area}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;