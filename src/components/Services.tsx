import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MapPin, Scale, CreditCard } from "lucide-react";

const Services = () => {
  const steps = [
    {
      icon: Phone,
      title: "Call or Book Online",
      description: "Contact us via phone or our website to schedule a pickup. Tell us what type of scrap you have.",
    },
    {
      icon: MapPin,
      title: "Free Doorstep Collection",
      description: "Our team arrives at your location with proper equipment to collect your scrap materials safely.",
    },
    {
      icon: Scale,
      title: "Accurate Weighing",
      description: "We weigh your materials using certified scales and provide transparent pricing based on current market rates.",
    },
    {
      icon: CreditCard,
      title: "Instant Payment",
      description: "Get paid immediately via cash, mobile banking, or bank transfer. No waiting, no hassle.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simple, transparent, and efficient. Get the best value for your scrap in just 4 easy steps.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="relative border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-medium group">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                <CardTitle className="text-xl font-semibold">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;