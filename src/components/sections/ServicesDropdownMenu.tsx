
import { Link } from "react-router-dom";

interface ServicesMenuItem {
  title: string;
  path: string;
}

interface ServicesDropdownMenuProps {
  isOpen: boolean;
  items: ServicesMenuItem[];
  onClose: () => void;
}

const ServicesDropdownMenu = ({ isOpen, items, onClose }: ServicesDropdownMenuProps) => {
  return (
    <div 
      className={`absolute top-full left-0 mt-2 w-48 bg-black/90 backdrop-blur-md border border-white/10 rounded-md shadow-lg z-50 transition-all duration-200 ${
        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
      }`}
    >
      <div className="py-2">
        {items.map((item) => (
          <Link
            key={item.title}
            to={item.path}
            className="block px-4 py-2 text-white hover:bg-white/10 transition-colors"
            onClick={onClose}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServicesDropdownMenu;
