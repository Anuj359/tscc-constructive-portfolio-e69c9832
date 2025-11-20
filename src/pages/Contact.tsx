
import { useState, useEffect } from "react";
import SectionTitle from "@/components/SectionTitle";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
      reset: (widgetId?: number) => void;
      getResponse: (widgetId?: number) => string;
    };
    enableSubmit: () => void;
  }
}

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<null | "success" | "error">(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitEnabled, setSubmitEnabled] = useState(false);

  useEffect(() => {
    // Load reCAPTCHA v2 script
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    // Enable submit callback
    window.enableSubmit = () => setSubmitEnabled(true);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!submitEnabled) {
      setFormStatus("error");
      return;
    }

    setIsSubmitting(true);
    setFormStatus(null);

    try {
      // Get reCAPTCHA response - reCAPTCHA v2 creates a textarea with this name
      const recaptchaElement = document.querySelector('textarea[name="g-recaptcha-response"]') as HTMLTextAreaElement;
      const recaptchaResponse = recaptchaElement?.value;

      if (!recaptchaResponse || recaptchaResponse.length === 0) {
        setFormStatus("error");
        setIsSubmitting(false);
        alert("Please complete the reCAPTCHA verification before submitting.");
        return;
      }

      // Prepare form data
      const formDataToSend = new FormData();
      formDataToSend.append("accessKey", "sf_hj0h55l4b875dka92mi4bj9f");
      formDataToSend.append("subject", `New Contact Form Submission from TSCC Website - ${formData.subject}`);
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone || "");
      formDataToSend.append("message", formData.message);
      formDataToSend.append("honeypot", "");
      formDataToSend.append("g-recaptcha-response", recaptchaResponse);

      // Submit to staticforms.xyz
      const response = await fetch("https://api.staticforms.xyz/submit", {
        method: "POST",
        body: formDataToSend,
      });

      let result;
      try {
        result = await response.json();
      } catch (e) {
        // If response is not JSON, check status
        if (response.ok) {
          result = { success: true };
        } else {
          result = { success: false, error: "Server error" };
        }
      }

      if (response.ok && (result.success !== false)) {
        setFormStatus("success");
        // Reset form after submission
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setSubmitEnabled(false);
        // Reset reCAPTCHA after a short delay
        setTimeout(() => {
          if (window.grecaptcha && typeof window.grecaptcha.reset === 'function') {
            try {
              window.grecaptcha.reset();
            } catch (e) {
              console.log("reCAPTCHA reset:", e);
            }
          }
        }, 1000);
      } else {
        console.error("Form submission failed:", result);
        setFormStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setFormStatus("error");
    } finally {
      setIsSubmitting(false);
      // Reset form status after 5 seconds
      setTimeout(() => {
        setFormStatus(null);
      }, 5000);
    }
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
      <div className="bg-gradient-to-br from-construction-blue to-construction-blue/80 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-background mb-4">Contact Us</h1>
          <p className="text-lg text-background/90 max-w-3xl mx-auto font-medium">
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
                    className="bg-card p-6 rounded-xl anime-shadow hover:anime-shadow-hover transition-all border-2 border-construction-dark/10"
                  >
                    <div className="flex items-center mb-4">
                      <div className="bg-primary/10 p-2 rounded-xl mr-3 anime-glow-hover">
                        <item.icon className="text-primary" size={20} />
                      </div>
                      <h3 className="font-black text-lg text-construction-dark">{item.title}</h3>
                    </div>
                    <div className="space-y-1">
                      {item.details.map((detail, i) => (
                        <p key={i} className="text-foreground font-medium">{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card rounded-xl anime-shadow p-8 border-2 border-construction-dark/10">
              <h3 className="text-2xl font-black mb-6 text-construction-dark">Send us a Message</h3>
              
              {formStatus === "success" && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                  <p>Thank you for your message! We'll get back to you soon.</p>
                </div>
              )}

              {formStatus === "error" && (
                <div className="bg-red-100 border-2 border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6">
                  <p className="font-bold">Something went wrong. Please complete the reCAPTCHA and try again.</p>
                  <p className="text-sm mt-1">If the problem persists, please contact us directly at mailtscc@gmail.com</p>
                </div>
              )}

              <form onSubmit={handleSubmit} id="contactForm">
                {/* Hidden fields for staticforms.xyz */}
                <input type="hidden" name="accessKey" value="sf_hj0h55l4b875dka92mi4bj9f" />
                <input type="text" name="honeypot" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-foreground mb-2 font-bold">Your Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border-2 border-construction-dark/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-foreground mb-2 font-bold">Your Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border-2 border-construction-dark/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="phone" className="block text-foreground mb-2 font-bold">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border-2 border-construction-dark/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-foreground mb-2 font-bold">Subject *</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border-2 border-construction-dark/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
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
                  <label htmlFor="message" className="block text-foreground mb-2 font-bold">Your Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border-2 border-construction-dark/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                    required
                  ></textarea>
                </div>

                {/* reCAPTCHA v2 */}
                <div className="mb-4">
                  <div
                    className="g-recaptcha"
                    data-sitekey="6LdtIhcrAAAAADjq-ysNga9cDiRWcW00CEwx1J9L"
                    data-callback="enableSubmit"
                  ></div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || !submitEnabled}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-xl font-bold flex items-center justify-center transition-all transform hover:scale-105 anime-shadow border-2 border-construction-dark disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin mr-2">⏳</span>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={16} className="ml-2" />
                    </>
                  )}
                </button>

                <p className="text-xs text-muted-foreground mt-4">
                  By submitting this form you are authorizing TS Construction Company to contact you.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-black mb-8 text-center text-construction-dark">Find Us On Map</h2>
          <div className="rounded-xl overflow-hidden anime-shadow h-[400px] bg-muted flex items-center justify-center border-2 border-construction-dark/10">
            <p className="text-muted-foreground text-center p-4 font-medium">
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
