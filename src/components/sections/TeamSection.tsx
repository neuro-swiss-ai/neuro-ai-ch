
import { useNavigate } from "react-router-dom";
import { ArrowRight, Linkedin, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const TeamSection = () => {
  const navigate = useNavigate();
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  
  const team = [
    {
      name: "Nueve",
      title: "CEO & Co-Founder",
      image: "/lovable-uploads/bd754d92-0a3c-4db1-83f7-8091455e7fe3.png",
      description: "Expert en IA et stratégie, Nueve dirige notre vision d'entreprise avec plus de 10 ans d'expérience dans le domaine technologique."
    },
    {
      name: "Léya",
      title: "Avocate et Co-Founder",
      image: "/lovable-uploads/e17fe94d-fa2c-4406-a6d4-a02b6831e288.png",
      description: "Spécialiste en IA éthique et droits numériques, Léya assure que nos solutions respectent les normes légales et éthiques les plus strictes."
    },
    {
      name: "Yohan",
      title: "CTO & Co-Founder",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=250&auto=format&fit=crop",
      description: "Avec une solide formation en mathématiques et sciences des données, Yohan dirige nos projets d'analyse et d'apprentissage automatique."
    },
    {
      name: "Jude",
      title: "Sales Director",
      image: "/lovable-uploads/1a17f98f-e020-42b2-ab7a-368014710077.png",
      description: "Fort d'une expertise en développement commercial, Jude pilote notre croissance et développe des relations client durables."
    },
    {
      name: "Sophie",
      title: "Lead Data Scientist",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=250&auto=format&fit=crop",
      description: "Experte en technologies d'IA avancées, Sophie supervise notre équipe technique et l'implémentation de solutions innovantes."
    },
    {
      name: "Marie",
      title: "Head of Customer Success",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=250&auto=format&fit=crop",
      description: "Marie accompagne nos clients tout au long de leur parcours, garantissant une adoption réussie de nos solutions d'IA."
    },
    {
      name: "Nada",
      title: "Head of Marketing",
      image: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?q=80&w=250&auto=format&fit=crop",
      description: "Spécialiste du marketing stratégique, Nada développe notre présence sur le marché et assure la visibilité de nos solutions d'IA."
    },
    {
      name: "Johns",
      title: "Business Developer",
      image: "https://images.unsplash.com/photo-1567515004624-219c11d31f2e?q=80&w=250&auto=format&fit=crop",
      description: "Johns identifie de nouvelles opportunités de croissance et développe des partenariats stratégiques pour étendre notre portée sur le marché."
    },
    {
      name: "Imane",
      title: "Digital Marketing Consultant",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=250&auto=format&fit=crop",
      description: "Experte en marketing digital, Imane élabore des stratégies innovantes pour optimiser notre présence en ligne et attirer de nouveaux clients."
    },
    {
      name: "Bénédicte",
      title: "Business Developer",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=250&auto=format&fit=crop",
      description: "Bénédicte développe notre réseau professionnel et identifie de nouvelles opportunités commerciales pour renforcer notre position sur le marché."
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
          <h2 className="text-4xl font-display font-bold text-gradient mb-6">Notre Équipe</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Des experts en IA passionnés par l'innovation et dédiés à la réussite de votre transformation digitale
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
                  <h3 className="text-xl font-display font-medium text-white text-center mb-1">{member.name}</h3>
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
            <span className="underline-animation">En savoir plus sur notre équipe</span>
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
