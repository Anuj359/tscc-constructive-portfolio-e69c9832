
import SectionTitle from "@/components/SectionTitle";
import { Building, Factory, Home, Wrench, Hammer, Users, Truck } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Building,
      title: "Road and Bridges",
      description: "Expert construction of roads, highways, bridges and other transportation infrastructure with advanced machinery and efficient project management."
    },
    {
      icon: Building,
      title: "Industrial Projects",
      description: "Development and construction of industrial facilities, manufacturing plants, warehouses and distribution centers tailored to meet specific business requirements."
    },
    {
      icon: Building,
      title: "Multi-Stories Projects",
      description: "Design and construction of multi-story buildings including commercial complexes, office spaces, and institutional facilities with expertise in high-rise structures."
    },
    {
      icon: Factory,
      title: "Factories & Industries",
      description: "Specialized construction of factories with focus on operational efficiency, adhering to safety regulations and industry standards for manufacturing environments."
    },
    {
      icon: Home,
      title: "Residential Projects",
      description: "Building quality residential complexes, apartments, villas and housing colonies with modern amenities and attention to comfortable living environments."
    },
    {
      icon: Building,
      title: "Mass Housing Projects",
      description: "Large-scale housing development projects focusing on efficient use of space, cost-effective construction and community planning for affordable housing solutions."
    },
    {
      icon: Wrench,
      title: "Maintenance Services",
      description: "Comprehensive maintenance and repair services for existing structures, ensuring longevity of buildings and infrastructure through regular upkeep and timely renovations."
    },
    {
      icon: Users,
      title: "Manpower Recruitment Services",
      description: "Specialized recruitment services providing skilled laborers, technicians, engineers and project management professionals for construction projects."
    },
    {
      icon: Truck,
      title: "Road Carrier Services",
      description: "Transportation services for construction materials and equipment, ensuring timely delivery and logistics support for construction projects."
    }
  ];

  return (
    <div>
      {/* Page Header */}
      <div className="bg-tscc-blue py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-lg text-white opacity-90 max-w-3xl mx-auto">
            Comprehensive construction and infrastructure development services across multiple sectors
          </p>
        </div>
      </div>

      {/* Services Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Areas of Operation" 
            subtitle="The company flawlessly executes construction projects that vary considerably in size and function, thus juggles effortlessly materials and skills across the entire spectrum of the civil construction industry."
            center={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="h-2 bg-tscc-red"></div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-tscc-red bg-opacity-10 p-3 rounded-full mr-4">
                      <service.icon className="text-red-600" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Work Process</h2>
            <p className="text-lg text-gray-600 mb-4">How we approach your construction project from concept to completion</p>
            <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
          </div>

          <div className="flex flex-col md:flex-row justify-center mt-12 relative">
            {/* Line connecting the steps (visible on md screens and above) */}
            <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-tscc-red bg-opacity-30 z-0"></div>

            {/* Process Steps */}
            {[
              { title: "Project Planning", description: "Initial consultation, requirement analysis, and detailed project planning." },
              { title: "Design & Engineering", description: "Architectural design, structural engineering, and building system coordination." },
              { title: "Construction", description: "Professional construction with strict quality control and safety measures." },
              { title: "Handover", description: "Project completion, final inspection, documentation, and client walkthrough." }
            ].map((step, index) => (
              <div 
                key={index} 
                className="flex-1 relative z-10 mb-8 md:mb-0 flex flex-col items-center"
              >
                <div className="bg-tscc-red text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{step.title}</h3>
                <p className="text-center text-gray-600 px-2">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionTitle 
                title="Our Equipment" 
                subtitle="Modern machinery for efficient construction"
              />
              <p className="text-gray-600 mb-6">
                TSCC is equipped with the latest machinery and equipment to keep pace with everyday 
                advances in the civil construction sphere, enabling us to ensure the highest standards 
                of workmanship in everything we do.
              </p>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Major Equipment Inventory</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Hammer size={20} className="text-gray-700 mr-2" />
                    <span className="text-gray-700">22 Hydraulic Excavators including L&T, BEML and VOLVO models</span>
                  </li>
                  <li className="flex items-center">
                    <Hammer size={20} className="text-gray-700 mr-2" />
                    <span className="text-gray-700">25 Rock Breakers from FINE and DOWN DW</span>
                  </li>
                  <li className="flex items-center">
                    <Hammer size={20} className="text-gray-700 mr-2" />
                    <span className="text-gray-700">7 JCB ESCORT 3D</span>
                  </li>
                  <li className="flex items-center">
                    <Hammer size={20} className="text-gray-700 mr-2" />
                    <span className="text-gray-700">52 TATA Tippers</span>
                  </li>
                  <li className="flex items-center">
                    <Hammer size={20} className="text-gray-700 mr-2" />
                    <span className="text-gray-700">Advanced Engineering Equipment including Total Stations</span>
                  </li>
                  <li className="flex items-center">
                    <Hammer size={20} className="text-gray-700 mr-2" />
                    <span className="text-gray-700">Concrete Machinery and Vibrators</span>
                  </li>
                  <li className="flex items-center">
                    <Hammer size={20} className="text-gray-700 mr-2" />
                    <span className="text-gray-700">Electrical Generators including Silent DG sets</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1487887235947-a955ef187fcc?q=80" 
                alt="Construction equipment" 
                className="rounded-lg shadow-md w-full h-56 object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80" 
                alt="Construction site" 
                className="rounded-lg shadow-md w-full h-56 object-cover mt-6"
              />
              <div className="col-span-2 bg-tscc-blue p-6 rounded-lg shadow-md">
                <h3 className="text-xl text-white font-semibold mb-3">Health & Safety Measures</h3>
                <p className="text-white opacity-90">
                  We prioritize worker safety with proper equipment, training, and site protocols. 
                  All sites are equipped with first aid kits, safety gear, and follow strict security protocols.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-tscc-red">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Need Our Services?</h2>
          <p className="text-white mb-8 max-w-2xl mx-auto">
            Get in touch with our team to discuss your project requirements and how we can help you achieve your construction goals.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-orange-500 text-tscc-red px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
