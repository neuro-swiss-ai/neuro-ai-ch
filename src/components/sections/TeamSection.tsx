import { useNavigate } from "react-router-dom";
import { ArrowRight, Linkedin, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

const TeamSection = () => {
  const navigate = useNavigate();
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const { language } = useLanguage();
  
  const team = [
    {
      name: "Raphael",
      title: language === "en" ? "CEO & Co-Founder" : "CEO & Co-Founder",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=250&auto=format&fit=crop",
      description: language === "en" 
        ? "AI and strategy expert, Raphael leads our company vision with over 10 years of experience in the technology field."
        : "Expert en IA et stratégie, Raphael dirige notre vision d'entreprise avec plus de 10 ans d'expérience dans le domaine technologique."
    },
    {
      name: "Ornella",
      title: language === "en" ? "Lawyer & Co-Founder" : "Avocate et Co-Founder",
      image: "/lovable-uploads/bc1faeff-ea11-42b6-b5c7-81ab6def7816.png",
      description: language === "en"
        ? "Specialist in ethical AI and digital rights, Ornella ensures that our solutions comply with the strictest legal and ethical standards."
        : "Spécialiste en IA éthique et droits numériques, Ornella assure que nos solutions respectent les normes légales et éthiques les plus strictes.",
      linkedin: "https://www.linkedin.com/in/ornella-levy/"
    },
    {
      name: "Yohan",
      title: language === "en" ? "CTO & Co-Founder" : "CTO & Co-Founder",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=250&auto=format&fit=crop",
      description: language === "en"
        ? "With a solid background in mathematics and data science, Yohan leads our analysis and machine learning projects."
        : "Avec une solide formation en mathématiques et sciences des données, Yohan dirige nos projets d'analyse et d'apprentissage automatique."
    },
    {
      name: "Raphael",
      title: language === "en" ? "Chief Sales Officer" : "Chief Sales Officer",
      image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=250&auto=format&fit=crop",
      description: language === "en"
        ? "With expertise in business development, Raphael drives our growth and develops lasting customer relationships."
        : "Fort d'une expertise en développement commercial, Raphael pilote notre croissance et développe des relations client durables."
    },
    {
      name: "Sophie",
      title: language === "en" ? "HR Director" : "Directrice des Ressources Humaines",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=250&auto=format&fit=crop",
      description: language === "en"
        ? "Responsible for our company culture and talent acquisition, Sophie ensures that our team thrives in an inclusive and dynamic environment."
        : "Responsable de notre culture d'entreprise et du recrutement de talents, Sophie veille à ce que notre équipe s'épanouisse dans un environnement inclusif et dynamique."
    },
    {
      name: "Marie",
      title: language === "en" ? "Head of Customer Success" : "Head of Customer Success",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=250&auto=format&fit=crop",
      description: language === "en"
        ? "Marie supports our clients throughout their journey, ensuring successful adoption of our AI solutions."
        : "Marie accompagne nos clients tout au long de leur parcours, garantissant une adoption réussie de nos solutions d'IA."
    },
    {
      name: "Rodry",
      title: language === "en" ? "Machine Learning Engineer" : "Ingénieur en Machine Learning",
      image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=250&auto=format&fit=crop",
      description: language === "en"
        ? "Rodry develops cutting-edge machine learning models that power our most innovative AI solutions."
        : "Rodry développe des modèles de machine learning de pointe qui alimentent nos solutions d'IA les plus innovantes."
    },
    {
      name: "Christelle",
      title: language === "en" ? "UX/UI Designer" : "Designer UX/UI",
      image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=250&auto=format&fit=crop",
      description: language === "en"
        ? "Christelle creates intuitive and engaging user experiences that make our AI solutions accessible to everyone."
        : "Christelle crée des expériences utilisateur intuitives et engageantes qui rendent nos solutions d'IA accessibles à tous."
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
    <section id="team" className="py-20 bg-gradient-to-b from-[#0a0a10] to-background relative">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold text-gradient mb-6">
            {language === "en" ? "Our Team" : "Notre Équipe"}
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            {language === "en" 
              ? "AI experts passionate about innovation and dedicated to the success of your digital transformation"
              : "Des experts en IA passionnés par l'innovation et dédiés à la réussite de votre transformation digitale"
            }
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
            className="flex gap-6 overflow-x-auto pb-8 hide-scrollbar snap-x snap-mandatory"
          >
            {team.map((member, index) => (
              <div 
                key={index} 
                className="glass-effect rounded-2xl overflow-hidden transition-all duration-300 hover:transform hover:scale-105 flex-none w-[300px] snap-start"
              >
                <div className="p-6">
                  <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden border-4 border-mauve/30">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <h3 className="text-xl font-display font-medium text-white text-center">
                      {member.name}
                    </h3>
                    {member.linkedin && (
                      <a 
                        href={member.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-mauve hover:text-white transition-colors"
                        aria-label={`${member.name}'s LinkedIn profile`}
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                  <p className="text-mauve text-center mb-2">{member.title}</p>
                  <p className="text-white/70 text-center">{member.description}</p>
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

        <div className="text-center mt-12">
          <button 
            onClick={() => navigate('/about')}
            className="inline-flex items-center text-mauve hover:text-mauve-light transition-colors group"
          >
            <span className="underline-animation">
              {language === "en" ? "Learn more about our team" : "En savoir plus sur notre équipe"}
            </span>
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
