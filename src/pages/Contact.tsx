
import ContactForm from "@/components/ContactForm";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <main className="pt-24">
      <section className="section-padding bg-harper-cream">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-harper-navy mb-6 animate-fade-in">
              Let's Work <span className="text-harper-terracotta">Together</span>
            </h1>
            <p className="text-gray-700 text-lg animate-fade-in">
              Have a project in mind? I'd love to hear from you. Get in touch and let's create something amazing.
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Information */}
            <div className="lg:w-1/3">
              <div className="bg-white p-8 rounded-lg shadow-md h-full">
                <h2 className="text-2xl font-bold text-harper-navy mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail size={20} className="text-harper-terracotta mt-1 mr-4" />
                    <div>
                      <h3 className="font-medium text-harper-navy">Email</h3>
                      <a 
                        href="mailto:alex.harper@example.com" 
                        className="text-gray-700 hover:text-harper-terracotta transition-colors"
                      >
                        alex.harper@example.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone size={20} className="text-harper-terracotta mt-1 mr-4" />
                    <div>
                      <h3 className="font-medium text-harper-navy">Phone</h3>
                      <a 
                        href="tel:+14155552671" 
                        className="text-gray-700 hover:text-harper-terracotta transition-colors"
                      >
                        (415) 555-2671
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin size={20} className="text-harper-terracotta mt-1 mr-4" />
                    <div>
                      <h3 className="font-medium text-harper-navy">Location</h3>
                      <p className="text-gray-700">San Francisco, California</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <h3 className="font-medium text-harper-navy mb-4">Connect</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="#" 
                      className="bg-harper-cream h-10 w-10 rounded-full flex items-center justify-center text-harper-navy hover:bg-harper-terracotta hover:text-white transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram size={18} />
                    </a>
                    <a 
                      href="#" 
                      className="bg-harper-cream h-10 w-10 rounded-full flex items-center justify-center text-harper-navy hover:bg-harper-terracotta hover:text-white transition-colors"
                      aria-label="Twitter"
                    >
                      <Twitter size={18} />
                    </a>
                    <a 
                      href="#" 
                      className="bg-harper-cream h-10 w-10 rounded-full flex items-center justify-center text-harper-navy hover:bg-harper-terracotta hover:text-white transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={18} />
                    </a>
                    <a 
                      href="#" 
                      className="bg-harper-cream h-10 w-10 rounded-full flex items-center justify-center text-harper-navy hover:bg-harper-terracotta hover:text-white transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:w-2/3">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-harper-navy mb-6">Send Me a Message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-harper-navy mb-10 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              {[
                {
                  question: "What is your design process like?",
                  answer: "My design process typically involves discovery (understanding your needs and goals), research, concepting, design development, refinement, and final delivery. Throughout this process, I maintain open communication and seek your feedback at key milestones."
                },
                {
                  question: "How long does a typical project take?",
                  answer: "Project timelines vary depending on scope and complexity. A brand identity might take 4-6 weeks, while a simple website could take 2-3 weeks. When you reach out, I'll provide a custom timeline based on your specific project needs."
                },
                {
                  question: "Do you work with clients remotely?",
                  answer: "Absolutely! I work with clients worldwide through video calls, email, and collaborative design tools. Distance is never an obstacle to creating great work together."
                },
                {
                  question: "What information do you need to provide a quote?",
                  answer: "To provide an accurate quote, I typically need to understand your project goals, timeline, scope of work, and any specific requirements or constraints. The more details you can share, the better I can tailor my services to your needs."
                }
              ].map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-6">
                  <h3 className="text-xl font-semibold text-harper-navy mb-3">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Working Hours */}
      <section className="section-padding bg-harper-cream">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="text-3xl font-bold text-harper-navy mb-6">Working Hours</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4">
                <h3 className="font-semibold text-harper-navy">Weekdays</h3>
                <p className="text-gray-700">9:00 AM - 6:00 PM PST</p>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-harper-navy">Weekends</h3>
                <p className="text-gray-700">By appointment only</p>
              </div>
            </div>
          </div>
          <p className="mt-6 text-gray-700">
            While these are my standard hours, I'm flexible and can accommodate different time zones and schedules when needed.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Contact;
