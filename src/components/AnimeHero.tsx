import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Hammer, HardHat, Truck } from "lucide-react";

const AnimeHero = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-construction-blue via-background to-primary/20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Construction Icons */}
        <motion.div
          className="absolute top-20 left-10 text-construction-yellow/20"
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <HardHat size={80} />
        </motion.div>
        
        <motion.div
          className="absolute top-40 right-20 text-construction-orange/20"
          animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <Hammer size={60} />
        </motion.div>

        <motion.div
          className="absolute bottom-40 left-1/4 text-construction-blue/20"
          animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <Truck size={100} />
        </motion.div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--construction-dark)/0.05)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--construction-dark)/0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="max-w-4xl">
          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6"
          >
            <div className="bg-primary text-primary-foreground px-6 py-2 rounded-full font-bold text-sm anime-shadow border-2 border-construction-dark">
              🏗️ BUILDING DREAMS SINCE 2003
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight"
          >
            <span className="text-construction-dark">Building Your</span><br />
            <span className="text-gradient-construction inline-block transform hover:scale-105 transition-transform">
              Future Today!
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl mb-8 max-w-2xl text-construction-grey font-medium"
          >
            Professional Construction Services for Every Dream Project 🚧
            <br />
            From Foundation to Finish - We Build It Right!
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg anime-shadow border-3 border-construction-dark transition-all flex items-center justify-center gap-2"
              >
                <Hammer className="w-5 h-5" />
                Get A Quote
              </motion.button>
            </Link>
            
            <Link to="/projects">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-4 rounded-xl font-bold text-lg anime-shadow border-3 border-construction-dark transition-all"
              >
                View Projects 🏗️
              </motion.button>
            </Link>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="bg-card p-4 rounded-xl anime-shadow border-2 border-construction-dark"
            >
              <div className="text-3xl font-black text-primary">20+</div>
              <div className="text-sm font-semibold text-muted-foreground">Years Experience</div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, rotate: -1 }}
              className="bg-card p-4 rounded-xl anime-shadow border-2 border-construction-dark"
            >
              <div className="text-3xl font-black text-secondary">100+</div>
              <div className="text-sm font-semibold text-muted-foreground">Projects Done</div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="bg-card p-4 rounded-xl anime-shadow border-2 border-construction-dark col-span-2 md:col-span-1"
            >
              <div className="text-3xl font-black text-construction-orange">100%</div>
              <div className="text-sm font-semibold text-muted-foreground">Client Satisfaction</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Building Silhouette */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 0.1, y: 0 }}
        transition={{ duration: 1.2, delay: 1 }}
        className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-construction-dark/20 to-transparent pointer-events-none"
      >
        <div className="absolute bottom-0 left-0 right-0 flex justify-around items-end">
          <div className="w-16 h-32 bg-construction-dark/30 rounded-t-lg"></div>
          <div className="w-20 h-40 bg-construction-dark/30 rounded-t-lg"></div>
          <div className="w-12 h-24 bg-construction-dark/30 rounded-t-lg"></div>
          <div className="w-24 h-48 bg-construction-dark/30 rounded-t-lg"></div>
          <div className="w-16 h-36 bg-construction-dark/30 rounded-t-lg"></div>
        </div>
      </motion.div>

      {/* WhatsApp Contact Icon */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 1.2, type: "spring" }}
        className="fixed bottom-6 right-6 z-50"
      >
        <motion.a
          href="https://wa.me/919811009978"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg anime-shadow border-2 border-construction-dark transition-all flex items-center justify-center"
        >
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
        </motion.a>
      </motion.div>
    </div>
  );
};

export default AnimeHero;
