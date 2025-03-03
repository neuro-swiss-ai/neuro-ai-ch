
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const About = () => {
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
            
            <h1 className="text-4xl md:text-5xl font-display font-bold text-gradient mb-8">À Propos de Nous</h1>
            
            <div className="glass-effect rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-display font-medium text-white mb-4">Notre Mission</h2>
              <p className="text-white/80 mb-6">
                Chez Neuro Swiss AI, notre mission est de démocratiser l'Intelligence Artificielle pour
                les entreprises suisses de toutes tailles. Nous croyons fermement que l'IA doit être
                accessible, compréhensible et utile à tous, pas seulement aux grandes corporations
                disposant de ressources importantes.
              </p>
              <p className="text-white/80">
                Nous nous engageons à guider nos clients à travers leur transformation digitale en proposant
                des solutions IA sur mesure, pragmatiques et éthiques qui répondent à leurs besoins spécifiques
                et génèrent un impact positif concret.
              </p>
            </div>

            <div className="glass-effect rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-display font-medium text-white mb-4">Notre Histoire</h2>
              <p className="text-white/80 mb-6">
                Fondée en 2022 à Genève par une équipe d'experts passionnés par l'IA et ses applications
                pratiques, Neuro Swiss AI est née de la conviction que les entreprises suisses avaient besoin
                d'un partenaire local pour les accompagner dans l'adoption de technologies d'IA.
              </p>
              <p className="text-white/80 mb-6">
                Face à un marché dominé par des solutions génériques et des consultants internationaux peu
                familiers avec les spécificités du tissu économique suisse, nous avons développé une approche
                unique, combinant expertise technique de pointe et connaissance approfondie du contexte local.
              </p>
              <p className="text-white/80">
                Aujourd'hui, nous sommes fiers d'avoir accompagné avec succès de nombreuses entreprises suisses
                dans leur transformation digitale, en créant des solutions IA qui ont concrètement amélioré
                leur efficacité opérationnelle et leur compétitivité.
              </p>
            </div>

            <div className="glass-effect rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-display font-medium text-white mb-4">Nos Valeurs</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-display font-medium text-mauve mb-3">Pragmatisme</h3>
                  <p className="text-white/80 mb-6">
                    Nous privilégions toujours les solutions concrètes qui apportent
                    une valeur ajoutée immédiate à nos clients, plutôt que des concepts
                    technologiques abstraits ou à la mode.
                  </p>

                  <h3 className="text-xl font-display font-medium text-mauve mb-3">Transparence</h3>
                  <p className="text-white/80">
                    Nous communiquons de manière claire et honnête sur les capacités
                    réelles, les limites et les implications des technologies que nous
                    proposons à nos clients.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-display font-medium text-mauve mb-3">Éthique</h3>
                  <p className="text-white/80 mb-6">
                    Nous concevons des solutions IA responsables qui respectent la
                    confidentialité des données, préviennent les biais algorithmiques
                    et soutiennent des utilisations bénéfiques de la technologie.
                  </p>

                  <h3 className="text-xl font-display font-medium text-mauve mb-3">Innovation</h3>
                  <p className="text-white/80">
                    Nous restons constamment à la pointe des avancées technologiques
                    tout en gardant un regard critique pour sélectionner celles qui
                    apporteront une réelle valeur à nos clients.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-12 mb-8">
              <Link to="/reservation" className="inline-block">
                <button className="px-8 py-3 bg-mauve hover:bg-mauve-light text-white font-medium rounded-md transition-colors duration-300">
                  Discuter de votre projet avec notre équipe
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

export default About;
