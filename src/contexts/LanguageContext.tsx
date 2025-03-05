import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "fr" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// English translations
const enTranslations: Record<string, string> = {
  // Navbar
  "services": "Services",
  "blog": "Blog",
  "reservation": "Booking",
  "about": "About",
  "whatsapp": "WhatsApp",
  "contact_us": "Contact us",
  
  // Hero Section
  "hero_subtitle": "AI • Innovation • Performance",
  "hero_title": "Discover the power of AI to transform your business with Neuro Swiss AI",
  "hero_cta": "Book your one-hour discovery call",
  "reserve_call": "Book your discovery call",
  "contact_whatsapp": "Contact us on WhatsApp",
  "discover": "Discover",
  
  // Services Section
  "our_services": "Our Services",
  "services_subtitle": "Customized AI solutions to meet your business's specific needs",
  "audit_consulting": "Audit & Consulting",
  "audit_description": "We analyze your business to identify AI integration opportunities and advise you on the best solutions tailored to your needs.",
  "training": "Training",
  "training_description": "Customized training for your teams so they can master AI tools and effectively integrate them into your business processes.",
  "ai_solutions": "AI Solutions",
  "solutions_description": "Development and implementation of customized AI solutions to optimize your operations, improve decision-making, and increase your competitiveness.",
  "learn_more": "Learn more",
  
  // Approach Section
  "our_approach": "Our Approach",
  "approach_subtitle": "A proven methodology to transform your business with AI",
  "needs_analysis": "Needs Analysis",
  "needs_analysis_1": "In-depth study of client objectives and challenges",
  "needs_analysis_2": "Evaluation of current processes",
  "needs_analysis_3": "Identification of friction points and inefficiencies",
  "needs_analysis_4": "Identification of automation opportunities",
  "needs_analysis_5": "Feasibility study and potential ROI",
  "collaboration": "Collaboration",
  "collaboration_1": "Co-creation work with client teams",
  "collaboration_2": "Definition of objectives and KPIs",
  "collaboration_3": "Rapid prototyping and validation",
  "collaboration_4": "Continuous training and support",
  "innovation": "Innovation",
  "innovation_1": "Integration of the latest AI technologies",
  "innovation_2": "Development of customized solutions",
  "innovation_3": "Testing and continuous optimization",
  "innovation_4": "Progressive and adaptive deployment",
  "learn_more_btn": "Learn more",
  
  // Team Section
  "our_team": "Our Team",
  "team_subtitle": "AI experts passionate about innovation and dedicated to the success of your digital transformation",
  "learn_more_team": "Learn more about our team",
  
  // Partners Section
  "our_partners": "Our Technology Partners",
  "partners_subtitle": "We collaborate with industry leaders to offer you the best solutions",
  
  // Press Section
  "press": "Press",
  "press_subtitle": "Discover what the press is saying about AI in Geneva and Switzerland",
  "read_article_btn": "Read the article"
};

// French translations (our default language)
const frTranslations: Record<string, string> = {
  // Navbar
  "services": "Services",
  "blog": "Blog",
  "reservation": "Réservation",
  "about": "À propos",
  "whatsapp": "WhatsApp",
  "contact_us": "Nous contacter",
  
  // Hero Section
  "hero_subtitle": "IA • Innovation • Performance",
  "hero_title": "Découvrez le pouvoir de l'IA pour transformer votre entreprise avec Neuro Swiss AI",
  "hero_cta": "Réservez votre RDV découverte d'une heure",
  "reserve_call": "Réservez votre appel découverte",
  "contact_whatsapp": "Contactez-nous sur WhatsApp",
  "discover": "Découvrir",
  
  // Services Section
  "our_services": "Nos Services",
  "services_subtitle": "Des solutions IA sur mesure pour répondre aux besoins spécifiques de votre entreprise",
  "audit_consulting": "Audit et conseil",
  "audit_description": "Nous analysons votre entreprise pour identifier les opportunités d'intégration de l'IA et vous conseillons sur les meilleures solutions adaptées à vos besoins.",
  "training": "Formations",
  "training_description": "Des formations sur mesure pour vos équipes afin qu'elles puissent maîtriser les outils d'IA et les intégrer efficacement dans vos processus métier.",
  "ai_solutions": "Solutions IA",
  "solutions_description": "Développement et implémentation de solutions d'IA personnalisées pour optimiser vos opérations, améliorer la prise de décision et accroître votre compétitivité.",
  "learn_more": "En savoir plus",
  
  // Approach Section
  "our_approach": "Notre Approche",
  "approach_subtitle": "Une méthodologie éprouvée pour transformer votre entreprise avec l'IA",
  "needs_analysis": "Analyse des Besoins",
  "needs_analysis_1": "Étude approfondie des objectifs et défis du client",
  "needs_analysis_2": "Évaluation des processus actuels",
  "needs_analysis_3": "Identification des points de friction et inefficacités",
  "needs_analysis_4": "Analyse des opportunités d'automatisation",
  "needs_analysis_5": "Étude de faisabilité et ROI potentiel",
  "collaboration": "Collaboration",
  "collaboration_1": "Travail en co-création avec les équipes du client",
  "collaboration_2": "Définition des objectifs et KPIs",
  "collaboration_3": "Prototypage rapide et validation",
  "collaboration_4": "Formation continue et support",
  "innovation": "Innovation",
  "innovation_1": "Intégration des dernières technologies IA",
  "innovation_2": "Développement de solutions sur mesure",
  "innovation_3": "Tests et optimisation continue",
  "innovation_4": "Déploiement progressif et adaptatif",
  "learn_more_btn": "En savoir +",
  
  // Team Section
  "our_team": "Notre Équipe",
  "team_subtitle": "Des experts en IA passionnés par l'innovation et dédiés à la réussite de votre transformation digitale",
  "learn_more_team": "En savoir plus sur notre équipe",
  
  // Partners Section
  "our_partners": "Nos Partenaires Technologiques",
  "partners_subtitle": "Nous collaborons avec les leaders de l'industrie pour vous offrir les meilleures solutions",
  
  // Press Section
  "press": "Presse",
  "press_subtitle": "Découvrez ce que la presse dit de l'IA à Genève et en Suisse",
  "read_article_btn": "Lire l'article"
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    // Try to get the language from localStorage
    const savedLanguage = localStorage.getItem("language");
    return (savedLanguage as Language) || "fr";
  });

  // Update localStorage when language changes
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  // Translation function
  const t = (key: string): string => {
    const translations = language === "en" ? enTranslations : frTranslations;
    return translations[key] || key; // Return the key itself if translation not found
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook to use the language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
