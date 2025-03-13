
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Reservation = () => {
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
            
            <h1 className="text-4xl md:text-5xl font-display font-bold text-gradient mb-8">Réservation</h1>
            
            <div className="max-w-4xl mx-auto">
              {/* Contenu existant de la page de réservation */}
              <div className="glass-effect rounded-2xl p-8 mb-12">
                <h2 className="text-2xl font-display font-medium text-white mb-4">Prenez rendez-vous avec notre équipe</h2>
                <p className="text-white/80 mb-6">
                  Réservez dès maintenant votre consultation gratuite d'une heure et découvrez comment l'IA peut révolutionner votre activité.
                </p>
                
                <div className="mt-8">
                  <iframe 
                    src="https://meetings.hubspot.com/jmonkam" 
                    width="100%" 
                    height="950" 
                    frameBorder="0" 
                    title="Calendly Scheduling"
                    className="rounded-xl"
                  ></iframe>
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

