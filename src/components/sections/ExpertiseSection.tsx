
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Brain, MessageCircle, Globe, Database, Search, Cpu } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ExpertiseSection = () => {
  const [currentExpertiseIndex, setCurrentExpertiseIndex] = useState(0);
  const { t, language } = useLanguage();
  
  const expertiseAreas = [
    {
      title: language === "en" ? "Natural Language Processing" : "Natural Language Processing",
      description: language === "en" 
        ? "Our NLP solutions enable analyzing, understanding, and generating natural language text, offering advanced linguistic processing capabilities." 
        : "Nos solutions NLP permettent d'analyser, comprendre et générer du texte en langage naturel, offrant des capacités avancées de traitement linguistique.",
      icon: <Globe className="h-12 w-12 text-mauve" />,
      technologies: ["OpenAI GPT", "HuggingFace", "BERT", "Transformer"]
    },
    {
      title: language === "en" ? "Computer Vision" : "Computer Vision",
      description: language === "en" 
        ? "Our computer vision technologies enable analyzing and interpreting images and videos for various industrial and commercial applications." 
        : "Nos technologies de vision par ordinateur permettent d'analyser et d'interpréter des images et vidéos pour diverses applications industrielles et commerciales.",
      icon: <Search className="h-12 w-12 text-mauve" />,
      technologies: ["TensorFlow", "PyTorch", "YOLO", "OpenCV"]
    },
    {
      title: language === "en" ? "Large Language Models" : "Large Language Models",
      description: language === "en" 
        ? "We implement state-of-the-art language models to generate content, answer questions, and automate complex cognitive tasks." 
        : "Nous implémentons des modèles de langage de pointe pour générer du contenu, répondre à des questions, et automatiser des tâches cognitives complexes.",
      icon: <Brain className="h-12 w-12 text-mauve" />,
      technologies: ["OpenAI", "Anthropic Claude", "LLaMA", "Mixtral"]
    },
    {
      title: language === "en" ? "Intelligent Chatbots" : "Chatbots intelligents",
      description: language === "en" 
        ? "Our AI chatbots offer natural and relevant interactions, improving customer engagement and service automation." 
        : "Nos chatbots avec IA offrent des interactions naturelles et pertinentes, améliorant l'engagement client et l'automatisation du service.",
      icon: <MessageCircle className="h-12 w-12 text-mauve" />,
      technologies: ["LangChain", "Rasa", "Azure Bot Service", "Dialogflow"]
    },
    {
      title: language === "en" ? "Data Science" : "Data Science",
      description: language === "en" 
        ? "Our data science solutions transform your data into actionable insights, revealing hidden trends and facilitating decision-making." 
        : "Nos solutions de data science transforment vos données en insights actionnables, révélant des tendances cachées et facilitant la prise de décision.",
      icon: <Database className="h-12 w-12 text-mauve" />,
      technologies: ["Python", "R", "Pandas", "Scikit-learn"]
    },
    {
      title: language === "en" ? "AI Infrastructure" : "AI Infrastructure",
      description: language === "en" 
        ? "We design and deploy robust and scalable infrastructures to support your most demanding AI applications." 
        : "Nous concevons et déployons des infrastructures robustes et évolutives pour supporter vos applications d'IA les plus exigeantes.",
      icon: <Cpu className="h-12 w-12 text-mauve" />,
      technologies: ["MLOps", "Kubernetes", "Docker", "AWS", "Azure ML"]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentExpertiseIndex((prevIndex) => 
        prevIndex === expertiseAreas.length - 1 ? 0 : prevIndex + 1
      );
    }, 5500); // Change expertise every 5.5 seconds
    
    return () => clearInterval(interval);
  }, [expertiseAreas.length]);

  const handlePrevious = () => {
    setCurrentExpertiseIndex((prevIndex) => 
      prevIndex === 0 ? expertiseAreas.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentExpertiseIndex((prevIndex) => 
      prevIndex === expertiseAreas.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentExpertise = expertiseAreas[currentExpertiseIndex];

  return (
    <section id="expertise" className="py-12 bg-gradient-to-b from-[#0a0a10] to-background">
      <div className="container-custom">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-display font-bold text-gradient mb-3">{t("our_expertise")}</h2>
          <p className="text-white/70 max-w-2xl mx-auto text-sm">
            {t("expertise_subtitle")}
          </p>
        </div>

        <div className="relative">
          <button 
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 md:-translate-x-5 z-10 bg-black/40 hover:bg-black/70 text-white rounded-full p-3 backdrop-blur"
            aria-label="Previous expertise"
          >
            <ChevronLeft className="h-5 w-5 md:h-7 md:w-7" />
          </button>
          
          <div className="overflow-hidden py-8">
            <div className="w-full max-w-md mx-auto glass-effect p-6 rounded-2xl animate-fade-in">
              <div className="flex flex-col h-full items-center text-center">
                <div className="mb-5 flex justify-center">{currentExpertise.icon}</div>
                <h3 className="text-xl font-display font-medium text-white text-center mb-3">{currentExpertise.title}</h3>
                <p className="text-white/70 mb-6 text-center text-sm md:text-base">{currentExpertise.description}</p>
                <div className="border-t border-white/10 pt-4 w-full">
                  <p className="text-mauve text-xs mb-3 font-medium">{t("technologies")}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {currentExpertise.technologies.map((tech, techIndex) => (
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
          </div>
          
          <button 
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 md:translate-x-5 z-10 bg-black/40 hover:bg-black/70 text-white rounded-full p-3 backdrop-blur"
            aria-label="Next expertise"
          >
            <ChevronRight className="h-5 w-5 md:h-7 md:w-7" />
          </button>
        </div>

        <div className="flex justify-center mt-4">
          {expertiseAreas.map((_, idx) => (
            <button
              key={idx}
              className={`h-2 w-2 rounded-full mx-1 ${idx === currentExpertiseIndex ? 'bg-mauve' : 'bg-white/20'}`}
              onClick={() => setCurrentExpertiseIndex(idx)}
              aria-label={`Go to expertise ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
