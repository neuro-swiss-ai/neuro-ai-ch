
import { useEffect, useRef } from "react";
import Button from "../ui/Button";

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

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
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center py-20 px-4 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-background to-background -z-10"></div>
      
      <div className="container-custom relative z-10 pt-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="animate-fade-in inline-block px-4 py-1.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
              <span className="text-white/80 text-sm font-medium">
                IA • Innovation • Performance
              </span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gradient leading-tight mb-6 animate-fade-in">
            Découvrez le pouvoir de l'IA pour transformer votre entreprise avec Neuro Swiss AI
          </h1>
          
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto animate-fade-in">
            Réservez votre RDV découverte d'une heure
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in">
            <a href="/reservation">
              <Button variant="mauve" size="lg" className="w-full sm:w-auto">
                <span>Réservez votre appel découverte</span>
              </Button>
            </a>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <span className="text-white/50 text-sm mb-2">Découvrir</span>
          <div className="w-0.5 h-6 bg-gradient-to-b from-white/60 to-white/0 scroll-indicator"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
