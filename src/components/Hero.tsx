
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center">
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80)', 
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-foreground text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Your Vision. Our Expertise.<br />
            <span className="text-gradient-orange">Engineered To Perfection.</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-2xl">
            From Project Visualization, and Concept Refinement to Final Execution - We Transform Ideas Into Reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/about" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-md font-semibold flex items-center justify-center transition-all transform hover:scale-105"
            >
              Learn More
              <ArrowRight size={18} className="ml-2" />
            </Link>
            <Link 
              to="/contact" 
              className="bg-transparent border-2 border-primary hover:bg-primary hover:text-primary-foreground text-primary px-8 py-4 rounded-md font-semibold flex items-center justify-center transition-all"
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
