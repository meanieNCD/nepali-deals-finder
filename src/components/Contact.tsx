import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Ready to Sell Your Scrap?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Contact us today for a free quote or schedule a pickup. We're here to serve you better.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Card className="border-2 border-primary/20 shadow-medium">
              <CardHeader>
                <CardTitle className="text-2xl">Get Instant Quote</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input placeholder="Your Name" />
                  <Input placeholder="Phone Number" />
                </div>
                <Input placeholder="Your Location" />
                <Textarea placeholder="Describe your scrap materials (type, quantity, condition)" rows={4} />
                <Button variant="hero" size="lg" className="w-full">
                  Request Quote
                </Button>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Call Us</h3>
                      <p className="text-sm text-muted-foreground">For immediate assistance</p>
                    </div>
                  </div>
                  <p className="text-lg font-medium">+977-9841234567</p>
                  <p className="text-sm text-muted-foreground">Available 24/7</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Email Us</h3>
                      <p className="text-sm text-muted-foreground">Get detailed quotes</p>
                    </div>
                  </div>
                  <p className="text-lg font-medium">info@scrapsathi.com</p>
                  <p className="text-sm text-muted-foreground">Response within 1 hour</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="space-y-8">
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="text-xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                    <MapPin className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Service Areas</h4>
                    <p className="text-sm text-muted-foreground">
                      Kathmandu, Bhaktapur, Lalitpur, Kirtipur and surrounding areas
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                    <Clock className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Operating Hours</h4>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>Monday - Saturday: 6:00 AM - 8:00 PM</p>
                      <p>Sunday: 8:00 AM - 6:00 PM</p>
                      <p>Emergency pickups available 24/7</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-primary text-primary-foreground shadow-medium">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Why Choose ScrapSathi?</h3>
                <div className="space-y-3 text-sm">
                  <p>✓ Best prices in Nepal</p>
                  <p>✓ Free doorstep collection</p>
                  <p>✓ Instant payment</p>
                  <p>✓ Certified weighing scales</p>
                  <p>✓ Eco-friendly disposal</p>
                  <p>✓ 5+ years of experience</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;