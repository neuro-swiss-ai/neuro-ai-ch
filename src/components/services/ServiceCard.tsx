
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight, ShoppingCart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  imageSrc?: string;
  formations?: {
    title: string;
    duration: string;
    description: string;
  }[];
  isFormation?: boolean;
  id?: string;
}

const ServiceCard = ({ 
  title, 
  description, 
  icon, 
  link, 
  imageSrc, 
  formations, 
  isFormation = false,
  id 
}: ServiceCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { t } = useLanguage();
  
  const handleMouseEnter = () => {
    setIsFlipped(true);
    setIsHovered(true);
  };
  
  const handleMouseLeave = () => {
    setIsFlipped(false);
    setIsHovered(false);
  };

  // Si c'est la carte de formation avec une image d'en-tête
  if (isFormation && imageSrc) {
    return (
      <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden group">
        <div className="absolute inset-0">
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center p-6 text-center">
            <h3 className="text-3xl font-display font-medium text-white mb-4">{title}</h3>
            <p className="text-white/80 mb-6 max-w-2xl">{description}</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to={link}>
                <Button className="bg-mauve hover:bg-mauve-light">
                  {t("learn_more")}
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/formations">
                <Button variant="default" className="bg-gradient-to-r from-indigo-500 to-purple-600">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Offrez-vous une formation d'intelligence artificielle maintenant
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Pour les cartes de service avec images interactives et effet de retournement
  return (
    <div 
      className="w-full h-full min-h-[320px] preserve-3d transition-all duration-500 cursor-pointer"
      style={{ transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0)' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Front side */}
      {imageSrc ? (
        <div className="absolute w-full h-full backface-hidden rounded-2xl overflow-hidden">
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-300"
            style={{ transform: isHovered && !isFlipped ? 'scale(1.05)' : 'scale(1)' }}
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center p-6 text-center">
            <h3 className="text-2xl font-display font-medium text-white mb-3">{title}</h3>
            <p className="text-white/80 mb-6">{description}</p>
            {isHovered && !isFlipped && (
              <Link to={link} className="transition-opacity duration-300 opacity-100">
                <Button className="bg-mauve hover:bg-mauve-light">
                  {t("learn_more")}
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      ) : (
        <div className="absolute w-full h-full backface-hidden glass-effect rounded-2xl p-8 border border-white/20 hover:border-white/30">
          <div className="mb-6">{icon}</div>
          <h3 className="text-xl font-display font-medium text-white mb-3">{title}</h3>
          <p className="text-white/70 mb-6">{description}</p>
          <Link to={link} className="inline-flex items-center text-mauve hover:text-mauve-light transition-colors group">
            <span className="underline-animation">{t("learn_more")}</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      )}

      {/* Back side - Custom content based on service type */}
      <div className="absolute w-full h-full backface-hidden rotate-y-180 glass-effect rounded-2xl p-8 border border-white/20 hover:border-white/30 bg-gradient-to-br from-mauve/30 to-purple-800/20 overflow-y-auto">
        {id === "audit-conseil" ? (
          <div className="space-y-4">
            <h3 className="text-xl font-display font-medium text-white mb-4">Notre audit IA évalue systématiquement vos processus, systèmes et flux de travail actuels pour identifier précisément où l'IA peut apporter les améliorations les plus significatives. Nous analysons :</h3>
            <ul className="space-y-2 text-white/90 list-disc pl-5">
              <li>Vos processus métier et points de friction</li>
              <li>Vos sources de données et leur qualité</li>
              <li>Votre infrastructure technologique</li>
              <li>Les opportunités d'optimisation</li>
              <li>Les indicateurs de performance clés</li>
            </ul>
          </div>
        ) : id === "solutions-ia" ? (
          <div className="space-y-4">
            <h3 className="text-xl font-display font-medium text-white mb-4">Notre méthodologie d'intégration de l'IA</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-medium text-white mb-1">1. Analyse des besoins</h4>
                <p className="text-white/90">Nous commençons par une compréhension approfondie de vos processus, défis et objectifs. Cette phase est cruciale pour identifier les domaines où l'IA peut créer le plus de valeur pour votre entreprise.</p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-white mb-1">2. Développement personnalisé</h4>
                <p className="text-white/90">Nous concevons et développons des solutions IA sur mesure, parfaitement adaptées à vos besoins et à votre infrastructure existante. Nous privilégions des approches pragmatiques et modulaires.</p>
              </div>
            </div>
          </div>
        ) : (
          // Fallback to formations if it's not audit-conseil or solutions-ia
          <div>
            <h3 className="text-xl font-display font-medium text-white mb-4">{t("available_trainings")}</h3>
            <div className="space-y-4 mb-6">
              {formations?.map((formation, index) => (
                <div key={index} className="border-b border-white/10 pb-3 last:border-0">
                  <h4 className="font-medium text-white">{formation.title}</h4>
                  <div className="flex items-center text-white/70 text-sm mb-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-mauve" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{formation.duration}</span>
                  </div>
                  <p className="text-white/70 text-sm">{formation.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        
        <Link to={link} className="block mt-4">
          <Button variant="outline" className="border-white bg-white/10 hover:bg-white/20 text-white w-full">
            {"En savoir plus"}
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
