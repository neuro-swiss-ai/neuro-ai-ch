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
  "hero_title": "Discover the power of AI to transform your business with Neuro AI",
  "hero_cta": "Book your discovery call",
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
  
  // Clients Section
  "our_clients": "Our Clients",
  "client_testimonials": "Client Testimonials",
  "clients_subtitle": "They trust us to transform their business with AI",
  "testimonials_subtitle": "They trusted us to transform their business with Artificial Intelligence",
  
  // Expertise Section
  "our_expertise": "Our Expertise",
  "expertise_subtitle": "Cutting-edge AI solutions to address the most complex challenges",
  "technologies": "Technologies:",
  
  // Case Studies Section
  "our_projects": "Our Projects",
  "projects_subtitle": "Discover how our AI solutions have transformed businesses",
  "hr_optimization": "HR Process Optimization with AI",
  "hr_description": "We helped a company with 500+ employees automate its recruitment process with AI, reducing hiring time by 70%.",
  "predictive_analysis": "Predictive Analysis for Supply Chain",
  "predictive_description": "Implementation of an AI-based demand forecasting system that allowed a distributor to reduce its inventory by 25% while improving product availability.",
  "chatbot": "Intelligent Customer Service Chatbot",
  "chatbot_description": "Development of an AI-powered chatbot that allowed a financial services company to process 85% of customer requests without human intervention.",
  "read_case": "Read the case study",
  
  // Final CTA Section
  "transform_business": "Transform Your Business",
  "ready_transform": "Ready to transform your business with AI?",
  "contact_discover": "Contact us to discover how we can help you achieve your goals.",
  "book_appointment": "Book an appointment",
  
  // Footer
  "our_services_footer": "Our services",
  "audit_counsel": "Audit and consulting",
  "formations": "Training",
  "ai_solutions_footer": "AI Solutions",
  "blog_footer": "Blog",
  "blog_description": "Articles on AI applied to businesses",
  "contact": "Contact",
  "copyright": "Copyright © Neuro AI 2025 - ",
  "privacy_policy": "Privacy Policy",
  
  // About Page
  "about_us": "About Us",
  "back": "Back",
  "our_mission": "Our Mission",
  "mission_text_1": "At Neuro AI, our mission is to democratize Artificial Intelligence for companies of all sizes. We firmly believe that AI should be accessible, understandable, and useful to everyone, not just large corporations with significant resources.",
  "mission_text_2": "We are committed to guiding our clients through their digital transformation by offering tailored, pragmatic, and ethical AI solutions that meet their specific needs and generate a concrete positive impact.",
  "our_history": "Our History",
  "history_text_1": "Founded in 2022 in Geneva by a team of experts passionate about AI and its practical applications, Neuro AI was born from the conviction that companies needed a local partner to support them in adopting AI technologies.",
  "history_text_2": "Faced with a market dominated by generic solutions and international consultants, we have developed a unique approach, combining cutting-edge technical expertise and deep knowledge of the local context.",
  "history_text_3": "Today, we are proud to have successfully accompanied numerous companies in their digital transformation, creating AI solutions that have concretely improved their operational efficiency and competitiveness.",
  "our_values": "Our Values",
  "pragmatism": "Pragmatism",
  "pragmatism_text": "We always prioritize concrete solutions that bring immediate added value to our clients, rather than abstract or trendy technological concepts.",
  "transparency": "Transparency",
  "transparency_text": "We communicate clearly and honestly about the real capabilities, limitations, and implications of the technologies we offer to our clients.",
  "ethics": "Ethics",
  "ethics_text": "We design responsible AI solutions that respect data confidentiality, prevent algorithmic biases, and support beneficial uses of technology.",
  "innovation_value": "Innovation",
  "innovation_text": "We constantly stay at the forefront of technological advances while maintaining a critical eye to select those that will bring real value to our clients.",
  "discuss_project": "Discuss your project with our team",
  
  // Blog Page
  "blog_title": "Blog",
  "blog_subtitle": "Discover our latest articles, analyses, and practical guides on Artificial Intelligence and its applications in the business world.",
  "read_article": "Read the article",
  
  // Audits Page
  "our_audits": "Our Audits and Consulting",
  "evaluate_optimize": "Evaluate and optimize your AI potential",
  "ai_business": "In a rapidly evolving digital landscape, identifying AI integration opportunities has become essential to maintain a competitive advantage. Our audit and consulting services guide you in your digital transformation by precisely identifying where AI can create the most value for your company.",
  "methodical_approach": "Our methodical and personalized approach allows you to make informed decisions based on concrete analyses and expert recommendations, specifically adapted to your industry.",
  "our_services_audits": "Our services",
  "ai_audit": "AI Audit",
  "ai_audit_text": "Our AI audit systematically evaluates your current processes, systems, and workflows to precisely identify where AI can bring the most significant improvements. We analyze:",
  "business_processes": "Your business processes and pain points",
  "data_sources": "Your data sources and their quality",
  "tech_infrastructure": "Your technological infrastructure",
  "optimization_opportunities": "Optimization opportunities",
  "key_performance": "Key performance indicators",
  "strategic_consulting": "Strategic Consulting",
  "strategic_text": "Based on the results of our audit, we develop a personalized action plan to strategically integrate AI into your organization. Our consulting includes:",
  "ai_vision": "Definition of an AI vision aligned with your objectives",
  "priority_initiatives": "Planning of priority initiatives",
  "appropriate_tech": "Evaluation of appropriate technologies",
  "necessary_resources": "Estimation of necessary resources",
  "potential_roi": "Analysis of potential returns on investment",
  "personalized_support": "Personalized Support",
  "support_text": "We accompany you throughout your digital transformation journey, providing expertise and support in all critical phases:",
  "tech_partners": "Selection of suitable technology partners",
  "change_management": "Change management and internal communication",
  "implementation_supervision": "Implementation supervision",
  "results_measurement": "Results measurement and continuous optimization",
  "skills_transfer": "Training and skills transfer",
  "audit_testimonial": "The AI audit conducted by Neuro AI allowed us to identify improvement opportunities that we hadn't considered. Their methodical approach and concrete recommendations guided us towards a successful digital transformation.",
  "book_ai_audit": "Book an AI audit",
  
  // Solutions Page
  "our_ai_solutions": "Our AI Solutions",
  "ai_service": "Artificial Intelligence at the service of your business",
  "ai_intro_1": "Artificial Intelligence (AI) today represents a major transformation lever for companies of all sizes. Our customized AI solutions allow you to automate repetitive tasks, optimize your business processes, improve decision-making, and offer new experiences to your customers.",
  "ai_intro_2": "At Neuro AI, we design tailored solutions that perfectly adapt to your specific needs, allowing you to remain competitive in a constantly evolving economic environment.",
  "ai_methodology": "Our AI integration methodology",
  "needs_analysis_title": "Needs Analysis",
  "needs_analysis_desc": "We start with a deep understanding of your processes, challenges, and objectives. This phase is crucial to identify the areas where AI can create the most value for your business.",
  "custom_development": "Custom Development",
  "custom_development_desc": "We design and develop custom AI solutions, perfectly adapted to your needs and your existing infrastructure. We prioritize pragmatic and modular approaches.",
  "implementation_training": "Implementation and Training",
  "implementation_desc": "We implement the solutions and train your teams to ensure successful adoption. Our gradual approach minimizes operational disruptions during the transition.",
  "ongoing_support": "Ongoing Support",
  "ongoing_support_desc": "We provide continuous support to ensure the permanent optimization of your AI solutions. We adapt and evolve the systems as your needs change.",
  "completed_projects": "Examples of completed projects",
  "workflow_optimization": "Workflow Optimization",
  "workflow_text_1": "For a company in the financial sector, we developed an AI system that automates document processing and data extraction, reducing processing time by 75% and virtually eliminating manual errors.",
  "workflow_text_2": "This solution allowed their teams to focus on higher value-added tasks, thus improving customer satisfaction and operational efficiency.",
  "ai_chatbots": "AI Chatbots for Information Access",
  "chatbots_text_1": "We designed and deployed an intelligent chatbot for an educational institution, capable of instantly answering frequent questions from students and staff.",
  "chatbots_text_2": "The system reduced routine support requests by 40%, while significantly improving the user experience thanks to 24/7 available responses and accuracy of over 95%.",
  "discuss_ai_project": "Discuss your AI project"
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
  "hero_title": "Découvrez le pouvoir de l'IA pour transformer votre entreprise avec Neuro AI",
  "hero_cta": "Réservez votre RDV découverte",
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
  
  // Clients Section
  "our_clients": "Nos Clients",
  "client_testimonials": "Témoignages clients",
  "clients_subtitle": "Ils nous font confiance pour transformer leur entreprise avec l'IA",
  "testimonials_subtitle": "Ils nous ont fait confiance pour transformer leur entreprise avec l'Intelligence Artificielle",
  
  // Expertise Section
  "our_expertise": "Notre Expertise",
  "expertise_subtitle": "Des solutions IA de pointe pour répondre aux défis les plus complexes",
  "technologies": "Technologies:",
  
  // Case Studies Section
  "our_projects": "Nos Réalisations",
  "projects_subtitle": "Découvrez comment nos solutions d'IA ont transformé les entreprises",
  "hr_optimization": "Optimisation des processus RH avec l'IA",
  "hr_description": "Nous avons aidé une entreprise de 500+ employés à automatiser son processus de recrutement avec l'IA, réduisant le temps d'embauche de 70%.",
  "predictive_analysis": "Analyse prédictive pour la supply chain",
  "predictive_description": "Implémentation d'un système de prévision de la demande basé sur l'IA qui a permis à un distributeur de réduire ses stocks de 25% tout en améliorant la disponibilité des produits.",
  "chatbot": "Chatbot d'assistance client intelligent",
  "chatbot_description": "Développement d'un chatbot alimenté par l'IA qui a permis à une entreprise de services financiers de traiter 85% des demandes client sans intervention humaine.",
  "read_case": "Lire l'étude de cas",
  
  // Final CTA Section
  "transform_business": "Transformez votre entreprise",
  "ready_transform": "Prêt à transformer votre entreprise avec l'IA ?",
  "contact_discover": "Contactez-nous pour découvrir comment nous pouvons vous aider à atteindre vos objectifs.",
  "book_appointment": "Prendre rendez-vous",
  
  // Footer
  "our_services_footer": "Nos services",
  "audit_counsel": "Audit et conseil",
  "formations": "Formations",
  "ai_solutions_footer": "Solutions IA",
  "blog_footer": "Blog",
  "blog_description": "Articles sur l'IA appliquée aux entreprises",
  "contact": "Contact",
  "copyright": "Copyright © Neuro AI 2025 - ",
  "privacy_policy": "Politique de confidentialité",
  
  // About Page
  "about_us": "À Propos de Nous",
  "back": "Retour",
  "our_mission": "Notre Mission",
  "mission_text_1": "Chez Neuro AI, notre mission est de démocratiser l'Intelligence Artificielle pour les entreprises de toutes tailles. Nous croyons fermement que l'IA doit être accessible, compréhensible et utile à tous, pas seulement aux grandes corporations disposant de ressources importantes.",
  "mission_text_2": "Nous nous engageons à guider nos clients à travers leur transformation digitale en proposant des solutions IA sur mesure, pragmatiques et éthiques qui répondent à leurs besoins spécifiques et génèrent un impact positif concret.",
  "our_history": "Notre Histoire",
  "history_text_1": "Fondée en 2022 à Genève par une équipe d'experts passionnés par l'IA et ses applications pratiques, Neuro Swiss AI est née de la conviction que les entreprises suisses avaient besoin d'un partenaire local pour les accompagner dans l'adoption de technologies d'IA.",
  "history_text_2": "Face à un marché dominé par des solutions génériques et des consultants internationaux peu familiers avec les spécificités du tissu économique suisse, nous avons développé une approche unique, combinant expertise technique de pointe et connaissance approfondie du contexte local.",
  "history_text_3": "Aujourd'hui, nous sommes fiers d'avoir accompagné avec succès de nombreuses entreprises suisses dans leur transformation digitale, en créant des solutions IA qui ont concrètement amélioré leur efficacité opérationnelle et leur compétitivité.",
  "our_values": "Nos Valeurs",
  "pragmatism": "Pragmatisme",
  "pragmatism_text": "Nous privilégions toujours les solutions concrètes qui apportent une valeur ajoutée immédiate à nos clients, plutôt que des concepts technologiques abstraits ou à la mode.",
  "transparency": "Transparence",
  "transparency_text": "Nous communiquons de manière claire et honnête sur les capacités réelles, les limites et les implications des technologies que nous proposons à nos clients.",
  "ethics": "Éthique",
  "ethics_text": "Nous concevons des solutions IA responsables qui respectent la confidentialité des données, préviennent les biais algorithmiques et soutiennent des utilisations bénéfiques de la technologie.",
  "innovation_value": "Innovation",
  "innovation_text": "Nous restons constamment à la pointe des avancées technologiques tout en gardant un regard critique pour sélectionner celles qui apporteront une réelle valeur à nos clients.",
  "discuss_project": "Discuter de votre projet avec notre équipe",
  
  // Blog Page
  "blog_title": "Blog",
  "blog_subtitle": "Découvrez nos derniers articles, analyses et guides pratiques sur l'Intelligence Artificielle et ses applications dans le monde de l'entreprise.",
  "read_article": "Lire l'article",
  
  // Audits Page
  "our_audits": "Nos Audits et Conseils",
  "evaluate_optimize": "Évaluez et optimisez votre potentiel IA",
  "ai_business": "Dans un paysage numérique en évolution rapide, identifier les opportunités d'intégration de l'IA est devenu essentiel pour maintenir un avantage concurrentiel. Nos services d'audit et de conseil vous guident dans votre transformation numérique en identifiant précisément où l'IA peut créer le plus de valeur pour votre entreprise.",
  "methodical_approach": "Notre approche méthodique et personnalisée vous permet de prendre des décisions éclairées basées sur des analyses concrètes et des recommandations expertes, spécifiquement adaptées à votre secteur d'activité.",
  "our_services_audits": "Nos services",
  "ai_audit": "Audit IA",
  "ai_audit_text": "Notre audit IA évalue systématiquement vos processus, systèmes et flux de travail actuels pour identifier précisément où l'IA peut apporter les améliorations les plus significatives. Nous analysons:",
  "business_processes": "Vos processus métier et points de friction",
  "data_sources": "Vos sources de données et leur qualité",
  "tech_infrastructure": "Votre infrastructure technologique",
  "optimization_opportunities": "Les opportunités d'optimisation",
  "key_performance": "Les indicateurs de performance clés",
  "strategic_consulting": "Conseil stratégique",
  "strategic_text": "Basé sur les résultats de notre audit, nous élaborons un plan d'action personnalisé pour intégrer l'IA dans votre organisation de manière stratégique. Notre conseil comprend:",
  "ai_vision": "Définition d'une vision IA alignée sur vos objectifs",
  "priority_initiatives": "Planification des initiatives prioritaires",
  "appropriate_tech": "Évaluation des technologies appropriées",
  "necessary_resources": "Estimation des ressources nécessaires",
  "potential_roi": "Analyse des retours sur investissement potentiels",
  "personalized_support": "Accompagnement personnalisé",
  "support_text": "Nous vous accompagnons tout au long de votre parcours de transformation digitale, en apportant expertise et support dans toutes les phases critiques:",
  "tech_partners": "Sélection des partenaires technologiques adaptés",
  "change_management": "Gestion du changement et communication interne",
  "implementation_supervision": "Supervision de la mise en œuvre",
  "results_measurement": "Mesure des résultats et optimisation continue",
  "skills_transfer": "Formation et transfert de compétences",
  "audit_testimonial": "L'audit IA réalisé par Neuro AI nous a permis d'identifier des opportunités d'amélioration que nous n'avions pas envisagées. Leur approche méthodique et leurs recommandations concrètes nous ont guidés vers une transformation numérique réussie.",
  "book_ai_audit": "Réserver un audit IA",
  
  // Solutions Page
  "our_ai_solutions": "Nos Solutions IA",
  "ai_service": "L'Intelligence Artificielle au service de votre entreprise",
  "ai_intro_1": "L'Intelligence Artificielle (IA) représente aujourd'hui un levier de transformation majeur pour les entreprises de toutes tailles. Nos solutions IA personnalisées permettent d'automatiser les tâches répétitives, d'optimiser vos processus métier, d'améliorer la prise de décision et d'offrir de nouvelles expériences à vos clients.",
  "ai_intro_2": "Chez Neuro AI, nous concevons des solutions sur mesure qui s'adaptent parfaitement à vos besoins spécifiques, vous permettant de rester compétitif dans un environnement économique en constante évolution.",
  "ai_methodology": "Notre méthodologie d'intégration de l'IA",
  "needs_analysis_title": "Analyse des besoins",
  "needs_analysis_desc": "Nous commençons par une compréhension approfondie de vos processus, défis et objectifs. Cette phase est cruciale pour identifier les domaines où l'IA peut créer le plus de valeur pour votre entreprise.",
  "custom_development": "Développement personnalisé",
  "custom_development_desc": "Nous concevons et développons des solutions IA sur mesure, parfaitement adaptées à vos besoins et à votre infrastructure existante. Nous privilégions des approches pragmatiques et modulaires.",
  "implementation_training": "Implémentation et formation",
  "implementation_desc": "Nous mettons en œuvre les solutions et formons vos équipes pour assurer une adoption réussie. Notre approche progressive minimise les perturbations opérationnelles pendant la transition.",
  "ongoing_support": "Support continu",
  "ongoing_support_desc": "Nous fournissons un support continu pour assurer l'optimisation permanente de vos solutions IA. Nous adaptons et faisons évoluer les systèmes à mesure que vos besoins changent.",
  "completed_projects": "Exemples de projets réalisés",
  "workflow_optimization": "Optimisation des flux de travail",
  "workflow_text_1": "Pour une entreprise du secteur financier, nous avons développé un système IA qui automatise le traitement des documents et l'extraction de données, réduisant le temps de traitement de 75% et éliminant pratiquement les erreurs manuelles.",
  "workflow_text_2": "Cette solution a permis à leurs équipes de se concentrer sur des tâches à plus forte valeur ajoutée, améliorant ainsi la satisfaction client et l'efficacité opérationnelle.",
  "ai_chatbots": "Chatbots IA pour l'accès à l'information",
  "chatbots_text_1": "Nous avons conçu et déployé un chatbot intelligent pour une institution éducative, capable de répondre instantanément aux questions fréquentes des étudiants et du personnel.",
  "chatbots_text_2": "Le système a réduit de 40% les demandes de support de routine, tout en améliorant significativement l'expérience utilisateur grâce à des réponses disponibles 24/7 et une précision de plus de 95%.",
  "discuss_ai_project": "Discuter de votre projet IA"
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
