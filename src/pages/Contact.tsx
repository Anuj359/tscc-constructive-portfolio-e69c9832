
import { useState } from "react";
import SectionTitle from "@/components/SectionTitle";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<null | "success" | "error">(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would send the form data to a server
    // For now, just simulate a successful submission
    setFormStatus("success");
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    
    // Reset form status after 3 seconds
    setTimeout(() => {
      setFormStatus(null);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      details: [
        "Regd. Office: A-10, 3rd Floor, Rishi Nagar, Rani Bagh, Delhi – 110034",
        "Branch Office: Kh No 2648, Ashok Vihar Plot-111, Gurgaon, Haryana-122017"
      ]
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["mailtscc@gmail.com"]
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 XXXXX XXXXX", "+91 XXXXX XXXXX"]
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Monday - Saturday: 9:00 AM - 6:00 PM", "Sunday: Closed"]
    }
  ];

  return (
    <div>
      {/* Page Header */}
      <div className="bg-tscc-blue py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-lg text-white opacity-90 max-w-3xl mx-auto">
            Get in touch with our team to discuss your project requirements or enquire about our services
          </p>
        </div>
      </div>

      {/* Contact Info */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div>
              <SectionTitle 
                title="Get in Touch" 
                subtitle="We'd love to hear from you. Here's how you can reach us"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                {contactInfo.map((item, index) => (
                  <div 
                    key={index} 
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-center mb-4">
                      <div className="bg-tscc-red bg-opacity-10 p-2 rounded-full mr-3">
                        <item.icon className="text-tscc-red" size={20} />
                      </div>
                      <h3 className="font-semibold text-lg text-gray-900">{item.title}</h3>
                    </div>
                    <div className="space-y-1">
                      {item.details.map((detail, i) => (
                        <p key={i} className="text-gray-600">{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">Send us a Message</h3>
              
              {formStatus === "success" && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                  <p>Thank you for your message! We'll get back to you soon.</p>
                </div>
              )}

              {formStatus === "error" && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                  <p>Something went wrong. Please try again later.</p>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">Your Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tscc-red"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">Your Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tscc-red"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tscc-red"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-gray-700 mb-2">Subject *</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tscc-red"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="Project Enquiry">Project Enquiry</option>
                      <option value="Service Request">Service Request</option>
                      <option value="Job Application">Job Application</option>
                      <option value="General Enquiry">General Enquiry</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-2">Your Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tscc-red"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-tscc-red hover:bg-red-700 text-white px-6 py-3 rounded-md font-medium flex items-center justify-center"
                >
                  Send Message
                  <Send size={16} className="ml-2" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-8 text-center text-gray-900">Find Us On Map</h2>
          <div className="rounded-lg overflow-hidden shadow-lg h-[400px] bg-gray-200 flex items-center justify-center">
            <p className="text-gray-500 text-center p-4">
              Map would be embedded here.<br />
              For GitHub Pages, you'll need to replace this with an actual map iframe or image.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
