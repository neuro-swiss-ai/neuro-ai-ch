
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Flag, MessageCircle } from "lucide-react";
import { Button } from "../ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isEnglish, setIsEnglish] = useState(false);
  const location = useLocation();

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
    setIsEnglish(!isEnglish);
    // In a real app, this would trigger a language change in the entire site
    console.log(`Language changed to: ${!isEnglish ? 'English' : 'French'}`);
    // Example of how to show a notification to the user in a real application
    alert(`Site web traduit en ${!isEnglish ? 'anglais' : 'français'}`);
  };

  // Menu items - with translations
  const menuItems = isEnglish 
    ? [
        { title: "Services", path: "/#services" },
        { title: "Blog", path: "/blog" },
        { title: "Booking", path: "https://calendly.com/neuroai-ch/neuro-ai-interview", external: true },
        { title: "About", path: "/about" },
      ]
    : [
        { title: "Services", path: "/#services" },
        { title: "Blog", path: "/blog" },
        { title: "Réservation", path: "https://calendly.com/neuroai-ch/neuro-ai-interview", external: true },
        { title: "À propos", path: "/about" },
      ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isOpen ? "bg-black/80 backdrop-blur-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center">
          {/* Logo Neuro Swiss AI with brain icon */}
          <Link to="/" className="flex items-center group">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/4c24d903-facb-485b-93ff-1228cfc68c5b.png" 
                alt="Neuro Swiss AI Brain Logo" 
                className="h-8 w-8 mr-2"
              />
              <a 
                href="https://wa.me/message/OFHBXHWDIADHA1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mr-2 bg-black rounded-full p-1.5 hover:bg-black/80 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5 text-green-500" />
              </a>
              <div className="relative font-display text-white font-semibold text-xl mr-10 flex items-center">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                  Neuro Swiss AI
                </span>
                <Flag className="h-4 w-4 text-red-500 ml-1.5" />
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center">
            <ul className="flex space-x-8">
              {menuItems.map((item) => (
                <li key={item.title}>
                  {item.external ? (
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
                      {item.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <div className="ml-8 flex items-center space-x-4">
              <a href="https://wa.me/message/OFHBXHWDIADHA1" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="border-white/20 bg-transparent text-white hover:bg-white/10">
                  <MessageCircle className="h-4 w-4 mr-2 text-green-500" />
                  {isEnglish ? "WhatsApp" : "WhatsApp"}
                </Button>
              </a>
              <button 
                onClick={toggleLanguage}
                className="flex items-center justify-center px-3 py-1 bg-transparent border border-white/20 rounded-md text-white hover:bg-white/10 transition-all"
                aria-label="Toggle language"
              >
                <Flag className="h-4 w-4 mr-1" />
                {isEnglish ? "FR" : "ENG"}
              </button>
            </div>
          </nav>

          {/* Mobile view: Language toggle and menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <a 
              href="https://wa.me/message/OFHBXHWDIADHA1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mr-1"
            >
              <MessageCircle className="h-5 w-5 text-green-500" />
            </a>
            <button 
              onClick={toggleLanguage}
              className="flex items-center justify-center px-2 py-1 bg-transparent border border-white/20 rounded-md text-white hover:bg-white/10 transition-all"
              aria-label="Toggle language"
            >
              <Flag className="h-3 w-3 mr-1" />
              {isEnglish ? "FR" : "ENG"}
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
                {item.external ? (
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
                    {item.title}
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
                  {isEnglish ? "Contact us" : "Nous contacter"}
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
