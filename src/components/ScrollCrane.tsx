import { useScroll, useTransform, useSpring } from "framer-motion";
import { motion } from "framer-motion";

const ScrollCrane = () => {
  const { scrollYProgress } = useScroll();
  
  // Smooth spring animations for mechanical feel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  // Crane visibility - smoothly fades in after initial scroll
  const opacity = useTransform(smoothProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0]);
  
  // Crane horizontal position - slides in from right smoothly
  const craneX = useTransform(smoothProgress, [0, 0.1, 0.9, 1], [150, 0, 0, 150]);
  
  // Crane vertical position - subtle vertical movement with scroll
  const craneY = useTransform(smoothProgress, [0, 1], [0, 100]);
  
  // Arm rotation - subtle mechanical rotation
  const armRotate = useTransform(smoothProgress, [0, 0.5, 1], [0, -8, -12]);
  
  // Hook cable extension - smooth extension/retraction
  const hookExtension = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [20, 60, 60, 30]);
  
  // Hook vertical position - smooth up/down motion
  const hookY = useTransform(smoothProgress, [0, 0.5, 1], [0, 50, 20]);

  return (
    <motion.div
      className="fixed right-4 md:right-8 top-20 z-40 pointer-events-none"
      style={{ 
        opacity,
        x: craneX,
        y: craneY
      }}
    >
      {/* Crane Structure */}
      <div className="relative w-16 md:w-24">
        {/* Crane Tower */}
        <div className="absolute right-0 top-0 w-3 md:w-4 h-32 md:h-40 bg-gradient-to-b from-construction-yellow to-construction-yellow/90 border-2 border-construction-dark rounded-t-lg anime-shadow">
          {/* Tower windows with subtle glow */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-construction-blue rounded-full anime-glow"></div>
          <div className="absolute top-6 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-construction-blue rounded-full"></div>
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-construction-blue rounded-full"></div>
        </div>

        {/* Crane Arm */}
        <motion.div
          style={{ 
            rotate: armRotate,
            transformOrigin: 'right center'
          }}
          className="absolute right-1 md:right-1.5 top-8 md:top-12"
        >
          <div className="w-20 md:w-32 h-2 md:h-2.5 bg-gradient-to-r from-construction-orange to-construction-orange/90 border-2 border-construction-dark rounded-l-lg anime-shadow"></div>
          
          {/* Hook Cable */}
          <motion.div
            style={{ 
              height: hookExtension,
              y: hookY
            }}
            className="absolute left-2 top-2 w-0.5 bg-gradient-to-b from-construction-grey to-construction-dark"
          >
            {/* Hook */}
            <div className="absolute bottom-0 -left-1 w-2 h-3 bg-gradient-to-b from-construction-grey to-construction-dark border border-construction-dark rounded-b-lg">
              <motion.div 
                className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-3 border-2 border-construction-orange rounded-full"
                style={{
                  boxShadow: '0 0 8px hsl(var(--construction-orange) / 0.5)'
                }}
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Operator Cabin */}
        <div className="absolute right-0 top-8 md:top-12 w-4 md:w-5 h-3 md:h-4 bg-gradient-to-br from-construction-blue to-construction-blue/80 border-2 border-construction-dark rounded-sm anime-shadow">
          <div className="absolute top-0.5 left-0.5 w-2 h-1.5 bg-white/70 rounded-sm"></div>
        </div>

        {/* Counter Weight */}
        <div className="absolute right-0 top-16 md:top-20 w-5 md:w-6 h-4 md:h-5 bg-gradient-to-br from-construction-grey to-construction-dark border-2 border-construction-dark rounded-sm anime-shadow"></div>

        {/* Base */}
        <div className="absolute right-0 top-32 md:top-40 w-6 md:w-8 h-3 md:h-4 bg-gradient-to-b from-construction-yellow to-construction-yellow/80 border-2 border-construction-dark rounded-b-lg anime-shadow">
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-construction-dark/40 to-transparent rounded-b-lg"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default ScrollCrane;
