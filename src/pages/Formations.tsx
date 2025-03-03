
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Formations = () => {
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
            
            <h1 className="text-4xl md:text-5xl font-display font-bold text-gradient mb-8">Nos Formations</h1>
            
            {/* Introduction */}
            <div className="glass-effect rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-display font-medium text-white mb-4">Accélérez votre transformation digitale avec nos formations IA</h2>
              <p className="text-white/80 mb-6">
                Comprendre l'IA est la première étape d'une adoption réussie. Nos formations sont conçues pour 
                démystifier cette technologie et autonomiser vos équipes, quels que soient leur niveau technique ou leur rôle.
              </p>
              <p className="text-white/80">
                Nous croyons fermement que la formation est un levier essentiel pour changer la mentalité et la culture d'entreprise, 
                permettant ainsi une intégration fluide et efficace de l'IA dans vos processus existants.
              </p>
            </div>
            
            {/* Nos formations */}
            <h2 className="text-3xl font-display font-bold text-white mb-6">Nos formations</h2>
            <div className="space-y-10 mb-16">
              {/* Formation 1 */}
              <div className="glass-effect rounded-2xl overflow-hidden card-hover">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-gradient-to-br from-mauve/30 to-purple-800/20 p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-display font-medium text-white mb-4">Démystification de l'IA</h3>
                    <div className="flex items-center text-white/70 mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-mauve" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>1 journée (7h)</span>
                    </div>
                    <div className="flex items-center text-white/70 mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-mauve" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>Pour tous les collaborateurs</span>
                    </div>
                    <div className="flex items-center text-white/70">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-mauve" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Aucun prérequis technique</span>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <p className="text-white/80 mb-4">
                      Cette formation généraliste vise à simplifier les concepts d'IA et à les rendre accessibles à tous. 
                      Nous abordons les fondamentaux de l'intelligence artificielle et montrons comment elle peut s'appliquer 
                      concrètement dans différents contextes d'entreprise.
                    </p>
                    <h4 className="text-lg font-medium text-white mb-2">Programme :</h4>
                    <ul className="list-disc list-inside text-white/70 space-y-1 mb-4">
                      <li>Comprendre les principes fondamentaux de l'IA et du machine learning</li>
                      <li>Découvrir les différents types d'IA et leurs applications pratiques</li>
                      <li>Explorer les cas d'usage pertinents pour votre secteur d'activité</li>
                      <li>Identifier les opportunités et les défis liés à l'adoption de l'IA</li>
                      <li>Acquérir un vocabulaire commun pour faciliter la communication sur les projets IA</li>
                    </ul>
                    <h4 className="text-lg font-medium text-white mb-2">Bénéfices :</h4>
                    <ul className="list-disc list-inside text-white/70 space-y-1">
                      <li>Démystification des technologies IA</li>
                      <li>Réduction de la résistance au changement</li>
                      <li>Meilleure compréhension des possibilités offertes par l'IA</li>
                      <li>Participation active aux initiatives IA de l'entreprise</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Formation 2 */}
              <div className="glass-effect rounded-2xl overflow-hidden card-hover">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-gradient-to-br from-mauve/30 to-purple-800/20 p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-display font-medium text-white mb-4">Automatisation des flux administratifs</h3>
                    <div className="flex items-center text-white/70 mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-mauve" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>2 jours (14h)</span>
                    </div>
                    <div className="flex items-center text-white/70 mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-mauve" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>Pour les équipes administratives</span>
                    </div>
                    <div className="flex items-center text-white/70">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-mauve" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Connaissances bureautiques de base</span>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <p className="text-white/80 mb-4">
                      Cette formation pratique se concentre sur l'utilisation d'outils low-code intégrant l'IA pour optimiser 
                      les processus administratifs. Les participants apprendront à automatiser des tâches répétitives et à 
                      transformer leurs flux de travail quotidiens.
                    </p>
                    <h4 className="text-lg font-medium text-white mb-2">Programme :</h4>
                    <ul className="list-disc list-inside text-white/70 space-y-1 mb-4">
                      <li>Cartographier et analyser vos processus administratifs existants</li>
                      <li>Maîtriser les outils low-code d'automatisation intégrant l'IA</li>
                      <li>Concevoir et implémenter des workflows automatisés</li>
                      <li>Extraire et traiter automatiquement des données de documents</li>
                      <li>Créer des tableaux de bord pour suivre l'efficacité des processus</li>
                    </ul>
                    <h4 className="text-lg font-medium text-white mb-2">Bénéfices :</h4>
                    <ul className="list-disc list-inside text-white/70 space-y-1">
                      <li>Réduction significative du temps consacré aux tâches répétitives</li>
                      <li>Diminution des erreurs et amélioration de la qualité des données</li>
                      <li>Autonomie dans l'optimisation continue des processus</li>
                      <li>Valorisation des compétences et des rôles administratifs</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Formation 3 */}
              <div className="glass-effect rounded-2xl overflow-hidden card-hover">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-gradient-to-br from-mauve/30 to-purple-800/20 p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-display font-medium text-white mb-4">Workshops IA</h3>
                    <div className="flex items-center text-white/70 mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-mauve" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>3 jours (21h)</span>
                    </div>
                    <div className="flex items-center text-white/70 mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-mauve" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>Pour les décideurs et managers</span>
                    </div>
                    <div className="flex items-center text-white/70">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-mauve" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Compréhension des enjeux métier</span>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <p className="text-white/80 mb-4">
                      Ces sessions immersives sont conçues pour aider les équipes dirigeantes à intégrer stratégiquement l'IA 
                      dans leur entreprise. Nous combinons apports théoriques, ateliers pratiques et analyses personnalisées 
                      pour définir une feuille de route IA adaptée à vos objectifs.
                    </p>
                    <h4 className="text-lg font-medium text-white mb-2">Programme :</h4>
                    <ul className="list-disc list-inside text-white/70 space-y-1 mb-4">
                      <li>Analyser les tendances IA dans votre secteur et identifier les opportunités stratégiques</li>
                      <li>Évaluer la maturité digitale de votre organisation</li>
                      <li>Réaliser des ateliers d'idéation et de priorisation des initiatives IA</li>
                      <li>Conduire des analyses de faisabilité et d'impact</li>
                      <li>Élaborer une feuille de route IA concrète et actionnable</li>
                    </ul>
                    <h4 className="text-lg font-medium text-white mb-2">Bénéfices :</h4>
                    <ul className="list-disc list-inside text-white/70 space-y-1">
                      <li>Vision claire du potentiel de l'IA pour votre entreprise</li>
                      <li>Alignement stratégique des initiatives IA avec vos objectifs d'affaires</li>
                      <li>Anticipation et mitigation des risques potentiels</li>
                      <li>Plan d'action concret avec priorités clairement définies</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Témoignage */}
            <div className="glass-effect rounded-2xl p-8 mb-16">
              <blockquote className="text-xl text-white/90 italic mb-6">
                "Les formations dispensées par Neuro Swiss AI ont transformé la façon dont notre équipe perçoit et utilise l'IA. 
                La clarté des explications et l'approche pratique ont permis une adoption rapide des outils proposés."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-mauve/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-medium">SL</span>
                </div>
                <div>
                  <p className="font-medium text-white">Sophie Laurent</p>
                  <p className="text-white/70">Directrice RH, Entreprise de services</p>
                </div>
              </div>
            </div>
            
            {/* CTA */}
            <div className="text-center mb-8">
              <Link to="/reservation" className="inline-block">
                <button className="px-8 py-3 bg-mauve hover:bg-mauve-light text-white font-medium rounded-md transition-colors duration-300">
                  Demander un programme de formation
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

export default Formations;
