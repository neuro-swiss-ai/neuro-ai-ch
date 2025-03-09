
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AssistantCard from "./AssistantCard";

// Liste des assistants filtrée pour la prévisualisation
const previewAssistants = [
  {
    id: "neo",
    name: "Néo",
    emoji: "🤖",
    imagePath: "/lovable-uploads/ccf47a6f-a543-4dc8-bdb2-9b9b7cd18cef.png",
    shortDescription: "L'expert en automatisation !",
    description: "Néo: Votre assistant IA téléphonique\nAutomatisez et optimisez votre gestion d'appels avec Néo. Néo est un assistant téléphonique IA intelligent qui gère vos appels entrants et sortants pour augmenter la productivité et réduire les coûts.\n\n🔹\nFiltrage intelligent des appels – Plus d'interruptions inutiles, uniquement des appels qualifiés.\n🔹\nAppels sortants automatisés – Suivis, rappels clients et campagnes d'appels alimentées par l'IA.\n🔹\nDisponibilité 24/7 – Ne manquez plus jamais un appel important, Néo est toujours là.\n🔹\nOptimisation des coûts – Un tarif compétitif pour un système téléphonique entièrement optimisé.\n📞Boostez votre efficacité avec Néo !",
    callToAction: "📞 Boostez votre efficacité avec Néo !",
    contactText: "Prêt à automatiser votre business ? Contactez-nous !"
  },
  {
    id: "lex",
    name: "Lex",
    emoji: "⚖️",
    imagePath: "/lovable-uploads/b09618c8-3e22-41d7-bf18-94f22ac47bea.png",
    shortDescription: "L'assistant juridique IA !",
    description: "Il analyse les contrats, détecte les risques et automatise la gestion documentaire légale.",
    callToAction: "Avec Lex, gagnez du temps et sécurisez vos processus juridiques !",
    contactText: "Besoin d'un coup de pouce pour analyser un contrat ? Contactez-nous !"
  },
  {
    id: "sylla",
    name: "Sylla",
    emoji: "🔧",
    imagePath: "/lovable-uploads/fc11013c-f6ce-4a3f-94ab-422273efb778.png",
    shortDescription: "L'optimisateur de workflow !",
    description: "Il personnalise Microsoft Copilot pour vos besoins et améliore la collaboration interne.",
    callToAction: "Avec Sylla, optimisez votre productivité et collaborez en toute fluidité !",
    contactText: "Prêt à optimiser vos processus avec Copilot ? Parlons-en !"
  }
];

const AssistantsPreview = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-black to-[#0d0d12]">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Nos assistants IA phares
          </h2>
          <p className="text-lg text-white/80 mb-6">
            Découvrez nos assistants spécialisés conçus pour révolutionner votre entreprise
          </p>
          <button 
            onClick={() => navigate('/assistants')}
            className="text-mauve hover:text-mauve/90 transition-colors duration-200 font-medium"
          >
            Voir tous nos assistants →
          </button>
        </div>

        {/* Assistants cards grid - version compacte pour la prévisualisation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {previewAssistants.map((assistant) => (
            <div key={assistant.id} className="flex justify-center">
              <AssistantCard 
                {...assistant}
                preview={true}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AssistantsPreview;
