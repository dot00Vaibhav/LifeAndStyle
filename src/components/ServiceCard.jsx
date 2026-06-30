import { motion } from 'framer-motion';
import { Image as ImageIcon } from 'lucide-react';

const ServiceCard = ({ 
  title, 
  description, 
  icon: Icon, 
  delay = 0,
  isActive = false,
  isMobileDeck = false,
  isCarouselCard = false,
  isFocusedCarouselCard = false,
  isMobileBack = false,
  onClick,
  index = 0,
  totalCards = 1
}) => {
  // Mobile stacked deck animation props using 3D perspective
  const mobileAnimate = isMobileDeck ? {
    top: isActive ? 0 : index * 25 + 20,
    scale: isActive ? 1.05 : 1 - (totalCards - index) * 0.02,
    zIndex: isActive ? 50 : index,
    opacity: isActive ? 1 : 0.8,
    rotateX: isActive ? 0 : 5, // subtle 3D tilt when stacked
  } : {};

  return (
    <motion.div
      layout={isMobileDeck}
      initial={isMobileDeck ? false : { opacity: 0, y: 20 }}
      whileInView={isMobileDeck ? undefined : { opacity: 1, y: 0 }}
      viewport={isMobileDeck ? undefined : { once: true, margin: "-50px" }}
      animate={isMobileDeck ? mobileAnimate : undefined}
      transition={{ duration: 0.4, ...(isMobileDeck ? { type: "spring", stiffness: 300, damping: 25 } : { delay }) }}
      onClick={onClick}
      style={{ perspective: 1000 }}
      className={`
        group/card relative rounded-2xl overflow-hidden cursor-pointer flex flex-col p-[4px]
        border transition-all duration-400 ease-in-out transform-gpu
        ${isMobileDeck ? 'absolute left-0 right-0 h-[480px]' : (isCarouselCard ? 'w-full h-full' : 'h-[500px] w-full')}
        
        /* Mobile Active State */
        ${(isMobileDeck && isActive) ? 'border-gray-500 shadow-2xl bg-[#333333]' : 'border-gray-200 dark:border-white/10 bg-white dark:bg-dark-800 shadow-md'}
        
        /* Desktop Hover State & Surrounding Dim/Blur (disabled on carousel card) */
        ${(!isMobileDeck && !isCarouselCard) ? 'md:group-hover/container:opacity-50 md:group-hover/container:blur-[2px] md:hover:!opacity-100 md:hover:!blur-none md:hover:scale-105 md:hover:shadow-[0_30px_60px_rgba(0,0,0,0.4)] md:hover:border-transparent' : ''}
      `}
    >
      {/* Rotating Gradient Background Div */}
      {!isMobileBack && (
        <div 
          className={`absolute w-[200%] h-[200%] -top-[50%] -left-[50%] animate-spin z-0 pointer-events-none transition-opacity duration-300 ${isFocusedCarouselCard ? 'opacity-100' : 'opacity-0 md:group-hover/card:opacity-100'}`}
          style={{
            background: 'conic-gradient(from 0deg, transparent 0deg, transparent 270deg, #16a34a 315deg, #eab308 360deg)',
            animationDuration: '3s'
          }}
        />
      )}
      
      <div className={`relative z-10 w-full h-full rounded-[12px] overflow-hidden flex flex-col transition-colors duration-400 ${isFocusedCarouselCard ? 'bg-white' : 'bg-white dark:bg-dark-800 md:group-hover/card:bg-white'}`}>
        {isMobileBack ? (
          <div className="flex flex-col items-center justify-center h-full p-8 text-center bg-dark-700">
            <div className="w-16 h-16 rounded-full bg-primary-500/10 flex items-center justify-center mb-6">
              <Icon className="w-8 h-8 text-primary-500" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">
              {title}
            </h3>
            <p className="text-gray-300 leading-relaxed text-sm mb-8">
              {description}
            </p>
            <button className="px-6 py-3 bg-primary-600 hover:bg-primary-500 text-white font-medium rounded-lg transition-colors w-full uppercase tracking-wider text-sm shadow-lg shadow-primary-500/20">
              Learn More
            </button>
          </div>
        ) : (
          <>
            {/* Image / Placeholder Area */}
            <div className={`h-[200px] w-full relative overflow-hidden shrink-0 transition-colors duration-400 ${isFocusedCarouselCard ? 'bg-gray-100' : 'bg-gray-100 dark:bg-dark-700'}`}>
              <div className={`w-full h-full flex flex-col items-center justify-center p-6 text-center relative transition-colors duration-400 ${isFocusedCarouselCard ? 'bg-gray-100' : 'bg-gray-100 dark:bg-dark-700 md:group-hover/card:bg-gray-100'}`}>
              <ImageIcon className={`w-10 h-10 mb-3 transition-colors duration-400 z-10 ${isFocusedCarouselCard ? 'text-yellow-500' : 'text-gray-400 dark:text-gray-500 md:group-hover/card:text-yellow-500'}`} strokeWidth={1.5} />
                <p className={`text-sm font-semibold transition-colors duration-400 z-10 tracking-wide uppercase ${isFocusedCarouselCard ? 'text-gray-900' : 'text-gray-600 dark:text-gray-300 md:group-hover/card:text-gray-900'}`}>
                  Visual coming soon
                </p>
                <p className={`text-xs mt-2 z-10 max-w-[220px] leading-relaxed transition-colors duration-400 ${isFocusedCarouselCard ? 'text-gray-600' : 'text-gray-500 dark:text-gray-400 md:group-hover/card:text-gray-600'}`}>
                Illustration unavailable. Please explore the details below.
              </p>
            </div>
          </div>
    
          {/* Content Area */}
          <div className="p-6 md:p-8 flex-grow flex flex-col justify-center bg-transparent transition-colors duration-400">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 border transition-all duration-300 ${isFocusedCarouselCard ? 'bg-gray-100 border-gray-200' : 'bg-gray-100 dark:bg-dark-700 border-gray-200 dark:border-white/5 md:group-hover/card:bg-gray-100 md:group-hover/card:border-gray-200'}`}>
              <Icon className={`w-6 h-6 transition-colors ${isFocusedCarouselCard ? 'text-primary-600' : 'text-primary-500 md:group-hover/card:text-primary-600'}`} />
            </div>
                  <h3 className={`text-xl font-bold mb-3 transition-colors duration-400 ${isFocusedCarouselCard ? 'text-gray-900' : 'text-gray-900 dark:text-white md:group-hover/card:text-gray-900'}`}>
              {title}
            </h3>
            <p className={`leading-relaxed text-sm transition-colors duration-400 ${isFocusedCarouselCard ? 'text-gray-600' : 'text-gray-600 dark:text-gray-400 md:group-hover/card:text-gray-600'}`}>
              {description}
            </p>
          </div>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default ServiceCard;
