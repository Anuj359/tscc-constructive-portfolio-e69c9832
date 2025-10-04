
import SectionTitle from "@/components/SectionTitle";
import TeamMemberCard from "@/components/TeamMemberCard";
import StatsCounter from "@/components/StatsCounter";
import { Check } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Mr. Trilok Singh",
      position: "Founder & CEO",
      imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80",
      description: "Mr. Trilok Singh is the founder of this company. He is a Gold Medalist in wrestling from Delhi University and has spent his entire 22 years of professional life growing this company."
    },
    {
      name: "Mr. Madhav Chaudhary",
      position: "Head Manager",
      imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80",
      description: "Mr. Madhav Chaudhary, son of our founder, is contributing to the company for the last 7 years. He has completed his Bachelor's degree in Civil discipline."
    }
  ];

  const missionPoints = [
    "Internally manage every project in PMC setting which includes Projects Scheduling, Resources Scheduling, Milestone creation.",
    "Mechanization of Major construction activities with help of advanced machinery and equipment.",
    "Continue a legacy of safety standards and zero incidences of undue claims, arbitration & disputes.",
    "Continue to invest in both Human and Technological advancement of the company through training and education."
  ];

  return (
    <div>
      {/* Page Header */}
      <div className="bg-tscc-blue py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Us</h1>
          <p className="text-lg text-white opacity-90 max-w-3xl mx-auto">
            Learn more about T.S Construction Company, our history, mission, and the team behind our success.
          </p>
        </div>
      </div>

      {/* Company Overview */}
      <section className="py-16 md:py-24" >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle 
                title="Our Company" 
                subtitle="A leading construction company in Delhi & NCR since 2003"
              />
              <p className="text-gray-600 mb-6">
                T.S Construction Company (TSCC) is one of the leading construction companies of Delhi & NCR region, 
                with operations panning throughout India. Since 2003 along with our sister concerns Madhav Buildwell 
                Private Limited and T.S. Infra Services LLP, we have been at the forefront of construction methodologies ever since.
              </p>
              <p className="text-gray-600 mb-6">
                We are currently involved with numerous medium-to–large scale infrastructures, mass housing, commercial, 
                road, industrial and other construction projects all over India. Large real estate enterprises such as 
                Indian Railways, NDMC, IJM India Limited, Lanco Infra, Madhucon Projects, and many others have shown faith in us.
              </p>
              <p className="text-gray-600">
                TSCC's well managed ability to complete projects both within cost and in a timely fashion while 
                ensuring quality stays paramount. We are equipped with the latest machinery and equipment to keep 
                pace with everyday advances in the civil construction sphere, enabling us to ensure the highest standards 
                of workmanship in everything we do.
              </p>
            </div>
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80" 
                  alt="TS Construction Company Building" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-6 right-6 bg-tscc-red text-white py-4 px-6 rounded-lg shadow-md">
                <p className="font-bold text-xl">Since 2003</p>
                <p>Building Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <StatsCounter />

      {/* Mission & Vision */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Mission & Vision" 
            subtitle="Building a better future through quality construction"
            center={true}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-10 items-center">
            <div>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-semibold mb-6 text-gray-900">Company Mission</h3>
                <ul className="space-y-4">
                  {missionPoints.map((point, index) => (
                    <li key={index} className="flex">
                      <div className="flex-shrink-0 mr-3 mt-1">
                        <Check className="text-tscc-red" size={20} />
                      </div>
                      <p className="text-gray-700">{point}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">Our Vision</h3>
              <p className="text-gray-700 mb-4">
                To be the most trusted and respected construction company, known for our commitment to quality, 
                safety, and customer satisfaction. We aim to set new benchmarks in the construction industry through 
                innovation, excellence, and sustainable practices.
              </p>
              <p className="text-gray-700">
                Our vision extends to continuously investing in both human and technological advancement, ensuring our 
                team has access to the best training and tools to deliver outstanding results for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Leadership Team" 
            subtitle="Meet the people who make our company successful"
            center={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <TeamMemberCard 
                key={index}
                name={member.name}
                position={member.position}
                imageUrl={member.imageUrl}
                description={member.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Organization Chart Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Organization" 
            subtitle="A team of dedicated professionals working together"
            center={true}
          />

          <div className="mt-10 bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-semibold mb-6 text-gray-900">List of Manpower</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="py-3 px-4 text-left border-b-2 border-gray-200 bg-gray-50 font-semibold text-gray-900">S.No.</th>
                    <th className="py-3 px-4 text-left border-b-2 border-gray-200 bg-gray-50 font-semibold text-gray-900">Designation/Department</th>
                    <th className="py-3 px-4 text-left border-b-2 border-gray-200 bg-gray-50 font-semibold text-gray-900">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="py-2 px-4 border-b border-gray-200 text-gray-700">1</td>
                    <td className="py-2 px-4 border-b border-gray-200 text-gray-700">Vice President- Project & Planning</td>
                    <td className="py-2 px-4 border-b border-gray-200 text-gray-700">1</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-2 px-4 border-b border-gray-200 text-gray-700">2</td>
                    <td className="py-2 px-4 border-b border-gray-200 text-gray-700">General Manager</td>
                    <td className="py-2 px-4 border-b border-gray-200 text-gray-700">3</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-2 px-4 border-b border-gray-200 text-gray-700">3</td>
                    <td className="py-2 px-4 border-b border-gray-200 text-gray-700">Project Manager</td>
                    <td className="py-2 px-4 border-b border-gray-200 text-gray-700">3</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-2 px-4 border-b border-gray-200 text-gray-700">4</td>
                    <td className="py-2 px-4 border-b border-gray-200 text-gray-700">Dy. P M</td>
                    <td className="py-2 px-4 border-b border-gray-200 text-gray-700">3</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-2 px-4 border-b border-gray-200 text-gray-700">5</td>
                    <td className="py-2 px-4 border-b border-gray-200 text-gray-700">Civil Engineers</td>
                    <td className="py-2 px-4 border-b border-gray-200 text-gray-700">10</td>
                  </tr>
                  <tr className="bg-gray-50 font-semibold">
                    <td className="py-2 px-4 border-b border-gray-200 text-gray-900"></td>
                    <td className="py-2 px-4 border-b border-gray-200 text-gray-900">Total</td>
                    <td className="py-2 px-4 border-b border-gray-200 text-gray-900">20</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
