
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FormationCard from "@/components/formation/FormationCard";
import { Button } from "@/components/ui/button";

const Formations = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // État pour gérer le slider de témoignages
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  // Données des témoignages
  const testimonials = [
    {
      id: 1,
      text: "Les formations dispensées par Neuro Swiss AI ont transformé la façon dont notre équipe perçoit et utilise l'IA. La clarté des explications et l'approche pratique ont permis une adoption rapide des outils proposés.",
      author: "Sophie Laurent",
      position: "Directrice RH, Entreprise de services",
      initials: "SL"
    },
    {
      id: 2,
      text: "Grâce à leur approche pédagogique et adaptée à notre secteur, nos équipes ont pu rapidement intégrer l'IA dans leurs processus quotidiens. Un vrai gain de productivité !",
      author: "Marc Dupont",
      position: "Directeur des Opérations, Secteur Bancaire",
      initials: "MD"
    },
    {
      id: 3,
      text: "La formation sur l'automatisation des flux administratifs a révolutionné notre façon de travailler. Ce qui prenait auparavant des heures se fait maintenant en quelques minutes.",
      author: "Julie Moreau",
      position: "Responsable Administrative, PME Industrielle",
      initials: "JM"
    }
  ];
  
  // Fonction pour le défilement automatique
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Fonction pour passer au témoignage suivant
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  // Fonction pour revenir au témoignage précédent
  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Données des nouvelles formations avec les images
  const formationCards = [
    {
      id: 1,
      title: "Découverte de l'IA",
      duration: "1 heure",
      imageSrc: "/lovable-uploads/9f0b28c5-af8f-48ce-ad9b-9c5663d3df69.png",
      description: "Une introduction aux concepts fondamentaux de l'intelligence artificielle, ses applications actuelles et son potentiel pour votre entreprise.",
      purchaseLink: "https://buy.stripe.com/dR603G3kf1NVgRG7sv"
    },
    {
      id: 2,
      title: "Approfondissement IA",
      duration: "4 heures",
      imageSrc: "/lovable-uploads/dcbe01cf-6926-45a8-85f6-ee9cb8498bf7.png",
      description: "Formation complète couvrant les techniques avancées d'IA, l'intégration dans les processus métier et les stratégies d'implémentation efficaces.",
      purchaseLink: "https://buy.stripe.com/7sIdSdgeb3mTfAc8wD"
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
            
            {/* Nouvelles formations avec effet de retournement */}
            <h2 className="text-3xl font-display font-bold text-white mb-6">Formations à la demande</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {formationCards.map((card) => (
                <div key={card.id} className="relative">
                  <FormationCard 
                    title={card.title}
                    duration={card.duration}
                    imageSrc={card.imageSrc}
                    description={card.description}
                  />
                  <div className="mt-4 text-center">
                    <a 
                      href={card.purchaseLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full block"
                    >
                      <Button variant="default" className="w-full group bg-gradient-to-r from-indigo-500 to-purple-600">
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Offrez-vous cette formation maintenant
                      </Button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Nos formations existantes */}
            <h2 className="text-3xl font-display font-bold text-white mb-6">Nos formations détaillées</h2>
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
                    <ul className="list-disc list-inside text-white/70 space-y-1 mb-4">
                      <li>Démystification des technologies IA</li>
                      <li>Réduction de la résistance au changement</li>
                      <li>Meilleure compréhension des possibilités offertes par l'IA</li>
                      <li>Participation active aux initiatives IA de l'entreprise</li>
                    </ul>
                    <div className="mt-4">
                      <a 
                        href="https://buy.stripe.com/eVa3fS7Avakr30QfZ3" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full block md:w-auto md:inline-block"
                      >
                        <Button variant="default" className="w-full md:w-auto group bg-gradient-to-r from-indigo-500 to-purple-600">
                          <ShoppingCart className="mr-2 h-4 w-4" />
                          Offrez-vous cette formation maintenant
                        </Button>
                      </a>
                    </div>
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
            
            {/* Témoignage avec slider automatique */}
            <div className="glass-effect rounded-2xl p-8 mb-16 relative">
              <div className="relative overflow-hidden min-h-[180px]">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={testimonial.id}
                    className={`absolute w-full transition-opacity duration-1000 ${
                      index === currentTestimonial ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                  >
                    <blockquote className="text-xl text-white/90 italic mb-6">
                      "{testimonial.text}"
                    </blockquote>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-mauve/20 rounded-full flex items-center justify-center mr-4">
                        <span className="text-white font-medium">{testimonial.initials}</span>
                      </div>
                      <div>
                        <p className="font-medium text-white">{testimonial.author}</p>
                        <p className="text-white/70">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Navigation dots */}
              <div className="flex justify-center mt-6 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      index === currentTestimonial ? "bg-mauve" : "bg-white/30"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              {/* Navigation arrows */}
              <button 
                onClick={prevTestimonial} 
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white rounded-full p-1.5 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button 
                onClick={nextTestimonial} 
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white rounded-full p-1.5 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
            
            {/* CTA */}
            <div className="text-center mb-8">
              <Link to="/reservation" className="inline-block">
                <button className="px-8 py-3 bg-mauve hover:bg-mauve-light text-white font-medium rounded-md transition-colors duration-300">
                  Réservez votre RDV découverte
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
