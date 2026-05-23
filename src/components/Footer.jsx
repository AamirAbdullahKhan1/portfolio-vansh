import React from 'react';
import { motion } from 'framer-motion';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/vansh-jain-645b67292/' },
    { name: 'GitHub', url: 'https://github.com/VanshJain609' },
    { name: 'Polyhaven', url: 'https://polyhaven.com' },
    { name: 'ArtStation', url: 'https://artstation.com' },
  ];

  return (
    <footer className="w-full bg-[#f4fbf7]/40 border-t border-brand-mint/40 py-8 px-6 sm:px-8 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Brand Name */}
        <div className="font-display font-bold text-lg text-brand-dark">
          Vansh Jain
        </div>

        {/* Center: Social Links */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
          {links.map((link) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-gray-500 hover:text-brand-accent transition-colors duration-200"
              whileHover={{ y: -2 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        {/* Right: Copyright */}
        <div className="text-xs sm:text-sm text-brand-accent font-semibold tracking-wide text-center md:text-right">
          © {currentYear} Vansh Jain. Built with{' '}
          <span className="text-brand-dark">Precision & Imagination.</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
