
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Flag } from "lucide-react";
import Button from "../ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
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

  // Menu items
  const menuItems = [
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
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <div className="relative font-display text-white font-semibold text-xl mr-10 flex items-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                Neuro Swiss AI
              </span>
              <Flag className="h-4 w-4 text-red-500 ml-1.5" />
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
            <div className="ml-8">
              <a href="https://calendly.com/neuroai-ch/neuro-ai-interview" target="_blank" rel="noopener noreferrer">
                <Button variant="mauve" size="sm">
                  Nous contacter
                </Button>
              </a>
            </div>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
          </button>
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
                <Button variant="mauve" size="sm">
                  Nous contacter
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
