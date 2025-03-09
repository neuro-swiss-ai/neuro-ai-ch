import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import AssistantCard from "./AssistantCard";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Liste des assistants filtrée pour la prévisualisation
const previewAssistants = [
  {
    id: "tom",
    name: "Tom 🇨🇭",
    emoji: "🤖",
    imagePath: "/lovable-uploads/3e03b48b-35ba-4326-8fad-064afd705f1c.png",
    shortDescription: "Votre agent téléphonique 24/7 !",
    description: "Tom: Votre assistant IA téléphonique\nAutomatisez et optimisez votre gestion d'appels avec Tom. Tom est un assistant téléphonique IA intelligent qui gère vos appels entrants et sortants pour augmenter la productivité et réduire les coûts.\n\n🔹\nFiltrage intelligent des appels – Plus d'interruptions inutiles, uniquement des appels qualifiés.\n🔹\nAppels sortants automatisés – Suivis, rappels clients et campagnes d'appels alimentées par l'IA.\n🔹\nDisponibilité 24/7 – Ne manquez plus jamais un appel important, Tom est toujours là.\n🔹\nOptimisation des coûts – Un tarif compétitif pour un système téléphonique entièrement optimisé.\n📞Boostez votre efficacité avec Tom !",
    callToAction: "📞 Boostez votre efficacité avec Tom !",
    contactText: "Prêt à automatiser votre business ? Contactez-nous !"
  },
  {
    id: "lex",
    name: "Lex",
    emoji: "⚖️",
    imagePath: "/lovable-uploads/b09618c8-3e22-41d7-bf18-94f22ac47bea.png",
    shortDescription: "L'assistant juridique IA !",
    description: "⚖️ Lex – L'assistant juridique IA !\n\n🔹 Analyse les contrats pour identifier les risques potentiels.\n🔹 Automatise la gestion documentaire légale.\n🔹 Assure la conformité aux réglementations en vigueur.\n🔹 Simplifie la rédaction de documents juridiques standardisés.",
    callToAction: "Avec Lex, gagnez du temps et sécurisez vos processus juridiques !",
    contactText: "Besoin d'un coup de pouce pour analyser un contrat ? Contactez-nous !"
  },
  {
    id: "sylla",
    name: "Sylla",
    emoji: "🔧",
    imagePath: "/lovable-uploads/fc11013c-f6ce-4a3f-94ab-422273efb778.png",
    shortDescription: "L'optimisateur de Microsoft 365 !",
    description: "🔧 Sylla – L'optimisateur de Microsoft 365 !\n\n🔹 Personnalise Microsoft Copilot selon vos besoins spécifiques.\n🔹 Facilite l'utilisation de SharePoint pour une gestion documentaire efficace.\n🔹 Optimise Teams pour améliorer la collaboration interne.\n🔹 Simplifie l'utilisation d'Outlook pour une gestion des emails plus fluide.\n🔹 Améliore l'efficacité des autres applications Microsoft 365.",
    callToAction: "Avec Sylla, optimisez votre productivité et collaborez en toute fluidité !",
    contactText: "Prêt à optimiser vos processus avec Copilot ? Parlons-en !"
  }
];

const AssistantsPreview = () => {
  const navigate = useNavigate();
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  
  const checkScroll = () => {
    if (!sliderRef.current) return;
    
    setCanScrollLeft(sliderRef.current.scrollLeft > 20);
    setCanScrollRight(
      sliderRef.current.scrollLeft <
      sliderRef.current.scrollWidth - sliderRef.current.clientWidth - 20
    );
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener("scroll", checkScroll);
      checkScroll();
      
      return () => slider.removeEventListener("scroll", checkScroll);
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;
    
    const scrollAmount = sliderRef.current.clientWidth * 0.7;
    sliderRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-black to-[#0d0d12]">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Nos assistants IA phares
          </h2>
          <p className="text-lg text-white/80 mb-6">
            Découvrez nos assistants spécialisés conçus pour révolutionner votre entreprise
          </p>
        </div>

        {/* Assistants cards carousel with slider */}
        <div className="relative max-w-5xl mx-auto">
          {canScrollLeft && (
            <button 
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
              aria-label="Précédent"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          )}
          
          <div 
            ref={sliderRef}
            className="flex overflow-x-auto gap-4 pb-4 hide-scrollbar snap-x snap-mandatory px-4 md:px-6"
          >
            {previewAssistants.map((assistant) => (
              <div key={assistant.id} className="flex-none w-full sm:w-1/2 md:w-1/3 snap-start px-2">
                <AssistantCard 
                  {...assistant}
                  preview={true}
                />
              </div>
            ))}
          </div>
          
          {canScrollRight && (
            <button 
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
              aria-label="Suivant"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          )}
        </div>

        <div className="mt-8 text-center relative">
          <Button 
            onClick={() => navigate('/assistants')}
            variant="outline"
            className="border-white/30 hover:border-white/60 bg-transparent hover:bg-white/10 relative"
          >
            Voir tous nos assistants
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
            <span className="inline-block bg-mauve text-white text-xs font-semibold px-2.5 py-0.5 rounded-full">
              Nouveau
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssistantsPreview;
