'use client';

import { motion } from 'framer-motion';
import { AnimatedSectionProps } from '@/types';

const animations = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  slideUp: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  },
  slideLeft: {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 }
  },
  slideRight: {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 }
  }
};

export default function AnimatedSection({ 
  children, 
  animation = 'fadeIn', 
  delay = 0, 
  className = '' 
}: AnimatedSectionProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: [0.25, 0.1, 0.25, 1] 
      }}
      variants={animations[animation]}
      className={className}
    >
      {children}
    </motion.div>
  );
}