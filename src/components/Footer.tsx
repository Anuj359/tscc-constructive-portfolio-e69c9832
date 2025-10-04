
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-700">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Company Info */}
          <div className="flex items-center space-x-4">
            <img 
              src="/tscc-logo.png" 
              alt="TS Construction Company Logo" 
              className="h-8 bg-white p-1 rounded"
            />
            <p className="text-sm text-gray-300">
              T.S Construction Company (TSCC) - Leading construction company in Delhi & NCR since 2003
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center space-x-6">
            <Link to="/" className="text-sm text-gray-300 hover:text-orange-400 transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-sm text-gray-300 hover:text-orange-400 transition-colors">
              About Us
            </Link>
            <Link to="/services" className="text-sm text-gray-300 hover:text-orange-400 transition-colors">
              Services
            </Link>
            <Link to="/projects" className="text-sm text-gray-300 hover:text-orange-400 transition-colors">
              Projects
            </Link>
            <Link to="/contact" className="text-sm text-gray-300 hover:text-orange-400 transition-colors">
              Contact Us
            </Link>
          </div>

          {/* Contact Info */}
          <div className="flex items-center space-x-4">
            <a href="tel:+91-011-46578186" className="flex items-center text-sm text-gray-300 hover:text-orange-400 transition-colors">
              <Phone size={16} className="mr-1" />
              +91-011-46578186
            </a>
            <a href="mailto:mailtscc@gmail.com" className="flex items-center text-sm text-gray-300 hover:text-orange-400 transition-colors">
              <Mail size={16} className="mr-1" />
              mailtscc@gmail.com
            </a>
          </div>

          {/* Social Links */}
          <div className="flex space-x-3">
            <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
              <Facebook size={18} />
            </a>
            <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
              <Twitter size={18} />
            </a>
            <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
              <Instagram size={18} />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-4 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-gray-400 text-center md:text-left">
              &copy; {new Date().getFullYear()} T.S Construction Company. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 mt-2 md:mt-0">
              <span className="text-xs text-gray-400">Regd. Office: A-10, 3rd Floor, Rani Bagh, Pitampura, Delhi – 110034</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
