
import { useEffect, useRef } from "react";
import { Button } from "../ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const {
    t,
    language
  } = useLanguage();
  
  useEffect(() => {
    // Animation des lignes abstraites
    const createLine = () => {
      if (!heroRef.current) return;
      const line = document.createElement("div");
      line.classList.add("line-decoration");

      // Position aléatoire
      const xPos = Math.random() * 100;
      line.style.left = `${xPos}%`;
      line.style.top = `${Math.random() * 80}%`;

      // Opacité aléatoire
      line.style.opacity = (0.3 + Math.random() * 0.7).toString();

      // Taille aléatoire
      const height = 80 + Math.random() * 120;
      line.style.height = `${height}px`;
      heroRef.current.appendChild(line);

      // Suppression après animation
      setTimeout(() => {
        if (line && line.parentNode) {
          line.parentNode.removeChild(line);
        }
      }, 3000);
    };

    // Créer des lignes à intervalles réguliers
    const interval = setInterval(createLine, 500);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden px-[19px]">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-background to-background -z-10"></div>
      
      {/* Brain background image */}
      <div className="absolute inset-0 -z-20 opacity-20">
        <img src="/lovable-uploads/106a1aec-9006-433f-a05d-1c09afd89e74.png" alt="Brain background" className="w-full h-full object-cover object-center" />
      </div>
      
      <div className="container-custom relative z-10 pt-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Le petit bouton est supprimé ici */}
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-gradient leading-tight mb-6 animate-fade-in">
            {language === "en" ? "Propel Your Organization into the Future with AI" : (
              <>
                <div>Révolutionnez Votre Organisation</div>
                <div>avec l'intelligence Artificielle</div>
              </>
            )}
          </h1>
          
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto animate-fade-in">
            {t("hero_cta")}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in">
            <a href="https://meetings.hubspot.com/jmonkam" target="_blank" rel="noopener noreferrer">
              <Button variant="default" size="lg" className="w-full sm:w-auto">
                <span>{t("reserve_call")}</span>
              </Button>
            </a>
            <a href="https://wa.me/41795488967?text=Bonjour%20%2C%20j'aimerais%20en%20savoir%20plus%20sur%20vos%20services%20et%20solutions%20IA%20" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-white/20 bg-transparent hover:bg-white/10">
                <img src="/lovable-uploads/1171e234-27f1-418f-853d-19dcdb1e4338.png" alt="WhatsApp" className="mr-2 h-5 w-5" />
                <span>{t("contact_whatsapp")}</span>
              </Button>
            </a>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <span className="text-white/50 text-sm mb-2">{t("discover")}</span>
          <div className="w-0.5 h-6 bg-gradient-to-b from-white/60 to-white/0 scroll-indicator"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
