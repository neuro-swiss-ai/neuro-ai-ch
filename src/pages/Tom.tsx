
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { CalendarCheck2, ExternalLink, PhoneCall, MessageCircle, Clock, DollarSign, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Tom = () => {
  const { language } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Tom - Assistant IA Téléphonique | Neuro Swiss AI</title>
        <meta name="description" content="Découvrez Tom, votre assistant IA téléphonique conçu pour simplifier, optimiser et automatiser la gestion de vos appels." />
      </Helmet>

      <Navbar />

      <main className="pt-24 bg-gradient-to-b from-black to-[#0d0d12]">
        {/* Hero section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
                  Découvrez Tom
                </h1>
                <p className="text-xl text-white/90 mb-8">
                  Libérez-vous du téléphone grâce à Tom, votre assistant IA téléphonique conçu pour simplifier, optimiser et automatiser la gestion de vos appels.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="#" className="inline-flex">
                    <Button variant="outline" className="border-white/20 bg-white/5 hover:bg-white/10">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      <span>Essayer gratuitement</span>
                    </Button>
                  </a>
                  <a href="https://calendly.com/neuroai-ch/neuro-ai-interview">
                    <Button>
                      <CalendarCheck2 className="mr-2 h-4 w-4" />
                      <span>Réserver une démo</span>
                    </Button>
                  </a>
                </div>
              </div>
              <div className="lg:w-1/2">
                <img 
                  src="/lovable-uploads/6932edf8-8bab-43ef-9154-e7132053c146.png" 
                  alt="Tom AI Phone Assistant" 
                  className="w-full h-auto rounded-xl shadow-2xl border border-white/10"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features section */}
        <section className="py-16 px-4 bg-gradient-to-b from-[#0d0d12] to-black">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Feature 1 */}
              <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-white/10 shadow-lg hover:shadow-xl transition-all hover:scale-105">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-mauve/10 p-3 rounded-full">
                    <PhoneCall className="h-6 w-6 text-mauve" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Filtrage des appels entrants</h3>
                </div>
                <p className="text-white/80">
                  Plus d'interruptions inutiles, uniquement des appels qualifiés et importants pour votre activité.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-white/10 shadow-lg hover:shadow-xl transition-all hover:scale-105">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-mauve/10 p-3 rounded-full">
                    <MessageCircle className="h-6 w-6 text-mauve" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Gestion des appels sortants</h3>
                </div>
                <p className="text-white/80">
                  Suivis, rappels clients et campagnes d'appels automatisés alimentés par l'intelligence artificielle.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-white/10 shadow-lg hover:shadow-xl transition-all hover:scale-105">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-mauve/10 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-mauve" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Disponibilité 24/7</h3>
                </div>
                <p className="text-white/80">
                  Ne manquez plus jamais un appel important, Tom est toujours là pour répondre, même quand vous ne l'êtes pas.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-white/10 shadow-lg hover:shadow-xl transition-all hover:scale-105">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-mauve/10 p-3 rounded-full">
                    <DollarSign className="h-6 w-6 text-mauve" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Optimisation des coûts</h3>
                </div>
                <p className="text-white/80">
                  Un tarif compétitif pour un système téléphonique entièrement optimisé qui réduit vos coûts opérationnels.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Video section */}
        <section className="py-16 px-4 bg-black">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-display font-bold text-white mb-4">
                Découvrez Tom en action
              </h2>
              <p className="text-white/80 max-w-3xl mx-auto">
                Regardez comment Tom gère les appels, filtre les conversations et optimise votre système téléphonique.
              </p>
            </div>
            <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden border border-white/10">
              <div className="w-full h-full bg-gray-900 flex items-center justify-center">
                <p className="text-white/60">Vidéo démonstrative de Tom à intégrer ici</p>
              </div>
            </div>
            <div className="mt-12 text-center">
              <a href="#" className="inline-block">
                <Button size="lg" className="group">
                  <span>Optimiser votre téléphonie, réduisez vos coûts</span>
                  <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <p className="text-white/70 mt-4 max-w-2xl mx-auto">
                Tom vous permet de réduire vos coûts téléphoniques tout en améliorant la qualité de service. Un investissement qui se rentabilise rapidement.
              </p>
            </div>
          </div>
        </section>

        {/* What Tom can do section */}
        <section className="py-16 px-4 bg-gradient-to-b from-black to-[#0d0d12]">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                Ce que Tom peut faire pour vous
              </h2>
              <p className="text-white/80 max-w-3xl mx-auto">
                Tom s'intègre parfaitement à votre entreprise et fournit des solutions intelligentes pour tous vos besoins téléphoniques.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Capability 1 */}
              <div className="bg-black p-8 rounded-xl border border-white/10">
                <div className="flex items-start gap-4">
                  <div className="bg-mauve/10 p-3 rounded-full flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-mauve" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Filtrer les appels entrants</h3>
                    <p className="text-white/80">
                      Tom évalue l'importance de chaque appel en fonction de critères prédéfinis, qualifie les appels et ne vous transfère que ceux qui nécessitent votre attention immédiate. Les autres sont traités automatiquement ou programmés pour un suivi ultérieur.
                    </p>
                  </div>
                </div>
              </div>

              {/* Capability 2 */}
              <div className="bg-black p-8 rounded-xl border border-white/10">
                <div className="flex items-start gap-4">
                  <div className="bg-mauve/10 p-3 rounded-full flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-mauve" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Gérer les appels sortants</h3>
                    <p className="text-white/80">
                      Tom automatise vos campagnes d'appels, effectue des suivis clients personnalisés et programme des rappels intelligents. Il optimise les horaires d'appel en fonction des disponibilités de vos contacts pour maximiser les taux de réponse.
                    </p>
                  </div>
                </div>
              </div>

              {/* Capability 3 */}
              <div className="bg-black p-8 rounded-xl border border-white/10">
                <div className="flex items-start gap-4">
                  <div className="bg-mauve/10 p-3 rounded-full flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-mauve" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Réduire les coûts téléphoniques</h3>
                    <p className="text-white/80">
                      En optimisant la gestion de vos appels, Tom réduit le temps perdu sur des appels non qualifiés, diminue les besoins en personnel de standard téléphonique et optimise votre infrastructure pour des économies substantielles à long terme.
                    </p>
                  </div>
                </div>
              </div>

              {/* Capability 4 */}
              <div className="bg-black p-8 rounded-xl border border-white/10">
                <div className="flex items-start gap-4">
                  <div className="bg-mauve/10 p-3 rounded-full flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-mauve" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Répondre aux appels 24/7</h3>
                    <p className="text-white/80">
                      Tom ne prend jamais de congés et ne dort jamais. Il est disponible 24h/24 et 7j/7 pour répondre à tous les appels, même en dehors des heures de bureau. Vos clients et partenaires peuvent toujours joindre quelqu'un, améliorant ainsi leur satisfaction.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Examples section */}
        <section className="py-16 px-4 bg-gradient-to-b from-[#0d0d12] to-black">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/3">
                <img 
                  src="/lovable-uploads/6932edf8-8bab-43ef-9154-e7132053c146.png" 
                  alt="Tom AI Phone Assistant" 
                  className="w-full h-auto rounded-xl shadow-xl border border-white/10"
                />
              </div>
              <div className="lg:w-2/3">
                <h2 className="text-3xl font-display font-bold text-white mb-6">
                  Exemples d'interactions avec Tom
                </h2>
                <div className="space-y-4">
                  <div className="bg-white/5 backdrop-blur-sm p-5 rounded-xl border border-white/10">
                    <p className="text-white font-medium">
                      "Tom, peux-tu m'aider à améliorer le script de mes appels ?"
                    </p>
                    <p className="text-white/70 mt-2">
                      Tom analyse vos conversations passées et suggère des améliorations pour optimiser vos échanges téléphoniques.
                    </p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm p-5 rounded-xl border border-white/10">
                    <p className="text-white font-medium">
                      "Tom, peux-tu me préparer avant un appel important ?"
                    </p>
                    <p className="text-white/70 mt-2">
                      Tom vous fournit un résumé des interactions précédentes, des points clés à aborder et des conseils personnalisés.
                    </p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm p-5 rounded-xl border border-white/10">
                    <p className="text-white font-medium">
                      "Tom, quels sont les points clés à préparer avant mon prochain appel ?"
                    </p>
                    <p className="text-white/70 mt-2">
                      Tom analyse le profil de votre interlocuteur et vous propose une checklist personnalisée.
                    </p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm p-5 rounded-xl border border-white/10">
                    <p className="text-white font-medium">
                      "Tom, peux-tu analyser mes appels pour identifier des axes d'amélioration ?"
                    </p>
                    <p className="text-white/70 mt-2">
                      Tom vous fournit des statistiques détaillées et des recommandations basées sur l'analyse de vos communications.
                    </p>
                  </div>
                </div>
                <div className="mt-8">
                  <a href="https://calendly.com/neuroai-ch/neuro-ai-interview">
                    <Button size="lg">
                      <CalendarCheck2 className="mr-2 h-5 w-5" />
                      <span>Réserver une démo avec Tom</span>
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA section */}
        <section className="py-16 px-4 bg-black">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-gradient-to-r from-[#8F41E9]/20 to-[#578AEF]/20 rounded-2xl p-10 border border-white/10 text-center">
              <h2 className="text-3xl font-display font-bold text-white mb-4">
                Prêt à transformer votre téléphonie avec Tom ?
              </h2>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                Découvrez comment Tom peut s'adapter parfaitement à votre entreprise pour optimiser votre gestion téléphonique et réduire vos coûts.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="#" className="inline-flex">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto border-white/20 bg-white/5 hover:bg-white/10">
                    <ExternalLink className="mr-2 h-5 w-5" />
                    <span>Essayer gratuitement</span>
                  </Button>
                </a>
                <a href="https://calendly.com/neuroai-ch/neuro-ai-interview">
                  <Button size="lg" className="w-full sm:w-auto">
                    <CalendarCheck2 className="mr-2 h-5 w-5" />
                    <span>Réserver une démo</span>
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

export default Tom;
