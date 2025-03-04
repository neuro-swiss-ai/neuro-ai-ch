import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const ClientsSection = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const logosSliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [canScrollLogosLeft, setCanScrollLogosLeft] = useState(false);
  const [canScrollLogosRight, setCanScrollLogosRight] = useState(true);

  const clientLogos = [
    { name: "EY (Ernst & Young)", logo: "/lovable-uploads/ae437860-20ff-4187-bc05-040475c3bcf0.png" },
    { name: "Nestlé", logo: "/lovable-uploads/3f9e828e-3a27-4d23-b41d-4a96faa22dfb.png" },
    { name: "PwC", logo: "/lovable-uploads/62e91508-f988-47a7-9d11-77325bafd0aa.png" },
    { name: "Adecco", logo: "/lovable-uploads/af2f81f0-2d67-4f31-8014-391948cba4be.png" },
    { name: "Omega", logo: "/lovable-uploads/cd4fe293-8c5f-476e-85f0-ac96ec2e53d3.png" }
  ];

  const testimonials = [
    {
      text: "Depuis que nous avons intégré les solutions IA de Neuro AI, notre productivité a augmenté de 40%. Un partenaire incontournable pour toute entreprise visant l'excellence.",
      author: "Jean Dupont",
      position: "Directeur Général, Entreprise Tech SA"
    },
    {
      text: "L'accompagnement de l'équipe Neuro AI nous a permis de transformer notre approche client. Leurs solutions d'IA sont non seulement innovantes mais parfaitement adaptées à nos besoins spécifiques.",
      author: "Marie Laurent",
      position: "VP Marketing, Finance Group"
    },
    {
      text: "Nous avons été impressionnés par la rapidité et l'efficacité avec laquelle Neuro AI a identifié et résolu nos défis. Leur expertise en matière d'IA est inégalée sur le marché.",
      author: "Philippe Moreau",
      position: "CTO, InnoSoft"
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
    
    if (logosSliderRef.current) {
      setCanScrollLogosLeft(logosSliderRef.current.scrollLeft > 0);
      setCanScrollLogosRight(
        logosSliderRef.current.scrollLeft <
        logosSliderRef.current.scrollWidth - logosSliderRef.current.clientWidth - 5
      );
    }
  };

  useEffect(() => {
    const slider = sliderRef.current;
    const logosSlider = logosSliderRef.current;
    
    if (slider) {
      slider.addEventListener("scroll", checkScroll);
    }
    
    if (logosSlider) {
      logosSlider.addEventListener("scroll", checkScroll);
    }
    
    checkScroll(); // Initial check
    
    return () => {
      if (slider) slider.removeEventListener("scroll", checkScroll);
      if (logosSlider) logosSlider.removeEventListener("scroll", checkScroll);
    };
  }, []);

  const scroll = (direction: "left" | "right", ref: React.RefObject<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const scrollAmount = ref.current.clientWidth * 0.8;
    ref.current.scrollBy({
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

        {/* Client Logos */}
        <div className="relative mb-16">
          {canScrollLogosLeft && (
            <button 
              onClick={() => scroll("left", logosSliderRef)}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-10 bg-black/40 hover:bg-black/70 text-white rounded-full p-2 backdrop-blur"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          )}
          
          <div 
            ref={logosSliderRef}
            className="flex overflow-x-auto gap-8 py-6 hide-scrollbar snap-x snap-mandatory"
          >
            {clientLogos.map((client, index) => (
              <div 
                key={index} 
                className="flex-none w-[250px] h-[100px] flex items-center justify-center glass-effect p-6 rounded-lg snap-start"
              >
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="max-h-full max-w-full object-contain" 
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          
          {canScrollLogosRight && (
            <button 
              onClick={() => scroll("right", logosSliderRef)}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-10 bg-black/40 hover:bg-black/70 text-white rounded-full p-2 backdrop-blur"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          )}
        </div>

        {/* Testimonials */}
        <div className="relative">
          {canScrollLeft && (
            <button 
              onClick={() => scroll("left", sliderRef)}
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
              onClick={() => scroll("right", sliderRef)}
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
