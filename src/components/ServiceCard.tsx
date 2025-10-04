
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <div className="bg-card border border-border rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-primary group">
      <div className="bg-primary/10 p-3 rounded-lg inline-block mb-4 group-hover:bg-primary/20 transition-colors">
        <Icon className="text-primary" size={28} />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-foreground">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
};

export default ServiceCard;
