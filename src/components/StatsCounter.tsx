
import { Building2, Users, Clock, Award } from "lucide-react";
import { useState, useEffect, useRef } from "react";

interface CounterProps {
  end: number;
  duration?: number;
  label: string;
  icon: React.ReactNode;
}

const Counter = ({ end, duration = 2000, label, icon }: CounterProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const counterRef = useRef<HTMLDivElement>(null);
  const lastScrollDirection = useRef<'up' | 'down' | null>(null);
  const lastScrollY = useRef(0);
  
  // Function to animate the counter
  const animateCounter = () => {
    setCount(0);
    let startTime: number;
    let animationFrame: number;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      
      const runtime = timestamp - startTime;
      const relativeProgress = runtime / duration;
      
      if (runtime < duration) {
        setCount(Math.round(end * Math.min(relativeProgress, 1)));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationFrame);
    };
  };

  // Intersection Observer to detect when element is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  // Scroll detection for complete scroll up/down
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      // Check if scrolled to top or bottom
      const isAtTop = currentScrollY <= 10;
      const isAtBottom = currentScrollY >= documentHeight - 10;
      
      // Determine scroll direction
      let currentDirection: 'up' | 'down' | null = null;
      if (currentScrollY > lastScrollY.current) {
        currentDirection = 'down';
      } else if (currentScrollY < lastScrollY.current) {
        currentDirection = 'up';
      }
      
      // Trigger animation if:
      // 1. Element is visible AND
      // 2. We've scrolled to top or bottom AND
      // 3. We have a valid scroll direction AND
      // 4. The direction has changed or it's the first scroll
      if (isVisible && (isAtTop || isAtBottom) && currentDirection && 
          (lastScrollDirection.current !== currentDirection || lastScrollDirection.current === null)) {
        setAnimationKey(prev => prev + 1);
        animateCounter();
      }
      
      lastScrollY.current = currentScrollY;
      lastScrollDirection.current = currentDirection;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible, end, duration]);

  // Initial animation when component mounts and is visible
  useEffect(() => {
    if (isVisible) {
      animateCounter();
    }
  }, [isVisible]);

  return (
    <div className="text-center" ref={counterRef} key={animationKey}>
      <div className="inline-flex justify-center items-center w-20 h-20 rounded-full bg-orange-600 mb-4">
        {icon}
      </div>
      <h3 className="text-5xl font-bold mb-2 text-white">{count}+</h3>
      <p className="text-gray-300 font-medium">{label}</p>
    </div>
  );
};

const StatsCounter = () => {
  return (
    <div className="bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <Counter 
            end={20}
            label="Years of Experience"
            icon={<Clock size={36} className="text-white" />}
          />
          <Counter 
            end={100}
            label="Projects Completed"
            icon={<Building2 size={36} className="text-white" />}
          />
          <Counter 
            end={150}
            label="Team Members"
            icon={<Users size={36} className="text-white" />}
          />
          <Counter 
            end={25}
            label="Awards Won"
            icon={<Award size={36} className="text-white" />}
          />
        </div>
      </div>
    </div>
  );
};

export default StatsCounter;
