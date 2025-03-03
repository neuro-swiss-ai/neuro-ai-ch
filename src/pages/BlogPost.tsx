
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

const blogPosts = {
  "impact-ia-entreprises": {
    title: "L'impact de l'IA sur les PME suisses en 2025",
    date: "15 avril 2025",
    readTime: "5 min de lecture",
    imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
    content: `
      <p>L'intelligence artificielle est en train de révolutionner le paysage économique suisse, transformant la manière dont les petites et moyennes entreprises fonctionnent au quotidien. Selon une étude récente, plus de 60% des PME suisses ont déjà intégré une forme d'IA dans leurs processus d'affaires.</p>
      
      <h2>Les principaux domaines d'application</h2>
      <p>Les PME suisses utilisent principalement l'IA dans les domaines suivants :</p>
      <ul>
        <li>Service client et support (chatbots, assistants virtuels)</li>
        <li>Optimisation des processus internes</li>
        <li>Analyse de données et business intelligence</li>
        <li>Marketing personnalisé et ciblage client</li>
      </ul>
      
      <h2>Les avantages constatés</h2>
      <p>Les entreprises ayant adopté l'IA rapportent plusieurs avantages significatifs :</p>
      <ul>
        <li>Augmentation de la productivité de 23% en moyenne</li>
        <li>Réduction des coûts opérationnels de 15 à 30%</li>
        <li>Amélioration de l'expérience client mesurée à +42% de satisfaction</li>
        <li>Capacité accrue à traiter des volumes importants de données</li>
      </ul>
      
      <h2>Les défis de l'adoption</h2>
      <p>Malgré ces avantages, l'intégration de l'IA présente encore des défis pour les PME suisses :</p>
      <ul>
        <li>Coût initial d'implémentation</li>
        <li>Manque d'expertise interne</li>
        <li>Préoccupations concernant la protection des données</li>
        <li>Résistance au changement de la part des employés</li>
      </ul>
      
      <p>C'est dans ce contexte que des entreprises comme Neuro Swiss AI jouent un rôle crucial, en accompagnant les PME dans leur transformation digitale et en proposant des solutions adaptées à leurs besoins spécifiques.</p>
      
      <h2>Conclusion</h2>
      <p>L'IA n'est plus réservée aux grandes entreprises disposant de ressources importantes. Aujourd'hui, les PME suisses peuvent également bénéficier de cette technologie pour rester compétitives et innovantes. L'avenir appartient aux entreprises qui sauront tirer parti de ces outils pour optimiser leurs opérations et proposer de meilleurs produits et services à leurs clients.</p>
    `
  },
  "agents-ia-personnalises": {
    title: "Agents IA personnalisés : révolution pour votre service client",
    date: "2 mars 2025",
    readTime: "7 min de lecture",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
    content: `
      <p>Dans un monde où l'expérience client est devenue un facteur déterminant de succès, les agents IA personnalisés s'imposent comme une solution révolutionnaire pour les entreprises souhaitant améliorer leur service client.</p>
      
      <h2>Qu'est-ce qu'un agent IA personnalisé ?</h2>
      <p>Un agent IA personnalisé est un assistant virtuel développé sur mesure pour répondre aux besoins spécifiques d'une entreprise. Contrairement aux chatbots génériques, ces agents sont formés avec les données propres à l'entreprise, lui permettant de:</p>
      <ul>
        <li>Comprendre le langage et la terminologie spécifique au secteur</li>
        <li>Maîtriser les processus et les produits de l'entreprise</li>
        <li>Adopter le ton et la personnalité de la marque</li>
        <li>S'adapter en continu grâce à l'apprentissage automatique</li>
      </ul>
      
      <h2>Les avantages pour votre service client</h2>
      <p>L'intégration d'agents IA personnalisés dans votre service client offre de nombreux avantages :</p>
      <ul>
        <li>Disponibilité 24/7, permettant de répondre aux clients à tout moment</li>
        <li>Capacité à gérer un grand volume de demandes simultanément</li>
        <li>Réduction du temps d'attente pour les clients</li>
        <li>Cohérence dans les réponses fournies</li>
        <li>Évolutivité sans augmentation proportionnelle des coûts</li>
      </ul>
      
      <h2>Comment Neuro Swiss AI peut vous aider</h2>
      <p>Chez Neuro Swiss AI, nous développons des agents IA personnalisés qui s'intègrent parfaitement à votre entreprise :</p>
      <ul>
        <li>Analyse approfondie de vos besoins et de vos données</li>
        <li>Développement sur mesure avec les technologies les plus avancées</li>
        <li>Formation continue et amélioration constante de l'agent</li>
        <li>Intégration harmonieuse avec vos systèmes existants</li>
        <li>Support et maintenance pour garantir des performances optimales</li>
      </ul>
      
      <h2>Cas d'utilisation concrets</h2>
      <p>Nos agents IA personnalisés sont utilisés dans divers contextes :</p>
      <ul>
        <li>Service client pour répondre aux questions fréquentes</li>
        <li>Assistance technique pour résoudre les problèmes courants</li>
        <li>Processus de vente pour guider les clients</li>
        <li>Support interne pour les employés</li>
      </ul>
      
      <p>En adoptant des agents IA personnalisés, votre entreprise peut offrir une expérience client exceptionnelle tout en optimisant ses ressources. Contactez-nous pour découvrir comment nous pouvons développer une solution adaptée à vos besoins spécifiques.</p>
    `
  },
  "ia-geneve-innovation": {
    title: "Genève, nouveau hub de l'innovation en IA",
    date: "12 février 2025",
    readTime: "6 min de lecture",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
    content: `
      <p>Ces dernières années, Genève s'est imposée comme l'un des centres les plus dynamiques d'Europe en matière d'intelligence artificielle. Cette transformation n'est pas le fruit du hasard, mais le résultat d'une combinaison unique de facteurs qui ont créé un écosystème propice à l'innovation.</p>
      
      <h2>Un environnement académique d'excellence</h2>
      <p>Genève bénéficie de la présence d'institutions académiques renommées :</p>
      <ul>
        <li>L'Université de Genève et son Centre Universitaire d'Informatique</li>
        <li>La proximité de l'EPFL et de son centre de recherche en IA</li>
        <li>Des programmes spécialisés en science des données et en IA</li>
        <li>Des partenariats internationaux avec les meilleures universités mondiales</li>
      </ul>
      
      <h2>Un écosystème de startups florissant</h2>
      <p>L'écosystème genevois de startups spécialisées en IA connaît une croissance remarquable :</p>
      <ul>
        <li>Plus de 120 startups actives dans le domaine de l'IA</li>
        <li>Des incubateurs et accélérateurs dédiés aux technologies avancées</li>
        <li>Un accès facilité au financement grâce à des investisseurs spécialisés</li>
        <li>Une communauté dynamique d'entrepreneurs et de développeurs</li>
      </ul>
      
      <h2>Un soutien institutionnel fort</h2>
      <p>Les autorités genevoises ont mis en place des initiatives stratégiques pour soutenir le développement de l'IA :</p>
      <ul>
        <li>Des programmes de financement dédiés à l'innovation</li>
        <li>Des infrastructures technologiques de pointe</li>
        <li>Un cadre réglementaire favorable au développement de nouvelles technologies</li>
        <li>Des collaborations public-privé pour stimuler la recherche et l'innovation</li>
      </ul>
      
      <h2>Une position stratégique internationale</h2>
      <p>La position de Genève comme centre international lui confère des avantages uniques :</p>
      <ul>
        <li>Présence de nombreuses organisations internationales intéressées par l'IA</li>
        <li>Un dialogue constant sur les enjeux éthiques et réglementaires de l'IA</li>
        <li>Une position de neutralité qui favorise les discussions internationales</li>
        <li>Un carrefour d'échanges entre l'Europe, les États-Unis et l'Asie</li>
      </ul>
      
      <p>Chez Neuro Swiss AI, nous sommes fiers de contribuer à ce dynamisme en développant des solutions innovantes depuis notre siège genevois. Notre ancrage local, combiné à notre vision globale, nous permet d'accompagner efficacement les entreprises dans leur transformation numérique.</p>
    `
  },
  "formation-ia-entreprise": {
    title: "Comment former vos équipes à l'IA ?",
    date: "5 janvier 2025",
    readTime: "8 min de lecture",
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
    content: `
      <p>L'intégration de l'intelligence artificielle dans votre entreprise ne se limite pas à l'adoption de nouvelles technologies – elle nécessite également une transformation culturelle et le développement de nouvelles compétences au sein de vos équipes.</p>
      
      <h2>Pourquoi former vos équipes à l'IA ?</h2>
      <p>Investir dans la formation de vos collaborateurs présente plusieurs avantages :</p>
      <ul>
        <li>Réduction de la résistance au changement</li>
        <li>Maximisation du retour sur investissement des solutions IA</li>
        <li>Développement d'une culture d'innovation</li>
        <li>Fidélisation des talents en leur offrant des compétences d'avenir</li>
        <li>Autonomie accrue dans l'utilisation des outils IA</li>
      </ul>
      
      <h2>Les compétences clés à développer</h2>
      <p>La formation à l'IA peut se décliner en plusieurs niveaux selon les profils et les besoins :</p>
      <ul>
        <li>Pour tous les collaborateurs : compréhension des concepts de base, utilisation des outils IA au quotidien</li>
        <li>Pour les managers : gestion de projets IA, compréhension des enjeux stratégiques</li>
        <li>Pour les équipes techniques : développement, implémentation et maintenance des solutions IA</li>
      </ul>
      
      <h2>Notre approche de formation</h2>
      <p>Chez Neuro Swiss AI, nous proposons des programmes de formation adaptés à chaque entreprise :</p>
      <ul>
        <li>Évaluation préalable des besoins et du niveau de maturité</li>
        <li>Conception de parcours personnalisés par métier</li>
        <li>Combinaison de théorie et de cas pratiques issus de votre contexte</li>
        <li>Suivi et accompagnement post-formation</li>
      </ul>
      
      <h2>Méthodes pédagogiques efficaces</h2>
      <p>Nos formations s'appuient sur des méthodes pédagogiques éprouvées :</p>
      <ul>
        <li>Ateliers pratiques en petits groupes</li>
        <li>Projets concrets appliqués à votre entreprise</li>
        <li>Coaching personnalisé</li>
        <li>Ressources en ligne pour un apprentissage continu</li>
        <li>Communauté d'apprenants pour partager les bonnes pratiques</li>
      </ul>
      
      <h2>Mesurer l'impact de la formation</h2>
      <p>Pour garantir l'efficacité de nos programmes, nous mettons en place des indicateurs de performance :</p>
      <ul>
        <li>Évaluation des compétences avant/après</li>
        <li>Suivi de l'utilisation des outils IA</li>
        <li>Mesure de l'impact sur la productivité et l'innovation</li>
        <li>Retours d'expérience des participants</li>
      </ul>
      
      <p>Former vos équipes à l'IA est un investissement stratégique qui vous permettra de tirer pleinement parti des opportunités offertes par cette technologie transformative. Contactez-nous pour élaborer ensemble un programme de formation adapté à vos besoins spécifiques.</p>
    `
  }
};

const BlogPost = () => {
  const { postId } = useParams<{ postId: string }>();
  const post = postId && blogPosts[postId as keyof typeof blogPosts];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24 flex items-center justify-center">
          <div className="container-custom text-center">
            <h1 className="text-3xl font-display font-bold text-white mb-6">Article non trouvé</h1>
            <Link to="/blog" className="text-mauve hover:text-mauve-light transition-colors underline">
              Retourner au blog
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Hero banner */}
        <div className="w-full h-[40vh] relative">
          <img 
            src={post.imageUrl} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
        </div>

        <div className="container-custom -mt-32 relative z-10">
          <Link to="/blog" className="inline-flex items-center text-mauve hover:text-mauve-light transition-colors mb-6 group">
            <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform duration-300" />
            <span>Retour au blog</span>
          </Link>

          <article className="max-w-3xl mx-auto glass-effect rounded-xl p-8 mb-20">
            <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              {post.title}
            </h1>
            
            <div className="flex items-center text-white/60 mb-8">
              <Calendar className="h-4 w-4 mr-1" />
              <span className="mr-4">{post.date}</span>
              <Clock className="h-4 w-4 mr-1" />
              <span>{post.readTime}</span>
            </div>
            
            <div 
              className="prose prose-invert prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
