import { Button } from "@/components/ui/button";
import { ArrowRight, Recycle, Truck, Banknote } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Turn Your <span className="text-primary">Scrap</span> Into <span className="text-primary">Cash</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Nepal's most trusted scrap collection service. We buy your metal, electronic waste, paper, and more at the best prices. Free doorstep collection across Kathmandu Valley.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                Get Instant Quote
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Call Now: +977-9841234567
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Recycle className="h-6 w-6 text-primary" />
                </div>
                <p className="text-sm font-medium">Eco-Friendly</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Truck className="h-6 w-6 text-primary" />
                </div>
                <p className="text-sm font-medium">Free Pickup</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Banknote className="h-6 w-6 text-primary" />
                </div>
                <p className="text-sm font-medium">Best Prices</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src={heroImage}
              alt="Scrap collection service in Nepal"
              className="rounded-2xl shadow-strong w-full h-auto animate-bounce-gentle"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-4 rounded-xl shadow-medium">
              <p className="text-sm font-medium">Serving 50,000+</p>
              <p className="text-sm">Happy Customers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;