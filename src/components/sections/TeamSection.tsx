
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const TeamSection = () => {
  const navigate = useNavigate();
  
  const team = [
    {
      name: "Amine",
      title: "Chief Executive Officer",
      image: "/lovable-uploads/bd754d92-0a3c-4db1-83f7-8091455e7fe3.png",
      description: "Expert en IA et stratégie, Amine dirige notre vision d'entreprise avec plus de 10 ans d'expérience dans le domaine technologique."
    },
    {
      name: "Yousra",
      title: "Co-founder",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
      description: "Spécialiste en IA éthique et droits numériques, Yousra assure que nos solutions respectent les normes légales et éthiques les plus strictes."
    },
    {
      name: "Jude Moncam",
      title: "Chief Sales Officer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
      description: "Fort d'une expertise en développement commercial, Jude pilote notre croissance et développe des relations client durables."
    }
  ];

  return (
    <section id="team" className="py-20 bg-gradient-to-b from-[#0a0a10] to-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold text-gradient mb-6">Notre Équipe</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Des experts en IA passionnés par l'innovation et dédiés à la réussite de votre transformation digitale
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="glass-effect rounded-2xl overflow-hidden transition-all duration-300 hover:transform hover:scale-105">
              <div className="p-6">
                <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden border-4 border-mauve/30">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-display font-medium text-white text-center mb-1">{member.name}</h3>
                <p className="text-mauve text-center mb-4">{member.title}</p>
                <p className="text-white/70 text-center">{member.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={() => navigate('/about')}
            className="inline-flex items-center text-mauve hover:text-mauve-light transition-colors group"
          >
            <span className="underline-animation">En savoir plus sur notre équipe</span>
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
