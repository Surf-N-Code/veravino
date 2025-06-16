import BenefitsSection from "@/components/BenefitsSection";
import FeaturesSection from "@/components/FeaturesSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import ProcessSection from "@/components/ProcessSection";
import PricingSection from "@/components/PricingSection";
import DemoSection from "@/components/DemoSection";
import ContactFormSection from "@/components/ContactFormSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ProblemSection />
      <BenefitsSection />
      <div id="features">
        <FeaturesSection />
      </div>
      <ProcessSection />
      <div id="demo">
        <DemoSection />
      </div>
      <div id="preise">
        <PricingSection />
      </div>
      <FAQSection />
      <ContactFormSection />
      <CTASection />
      <Footer />
    </div>
  );
}
