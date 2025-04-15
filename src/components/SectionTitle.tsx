
interface SectionTitleProps {
  title: string;
  subtitle: string;
  center?: boolean;
}

const SectionTitle = ({ title, subtitle, center = false }: SectionTitleProps) => {
  return (
    <div className={`mb-10 ${center ? 'text-center' : 'text-left'}`}>
      <h2 className="text-3xl md:text-4xl font-bold mb-3">
        {title}
      </h2>
      <p className="text-lg text-tscc-lightgray max-w-3xl mx-auto">
        {subtitle}
      </p>
      <div className={`h-1 w-16 bg-tscc-red mt-4 ${center ? 'mx-auto' : ''}`}></div>
    </div>
  );
};

export default SectionTitle;
