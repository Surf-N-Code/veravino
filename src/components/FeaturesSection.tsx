import { Card, CardContent } from "@/components/ui/card";
import { Search, Users, ShoppingCart, Globe, RefreshCw, Settings } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Users,
      title: "Geschmacksprofil-Match",
      description: "Empfehlungen nach Anlass, Gericht oder Süßegrad"
    },
    {
      icon: ShoppingCart,
      title: "Shop-Integration",
      description: "Direktkauf, Upsell-Links, Warenkorb-Verknüpfung"
    },
    {
      icon: Globe,
      title: "Mehrsprachigkeit",
      description: "Deutsch, Englisch, weitere Sprachen möglich"
    },
    {
      icon: RefreshCw,
      title: "Selbstlernend",
      description: "Log-Analyse, Prompt-Tuning über Wartungspaket"
    },
    {
      icon: Settings,
      title: "White-Label-fähig",
      description: "Für andere Weingüter adaptierbar"
    },
    {
      icon: Search,
      title: "Weinwissen & Beratung",
      description: "Expertenwissen zu Weinbau, Rebsorten und Weinkultur"
    }
  ];

  return (
    <section className="py-20 px-4 bg-[rgb(248,244,240)]">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[rgb(30,58,43)] mb-16">
          Key Features
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <IconComponent className="w-8 h-8 text-[rgb(30,58,43)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[rgb(30,58,43)] mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-[rgb(30,58,43)]/70 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
