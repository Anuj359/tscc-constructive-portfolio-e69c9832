
import { Link } from "react-router-dom";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full">
      {/* Top Bar with Contact Info */}
      <div className="bg-secondary border-b border-border py-2">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="flex items-center mb-2 md:mb-0 gap-4">
            <div className="flex items-center gap-1">
              <Phone size={14} className="text-primary" />
              <span className="text-foreground">+91-011-46578186</span>
            </div>
            <div className="flex items-center gap-1">
              <Mail size={14} className="text-primary" />
              <span className="text-foreground">mailtscc@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <MapPin size={14} className="text-primary" />
            <span className="text-foreground">Delhi & NCR, India</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center">
              <img 
                src="/tscc-logo.png" 
                alt="TS Construction Company Logo" 
                className="h-12 md:h-16"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex">
              <ul className="flex space-x-8">
                <li>
                  <Link to="/" className="text-foreground font-medium hover:text-primary transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-foreground font-medium hover:text-primary transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-foreground font-medium hover:text-primary transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/projects" className="text-foreground font-medium hover:text-primary transition-colors">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-foreground font-medium hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Mobile menu button */}
            <button 
              onClick={toggleMenu} 
              className="md:hidden text-foreground"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden bg-secondary border-t border-border">
            <ul className="flex flex-col">
              <li>
                <Link 
                  to="/" 
                  className="block px-4 py-3 text-foreground hover:bg-muted hover:text-primary transition-colors"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="block px-4 py-3 text-foreground hover:bg-muted hover:text-primary transition-colors"
                  onClick={toggleMenu}
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="block px-4 py-3 text-foreground hover:bg-muted hover:text-primary transition-colors"
                  onClick={toggleMenu}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  to="/projects" 
                  className="block px-4 py-3 text-foreground hover:bg-muted hover:text-primary transition-colors"
                  onClick={toggleMenu}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="block px-4 py-3 text-foreground hover:bg-muted hover:text-primary transition-colors"
                  onClick={toggleMenu}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
