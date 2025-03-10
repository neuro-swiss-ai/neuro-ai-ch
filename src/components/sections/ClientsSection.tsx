
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const ClientsSection = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const {
    t
  } = useLanguage();

  const testimonials = [{
    text: "Depuis que nous avons intégré les solutions IA de Neuro AI, notre productivité a augmenté de 40%. Un partenaire incontournable pour toute entreprise visant l'excellence.",
    author: "Jean Dupont",
    position: "Directeur Marketing"
  }, {
    text: "L'accompagnement de l'équipe Neuro AI nous a permis de transformer notre approche client. Leurs solutions d'IA sont non seulement innovantes mais parfaitement adaptées à nos besoins spécifiques.",
    author: "Marie Laurent",
    position: "Responsable des Ressources Humaines"
  }, {
    text: "Nous avons été impressionnés par la rapidité et l'efficacité avec laquelle Neuro AI a identifié et résolu nos défis. Leur expertise en matière d'IA est inégalée sur le marché.",
    author: "Philippe Moreau",
    position: "Chef de Projet IT"
  }, {
    text: "L'intégration des technologies d'IA de Neuro AI a radicalement transformé notre processus décisionnel. Nous sommes désormais capables d'analyser des données complexes en temps réel.",
    author: "Sophie Berger",
    position: "Consultante en Stratégie"
  }, {
    text: "Grâce à Neuro AI, nous avons pu automatiser 60% de nos tâches administratives, permettant à notre équipe de se concentrer sur l'innovation et le développement stratégique.",
    author: "Thomas Müller",
    position: "Responsable Logistique"
  }, {
    text: "La collaboration avec Neuro AI a été une révélation pour notre équipe. Leur approche personnalisée et leur compréhension approfondie de nos besoins ont fait toute la différence.",
    author: "Laura Schmidt",
    position: "Analyste Financier"
  }, {
    text: "Les solutions d'IA de Neuro AI ont révolutionné notre service client, avec une satisfaction qui a augmenté de 35% en seulement trois mois d'implémentation.",
    author: "Michel Dubois",
    position: "Directeur Commercial"
  }, {
    text: "Notre partenariat avec Neuro AI nous a permis de rester à la pointe de l'innovation technologique. Leur expertise en IA est un atout majeur pour notre compétitivité.",
    author: "Cécile Rochat",
    position: "Ingénieure en Développement"
  }];

  const englishTestimonials = [{
    text: "Since we integrated Neuro AI's AI solutions, our productivity has increased by 40%. An essential partner for any company aiming for excellence.",
    author: "Jean Dupont",
    position: "Marketing Director"
  }, {
    text: "The support of the Neuro AI team has allowed us to transform our customer approach. Their AI solutions are not only innovative but perfectly adapted to our specific needs.",
    author: "Marie Laurent",
    position: "HR Manager"
  }, {
    text: "We were impressed by the speed and efficiency with which Neuro AI identified and solved our challenges. Their expertise in AI is unmatched in the market.",
    author: "Philippe Moreau",
    position: "IT Project Manager"
  }, {
    text: "The integration of Neuro AI's AI technologies has radically transformed our decision-making process. We are now able to analyze complex data in real-time.",
    author: "Sophie Berger",
    position: "Strategy Consultant"
  }, {
    text: "Thanks to Neuro AI, we were able to automate 60% of our administrative tasks, allowing our team to focus on innovation and strategic development.",
    author: "Thomas Müller",
    position: "Logistics Manager"
  }, {
    text: "The collaboration with Neuro AI was a revelation for our team. Their personalized approach and deep understanding of our needs made all the difference.",
    author: "Laura Schmidt",
    position: "Financial Analyst"
  }, {
    text: "Neuro AI's AI solutions have revolutionized our customer service, with satisfaction increasing by 35% in just three months of implementation.",
    author: "Michel Dubois",
    position: "Sales Director"
  }, {
    text: "Our partnership with Neuro AI has allowed us to stay at the forefront of technological innovation. Their expertise in AI is a major asset for our competitiveness.",
    author: "Cécile Rochat",
    position: "Software Engineer"
  }];

  useEffect(() => {
    const interval = setInterval(() => {
      const { language } = useLanguage();
      const displayTestimonials = language === "en" ? englishTestimonials : testimonials;
      
      setCurrentTestimonialIndex((prevIndex) => 
        prevIndex === displayTestimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000); // Change testimonial every 6 seconds

    return () => clearInterval(interval);
  }, []);

  const handlePrevious = () => {
    const { language } = useLanguage();
    const displayTestimonials = language === "en" ? englishTestimonials : testimonials;
    
    setCurrentTestimonialIndex((prevIndex) => 
      prevIndex === 0 ? displayTestimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    const { language } = useLanguage();
    const displayTestimonials = language === "en" ? englishTestimonials : testimonials;
    
    setCurrentTestimonialIndex((prevIndex) => 
      prevIndex === displayTestimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const { language } = useLanguage();
  const displayTestimonials = language === "en" ? englishTestimonials : testimonials;
  const currentTestimonial = displayTestimonials[currentTestimonialIndex];
  
  return (
    <section id="clients" className="py-12 bg-gradient-to-b from-background to-[#0a0a10]">
      <div className="container-custom">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-display font-bold text-gradient mb-3">{t("client_testimonials")}</h2>
          <p className="text-white/70 max-w-2xl mx-auto text-sm">
            {t("testimonials_subtitle")}
          </p>
        </div>

        <div className="relative">
          <button 
            onClick={handlePrevious} 
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 md:-translate-x-5 z-10 bg-black/40 hover:bg-black/70 text-white rounded-full p-3 backdrop-blur" 
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5 md:h-7 md:w-7" />
          </button>
          
          <div className="overflow-hidden py-8">
            <div 
              className="transition-all duration-500 ease-in-out"
              style={{ transform: `translateX(0)` }}
            >
              <div className="w-full max-w-2xl mx-auto glass-effect p-6 rounded-2xl">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-mauve/40">
                      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                    </svg>
                  </div>
                  <p className="text-white/80 text-sm md:text-base mb-6 flex-grow animate-fade-in">
                    {currentTestimonial.text}
                  </p>
                  <div className="border-t border-white/10 pt-4">
                    <h4 className="font-display font-medium text-white text-sm md:text-base">{currentTestimonial.author}</h4>
                    <p className="text-white/60 text-xs md:text-sm">{currentTestimonial.position}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <button 
            onClick={handleNext} 
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 md:translate-x-5 z-10 bg-black/40 hover:bg-black/70 text-white rounded-full p-3 backdrop-blur" 
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5 md:h-7 md:w-7" />
          </button>
        </div>

        <div className="flex justify-center mt-4">
          {displayTestimonials.map((_, idx) => (
            <button
              key={idx}
              className={`h-2 w-2 rounded-full mx-1 ${idx === currentTestimonialIndex ? 'bg-mauve' : 'bg-white/20'}`}
              onClick={() => setCurrentTestimonialIndex(idx)}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
