
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Target, Layers, Award, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ValueSection = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const { t, language } = useLanguage();
  
  const values = [
    {
      title: language === "en" ? "Tailored Approach" : "Approche sur mesure",
      description: language === "en" 
        ? "We start with a comprehensive diagnosis to create solutions perfectly adapted to your specific needs."
        : "Nous commençons par un diagnostic approfondi pour créer des solutions parfaitement adaptées à vos besoins spécifiques.",
      icon: <Target className="h-12 w-12 text-mauve" />
    },
    {
      title: language === "en" ? "Seamless Integration" : "Intégration transparente",
      description: language === "en"
        ? "Our solutions integrate seamlessly with your existing systems, minimizing disruption and maximizing adoption."
        : "Nos solutions s'intègrent parfaitement à vos systèmes existants, minimisant les perturbations et maximisant l'adoption.",
      icon: <Layers className="h-12 w-12 text-mauve" />
    },
    {
      title: language === "en" ? "Extensive Expertise" : "Expertise étendue",
      description: language === "en"
        ? "Our specialized team combines advanced skills in AI and automation to solve your most complex challenges."
        : "Notre équipe spécialisée combine des compétences avancées en IA et en automatisation pour résoudre vos défis les plus complexes.",
      icon: <Award className="h-12 w-12 text-mauve" />
    },
    {
      title: language === "en" ? "24/7 Support" : "Support 24/7",
      description: language === "en"
        ? "We provide continuous support with assistance available at any time to ensure the success of your digital transformation."
        : "Nous vous accompagnons en continu avec une assistance disponible à tout moment pour garantir le succès de votre transformation digitale.",
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
            left: 310, // Card width + gap
            behavior: 'smooth'
          });
        }
      }, 5000); // Scroll every 5 seconds
      
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
    <section id="value" className="py-12 bg-gradient-to-b from-background to-[#0a0a10]">
      <div className="container-custom">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-display font-bold text-gradient mb-3">
            {language === "en" ? "Our Added Value" : "Notre Valeur Ajoutée"}
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-sm">
            {language === "en" 
              ? "Discover how we stand out to provide you with excellent service" 
              : "Découvrez comment nous nous distinguons pour vous offrir un service d'excellence"}
          </p>
        </div>

        <div className="relative">
          {canScrollLeft && (
            <button 
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-10 bg-black/40 hover:bg-black/70 text-white rounded-full p-3 backdrop-blur"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-7 w-7" />
            </button>
          )}
          
          <div 
            ref={sliderRef}
            className="flex overflow-x-auto gap-6 pb-6 hide-scrollbar snap-x snap-mandatory"
          >
            {values.map((value, index) => (
              <div 
                key={index} 
                className="flex-none w-[280px] glass-effect p-5 rounded-2xl snap-start transition-all duration-300"
              >
                <div className="flex flex-col h-full items-center text-center">
                  <div className="mb-3 glass-effect p-3 rounded-full bg-black/20">{value.icon}</div>
                  <h3 className="text-lg font-display font-medium text-white mb-2">{value.title}</h3>
                  <p className="text-white/70 text-sm">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {canScrollRight && (
            <button 
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-10 bg-black/40 hover:bg-black/70 text-white rounded-full p-3 backdrop-blur"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-7 w-7" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
