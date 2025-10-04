
interface TeamMemberCardProps {
  name: string;
  position: string;
  imageUrl: string;
  description: string;
}

const TeamMemberCard = ({ name, position, imageUrl, description }: TeamMemberCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="h-64 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="p-6">
        <h3 className="font-bold text-xl mb-1 text-gray-900">{name}</h3>
        <p className="text-gray-600 font-medium mb-3">{position}</p>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
