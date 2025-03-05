
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Instagram, Linkedin, MessageCircle, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0d0d12] pt-16 pb-8 border-t border-white/10">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Services Column */}
          <div className="flex flex-col">
            <h3 className="text-white font-display text-lg font-medium mb-6">Nos services</h3>
            <ul className="space-y-3">
              <li>
                <a href="/#audit-conseil" className="text-white/70 hover:text-white transition-colors">
                  Audit et conseil
                </a>
              </li>
              <li>
                <a href="/#formations" className="text-white/70 hover:text-white transition-colors">
                  Formations
                </a>
              </li>
              <li>
                <a href="/#solutions-ia" className="text-white/70 hover:text-white transition-colors">
                  Solutions IA
                </a>
              </li>
            </ul>
          </div>

          {/* Blog Column */}
          <div className="flex flex-col">
            <h3 className="text-white font-display text-lg font-medium mb-6">Blog</h3>
            <Link to="/blog" className="text-white/70 hover:text-white transition-colors mb-3">
              Articles sur l'IA appliquée aux entreprises
            </Link>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col">
            <h3 className="text-white font-display text-lg font-medium mb-6">Contact</h3>
            <div className="space-y-3">
              <a href="mailto:Sales@neuroswissai.com" className="text-white/70 hover:text-white transition-colors flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                Sales@neuroswissai.com
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
                href="https://wa.me/message/OFHBXHWDIADHA1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center mt-2 text-white/70 hover:text-white transition-colors"
              >
                <Button variant="outline" className="border-white/10 hover:border-white/20 bg-transparent text-white">
                  <MessageCircle className="h-4 w-4 mr-2 text-green-500" /> Contactez-nous dès maintenant sur WhatsApp
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
            Copyright © Neuro Swiss AI 2025 - 
            <Link to="/privacy" className="hover:text-white transition-colors ml-1">
              Politique de confidentialité
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
