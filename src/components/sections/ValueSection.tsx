
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Target, Layers, Award, Clock } from "lucide-react";

const ValueSection = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  
  const values = [
    {
      title: "Approche sur mesure",
      description: "Nous commençons par un diagnostic approfondi pour créer des solutions parfaitement adaptées à vos besoins spécifiques.",
      icon: <Target className="h-12 w-12 text-mauve" />
    },
    {
      title: "Intégration transparente",
      description: "Nos solutions s'intègrent parfaitement à vos systèmes existants, minimisant les perturbations et maximisant l'adoption.",
      icon: <Layers className="h-12 w-12 text-mauve" />
    },
    {
      title: "Expertise étendue",
      description: "Notre équipe spécialisée combine des compétences avancées en IA et en automatisation pour résoudre vos défis les plus complexes.",
      icon: <Award className="h-12 w-12 text-mauve" />
    },
    {
      title: "Support 24/7",
      description: "Nous vous accompagnons en continu avec une assistance disponible à tout moment pour garantir le succès de votre transformation digitale.",
      icon: <Clock className="h-12 w-12 text-mauve" />
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
    <section id="value" className="py-20 bg-gradient-to-b from-background to-[#0a0a10]">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold text-gradient mb-6">Notre Valeur Ajoutée</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Découvrez comment nous nous distinguons pour vous offrir un service d'excellence
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
            {values.map((value, index) => (
              <div 
                key={index} 
                className="flex-none w-[300px] glass-effect p-6 rounded-2xl snap-start transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex flex-col h-full items-center text-center">
                  <div className="mb-4 glass-effect p-4 rounded-full bg-black/20">{value.icon}</div>
                  <h3 className="text-xl font-display font-medium text-white mb-3">{value.title}</h3>
                  <p className="text-white/70">{value.description}</p>
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

export default ValueSection;
