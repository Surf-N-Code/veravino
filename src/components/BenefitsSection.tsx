
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Clock, Users, BarChart, ArrowUpRight, Wine } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "+17 % höhere Conversion",
      description: "Personalisierte Empfehlungen verkürzen den Weg vom Klick zum Kauf."
    },
    {
      icon: Clock,
      title: "24 / 7 Service",
      description: "Vera Vino schläft nie – ideal für internationale Kundschaft und Spontankäufe."
    },
    {
      icon: Users,
      title: "Weniger Support-Tickets",
      description: "Standardfragen zu Versand, Jahrgängen & Aktionen beantwortet der Bot selbst."
    },
    {
      icon: BarChart,
      title: "Datengestützte Insights",
      description: "Chat-Logs zeigen Trends für Marketing und Produktion."
    },
    {
      icon: ArrowUpRight,
      title: "Intelligentes Upselling",
      description: "Vera Vino erkennt Kaufmuster und schlägt passende Weine oder Zubehör vor – für höhere Warenkörbe."
    },
    {
      icon: Wine,
      title: "Professionelle Weinberatung",
      description: "Fundierte Empfehlungen zu Rebsorten, Jahrgängen und Food-Pairing – wie ein digitaler Sommelier."
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[rgb(30,58,43)] mb-16">
          Nutzenübersicht
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0 shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[rgb(207,220,255)] flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-[rgb(30,58,43)]" />
                  </div>
                  <CardTitle className="text-xl font-bold text-[rgb(30,58,43)]">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[rgb(30,58,43)]/70 text-center leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
