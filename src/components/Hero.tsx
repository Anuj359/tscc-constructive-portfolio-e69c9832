
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative">
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80)', 
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-24 md:py-32 lg:py-40 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Building <span className="text-tscc-red">Excellence</span> <br />
            Since 2003
          </h1>
          <p className="text-white text-lg md:text-xl opacity-90 mb-8 max-w-2xl">
            T.S Construction Company - one of the leading construction companies in Delhi & NCR 
            region with operations panning throughout India.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              to="/about" 
              className="bg-tscc-red hover:bg-red-700 text-white px-6 py-3 rounded-md font-medium flex items-center justify-center"
            >
              Learn More
              <ArrowRight size={16} className="ml-2" />
            </Link>
            <Link 
              to="/contact" 
              className="bg-white hover:bg-gray-100 text-tscc-darkgray px-6 py-3 rounded-md font-medium flex items-center justify-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
