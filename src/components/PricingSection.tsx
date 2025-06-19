import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { SmoothScrollButton } from "@/components/ui/smooth-scroll-button";

const PricingSection = () => {
  const packages = [
    {
      name: "Starter",
      oneTime: "7 500 €",
      monthly: "600 €",
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
      popular: true,
      features: [
        "Erweiterte Kundensupport Funktionen",
        "Quartals-Workshops",
        "Prioritäts-Support",
        "Analytics Dashboard",
        "Individuelle Anpassungen"
      ]
    },
    {
      name: "Enterprise",
      oneTime: "contact us",
      monthly: "contact us",
      popular: false,
      features: [
        "Alle Growth-Features",
        "Direkte Anbindung an Ihr Shopsystem",
        "24/7 Premium Support",
        "Monatliche Strategy-Meetings",
        "Custom Integration-Support",
        "Dedizierter Account Manager",
        "VIP Onboarding"
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
                  {pkg.name !== "Enterprise" ? (
                    <>
                      <div className="text-3xl font-bold text-[rgb(30,58,43)]">
                        {pkg.oneTime}
                        {pkg.oneTime !== "–" && <span className="text-sm text-[rgb(30,58,43)]/60 font-normal"> einmalig</span>}
                      </div>
                      <div className="text-xl text-[rgb(30,58,43)] font-semibold">
                        {pkg.monthly}
                        {!pkg.monthly.includes("Std.") && <span className="text-sm text-[rgb(30,58,43)]/60 font-normal"> monatlich</span>}
                      </div>
                    </>
                  ) : (
                    <div className="text-xl text-[rgb(30,58,43)] font-semibold">
                      Individuelles Angebot
                    </div>
                  )}
                </div>
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
                
                <SmoothScrollButton 
                  targetId="kontakt"
                  className={`w-full py-3 font-semibold rounded-xl transition-all ${
                    pkg.popular 
                      ? 'bg-[rgb(207,220,255)] hover:bg-[rgb(30,58,43)] text-[rgb(30,58,43)] hover:text-white shadow-lg hover:shadow-xl'
                      : 'bg-[rgb(207,220,255)] hover:bg-[rgb(30,58,43)] text-[rgb(30,58,43)] hover:text-white'
                  }`}
                >
                  Kontakt aufnehmen
                </SmoothScrollButton>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center space-y-8">
          <div className="inline-block bg-white/80 backdrop-blur-sm rounded-xl px-8 py-6 shadow-lg">
            <p className="text-[rgb(30,58,43)] font-medium mb-2">
              Alle Pakete beinhalten Hosting, Updates, DSGVO-Monitoring
            </p>
            <div className="h-px w-full bg-[rgb(30,58,43)]/10 my-4"></div>
            <div className="text-[rgb(30,58,43)]/80">
              <p className="font-medium mb-2">Flex Add-on verfügbar</p>
              <p className="text-sm">Für projektbasierte Anpassungen und Einzelleistungen bieten wir flexible Stundenpakete zu 95 €/Std.</p>
              <SmoothScrollButton 
                targetId="kontakt"
                variant="link"
                className="text-[rgb(30,58,43)] hover:text-[rgb(30,58,43)]/70 font-medium mt-2"
              >
                Mehr erfahren →
              </SmoothScrollButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
