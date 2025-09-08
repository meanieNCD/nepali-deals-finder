import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";
import { AppointmentBooking } from "./AppointmentBooking";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-primary">♻️ ScrapSathi</div>
            <span className="text-sm text-muted-foreground">Nepal</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a 
              href="#home" 
              className="text-foreground hover:text-primary transition-colors duration-300 relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="#services" 
              className="text-foreground hover:text-primary transition-colors duration-300 relative group"
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="#materials" 
              className="text-foreground hover:text-primary transition-colors duration-300 relative group"
            >
              Materials
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="#pricing" 
              className="text-foreground hover:text-primary transition-colors duration-300 relative group"
            >
              Pricing
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="#contact" 
              className="text-foreground hover:text-primary transition-colors duration-300 relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span>+977-9841234567</span>
            </div>
            <AppointmentBooking>
              <Button variant="hero" size="sm">
                Book Collection
              </Button>
            </AppointmentBooking>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;