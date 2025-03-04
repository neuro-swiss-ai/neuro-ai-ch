
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Brain, MessageCircle, Globe, Database, Search, Cpu } from "lucide-react";

const ExpertiseSection = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  
  const expertiseAreas = [
    {
      title: "Natural Language Processing",
      description: "Nos solutions NLP permettent d'analyser, comprendre et générer du texte en langage naturel, offrant des capacités avancées de traitement linguistique.",
      icon: <Globe className="h-12 w-12 text-mauve" />,
      technologies: ["OpenAI GPT", "HuggingFace", "BERT", "Transformer"]
    },
    {
      title: "Computer Vision",
      description: "Nos technologies de vision par ordinateur permettent d'analyser et d'interpréter des images et vidéos pour diverses applications industrielles et commerciales.",
      icon: <Search className="h-12 w-12 text-mauve" />,
      technologies: ["TensorFlow", "PyTorch", "YOLO", "OpenCV"]
    },
    {
      title: "Large Language Models",
      description: "Nous implémentons des modèles de langage de pointe pour générer du contenu, répondre à des questions, et automatiser des tâches cognitives complexes.",
      icon: <Brain className="h-12 w-12 text-mauve" />,
      technologies: ["OpenAI", "Anthropic Claude", "LLaMA", "Mixtral"]
    },
    {
      title: "Chatbots intelligents",
      description: "Nos chatbots avec IA offrent des interactions naturelles et pertinentes, améliorant l'engagement client et l'automatisation du service.",
      icon: <MessageCircle className="h-12 w-12 text-mauve" />,
      technologies: ["LangChain", "Rasa", "Azure Bot Service", "Dialogflow"]
    },
    {
      title: "Data Science",
      description: "Nos solutions de data science transforment vos données en insights actionnables, révélant des tendances cachées et facilitant la prise de décision.",
      icon: <Database className="h-12 w-12 text-mauve" />,
      technologies: ["Python", "R", "Pandas", "Scikit-learn"]
    },
    {
      title: "AI Infrastructure",
      description: "Nous concevons et déployons des infrastructures robustes et évolutives pour supporter vos applications d'IA les plus exigeantes.",
      icon: <Cpu className="h-12 w-12 text-mauve" />,
      technologies: ["MLOps", "Kubernetes", "Docker", "AWS", "Azure ML"]
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
    <section id="expertise" className="py-20 bg-gradient-to-b from-[#0a0a10] to-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold text-gradient mb-6">Notre Expertise</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Des solutions IA de pointe pour répondre aux défis les plus complexes
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
            {expertiseAreas.map((area, index) => (
              <div 
                key={index} 
                className="flex-none w-[300px] glass-effect p-6 rounded-2xl snap-start transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex flex-col h-full">
                  <div className="mb-4 flex justify-center">{area.icon}</div>
                  <h3 className="text-xl font-display font-medium text-white text-center mb-3">{area.title}</h3>
                  <p className="text-white/70 mb-6 text-center flex-grow">{area.description}</p>
                  <div className="border-t border-white/10 pt-4">
                    <p className="text-mauve text-sm mb-2 font-medium">Technologies:</p>
                    <div className="flex flex-wrap gap-2">
                      {area.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="text-xs bg-white/5 text-white/80 px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
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

export default ExpertiseSection;
