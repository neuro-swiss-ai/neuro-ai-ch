
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, PlusCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AssistantCard from "@/components/sections/AssistantCard";

const AssistantsSection = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const { t, language } = useLanguage();
  
  // Same assistants data as in the Assistants page
  const assistantsList = [
    {
      id: "neo",
      name: "Néo",
      emoji: "🤖",
      imagePath: "/lovable-uploads/ccf47a6f-a543-4dc8-bdb2-9b9b7cd18cef.png",
      shortDescription: "L'expert en automatisation !",
      description: "Il optimise vos processus en automatisant les tâches répétitives et en intégrant l'IA dans votre entreprise.",
      callToAction: "Avec Néo, gagnez en efficacité et boostez votre productivité !",
      contactText: "Prêt à automatiser votre business ? Contactez-nous !"
    },
    {
      id: "leo",
      name: "Léo",
      emoji: "🔍",
      imagePath: "/lovable-uploads/6b835675-311c-4bce-b442-b9765a6494f3.png",
      shortDescription: "Votre stratège visionnaire !",
      description: "Il transforme les données en opportunités de croissance et crée des feuilles de route personnalisées pour votre succès.",
      callToAction: "Avec Léo, transformez vos idées en actions et boostez votre croissance !",
      contactText: "Prêt à passer à l'action ? Contactez-nous !"
    },
    {
      id: "cleo",
      name: "Cléo",
      emoji: "🛠️",
      imagePath: "/lovable-uploads/fc9ca202-ddd7-4f99-9339-8ea3e314032e.png",
      shortDescription: "L'experte en audit IA !",
      description: "Elle détecte les failles invisibles, identifie les risques cachés et optimise vos processus.",
      callToAction: "Avec Cléo, prenez des décisions basées sur des analyses fiables et précises !",
      contactText: "Envie d'un audit IA ? Contactez-nous !"
    },
    {
      id: "sylla",
      name: "Sylla",
      emoji: "🔧",
      imagePath: "/lovable-uploads/fc11013c-f6ce-4a3f-94ab-422273efb778.png",
      shortDescription: "L'optimisateur de workflow !",
      description: "Il personnalise Microsoft Copilot pour vos besoins et améliore la collaboration interne.",
      callToAction: "Avec Sylla, optimisez votre productivité et collaborez en toute fluidité !",
      contactText: "Prêt à optimiser vos processus avec Copilot ? Parlons-en !"
    },
    {
      id: "lex",
      name: "Lex",
      emoji: "⚖️",
      imagePath: "/lovable-uploads/b09618c8-3e22-41d7-bf18-94f22ac47bea.png",
      shortDescription: "L'assistant juridique IA !",
      description: "Il analyse les contrats, détecte les risques et automatise la gestion documentaire légale.",
      callToAction: "Avec Lex, gagnez du temps et sécurisez vos processus juridiques !",
      contactText: "Besoin d'un coup de pouce pour analyser un contrat ? Contactez-nous !"
    }
  ];

  const checkScroll = () => {
    if (!sliderRef.current) return;
    
    setCanScrollLeft(sliderRef.current.scrollLeft > 0);
    setCanScrollRight(
      sliderRef.current.scrollLeft <
      sliderRef.current.scrollWidth - sliderRef.current.clientWidth - 5
    );
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener("scroll", checkScroll);
      checkScroll(); // Initial check
      return () => slider.removeEventListener("scroll", checkScroll);
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;
    
    const scrollAmount = sliderRef.current.clientWidth * 0.8;
    sliderRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section id="assistants" className="py-20 bg-gradient-to-b from-[#0a0a10] to-background">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-12">
          <div className="text-left">
            <h2 className="text-4xl font-display font-bold text-gradient mb-4">
              {language === "fr" ? "Nos Assistants IA" : "Our AI Assistants"}
            </h2>
            <p className="text-white/70 max-w-2xl">
              {language === "fr" 
                ? "Découvrez nos assistants intelligents conçus pour résoudre vos défis d'entreprise" 
                : "Discover our intelligent assistants designed to solve your business challenges"}
            </p>
          </div>
          <Link to="/assistants" className="flex items-center">
            <Button variant="outline" size="sm" className="border-white/20 bg-transparent hover:bg-white/10">
              <PlusCircle className="mr-2 h-4 w-4 text-primary" />
              <span>{language === "fr" ? "Nouveau" : "New"}</span>
            </Button>
          </Link>
        </div>

        <div className="relative">
          {canScrollLeft && (
            <button 
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-10 bg-black/40 hover:bg-black/70 text-white rounded-full p-2 backdrop-blur"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          )}
          
          <div 
            ref={sliderRef}
            className="flex overflow-x-auto gap-6 pb-8 hide-scrollbar snap-x snap-mandatory"
          >
            {assistantsList.map((assistant) => (
              <div key={assistant.id} className="flex-none">
                <AssistantCard {...assistant} />
              </div>
            ))}
          </div>
          
          {canScrollRight && (
            <button 
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-10 bg-black/40 hover:bg-black/70 text-white rounded-full p-2 backdrop-blur"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          )}
        </div>
        
        <div className="mt-8 text-center">
          <Link to="/assistants">
            <Button variant="outline" className="border-white/20 bg-transparent hover:bg-white/10">
              <span>{language === "fr" ? "Voir tous nos assistants" : "View all our assistants"}</span>
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AssistantsSection;
