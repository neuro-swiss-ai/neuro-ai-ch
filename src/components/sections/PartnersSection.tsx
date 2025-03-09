
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const PartnersSection = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const { language } = useLanguage();
  
  const partners = [
    { name: "EY (Ernst & Young)", logo: "/lovable-uploads/c1c92cc0-74ff-4429-b862-8b57adcf8a0a.png" },
    { name: "Nestlé", logo: "/lovable-uploads/cddda8ac-c5ec-463f-aac5-3aebae7f6f37.png" },
    { name: "PwC", logo: "/lovable-uploads/2bb14601-7f40-46fd-bed4-9d721b0e710b.png" },
    { name: "Adecco", logo: "/lovable-uploads/4224b09a-1013-42b2-aecb-7f9406435531.png" },
    { name: "Omega", logo: "/lovable-uploads/3691d429-0849-446f-822b-089f2a37e3ce.png" },
    { name: "DKSH Holding", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/DKSH_logo.svg/1200px-DKSH_logo.svg.png" },
    { name: "Emmi AG", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Emmi_logo.svg/1200px-Emmi_logo.svg.png" },
    { name: "Bachem", logo: "https://www.bachem.com/wp-content/uploads/2021/01/bachem_logo_web.svg" },
    { name: "EFG International", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/b/bc/EFG_International_logo.svg/1200px-EFG_International_logo.svg.png" },
    { name: "Siegfried Holding", logo: "https://www.siegfried.ch/fileadmin/_processed_/1/5/csm_logo_siegfried_RGB_d8e0ebaad4.jpg" },
    { name: "Galenica", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Galenica_Logo.svg/2560px-Galenica_Logo.svg.png" },
    { name: "Accelleron Industries", logo: "https://www.accelleron-industries.com/site/assets/files/1070/accelleron_logo_blue_rgb.svg" },
    { name: "Bucher Industries", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Bucher_Industries_logo.svg/2560px-Bucher_Industries_logo.svg.png" },
    { name: "Vontobel", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Vontobel_logo.svg/2560px-Vontobel_logo.svg.png" },
    { name: "Clariant", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Clariant_logo.svg/1280px-Clariant_logo.svg.png" }
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
      
      // Auto-scroll functionality
      const autoScrollInterval = setInterval(() => {
        if (!slider) return;
        
        if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth - 5) {
          // Reset to beginning when reached the end
          slider.scrollTo({
            left: 0,
            behavior: 'smooth'
          });
        } else {
          // Scroll to next item
          slider.scrollBy({
            left: 260, // Card width + gap
            behavior: 'smooth'
          });
        }
      }, 4000); // Scroll every 4 seconds
      
      return () => {
        slider.removeEventListener("scroll", checkScroll);
        clearInterval(autoScrollInterval);
      };
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
    <section id="partners" className="py-20 bg-[#0a0a10]">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold text-[#fff] mb-6">
            {language === "en" ? "Our Clients" : "Nos Clients"}
          </h2>
          <p className="text-[#ccc] max-w-2xl mx-auto">
            {language === "en" 
              ? "We have helped industry leaders in Switzerland 🇨🇭 by offering them the best solutions"
              : "Nous avons aidé les leaders des secteurs en Suisse 🇨🇭 en leur offrant les meilleures solutions"
            }
          </p>
        </div>

        <div className="relative">
          {canScrollLeft && (
            <button 
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-10 bg-white/20 hover:bg-white/30 text-white rounded-full p-3 shadow-md"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-7 w-7" />
            </button>
          )}
          
          <div 
            ref={sliderRef}
            className="flex overflow-x-auto gap-8 py-6 px-2 hide-scrollbar snap-x"
          >
            {partners.map((partner, index) => (
              <div 
                key={index} 
                className="flex-none w-[250px] h-[100px] flex items-center justify-center bg-[#1a1a1a] p-6 rounded-lg shadow-sm border border-white/10"
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
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-10 bg-white/20 hover:bg-white/30 text-white rounded-full p-3 shadow-md"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-7 w-7" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
