import HeroSection from "@/components/sections/HeroSection";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TeamSection from "@/components/sections/TeamSection";
import Button from "@/components/ui/button";
import { useEffect } from "react";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      id: "audit-conseil",
      title: "Audit et conseil",
      description: "Nous analysons votre entreprise pour identifier les opportunités d'intégration de l'IA et vous conseillons sur les meilleures solutions adaptées à vos besoins.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-mauve" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
    },
    {
      id: "formations",
      title: "Formations",
      description: "Des formations sur mesure pour vos équipes afin qu'elles puissent maîtriser les outils d'IA et les intégrer efficacement dans vos processus métier.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-mauve" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
      )
    },
    {
      id: "solutions-ia",
      title: "Solutions IA",
      description: "Développement et implémentation de solutions d'IA personnalisées pour optimiser vos opérations, améliorer la prise de décision et accroître votre compétitivité.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-mauve" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background to-[#0a0a10]">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-display font-bold text-gradient mb-6">Nos Services</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Des solutions IA sur mesure pour répondre aux besoins spécifiques de votre entreprise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id}
              id={service.id}
              className="glass-effect rounded-2xl p-8 transition-all duration-300 card-hover"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-display font-medium text-white mb-3">{service.title}</h3>
              <p className="text-white/70 mb-6">{service.description}</p>
              <a href="/reservation" className="inline-flex items-center text-mauve hover:text-mauve-light transition-colors group">
                <span className="underline-animation">En savoir plus</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CtaSection = () => {
  return (
    <section className="py-24 bg-[#0a0a10] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-mauve blur-[150px]"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 rounded-full bg-mauve-dark blur-[150px]"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-display font-bold text-gradient mb-6">
            Prêt à transformer votre entreprise avec l'IA?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Réservez dès maintenant votre consultation gratuite d'une heure et découvrez comment l'IA peut révolutionner votre activité.
          </p>
          
          <a href="https://calendly.com/neuroai-ch/neuro-ai-interview">
            <Button variant="mauve" size="lg">
              Réservez votre consultation
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section className="py-16 bg-[#0a0a10]">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold text-gradient mb-6">Contactez-nous</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Prenez contact avec notre équipe pour discuter de vos besoins en IA et découvrir comment nous pouvons vous aider.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto glass-effect rounded-2xl p-8 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-display font-medium text-white mb-6">Nos coordonnées</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-mauve mr-3 mt-0.5" />
                  <div>
                    <p className="text-white">Rue du Prince 9, 1206 Genève, Switzerland</p>
                    <a 
                      href="https://maps.app.goo.gl/jHTE3sCaRPj4uBZt6"
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-mauve hover:text-mauve-light transition-colors underline-animation mt-1 inline-block"
                    >
                      Voir sur Google Maps
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-mauve mr-3" />
                  <a 
                    href="tel:+41795488967" 
                    className="text-white hover:text-white/80 transition-colors"
                  >
                    +41 79 548 89 67
                  </a>
                </div>
                
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-mauve mr-3" />
                  <a 
                    href="mailto:contact@neuro-ai.ch" 
                    className="text-white hover:text-white/80 transition-colors"
                  >
                    contact@neuro-ai.ch
                  </a>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-display font-medium text-white mb-6">Prenez rendez-vous</h3>
                <p className="text-white/70 mb-6">
                  Réservez une consultation gratuite d'une heure pour discuter de vos besoins en IA et découvrir comment nous pouvons vous aider.
                </p>
              </div>
              
              <div className="flex flex-col space-y-4">
                <a 
                  href="https://calendly.com/neuroai-ch/neuro-ai-interview"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button variant="mauve" className="w-full">
                    <span>Prendre rendez-vous</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
                
                <a 
                  href="https://wa.me/message/OFHBXHWDIADHA1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button variant="outline" className="w-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4 mr-2"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    <span>Nous contacter sur WhatsApp</span>
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FinalCtaSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#0a0a10] to-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-mauve blur-[150px]"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 rounded-full bg-mauve-dark blur-[150px]"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-display font-bold text-gradient mb-4">
            Transformez votre entreprise
          </h2>
          <h3 className="text-2xl font-display text-white/90 mb-6">
            Prêt à transformer votre entreprise avec l'IA ?
          </h3>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Contactez-nous pour découvrir comment nous pouvons vous aider à atteindre vos objectifs.
          </p>
          
          <a href="https://calendly.com/neuroai-ch/neuro-ai-interview">
            <Button variant="mauve" size="lg">
              Prendre rendez-vous
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <TeamSection />
        <ContactSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
