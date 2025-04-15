
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
  const counterRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.unobserve(counterRef.current!);
        }
      },
      { threshold: 0.1 }
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

  useEffect(() => {
    if (!isVisible) return;
    
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
  }, [end, duration, isVisible]);

  return (
    <div className="text-center" ref={counterRef}>
      <div className="inline-flex justify-center items-center w-16 h-16 rounded-full bg-tscc-red bg-opacity-10 mb-4">
        {icon}
      </div>
      <h3 className="text-4xl font-bold mb-2">{count}+</h3>
      <p className="text-gray-600">{label}</p>
    </div>
  );
};

const StatsCounter = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Counter 
            end={20}
            label="Years of Experience"
            icon={<Clock size={32} className="text-tscc-red" />}
          />
          <Counter 
            end={100}
            label="Projects Completed"
            icon={<Building2 size={32} className="text-tscc-red" />}
          />
          <Counter 
            end={150}
            label="Team Members"
            icon={<Users size={32} className="text-tscc-red" />}
          />
          <Counter 
            end={25}
            label="Awards Won"
            icon={<Award size={32} className="text-tscc-red" />}
          />
        </div>
      </div>
    </div>
  );
};

export default StatsCounter;
