
import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

type PressArticle = {
  title: string;
  link: string;
  logoUrl: string;
  logoAlt: string;
};

const PressSection = () => {
  const { t, language } = useLanguage();
  
  const pressArticles: PressArticle[] = [
    {
      title: language === "fr" 
        ? "Analyse de l'impact de l'intelligence artificielle sur l'économie genevoise" 
        : "Analysis of AI impact on Geneva's economy",
      link: "https://www.pwc.ch/en/insights/public-sector/impact-of-artificial-intelligence-on-the-geneva-economy.html",
      logoUrl: "/lovable-uploads/1a934215-598b-4a70-8cab-433c23719c1a.png",
      logoAlt: "PwC Logo"
    },
    {
      title: language === "fr"
        ? "54% des petites et moyennes entreprises du canton utilisent l'IA"
        : "54% of small and medium-sized businesses in the canton use AI",
      link: "https://www.20min.ch/fr/story/geneve-plus-de-la-moitie-des-pme-se-sont-mis-a-l-intelligence-artificielle-103233684",
      logoUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/20_minutes_Suisse_2013_logo.svg",
      logoAlt: "20 minutes Logo"
    },
    {
      title: language === "fr"
        ? "Neuro Swiss AI présente ses solutions lors du forum d'innovation de Genève"
        : "Neuro Swiss AI presents its solutions at the Geneva Innovation Forum",
      link: "#",
      logoUrl: "/lovable-uploads/801f3084-d9bc-4c44-92eb-e554215429a6.png",
      logoAlt: "Geneva Innovation Logo"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#0a0a10] to-background relative">
      {/* Brain background with lower opacity specifically for this section */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <img 
          src="/lovable-uploads/106a1aec-9006-433f-a05d-1c09afd89e74.png" 
          alt="Brain background" 
          className="w-full h-full object-contain object-center opacity-20"
        />
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold text-gradient mb-6">{language === "fr" ? "Presse" : "Press"}</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            {language === "fr" 
              ? "Découvrez ce que la presse dit de l'IA à Genève et en Suisse" 
              : "Discover what the press says about AI in Geneva and Switzerland"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pressArticles.map((article, index) => (
            <a 
              key={index}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-effect rounded-2xl p-6 flex flex-col hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="h-16 flex items-center mb-4">
                <img 
                  src={article.logoUrl} 
                  alt={article.logoAlt} 
                  className="h-10 object-contain" 
                />
              </div>
              <h3 className="text-xl font-display font-medium text-white mb-3">
                {article.title}
              </h3>
              <div className="mt-auto flex items-center text-mauve pt-4">
                <span className="underline-animation">{language === "fr" ? "Lire l'article" : "Read article"}</span>
                <ExternalLink className="h-4 w-4 ml-1" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PressSection;
