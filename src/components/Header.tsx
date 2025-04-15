
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
      <div className="bg-tscc-darkgray text-white py-2">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-2 md:mb-0">
            <div className="flex items-center mr-4">
              <Phone size={16} className="mr-1" />
              <span className="text-sm">+91 XXXXX XXXXX</span>
            </div>
            <div className="flex items-center">
              <Mail size={16} className="mr-1" />
              <span className="text-sm">mailtscc@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center">
            <MapPin size={16} className="mr-1" />
            <span className="text-sm">Delhi & NCR, India</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center">
              <img 
                src="/public/lovable-uploads/ba7efd3f-dc66-487d-8951-a634ab5ce291.png" 
                alt="TS Construction Company Logo" 
                className="h-12 md:h-16"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex">
              <ul className="flex space-x-8">
                <li>
                  <Link to="/" className="text-tscc-darkgray font-medium hover:text-tscc-red transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-tscc-darkgray font-medium hover:text-tscc-red transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-tscc-darkgray font-medium hover:text-tscc-red transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/projects" className="text-tscc-darkgray font-medium hover:text-tscc-red transition-colors">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-tscc-darkgray font-medium hover:text-tscc-red transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Mobile menu button */}
            <button 
              onClick={toggleMenu} 
              className="md:hidden text-tscc-darkgray"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden bg-white border-t border-gray-200">
            <ul className="flex flex-col">
              <li>
                <Link 
                  to="/" 
                  className="block px-4 py-3 text-tscc-darkgray hover:bg-gray-100"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="block px-4 py-3 text-tscc-darkgray hover:bg-gray-100"
                  onClick={toggleMenu}
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="block px-4 py-3 text-tscc-darkgray hover:bg-gray-100"
                  onClick={toggleMenu}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  to="/projects" 
                  className="block px-4 py-3 text-tscc-darkgray hover:bg-gray-100"
                  onClick={toggleMenu}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="block px-4 py-3 text-tscc-darkgray hover:bg-gray-100"
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
