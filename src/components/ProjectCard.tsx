import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  location: string;
  value: string;
  imageUrl: string;
  isCompleted?: boolean;
}

const ProjectCard = ({ title, location, value, imageUrl, isCompleted = true }: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -8 }}
      className="group overflow-hidden rounded-xl anime-shadow-hover bg-card border-2 border-construction-dark transition-all"
    >
      {/* Project Image */}
      <div className="h-52 overflow-hidden relative">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-construction-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div className="absolute top-3 right-3">
          <motion.span
            whileHover={{ scale: 1.1 }}
            className={`text-xs font-bold px-3 py-1 rounded-full border-2 border-construction-dark ${
              isCompleted ? 'bg-green-400' : 'bg-construction-orange'
            } text-construction-dark`}
          >
            {isCompleted ? '✓ Completed' : '🚧 In Progress'}
          </motion.span>
        </div>
      </div>

      {/* Project Info */}
      <div className="p-5 bg-gradient-to-b from-card to-muted/20">
        <h3 className="font-bold text-lg mb-2 line-clamp-2 text-construction-dark">{title}</h3>
        <div className="flex justify-between text-sm font-semibold">
          <span className="text-foreground">📍 {location}</span>
          <span className="text-primary">{value}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
