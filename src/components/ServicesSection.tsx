import { Card } from "@/components/ui/card";
import { CheckCircle, MapPin } from "lucide-react";


const ServicesSection = () => {
  const services = [
    {
      icon: "🏠",
      title: "House Shifting",
      description: "Complete household relocation services with careful packing and safe transportation",
      features: ["Local & Intercity", "Door-to-door service", "Professional packing"]
    },
    {
      icon: "🏢",
      title: "Commercial Relocation", 
      description: "Office and business moving services with minimal downtime and maximum efficiency",
      features: ["Office equipment", "Furniture moving", "IT setup assistance"]
    },
    {
      icon: "📦",
      title: "Packing Services",
      description: "Expert packing using quality materials to ensure your items arrive safely",
      features: ["Premium materials", "Fragile item care", "Unpacking service"]
    }
  ];

  const serviceAreas = [
    "Chennai & Suburbs", "Coimbatore", "Trichy", "Salem", 
    "Tirupur", "Tirupati", "Pudukkottai", "Dindigul", 
    "Telangana", "Thoothukudi"
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-section-bg to-background relative">
      <div className="section-divider"></div>
      
      <div className="container-spacing">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-black text-text-primary mb-8 tracking-tight">
              Our <span className="text-gradient">Services</span>
            </h2>
            <p className="text-xl lg:text-2xl text-text-secondary leading-relaxed max-w-3xl mx-auto font-medium">
              Comprehensive relocation solutions tailored to your specific needs
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => (
              <Card key={index} className="p-8 bg-card shadow-[--shadow-card] card-interactive border border-border rounded-2xl animate-scale-in">
                <div className="text-center space-y-6">
                  <div className="text-5xl mb-6">{service.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-text-primary mb-4">{service.title}</h3>
                    <p className="text-text-secondary leading-relaxed mb-6">{service.description}</p>
                  </div>
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center justify-center space-x-2 text-sm font-medium text-primary">
                        <CheckCircle className="h-4 w-4" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Service Areas */}
          <div className="bg-gradient-to-r from-primary/5 to-trust-blue/5 rounded-3xl p-10 border border-primary/20 animate-fade-in">
            <div className="text-center mb-10">
              <h3 className="text-3xl font-bold text-text-primary mb-4">Service Areas</h3>
              <p className="text-lg text-text-secondary leading-relaxed">
                We provide reliable moving services across major cities in South India
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {serviceAreas.map((area, index) => (
                <div key={index} className="text-center p-4 bg-background/80 backdrop-blur-sm rounded-xl border border-border hover:shadow-md transition-[--transition-fast] hover:scale-105">
                  <MapPin className="h-5 w-5 text-primary mx-auto mb-2" />
                  <span className="text-sm font-semibold text-text-primary">{area}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Quote */}
          <div className="text-center mt-16 p-8 bg-card rounded-2xl shadow-[--shadow-card] border border-border animate-slide-up">
            <blockquote className="text-2xl lg:text-3xl font-bold text-text-primary mb-4 italic">
              "Affordable, timely deliveries with complete safety"
            </blockquote>
            <p className="text-lg text-text-secondary">- Our commitment to every customer</p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;