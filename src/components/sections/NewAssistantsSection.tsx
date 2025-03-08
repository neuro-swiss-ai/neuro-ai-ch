
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import AssistantCard from "@/components/sections/AssistantCard";
import { useRef } from "react";

const NewAssistantsSection = () => {
  const { language } = useLanguage();
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };
  
  const assistants = [
    {
      name: "Néo",
      emoji: "🚀",
      imagePath: "/lovable-uploads/13850001-0d91-4af3-a150-f60bfe624413.png",
      shortDescription: language === "fr" ? "Assistant téléphonique IA" : "AI Phone Assistant",
      description: language === "fr" 
        ? "Automatisez et optimisez votre gestion d'appels avec Néo. Assistant téléphonique IA intelligent qui gère vos appels entrants et sortants pour augmenter la productivité et réduire les coûts."
        : "Automate and optimize your call management with Néo. Smart AI phone assistant that handles your inbound and outbound calls to boost productivity and cut costs.",
      callToAction: language === "fr" ? "Boostez votre efficacité avec Néo !" : "Boost your efficiency with Néo!",
      contactText: language === "fr" ? "Contacter par WhatsApp" : "Contact via WhatsApp"
    },
    {
      name: "Léo",
      emoji: "📊",
      imagePath: "/lovable-uploads/4224b09a-1013-42b2-aecb-7f9406435531.png",
      shortDescription: language === "fr" ? "Stratège basé sur les données" : "Data-driven strategist",
      description: language === "fr"
        ? "Transformez vos données en stratégies de croissance avec Léo. Assistant IA spécialisé dans l'analyse de données pour identifier les opportunités de croissance et optimiser les performances commerciales."
        : "Transform your data into growth strategies with Léo. AI assistant specialized in data analysis to identify growth opportunities and optimize business performance.",
      callToAction: language === "fr" ? "Optimisez votre croissance avec Léo !" : "Optimize your growth with Léo!",
      contactText: language === "fr" ? "Contacter par WhatsApp" : "Contact via WhatsApp"
    },
    {
      name: "Cléo",
      emoji: "🔍",
      imagePath: "/lovable-uploads/1a934215-598b-4a70-8cab-433c23719c1a.png",
      shortDescription: language === "fr" ? "Expert en audits IA" : "AI audit expert",
      description: language === "fr"
        ? "Détectez les risques et optimisez vos processus avec Cléo. Assistant IA spécialisé dans les audits d'intelligence artificielle pour identifier les failles de sécurité et améliorer l'efficacité opérationnelle."
        : "Detect risks and optimize your processes with Cléo. AI assistant specialized in artificial intelligence audits to identify security vulnerabilities and improve operational efficiency.",
      callToAction: language === "fr" ? "Sécurisez votre entreprise avec Cléo !" : "Secure your business with Cléo!",
      contactText: language === "fr" ? "Contacter par WhatsApp" : "Contact via WhatsApp"
    },
    {
      name: "Sylla",
      emoji: "⚙️",
      imagePath: "/lovable-uploads/1a17f98f-e020-42b2-ab7a-368014710077.png",
      shortDescription: language === "fr" ? "Optimiseur de flux de travail" : "Workflow optimizer",
      description: language === "fr"
        ? "Améliorez votre collaboration avec Sylla. Assistant IA qui optimise Microsoft Copilot pour une intégration fluide dans vos équipes et une productivité accrue dans vos projets collaboratifs."
        : "Enhance your collaboration with Sylla. AI assistant that optimizes Microsoft Copilot for seamless integration in your teams and increased productivity in your collaborative projects.",
      callToAction: language === "fr" ? "Collaborez efficacement avec Sylla !" : "Collaborate efficiently with Sylla!",
      contactText: language === "fr" ? "Contacter par WhatsApp" : "Contact via WhatsApp"
    },
    {
      name: "Lex",
      emoji: "⚖️",
      imagePath: "/lovable-uploads/801f3084-d9bc-4c44-92eb-e554215429a6.png",
      shortDescription: language === "fr" ? "Assistant juridique IA" : "AI-powered legal assistant",
      description: language === "fr"
        ? "Simplifiez vos démarches juridiques avec Lex. Assistant IA spécialisé dans le droit qui vous aide à naviguer dans les complexités légales, à rédiger des documents juridiques et à optimiser vos processus légaux."
        : "Simplify your legal processes with Lex. AI assistant specialized in law that helps you navigate legal complexities, draft legal documents, and optimize your legal processes.",
      callToAction: language === "fr" ? "Optimisez vos démarches juridiques avec Lex !" : "Optimize your legal processes with Lex!",
      contactText: language === "fr" ? "Contacter par WhatsApp" : "Contact via WhatsApp"
    }
  ];
  
  return (
    <section id="ai-assistants" className="py-24 bg-gradient-to-b from-background to-[#0a0a10]">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-display font-bold text-gradient mb-6">
            {language === "fr" ? "Nos Assistants IA" : "Our AI Assistants"}
          </h2>
          <p className="text-white/80 text-lg mb-8">
            {language === "fr" 
              ? "Automatisez et optimisez avec nos solutions IA de pointe." 
              : "Automate and optimize with our cutting-edge AI solutions."}
          </p>
        </div>
        
        <div className="relative">
          {/* Slider navigation controls */}
          <button 
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-sm"
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </button>
          
          <button 
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-sm"
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </button>
          
          {/* Assistants slider */}
          <div 
            ref={sliderRef}
            className="flex overflow-x-auto gap-6 pb-6 pt-2 hide-scrollbar snap-x snap-mandatory scroll-smooth"
          >
            {assistants.map((assistant, index) => (
              <div key={index} className="snap-center flex-shrink-0">
                <AssistantCard {...assistant} />
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/assistants">
            <Button variant="outline" className="border-white/20 bg-transparent hover:bg-white/10">
              <span>{language === "fr" ? "Découvrir tous nos assistants IA" : "Discover all our AI assistants"}</span>
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewAssistantsSection;
