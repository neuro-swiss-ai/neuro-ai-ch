
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { motion, useAnimation, useInView } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const cardVariant = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.2,
      duration: 0.5,
      ease: "easeInOut",
    },
  }),
};

const ApproachSection = () => {
  const refTitle = useRef(null);
  const refCards = useRef(null);
  const controlsTitle = useAnimation();
  const controlsCards = useAnimation();
  const inViewTitle = useInView(refTitle);
  const inViewCards = useInView(refCards);
  const { language } = useLanguage();

  useEffect(() => {
    if (inViewTitle) {
      controlsTitle.start({ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } });
    }

    if (inViewCards) {
      controlsCards.start("visible");
    }
  }, [inViewTitle, inViewCards, controlsTitle, controlsCards]);

  return (
    <section className="py-24 bg-[#0a0a10] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-10 left-1/4 w-64 h-64 rounded-full bg-mauve/5 blur-[100px]"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 rounded-full bg-mauve/5 blur-[120px] float"></div>
        
        {/* Particles */}
        <div className="absolute top-1/3 left-1/2 w-3 h-3 rounded-full bg-mauve/20 particle" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-2/3 left-1/4 w-2 h-2 rounded-full bg-mauve/20 particle" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/4 right-1/3 w-4 h-4 rounded-full bg-mauve/20 particle" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-3 h-3 rounded-full bg-mauve/20 particle" style={{ animationDelay: '5s' }}></div>
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={controlsTitle}
          ref={refTitle}
        >
          <h2 className="text-4xl font-display font-bold text-gradient mb-6">
            {language === "en" ? "Our Approach" : "Notre Approche"}
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            {language === "en" 
              ? "A proven methodology to transform your business with AI"
              : "Une méthodologie éprouvée pour transformer votre entreprise avec l'IA"}
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Analysis Card */}
          <motion.div 
            ref={refCards}
            variants={cardVariant}
            initial="hidden"
            animate={controlsCards}
            custom={0}
            className="glass-effect rounded-2xl p-8 transition-all duration-300 card-hover"
          >
            <div className="w-14 h-14 mb-6 rounded-lg bg-mauve/10 flex items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 21H14C19 21 21 19 21 14V10C21 5 19 3 14 3H10C5 3 3 5 3 10V14C3 19 5 21 10 21Z" stroke="#9B87F5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16.5 16.5L12.9 14.5V8" stroke="#9B87F5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10.0001 16H8.5C8.09 16 7.75 15.66 7.75 15.25V13.75" stroke="#9B87F5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7.75 10.25V8.75C7.75 8.34 8.09 8 8.5 8H10.0001" stroke="#9B87F5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 10H14.5C14.09 10 13.75 9.66 13.75 9.25V7.75" stroke="#9B87F5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-xl font-display font-medium text-white mb-3">
              {language === "en" ? "Needs Analysis" : "Analyse des Besoins"}
            </h3>
            <ul className="text-white/70 mb-6 space-y-2">
              <li className="flex items-start">
                <span className="text-mauve mr-2">•</span>
                <span>
                  {language === "en" 
                    ? "In-depth study of client objectives and challenges"
                    : "Étude approfondie des objectifs et défis du client"}
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-mauve mr-2">•</span>
                <span>
                  {language === "en" 
                    ? "Evaluation of current processes"
                    : "Évaluation des processus actuels"}
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-mauve mr-2">•</span>
                <span>
                  {language === "en" 
                    ? "Identification of friction points and inefficiencies"
                    : "Identification des points de friction et inefficacités"}
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-mauve mr-2">•</span>
                <span>
                  {language === "en" 
                    ? "Analysis of automation opportunities"
                    : "Analyse des opportunités d'automatisation"}
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-mauve mr-2">•</span>
                <span>
                  {language === "en" 
                    ? "Feasibility study and potential ROI"
                    : "Étude de faisabilité et ROI potentiel"}
                </span>
              </li>
            </ul>
            <Button variant="outline" className="group">
              <span>
                {language === "en" ? "Learn more" : "En savoir +"}
              </span>
              <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </motion.div>
          
          {/* Collaboration Card */}
          <motion.div 
            variants={cardVariant}
            initial="hidden"
            animate={controlsCards}
            custom={1}
            className="glass-effect rounded-2xl p-8 transition-all duration-300 card-hover"
          >
            <div className="w-14 h-14 mb-6 rounded-lg bg-mauve/10 flex items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.16 10.87C9.06 10.86 8.94 10.86 8.83 10.87C6.45 10.79 4.56 8.84 4.56 6.44C4.56 3.99 6.54 2 9 2C11.45 2 13.44 3.99 13.44 6.44C13.43 8.84 11.54 10.79 9.16 10.87Z" stroke="#9B87F5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16.41 4C18.35 4 19.91 5.57 19.91 7.5C19.91 9.39 18.41 10.93 16.54 11C16.46 10.99 16.37 10.99 16.28 11" stroke="#9B87F5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4.16 14.56C1.74 16.18 1.74 18.82 4.16 20.43C6.91 22.27 11.42 22.27 14.17 20.43C16.59 18.81 16.59 16.17 14.17 14.56C11.43 12.73 6.92 12.73 4.16 14.56Z" stroke="#9B87F5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18.34 20C19.06 19.85 19.74 19.56 20.3 19.13C21.86 17.96 21.86 16.03 20.3 14.86C19.75 14.44 19.08 14.16 18.37 14" stroke="#9B87F5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-xl font-display font-medium text-white mb-3">
              {language === "en" ? "Collaboration" : "Collaboration"}
            </h3>
            <ul className="text-white/70 mb-6 space-y-2">
              <li className="flex items-start">
                <span className="text-mauve mr-2">•</span>
                <span>
                  {language === "en" 
                    ? "Co-creation work with client teams"
                    : "Travail en co-création avec les équipes du client"}
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-mauve mr-2">•</span>
                <span>
                  {language === "en" 
                    ? "Definition of objectives and KPIs"
                    : "Définition des objectifs et KPIs"}
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-mauve mr-2">•</span>
                <span>
                  {language === "en" 
                    ? "Rapid prototyping and validation"
                    : "Prototypage rapide et validation"}
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-mauve mr-2">•</span>
                <span>
                  {language === "en" 
                    ? "Continuous training and support"
                    : "Formation continue et support"}
                </span>
              </li>
            </ul>
            <Button variant="outline" className="group">
              <span>
                {language === "en" ? "Learn more" : "En savoir +"}
              </span>
              <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </motion.div>
          
          {/* Innovation Card */}
          <motion.div 
            variants={cardVariant}
            initial="hidden"
            animate={controlsCards}
            custom={2}
            className="glass-effect rounded-2xl p-8 transition-all duration-300 card-hover"
          >
            <div className="w-14 h-14 mb-6 rounded-lg bg-mauve/10 flex items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.9999 2V22" stroke="#9B87F5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17.9707 5.18C17.9707 3.42 17.2707 2.72 15.5107 2.72L8.51074 2.72C6.75074 2.72 6.05074 3.42 6.05074 5.18V18.82C6.05074 20.58 6.75074 21.28 8.51074 21.28H15.5007C17.2607 21.28 17.9607 20.58 17.9607 18.82V12.77" stroke="#9B87F5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14.5 7.01001L14.5 16.99" stroke="#9B87F5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9.5 7.01001L9.5 16.99" stroke="#9B87F5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-xl font-display font-medium text-white mb-3">
              {language === "en" ? "Innovation" : "Innovation"}
            </h3>
            <ul className="text-white/70 mb-6 space-y-2">
              <li className="flex items-start">
                <span className="text-mauve mr-2">•</span>
                <span>
                  {language === "en" 
                    ? "Integration of the latest AI technologies"
                    : "Intégration des dernières technologies IA"}
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-mauve mr-2">•</span>
                <span>
                  {language === "en" 
                    ? "Development of customized solutions"
                    : "Développement de solutions sur mesure"}
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-mauve mr-2">•</span>
                <span>
                  {language === "en" 
                    ? "Testing and continuous optimization"
                    : "Tests et optimisation continue"}
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-mauve mr-2">•</span>
                <span>
                  {language === "en" 
                    ? "Progressive and adaptive deployment"
                    : "Déploiement progressif et adaptatif"}
                </span>
              </li>
            </ul>
            <Button variant="outline" className="group">
              <span>
                {language === "en" ? "Learn more" : "En savoir +"}
              </span>
              <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </motion.div>
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

export default ApproachSection;
