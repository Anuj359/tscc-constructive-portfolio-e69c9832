import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      className="bg-card p-6 rounded-xl border-3 border-construction-dark anime-shadow-hover transition-all group"
    >
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
        className="bg-primary w-14 h-14 rounded-xl flex items-center justify-center mb-4 border-2 border-construction-dark"
      >
        <Icon className="text-primary-foreground" size={28} />
      </motion.div>
      <h3 className="text-xl font-bold mb-3 text-construction-dark group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-foreground leading-relaxed font-medium">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;
