
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ApproachSection from "@/components/sections/ApproachSection";
import ClientsSection from "@/components/sections/ClientsSection";
import ExpertiseSection from "@/components/sections/ExpertiseSection";
import TeamSection from "@/components/sections/TeamSection";
import PartnersSection from "@/components/sections/PartnersSection";
import ValueSection from "@/components/sections/ValueSection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import PressSection from "@/components/sections/PressSection";
import CtaSection from "@/components/sections/CtaSection";
import FinalCtaSection from "@/components/sections/FinalCtaSection";
import AssistantsPreview from "@/components/sections/AssistantsPreview";

const Index = () => {
  const { language } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Custom section wrapper with border
  const SectionWithBorder = ({ children, id }: { children: React.ReactNode, id?: string }) => (
    <div id={id} className="mx-4 md:mx-8 my-6 border border-white/20 rounded-xl overflow-hidden">
      {children}
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <AssistantsPreview />
        <div id="services" className="mx-4 md:mx-8 my-6">
          <ServicesSection />
        </div>
        <SectionWithBorder>
          <ApproachSection />
        </SectionWithBorder>
        <SectionWithBorder>
          <TeamSection />
        </SectionWithBorder>
        <PartnersSection />
        <CaseStudiesSection />
        <PressSection />
        <CtaSection />
        
        {/* Three sections side by side */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-4 md:mx-8 my-6">
          <SectionWithBorder>
            <div className="h-[600px] overflow-y-auto">
              <ValueSection />
            </div>
          </SectionWithBorder>
          <SectionWithBorder>
            <div className="h-[600px] overflow-y-auto">
              <ClientsSection />
            </div>
          </SectionWithBorder>
          <SectionWithBorder>
            <div className="h-[600px] overflow-y-auto">
              <ExpertiseSection />
            </div>
          </SectionWithBorder>
        </div>
        
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
