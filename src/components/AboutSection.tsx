import { Card } from "@/components/ui/card";
import { CheckCircle, Truck, Users } from "lucide-react";


const AboutSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-background to-section-bg">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-5xl font-bold text-text-primary">
                About <span className="text-primary">Tharun Packers & Movers</span>
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed">
                Tharun Packers & Movers has been providing trusted relocation services in Chennai since 2012. 
                With our own fleet of vehicles and skilled team, we ensure safe and hassle-free moves across South India.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <Card className="p-6 text-center bg-card border-trust-blue-light hover:shadow-[--shadow-card] transition-[--transition-smooth]">
                <div className="flex flex-col items-center space-y-3">
                  <div className="p-3 bg-trust-blue-light rounded-full">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-text-primary">Since 2012</p>
                    <p className="text-sm text-text-secondary">Trusted Service</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 text-center bg-card border-trust-blue-light hover:shadow-[--shadow-card] transition-[--transition-smooth]">
                <div className="flex flex-col items-center space-y-3">
                  <div className="p-3 bg-trust-blue-light rounded-full">
                    <Truck className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-text-primary">Own Trucks</p>
                    <p className="text-sm text-text-secondary">Fleet Available</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 text-center bg-card border-trust-blue-light hover:shadow-[--shadow-card] transition-[--transition-smooth]">
                <div className="flex flex-col items-center space-y-3">
                  <div className="p-3 bg-trust-blue-light rounded-full">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-text-primary">Professional Team</p>
                    <p className="text-sm text-text-secondary">Skilled Workers</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutSection;