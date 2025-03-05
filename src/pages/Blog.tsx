
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

// Mock data for blog posts
const blogPosts = [
  {
    id: "1",
    title: "Comment l'IA générative transforme le service client",
    titleEn: "How Generative AI Transforms Customer Service",
    summary: "Découvrez comment les entreprises utilisent l'IA générative pour améliorer l'expérience client et optimiser leurs opérations de support.",
    summaryEn: "Discover how companies are using generative AI to improve customer experience and optimize their support operations.",
    date: "15 Mai 2023",
    dateEn: "May 15, 2023",
    imageUrl: "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    category: "Technologies",
    categoryEn: "Technologies"
  },
  {
    id: "2",
    title: "L'automatisation des processus RH grâce à l'IA",
    titleEn: "HR Process Automation with AI",
    summary: "Les services des ressources humaines peuvent grandement bénéficier de l'IA pour simplifier le recrutement, l'onboarding et la gestion administrative.",
    summaryEn: "Human resources departments can greatly benefit from AI to simplify recruitment, onboarding, and administrative management.",
    date: "2 Avril 2023",
    dateEn: "April 2, 2023",
    imageUrl: "https://images.unsplash.com/photo-1573164574511-73c773193279?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    category: "Business",
    categoryEn: "Business"
  },
  {
    id: "3",
    title: "Les défis de l'éthique dans le développement d'IA en 2023",
    titleEn: "Ethical Challenges in AI Development in 2023",
    summary: "Quels sont les enjeux éthiques auxquels font face les développeurs et utilisateurs d'IA aujourd'hui et comment les entreprises peuvent y répondre.",
    summaryEn: "What are the ethical issues facing AI developers and users today and how companies can address them.",
    date: "18 Mars 2023",
    dateEn: "March 18, 2023",
    imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    category: "Éthique",
    categoryEn: "Ethics"
  },
  {
    id: "4",
    title: "Comment débuter avec ChatGPT pour votre entreprise",
    titleEn: "How to Get Started with ChatGPT for Your Business",
    summary: "Un guide pratique pour intégrer ChatGPT et d'autres modèles de langage dans vos processus d'entreprise et maximiser leur potentiel.",
    summaryEn: "A practical guide to integrating ChatGPT and other language models into your business processes and maximizing their potential.",
    date: "5 Février 2023",
    dateEn: "February 5, 2023",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    category: "Guide pratique",
    categoryEn: "Practical Guide"
  },
  {
    id: "5",
    title: "Intelligence artificielle en Suisse : état des lieux et perspectives",
    titleEn: "Artificial Intelligence in Switzerland: Current State and Perspectives",
    summary: "Analyse de l'adoption de l'IA dans les entreprises suisses, des secteurs les plus avancés et des opportunités à saisir.",
    summaryEn: "Analysis of AI adoption in Swiss companies, the most advanced sectors, and opportunities to seize.",
    date: "12 Janvier 2023",
    dateEn: "January 12, 2023",
    imageUrl: "https://images.unsplash.com/photo-1519452575417-564c1401ecc0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    category: "Analyse",
    categoryEn: "Analysis"
  }
];

const Blog = () => {
  const { t, language } = useLanguage();
  
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
              <span>{t("back")}</span>
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-display font-bold text-gradient mb-8">{t("blog_title")}</h1>
            <p className="text-white/80 max-w-3xl mb-12">
              {t("blog_subtitle")}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Link to={`/blog/${post.id}`} key={post.id} className="group">
                  <div className="glass-effect rounded-2xl overflow-hidden transition-all duration-300 h-full hover:scale-105">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={post.imageUrl} 
                        alt={language === "en" ? post.titleEn : post.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-xs font-medium text-mauve px-3 py-1 bg-mauve/10 rounded-full">
                          {language === "en" ? post.categoryEn : post.category}
                        </span>
                        <span className="text-sm text-white/60">{language === "en" ? post.dateEn : post.date}</span>
                      </div>
                      <h3 className="text-xl font-display font-medium text-white mb-3">{language === "en" ? post.titleEn : post.title}</h3>
                      <p className="text-white/70 mb-4 line-clamp-3">{language === "en" ? post.summaryEn : post.summary}</p>
                      <div className="inline-flex items-center text-mauve group/link">
                        <span className="underline-animation">{t("read_article")}</span>
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
