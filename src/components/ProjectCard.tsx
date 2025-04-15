
interface ProjectCardProps {
  title: string;
  location: string;
  value: string;
  imageUrl: string;
  isCompleted?: boolean;
}

const ProjectCard = ({ title, location, value, imageUrl, isCompleted = true }: ProjectCardProps) => {
  return (
    <div className="group overflow-hidden rounded-lg shadow-md bg-white">
      {/* Project Image */}
      <div className="h-52 overflow-hidden relative">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-3 right-3">
          <span className={`text-xs font-medium px-2 py-1 rounded ${
            isCompleted ? 'bg-green-500' : 'bg-blue-500'
          } text-white`}>
            {isCompleted ? 'Completed' : 'In Progress'}
          </span>
        </div>
      </div>

      {/* Project Info */}
      <div className="p-5">
        <h3 className="font-semibold text-lg mb-1 line-clamp-2">{title}</h3>
        <div className="flex justify-between text-sm text-gray-500 mb-1">
          <span>{location}</span>
          <span>Value: {value}</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
