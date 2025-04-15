
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import StatsCounter from "@/components/StatsCounter";
import ClientsSlider from "@/components/ClientsSlider";
import { Building, HardHat, Building2, Factory, Home as HomeIcon, Wrench } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  // Sample services data
  const services = [
    {
      icon: Building,
      title: "Road and Bridges",
      description: "Expert construction of roads, highways, and bridge infrastructure projects."
    },
    {
      icon: Building2,
      title: "Industrial Projects",
      description: "Construction of industrial facilities with precision and quality standards."
    },
    {
      icon: Building,
      title: "Multi-Stories Projects",
      description: "Development of high-rise buildings and multi-story commercial complexes."
    },
    {
      icon: Factory,
      title: "Factories & Industries",
      description: "Building manufacturing plants and industrial facilities for various sectors."
    },
    {
      icon: HomeIcon,
      title: "Residential Projects",
      description: "Creation of residential complexes with modern amenities and comforts."
    },
    {
      icon: Wrench,
      title: "Maintenance Services",
      description: "Comprehensive maintenance services for all types of infrastructure."
    }
  ];

  // Sample featured projects
  const featuredProjects = [
    {
      title: "Tower B & C at MCD Civic Centre",
      location: "Minto Road, New Delhi",
      value: "Rs. 5 Crore",
      imageUrl: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?q=80",
      isCompleted: true
    },
    {
      title: "Modification of Inter Continental Eros",
      location: "Nehru Place, Delhi",
      value: "Rs. 6 Crore",
      imageUrl: "https://images.unsplash.com/photo-1487252665478-49b61b47f302?q=80",
      isCompleted: true
    },
    {
      title: "Multi Level Car Parking, DMRC",
      location: "Ajmeri Gate, New Delhi",
      value: "Rs. 3.47 Crore",
      imageUrl: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80",
      isCompleted: true
    },
    {
      title: "Construction of Badminton Courts",
      location: "PSOI club, Satya Marg, New Delhi",
      value: "Rs. 0.95 Crore",
      imageUrl: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?q=80",
      isCompleted: false
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Welcome to <span className="text-tscc-red">T.S Construction Company</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                T.S Construction Company (TSCC) is one of the leading construction companies
                of Delhi & NCR region, with operations panning throughout India. Since 2003
                along with our sister concerns Madhav Buildwell Private Limited and T.S. Infra
                Services LLP, we have been at the forefront of construction methodologies.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We are equipped with the latest machinery and equipment to keep pace with everyday
                advances in the civil construction sphere, enabling us to ensure the highest
                standards of workmanship in everything we do.
              </p>
              <Link 
                to="/about" 
                className="inline-block bg-tscc-red hover:bg-red-700 text-white px-6 py-3 rounded-md font-medium"
              >
                Read More About Us
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80" 
                alt="Construction site" 
                className="rounded-lg shadow-md w-full h-64 object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80" 
                alt="Construction project" 
                className="rounded-lg shadow-md w-full h-64 object-cover mt-6"
              />
              <img 
                src="https://images.unsplash.com/photo-1487252665478-49b61b47f302?q=80" 
                alt="Bridge construction" 
                className="rounded-lg shadow-md w-full h-64 object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1460574283810-2aab119d8511?q=80" 
                alt="Building" 
                className="rounded-lg shadow-md w-full h-64 object-cover mt-6"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <StatsCounter />

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Services" 
            subtitle="We provide a wide range of construction and infrastructure development services."
            center={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Featured Projects" 
            subtitle="Take a look at some of our recently completed and ongoing projects."
            center={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {featuredProjects.map((project, index) => (
              <ProjectCard 
                key={index}
                title={project.title}
                location={project.location}
                value={project.value}
                imageUrl={project.imageUrl}
                isCompleted={project.isCompleted}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/projects" 
              className="inline-block bg-tscc-blue hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose <span className="text-tscc-red">Us</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                TSCC's well managed ability to complete projects both within cost and in a timely 
                fashion while ensuring quality stays paramount.
              </p>

              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="bg-tscc-red bg-opacity-10 p-2 rounded-full">
                      <HardHat className="text-tscc-red" size={20} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Experienced Team</h3>
                    <p className="text-gray-600">
                      Our team of highly experienced, dedicated managerial and technical professionals 
                      ensures zero delay in execution.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="bg-tscc-red bg-opacity-10 p-2 rounded-full">
                      <Wrench className="text-tscc-red" size={20} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Modern Equipment</h3>
                    <p className="text-gray-600">
                      We are equipped with the latest machinery and equipment to keep pace with 
                      everyday advances in the civil construction sphere.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="bg-tscc-red bg-opacity-10 p-2 rounded-full">
                      <Building className="text-tscc-red" size={20} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Quality Standards</h3>
                    <p className="text-gray-600">
                      We maintain the highest standards of workmanship in everything we do, ensuring 
                      superior quality in all projects.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[500px] overflow-hidden rounded-lg shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80" 
                alt="Construction" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-8">
                <div className="text-white">
                  <p className="font-bold text-xl mb-2">20+ Years of Excellence</p>
                  <p className="opacity-90">Building trust through quality construction since 2003</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <ClientsSlider />

      {/* Call to Action Section */}
      <section className="py-16 bg-tscc-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Construction Project?
          </h2>
          <p className="text-white text-lg mb-8 max-w-3xl mx-auto opacity-90">
            Contact us today to discuss your project requirements and get a free consultation.
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-white hover:bg-gray-100 text-tscc-blue px-8 py-4 rounded-md font-bold"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
