
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
          <ClientsSection />
        </SectionWithBorder>
        <SectionWithBorder>
          <ExpertiseSection />
        </SectionWithBorder>
        <SectionWithBorder>
          <TeamSection />
        </SectionWithBorder>
        <PartnersSection />
        <ValueSection />
        <CaseStudiesSection />
        <PressSection />
        <CtaSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
