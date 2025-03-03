
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Mock data for blog posts
const blogPosts = [
  {
    id: "1",
    title: "Comment l'IA générative transforme le service client",
    summary: "Découvrez comment les entreprises utilisent l'IA générative pour améliorer l'expérience client et optimiser leurs opérations de support.",
    date: "15 Mai 2023",
    imageUrl: "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    category: "Technologies"
  },
  {
    id: "2",
    title: "L'automatisation des processus RH grâce à l'IA",
    summary: "Les services des ressources humaines peuvent grandement bénéficier de l'IA pour simplifier le recrutement, l'onboarding et la gestion administrative.",
    date: "2 Avril 2023",
    imageUrl: "https://images.unsplash.com/photo-1573164574511-73c773193279?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    category: "Business"
  },
  {
    id: "3",
    title: "Les défis de l'éthique dans le développement d'IA en 2023",
    summary: "Quels sont les enjeux éthiques auxquels font face les développeurs et utilisateurs d'IA aujourd'hui et comment les entreprises peuvent y répondre.",
    date: "18 Mars 2023",
    imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    category: "Éthique"
  },
  {
    id: "4",
    title: "Comment débuter avec ChatGPT pour votre entreprise",
    summary: "Un guide pratique pour intégrer ChatGPT et d'autres modèles de langage dans vos processus d'entreprise et maximiser leur potentiel.",
    date: "5 Février 2023",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    category: "Guide pratique"
  },
  {
    id: "5",
    title: "Intelligence artificielle en Suisse : état des lieux et perspectives",
    summary: "Analyse de l'adoption de l'IA dans les entreprises suisses, des secteurs les plus avancés et des opportunités à saisir.",
    date: "12 Janvier 2023",
    imageUrl: "https://images.unsplash.com/photo-1519452575417-564c1401ecc0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    category: "Analyse"
  }
];

const Blog = () => {
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
            
            <h1 className="text-4xl md:text-5xl font-display font-bold text-gradient mb-8">Blog</h1>
            <p className="text-white/80 max-w-3xl mb-12">
              Découvrez nos derniers articles, analyses et guides pratiques sur l'Intelligence Artificielle 
              et ses applications dans le monde de l'entreprise.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Link to={`/blog/${post.id}`} key={post.id} className="group">
                  <div className="glass-effect rounded-2xl overflow-hidden transition-all duration-300 h-full hover:scale-105">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={post.imageUrl} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-xs font-medium text-mauve px-3 py-1 bg-mauve/10 rounded-full">
                          {post.category}
                        </span>
                        <span className="text-sm text-white/60">{post.date}</span>
                      </div>
                      <h3 className="text-xl font-display font-medium text-white mb-3">{post.title}</h3>
                      <p className="text-white/70 mb-4 line-clamp-3">{post.summary}</p>
                      <div className="inline-flex items-center text-mauve group/link">
                        <span className="underline-animation">Lire l'article</span>
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
