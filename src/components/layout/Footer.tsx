
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribed with:", { name, email });
    // Reset form
    setName("");
    setEmail("");
    // Show success message (in a real app, this would connect to a backend)
    alert("Merci pour votre abonnement!");
  };

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
                <Link to="/#audit-conseil" className="text-white/70 hover:text-white transition-colors">
                  Audit et conseil
                </Link>
              </li>
              <li>
                <Link to="/#formations" className="text-white/70 hover:text-white transition-colors">
                  Formations
                </Link>
              </li>
              <li>
                <Link to="/#solutions-ia" className="text-white/70 hover:text-white transition-colors">
                  Solutions IA
                </Link>
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
            <a href="mailto:contact@neuroswissai.ch" className="text-white/70 hover:text-white transition-colors mb-2">
              Email: contact@neuroswissai.ch
            </a>
            <p className="text-white/70 mb-2">Adresse: Genève, Suisse</p>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="border-t border-white/10 pt-8 pb-8">
          <div className="max-w-md mx-auto">
            <h4 className="text-white font-display text-center font-medium mb-4">
              Abonnez-vous à notre newsletter
            </h4>
            <form onSubmit={handleSubscribe} className="flex flex-col space-y-3">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Votre nom"
                  required
                  className="flex-1 px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-mauve transition-all"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Votre email"
                  required
                  className="flex-1 px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-mauve transition-all"
                />
              </div>
              <Button type="submit" variant="default" className="w-full">
                S'abonner
              </Button>
            </form>
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
