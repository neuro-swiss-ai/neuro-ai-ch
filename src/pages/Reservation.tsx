
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";

const Reservation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Création du script Calendly
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      // Nettoyage du script lors du démontage du composant
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <section className="py-16 bg-gradient-to-b from-background to-[#0a0a10]">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-display font-bold text-gradient mb-6">
                Réservez votre consultation
              </h1>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Découvrez en une heure comment l'IA peut booster votre activité. Nous analysons vos besoins et vous proposons des solutions sur mesure.
              </p>
              <a href="https://calendly.com/neuroai-ch/neuro-ai-interview" target="_blank" rel="noopener noreferrer">
                <Button variant="mauve" size="lg">
                  Réservez maintenant votre consultation gratuite
                </Button>
              </a>
            </div>
            
            <div className="mt-16 glass-effect p-6 rounded-2xl" id="calendly-container">
              {/* Le widget Calendly sera injecté ici */}
              <div 
                className="calendly-inline-widget" 
                data-url="https://calendly.com/neuroai-ch/neuro-ai-interview"
                style={{ minWidth: '320px', height: '700px' }}
              ></div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-[#0a0a10]">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="glass-effect p-8 rounded-2xl card-hover">
                  <h3 className="text-xl font-display font-medium text-white mb-4">
                    Ce que vous pouvez attendre de notre consultation
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-mauve mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-white/80">Analyse de vos défis actuels</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-mauve mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-white/80">Identification des opportunités d'IA</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-mauve mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-white/80">Recommandations personnalisées</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-mauve mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-white/80">Plan d'action concret</span>
                    </li>
                  </ul>
                </div>
                
                <div className="glass-effect p-8 rounded-2xl card-hover">
                  <h3 className="text-xl font-display font-medium text-white mb-4">
                    Pourquoi choisir Neuro Swiss AI?
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-mauve mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-white/80">Expertise en IA suisse et internationale</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-mauve mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-white/80">Approche sur mesure pour chaque entreprise</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-mauve mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-white/80">Solutions éthiques et responsables</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-mauve mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-white/80">Accompagnement complet du diagnostic à l'implémentation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Reservation;
