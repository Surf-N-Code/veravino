import { AlertTriangle, CheckCircle, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ProblemSection = () => {
  const problems = [
    "Die richtige Weinwahl ist für Kunden schwer",
    "Versand- & Lagerfragen bleiben unbeantwortet", 
    "Beratung ist nur zu Bürozeiten verfügbar",
    "Welcher Wein zu welchem Essen?"
  ];

  const solutions = [
    "Besucher finden sofort den perfekten Wein",
    "Kunden erhalten kompetente Antworten 24/7",
    "Die Conversion-Rate steigt messbar",
    "Professionelle Weinberatung für jeden",
    "Tolle Vorschläge für Weine zu jedem Essen"
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-5xl font-bold text-[rgb(30,58,43)] mb-6">
            Die Herausforderung im Weinhandel
          </h2>
          <p className="text-xl text-[rgb(30,58,43)]/70 max-w-3xl mx-auto">
            Traditionelle Online-Weinshops verlieren Kunden an kritischen Touchpoints
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-stretch">
          {/* Problem Side */}
          <div className="space-y-8 w-full lg:w-1/2">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium mb-6">
                <AlertTriangle className="w-4 h-4 mr-2" />
                Aktuelle Situation
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-[rgb(30,58,43)] mb-4">
                Warum Kunden abspringen
              </h3>
            </div>
            
            <div className="space-y-4">
              {problems.map((problem, index) => (
                <Card key={index} className="border-red-200 bg-white/90 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <AlertTriangle className="w-4 h-4 text-red-600" />
                      </div>
                      <p className="text-[rgb(30,58,43)] text-lg leading-relaxed">{problem}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Solution Side */}
          <div className="space-y-8 w-full lg:w-1/2">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
                <CheckCircle className="w-4 h-4 mr-2" />
                Mit Vera Vino
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-[rgb(30,58,43)] mb-4">
                Wie Ihr Shop profitiert
              </h3>
            </div>
            
            <div className="space-y-4">
              {solutions.map((solution, index) => (
                <Card key={index} className="border-green-200 bg-gradient-to-r from-green-50 to-emerald-50 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      </div>
                      <p className="text-[rgb(30,58,43)] text-lg leading-relaxed font-medium">{solution}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
