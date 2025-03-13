
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-[#0d0d12] pt-16 pb-8 border-t border-white/10">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Services Column */}
          <div className="flex flex-col">
            <h3 className="text-white font-display text-lg font-medium mb-6">{t("our_services_footer")}</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/audits" className="text-white/70 hover:text-white transition-colors">
                  {t("audit_counsel")}
                </Link>
              </li>
              <li>
                <Link to="/formations" className="text-white/70 hover:text-white transition-colors">
                  {t("formations")}
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-white/70 hover:text-white transition-colors">
                  {t("ai_solutions_footer")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Assistants IA Column */}
          <div className="flex flex-col">
            <h3 className="text-white font-display text-lg font-medium mb-6">Nos Assistants IA</h3>
            <Link to="/assistants" className="text-white/70 hover:text-white transition-colors mb-3">
              Découvrez nos assistants spécialisés
            </Link>
          </div>

          {/* Blog Column */}
          <div className="flex flex-col">
            <h3 className="text-white font-display text-lg font-medium mb-6">{t("blog_footer")}</h3>
            <Link to="/blog" className="text-white/70 hover:text-white transition-colors mb-3">
              {t("blog_description")}
            </Link>
            <div className="mt-2">
              <p className="text-white/90 text-sm mb-2">Catégories:</p>
              <ul className="space-y-2">
                <li>
                  <Link to="/blog" className="text-white/70 hover:text-white transition-colors text-sm">
                    Automatisation d'offres
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-white/70 hover:text-white transition-colors text-sm">
                    Chatbot pour documentation technique
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col">
            <h3 className="text-white font-display text-lg font-medium mb-6">{t("contact")}</h3>
            <div className="space-y-3">
              <a href="mailto:contact@neuro-ai.ch" className="text-white/70 hover:text-white transition-colors flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                contact@neuro-ai.ch
              </a>
              <a href="tel:+41795488967" className="text-white/70 hover:text-white transition-colors flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                +41 79 548 89 67
              </a>
              <a 
                href="https://maps.app.goo.gl/jHTE3sCaRPj4uBZt6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors flex items-start"
              >
                <MapPin className="h-4 w-4 mr-2 mt-1 flex-shrink-0" />
                <span>Rue du Prince 9, 1206 Genève, Switzerland</span>
              </a>
              <a 
                href="https://wa.me/41795488967?text=Bonjour%20%2C%20j'aimerais%20en%20savoir%20plus%20sur%20vos%20services%20et%20solutions%20IA%20"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center mt-2 text-white/70 hover:text-white transition-colors"
              >
                <Button variant="outline" className="border-white/10 hover:border-white/20 bg-transparent text-white">
                  <img 
                    src="/lovable-uploads/1171e234-27f1-418f-853d-19dcdb1e4338.png" 
                    alt="WhatsApp" 
                    className="h-4 w-4 mr-2" 
                  />
                  {t("contact_whatsapp")}
                </Button>
              </a>
            </div>
            
            {/* Social Media Links */}
            <div className="flex items-center mt-4 space-x-4">
              <a 
                href="https://www.instagram.com/neuroswissai/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors group"
                aria-label="Instagram"
              >
                <div className="p-3 rounded-full bg-gradient-to-tr from-purple-600 via-pink-600 to-yellow-500">
                  <Instagram className="h-7 w-7 text-white group-hover:scale-110 transition-transform" />
                </div>
              </a>
              <a 
                href="https://www.linkedin.com/company/neuro-swiss-ai?_l=fr_FR" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors group"
                aria-label="LinkedIn"
              >
                <div className="p-3 rounded-full bg-[#0a66c2]">
                  <Linkedin className="h-7 w-7 text-white group-hover:scale-110 transition-transform" />
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/50 text-sm">
            {t("copyright")}
            <Link to="/privacy" className="hover:text-white transition-colors ml-1">
              {t("privacy_policy")}
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
