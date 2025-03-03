
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Solutions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="py-16 bg-gradient-to-b from-background to-[#0a0a10]">
          <div className="container-custom relative">
            {/* Bouton de retour */}
            <Link to="/" className="inline-flex items-center text-mauve hover:text-mauve-light transition-colors mb-8 group">
              <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform duration-300" />
              <span>Retour</span>
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-display font-bold text-gradient mb-8">Nos Solutions IA</h1>
            
            {/* Introduction à l'IA */}
            <div className="glass-effect rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-display font-medium text-white mb-4">L'Intelligence Artificielle au service de votre entreprise</h2>
              <p className="text-white/80 mb-6">
                L'Intelligence Artificielle (IA) représente aujourd'hui un levier de transformation majeur pour les entreprises de toutes tailles. 
                Nos solutions IA personnalisées permettent d'automatiser les tâches répétitives, d'optimiser vos processus métier, 
                d'améliorer la prise de décision et d'offrir de nouvelles expériences à vos clients.
              </p>
              <p className="text-white/80">
                Chez Neuro Swiss AI, nous concevons des solutions sur mesure qui s'adaptent parfaitement à vos besoins spécifiques, 
                vous permettant de rester compétitif dans un environnement économique en constante évolution.
              </p>
            </div>
            
            {/* Notre méthodologie */}
            <h2 className="text-3xl font-display font-bold text-white mb-6">Notre méthodologie d'intégration de l'IA</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {/* Étape 1 */}
              <div className="glass-effect rounded-2xl p-6 relative overflow-hidden card-hover">
                <div className="absolute top-0 left-0 w-16 h-16 bg-mauve/10 -translate-x-8 -translate-y-8 rounded-full"></div>
                <span className="text-5xl font-display text-mauve opacity-40 absolute top-2 right-4">1</span>
                <h3 className="text-xl font-display font-medium text-white mb-3 relative z-10">Analyse des besoins</h3>
                <p className="text-white/70 relative z-10">
                  Nous commençons par une compréhension approfondie de vos processus, défis et objectifs. 
                  Cette phase est cruciale pour identifier les domaines où l'IA peut créer le plus de valeur pour votre entreprise.
                </p>
              </div>
              
              {/* Étape 2 */}
              <div className="glass-effect rounded-2xl p-6 relative overflow-hidden card-hover">
                <div className="absolute top-0 left-0 w-16 h-16 bg-mauve/10 -translate-x-8 -translate-y-8 rounded-full"></div>
                <span className="text-5xl font-display text-mauve opacity-40 absolute top-2 right-4">2</span>
                <h3 className="text-xl font-display font-medium text-white mb-3 relative z-10">Développement personnalisé</h3>
                <p className="text-white/70 relative z-10">
                  Nous concevons et développons des solutions IA sur mesure, parfaitement adaptées à vos besoins et à votre 
                  infrastructure existante. Nous privilégions des approches pragmatiques et modulaires.
                </p>
              </div>
              
              {/* Étape 3 */}
              <div className="glass-effect rounded-2xl p-6 relative overflow-hidden card-hover">
                <div className="absolute top-0 left-0 w-16 h-16 bg-mauve/10 -translate-x-8 -translate-y-8 rounded-full"></div>
                <span className="text-5xl font-display text-mauve opacity-40 absolute top-2 right-4">3</span>
                <h3 className="text-xl font-display font-medium text-white mb-3 relative z-10">Implémentation et formation</h3>
                <p className="text-white/70 relative z-10">
                  Nous mettons en œuvre les solutions et formons vos équipes pour assurer une adoption réussie. 
                  Notre approche progressive minimise les perturbations opérationnelles pendant la transition.
                </p>
              </div>
              
              {/* Étape 4 */}
              <div className="glass-effect rounded-2xl p-6 relative overflow-hidden card-hover">
                <div className="absolute top-0 left-0 w-16 h-16 bg-mauve/10 -translate-x-8 -translate-y-8 rounded-full"></div>
                <span className="text-5xl font-display text-mauve opacity-40 absolute top-2 right-4">4</span>
                <h3 className="text-xl font-display font-medium text-white mb-3 relative z-10">Support continu</h3>
                <p className="text-white/70 relative z-10">
                  Nous fournissons un support continu pour assurer l'optimisation permanente de vos solutions IA. 
                  Nous adaptons et faisons évoluer les systèmes à mesure que vos besoins changent.
                </p>
              </div>
            </div>
            
            {/* Exemples de projets */}
            <h2 className="text-3xl font-display font-bold text-white mb-6">Exemples de projets réalisés</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* Projet 1 */}
              <div className="glass-effect rounded-2xl overflow-hidden card-hover">
                <div className="h-48 bg-gradient-to-r from-mauve/30 to-purple-800/30 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-mauve" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-medium text-white mb-3">Optimisation des flux de travail</h3>
                  <p className="text-white/70 mb-4">
                    Pour une entreprise du secteur financier, nous avons développé un système IA qui automatise le traitement 
                    des documents et l'extraction de données, réduisant le temps de traitement de 75% et éliminant pratiquement les erreurs manuelles.
                  </p>
                  <p className="text-white/70">
                    Cette solution a permis à leurs équipes de se concentrer sur des tâches à plus forte valeur ajoutée, améliorant 
                    ainsi la satisfaction client et l'efficacité opérationnelle.
                  </p>
                </div>
              </div>
              
              {/* Projet 2 */}
              <div className="glass-effect rounded-2xl overflow-hidden card-hover">
                <div className="h-48 bg-gradient-to-r from-mauve/30 to-purple-800/30 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-mauve" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-medium text-white mb-3">Chatbots IA pour l'accès à l'information</h3>
                  <p className="text-white/70 mb-4">
                    Nous avons conçu et déployé un chatbot intelligent pour une institution éducative, capable de répondre 
                    instantanément aux questions fréquentes des étudiants et du personnel.
                  </p>
                  <p className="text-white/70">
                    Le système a réduit de 40% les demandes de support de routine, tout en améliorant significativement 
                    l'expérience utilisateur grâce à des réponses disponibles 24/7 et une précision de plus de 95%.
                  </p>
                </div>
              </div>
            </div>
            
            {/* CTA */}
            <div className="text-center mb-8">
              <Link to="/reservation" className="inline-block">
                <button className="px-8 py-3 bg-mauve hover:bg-mauve-light text-white font-medium rounded-md transition-colors duration-300">
                  Discuter de votre projet IA
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Solutions;
