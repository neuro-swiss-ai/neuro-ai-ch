
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-[#0d0d12] to-black">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
            Prêt à découvrir comment nos Solutions IA 🇨🇭 peuvent transformer votre entreprise ?
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Contactez-nous dès aujourd'hui pour une consultation personnalisée.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://meetings.hubspot.com/jmonkam" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button variant="default" size="lg" className="w-full">
                <span>{t("reserve_call")}</span>
              </Button>
            </a>
            
            <a 
              href="https://wa.me/41795488967?text=Bonjour%20%2C%20j'aimerais%20en%20savoir%20plus%20sur%20vos%20services%20et%20solutions%20IA%20" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button variant="outline" size="lg" className="w-full border-white/20 bg-transparent hover:bg-white/10">
                <img 
                  src="/lovable-uploads/1171e234-27f1-418f-853d-19dcdb1e4338.png" 
                  alt="WhatsApp" 
                  className="mr-2 h-5 w-5" 
                />
                <span>{t("contact_whatsapp")}</span>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
