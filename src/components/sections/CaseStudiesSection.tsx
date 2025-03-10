
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const CaseStudiesSection = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const { t, language } = useLanguage();
  
  const caseStudies = [
    {
      title: language === "fr" ? "Assistant IA pour l'analyse financière" : "AI Assistant for Financial Analysis",
      description: language === "fr" 
        ? "Développement d'un assistant IA pour une banque genevoise permettant d'analyser les tendances du marché et de générer des rapports personnalisés pour les clients."
        : "Development of an AI assistant for a Geneva-based bank to analyze market trends and generate personalized reports for clients.",
      image: "/lovable-uploads/20ba7e54-a130-4bea-b949-2b5f678d889c.png",
      link: "/blog"
    },
    {
      title: language === "fr" ? "Optimisation des portefeuilles d'investissement" : "Investment Portfolio Optimization",
      description: language === "fr"
        ? "Utilisation d'algorithmes d'intelligence artificielle pour analyser les tendances du marché et recommander des ajustements de portefeuilles, améliorant ainsi le rendement des investissements."
        : "Use of artificial intelligence algorithms to analyze market trends and recommend portfolio adjustments, improving investment returns.",
      image: "/lovable-uploads/d7cd6f4a-523b-42b9-9d7f-703bb1475df2.png",
      link: "/blog"
    },
    {
      title: language === "fr" ? "Formation IA pour cadres dirigeants" : "AI Training for Executive Leaders",
      description: language === "fr"
        ? "Organisation de séminaires et workshops pour plus de 500 cadres dirigeants suisses sur l'intégration de l'IA dans leur stratégie d'entreprise."
        : "Organization of seminars and workshops for over 500 Swiss executives on integrating AI into their business strategy.",
      image: "/lovable-uploads/074b84be-ee3a-4000-8d3f-bcd2abd57825.png",
      link: "/blog"
    },
    {
      title: language === "fr" ? "Découverte de nouveaux médicaments" : "New Drug Discovery",
      description: language === "fr"
        ? "Application de l'IA pour analyser des bases de données massives de composés chimiques, accélérant ainsi l'identification de candidats-médicaments prometteurs."
        : "Application of AI to analyze massive databases of chemical compounds, accelerating the identification of promising drug candidates.",
      image: "/lovable-uploads/90f2a5fc-3e3e-4649-ad29-7a33ffc8367b.png",
      link: "/blog"
    },
    {
      title: language === "fr" ? "Système de prédiction pour la chaîne logistique" : "Predictive System for Supply Chain",
      description: language === "fr"
        ? "Implémentation d'un système prédictif basé sur l'IA pour optimiser la chaîne logistique d'un leader suisse de l'industrie horlogère."
        : "Implementation of an AI-based predictive system to optimize the supply chain of a Swiss watchmaking industry leader.",
      image: "/lovable-uploads/f507563e-aeda-41c6-95d8-b1e27e9343a2.png",
      link: "/blog"
    },
    {
      title: language === "fr" ? "Maintenance prédictive dans l'industrie manufacturière" : "Predictive Maintenance in Manufacturing",
      description: language === "fr"
        ? "Implémentation de modèles d'IA pour prédire les défaillances d'équipement, réduisant les temps d'arrêt et les coûts de maintenance."
        : "Implementation of AI models to predict equipment failures, reducing downtime and maintenance costs.",
      image: "/lovable-uploads/b3e91583-a4ff-4d39-985e-eb70aaa9be0e.png",
      link: "/blog"
    },
    {
      title: language === "fr" ? "Analyse prédictive des tendances de consommation" : "Predictive Analysis of Consumer Trends",
      description: language === "fr"
        ? "Exploitation de l'IA pour anticiper les comportements d'achat, optimisant ainsi les stratégies de stock et de marketing."
        : "Leveraging AI to anticipate purchasing behaviors, optimizing inventory and marketing strategies.",
      image: "/lovable-uploads/86a7fb1c-afb1-4ca9-9a90-1c64ccb5d430.png",
      link: "/blog"
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
      
      // Auto-scroll functionality
      const autoScrollInterval = setInterval(() => {
        if (!slider) return;
        if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth - 5) {
          // Reset to beginning when reached the end
          slider.scrollTo({
            left: 0,
            behavior: 'smooth'
          });
        } else {
          // Scroll to next item
          slider.scrollBy({
            left: 350, // Card width
            behavior: 'smooth'
          });
        }
      }, 8000); // Scroll every 8 seconds
      
      return () => {
        slider.removeEventListener("scroll", checkScroll);
        clearInterval(autoScrollInterval);
      };
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
    <section id="case-studies" className="py-20 bg-gradient-to-b from-[#0a0a10] to-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold text-gradient mb-6">
            {language === "fr" ? "Nos Projets réalisés pour nos clients" : "Our Projects Completed for Our Clients"}
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            {language === "fr" 
              ? "Découvrez comment nous avons transformé des entreprises suisses grâce à l'intelligence artificielle"
              : "Discover how we've transformed Swiss businesses through artificial intelligence"}
          </p>
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
            {caseStudies.map((study, index) => (
              <div 
                key={index} 
                className="flex-none w-[350px] glass-effect rounded-2xl overflow-hidden snap-start"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-medium text-white mb-3">{study.title}</h3>
                  <p className="text-white/70 mb-6 line-clamp-3 h-[4.5rem]">{study.description}</p>
                  <Button asChild variant="outline" className="border-mauve text-mauve hover:text-white hover:bg-mauve/20">
                    <a href={study.link}>
                      {language === "fr" ? "Lire l'étude de cas" : "Read case study"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
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
      </div>
    </section>
  );
};

export default CaseStudiesSection;
