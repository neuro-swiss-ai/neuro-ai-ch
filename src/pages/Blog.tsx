
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  date: string;
  readTime: string;
};

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blogPosts: BlogPost[] = [
    {
      id: "impact-ia-entreprises",
      title: "L'impact de l'IA sur les PME suisses en 2025",
      excerpt: "Comment l'intelligence artificielle transforme le paysage des petites et moyennes entreprises en Suisse, avec des exemples concrets et des statistiques récentes.",
      imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
      date: "15 avril 2025",
      readTime: "5 min de lecture"
    },
    {
      id: "agents-ia-personnalises",
      title: "Agents IA personnalisés : révolution pour votre service client",
      excerpt: "Découvrez comment nos agents IA personnalisés peuvent transformer l'expérience client de votre entreprise et augmenter votre efficacité opérationnelle.",
      imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
      date: "2 mars 2025",
      readTime: "7 min de lecture"
    },
    {
      id: "ia-geneve-innovation",
      title: "Genève, nouveau hub de l'innovation en IA",
      excerpt: "Comment Genève se positionne comme un centre d'excellence pour l'intelligence artificielle en Europe, attirant talents et investissements.",
      imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
      date: "12 février 2025",
      readTime: "6 min de lecture"
    },
    {
      id: "formation-ia-entreprise",
      title: "Comment former vos équipes à l'IA ?",
      excerpt: "Guide pratique pour intégrer l'intelligence artificielle dans votre entreprise et former efficacement vos collaborateurs aux nouvelles technologies.",
      imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
      date: "5 janvier 2025",
      readTime: "8 min de lecture"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="py-16 bg-background">
          <div className="container-custom">
            <h1 className="text-4xl font-display font-bold text-gradient mb-6">Blog</h1>
            <p className="text-white/70 max-w-2xl mb-12">
              Consultez nos derniers articles et actualités sur l'IA et l'innovation.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.map((post) => (
                <Link 
                  key={post.id}
                  to={`/blog/${post.id}`}
                  className="group"
                >
                  <article className="glass-effect rounded-xl overflow-hidden transition-all duration-300 group-hover:transform group-hover:scale-[1.02]">
                    <div className="relative h-52 overflow-hidden">
                      <img 
                        src={post.imageUrl} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h2 className="text-xl font-display font-medium text-white">{post.title}</h2>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-sm text-white/60 mb-3">
                        <span>{post.date}</span>
                        <span className="mx-2">•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <p className="text-white/70 mb-4">{post.excerpt}</p>
                      <div className="flex items-center text-mauve group-hover:text-mauve-light transition-colors">
                        <span className="underline-animation">Lire l'article</span>
                        <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </article>
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
