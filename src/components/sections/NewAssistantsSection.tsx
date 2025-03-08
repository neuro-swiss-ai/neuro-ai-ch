
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { CalendarCheck2, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const NewAssistantsSection = () => {
  const { language } = useLanguage();
  
  return (
    <section id="ai-assistants" className="py-24 bg-gradient-to-b from-background to-[#0a0a10]">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-display font-bold text-gradient mb-6">
            {language === "fr" ? "Nos Assistants IA" : "Our AI Assistants"}
          </h2>
        </div>
        
        <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-xl">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="lg:w-2/5">
              <img 
                src="/lovable-uploads/13850001-0d91-4af3-a150-f60bfe624413.png" 
                alt="Néo AI Phone Assistant" 
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
            
            <div className="lg:w-3/5">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🚀</span>
                <h3 className="text-2xl md:text-3xl font-display font-semibold text-white">
                  {language === "fr" 
                    ? "Découvrez Néo: Votre assistant IA téléphonique" 
                    : "Meet Néo: Your AI-Powered Phone Assistant"}
                </h3>
              </div>
              
              <p className="text-white/80 mb-6">
                {language === "fr"
                  ? "Automatisez et optimisez votre gestion d'appels avec Néo. Néo est un assistant téléphonique IA intelligent qui gère vos appels entrants et sortants pour augmenter la productivité et réduire les coûts."
                  : "Automate and optimize your call management with Néo. Néo is a smart AI phone assistant that handles your inbound and outbound calls to boost productivity and cut costs."}
              </p>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-primary">🔹</span>
                  <span className="text-white/90">
                    {language === "fr"
                      ? "Filtrage intelligent des appels – Plus d'interruptions inutiles, uniquement des appels qualifiés."
                      : "Smart call filtering – No more unnecessary interruptions, only qualified calls."}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">🔹</span>
                  <span className="text-white/90">
                    {language === "fr"
                      ? "Appels sortants automatisés – Suivis, rappels clients et campagnes d'appels alimentées par l'IA."
                      : "Automated outbound calls – Follow-ups, client reminders, and AI-powered call campaigns."}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">🔹</span>
                  <span className="text-white/90">
                    {language === "fr"
                      ? "Disponibilité 24/7 – Ne manquez plus jamais un appel important, Néo est toujours là."
                      : "24/7 availability – Never miss an important call, Néo is always on."}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">🔹</span>
                  <span className="text-white/90">
                    {language === "fr"
                      ? "Optimisation des coûts – Un tarif compétitif pour un système téléphonique entièrement optimisé."
                      : "Cost optimization – Competitive pricing for a fully optimized phone system."}
                  </span>
                </li>
              </ul>
              
              <p className="text-xl font-medium text-white mb-6">
                <span className="inline-block mr-2">📞</span>
                {language === "fr"
                  ? "Boostez votre efficacité avec Néo !"
                  : "Boost your efficiency with Néo!"}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a href="#" className="inline-flex">
                  <Button variant="outline" className="border-white/20 bg-white/5 hover:bg-white/10">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    <span>{language === "fr" ? "Essayez gratuitement" : "Try for free"}</span>
                  </Button>
                </a>
                <a href="https://calendly.com/neuroai-ch/neuro-ai-interview">
                  <Button>
                    <CalendarCheck2 className="mr-2 h-4 w-4" />
                    <span>{language === "fr" ? "Réservez une démo" : "Book a demo"}</span>
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <Link to="/assistants">
            <Button variant="outline" className="border-white/20 bg-transparent hover:bg-white/10">
              <span>{language === "fr" ? "Découvrir tous nos assistants IA" : "Discover all our AI assistants"}</span>
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewAssistantsSection;
