import { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, MessageCircle, Mail, Phone, Send, PhoneCall } from 'lucide-react';
import Button from '../components/Button';

const Contact = () => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    description: ''
  });

  const services = [
    "Accounting",
    "ITR Filing",
    "Graphic Designing",
    "Website Development",
    "Printing Services",
    "Digital Marketing"
  ];

  const toggleService = (service) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter(s => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", { ...formData, selectedServices });
    alert("Thank you for contacting us! We will get back to you soon.");
    setFormData({ name: '', email: '', title: '', description: '' });
    setSelectedServices([]);
  };

  const contactMethods = [
    {
      name: "Instagram",
      icon: Camera,
      value: "[YOUR_INSTAGRAM_ID]",
      color: "hover:text-pink-500 hover:border-pink-500",
      bgHover: "group-hover:bg-pink-500/10"
    },
    {
      name: "Business WhatsApp",
      icon: MessageCircle,
      value: "[YOUR_WHATSAPP_NUMBER]",
      color: "hover:text-green-500 hover:border-green-500",
      bgHover: "group-hover:bg-green-500/10"
    },
    {
      name: "Email",
      icon: Mail,
      value: "[YOUR_EMAIL]",
      color: "hover:text-primary-500 hover:border-primary-500",
      bgHover: "group-hover:bg-primary-500/10"
    },
    {
      name: "Phone Number",
      icon: Phone,
      value: "[YOUR_PHONE_NUMBER]",
      color: "hover:text-secondary-500 hover:border-secondary-500",
      bgHover: "group-hover:bg-secondary-500/10"
    }
  ];

  return (
    <div className="pt-24 pb-16 min-h-screen">
      {/* Header Section */}
      <section className="text-center mb-16 px-4">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-extrabold mb-6"
        >
          Let's Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">Together</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-400 max-w-2xl mx-auto"
        >
          Have a project in mind or need professional services? Reach out to us today. Our team is ready to help your business grow.
        </motion.p>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          
          {/* Contact Options (Left Column) */}
          <div className="lg:col-span-2 space-y-8">
            <h3 className="text-2xl font-bold mb-6 border-b border-white/10 pb-4">Direct Contact</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {contactMethods.map((method, index) => (
                <motion.div 
                  key={method.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + (index * 0.1) }}
                  className={`glass-card p-6 flex items-center space-x-4 border border-white/5 cursor-pointer transition-all duration-300 group ${method.color}`}
                >
                  <div className={`p-3 rounded-lg bg-dark-700 transition-colors ${method.bgHover}`}>
                    <method.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">{method.name}</p>
                    <p className="font-semibold text-white group-hover:text-inherit transition-colors">
                      {method.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact Form (Right Column) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-3 glass p-8 md:p-10 rounded-2xl border border-white/10 relative overflow-hidden"
          >
            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full mix-blend-screen filter blur-[80px]" />
            
            <h3 className="text-2xl font-bold mb-8 relative z-10">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              
              {/* Service Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">
                  What services are you interested in?
                </label>
                <div className="flex flex-wrap gap-3">
                  {services.map((service) => (
                    <button
                      key={service}
                      type="button"
                      onClick={() => toggleService(service)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                        selectedServices.includes(service)
                          ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white border-transparent shadow-lg shadow-primary-500/25'
                          : 'bg-dark-800 text-gray-400 border-white/10 hover:border-primary-500/50 hover:text-white'
                      }`}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark-800/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark-800/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-300 mb-2">Query / Project Title</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  className="w-full bg-dark-800/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                  placeholder="E.g., Need a new e-commerce website"
                />
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-2">Project Description</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full bg-dark-800/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors resize-none"
                  placeholder="Tell us more about your requirements..."
                ></textarea>
              </div>

              <Button type="submit" variant="primary" className="w-full sm:w-auto group">
                Send Message
                <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>

            </form>
          </motion.div>
        </div>
      </div>

      {/* Final CTA Section */}
      <section className="mt-24 max-w-4xl mx-auto px-4 text-center">
        <div className="glass-card p-10 md:p-14 border-t-4 border-t-primary-500">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Immediate Assistance?</h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            Our experts are available right now. Skip the form and contact us directly through your preferred channel.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a 
              href="#" /* REPLACE WITH ACTUAL WHATSAPP LINK */
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-lg font-bold text-white bg-[#25D366] hover:bg-[#128C7E] shadow-lg shadow-[#25D366]/30 hover:shadow-[#25D366]/50 hover:-translate-y-1 transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Us
            </a>
            
            <a 
              href="#" /* REPLACE WITH ACTUAL CALL LINK (e.g. tel:+1234567890) */
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-lg font-bold text-white bg-gradient-to-r from-secondary-600 to-blue-500 hover:from-secondary-500 hover:to-blue-400 shadow-lg shadow-secondary-500/30 hover:shadow-secondary-500/50 hover:-translate-y-1 transition-all duration-300"
            >
              <PhoneCall className="w-5 h-5 mr-2" />
              Call Now
            </a>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Contact;
