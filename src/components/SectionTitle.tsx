
interface SectionTitleProps {
  title: string;
  subtitle: string;
  center?: boolean;
}

const SectionTitle = ({ title, subtitle, center = false }: SectionTitleProps) => {
  return (
    <div className={`mb-12 ${center ? 'text-center' : 'text-left'}`}>
      <h2 className="text-4xl md:text-5xl font-black mb-4 text-construction-dark">
        {title}
      </h2>
      <p className={`text-lg text-muted-foreground max-w-3xl leading-relaxed ${center ? 'mx-auto' : ''}`}>
        {subtitle}
      </p>
      <div className={`h-1 w-20 bg-gradient-to-r from-primary via-construction-orange to-primary mt-6 rounded-full ${center ? 'mx-auto' : ''}`}></div>
    </div>
  );
};

export default SectionTitle;
