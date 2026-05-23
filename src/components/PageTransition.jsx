import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 15,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.6, 0.3, 1.0], // cubic-bezier for smooth deceleration
    },
  },
  exit: {
    opacity: 0,
    y: -15,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.6, 0.3, 1.0],
    },
  },
};

export const PageTransition = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      className="w-full flex-grow flex flex-col"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
