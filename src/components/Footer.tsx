
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-construction-dark border-t-2 border-primary/20">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/tscc-logo.png" 
                alt="TS Construction Company Logo" 
                className="h-10 bg-white p-1 rounded anime-shadow"
              />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              T.S Construction Company (TSCC) - Leading construction company in Delhi & NCR since 2003
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-primary mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium">
                Home
              </Link>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium">
                About Us
              </Link>
              <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium">
                Services
              </Link>
              <Link to="/projects" className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium">
                Projects
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium">
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-primary mb-4">Contact Us</h3>
            <div className="space-y-3">
              <a href="tel:+91-011-46578186" className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors group">
                <Phone size={16} className="mr-2 text-primary group-hover:scale-110 transition-transform" />
                +91-011-46578186
              </a>
              <a href="mailto:mailtscc@gmail.com" className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors group">
                <Mail size={16} className="mr-2 text-primary group-hover:scale-110 transition-transform" />
                mailtscc@gmail.com
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-primary mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-all hover:scale-110 anime-glow-hover p-2 rounded-lg">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-all hover:scale-110 anime-glow-hover p-2 rounded-lg">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-all hover:scale-110 anime-glow-hover p-2 rounded-lg">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-all hover:scale-110 anime-glow-hover p-2 rounded-lg">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-construction-grey/30 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-xs text-muted-foreground text-center md:text-left">
              &copy; {new Date().getFullYear()} T.S Construction Company. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <span className="text-xs text-muted-foreground">Regd. Office: A-10, 3rd Floor, Rani Bagh, Pitampura, Delhi – 110034</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
