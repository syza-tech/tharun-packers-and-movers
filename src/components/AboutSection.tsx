import { Card } from "@/components/ui/card";
import { CheckCircle, Truck, Users } from "lucide-react";


const AboutSection = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-background to-section-bg relative">
      <div className="section-divider"></div>
      
      <div className="container-spacing">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-black text-text-primary mb-8 tracking-tight">
              About <span className="text-gradient">Tharun Packers & Movers</span>
            </h2>
            <div className="max-w-4xl mx-auto space-y-8">
              <p className="text-xl lg:text-2xl text-text-secondary leading-relaxed font-medium">
                Chennai's trusted relocation partner since 2012, providing professional and reliable moving services across South India.
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Story Content */}
            <div className="space-y-8 animate-slide-up">
              <div className="space-y-6">
                <p className="text-lg text-text-secondary leading-relaxed">
                  With over a decade of experience, Tharun Packers & Movers has established itself as Chennai's most reliable moving company. We understand that relocating can be stressful, which is why we've built our reputation on trust, professionalism, and care.
                </p>
                <p className="text-lg text-text-secondary leading-relaxed">
                  Our team of skilled professionals uses modern equipment and premium packing materials to ensure your belongings reach their destination safely. Every move is handled with the utmost care and attention to detail.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-card rounded-2xl shadow-[--shadow-card] card-interactive border border-border">
                  <div className="text-3xl font-black text-primary mb-3">10+</div>
                  <div className="text-text-secondary font-semibold">Years Experience</div>
                </div>
                <div className="text-center p-6 bg-card rounded-2xl shadow-[--shadow-card] card-interactive border border-border">
                  <div className="text-3xl font-black text-success-green mb-3">🚛</div>
                  <div className="text-text-secondary font-semibold">Own Fleet</div>
                </div>
                <div className="text-center p-6 bg-card rounded-2xl shadow-[--shadow-card] card-interactive border border-border">
                  <div className="text-3xl font-black text-trust-blue mb-3">✓</div>
                  <div className="text-text-secondary font-semibold">Verified Business</div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-8 animate-fade-in">
              <div className="grid gap-6">
                <div className="flex items-start space-x-4 p-6 bg-card rounded-2xl shadow-[--shadow-card] card-interactive border border-border">
                  <div className="text-2xl">🏆</div>
                  <div>
                    <h3 className="text-lg font-bold text-text-primary mb-2">Trusted Since 2012</h3>
                    <p className="text-text-secondary leading-relaxed">Over a decade of reliable service in Chennai and across South India.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 p-6 bg-card rounded-2xl shadow-[--shadow-card] card-interactive border border-border">
                  <div className="text-2xl">🚛</div>
                  <div>
                    <h3 className="text-lg font-bold text-text-primary mb-2">Own Vehicle Fleet</h3>
                    <p className="text-text-secondary leading-relaxed">Well-maintained trucks and professional equipment for safe transportation.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 p-6 bg-card rounded-2xl shadow-[--shadow-card] card-interactive border border-border">
                  <div className="text-2xl">👷</div>
                  <div>
                    <h3 className="text-lg font-bold text-text-primary mb-2">Skilled Team</h3>
                    <p className="text-text-secondary leading-relaxed">Trained professionals who handle your belongings with care and expertise.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutSection;