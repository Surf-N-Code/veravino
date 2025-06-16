
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Settings, Rocket } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      number: "1",
      icon: CheckCircle,
      title: "Kick-off & Daten-Check",
      description: "Katalogprüfung & Scope-Definition"
    },
    {
      number: "2",
      icon: Settings,
      title: "Implementierung & Testphase",
      description: "Daten-Pipeline, Chat-Design, Shop-Anbindung"
    },
    {
      number: "3",
      icon: Rocket,
      title: "Go-Live & Optimierung",
      description: "Deployment, Monitoring, Feedback-Zyklen"
    }
  ];

  return (
    <section className="py-20 px-4 bg-[rgb(248,244,240)]">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[rgb(30,58,43)] mb-16">
          Ablauf in 3 Schritten
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                <CardHeader className="pb-4">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-[rgb(207,220,255)] flex items-center justify-center relative">
                    <IconComponent className="w-10 h-10 text-[rgb(30,58,43)]" />
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-sm font-bold text-[rgb(30,58,43)]">{step.number}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-[rgb(30,58,43)]">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[rgb(30,58,43)]/70 leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center">
          <div className="inline-block bg-white/80 backdrop-blur-sm rounded-xl px-8 py-4 shadow-lg">
            <p className="text-lg font-semibold text-[rgb(30,58,43)]">
              <span className="text-[rgb(30,58,43)]">Dauer:</span> ca. 8 Wochen bis zum Live-Gang
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
