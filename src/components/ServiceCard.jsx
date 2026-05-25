import { motion } from 'framer-motion';

const ServiceCard = ({ title, description, icon: Icon, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className="glass-card p-6 group cursor-pointer relative"
    >
      {/* Hover glow effect background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-secondary-500/0 group-hover:from-primary-500/10 group-hover:to-secondary-500/10 transition-all duration-500 rounded-2xl" />
      
      <div className="relative z-10">
        <div className="w-14 h-14 rounded-xl bg-dark-700/50 flex items-center justify-center mb-6 border border-white/5 group-hover:border-primary-500/30 group-hover:shadow-lg group-hover:shadow-primary-500/20 transition-all duration-300">
          <Icon className="w-7 h-7 text-gray-300 group-hover:text-primary-400 transition-colors" />
        </div>
        
        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-glow transition-all">{title}</h3>
        <p className="text-gray-400 leading-relaxed text-sm group-hover:text-gray-300 transition-colors">
          {description}
        </p>
      </div>
      
      {/* Decorative line */}
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary-500 to-secondary-500 group-hover:w-full transition-all duration-500" />
    </motion.div>
  );
};

export default ServiceCard;
