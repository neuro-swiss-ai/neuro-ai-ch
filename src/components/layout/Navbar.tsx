
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "../ui/button";
import ServicesDropdownMenu from "../sections/ServicesDropdownMenu";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showServicesMenu, setShowServicesMenu] = useState(false);
  const location = useLocation();
  const servicesRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { language, setLanguage, t } = useLanguage();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setShowServicesMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle hover events with delay to prevent flickering
  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setShowServicesMenu(true);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setShowServicesMenu(false);
    }, 300); // Small delay to allow moving to dropdown
  };

  // Ajouter un écouteur de scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle language
  const toggleLanguage = () => {
    setLanguage(language === "fr" ? "en" : "fr");
  };

  // Services dropdown items
  const servicesItems = [
    { title: t("ai_solutions"), path: "/solutions" },
    { title: t("audit_consulting"), path: "/audits" },
    { title: t("training"), path: "/formations" },
  ];

  // Menu items - with translations
  const menuItems = [
    { title: t("services"), path: "/#services", hasSubmenu: true },
    { title: "Nos Assistants IA", path: "/assistants", isNew: true },
    { title: t("blog"), path: "/blog" },
    { title: t("reservation"), path: "https://calendly.com/neuroai-ch/neuro-ai-interview", external: true },
    { title: t("about"), path: "/about" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isOpen ? "bg-black/80 backdrop-blur-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center">
          {/* Company Logo and Name */}
          <Link to="/" className="flex items-center group">
            <div className="mr-3">
              <img 
                src="/lovable-uploads/060aa247-724d-42e6-9ffa-74e7759daa18.png" 
                alt="Neuro Swiss AI Logo" 
                className="h-10 w-auto"
              />
            </div>
            <div className="relative font-display text-white font-semibold text-xl flex items-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                Neuro Swiss AI
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center">
            <ul className="flex space-x-8">
              {menuItems.map((item) => (
                <li key={item.title} className="relative">
                  {item.hasSubmenu ? (
                    <div 
                      ref={servicesRef}
                      className="relative"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <Link 
                        to={item.path} 
                        className="nav-link inline-flex items-center"
                      >
                        {item.title}
                        <ChevronDown className={`h-4 w-4 ml-1 transition-transform duration-200 ${showServicesMenu ? 'rotate-180' : ''}`} />
                      </Link>
                      
                      {/* Services dropdown menu */}
                      <div 
                        className="absolute top-full left-0"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        <ServicesDropdownMenu 
                          isOpen={showServicesMenu} 
                          items={servicesItems} 
                          onClose={() => setShowServicesMenu(false)} 
                        />
                      </div>
                    </div>
                  ) : item.external ? (
                    <a
                      href={item.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="nav-link"
                    >
                      {item.title}
                    </a>
                  ) : (
                    <Link
                      to={item.path}
                      className={`nav-link ${
                        location.pathname === item.path ? "text-white" : ""
                      }`}
                    >
                      <div className="relative flex items-center">
                        {item.title}
                        {item.isNew && (
                          <span className="ml-2 text-[10px] font-bold py-0.5 px-1.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full">
                            NEW
                          </span>
                        )}
                      </div>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <div className="ml-8 flex items-center space-x-4">
              <a href="https://wa.me/41795488967?text=Bonjour%20%2C%20j'aimerais%20en%20savoir%20plus%20sur%20vos%20services%20et%20solutions%20IA%20" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="border-white/20 bg-transparent text-white hover:bg-white/10">
                  <img 
                    src="/lovable-uploads/1171e234-27f1-418f-853d-19dcdb1e4338.png" 
                    alt="WhatsApp" 
                    className="h-4 w-4 mr-2" 
                  />
                  {t("whatsapp")}
                </Button>
              </a>
              <button 
                onClick={toggleLanguage}
                className="flex items-center justify-center px-3 py-1 bg-transparent border border-white/20 rounded-md text-white hover:bg-white/10 transition-all"
                aria-label="Toggle language"
              >
                {language === "fr" ? "English" : "FR"}
              </button>
            </div>
          </nav>

          {/* Mobile view: Language toggle and menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <a 
              href="https://wa.me/41795488967?text=Bonjour%20%2C%20j'aimerais%20en%20savoir%20plus%20sur%20vos%20services%20et%20solutions%20IA%20" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mr-1"
            >
              <img 
                src="/lovable-uploads/1171e234-27f1-418f-853d-19dcdb1e4338.png" 
                alt="WhatsApp" 
                className="h-5 w-5" 
              />
            </a>
            <button 
              onClick={toggleLanguage}
              className="flex items-center justify-center px-2 py-1 bg-transparent border border-white/20 rounded-md text-white hover:bg-white/10 transition-all"
              aria-label="Toggle language"
            >
              {language === "fr" ? "English" : "FR"}
            </button>
            
            <button 
              className="flex items-center justify-center"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden absolute w-full bg-black/90 backdrop-blur-md transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-[500px] border-t border-white/10" : "max-h-0"
        }`}
      >
        <div className="container-custom py-5">
          <ul className="flex flex-col space-y-4">
            {menuItems.map((item) => (
              <li key={item.title}>
                {item.hasSubmenu ? (
                  <div>
                    <button
                      onClick={() => setShowServicesMenu(!showServicesMenu)}
                      className="flex items-center justify-between w-full py-2 text-white hover:text-white/70 transition-colors"
                    >
                      <span>{item.title}</span>
                      <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${showServicesMenu ? 'rotate-180' : ''}`} />
                    </button>
                    
                    <div className={`pl-4 space-y-2 overflow-hidden transition-all duration-300 ${showServicesMenu ? 'max-h-48 mt-2' : 'max-h-0'}`}>
                      {servicesItems.map((service) => (
                        <Link
                          key={service.title}
                          to={service.path}
                          className="block py-2 text-white/80 hover:text-white transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : item.external ? (
                  <a
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-2 text-white hover:text-white/70 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </a>
                ) : (
                  <Link
                    to={item.path}
                    className={`block py-2 text-white hover:text-white/70 transition-colors ${
                      location.pathname === item.path ? "text-white font-medium" : "text-white/80"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="flex items-center">
                      {item.title}
                      {item.isNew && (
                        <span className="ml-2 text-[10px] font-bold py-0.5 px-1.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full">
                          NEW
                        </span>
                      )}
                    </div>
                  </Link>
                )}
              </li>
            ))}
            <li>
              <a 
                href="https://calendly.com/neuroai-ch/neuro-ai-interview" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mt-2"
                onClick={() => setIsOpen(false)}
              >
                <Button variant="default" size="sm">
                  {t("contact_us")}
                </Button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
