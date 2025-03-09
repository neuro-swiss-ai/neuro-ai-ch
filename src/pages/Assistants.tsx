
import { useEffect } from "react";
import AssistantCard from "@/components/sections/AssistantCard";
import { useLanguage } from "@/contexts/LanguageContext";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

// Components
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Define the assistants data
const assistantsList = [
  {
    id: "tom",
    name: "Tom",
    emoji: "🤖",
    imagePath: "/lovable-uploads/3e03b48b-35ba-4326-8fad-064afd705f1c.png",
    shortDescription: "L'expert en automatisation !",
    description: "Tom: Votre assistant IA téléphonique\nAutomatisez et optimisez votre gestion d'appels avec Tom. Tom est un assistant téléphonique IA intelligent qui gère vos appels entrants et sortants pour augmenter la productivité et réduire les coûts.\n\n🔹\nFiltrage intelligent des appels – Plus d'interruptions inutiles, uniquement des appels qualifiés.\n🔹\nAppels sortants automatisés – Suivis, rappels clients et campagnes d'appels alimentées par l'IA.\n🔹\nDisponibilité 24/7 – Ne manquez plus jamais un appel important, Tom est toujours là.\n🔹\nOptimisation des coûts – Un tarif compétitif pour un système téléphonique entièrement optimisé.\n📞Boostez votre efficacité avec Tom !",
    callToAction: "📞 Boostez votre efficacité avec Tom !",
    contactText: "Prêt à automatiser votre business ? Contactez-nous !"
  },
  {
    id: "leo",
    name: "Léo",
    emoji: "🔍",
    imagePath: "/lovable-uploads/6b835675-311c-4bce-b442-b9765a6494f3.png",
    shortDescription: "Votre stratège visionnaire !",
    description: "Il transforme les données en opportunités de croissance et crée des feuilles de route personnalisées pour votre succès.",
    callToAction: "Avec Léo, transformez vos idées en actions et boostez votre croissance !",
    contactText: "Prêt à passer à l'action ? Contactez-nous !"
  },
  {
    id: "iris",
    name: "Iris",
    emoji: "⚖️",
    imagePath: "/lovable-uploads/3f4aa1e2-58c5-4fd3-9ef5-c9be9e550c8b.png",
    shortDescription: "Votre expert en e-Discovery IA !",
    description: "🔍 Elle vous aide à :\n✅ Scanner et classer de grands volumes de documents juridiques. 📄\n✅ Identifier les informations clés pour vos dossiers. 🔑\n✅ Faciliter la préparation des contentieux. ⚖️\n✅ Réduire le temps de traitement des documents. ⏳",
    callToAction: "Avec Iris, explorez vos données légales avec précision et efficacité !",
    contactText: "Besoin d'un coup de main pour analyser des documents volumineux ? Parlons-en !"
  },
  {
    id: "cleo",
    name: "Cléo",
    emoji: "🛠️",
    imagePath: "/lovable-uploads/fc9ca202-ddd7-4f99-9339-8ea3e314032e.png",
    shortDescription: "L'experte en audit IA !",
    description: "Elle détecte les failles invisibles, identifie les risques cachés et optimise vos processus.",
    callToAction: "Avec Cléo, prenez des décisions basées sur des analyses fiables et précises !",
    contactText: "Envie d'un audit IA ? Contactez-nous !"
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
  }
];

const Assistants = () => {
  const { t } = useLanguage();
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Nos Assistants IA | Neuro Swiss AI</title>
        <meta name="description" content="Découvrez nos assistants IA spécialisés pour optimiser vos processus d'entreprise et booster votre productivité." />
      </Helmet>

      <Navbar />
      
      <main className="pt-24 bg-gradient-to-b from-black to-[#0d0d12]">
        {/* Hero section */}
        <section className="py-16 px-4">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
                Nos Assistants IA Spécialisés
              </h1>
              <p className="text-lg text-white/80">
                Découvrez nos assistants intelligents conçus pour résoudre vos défis d'entreprise spécifiques.
                Chaque assistant est optimisé pour exceller dans son domaine d'expertise.
              </p>
            </div>

            {/* Assistants cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {assistantsList.map((assistant) => (
                <div key={assistant.id}>
                  <AssistantCard {...assistant} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact section */}
        <section className="py-16 bg-gradient-to-b from-[#0d0d12] to-black">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-display font-semibold text-white mb-6">
                Prêt à découvrir comment nos assistants IA peuvent transformer votre entreprise ?
              </h2>
              <p className="text-white/80 mb-8">
                Contactez-nous dès aujourd'hui pour une consultation personnalisée.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="https://calendly.com/neuroai-ch/neuro-ai-interview">
                  <Button variant="default" size="lg" className="w-full sm:w-auto">
                    <span>{t("reserve_call")}</span>
                  </Button>
                </a>
                <a href="https://wa.me/message/OFHBXHWDIADHA1" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto border-white/20 bg-transparent hover:bg-white/10">
                    <MessageCircle className="mr-2 h-5 w-5 text-green-500" />
                    <span>{t("contact_whatsapp")}</span>
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Assistants;
