
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus } from "lucide-react";

const FAQSection = () => {
  const faqs = [
    {
      question: "Wie aufwendig ist die Datenpflege?",
      answer: "Nur ein monatlicher CSV-Export – alles andere automatisiert Nina."
    },
    {
      question: "Können wir eigene Antworten hinterlegen?",
      answer: "Ja, z. B. Aktionshinweise oder saisonale Empfehlungen."
    },
    {
      question: "Ist der Bot auch mobil nutzbar?",
      answer: "Klar, das Widget ist responsive und PWA-kompatibel."
    },
    {
      question: "Was passiert bei rechtlichen Änderungen?",
      answer: "Prompt & Hinweise werden im Rahmen des Wartungspakets aktualisiert."
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-amber-50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
          FAQ
        </h2>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg font-bold text-gray-900 flex items-center justify-between">
                  {faq.question}
                  <Plus className="w-5 h-5 text-amber-600" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  → {faq.answer}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
