
import { useEffect } from "react";
import AssistantCard from "@/components/sections/AssistantCard";
import { useLanguage } from "@/contexts/LanguageContext";
import { Helmet } from "react-helmet";

// Components
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Define the assistants data
const assistantsList = [
  {
    id: "neo",
    name: "Néo",
    emoji: "🤖",
    imagePath: "/lovable-uploads/97931759-c598-4abe-b8ce-897dcc90cef3.png",
    shortDescription: "L'expert en automatisation !",
    description: "Il optimise vos processus en automatisant les tâches répétitives et en intégrant l'IA dans votre entreprise.",
    callToAction: "Avec Néo, gagnez en efficacité et boostez votre productivité !",
    contactText: "Prêt à automatiser votre business ? Contactez-nous !"
  },
  {
    id: "leo",
    name: "Léo",
    emoji: "🔍",
    imagePath: "/lovable-uploads/1a17f98f-e020-42b2-ab7a-368014710077.png",
    shortDescription: "Votre stratège visionnaire !",
    description: "Il transforme les données en opportunités de croissance et crée des feuilles de route personnalisées pour votre succès.",
    callToAction: "Avec Léo, transformez vos idées en actions et boostez votre croissance !",
    contactText: "Prêt à passer à l'action ? Contactez-nous !"
  },
  {
    id: "cleo",
    name: "Cléo",
    emoji: "🛠️",
    imagePath: "/lovable-uploads/4224b09a-1013-42b2-aecb-7f9406435531.png",
    shortDescription: "L'experte en audit IA !",
    description: "Elle détecte les failles invisibles, identifie les risques cachés et optimise vos processus.",
    callToAction: "Avec Cléo, prenez des décisions basées sur des analyses fiables et précises !",
    contactText: "Envie d'un audit IA ? Contactez-nous !"
  },
  {
    id: "sylla",
    name: "Sylla",
    emoji: "🔧",
    imagePath: "/lovable-uploads/1a934215-598b-4a70-8cab-433c23719c1a.png",
    shortDescription: "L'optimisateur de workflow !",
    description: "Il personnalise Microsoft Copilot pour vos besoins et améliore la collaboration interne.",
    callToAction: "Avec Sylla, optimisez votre productivité et collaborez en toute fluidité !",
    contactText: "Prêt à optimiser vos processus avec Copilot ? Parlons-en !"
  },
  {
    id: "lex",
    name: "Lex",
    emoji: "⚖️",
    imagePath: "/lovable-uploads/4c24d903-facb-485b-93ff-1228cfc68c5b.png",
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
