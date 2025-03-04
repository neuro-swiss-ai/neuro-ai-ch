
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CaseStudiesSection = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  
  const caseStudies = [
    {
      title: "Optimisation des processus RH avec l'IA",
      description: "Nous avons aidé une entreprise de 500+ employés à automatiser son processus de recrutement avec l'IA, réduisant le temps d'embauche de 70%.",
      image: "https://images.unsplash.com/photo-1529119513315-c7c361255d2c?q=80&w=400&auto=format&fit=crop",
      link: "/blog"
    },
    {
      title: "Analyse prédictive pour la supply chain",
      description: "Implémentation d'un système de prévision de la demande basé sur l'IA qui a permis à un distributeur de réduire ses stocks de 25% tout en améliorant la disponibilité des produits.",
      image: "https://images.unsplash.com/photo-1566543411417-e056e3f7b1a6?q=80&w=400&auto=format&fit=crop",
      link: "/blog"
    },
    {
      title: "Chatbot d'assistance client intelligent",
      description: "Développement d'un chatbot alimenté par l'IA qui a permis à une entreprise de services financiers de traiter 85% des demandes client sans intervention humaine.",
      image: "https://images.unsplash.com/photo-1559650656-5d1d361ad10e?q=80&w=400&auto=format&fit=crop",
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
    <section id="case-studies" className="py-20 bg-gradient-to-b from-[#0a0a10] to-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold text-gradient mb-6">Nos Réalisations</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Découvrez comment nos solutions d'IA ont transformé les entreprises
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
                  <p className="text-white/70 mb-6">{study.description}</p>
                  <Button asChild variant="outline" className="border-mauve text-mauve hover:text-white hover:bg-mauve/20">
                    <a href={study.link}>
                      Lire l'étude de cas
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
