
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PartnersSection = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  
  const partners = [
    { name: "EY (Ernst & Young)", logo: "/lovable-uploads/c1c92cc0-74ff-4429-b862-8b57adcf8a0a.png" },
    { name: "Nestlé", logo: "/lovable-uploads/cddda8ac-c5ec-463f-aac5-3aebae7f6f37.png" },
    { name: "PwC", logo: "/lovable-uploads/2bb14601-7f40-46fd-bed4-9d721b0e710b.png" },
    { name: "Adecco", logo: "/lovable-uploads/4224b09a-1013-42b2-aecb-7f9406435531.png" },
    { name: "Omega", logo: "/lovable-uploads/3691d429-0849-446f-822b-089f2a37e3ce.png" }
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
            className="flex overflow-x-auto gap-8 py-6 px-2 hide-scrollbar snap-x"
          >
            {partners.map((partner, index) => (
              <div 
                key={index} 
                className="flex-none w-[250px] h-[100px] flex items-center justify-center bg-white p-6 rounded-lg shadow-sm"
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="max-h-full max-w-full object-contain" 
                  loading="lazy"
                />
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
