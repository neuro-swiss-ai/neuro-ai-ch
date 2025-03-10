import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
const PartnersSection = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const {
    language
  } = useLanguage();
  const partners = [{
    name: "Vatican Bank",
    logo: "/lovable-uploads/dc2b63bb-d9fb-4edb-864b-022baa2aa843.png",
    alt: "Vatican Bank logo"
  }, {
    name: "Banque de France",
    logo: "/lovable-uploads/70ccbb21-2d72-4319-a6dc-20cd1f7bb8da.png",
    alt: "Banque de France logo"
  }, {
    name: "Hermès",
    logo: "/lovable-uploads/db44cc0c-7280-4441-9c29-364532b1ba07.png",
    alt: "Hermès logo"
  }, {
    name: "Julius Bär",
    logo: "/lovable-uploads/5855f278-3076-415e-9fc0-df11a57ade23.png",
    alt: "Julius Bär logo"
  }, {
    name: "EFG",
    logo: "/lovable-uploads/e4e627a5-1daa-468f-936e-c37a908b5bc4.png",
    alt: "EFG logo"
  }, {
    name: "Kaspersky",
    logo: "/lovable-uploads/51ec2b59-c4dc-4ff8-89ae-93917e7a09a6.png",
    alt: "Kaspersky logo"
  }, {
    name: "Bobst",
    logo: "/lovable-uploads/aae37a5b-461d-4182-8d4a-876596e51dc4.png",
    alt: "Bobst logo"
  }, {
    name: "Swiss Humanitarian Aid",
    logo: "/lovable-uploads/6b0f5cf1-3490-48f2-bb67-4decb8111ccb.png",
    alt: "Swiss Humanitarian Aid logo"
  }, {
    name: "Mövenpick",
    logo: "/lovable-uploads/a4ae6298-2f8e-47eb-8f17-423fc7e2c1a2.png",
    alt: "Mövenpick logo"
  }, {
    name: "Zurich Insurance",
    logo: "/lovable-uploads/ef8e00f2-ed93-4754-bbe7-12bddc2eb998.png",
    alt: "Zurich Insurance logo"
  }, {
    name: "Swiss Cross",
    logo: "/lovable-uploads/179c1d47-f53c-4a14-a739-f079d4272f05.png",
    alt: "Swiss Cross logo"
  }, {
    name: "SFS",
    logo: "/lovable-uploads/a7cf659c-cc65-45c5-983d-f17e146095a1.png",
    alt: "SFS logo"
  }, {
    name: "Acceleron",
    logo: "/lovable-uploads/45fb5b1d-a8c9-4a5b-823d-edbfa24d2974.png",
    alt: "Acceleron logo"
  }];
  const checkScroll = () => {
    if (!sliderRef.current) return;
    setCanScrollLeft(sliderRef.current.scrollLeft > 0);
    setCanScrollRight(sliderRef.current.scrollLeft < sliderRef.current.scrollWidth - sliderRef.current.clientWidth - 5);
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
            left: 260,
            // Card width + gap
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
      behavior: "smooth"
    });
  };
  return <section id="partners" className="py-20 bg-[#0a0a10]">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold text-[#fff] mb-6">
            {language === "en" ? "Our Clients" : "Nos Clients"}
          </h2>
          <p className="text-[#ccc] max-w-2xl mx-auto">
            {language === "en" ? "We have helped industry leaders in Switzerland 🇨🇭 by offering them the best solutions" : "Nous avons aidé les leaders des secteurs en Suisse 🇨🇭 en leur offrant les meilleures solutions"}
          </p>
        </div>

        <div className="relative">
          {canScrollLeft && <button onClick={() => scroll("left")} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-10 bg-white/20 hover:bg-white/30 text-white rounded-full p-3 shadow-md" aria-label="Scroll left">
              <ChevronLeft className="h-7 w-7" />
            </button>}
          
          <div ref={sliderRef} className="flex overflow-x-auto gap-8 py-6 px-2 hide-scrollbar snap-x">
            {partners.map((partner, index) => <div key={index} className="flex-none w-[250px] h-[100px] flex items-center justify-center p-6 rounded-lg shadow-sm border border-white/10 bg-slate-50">
                <img src={partner.logo} alt={partner.alt} className="max-h-full max-w-full object-contain" loading="lazy" />
              </div>)}
          </div>
          
          {canScrollRight && <button onClick={() => scroll("right")} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-10 bg-white/20 hover:bg-white/30 text-white rounded-full p-3 shadow-md" aria-label="Scroll right">
              <ChevronRight className="h-7 w-7" />
            </button>}
        </div>
      </div>
    </section>;
};
export default PartnersSection;