"use client";

import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToDemo = () => {
    const demoSection = document.getElementById('demo');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('preise');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-24 px-6 text-center bg-[rgb(248,244,240)]">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[rgb(207,220,255)]/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[rgb(30,58,43)]/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <h1 className="text-8xl md:text-4xl lg:text-8xl font-bold text-[rgb(30,58,43)] mb-8 leading-tight">
          Verkaufe Wein.{" "}
          <span className="relative inline-block">
            24/7.
          </span>
        </h1>
        
        <p className="text-xl md:text-xl text-[rgb(30,58,43)]/80 max-3w-xl mx-auto leading-relaxed font-medium mb-12">
          <strong className="text-[rgb(30,58,43)]">Vera Vino</strong>, der KI-gestützte Chatbot, verwandelt Website-Besucher in glückliche Käufer – und entlastet Ihr Team.
        </p>
        
        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={scrollToPricing}
            className="bg-[rgb(30,58,43)] hover:bg-[rgb(30,58,43)]/90 text-white px-8 py-4 text-lg rounded-full font-semibold transition-all shadow-lg hover:shadow-xl"
          >
            Preise ansehen
          </Button>
          <Button 
            onClick={scrollToDemo}
            variant="outline"
            className="border-[rgb(30,58,43)] text-[rgb(30,58,43)] hover:bg-[rgb(30,58,43)] hover:text-white px-8 py-4 text-lg rounded-full font-semibold transition-all shadow-lg hover:shadow-xl"
          >
            Demo ansehen
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
