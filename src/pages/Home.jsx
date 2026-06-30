import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, FileText, PenTool, Globe, Printer, TrendingUp, ArrowRight } from 'lucide-react';
import Button from '../components/Button';
import ServiceCard from '../components/ServiceCard';
import bgImage from '../assets/quadrant-bg.jpeg';

const Home = () => {
  const [activeCard, setActiveCard] = useState("Accounting");
  const services = [
    {
      title: "Accounting",
      description: "Professional accounting services to keep your business finances accurate and compliant.",
      icon: Calculator
    },
    {
      title: "Individual ITR Filing",
      description: "Hassle-free income tax return filing for individuals with expert guidance.",
      icon: FileText
    },
    {
      title: "Graphic Designing",
      description: "Creative and modern graphic design solutions to elevate your brand identity.",
      icon: PenTool
    },
    {
      title: "Website Development",
      description: "Custom, responsive, and high-performance websites tailored to your business needs.",
      icon: Globe
    },
    {
      title: "Printing Services",
      description: "High-quality printing services for all your marketing and business materials.",
      icon: Printer
    },
    {
      title: "Digital Marketing",
      description: "Data-driven digital marketing strategies to grow your online presence and generate leads.",
      icon: TrendingUp
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-dark-900 transition-colors duration-300">
        <div className="absolute inset-0 z-0">
          <img 
            src={bgImage} 
            alt="Hero Background" 
            className="w-full h-full object-cover object-center"
          />
          {/* Solid overlay without gradients for contrast */}
          <div className="absolute inset-0 bg-white/20 dark:bg-black/65 backdrop-blur-[2px] transition-colors duration-300" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/50 dark:bg-white/10 border border-gray-300 dark:border-white/20 text-primary-600 dark:text-primary-400 text-sm font-bold tracking-wider mb-6 backdrop-blur-sm shadow-sm transition-colors duration-300">
              PREMIUM BUSINESS SOLUTIONS
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 text-primary-600 dark:text-white transition-colors duration-300">
              Your Complete <br className="hidden md:block" />
              <span className="text-gray-500 dark:text-primary-500">
                Digital & Business
              </span> Partner
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-primary-600 dark:text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed transition-colors duration-300">
              We empower professionals and businesses with top-tier services ranging from accounting to digital presence. Elevate your brand today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button to="/contact" variant="primary" size="lg" className="w-full sm:w-auto group">
                Contact Us Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button to="/#services" variant="outline" size="lg" className="w-full sm:w-auto">
                Explore Services
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quadrant Solution Section */}
      <section id="services" className="py-32 relative overflow-hidden bg-dark-800 transition-colors duration-300 group/container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-gray-500 dark:text-white transition-colors duration-300"
            >
              The <span className="text-primary-500">Quadrant</span> Solution
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto transition-colors duration-300"
            >
              Comprehensive solutions designed to help your business thrive in the modern landscape.
            </motion.p>
          </div>

          <div className="md:hidden relative h-[650px] w-full max-w-[340px] mx-auto mt-10">
             {services.map((service, index) => (
               <ServiceCard 
                 key={`mobile-${service.title}`}
                 title={service.title}
                 description={service.description}
                 icon={service.icon}
                 isMobileDeck={true}
                 isActive={activeCard === service.title}
                 onClick={() => setActiveCard(service.title)}
                 index={index}
                 totalCards={services.length}
               />
             ))}
          </div>

          <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {services.map((service, index) => (
              <ServiceCard 
                key={`desktop-${service.title}`}
                title={service.title}
                description={service.description}
                icon={service.icon}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Main CTA Section */}
      <section className="py-24 relative overflow-hidden bg-dark-900 transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-dark-800 p-12 md:p-16 rounded-3xl text-center border border-gray-200 dark:border-white/10 shadow-xl transition-colors duration-300"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white transition-colors duration-300">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto transition-colors duration-300">
              Join hundreds of successful professionals who trust Quadrant Solutions for their business and digital needs.
            </p>
            <Button to="/contact" variant="primary" size="lg" className="text-lg px-12 py-5 group shadow-primary-500/50">
              Contact Us Now
              <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
