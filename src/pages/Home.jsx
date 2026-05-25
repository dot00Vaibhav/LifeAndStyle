import { motion } from 'framer-motion';
import { Calculator, FileText, PenTool, Globe, Printer, TrendingUp, ArrowRight } from 'lucide-react';
import Button from '../components/Button';
import ServiceCard from '../components/ServiceCard';

const Home = () => {
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
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full mix-blend-screen filter blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-500/20 rounded-full mix-blend-screen filter blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-primary-400 text-sm font-semibold tracking-wider mb-6 backdrop-blur-sm">
              PREMIUM BUSINESS SOLUTIONS
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
              Your Complete <br className="hidden md:block" />
              <span className="bg-clip-text bg-gradient-to-r from-primary-400 via-secondary-400 to-primary-400 animate-gradient-x">
                Digital & Business
              </span> Partner
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
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

      {/* Services Section */}
      <section id="services" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold mb-4"
            >
              Our <span className="text-primary-400">Services</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 text-lg max-w-2xl mx-auto"
            >
              Comprehensive solutions designed to help your business thrive in the modern landscape.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={service.title}
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
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-primary-900/20 to-dark-900" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass p-12 md:p-16 rounded-3xl text-center border-primary-500/20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Join hundreds of successful professionals who trust LifeandStyle for their business and digital needs.
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
