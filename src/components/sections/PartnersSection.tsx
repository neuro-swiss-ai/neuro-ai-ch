
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PartnersSection = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  
  const partners = [
    { name: "OpenAI", logo: "https://via.placeholder.com/150x60?text=OpenAI" },
    { name: "Anthropic", logo: "https://via.placeholder.com/150x60?text=Anthropic" },
    { name: "GitHub Copilot", logo: "https://via.placeholder.com/150x60?text=GitHub+Copilot" },
    { name: "Hugging Face", logo: "https://via.placeholder.com/150x60?text=Hugging+Face" },
    { name: "Microsoft Azure", logo: "https://via.placeholder.com/150x60?text=Microsoft+Azure" },
    { name: "AWS", logo: "https://via.placeholder.com/150x60?text=AWS" },
    { name: "Google Cloud", logo: "https://via.placeholder.com/150x60?text=Google+Cloud" }
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
    <section id="partners" className="py-20 bg-[#e6f7ff]">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold text-[#333] mb-6">Nos Partenaires Technologiques</h2>
          <p className="text-[#555] max-w-2xl mx-auto">
            Nous collaborons avec les leaders de l'industrie pour vous offrir les meilleures solutions
          </p>
        </div>

        <div className="relative">
          {canScrollLeft && (
            <button 
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-10 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-md"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          )}
          
          <div 
            ref={sliderRef}
            className="flex overflow-x-auto gap-8 py-6 hide-scrollbar snap-x snap-mandatory"
          >
            {partners.map((partner, index) => (
              <div 
                key={index} 
                className="flex-none w-[150px] flex items-center justify-center bg-white p-4 rounded-lg shadow-sm snap-start"
              >
                <img src={partner.logo} alt={partner.name} className="max-w-full h-auto" />
              </div>
            ))}
          </div>
          
          {canScrollRight && (
            <button 
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-10 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-md"
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

export default PartnersSection;
