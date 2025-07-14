import { Card } from "@/components/ui/card";
import { 
  Award, 
  Shield, 
  Truck, 
  Package, 
  Heart,
  CheckCircle 
} from "lucide-react";


const WhyChooseSection = () => {
  const features = [
    {
      icon: "🏆",
      title: "10+ Years Experience",
      description: "Over a decade of trusted moving services in Chennai and South India"
    },
    {
      icon: "✅", 
      title: "Verified on Justdial",
      description: "Officially verified business with genuine customer reviews and ratings"
    },
    {
      icon: "🚛",
      title: "Own Vehicle Fleet",
      description: "Well-maintained trucks and professional moving equipment"
    },
    {
      icon: "📦",
      title: "Premium Packing Materials", 
      description: "High-quality bubble wrap, boxes, and protective materials"
    },
    {
      icon: "👥",
      title: "Trained Professional Team",
      description: "Skilled movers who handle your belongings with utmost care"
    },
    {
      icon: "🛡️",
      title: "Safe & Secure",
      description: "Comprehensive safety measures and insurance coverage options"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-background to-section-bg relative">
      <div className="section-divider"></div>
      
      <div className="container-spacing">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-black text-text-primary mb-8 tracking-tight">
              Why Choose <span className="text-gradient">Tharun Packers & Movers</span>
            </h2>
            <p className="text-xl lg:text-2xl text-text-secondary leading-relaxed max-w-3xl mx-auto font-medium">
              We stand out with our commitment to excellence, reliability, and customer satisfaction
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group p-8 bg-card shadow-[--shadow-card] card-interactive border border-border rounded-2xl animate-scale-in hover:bg-gradient-to-br hover:from-card hover:to-primary/5">
                <div className="text-center space-y-6">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text-primary mb-4 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="mt-20 bg-gradient-to-r from-primary/5 to-trust-blue/5 rounded-3xl p-10 border border-primary/20 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="space-y-4">
                <div className="text-4xl font-black text-primary">10+</div>
                <div className="text-lg font-semibold text-text-primary">Years of Excellence</div>
                <div className="text-text-secondary">Serving Chennai since 2012</div>
              </div>
              
              <div className="space-y-4">
                <div className="text-4xl font-black text-success-green">1000+</div>
                <div className="text-lg font-semibold text-text-primary">Happy Customers</div>
                <div className="text-text-secondary">Successful relocations completed</div>
              </div>
              
              <div className="space-y-4">
                <div className="text-4xl font-black text-trust-blue">24/7</div>
                <div className="text-lg font-semibold text-text-primary">Available Support</div>
                <div className="text-text-secondary">Round-the-clock assistance</div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;