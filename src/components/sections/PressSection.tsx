
import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

type PressArticle = {
  title: string;
  link: string;
  logoUrl: string;
  logoAlt: string;
};

const PressSection = () => {
  const { language } = useLanguage();
  
  const pressArticles: PressArticle[] = [
    {
      title: language === "en" 
        ? "Analysis of the impact of artificial intelligence on the Geneva economy" 
        : "Analyse de l'impact de l'intelligence artificielle sur l'économie genevoise",
      link: "https://www.pwc.ch/en/insights/public-sector/impact-of-artificial-intelligence-on-the-geneva-economy.html",
      logoUrl: "/lovable-uploads/1a934215-598b-4a70-8cab-433c23719c1a.png",
      logoAlt: "PwC Logo"
    },
    {
      title: language === "en"
        ? "54% of small and medium-sized enterprises in the canton use AI"
        : "54% des petites et moyennes entreprises du canton utilisent l'IA",
      link: "https://www.20min.ch/fr/story/geneve-plus-de-la-moitie-des-pme-se-sont-mis-a-l-intelligence-artificielle-103233684",
      logoUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/20_minutes_Suisse_2013_logo.svg",
      logoAlt: "20 minutes Logo"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#0a0a10] to-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold text-gradient mb-6">
            {language === "en" ? "Press" : "Presse"}
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            {language === "en"
              ? "Discover what the press is saying about AI in Geneva and Switzerland"
              : "Découvrez ce que la presse dit de l'IA à Genève et en Suisse"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
                <span className="underline-animation">
                  {language === "en" ? "Read the article" : "Lire l'article"}
                </span>
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
