
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "../ui/button";

interface Client {
  name: string;
  category: string;
  description: string;
}

const TrustSection = () => {
  const clients: Client[] = [
    {
      name: "LexPro Suisse",
      category: "Étude d'avocat",
      description: "Optimisation des processus juridiques et automatisation de l'analyse documentaire."
    },
    {
      name: "Juridis Consulting",
      category: "Étude de notaire",
      description: "Digitalisation des archives notariales et automatisation des processus administratifs."
    },
    {
      name: "Alpine Machines",
      category: "Secteur industriel",
      description: "Automatisation des chaînes de production et maintenance prédictive."
    },
    {
      name: "Helvetic Steel",
      category: "Secteur industriel",
      description: "Optimisation de la production et contrôle qualité par IA."
    },
    {
      name: "Association Solidarité Genève",
      category: "ONG",
      description: "Analyse prédictive pour optimiser les collectes de fonds et mieux planifier les campagnes de dons."
    },
    {
      name: "Association Enfance et Avenir",
      category: "ONG",
      description: "Mise en place d'une IA pour analyser les besoins prioritaires des familles en difficulté."
    }
  ];

  const metrics = [
    { value: "10+", label: "Clients" },
    { value: "15+", label: "Projets réalisés" },
    { value: "50+", label: "Professionnels formés" }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
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
    <section className="py-24 bg-[#0a0a10] relative overflow-hidden">
      {/* Background elements - animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="particles-container">
          {Array.from({ length: 20 }).map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-mauve/5"
              style={{
                width: `${Math.random() * 8 + 2}px`,
                height: `${Math.random() * 8 + 2}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.1,
                animation: `float ${Math.random() * 10 + 10}s linear infinite`
              }}
            />
          ))}
        </div>
        {/* Gradient blobs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-mauve/10 blur-[120px]"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 rounded-full bg-mauve-dark/10 blur-[120px]"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-display font-bold text-gradient mb-6">Ils nous font confiance</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Des entreprises et organisations de divers secteurs nous font confiance pour leurs projets d'IA
          </p>
        </motion.div>

        {/* Clients grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {clients.map((client, index) => (
            <motion.div 
              key={index}
              className="glass-effect rounded-xl p-6 h-full transition-all duration-300 hover:translate-y-[-5px] hover:shadow-[0_10px_25px_-5px_rgba(155,135,245,0.1)]"
              variants={itemVariants}
            >
              <div className="border-b border-white/10 pb-2 mb-3">
                <h3 className="text-xl font-display font-medium text-white">{client.name}</h3>
                <p className="text-mauve text-sm">{client.category}</p>
              </div>
              <p className="text-white/70">{client.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Metrics */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {metrics.map((metric, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-xl glass-effect flex flex-col items-center"
            >
              <CheckCircle className="h-8 w-8 text-mauve mb-3" />
              <span className="text-3xl font-bold text-white mb-1">{metric.value}</span>
              <span className="text-white/70">{metric.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Custom animations for the background */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
          100% {
            transform: translateY(0) translateX(0);
          }
        }
      `}</style>
    </section>
  );
};

export default TrustSection;
