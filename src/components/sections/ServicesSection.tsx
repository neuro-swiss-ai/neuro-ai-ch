
import { useLanguage } from "@/contexts/LanguageContext";
import ServiceCard from "../services/ServiceCard";

const ServicesSection = () => {
  const { t, language } = useLanguage();
  
  const services = [
    {
      id: "formations",
      title: t("training"),
      description: t("training_description"),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-mauve" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
      ),
      link: "/formations",
      imageSrc: "/lovable-uploads/f2d08d9a-b406-4017-8778-d024964c80af.png",
      isFormation: true
    },
    {
      id: "audit-conseil",
      title: t("audit_consulting"),
      description: t("audit_description"),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-mauve" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      link: "/audits",
      imageSrc: "/lovable-uploads/06b96a14-979d-41eb-b519-0d4bd846ad28.png",
      formations: [
        {
          title: "Découverte de l'IA",
          duration: "1 heure",
          description: "Formation d'introduction à l'intelligence artificielle."
        },
        {
          title: "Approfondissement de l'IA",
          duration: "4 heures",
          description: "Formation pour approfondir les connaissances en IA."
        }
      ]
    },
    {
      id: "solutions-ia",
      title: t("ai_solutions"),
      description: t("solutions_description"),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-mauve" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      link: "/solutions",
      imageSrc: "/lovable-uploads/61646934-2788-4d3d-9ed5-1a9d22493c75.png",
      formations: [
        {
          title: "Découverte de l'IA",
          duration: "1 heure",
          description: "Formation d'introduction à l'intelligence artificielle."
        },
        {
          title: "Usage de l'IA au travail",
          duration: "2 heures",
          description: "Formation sur l'intégration de l'IA dans les processus professionnels."
        }
      ]
    }
  ];

  // Description spécifique pour la section formation avec image en-tête
  const formationDescription = "Formations sur mesure pour vos équipes, afin qu'elles puissent maîtriser les outils d'IA et les intégrer efficacement dans vos processus métiers.";

  return (
    <section className="py-16 bg-gradient-to-b from-background to-[#0a0a10]">
      <div className="container-custom">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-display font-bold text-gradient mb-6">{t("our_services")}</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            {t("services_subtitle")}
          </p>
        </div>

        {/* Formation avec image d'en-tête */}
        <div className="mb-12">
          <ServiceCard 
            title={services[0].title}
            description={formationDescription}
            icon={services[0].icon}
            link={services[0].link}
            imageSrc={services[0].imageSrc}
            isFormation={true}
            id={services[0].id}
          />
        </div>

        {/* Autres services avec effet de retournement et images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.slice(1).map((service) => (
            <div 
              key={service.id}
              id={service.id}
              className="h-full"
            >
              <ServiceCard 
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={service.link}
                imageSrc={service.imageSrc}
                formations={service.formations}
                id={service.id}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
