import { Card } from "@/components/ui/card";
import { Phone, MapPin, Heart } from "lucide-react";

const Footer = () => {
  const galleryImages = [
    {
      src: "/api/placeholder/300/200",
      alt: "Moving truck loading"
    },
    {
      src: "/api/placeholder/300/200", 
      alt: "Professional packing service"
    },
    {
      src: "/api/placeholder/300/200",
      alt: "Office relocation"
    },
    {
      src: "/api/placeholder/300/200",
      alt: "Safe delivery"
    }
  ];

  return (
    <footer className="bg-text-primary text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-primary">Tharun Packers & Movers</h3>
            <p className="text-background/80 leading-relaxed">
              Chennai's trusted moving partner since 2012. Professional, reliable, and safe relocation services across South India.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <p className="text-background/90">+91 9952111001</p>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-1" />
                <p className="text-background/90 leading-relaxed">
                  7/3A, Dhanasekaran Street,<br />
                  VGP Salai, Duraiswamy Garden,<br />
                  West Saidapet, Chennai – 600015
                </p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-background">Our Services</h4>
            <ul className="space-y-2 text-background/80">
              <li>• House Shifting (Local & Intercity)</li>
              <li>• Commercial Relocation</li>
              <li>• Office Moves</li>
              <li>• Interstate Moving</li>
              <li>• Packing & Unpacking</li>
              <li>• Loading & Unloading</li>
            </ul>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-background">Service Areas</h4>
            <ul className="space-y-2 text-background/80">
              <li>• Chennai & Suburbs</li>
              <li>• Coimbatore • Trichy</li>
              <li>• Salem • Tirupur</li>
              <li>• Tirupati • Pudukkottai</li>
              <li>• Dindigul • Telangana</li>
              <li>• Thoothukudi & More</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-background/20">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h4 className="text-xl font-bold text-background">Our Work Gallery</h4>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {galleryImages.map((image, index) => (
                  <Card key={index} className="overflow-hidden border-primary/20">
                    <img 
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-32 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </Card>
                ))}
              </div>
            </div>
            
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center space-x-2 text-background/80">
                <p>Made with</p>
                <Heart className="h-4 w-4 text-red-500 fill-current" />
                <p>for safe and reliable moving</p>
              </div>
              <p className="text-background/60">
                Copyright © 2025 Tharun Packers & Movers. All rights reserved.
              </p>
              <p className="text-background/60 text-sm">
                Verified Business on Justdial | Licensed & Insured
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;