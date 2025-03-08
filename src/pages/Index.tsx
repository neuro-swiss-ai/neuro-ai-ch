
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
import NewAssistantsSection from "@/components/sections/NewAssistantsSection";

const Index = () => {
  const { language } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <ApproachSection />
        <ClientsSection />
        <ExpertiseSection />
        <TeamSection />
        <PartnersSection />
        <ValueSection />
        <CaseStudiesSection />
        <PressSection />
        <CtaSection />
        <NewAssistantsSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
