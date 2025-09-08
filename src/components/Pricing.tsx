import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, TrendingUp, Scale } from "lucide-react";
import { AppointmentBooking } from "./AppointmentBooking";

const Pricing = () => {
  const pricingData = [
    {
      category: "Metal Scraps",
      icon: Scale,
      description: "Iron, Steel, Aluminum, Copper, Brass",
      priceRange: "Rs. 40-120/kg",
      trend: "↑ High Demand",
      color: "bg-orange-50 border-orange-200",
      badgeColor: "bg-orange-100 text-orange-800",
    },
    {
      category: "Electronic Waste",
      icon: TrendingUp,
      description: "Computers, Phones, Appliances",
      priceRange: "Rs. 15-500/kg",
      trend: "📱 Premium Items",
      color: "bg-blue-50 border-blue-200",
      badgeColor: "bg-blue-100 text-blue-800",
    },
    {
      category: "Paper & Cardboard",
      icon: CheckCircle,
      description: "Newspapers, Books, Packaging",
      priceRange: "Rs. 8-25/kg",
      trend: "♻️ Eco-Friendly",
      color: "bg-green-50 border-green-200",
      badgeColor: "bg-green-100 text-green-800",
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Current Market Prices
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transparent, competitive pricing based on real-time market rates. Get the best value for your scrap materials.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {pricingData.map((item, index) => (
            <Card key={index} className={`${item.color} hover:shadow-medium transition-all duration-300 border-2`}>
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl mb-2">{item.category}</CardTitle>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="text-3xl font-bold text-primary">{item.priceRange}</div>
                <Badge className={item.badgeColor}>{item.trend}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-primary text-primary-foreground rounded-2xl p-8 mb-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                💰 Price Match Guarantee
              </h3>
              <p className="mb-6 opacity-90">
                We guarantee to match or beat any competitor's price for the same quality scrap materials. 
                Our certified weighing ensures accurate measurements every time.
              </p>
              <div className="space-y-2 text-sm opacity-90">
                <p>✓ Certified digital scales</p>
                <p>✓ Real-time market pricing</p>
                <p>✓ No hidden charges</p>
                <p>✓ Instant payment</p>
              </div>
            </div>
            <div className="text-center lg:text-right">
              <AppointmentBooking>
                <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
                  Get Price Quote
                </Button>
              </AppointmentBooking>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="space-y-2">
            <div className="text-2xl font-bold text-primary">5+</div>
            <p className="text-sm text-muted-foreground">Years Experience</p>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold text-primary">50,000+</div>
            <p className="text-sm text-muted-foreground">Happy Customers</p>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold text-primary">24/7</div>
            <p className="text-sm text-muted-foreground">Service Available</p>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold text-primary">100%</div>
            <p className="text-sm text-muted-foreground">Satisfaction Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;