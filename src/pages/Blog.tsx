
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";

// Données d'exemple pour les articles de blog
const blogPosts = [
  {
    id: 1,
    title: "Comment l'IA transforme la prise de décision en entreprise",
    excerpt: "Découvrez comment les algorithmes d'intelligence artificielle révolutionnent la prise de décision stratégique et opérationnelle...",
    date: "15 Mai 2025",
    author: "Yohan Lahmani",
    category: "Stratégie IA",
    image: "https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Les meilleures pratiques pour implémenter l'IA dans votre PME",
    excerpt: "Un guide étape par étape pour les petites et moyennes entreprises souhaitant intégrer l'intelligence artificielle dans leurs processus...",
    date: "28 Avril 2025",
    author: "Amine Nueve",
    category: "Implémentation",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "IA et éthique: naviguer dans les enjeux de transparence et de responsabilité",
    excerpt: "Analyse des considérations éthiques liées à l'utilisation de l'IA dans le monde professionnel et les meilleures approches...",
    date: "10 Avril 2025",
    author: "Jude Monkam",
    category: "Éthique",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "La formation continue: clé de l'adaptation à l'ère de l'IA",
    excerpt: "Comment la formation des équipes devient un élément crucial pour tirer pleinement parti des technologies d'intelligence artificielle...",
    date: "2 Avril 2025",
    author: "Sabine",
    category: "Formation",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "Études de cas: 5 entreprises suisses qui ont réussi leur transformation par l'IA",
    excerpt: "Analyse détaillée de cinq success stories d'entreprises suisses ayant intégré avec succès l'intelligence artificielle...",
    date: "20 Mars 2025",
    author: "Amine Nueve",
    category: "Études de cas",
    image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "Les tendances IA à surveiller en 2026: ce qui va révolutionner votre secteur",
    excerpt: "Prédictions et analyses des technologies d'IA émergentes qui vont transformer le paysage des affaires dans les années à venir...",
    date: "5 Mars 2025",
    author: "Yohan Lahmani",
    category: "Tendances",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
  },
];

// Catégories pour le filtre
const categories = [
  "Toutes", "Stratégie IA", "Implémentation", "Éthique", "Formation", "Études de cas", "Tendances"
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
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-display font-bold text-gradient mb-6">
                Blog
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Articles sur l'IA appliquée aux entreprises, tendances et meilleures pratiques
              </p>
            </div>
            
            {/* Filtres de catégories */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-1.5 rounded-full transition-colors ${
                    category === "Toutes" 
                      ? "bg-mauve text-white" 
                      : "bg-white/5 text-white/80 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            {/* Grille d'articles */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article 
                  key={post.id}
                  className="glass-effect rounded-2xl overflow-hidden transition-all duration-300 card-hover"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3 py-1 bg-mauve/90 backdrop-blur-sm text-white text-xs rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center text-white/60 text-sm mb-3">
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.author}</span>
                    </div>
                    
                    <h3 className="text-xl font-display font-medium text-white mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-white/70 mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <a href={`/blog/${post.id}`} className="inline-flex items-center text-mauve hover:text-mauve-light transition-colors group">
                      <span className="underline-animation">Lire l'article</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </article>
              ))}
            </div>
            
            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex gap-2">
                <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 text-white/80 hover:bg-white/10 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-mauve text-white">1</button>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 text-white/80 hover:bg-white/10 hover:text-white transition-colors">2</button>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 text-white/80 hover:bg-white/10 hover:text-white transition-colors">3</button>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 text-white/80 hover:bg-white/10 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Section newsletter */}
        <section className="py-16 bg-[#0a0a10]">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto glass-effect rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-display font-bold text-white mb-4">
                Restez au courant des dernières tendances de l'IA
              </h2>
              <p className="text-white/70 mb-6">
                Inscrivez-vous à notre newsletter pour recevoir nos articles directement dans votre boîte mail.
              </p>
              
              <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-mauve transition-all"
                  required
                />
                <Button type="submit" variant="mauve">
                  S'abonner
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
