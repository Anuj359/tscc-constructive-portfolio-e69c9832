
const ClientsSlider = () => {
  // List of client logos - these will be dummy placeholders
  const clients = [
    { id: 1, name: "Indian Railways" },
    { id: 2, name: "NDMC" },
    { id: 3, name: "IJM Infrastructure Limited" },
    { id: 4, name: "Eros Group" },
    { id: 5, name: "Nehru Place Hotels Limited" },
    { id: 6, name: "Krishi Vigyan Kendra" },
    { id: 7, name: "Ajnara India Limited" },
    { id: 8, name: "D.D Industries" },
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900">Our Trusted Clients</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {clients.map((client) => (
            <div 
              key={client.id}
              className="flex items-center justify-center bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="h-12 flex items-center justify-center">
                {/* This would be an actual logo image in a real implementation */}
                <p className="font-medium text-gray-800 text-center">{client.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientsSlider;
