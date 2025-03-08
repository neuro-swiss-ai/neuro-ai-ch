
import HeroSection from "@/components/sections/HeroSection";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TeamSection from "@/components/sections/TeamSection";
import ApproachSection from "@/components/sections/ApproachSection";
import PressSection from "@/components/sections/PressSection";
import ClientsSection from "@/components/sections/ClientsSection";
import ExpertiseSection from "@/components/sections/ExpertiseSection";
import PartnersSection from "@/components/sections/PartnersSection";
import ValueSection from "@/components/sections/ValueSection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import AssistantsSection from "@/components/sections/AssistantsSection";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, ArrowRight, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ServicesSection = () => {
  const { t, language } = useLanguage();
  
  const services = [
    {
      id: "audit-conseil",
      title: t("audit_consulting"),
      description: t("audit_description"),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-mauve" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      link: "/audits"
    },
    {
      id: "formations",
      title: t("training"),
      description: t("training_description"),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-mauve" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
      ),
      link: "/formations"
    },
    {
      id: "solutions-ia",
      title: t("ai_solutions"),
      description: t("solutions_description"),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-mauve" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      link: "/solutions"
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background to-[#0a0a10]">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-display font-bold text-gradient mb-6">{t("our_services")}</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            {t("services_subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id}
              id={service.id}
              className="glass-effect rounded-2xl p-8 transition-all duration-300 card-hover"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-display font-medium text-white mb-3">{service.title}</h3>
              <p className="text-white/70 mb-6">{service.description}</p>
              <Link to={service.link} className="inline-flex items-center text-mauve hover:text-mauve-light transition-colors group">
                <span className="underline-animation">{t("learn_more")}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CtaSection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-24 bg-[#0a0a10] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-mauve blur-[150px]"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 rounded-full bg-mauve-dark blur-[150px]"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-display font-bold text-gradient mb-6">
            {t("ready_transform")}
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            {t("contact_discover")}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://calendly.com/neuroai-ch/neuro-ai-interview">
              <Button variant="default" size="lg">
                {t("book_appointment")}
              </Button>
            </a>
            <a href="https://wa.me/message/OFHBXHWDIADHA1" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="border-white/20 bg-transparent hover:bg-white/10">
                <MessageCircle className="mr-2 h-5 w-5 text-green-500" />
                {t("contact_whatsapp")}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const FinalCtaSection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-24 bg-gradient-to-b from-[#0a0a10] to-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-mauve blur-[150px]"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 rounded-full bg-mauve-dark blur-[150px]"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-display font-bold text-gradient mb-4">
            {t("transform_business")}
          </h2>
          <h3 className="text-2xl font-display text-white/90 mb-6">
            {t("ready_transform")}
          </h3>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            {t("contact_discover")}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://calendly.com/neuroai-ch/neuro-ai-interview">
              <Button variant="default" size="lg">
                {t("book_appointment")}
              </Button>
            </a>
            <a href="https://wa.me/message/OFHBXHWDIADHA1" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="border-white/20 bg-transparent hover:bg-white/10">
                <MessageCircle className="mr-2 h-5 w-5 text-green-500" />
                {t("contact_whatsapp")}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

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
        <AssistantsSection />
        <TeamSection />
        <PartnersSection />
        <ValueSection />
        <CaseStudiesSection />
        <PressSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
