
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const NotFound = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 flex items-center justify-center">
        <div className="container-custom py-16 text-center">
          {/* Bouton de retour */}
          <Link to="/" className="inline-flex items-center text-mauve hover:text-mauve-light transition-colors mb-8 group">
            <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform duration-300" />
            <span>Retour à l'accueil</span>
          </Link>
          
          <h1 className="text-6xl md:text-8xl font-display font-bold text-gradient mb-6">404</h1>
          <h2 className="text-2xl md:text-3xl font-display text-white mb-8">Page non trouvée</h2>
          <p className="text-white/70 max-w-xl mx-auto mb-10">
            La page que vous recherchez n'existe pas ou a été déplacée.
          </p>
          
          <Link to="/" className="inline-block">
            <button className="px-8 py-3 bg-mauve hover:bg-mauve-light text-white font-medium rounded-md transition-colors duration-300">
              Retourner à l'accueil
            </button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
