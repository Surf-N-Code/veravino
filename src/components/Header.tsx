"use client";

import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import VeraVinoLogo from "@/components/VeraVinoLogo";

const Header = () => {
  const scrollToDemo = () => {
    const demoSection = document.getElementById('demo');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('preise');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('kontakt');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="w-full bg-[rgb(248,244,240)] border-b border-slate-200 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <VeraVinoLogo width={140} height={32} className="h-8 w-auto" />
        </div>
        
        <Button variant="ghost" size="sm" className="md:hidden text-[rgb(30,58,43)] hover:bg-[rgb(30,58,43)] hover:text-white">
          <Menu className="w-5 h-5" />
        </Button>
        
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={scrollToFeatures}
            className="text-[rgb(30,58,43)]/70 hover:text-[rgb(30,58,43)] font-medium transition-colors cursor-pointer"
          >
            Features
          </button>
          <button 
            onClick={scrollToPricing}
            className="text-[rgb(30,58,43)]/70 hover:text-[rgb(30,58,43)] font-medium transition-colors cursor-pointer"
          >
            Preise
          </button>
          <button 
            onClick={scrollToDemo}
            className="text-[rgb(30,58,43)]/70 hover:text-[rgb(30,58,43)] font-medium transition-colors cursor-pointer"
          >
            Demo
          </button>
          <Button 
            onClick={scrollToContact}
            variant="outline" 
            size="sm"
            className="border-[rgb(30,58,43)]/30 text-[rgb(30,58,43)] hover:bg-[rgb(30,58,43)] hover:text-white rounded-full px-6"
          >
            Kontakt
          </Button>
          <Button 
            onClick={scrollToDemo}
            className="bg-[rgb(207,220,255)] hover:bg-[rgb(30,58,43)] text-[rgb(30,58,43)] hover:text-white font-semibold rounded-full px-6"
            size="sm"
          >
            Demo ansehen
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
