import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

interface Client {
  name: string;
  category: string;
  description: string;
  link?: string;
}

const TrustSection = () => {
  const controlsTitle = useAnimation();
  const refTitle = useRef(null);
  const controlsStats = useAnimation();
  const refStats = useRef(null);
  const controlsCards = useAnimation();
  const refCards = useRef(null);

  const clients: Client[] = [
    {
      name: "LexPro Suisse",
      category: "Étude d'avocat",
      description: "Optimisation des processus juridiques et automatisation de l'analyse documentaire.",
      link: "/solutions/legal-ai"
    },
    {
      name: "Juridis Consulting",
      category: "Étude de notaire",
      description: "Digitalisation des archives notariales et automatisation des processus administratifs.",
      link: "/solutions/notary-digitalization"
    },
    {
      name: "Alpine Machines",
      category: "Secteur industriel",
      description: "Automatisation des chaînes de production et maintenance prédictive.",
      link: "/solutions/industrial-automation"
    },
    {
      name: "Helvetic Steel",
      category: "Secteur industriel",
      description: "Optimisation de la production et contrôle qualité par IA.",
      link: "/solutions/production-optimization"
    },
    {
      name: "Association Solidarité Genève",
      category: "ONG",
      description: "Analyse prédictive pour optimiser les collectes de fonds et mieux planifier les campagnes de dons.",
      link: "/solutions/fundraising-optimization"
    },
    {
      name: "Association Enfance et Avenir",
      category: "ONG",
      description: "Mise en place d'une IA pour analyser les besoins prioritaires des familles en difficulté.",
      link: "/solutions/family-needs-analysis"
    }
  ];

  const stats = [
    { value: "10+", label: "Clients" },
    { value: "15+", label: "Projets réalisés" },
    { value: "50+", label: "Professionnels formés" }
  ];

  const cardVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const openProjectPage = (link: string) => {
    window.open(link, '_blank');
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 left-20 w-72 h-72 rounded-full bg-mauve/5 blur-[120px]"></div>
        <div className="absolute bottom-60 right-40 w-80 h-80 rounded-full bg-mauve/5 blur-[150px] float"></div>
        
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]">
        </div>
        
        <div className="absolute top-1/4 left-1/3 w-2 h-2 rounded-full bg-mauve/20 particle" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-2/3 w-3 h-3 rounded-full bg-mauve/20 particle" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-1/3 left-1/5 w-2 h-2 rounded-full bg-mauve/20 particle" style={{ animationDelay: '6s' }}></div>
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={controlsTitle}
          ref={refTitle}
        >
          <h2 className="text-4xl font-display font-bold text-gradient mb-6">Ils nous font confiance</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Des entreprises et organisations variées nous font confiance pour leurs projets d'IA
          </p>
        </motion.div>
        
        <motion.div 
          className="flex flex-wrap justify-center gap-12 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={controlsStats}
          ref={refStats}
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <h3 className="text-4xl font-display font-bold text-gradient-mauve mb-1">{stat.value}</h3>
              <p className="text-white/70">{stat.label}</p>
            </div>
          ))}
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {clients.map((client, index) => (
            <motion.div 
              key={index}
              ref={refCards}
              variants={cardVariant}
              initial="hidden"
              animate={controlsCards}
              custom={index}
              className="glass-effect rounded-2xl p-8 transition-all duration-300 card-hover"
            >
              <div className="mb-3">
                <span className="text-xs font-medium text-mauve/80 px-3 py-1 rounded-full bg-mauve/10">
                  {client.category}
                </span>
              </div>
              <h3 className="text-xl font-display font-medium text-white mb-3 cursor-pointer hover:text-mauve transition-colors" 
                  onClick={() => client.link && openProjectPage(client.link)}>
                {client.name}
              </h3>
              <p className="text-white/70 mb-4">{client.description}</p>
              <Button 
                variant="ghost" 
                className="text-mauve hover:text-mauve-light hover:bg-mauve/5 group p-0"
                onClick={() => client.link && openProjectPage(client.link)}
              >
                <span className="underline-animation">Voir le projet</span>
                <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .float {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes particle-float {
          0% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-30px) translateX(20px) rotate(180deg);
            opacity: 1;
          }
          100% {
            transform: translateY(-60px) translateX(0) rotate(360deg);
            opacity: 0;
          }
        }
        .particle {
          position: absolute;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          animation: particle-float 8s linear infinite;
        }
      `}} />
    </section>
  );
};

export default TrustSection;
