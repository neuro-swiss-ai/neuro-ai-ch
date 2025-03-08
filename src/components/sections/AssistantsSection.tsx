
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, PlusCircle, CalendarCheck2, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AssistantCard from "@/components/sections/AssistantCard";

const AssistantsSection = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const { language } = useLanguage();
  
  // Updated assistants data with new content and images
  const assistantsList = [
    {
      id: "neo",
      name: "Néo",
      emoji: "🚀",
      imagePath: "/lovable-uploads/13850001-0d91-4af3-a150-f60bfe624413.png",
      shortDescription: "Votre assistant IA téléphonique",
      description: "Libérez-vous du téléphone avec Néo, votre assistant IA conçu pour automatiser, optimiser et simplifier la gestion de vos appels.\n\n✅ Filtrage intelligent des appels entrants\n✅ Automatisation des appels sortants\n✅ Disponibilité 24/7\n✅ Optimisation des coûts",
      callToAction: "📞 Optimisez votre gestion téléphonique et boostez votre productivité avec Néo !",
      contactText: "🔹 Essayez gratuitement | 🔹 Réservez une démo"
    },
    {
      id: "lex",
      name: "Lex",
      emoji: "⚖️",
      imagePath: "/lovable-uploads/874fc5b0-76d1-4c47-b548-a9b77cb54485.png",
      shortDescription: "Assistante Juridique IA",
      description: "Elle analyse les contrats, détecte les risques et automatise la gestion documentaire légale. Une expertise juridique IA à votre service.",
      callToAction: "Avec Lex, gagnez du temps et sécurisez vos processus juridiques !",
      contactText: "Besoin d'une analyse juridique ? Contactez-nous !"
    },
    {
      id: "sylla",
      name: "Sylla",
      emoji: "🔧",
      imagePath: "/lovable-uploads/fc11013c-f6ce-4a3f-94ab-422273efb778.png",
      shortDescription: "L'optimisateur de workflow",
      description: "Il personnalise Microsoft Copilot pour vos besoins spécifiques et améliore la collaboration interne de votre équipe.",
      callToAction: "Avec Sylla, optimisez votre productivité et collaborez en toute fluidité !",
      contactText: "Prêt à optimiser avec Copilot ? Parlons-en !"
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
