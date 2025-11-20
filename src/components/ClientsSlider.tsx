const ClientsSlider = () => {
  const clients = [
    { id: 1, name: "Indian Railways", logo: "/clients/indian-railways.png" },
    { id: 2, name: "NDMC", logo: "/tscc-logo.png" },
    { id: 3, name: "IJM Infrastructure Limited", logo: "/tscc-logo.png" },
    { id: 4, name: "Eros Group", logo: "/clients/eros-group.png" },
    { id: 5, name: "Nehru Place Hotels Limited", logo: "/tscc-logo.png" },
    { id: 6, name: "Krishi Vigyan Kendra", logo: "/tscc-logo.png" },
    { id: 7, name: "Ajnara India Limited", logo: "/clients/ajnara.png" },
    { id: 8, name: "D.D Industries", logo: "/tscc-logo.png" },
  ];

  return (
    <div className="py-16 bg-muted/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-12 text-construction-dark">
          Our Trusted <span className="text-gradient-construction">Clients</span>
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {clients.map((client) => (
            <div 
              key={client.id}
              className="flex items-center justify-center bg-background p-6 rounded-xl anime-shadow border-2 border-construction-dark/20 hover:border-construction-orange transition-all hover:scale-105"
            >
              <div className="h-20 flex items-center justify-center w-full">
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="max-h-16 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientsSlider;
