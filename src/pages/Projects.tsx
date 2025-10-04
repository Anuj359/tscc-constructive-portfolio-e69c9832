
import { useState } from "react";
import SectionTitle from "@/components/SectionTitle";
import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
  // Filter state
  const [filter, setFilter] = useState<"all" | "completed" | "ongoing">("all");
  
  // Project data
  const completedProjects = [
    {
      title: "Tower B & C at MCD Civic Centre",
      location: "Minto Road, New Delhi",
      value: "Rs. 5 Crore",
      imageUrl: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?q=80",
    },
    {
      title: "Renovation of Banquet Hall",
      location: "Chatarpur Delhi",
      value: "Rs. 0.5 Crore",
      imageUrl: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80",
    },
    {
      title: "Queen Mary's School",
      location: "Sec-3, Rohini, Delhi",
      value: "Rs.0.8 Crore",
      imageUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80",
    },
    {
      title: "Krishi Vigyan Kendra",
      location: "Ujwa, Delhi",
      value: "Rs.1.7 Crore",
      imageUrl: "https://images.unsplash.com/photo-1487252665478-49b61b47f302?q=80",
    },
    {
      title: "Modification of Inter Continental Eros",
      location: "Nehru Place, Delhi",
      value: "Rs.6 Crore",
      imageUrl: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?q=80",
    },
    {
      title: "Hotel Holiday Inn",
      location: "Mayur Vihar Ph-3, Delhi",
      value: "Rs.2.1 Crore",
      imageUrl: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?q=80",
    },
    {
      title: "Multi Level Car Parking, DMRC",
      location: "Ajmeri Gate, New Delhi",
      value: "Rs.3.47 Crore",
      imageUrl: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80",
    },
    {
      title: "Silver Arrow Automobile Pvt. Ltd. Showroom",
      location: "Delhi",
      value: "Rs.3.5 Crore",
      imageUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80",
    },
  ];
  
  const ongoingProjects = [
    {
      title: "Construction of shed for open badminton courts",
      location: "PSOI club, Satya Marg, New Delhi",
      value: "Rs. 0.95 Crore",
      imageUrl: "https://images.unsplash.com/photo-1487252665478-49b61b47f302?q=80",
    },
    {
      title: "Providing and laying Interlocking pavers",
      location: "Safdarjung Road, New Delhi",
      value: "Rs. 0.55 Crore",
      imageUrl: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?q=80",
    },
    {
      title: "Restoration of approach road & pathway",
      location: "Lodi Garden, Lodhi road, New Delhi",
      value: "Rs. 0.27 Crore",
      imageUrl: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?q=80",
    },
    {
      title: "Construction of lift well",
      location: "PSOI Club, Vinay Marg, New Delhi",
      value: "Rs. 0.17 Crore",
      imageUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80",
    },
  ];

  // Filter projects based on current filter
  const filteredProjects = filter === "all"
    ? [...completedProjects.map(p => ({...p, isCompleted: true})), ...ongoingProjects.map(p => ({...p, isCompleted: false}))]
    : filter === "completed"
      ? completedProjects.map(p => ({...p, isCompleted: true}))
      : ongoingProjects.map(p => ({...p, isCompleted: false}));

  return (
    <div>
      {/* Page Header */}
      <div className="bg-tscc-blue py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Projects</h1>
          <p className="text-lg text-white opacity-90 max-w-3xl mx-auto">
            Explore our portfolio of completed and ongoing construction projects across India
          </p>
        </div>
      </div>

      {/* Projects List Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Project Portfolio" 
            subtitle="Browse through our extensive portfolio of construction projects"
            center={true}
          />
          
          {/* Filter Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setFilter("all")}
                className={`px-6 py-2 rounded-md ${
                  filter === "all" ? "bg-tscc-red text-blue-500" : "text-gray-700 hover:bg-gray-200"
                } transition-colors`}
              >
                All Projects
              </button>
              <button
                onClick={() => setFilter("completed")}
                className={`px-6 py-2 rounded-md ${
                  filter === "completed" ? "bg-tscc-red text-green-500" : "text-gray-700 hover:bg-gray-200"
                } transition-colors`}
              >
                Completed
              </button>
              <button
                onClick={() => setFilter("ongoing")}
                className={`px-6 py-2 rounded-md ${
                  filter === "ongoing" ? "bg-tscc-red text-orange-500" : "text-gray-700 hover:bg-gray-200"
                } transition-colors`}
              >
                Ongoing
              </button>
            </div>
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProjects.map((project, index) => (
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
        </div>
      </section>

      {/* Projects By Category */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Projects By Category</h2>
            <p className="text-lg text-gray-600 mb-4">Explore our expertise across different construction categories</p>
            <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              {
                title: "Commercial Projects",
                count: "15+",
                image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?q=80"
              },
              {
                title: "Residential Projects",
                count: "30+",
                image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80"
              },
              {
                title: "Infrastructure Projects",
                count: "25+",
                image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80"
              },
            ].map((category, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
                <img 
                  src={category.image}
                  alt={category.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                  <p className="mt-2">{category.count} Projects</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 md:py-16 bg-tscc-red">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
          <p className="text-white mb-8 max-w-2xl mx-auto">
            Let's discuss how we can bring your construction vision to life with our expertise and experience.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-orange-500 text-tscc-red px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
          >
            Get a Free Consultation
          </a>
        </div>
      </section>
    </div>
  );
};

export default Projects;
