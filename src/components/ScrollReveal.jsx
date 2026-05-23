import React from 'react';
import { motion } from 'framer-motion';

const variants = {
  hidden: (direction) => ({
    opacity: 0,
    y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
    x: direction === 'left' ? 50 : direction === 'right' ? -50 : 0,
    scale: direction === 'scale' ? 0.95 : 1,
  }),
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20,
    },
  },
};

export const ScrollReveal = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.5,
  className = '',
}) => {
  return (
    <motion.div
      custom={direction}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={variants}
      transition={{ delay, duration }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
export default ScrollReveal;
