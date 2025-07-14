import { Card } from "@/components/ui/card";
import { Phone, MapPin, Heart } from "lucide-react";

const Footer = () => {
  const galleryImages = [
    {
      src: "/lovable-uploads/0b5513b0-20c3-4d34-8b35-07c8f9d4822d.png",
      alt: "Moving truck loading"
    },
    {
      src: "/lovable-uploads/ccb31e49-1cdb-4434-9925-a730155eddb0.png", 
      alt: "Professional packing service"
    },
    {
      src: "/lovable-uploads/220555c7-c481-4b6f-9b95-5c3b00a66f53.png",
      alt: "Tharun Transport business banner"
    },
    {
      src: "/lovable-uploads/6d5bdb66-1207-466c-9ab6-84db85ef74c5.png",
      alt: "Professional packing materials"
    }
  ];

  return (
    <footer className="bg-text-primary text-background relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-text-primary via-text-primary to-trust-blue-dark opacity-90"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-trust-blue/10 rounded-full blur-3xl"></div>
      
      <div className="container-spacing relative z-10 py-20">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-16">
          
          {/* Company Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-black text-primary mb-4">Tharun Packers & Movers</h3>
              <p className="text-background/80 leading-relaxed text-lg">
                Chennai's trusted moving partner since 2012. Professional, reliable, and safe relocation services across South India with a commitment to excellence.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-background/60 text-sm font-medium">24/7 Helpline</p>
                  <p className="text-background font-bold text-xl">+91 9952111001</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mt-1">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-background/60 text-sm font-medium mb-2">Office Address</p>
                  <address className="text-background/90 leading-relaxed not-italic">
                    7/3A, Dhanasekaran Street,<br />
                    VGP Salai, Duraiswamy Garden,<br />
                    West Saidapet, Chennai – 600015
                  </address>
                </div>
              </div>
            </div>
          </div>
          
          {/* Services */}
          <div className="space-y-8">
            <h4 className="text-2xl font-bold text-background">Our Services</h4>
            <ul className="space-y-4 text-background/80">
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>House Shifting (Local & Intercity)</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Commercial Relocation</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Office Moves</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Interstate Moving</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Packing & Unpacking</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Loading & Unloading</span>
              </li>
            </ul>
          </div>
          
          {/* Service Areas */}
          <div className="space-y-8">
            <h4 className="text-2xl font-bold text-background">Service Areas</h4>
            <ul className="space-y-4 text-background/80">
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Chennai & Suburbs</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Coimbatore • Trichy</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Salem • Tirupur</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Tirupati • Pudukkottai</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Dindigul • Telangana</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Thoothukudi & More</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Work Gallery Section */}
        <div className="border-t border-background/20 pt-16">
          <div className="space-y-12">
            <div className="text-center space-y-6">
              <h4 className="text-3xl font-bold text-background">Our Work Gallery</h4>
              <p className="text-background/80 text-lg max-w-2xl mx-auto leading-relaxed">
                Real photos from our professional moving services across Chennai and South India
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {galleryImages.map((image, index) => (
                <Card key={index} className="overflow-hidden border border-primary/30 rounded-2xl group">
                  <img 
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </Card>
              ))}
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-background/20 pt-12 mt-16">
          <div className="text-center space-y-8">
            <div className="flex items-center justify-center space-x-3 text-background/80">
              <p className="text-lg">Made with</p>
              <Heart className="h-6 w-6 text-red-400 fill-current animate-pulse" />
              <p className="text-lg">for safe and reliable moving</p>
            </div>
            
            <div className="space-y-4">
              <p className="text-background/90 text-lg font-semibold">
                Copyright © 2025 Tharun Packers & Movers. All rights reserved.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-background/70">
                <span className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-success-green rounded-full"></div>
                  <span>Verified Business on Justdial</span>
                </span>
                <span className="hidden sm:block">•</span>
                <span className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-success-green rounded-full"></div>
                  <span>Licensed & Insured</span>
                </span>
                <span className="hidden sm:block">•</span>
                <span className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-success-green rounded-full"></div>
                  <span>GST Registered</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;