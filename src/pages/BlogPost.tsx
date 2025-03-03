
import { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Mock data for blog posts (same as in Blog.tsx)
const blogPosts = [
  {
    id: "1",
    title: "Comment l'IA générative transforme le service client",
    summary: "Découvrez comment les entreprises utilisent l'IA générative pour améliorer l'expérience client et optimiser leurs opérations de support.",
    date: "15 Mai 2023",
    imageUrl: "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    category: "Technologies",
    content: `
      <h2>L'évolution du service client à l'ère de l'IA</h2>
      <p>Le service client a considérablement évolué ces dernières années, passant des centres d'appels traditionnels à des solutions omnicanales intégrant de plus en plus l'intelligence artificielle. L'IA générative, en particulier, représente une avancée majeure dans la façon dont les entreprises interagissent avec leurs clients.</p>
      
      <p>Contrairement aux anciens chatbots basés sur des règles prédéfinies, les solutions d'IA générative comme ChatGPT ou Claude peuvent comprendre le contexte d'une conversation, interpréter des demandes complexes et fournir des réponses personnalisées qui semblent naturelles et pertinentes.</p>
      
      <h2>Les applications concrètes dans le service client</h2>
      <p>Voici comment les entreprises utilisent aujourd'hui l'IA générative pour transformer leur service client :</p>
      
      <ul>
        <li>Assistance 24/7 capable de traiter des demandes complexes sans intervention humaine</li>
        <li>Analyse en temps réel des émotions du client pour adapter le ton et proposer des solutions appropriées</li>
        <li>Personnalisation poussée des réponses en fonction de l'historique complet du client</li>
        <li>Génération automatique de résumés de conversation pour les agents humains</li>
        <li>Création de contenu d'aide contextuel adapté aux problèmes spécifiques rencontrés</li>
      </ul>
      
      <h2>Résultats et bénéfices mesurables</h2>
      <p>Les entreprises qui ont intégré l'IA générative dans leur service client rapportent des améliorations significatives :</p>
      
      <p>Une grande entreprise de télécommunications a pu réduire de 35% le temps de résolution des problèmes tout en augmentant de 28% la satisfaction client. Un e-commerçant a diminué de 45% le nombre de tickets escaladés aux agents humains grâce à une IA capable de résoudre des problèmes plus complexes.</p>
      
      <h2>Les défis de l'implémentation</h2>
      <p>Malgré ces avantages, l'intégration de l'IA générative présente certains défis :</p>
      
      <p>La qualité des données d'entraînement est cruciale pour éviter les biais et les réponses inappropriées. Un équilibre doit être trouvé entre automatisation et intervention humaine, particulièrement pour les situations délicates. La transparence avec les clients sur l'utilisation de l'IA reste également un enjeu important.</p>
      
      <h2>Vers un service client augmenté</h2>
      <p>L'avenir du service client ne réside pas dans le remplacement complet des humains par l'IA, mais plutôt dans une collaboration efficace. Les agents humains se concentrent sur les interactions à forte valeur ajoutée nécessitant empathie et jugement, tandis que l'IA gère les demandes routinières et fournit aux agents des informations pertinentes en temps réel.</p>
      
      <p>Cette approche "d'intelligence augmentée" permet d'offrir une expérience client exceptionnelle tout en optimisant les ressources de l'entreprise.</p>
    `
  },
  {
    id: "2",
    title: "L'automatisation des processus RH grâce à l'IA",
    summary: "Les services des ressources humaines peuvent grandement bénéficier de l'IA pour simplifier le recrutement, l'onboarding et la gestion administrative.",
    date: "2 Avril 2023",
    imageUrl: "https://images.unsplash.com/photo-1573164574511-73c773193279?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    category: "Business",
    content: `
      <h2>Transformation digitale des RH : enjeux et opportunités</h2>
      <p>Les départements RH font face à des défis croissants : recruter les meilleurs talents dans un marché compétitif, offrir une expérience candidat et collaborateur optimale, et gérer efficacement un volume important de tâches administratives. L'intelligence artificielle offre aujourd'hui des solutions concrètes pour répondre à ces défis.</p>
      
      <h2>Recrutement assisté par IA</h2>
      <p>Le recrutement est l'un des domaines RH où l'IA apporte le plus de valeur :</p>
      
      <ul>
        <li>Analyse des CV et présélection des candidats grâce au traitement du langage naturel</li>
        <li>Chatbots de recrutement qui répondent aux questions des candidats et évaluent leur adéquation</li>
        <li>Planification automatisée des entretiens en fonction des disponibilités des recruteurs</li>
        <li>Analyse vidéo des entretiens pour identifier les traits de personnalité et compétences</li>
      </ul>
      
      <p>Ces technologies permettent non seulement de gagner du temps, mais aussi d'élargir le vivier de talents et de réduire les biais inconscients dans le processus de sélection.</p>
      
      <h2>Onboarding et formation</h2>
      <p>L'intégration des nouveaux collaborateurs bénéficie également de l'IA :</p>
      
      <ul>
        <li>Assistants virtuels personnalisés qui guident les nouveaux employés</li>
        <li>Systèmes de recommandation de formation basés sur le profil et les objectifs</li>
        <li>Planification automatique des rencontres avec les membres clés de l'équipe</li>
        <li>Analyse des progrès et ajustement des parcours d'intégration</li>
      </ul>
      
      <h2>Gestion administrative et analytics RH</h2>
      <p>L'IA transforme également la gestion quotidienne des RH :</p>
      
      <ul>
        <li>Automatisation du traitement des documents et formulaires administratifs</li>
        <li>Chatbots RH pour répondre aux questions courantes des employés</li>
        <li>Analyse prédictive du turnover et identification des facteurs de rétention</li>
        <li>Tableaux de bord dynamiques sur l'engagement et la satisfaction des employés</li>
      </ul>
      
      <h2>Mise en œuvre réussie : facteurs clés</h2>
      <p>Pour réussir l'implémentation de l'IA dans les processus RH, plusieurs facteurs sont essentiels :</p>
      
      <ul>
        <li>Impliquer les équipes RH dans la sélection et la configuration des outils</li>
        <li>Former les utilisateurs et communiquer clairement sur les objectifs</li>
        <li>Veiller à la conformité RGPD et à l'éthique dans le traitement des données</li>
        <li>Adopter une approche progressive et mesurer les résultats</li>
      </ul>
      
      <p>L'IA n'est pas destinée à remplacer les professionnels RH, mais à les libérer des tâches répétitives pour qu'ils puissent se concentrer sur l'humain et la stratégie, là où leur valeur ajoutée est la plus grande.</p>
    `
  },
  {
    id: "3",
    title: "Les défis de l'éthique dans le développement d'IA en 2023",
    summary: "Quels sont les enjeux éthiques auxquels font face les développeurs et utilisateurs d'IA aujourd'hui et comment les entreprises peuvent y répondre.",
    date: "18 Mars 2023",
    imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    category: "Éthique",
    content: `
      <h2>L'éthique : un impératif pour l'IA de confiance</h2>
      <p>À mesure que l'intelligence artificielle s'intègre dans tous les aspects de notre vie professionnelle et personnelle, les questions éthiques prennent une importance cruciale. En 2023, ces enjeux ne sont plus secondaires mais constituent un élément central dans la conception, le développement et le déploiement des systèmes d'IA.</p>
      
      <h2>Les principaux défis éthiques actuels</h2>
      
      <h3>Biais et discrimination algorithmique</h3>
      <p>Les modèles d'IA reflètent souvent les biais présents dans leurs données d'entraînement. Par exemple, des systèmes de recrutement ont montré des biais de genre, et des algorithmes de justice prédictive ont présenté des biais raciaux. En 2023, la détection et l'atténuation de ces biais restent un défi majeur, d'autant plus que certains sont subtils et difficiles à identifier.</p>
      
      <h3>Transparence et explicabilité</h3>
      <p>Les modèles d'IA complexes, notamment les réseaux de neurones profonds, fonctionnent souvent comme des "boîtes noires" dont les décisions sont difficiles à expliquer. Cette opacité pose problème lorsque ces systèmes prennent des décisions importantes affectant la vie des individus, comme l'octroi de crédits ou le diagnostic médical.</p>
      
      <h3>Confidentialité et protection des données</h3>
      <p>L'IA nécessite d'importantes quantités de données pour son apprentissage, ce qui soulève des préoccupations concernant la vie privée. La collecte, le stockage et l'utilisation éthiques des données personnelles constituent un enjeu majeur, particulièrement avec le développement des modèles d'IA générative capables de créer du contenu à partir de données existantes.</p>
      
      <h3>Responsabilité et gouvernance</h3>
      <p>Qui est responsable lorsqu'un système d'IA cause un préjudice ? Le développeur, l'entreprise qui le déploie, ou l'utilisateur final ? Cette question de responsabilité reste souvent floue dans les cadres juridiques actuels, créant une zone grise préoccupante.</p>
      
      <h2>Stratégies pour une IA éthique</h2>
      <p>Face à ces défis, les entreprises et organisations adoptent diverses approches :</p>
      
      <ul>
        <li>Mise en place d'équipes multidisciplinaires incluant des éthiciens, juristes et sociologues</li>
        <li>Développement de frameworks d'évaluation des risques éthiques</li>
        <li>Audits réguliers des systèmes d'IA pour détecter les biais</li>
        <li>Documentation transparente des modèles et de leurs limitations</li>
        <li>Adoption de principes d'IA responsable comme ceux proposés par l'OCDE ou l'UE</li>
      </ul>
      
      <h2>Le rôle des réglementations</h2>
      <p>L'année 2023 marque un tournant dans la régulation de l'IA, avec l'avancement du règlement européen sur l'IA (AI Act) qui propose une approche basée sur les risques. D'autres juridictions développent également leurs cadres réglementaires, créant un paysage complexe pour les entreprises opérant à l'international.</p>
      
      <h2>Vers une culture de l'IA éthique</h2>
      <p>Au-delà des outils et des réglementations, le développement d'une IA éthique nécessite un changement culturel. Les entreprises leaders intègrent désormais l'éthique dès la conception (ethics by design) et forment leurs équipes à identifier et résoudre les problèmes éthiques.</p>
      
      <p>En fin de compte, l'éthique n'est pas un frein à l'innovation en IA mais plutôt un catalyseur pour des technologies plus robustes, équitables et durables, qui génèrent une confiance accrue des utilisateurs.</p>
    `
  },
  {
    id: "4",
    title: "Comment débuter avec ChatGPT pour votre entreprise",
    summary: "Un guide pratique pour intégrer ChatGPT et d'autres modèles de langage dans vos processus d'entreprise et maximiser leur potentiel.",
    date: "5 Février 2023",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    category: "Guide pratique",
    content: `
      <h2>ChatGPT et les grands modèles de langage : une révolution pour les entreprises</h2>
      <p>Depuis son lancement, ChatGPT a capté l'attention du monde entier et transformé notre perception de ce que l'IA peut accomplir. Pour les entreprises, cette technologie représente bien plus qu'un simple outil de conversation : c'est un véritable assistant polyvalent capable d'accélérer de nombreux processus métier.</p>
      
      <h2>Les cas d'usage professionnels de ChatGPT</h2>
      <p>Voici quelques façons dont les entreprises peuvent tirer parti de ChatGPT et des modèles similaires :</p>
      
      <h3>Création de contenu</h3>
      <ul>
        <li>Rédaction et amélioration de communications (emails, rapports, présentations)</li>
        <li>Génération d'idées et d'ébauches pour le marketing de contenu</li>
        <li>Traduction et adaptation culturelle de documents</li>
      </ul>
      
      <h3>Service client</h3>
      <ul>
        <li>Réponses automatisées aux questions fréquentes</li>
        <li>Génération de réponses personnalisées que les agents peuvent ajuster</li>
        <li>Création de FAQ et bases de connaissances</li>
      </ul>
      
      <h3>Productivité personnelle</h3>
      <ul>
        <li>Résumé de longs documents ou d'échanges d'emails</li>
        <li>Brainstorming et résolution de problèmes</li>
        <li>Préparation de réunions et prise de notes</li>
      </ul>
      
      <h3>Analyse de données</h3>
      <ul>
        <li>Formulation de requêtes SQL à partir de questions en langage naturel</li>
        <li>Interprétation et explication de données</li>
        <li>Génération de rapports narratifs à partir de données structurées</li>
      </ul>
      
      <h2>Comment débuter : étapes pratiques</h2>
      
      <h3>1. Explorer et expérimenter</h3>
      <p>Commencez par vous familiariser avec les capacités de base de ChatGPT en utilisant la version gratuite. Testez différentes formulations de prompts et observez comment les réponses varient. Cette phase d'exploration vous permettra de mieux comprendre le potentiel et les limites de l'outil.</p>
      
      <h3>2. Identifier les opportunités dans votre entreprise</h3>
      <p>Analysez vos processus actuels pour identifier où ChatGPT pourrait apporter le plus de valeur :</p>
      <ul>
        <li>Quelles tâches répétitives consomment du temps précieux ?</li>
        <li>Où se trouvent les goulots d'étranglement dans la communication ?</li>
        <li>Quelles activités pourraient bénéficier d'une assistance créative ?</li>
      </ul>
      
      <h3>3. Développer des prompts efficaces</h3>
      <p>La qualité des résultats dépend fortement de la façon dont vous formulez vos requêtes (prompts). Créez une bibliothèque de prompts testés et optimisés pour vos cas d'usage spécifiques. N'hésitez pas à être précis dans vos instructions et à fournir des exemples du résultat attendu.</p>
      
      <h3>4. Intégrer dans vos flux de travail</h3>
      <p>Pour une utilisation plus avancée, envisagez de passer à ChatGPT Plus ou d'utiliser l'API pour intégrer cette technologie dans vos applications et flux de travail existants. Des connecteurs sont disponibles pour de nombreux outils professionnels courants.</p>
      
      <h3>5. Former vos équipes</h3>
      <p>Organisez des sessions de formation pour montrer à vos équipes comment utiliser efficacement ChatGPT. Partagez les meilleures pratiques et encouragez le partage des prompts efficaces au sein de l'organisation.</p>
      
      <h2>Bonnes pratiques et considérations</h2>
      
      <h3>Sécurité et confidentialité</h3>
      <p>Soyez prudent avec les informations sensibles. Ne partagez pas de données confidentielles ou personnelles avec ChatGPT, sauf si vous utilisez des solutions d'entreprise avec des garanties appropriées.</p>
      
      <h3>Vérification humaine</h3>
      <p>ChatGPT peut parfois générer des informations inexactes ou "halluciner" des réponses. Une vérification humaine reste nécessaire, particulièrement pour les communications externes ou les contenus importants.</p>
      
      <h3>Mise à jour régulière</h3>
      <p>Les modèles d'IA évoluent rapidement. Restez informé des nouvelles fonctionnalités et améliorez régulièrement vos prompts et processus.</p>
      
      <p>En suivant ces conseils, votre entreprise pourra rapidement tirer parti de ChatGPT comme un multiplicateur de productivité et un catalyseur d'innovation.</p>
    `
  },
  {
    id: "5",
    title: "Intelligence artificielle en Suisse : état des lieux et perspectives",
    summary: "Analyse de l'adoption de l'IA dans les entreprises suisses, des secteurs les plus avancés et des opportunités à saisir.",
    date: "12 Janvier 2023",
    imageUrl: "https://images.unsplash.com/photo-1519452575417-564c1401ecc0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    category: "Analyse",
    content: `
      <h2>La Suisse : un écosystème IA en pleine expansion</h2>
      <p>La Suisse s'est positionnée comme un acteur important dans le domaine de l'intelligence artificielle, combinant excellence académique, innovation entrepreneuriale et cadre réglementaire stable. Cet article dresse un panorama de l'adoption de l'IA dans le paysage économique suisse et identifie les tendances émergentes.</p>
      
      <h2>État actuel de l'adoption de l'IA</h2>
      <p>Selon une étude récente, environ 35% des entreprises suisses utilisent déjà l'IA sous une forme ou une autre, avec une forte disparité selon la taille et le secteur :</p>
      
      <ul>
        <li>Les grandes entreprises (250+ employés) sont en tête avec un taux d'adoption de 54%</li>
        <li>Les PME (10-249 employés) suivent avec 31%</li>
        <li>Les micro-entreprises restent à 18%, mais montrent une progression rapide</li>
      </ul>
      
      <h2>Secteurs à la pointe</h2>
      
      <h3>Finance et assurance</h3>
      <p>Sans surprise, le secteur financier est en première ligne de l'adoption de l'IA, avec des applications allant de la détection de fraudes à l'analyse de risques et aux services de conseil automatisés (robo-advisors). Les banques privées genevoises, en particulier, utilisent l'IA pour personnaliser la gestion de patrimoine.</p>
      
      <h3>Pharma et sciences de la vie</h3>
      <p>Le pôle bâlois des sciences de la vie exploite l'IA pour accélérer la découverte de médicaments, optimiser les essais cliniques et améliorer les processus de fabrication. Des entreprises comme Roche et Novartis ont réalisé d'importants investissements dans ce domaine.</p>
      
      <h3>Industrie de précision</h3>
      <p>L'industrie horlogère et la mécanique de précision intègrent l'IA pour le contrôle qualité, la maintenance prédictive et l'optimisation des chaînes de production. Ces applications permettent de maintenir l'excellence suisse dans ces secteurs traditionnels.</p>
      
      <h2>Défis spécifiques au contexte suisse</h2>
      
      <h3>Multilinguisme</h3>
      <p>La diversité linguistique suisse (allemand, français, italien, romanche) pose des défis particuliers pour les applications d'IA basées sur le traitement du langage naturel. Des solutions adaptées au contexte local sont nécessaires.</p>
      
      <h3>Protection des données</h3>
      <p>La Suisse a une forte tradition de protection de la vie privée et des données. Les entreprises doivent naviguer entre innovation et respect de normes strictes, ce qui peut parfois ralentir l'adoption de certaines technologies.</p>
      
      <h3>Pénurie de talents</h3>
      <p>Malgré l'excellence des institutions comme l'EPFL, l'ETHZ ou l'IDSIA, la demande en spécialistes de l'IA dépasse largement l'offre, créant une concurrence intense pour attirer les talents.</p>
      
      <h2>Initiatives et écosystème suisse</h2>
      <p>La Suisse dispose d'atouts significatifs pour développer son écosystème IA :</p>
      
      <ul>
        <li>Les pôles d'innovation comme le Trust Valley (Lausanne-Genève) et le AI+X à Zurich</li>
        <li>Le programme national de recherche "Big Data" (PNR 75)</li>
        <li>Les initiatives comme digitalswitzerland qui fédèrent les acteurs publics et privés</li>
        <li>Un cadre réglementaire pragmatique qui encourage l'innovation responsable</li>
      </ul>
      
      <h2>Perspectives et opportunités</h2>
      <p>Pour les entreprises suisses, plusieurs opportunités se dessinent :</p>
      
      <h3>IA éthique et de confiance</h3>
      <p>La réputation suisse de neutralité, de fiabilité et de qualité constitue un avantage compétitif pour développer des solutions d'IA éthiques et transparentes, particulièrement attractives dans des secteurs sensibles.</p>
      
      <h3>Spécialisation verticale</h3>
      <p>Plutôt que de concurrencer les géants technologiques sur des solutions génériques, les entreprises suisses ont intérêt à se concentrer sur des solutions IA hautement spécialisées pour des industries où le pays excelle déjà.</p>
      
      <h3>Collaboration public-privé</h3>
      <p>Les partenariats entre recherche académique, industrie et secteur public offrent des opportunités uniques pour développer et déployer des solutions IA innovantes répondant à des défis sociétaux.</p>
      
      <p>L'IA en Suisse reflète les valeurs du pays : précision, qualité, fiabilité et innovation responsable. En capitalisant sur ces atouts, les entreprises suisses sont bien positionnées pour se distinguer dans un marché mondial de l'IA de plus en plus compétitif.</p>
    `
  }
];

const BlogPost = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find(post => post.id === postId);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [postId]);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24">
          <div className="container-custom py-16">
            <Link to="/blog" className="inline-flex items-center text-mauve hover:text-mauve-light transition-colors mb-8 group">
              <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform duration-300" />
              <span>Retour au blog</span>
            </Link>
            <div className="text-center">
              <h1 className="text-4xl font-display font-bold text-white mb-6">Article non trouvé</h1>
              <p className="text-white/70 mb-8">L'article que vous recherchez n'existe pas ou a été supprimé.</p>
              <button 
                onClick={() => navigate('/blog')}
                className="px-6 py-2 bg-mauve hover:bg-mauve-light text-white rounded-md transition-colors"
              >
                Voir tous les articles
              </button>
            </div>
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
        <section className="py-16 bg-gradient-to-b from-background to-[#0a0a10]">
          <div className="container-custom relative max-w-4xl">
            {/* Bouton de retour */}
            <Link to="/blog" className="inline-flex items-center text-mauve hover:text-mauve-light transition-colors mb-8 group">
              <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform duration-300" />
              <span>Retour au blog</span>
            </Link>
            
            <div className="mb-8">
              <span className="inline-block text-sm font-medium text-mauve px-3 py-1 bg-mauve/10 rounded-full mb-4">
                {post.category}
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">{post.title}</h1>
              <p className="text-white/60">{post.date}</p>
            </div>
            
            <div className="rounded-2xl overflow-hidden mb-10">
              <img 
                src={post.imageUrl} 
                alt={post.title} 
                className="w-full h-64 md:h-80 object-cover"
              />
            </div>
            
            <div className="prose prose-lg prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
            
            <div className="mt-16 pt-8 border-t border-white/10">
              <h3 className="text-xl font-display font-medium text-white mb-6">Articles similaires</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {blogPosts
                  .filter(p => p.id !== post.id)
                  .slice(0, 2)
                  .map(relatedPost => (
                    <Link to={`/blog/${relatedPost.id}`} key={relatedPost.id} className="group">
                      <div className="glass-effect rounded-xl overflow-hidden transition-all duration-300 hover:scale-105">
                        <div className="h-40 overflow-hidden">
                          <img 
                            src={relatedPost.imageUrl} 
                            alt={relatedPost.title} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                        <div className="p-4">
                          <h4 className="text-lg font-display font-medium text-white mb-2">{relatedPost.title}</h4>
                          <p className="text-white/60 text-sm">{relatedPost.date}</p>
                        </div>
                      </div>
                    </Link>
                  ))
                }
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
