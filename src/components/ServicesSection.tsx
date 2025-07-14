import { Card } from "@/components/ui/card";
import { Home, Building2, MapPin, Quote } from "lucide-react";
import officeMove from "@/assets/office-move.jpg";

const ServicesSection = () => {
  const cities = [
    "Coimbatore", "Trichy", "Salem", "Tirupur", "Tirupati", 
    "Pudukkottai", "Dindigul", "Telangana", "Thoothukudi"
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-text-primary">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Professional relocation services tailored to your needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="p-8 bg-card border-trust-blue-light hover:shadow-[--shadow-card] transition-[--transition-smooth] group">
                <div className="space-y-4">
                  <div className="p-4 bg-trust-blue-light rounded-full w-fit group-hover:bg-primary group-hover:text-primary-foreground transition-[--transition-smooth]">
                    <Home className="h-8 w-8 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-text-primary">House Shifting</h3>
                  <p className="text-text-secondary">Local & Intercity residential moves with complete care</p>
                </div>
              </Card>
              
              <Card className="p-8 bg-card border-trust-blue-light hover:shadow-[--shadow-card] transition-[--transition-smooth] group">
                <div className="space-y-4">
                  <div className="p-4 bg-trust-blue-light rounded-full w-fit group-hover:bg-primary group-hover:text-primary-foreground transition-[--transition-smooth]">
                    <Building2 className="h-8 w-8 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-text-primary">Commercial Relocation</h3>
                  <p className="text-text-secondary">Office and business moves with minimal downtime</p>
                </div>
              </Card>
            </div>
            
            <Card className="p-8 bg-trust-blue-light/50 border-primary">
              <div className="flex items-start space-x-4">
                <Quote className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <p className="text-lg font-medium text-text-primary">
                  "Affordable, timely deliveries with complete safety."
                </p>
              </div>
            </Card>
          </div>
          
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-[--shadow-card]">
              <img 
                src={officeMove} 
                alt="Commercial office relocation services - Tharun Packers & Movers"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent"></div>
            </div>
          </div>
        </div>
        
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <MapPin className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold text-text-primary">We Move To</h3>
            </div>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {cities.map((city, index) => (
                <span 
                  key={index} 
                  className="px-4 py-2 bg-trust-blue-light text-primary font-medium rounded-full text-sm hover:bg-primary hover:text-primary-foreground transition-[--transition-smooth] cursor-default"
                >
                  {city}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;