
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot, MessageCircle } from "lucide-react";

const DemoSection = () => {
  const demoQuestions = [
    "Welcher Riesling passt zu Sushi?",
    "Wie lange kann ich den Goldtröpfchen 2023 lagern?",
    "Versendet ihr auch in die Schweiz?"
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-8">
          Micro-Demo Bereich
        </h2>
        
        <p className="text-xl text-center text-gray-600 mb-12">
          Frag Nina:
        </p>
        
        <div className="relative bg-gradient-to-br from-amber-50 to-green-50 rounded-3xl p-8 shadow-xl">
          {/* Chat Interface Mockup */}
          <div className="space-y-6">
            {demoQuestions.map((question, index) => (
              <div key={index} className="flex items-start space-x-4 animate-[fade-in_0.6s_ease-out] opacity-0" 
                   style={{ animationDelay: `${index * 0.8}s`, animationFillMode: 'forwards' }}>
                <div className="flex-1">
                  <div className="bg-white rounded-2xl px-6 py-4 shadow-md ml-auto max-w-md">
                    <p className="text-gray-800">{question}</p>
                  </div>
                </div>
                <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">K</span>
                </div>
              </div>
            ))}
            
            {/* Nina's response */}
            <div className="flex items-start space-x-4 animate-[fade-in_0.6s_ease-out] opacity-0" 
                 style={{ animationDelay: '2.4s', animationFillMode: 'forwards' }}>
              <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-green-700 rounded-full flex items-center justify-center flex-shrink-0">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="bg-gradient-to-r from-amber-600 to-green-700 text-white rounded-2xl px-6 py-4 shadow-md max-w-md">
                  <p>Für Sushi empfehle ich unseren Kabinett Riesling 2023 - seine mineralische Frische harmoniert perfekt mit der japanischen Küche!</p>
                </div>
                <div className="text-xs text-gray-500 mt-2 ml-2">Nina • AI-Sommelier</div>
              </div>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="text-center mt-12">
            <Button className="bg-gradient-to-r from-amber-600 to-green-700 hover:from-amber-700 hover:to-green-800 text-white px-8 py-4 text-lg rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
              <MessageCircle className="w-5 h-5 mr-2" />
              Jetzt live testen
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
