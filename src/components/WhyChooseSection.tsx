import { Card } from "@/components/ui/card";
import { 
  Award, 
  Shield, 
  Truck, 
  Package, 
  Heart,
  CheckCircle 
} from "lucide-react";
import businessOwner from "@/assets/business-owner.jpg";

const WhyChooseSection = () => {
  const features = [
    {
      icon: Award,
      title: "10+ Years Experience",
      description: "Decade of trusted service in Chennai"
    },
    {
      icon: Shield,
      title: "Verified on Justdial",
      description: "Authentic business with verified reviews"
    },
    {
      icon: Truck,
      title: "Own Vehicles",
      description: "Well-maintained fleet for reliable transport"
    },
    {
      icon: Package,
      title: "Careful Packing Materials",
      description: "High-quality materials for item protection"
    },
    {
      icon: Heart,
      title: "Friendly & Trained Team",
      description: "Professional staff committed to excellence"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-section-bg to-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-text-primary">
            Why Choose <span className="text-primary">Tharun Packers & Movers</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Experience the difference of working with Chennai's most trusted movers
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-2xl shadow-[--shadow-card]">
              <img 
                src={businessOwner} 
                alt="Tharun - Owner of Tharun Packers & Movers Chennai"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <Card className="p-4 bg-background/95 backdrop-blur-sm border-trust-blue-light">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-success-green" />
                    <p className="font-semibold text-text-primary">Tharun - Your Trusted Partner</p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
          
          <div className="space-y-8 order-1 lg:order-2">
            <div className="grid grid-cols-1 gap-6">
              {features.map((feature, index) => (
                <Card 
                  key={index} 
                  className="p-6 bg-card border-trust-blue-light hover:shadow-[--shadow-card] transition-[--transition-smooth] group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-trust-blue-light rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-[--transition-smooth]">
                      <feature.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-text-primary flex items-center">
                        <CheckCircle className="h-5 w-5 text-success-green mr-2" />
                        {feature.title}
                      </h3>
                      <p className="text-text-secondary">{feature.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;