
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const ClientsSection = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const testimonials = [
    {
      text: "Depuis que nous avons intégré les solutions IA de Neuro AI, notre productivité a augmenté de 40%. Un partenaire incontournable pour toute entreprise visant l'excellence.",
      author: "Jean Dupont",
      position: "Directeur Général, Tech Innovations Genève"
    },
    {
      text: "L'accompagnement de l'équipe Neuro AI nous a permis de transformer notre approche client. Leurs solutions d'IA sont non seulement innovantes mais parfaitement adaptées à nos besoins spécifiques.",
      author: "Marie Laurent",
      position: "VP Marketing, Finance Group Zurich"
    },
    {
      text: "Nous avons été impressionnés par la rapidité et l'efficacité avec laquelle Neuro AI a identifié et résolu nos défis. Leur expertise en matière d'IA est inégalée sur le marché.",
      author: "Philippe Moreau",
      position: "CTO, InnoSoft Lausanne"
    },
    {
      text: "L'intégration des technologies d'IA de Neuro AI a radicalement transformé notre processus décisionnel. Nous sommes désormais capables d'analyser des données complexes en temps réel.",
      author: "Sophie Berger",
      position: "Directrice des Opérations, SwissTech Solutions"
    },
    {
      text: "Grâce à Neuro AI, nous avons pu automatiser 60% de nos tâches administratives, permettant à notre équipe de se concentrer sur l'innovation et le développement stratégique.",
      author: "Thomas Müller",
      position: "CEO, Alpine Innovations Bern"
    },
    {
      text: "La collaboration avec Neuro AI a été une révélation pour notre équipe. Leur approche personnalisée et leur compréhension approfondie de nos besoins ont fait toute la différence.",
      author: "Laura Schmidt",
      position: "Directrice Marketing, Swiss Commerce Group"
    },
    {
      text: "Les solutions d'IA de Neuro AI ont révolutionné notre service client, avec une satisfaction qui a augmenté de 35% en seulement trois mois d'implémentation.",
      author: "Michel Dubois",
      position: "Responsable Service Client, RetailPro Lugano"
    },
    {
      text: "Notre partenariat avec Neuro AI nous a permis de rester à la pointe de l'innovation technologique. Leur expertise en IA est un atout majeur pour notre compétitivité.",
      author: "Cécile Rochat",
      position: "Directrice de l'Innovation, MedTech Vaud"
    }
  ];

  const checkScroll = () => {
    if (sliderRef.current) {
      setCanScrollLeft(sliderRef.current.scrollLeft > 0);
      setCanScrollRight(
        sliderRef.current.scrollLeft <
        sliderRef.current.scrollWidth - sliderRef.current.clientWidth - 5
      );
    }
  };

  useEffect(() => {
    const slider = sliderRef.current;
    
    if (slider) {
      slider.addEventListener("scroll", checkScroll);
    }
    
    checkScroll(); // Initial check
    
    return () => {
      if (slider) slider.removeEventListener("scroll", checkScroll);
    };
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
    <section id="clients" className="py-20 bg-gradient-to-b from-background to-[#0a0a10]">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold text-gradient mb-6">Nos Clients</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Ils nous font confiance pour transformer leur entreprise avec l'IA
          </p>
        </div>

        {/* Testimonials */}
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
            className="flex overflow-x-auto gap-8 pb-8 hide-scrollbar snap-x snap-mandatory"
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="flex-none w-full md:w-[calc(100%-2rem)] lg:w-[600px] glass-effect p-8 rounded-2xl snap-start"
              >
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-mauve/40">
                      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                    </svg>
                  </div>
                  <p className="text-white/80 text-lg mb-6 flex-grow">{testimonial.text}</p>
                  <div>
                    <h4 className="font-display font-medium text-white">{testimonial.author}</h4>
                    <p className="text-mauve">{testimonial.position}</p>
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

export default ClientsSection;
