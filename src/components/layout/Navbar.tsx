
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import Button from "../ui/Button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? "py-4 glass-effect" : "py-6 bg-transparent"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-xl font-display font-bold text-white tracking-tight">
            Neuro Swiss AI
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {/* Services avec dropdown */}
          <div 
            className="relative" 
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <div className="flex items-center cursor-pointer nav-link">
              Services
              <ChevronDown className="ml-1 h-4 w-4" />
            </div>
            
            {/* Dropdown menu */}
            <div className={`absolute top-full left-0 mt-2 w-48 glass-effect rounded-lg py-2 px-3 transition-all duration-300 ${
              showDropdown ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
            }`}>
              <Link to="/#audit-conseil" className="block py-2 px-3 hover:bg-white/5 rounded-md transition-colors">
                Audit et conseil
              </Link>
              <Link to="/#formations" className="block py-2 px-3 hover:bg-white/5 rounded-md transition-colors">
                Formations
              </Link>
              <Link to="/#solutions-ia" className="block py-2 px-3 hover:bg-white/5 rounded-md transition-colors">
                Solutions IA
              </Link>
            </div>
          </div>

          <Link to="/blog" className="nav-link">Blog</Link>
          <Link to="/reservation" className="nav-link">Réservation</Link>
          <Link to="/about" className="nav-link">À propos</Link>

          <Link to="/reservation">
            <Button variant="mauve" size="md">Nous contacter</Button>
          </Link>
        </nav>

        {/* Mobile Menu Button (hidden on desktop) */}
        <button className="md:hidden text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
