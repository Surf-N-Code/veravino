
import { MessageCircle } from "lucide-react";
import { SmoothScrollButton } from "@/components/ui/smooth-scroll-button";

const CTASection = () => {
  return (
    <section className="py-20 px-6 bg-[rgb(30,58,43)]">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Bereit, Weinverkauf neu zu denken?
        </h2>
        
        <SmoothScrollButton 
          targetId="kontakt"
          className="bg-[rgb(207,220,255)] text-[rgb(30,58,43)] hover:bg-white hover:text-[rgb(30,58,43)] px-10 py-6 text-xl font-bold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
        >
          <MessageCircle className="w-6 h-6 mr-3" />
          Kontaktieren Sie uns
        </SmoothScrollButton>
        
        <div className="mt-8 text-white/90">
          <p className="text-lg font-medium">
            +17 % Conversion-Rate nach 60 Tagen
          </p>
          <p className="text-sm opacity-80">
            Interne Auswertung 2025
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
