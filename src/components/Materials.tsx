import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cpu, Wrench, FileText, Package, Car, Lightbulb } from "lucide-react";
import materialsImage from "@/assets/materials-icon.jpg";

const Materials = () => {
  const materials = [
    {
      icon: Wrench,
      category: "Metal Scraps",
      items: ["Iron & Steel", "Aluminum", "Copper", "Brass", "Stainless Steel"],
      price: "Rs. 40-120/kg",
      color: "bg-orange-100 text-orange-800",
    },
    {
      icon: Cpu,
      category: "Electronic Waste",
      items: ["Old Computers", "Mobile Phones", "TVs", "Refrigerators", "AC Units"],
      price: "Rs. 15-500/kg",
      color: "bg-blue-100 text-blue-800",
    },
    {
      icon: FileText,
      category: "Paper & Cardboard",
      items: ["Newspapers", "Books", "Cardboard", "Office Paper", "Magazines"],
      price: "Rs. 8-25/kg",
      color: "bg-green-100 text-green-800",
    },
    {
      icon: Package,
      category: "Plastic Materials",
      items: ["Bottles", "Containers", "Bags", "PVC Pipes", "Packaging"],
      price: "Rs. 12-35/kg",
      color: "bg-purple-100 text-purple-800",
    },
    {
      icon: Car,
      category: "Automotive Parts",
      items: ["Car Batteries", "Radiators", "Catalytic Converters", "Tires", "Engine Parts"],
      price: "Rs. 25-800/kg",
      color: "bg-red-100 text-red-800",
    },
    {
      icon: Lightbulb,
      category: "Other Materials",
      items: ["Cables & Wires", "Rubber", "Glass", "Mixed Metals", "Industrial Waste"],
      price: "Rs. 10-150/kg",
      color: "bg-yellow-100 text-yellow-800",
    },
  ];

  return (
    <section id="materials" className="py-24 bg-gradient-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Materials We Accept
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We accept a wide range of scrap materials and offer competitive prices based on current market rates.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {materials.map((material, index) => (
            <Card key={index} className="hover:shadow-medium transition-all duration-300 border-2 hover:border-primary/20 group">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <material.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{material.category}</CardTitle>
                    <Badge className={material.color}>{material.price}</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {material.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card rounded-2xl p-8 shadow-medium">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Don't See Your Material Listed?
              </h3>
              <p className="text-muted-foreground mb-6">
                We accept many more types of scrap materials. If you have something not listed here, please contact us for a custom quote. We're always looking to expand our recycling capabilities.
              </p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>✓ Industrial waste materials</p>
                <p>✓ Construction debris (metal)</p>
                <p>✓ Commercial equipment</p>
                <p>✓ Large quantity bulk items</p>
              </div>
            </div>
            <div className="relative">
              <img
                src={materialsImage}
                alt="Various scrap materials"
                className="rounded-xl w-full h-auto shadow-soft"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Materials;