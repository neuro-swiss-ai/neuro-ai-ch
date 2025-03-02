
import { motion } from "framer-motion";
import { Search, Users, Lightbulb, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

interface ApproachStep {
  title: string;
  icon: JSX.Element;
  points: string[];
}

const ApproachSection = () => {
  const steps: ApproachStep[] = [
    {
      title: "Analyse des Besoins",
      icon: <Search className="h-8 w-8 text-mauve" />,
      points: [
        "Étude approfondie des objectifs et défis du client",
        "Évaluation des processus actuels",
        "Identification des points de friction et inefficacités",
        "Analyse des opportunités d'automatisation",
        "Étude de faisabilité et ROI potentiel"
      ]
    },
    {
      title: "Collaboration",
      icon: <Users className="h-8 w-8 text-mauve" />,
      points: [
        "Travail en co-création avec les équipes du client",
        "Définition des objectifs et KPIs",
        "Prototypage rapide et validation",
        "Formation continue et support"
      ]
    },
    {
      title: "Innovation",
      icon: <Lightbulb className="h-8 w-8 text-mauve" />,
      points: [
        "Intégration des dernières technologies IA",
        "Développement de solutions sur mesure",
        "Tests et optimisation continue",
        "Déploiement progressif et adaptatif"
      ]
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-[#0a0a10] to-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-mauve blur-[150px]"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full bg-mauve-dark blur-[150px]"></div>
        
        {/* Grid lines */}
        <div className="grid-lines w-full h-full">
          {Array.from({ length: 10 }).map((_, i) => (
            <div 
              key={i} 
              className="absolute h-px w-full bg-gradient-to-r from-transparent via-white/5 to-transparent"
              style={{ top: `${i * 10}%` }}
            />
          ))}
          {Array.from({ length: 10 }).map((_, i) => (
            <div 
              key={i} 
              className="absolute w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent"
              style={{ left: `${i * 10}%` }}
            />
          ))}
        </div>
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-display font-bold text-gradient mb-6">Notre Approche</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Une méthodologie éprouvée pour transformer votre entreprise avec l'IA
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="glass-effect rounded-2xl p-8 transition-all duration-300 card-hover h-full flex flex-col"
              variants={itemVariants}
            >
              <div className="mb-6 p-4 rounded-full w-16 h-16 flex items-center justify-center bg-white/5">
                {step.icon}
              </div>
              
              <h3 className="text-2xl font-display font-medium text-white mb-4">{step.title}</h3>
              
              <ul className="text-white/70 mb-8 space-y-3 flex-grow">
                {step.points.map((point, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="inline-block w-1 h-1 rounded-full bg-mauve mt-2 mr-2"></span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              
              <Button variant="outline" className="mt-auto group">
                <span>En savoir +</span>
                <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Animation for floating elements */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </section>
  );
};

export default ApproachSection;
