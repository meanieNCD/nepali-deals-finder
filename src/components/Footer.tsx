import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold">♻️ ScrapSathi</span>
            </div>
            <p className="text-background/80">
              Nepal's most trusted scrap collection service. Turning your waste into value since 2019.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors cursor-pointer">
                <Facebook className="h-4 w-4 text-primary-foreground" />
              </div>
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors cursor-pointer">
                <Instagram className="h-4 w-4 text-primary-foreground" />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2 text-background/80">
              <a href="#home" className="block hover:text-primary transition-colors">Home</a>
              <a href="#services" className="block hover:text-primary transition-colors">How It Works</a>
              <a href="#materials" className="block hover:text-primary transition-colors">Materials</a>
              <a href="#contact" className="block hover:text-primary transition-colors">Contact</a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <div className="space-y-2 text-background/80">
              <p>Metal Scrap Collection</p>
              <p>Electronic Waste</p>
              <p>Paper & Cardboard</p>
              <p>Automotive Parts</p>
              <p>Bulk Industrial Waste</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3 text-background/80">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+977-9841234567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>info@scrapsathi.com</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1" />
                <span>Kathmandu Valley, Nepal</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center text-background/60">
          <p>&copy; 2024 ScrapSathi Nepal. All rights reserved. | Licensed Waste Collection Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;