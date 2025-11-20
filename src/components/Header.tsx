import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, Facebook, Twitter, Linkedin } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Projects", path: "/projects" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-gradient-to-r from-construction-blue to-construction-blue/90 text-background py-2 px-4 text-sm border-b-2 border-primary">
        <div className="container mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 font-semibold">
            <span className="flex items-center gap-1">
              <Phone size={14} />
              +91-011-46578186
            </span>
            <span className="hidden md:flex items-center gap-1">
              <Mail size={14} />
              tsccdelhi@gmail.com
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold">Follow us:</span>
            <a href="#" className="hover:text-construction-yellow transition-colors">
              <Facebook size={14} />
            </a>
            <a href="#" className="hover:text-construction-yellow transition-colors">
              <Twitter size={14} />
            </a>
            <a href="#" className="hover:text-construction-yellow transition-colors">
              <Linkedin size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b-2 border-primary anime-shadow">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 hover:scale-105 transition-transform">
              <img 
                src="/tscc-logo.png" 
                alt="TS Construction Company" 
                className="h-14 w-auto drop-shadow-lg"
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-bold text-base transition-all relative ${
                    location.pathname === link.path
                      ? "text-primary scale-110"
                      : "text-construction-dark hover:text-primary hover:scale-110"
                  } ${location.pathname === link.path ? 'after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:bg-primary after:rounded-full' : ''}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Toggle */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggleMenu}
              className="md:hidden text-construction-dark p-2 rounded-lg hover:bg-primary/10 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden fixed top-[120px] left-0 right-0 bg-card/95 backdrop-blur-sm border-b-2 border-primary shadow-xl z-40 anime-shadow"
        >
          <nav className="container mx-auto px-4 py-4">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={link.path}
                  onClick={toggleMenu}
                  className={`block py-3 px-4 rounded-lg font-bold transition-all ${
                    location.pathname === link.path
                      ? "bg-primary text-primary-foreground anime-shadow"
                      : "text-construction-dark hover:bg-primary/10"
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>
        </motion.div>
      )}
    </>
  );
};

export default Header;
