import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ScrollCrane = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();
  
  // Transform scroll position to crane position and rotation
  const craneY = useTransform(scrollY, [0, 2000], [0, 200]);
  const hookY = useTransform(scrollY, [0, 2000], [0, 400]);
  const armRotate = useTransform(scrollY, [0, 1000], [0, -15]);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      className="fixed right-4 md:right-8 top-20 z-40 pointer-events-none"
      style={{ y: craneY }}
    >
      {/* Crane Structure */}
      <div className="relative w-16 md:w-24">
        {/* Crane Tower */}
        <div className="absolute right-0 top-0 w-3 md:w-4 h-32 md:h-40 bg-construction-yellow border-2 border-construction-dark rounded-t-lg shadow-lg">
          {/* Tower windows */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-construction-blue rounded-full"></div>
          <div className="absolute top-6 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-construction-blue rounded-full"></div>
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-construction-blue rounded-full"></div>
        </div>

        {/* Crane Arm */}
        <motion.div
          style={{ rotate: armRotate }}
          className="absolute right-1 md:right-1.5 top-8 md:top-12 origin-right"
        >
          <div className="w-20 md:w-32 h-2 md:h-2.5 bg-construction-orange border-2 border-construction-dark rounded-l-lg shadow-lg"></div>
          
          {/* Hook Cable */}
          <motion.div
            style={{ y: hookY }}
            className="absolute left-2 top-2 w-0.5 bg-construction-grey"
            initial={{ height: 20 }}
            animate={{ height: [20, 40, 20] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Hook */}
            <div className="absolute bottom-0 -left-1 w-2 h-3 bg-construction-grey border border-construction-dark rounded-b-lg">
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-3 border-2 border-construction-orange rounded-full animate-pulse"></div>
            </div>
          </motion.div>
        </motion.div>

        {/* Operator Cabin */}
        <div className="absolute right-0 top-8 md:top-12 w-4 md:w-5 h-3 md:h-4 bg-construction-blue border-2 border-construction-dark rounded-sm shadow-md">
          <div className="absolute top-0.5 left-0.5 w-2 h-1.5 bg-white/60 rounded-sm"></div>
        </div>

        {/* Counter Weight */}
        <div className="absolute right-0 top-16 md:top-20 w-5 md:w-6 h-4 md:h-5 bg-construction-grey border-2 border-construction-dark rounded-sm shadow-lg"></div>

        {/* Base */}
        <div className="absolute right-0 top-32 md:top-40 w-6 md:w-8 h-3 md:h-4 bg-construction-yellow border-2 border-construction-dark rounded-b-lg shadow-xl">
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-construction-dark/30 rounded-b-lg"></div>
        </div>
      </div>

      {/* Dust/debris animation */}
      <motion.div
        className="absolute -bottom-2 right-0 flex gap-1"
        animate={{ y: [0, 10, 0], opacity: [0.5, 0, 0.5] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-1 h-1 bg-construction-grey/40 rounded-full"></div>
        <div className="w-1.5 h-1.5 bg-construction-grey/40 rounded-full"></div>
        <div className="w-1 h-1 bg-construction-grey/40 rounded-full"></div>
      </motion.div>
    </motion.div>
  );
};

export default ScrollCrane;
