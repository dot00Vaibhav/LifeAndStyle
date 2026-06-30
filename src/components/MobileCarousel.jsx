import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, useMotionValueEvent, animate } from 'framer-motion';
import ServiceCard from './ServiceCard';

const MobileCarouselCard = ({ service, index, x, itemWidth, contentWidth, appState, onCardClick }) => {
  const initialX = index * itemWidth;
  
  const wrappedX = useTransform(x, (currentX) => {
    const absolute = initialX + currentX;
    const half = contentWidth / 2;
    let wrapped = absolute % contentWidth;
    if (wrapped > half) wrapped -= contentWidth;
    if (wrapped < -half) wrapped += contentWidth;
    return wrapped;
  });

  const [isPhysicallyCentered, setIsPhysicallyCentered] = useState(false);
  
  useMotionValueEvent(wrappedX, "change", (latest) => {
     setIsPhysicallyCentered(Math.abs(latest) < itemWidth / 2);
  });

  const isFocusPhase = appState === 'PAUSED' || appState === 'FOCUSED' || appState === 'MANUAL_FOCUSED' || appState === 'UNFOCUSING';
  const shouldFocus = isPhysicallyCentered && (appState === 'FOCUSED' || appState === 'MANUAL_FOCUSED');
  const isAnotherFocused = !isPhysicallyCentered && (appState === 'FOCUSED' || appState === 'MANUAL_FOCUSED');
  const shouldInvertCard = isPhysicallyCentered && (appState === 'FOCUSED' || appState === 'MANUAL_FOCUSED');

  return (
    <motion.div
      onTap={(e) => {
        e.stopPropagation();
        onCardClick(index);
      }}
      style={{
        x: wrappedX,
        position: 'absolute',
        width: 300, // Intrinsic width remains 300
        height: 500, // Intrinsic height remains 500
        transformStyle: 'preserve-3d',
      }}
      animate={{
        scale: shouldFocus ? 1.05 : 0.75,
        opacity: isAnotherFocused ? 0.5 : (shouldFocus ? 1 : 0.8),
        z: shouldFocus ? 50 : 0,
        zIndex: shouldFocus ? 50 : 0,
        filter: isAnotherFocused ? 'blur(3px)' : 'blur(0px)'
      }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
    >
      <div className="absolute inset-0 rounded-[14px] overflow-hidden" style={{ backfaceVisibility: 'hidden' }}>
        <ServiceCard {...service} isCarouselCard isFocusedCarouselCard={shouldInvertCard} />
      </div>
    </motion.div>
  );
};

const MobileCarousel = ({ services }) => {
  const [appState, setAppState] = useState('SCROLLING');
  const currentIndexRef = useRef(0);
  const x = useMotionValue(0);
  const dragVelocity = useRef(0);
  
  const itemWidth = 220; // Scrolling distance per card
  const originalLength = services.length;
  
  // Duplicate services to ensure we have enough width for infinite scrolling
  const renderServices = [...services, ...services, ...services];
  const contentWidth = renderServices.length * itemWidth;

  const handleCardClick = (index) => {
    // Snap to the clicked card and hold focus
    const targetX = -index * itemWidth;
    animate(x, targetX, {
      ease: 'easeOut',
      duration: 0.4,
      onComplete: () => {
        currentIndexRef.current = index;
        setAppState('MANUAL_FOCUSED');
      }
    });
  };

  useEffect(() => {
    if (appState === 'SCROLLING') {
      const nextIndex = currentIndexRef.current + 1;
      const targetX = -nextIndex * itemWidth;
      
      const scrollAnim = animate(x, targetX, {
        ease: 'linear',
        duration: 2.5, // Subtle, slow movement
        onComplete: () => {
          currentIndexRef.current = nextIndex;
          setAppState('PAUSED');
        }
      });
      return () => scrollAnim.stop();
    }

    if (appState === 'PAUSED') {
      const timer = setTimeout(() => setAppState('FOCUSED'), 300);
      return () => clearTimeout(timer);
    }

    if (appState === 'FOCUSED') {
      const timer = setTimeout(() => setAppState('UNFOCUSING'), 10000);
      return () => clearTimeout(timer);
    }

    if (appState === 'UNFOCUSING') {
      const timer = setTimeout(() => setAppState('SCROLLING'), 500);
      return () => clearTimeout(timer);
    }

    if (appState === 'IDLE_AFTER_DRAG') {
      const timer = setTimeout(() => {
        const currentX = x.get();
        const nearestIndex = Math.round(-currentX / itemWidth);
        currentIndexRef.current = nearestIndex;
        
        const snapAnim = animate(x, -nearestIndex * itemWidth, {
          ease: 'easeOut',
          duration: 0.6,
          onComplete: () => setAppState('PAUSED')
        });
        return () => snapAnim.stop();
      }, 3000); // Wait 3 seconds before resuming
      return () => clearTimeout(timer);
    }
  }, [appState, x, itemWidth]);

  return (
    <motion.div 
      className="relative h-[550px] w-full max-w-full mx-auto mt-10 flex items-center justify-center overflow-hidden touch-pan-y"
      style={{ perspective: 1200 }}
      onTap={() => {
        // If clicking the background during a focus state, dismiss it
        if (appState === 'MANUAL_FOCUSED' || appState === 'FOCUSED' || appState === 'PAUSED') {
          setAppState('UNFOCUSING');
        }
      }}
      onPanStart={() => setAppState('DRAGGING')}
      onPan={(e, info) => {
        x.set(x.get() + info.delta.x);
        dragVelocity.current = info.velocity.x;
      }}
      onPanEnd={() => {
        const momentum = dragVelocity.current * 0.2;
        animate(x, x.get() + momentum, {
          type: 'spring',
          damping: 25,
          stiffness: 120,
          onComplete: () => setAppState('IDLE_AFTER_DRAG')
        });
      }}
    >
      <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[320px] pointer-events-none" />
      
      {renderServices.map((service, index) => (
        <MobileCarouselCard 
          key={`${service.title}-${index}`}
          index={index}
          service={service}
          x={x}
          itemWidth={itemWidth}
          contentWidth={contentWidth}
          appState={appState}
          onCardClick={handleCardClick}
        />
      ))}
    </motion.div>
  );
};

export default MobileCarousel;
