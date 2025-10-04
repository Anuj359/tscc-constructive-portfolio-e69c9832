
interface ProjectCardProps {
  title: string;
  location: string;
  value: string;
  imageUrl: string;
  isCompleted?: boolean;
}

const ProjectCard = ({ title, location, value, imageUrl, isCompleted = true }: ProjectCardProps) => {
  return (
    <div className="group overflow-hidden rounded-lg shadow-lg bg-card border border-border hover:border-primary transition-all">
      {/* Project Image */}
      <div className="h-52 overflow-hidden relative">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div className="absolute top-3 right-3">
          <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
            isCompleted ? 'bg-green-500' : 'bg-primary'
          } text-white`}>
            {isCompleted ? 'Completed' : 'In Progress'}
          </span>
        </div>
      </div>

      {/* Project Info */}
      <div className="p-5">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2 text-foreground">{title}</h3>
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>{location}</span>
          <span className="text-primary font-medium">{value}</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
