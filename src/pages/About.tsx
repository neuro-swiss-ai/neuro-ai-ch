
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Users, Lightbulb, Target } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t, language } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const events = [
    {
      image: "/lovable-uploads/801f3084-d9bc-4c44-92eb-e554215429a6.png",
      title: language === "fr" ? "Conférences & Événements" : "Conferences & Events",
      description: language === "fr" 
        ? "Nous organisons régulièrement des conférences sur l'IA pour les entreprises suisses, partageant les dernières avancées et stratégies d'implémentation."
        : "We regularly organize AI conferences for Swiss companies, sharing the latest advances and implementation strategies."
    },
    {
      image: "/lovable-uploads/074b84be-ee3a-4000-8d3f-bcd2abd57825.png",
      title: language === "fr" ? "Formations Professionnelles" : "Professional Training",
      description: language === "fr"
        ? "Nos sessions de formation permettent aux professionnels d'acquérir les compétences nécessaires pour intégrer l'IA dans leurs opérations quotidiennes."
        : "Our training sessions enable professionals to acquire the skills needed to integrate AI into their daily operations."
    },
    {
      image: "/lovable-uploads/f507563e-aeda-41c6-95d8-b1e27e9343a2.png",
      title: language === "fr" ? "Innovation Collaborative" : "Collaborative Innovation",
      description: language === "fr"
        ? "Nous collaborons avec les principales institutions académiques suisses pour développer des solutions IA de pointe adaptées au marché local."
        : "We collaborate with leading Swiss academic institutions to develop cutting-edge AI solutions adapted to the local market."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="py-16 bg-gradient-to-b from-background to-[#0a0a10]">
          <div className="container-custom relative">
            {/* Bouton de retour */}
            <Link to="/" className="inline-flex items-center text-mauve hover:text-mauve-light transition-colors mb-8 group">
              <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform duration-300" />
              <span>{language === "fr" ? "Retour" : "Back"}</span>
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-display font-bold text-gradient mb-8">
              {language === "fr" ? "À propos de nous" : "About us"}
            </h1>
            
            <div className="glass-effect rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-display font-medium text-white mb-4">
                {language === "fr" ? "Notre mission" : "Our mission"}
              </h2>
              <p className="text-white/80 mb-6">
                {language === "fr"
                  ? "Neuro Swiss AI a pour mission de démocratiser l'intelligence artificielle au sein des entreprises suisses. Nous croyons fermement que l'IA n'est pas seulement l'avenir, mais déjà le présent de l'innovation commerciale."
                  : "Neuro Swiss AI's mission is to democratize artificial intelligence within Swiss companies. We firmly believe that AI is not just the future, but already the present of business innovation."}
              </p>
              <p className="text-white/80">
                {language === "fr"
                  ? "Notre approche pragmatique nous permet de transformer des concepts d'IA complexes en solutions concrètes et accessibles qui créent une réelle valeur ajoutée pour nos clients."
                  : "Our pragmatic approach allows us to transform complex AI concepts into concrete and accessible solutions that create real added value for our clients."}
              </p>
            </div>

            {/* Section Événements */}
            <div className="mb-12">
              <h2 className="text-2xl font-display font-medium text-white mb-6 text-center">
                {language === "fr" ? "Nos activités" : "Our activities"}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {events.map((event, index) => (
                  <div key={index} className="glass-effect rounded-2xl overflow-hidden">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-display font-medium text-white mb-3">{event.title}</h3>
                      <p className="text-white/70">{event.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-effect rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-display font-medium text-white mb-4">
                {language === "fr" ? "Notre histoire" : "Our history"}
              </h2>
              <p className="text-white/80 mb-6">
                {language === "fr"
                  ? "Fondée en 2019 à Genève, Neuro Swiss AI est née de la vision de trois experts en IA déterminés à combler le fossé entre la recherche académique avancée et les besoins pratiques des entreprises suisses."
                  : "Founded in 2019 in Geneva, Neuro Swiss AI was born from the vision of three AI experts determined to bridge the gap between advanced academic research and the practical needs of Swiss companies."}
              </p>
              <p className="text-white/80 mb-6">
                {language === "fr"
                  ? "En quelques années, nous sommes passés d'une startup ambitieuse à un acteur reconnu dans l'écosystème de l'IA suisse, accompagnant plus de 150 entreprises dans leur transformation numérique."
                  : "In just a few years, we have grown from an ambitious startup to a recognized player in the Swiss AI ecosystem, supporting more than 150 companies in their digital transformation."}
              </p>
              <p className="text-white/80">
                {language === "fr"
                  ? "Aujourd'hui, notre équipe de 25 experts continue d'innover pour apporter des solutions d'IA sur mesure qui répondent aux défis spécifiques du marché suisse."
                  : "Today, our team of 25 experts continues to innovate to deliver tailored AI solutions that address the specific challenges of the Swiss market."}
              </p>
            </div>

            <div className="glass-effect rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-display font-medium text-white mb-6">
                {language === "fr" ? "Nos valeurs" : "Our values"}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="p-2 rounded-full bg-mauve/20 mr-4">
                      <Target className="h-6 w-6 text-mauve" />
                    </div>
                    <h3 className="text-xl font-display font-medium text-mauve">
                      {language === "fr" ? "Pragmatisme" : "Pragmatism"}
                    </h3>
                  </div>
                  <p className="text-white/80 mb-6">
                    {language === "fr"
                      ? "Nous privilégions les solutions concrètes qui génèrent des résultats mesurables pour nos clients, sans nous perdre dans des concepts théoriques."
                      : "We prioritize concrete solutions that generate measurable results for our clients, without getting lost in theoretical concepts."}
                  </p>

                  <div className="flex items-center mb-4">
                    <div className="p-2 rounded-full bg-mauve/20 mr-4">
                      <Lightbulb className="h-6 w-6 text-mauve" />
                    </div>
                    <h3 className="text-xl font-display font-medium text-mauve">
                      {language === "fr" ? "Transparence" : "Transparency"}
                    </h3>
                  </div>
                  <p className="text-white/80">
                    {language === "fr"
                      ? "Nous croyons en une communication ouverte et honnête sur les capacités et les limites de l'IA, sans promesses exagérées."
                      : "We believe in open and honest communication about the capabilities and limitations of AI, without exaggerated promises."}
                  </p>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="p-2 rounded-full bg-mauve/20 mr-4">
                      <Users className="h-6 w-6 text-mauve" />
                    </div>
                    <h3 className="text-xl font-display font-medium text-mauve">
                      {language === "fr" ? "Éthique" : "Ethics"}
                    </h3>
                  </div>
                  <p className="text-white/80 mb-6">
                    {language === "fr"
                      ? "Nous développons des solutions d'IA responsables qui respectent la vie privée, minimisent les biais et favorisent l'équité."
                      : "We develop responsible AI solutions that respect privacy, minimize bias, and promote fairness."}
                  </p>

                  <div className="flex items-center mb-4">
                    <div className="p-2 rounded-full bg-mauve/20 mr-4">
                      <Calendar className="h-6 w-6 text-mauve" />
                    </div>
                    <h3 className="text-xl font-display font-medium text-mauve">
                      {language === "fr" ? "Innovation" : "Innovation"}
                    </h3>
                  </div>
                  <p className="text-white/80">
                    {language === "fr"
                      ? "Nous restons à la pointe des avancées en IA tout en adaptant ces technologies aux besoins spécifiques du marché suisse."
                      : "We stay at the forefront of AI advances while adapting these technologies to the specific needs of the Swiss market."}
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-12 mb-8">
              <Link to="/reservation" className="inline-block">
                <button className="px-8 py-3 bg-mauve hover:bg-mauve-light text-white font-medium rounded-md transition-colors duration-300">
                  {language === "fr" ? "Discuter de votre projet" : "Discuss your project"}
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
