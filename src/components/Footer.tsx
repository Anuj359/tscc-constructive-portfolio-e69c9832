
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-tscc-darkgray text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img 
              src="/public/lovable-uploads/ba7efd3f-dc66-487d-8951-a634ab5ce291.png" 
              alt="TS Construction Company Logo" 
              className="h-16 mb-4 bg-white p-2 rounded"
            />
            <p className="text-sm mt-4 mb-6">
              T.S Construction Company (TSCC) is one of the leading construction companies 
              of Delhi & NCR region, with operations panning throughout India.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-tscc-red">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-tscc-red">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-tscc-red">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white hover:text-tscc-red">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-tscc-red transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-tscc-red transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm hover:text-tscc-red transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-sm hover:text-tscc-red transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-tscc-red transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-sm">Road and Bridges</li>
              <li className="text-sm">Industrial Projects</li>
              <li className="text-sm">Multi-Stories Projects</li>
              <li className="text-sm">Residential Projects</li>
              <li className="text-sm">Mass Housing Projects</li>
              <li className="text-sm">Maintenance Services</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0" />
                <div className="text-sm">
                  <p className="font-semibold">Regd. Office:</p>
                  <p>A-10, 3rd Floor, Rishi Nagar, Rani Bagh, Delhi – 110034</p>
                  <p className="font-semibold mt-2">Branch Office:</p>
                  <p>Kh No 2648, Ashok Vihar Plot-111, Gurgaon, Haryana-122017</p>
                </div>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0" />
                <a href="mailto:mailtscc@gmail.com" className="text-sm hover:text-tscc-red">
                  mailtscc@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0" />
                <a href="tel:+91XXXXXXXXXX" className="text-sm hover:text-tscc-red">
                  +91 XXXXX XXXXX
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-center md:justify-between items-center">
          <p className="text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} T.S Construction Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
