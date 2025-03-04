
import { useNavigate } from "react-router-dom";
import { ArrowRight, Linkedin } from "lucide-react";

const TeamSection = () => {
  const navigate = useNavigate();
  
  const team = [
    {
      name: "Amine",
      title: "CEO & Co-Founder",
      image: "/lovable-uploads/bd754d92-0a3c-4db1-83f7-8091455e7fe3.png",
      description: "Expert en IA et stratégie, Amine dirige notre vision d'entreprise avec plus de 10 ans d'expérience dans le domaine technologique."
    },
    {
      name: "Yousra",
      title: "CLO & Co-Founder",
      image: "/lovable-uploads/7277b1f7-9b0a-4000-8aa0-3b39772c463d.png",
      description: "Spécialiste en IA éthique et droits numériques, Yousra assure que nos solutions respectent les normes légales et éthiques les plus strictes."
    },
    {
      name: "Jude Monkam",
      title: "Sales Director",
      image: "/lovable-uploads/1a17f98f-e020-42b2-ab7a-368014710077.png",
      linkedin: "https://www.linkedin.com/in/jude-monkam/",
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
                <p className="text-mauve text-center mb-2">{member.title}</p>
                {member.linkedin && (
                  <div className="flex justify-center mb-4">
                    <a 
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-mauve transition-colors"
                      aria-label={`${member.name}'s LinkedIn profile`}
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                )}
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
