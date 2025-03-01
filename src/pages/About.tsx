
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TeamSection from "@/components/sections/TeamSection";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <section className="py-16 bg-gradient-to-b from-background to-[#0a0a10]">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-display font-bold text-gradient mb-6">
                À propos de Neuro Swiss AI
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Nous aidons les entreprises à libérer tout le potentiel de l'intelligence artificielle
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div className="animate-slide-in order-2 md:order-1">
                <h2 className="text-2xl font-display font-bold text-white mb-6">Notre mission</h2>
                <p className="text-white/80 mb-4">
                  Fondée en 2025 à Genève, Neuro Swiss AI est née de la vision de deux entrepreneurs passionnés par l'IA et déterminés à rendre cette technologie accessible à toutes les entreprises, quelle que soit leur taille ou leur secteur d'activité.
                </p>
                <p className="text-white/80 mb-4">
                  Notre mission est de démocratiser l'accès à l'IA en proposant des solutions sur mesure, éthiques et responsables, qui permettent à nos clients de gagner en efficacité, en compétitivité et en innovation.
                </p>
                <p className="text-white/80">
                  Nous croyons fermement que l'IA représente une opportunité sans précédent pour les entreprises suisses et internationales, et nous sommes déterminés à les accompagner dans cette transformation.
                </p>
              </div>
              
              <div className="relative overflow-hidden rounded-2xl order-1 md:order-2 animate-scale-in">
                <img 
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                  alt="Notre mission"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-mauve/30 to-transparent opacity-60"></div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div className="relative overflow-hidden rounded-2xl animate-scale-in">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                  alt="Nos valeurs"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-bl from-mauve/30 to-transparent opacity-60"></div>
              </div>
              
              <div className="animate-slide-in">
                <h2 className="text-2xl font-display font-bold text-white mb-6">Nos valeurs</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-12 h-12 flex items-center justify-center bg-mauve/10 rounded-lg mr-4 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-mauve" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-display font-medium text-white mb-1">Confiance et transparence</h3>
                      <p className="text-white/70">Nous privilégions la transparence dans toutes nos interactions et bâtissons des relations de confiance durables avec nos clients.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-12 h-12 flex items-center justify-center bg-mauve/10 rounded-lg mr-4 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-mauve" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-display font-medium text-white mb-1">Excellence et innovation</h3>
                      <p className="text-white/70">Nous visons l'excellence dans tout ce que nous faisons et restons à la pointe de l'innovation pour offrir les meilleures solutions à nos clients.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-12 h-12 flex items-center justify-center bg-mauve/10 rounded-lg mr-4 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-mauve" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-display font-medium text-white mb-1">Éthique et responsabilité</h3>
                      <p className="text-white/70">Nous développons des solutions d'IA éthiques, responsables et respectueuses des valeurs humaines et environnementales.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Section Notre Équipe */}
        <TeamSection />
        
        {/* Section Chiffres clés */}
        <section className="py-16 bg-[#0a0a10]">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display font-bold text-gradient mb-6">Chiffres clés</h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                Depuis notre création, nous avons accompagné de nombreuses entreprises dans leur transformation numérique
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="glass-effect rounded-2xl p-8 text-center card-hover">
                <div className="text-5xl font-display font-bold text-gradient-mauve mb-2">35+</div>
                <p className="text-white font-medium">Clients satisfaits</p>
              </div>
              <div className="glass-effect rounded-2xl p-8 text-center card-hover">
                <div className="text-5xl font-display font-bold text-gradient-mauve mb-2">50+</div>
                <p className="text-white font-medium">Projets IA réalisés</p>
              </div>
              <div className="glass-effect rounded-2xl p-8 text-center card-hover">
                <div className="text-5xl font-display font-bold text-gradient-mauve mb-2">12</div>
                <p className="text-white font-medium">Experts en IA</p>
              </div>
              <div className="glass-effect rounded-2xl p-8 text-center card-hover">
                <div className="text-5xl font-display font-bold text-gradient-mauve mb-2">3</div>
                <p className="text-white font-medium">Bureaux en Suisse</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
