
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const PricingSection = () => {
  const packages = [
    {
      name: "Starter",
      oneTime: "7 500 €",
      monthly: "600 €",
      description: "Weingüter mit ≤ 50k Seitenaufrufe/Monat",
      popular: false,
      features: [
        "Grundausstattung Chat-Widget",
        "Basis-Weinberatung",
        "DSGVO-konform",
        "Email-Support"
      ]
    },
    {
      name: "Growth",
      oneTime: "12 500 €",
      monthly: "850 €",
      description: "Mehr Traffic, Quartals-Workshops inkl.",
      popular: true,
      features: [
        "Erweiterte Funktionen",
        "Quartals-Workshops",
        "Prioritäts-Support",
        "Analytics Dashboard",
        "Individuelle Anpassungen"
      ]
    },
    {
      name: "Flex",
      oneTime: "–",
      monthly: "95 €/Std.",
      description: "Projektbasiert & Einzelanpassungen",
      popular: false,
      features: [
        "Stundenbasis",
        "Maximale Flexibilität",
        "Individuelle Projekte",
        "Auf Anfrage"
      ]
    }
  ];

  return (
    <section className="py-20 px-4 bg-[rgb(248,244,240)]">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[rgb(30,58,43)] mb-16">
          Pakete & Preise
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg, index) => (
            <Card key={index} className={`relative border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white ${
              pkg.popular ? 'ring-2 ring-[rgb(207,220,255)] scale-105' : ''
            }`}>
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-[rgb(207,220,255)] text-[rgb(30,58,43)] px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Beliebt
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-[rgb(30,58,43)] mb-2">
                  {pkg.name}
                </CardTitle>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-[rgb(30,58,43)]">
                    {pkg.oneTime}
                    {pkg.oneTime !== "–" && <span className="text-sm text-[rgb(30,58,43)]/60 font-normal"> einmalig</span>}
                  </div>
                  <div className="text-xl text-[rgb(30,58,43)] font-semibold">
                    {pkg.monthly}
                    {!pkg.monthly.includes("Std.") && <span className="text-sm text-[rgb(30,58,43)]/60 font-normal"> monatlich</span>}
                  </div>
                </div>
                <p className="text-[rgb(30,58,43)]/70 text-sm mt-4">
                  {pkg.description}
                </p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-[rgb(30,58,43)] mt-0.5 flex-shrink-0" />
                      <span className="text-[rgb(30,58,43)]/80 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full py-3 font-semibold rounded-xl transition-all ${
                    pkg.popular 
                      ? 'bg-[rgb(207,220,255)] hover:bg-[rgb(30,58,43)] text-[rgb(30,58,43)] hover:text-white shadow-lg hover:shadow-xl'
                      : 'bg-[rgb(207,220,255)] hover:bg-[rgb(30,58,43)] text-[rgb(30,58,43)] hover:text-white'
                  }`}
                >
                  Paket wählen
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <div className="inline-block bg-white/80 backdrop-blur-sm rounded-xl px-8 py-4 shadow-lg">
            <p className="text-[rgb(30,58,43)] font-medium">
              Alle Pakete beinhalten Hosting, Updates, DSGVO-Monitoring
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
