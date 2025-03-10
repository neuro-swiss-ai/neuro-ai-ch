
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Target, Layers, Award, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ValueSection = () => {
  const [currentValueIndex, setCurrentValueIndex] = useState(0);
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentValueIndex((prevIndex) => 
        prevIndex === values.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change value every 5 seconds
    
    return () => clearInterval(interval);
  }, [values.length]);

  const handlePrevious = () => {
    setCurrentValueIndex((prevIndex) => 
      prevIndex === 0 ? values.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentValueIndex((prevIndex) => 
      prevIndex === values.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentValue = values[currentValueIndex];

  return (
    <section id="value" className="py-12 bg-gradient-to-b from-background to-[#0a0a10] flex items-center justify-center">
      <div className="container-custom">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-display font-bold text-gradient mb-3">
            {language === "en" ? "Our Added Values" : "Nos Valeurs Ajoutées"}
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-sm">
            {language === "en" 
              ? "Discover how we stand out to provide you with excellent service" 
              : "Découvrez comment nous nous distinguons pour vous offrir un service d'excellence"}
          </p>
        </div>

        <div className="relative">
          <button 
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 md:-translate-x-5 z-10 bg-black/40 hover:bg-black/70 text-white rounded-full p-3 backdrop-blur"
            aria-label="Previous value"
          >
            <ChevronLeft className="h-5 w-5 md:h-7 md:w-7" />
          </button>
          
          <div className="overflow-hidden py-8 flex justify-center">
            <div className="w-full max-w-md mx-auto glass-effect p-6 rounded-2xl animate-fade-in">
              <div className="flex flex-col h-full items-center text-center">
                <div className="mb-5 glass-effect p-3 rounded-full bg-black/20">{currentValue.icon}</div>
                <h3 className="text-xl font-display font-medium text-white mb-3">{currentValue.title}</h3>
                <p className="text-white/70 text-sm md:text-base">{currentValue.description}</p>
              </div>
            </div>
          </div>
          
          <button 
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 md:translate-x-5 z-10 bg-black/40 hover:bg-black/70 text-white rounded-full p-3 backdrop-blur"
            aria-label="Next value"
          >
            <ChevronRight className="h-5 w-5 md:h-7 md:w-7" />
          </button>
        </div>

        <div className="flex justify-center mt-4">
          {values.map((_, idx) => (
            <button
              key={idx}
              className={`h-2 w-2 rounded-full mx-1 ${idx === currentValueIndex ? 'bg-mauve' : 'bg-white/20'}`}
              onClick={() => setCurrentValueIndex(idx)}
              aria-label={`Go to value ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
