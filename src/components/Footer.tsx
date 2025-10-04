
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img 
              src="/tscc-logo.png" 
              alt="TS Construction Company Logo" 
              className="h-16 mb-4 bg-white p-2 rounded"
            />
            <p className="text-sm mt-4 mb-6 text-muted-foreground leading-relaxed">
              T.S Construction Company (TSCC) is one of the leading construction companies 
              of Delhi & NCR region, with operations panning throughout India.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">Road and Bridges</li>
              <li className="text-sm text-muted-foreground">Industrial Projects</li>
              <li className="text-sm text-muted-foreground">Multi-Stories Projects</li>
              <li className="text-sm text-muted-foreground">Residential Projects</li>
              <li className="text-sm text-muted-foreground">Mass Housing Projects</li>
              <li className="text-sm text-muted-foreground">Maintenance Services</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0 text-primary" />
                <div className="text-sm text-muted-foreground">
                  <p className="font-semibold text-foreground">Regd. Office:</p>
                  <p>A-10, 3rd Floor, Rani Bagh, Pitampura, Delhi – 110034</p>
                  <p className="font-semibold text-foreground mt-2">Branch Office:</p>
                  <p>2648, Ashok Vihar Plot-111, Gurgaon, Haryana-122017</p>
                </div>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0 text-primary" />
                <a href="mailto:mailtscc@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  mailtscc@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0 text-primary" />
                <a href="tel:+91-011-46578186" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  +91-011-46578186
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-background border-t border-border py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-center md:justify-between items-center">
          <p className="text-sm text-center md:text-left text-muted-foreground">
            &copy; {new Date().getFullYear()} T.S Construction Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
