
import { ArrowLeft, Flag } from "lucide-react";
import { Link } from "react-router-dom";

interface TeamMember {
  name: string;
  title: string;
  location: string;
  image: string;
  isFounder?: boolean;
}

const TeamSection = () => {
  const founders: TeamMember[] = [
    {
      name: "Amine Nueve",
      title: "COO & Co-founder",
      location: "Genève",
      image: "/lovable-uploads/821594a6-44e3-4d2c-884a-6cd3a84016af.png",
      isFounder: true,
    },
    {
      name: "Yohan Lahmani",
      title: "CEO & Co-founder",
      location: "Genève",
      // Updated Yohan's image to a younger-looking version
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
      isFounder: true,
    }
  ];

  const team: TeamMember[] = [
    {
      name: "Jude Monkam",
      title: "CSO Chief Sales Officer",
      location: "Genève",
      image: "/lovable-uploads/1665bc22-218f-4d16-b74a-9a4e0a81cdbc.png",
    },
    {
      name: "Sabine",
      title: "Directrice des Ressources Humaines",
      location: "Genève",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    },
    {
      name: "Bénédicte",
      title: "Spécialiste IA",
      location: "Zurich",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    },
    {
      name: "Aziz",
      title: "Développeur IA",
      location: "Zurich",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    },
    {
      name: "Imane",
      title: "Data Scientist",
      location: "Zurich",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    },
    {
      name: "Meryem",
      title: "Analyste IA",
      location: "Zurich",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    },
    {
      name: "Nada",
      title: "Chef de Projet IA",
      location: "Zurich",
      // Replaced with a more professional image
      image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    },
    {
      name: "Soumia",
      title: "Responsable Marketing IA",
      location: "Zurich",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    },
  ];

  return (
    <section className="py-20 bg-[#0a0a10]">
      <div className="container-custom relative">
        {/* Bouton de retour */}
        <Link to="/" className="inline-flex items-center text-mauve hover:text-mauve-light transition-colors mb-8 group">
          <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform duration-300" />
          <span>Retour</span>
        </Link>
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-gradient mb-6">Notre Équipe</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Une équipe de professionnels passionnés par l'IA et l'innovation, dédiée à la transformation numérique de votre entreprise.
          </p>
        </div>
        
        {/* Fondateurs */}
        <div className="mb-16">
          <h3 className="text-2xl font-display font-medium text-white mb-8 text-center">Fondateurs</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {founders.map((member, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center group"
              >
                <div className="relative overflow-hidden rounded-xl mb-6 transition-transform duration-500 group-hover:scale-[1.03]">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-56 h-56 object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h4 className="text-xl font-display font-medium text-white">{member.name}</h4>
                <p className="text-white/70">{member.title}</p>
                <p className="text-mauve text-sm">{member.location}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Reste de l'équipe */}
        <div>
          <h3 className="text-2xl font-display font-medium text-white mb-8 text-center">Notre Équipe</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {team.map((member, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center group card-hover"
              >
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-48 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h4 className="text-lg font-display font-medium text-white">{member.name}</h4>
                <p className="text-white/70 text-sm">{member.title}</p>
                <p className="text-mauve text-xs">{member.location}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
