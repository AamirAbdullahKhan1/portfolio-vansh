import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, User, Menu, X, Hexagon } from 'lucide-react';

export const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 w-full px-4 sm:px-6 lg:px-8 py-4">
      <div className="max-w-7xl mx-auto">
        <nav className="glass-overlay border border-brand-mint/60 rounded-full px-6 py-3.5 shadow-sm flex items-center justify-between transition-all duration-300">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <Hexagon className="h-6 w-6 text-brand-accent fill-brand-accent/10 transition-transform duration-500 group-hover:rotate-180" />
            <span className="font-display font-bold text-lg text-brand-dark tracking-tight">
              Vansh Jain
            </span>
          </Link>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative font-sans text-sm font-semibold transition-colors duration-200 py-1 hover:text-brand-accent"
                style={{
                  color: isActive(link.path) ? 'var(--brand-accent)' : 'text-brand-textMuted',
                }}
              >
                <span className={isActive(link.path) ? 'text-brand-accent font-bold font-display' : 'text-gray-600'}>
                  {link.name}
                </span>
                {isActive(link.path) && (
                  <motion.div
                    layoutId="navbar-underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-accent rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full bg-brand-mint/40 hover:bg-brand-mint/60 border border-brand-mint/40 text-brand-dark transition-colors"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-4 right-4 z-50 md:hidden glass-overlay border border-brand-mint/60 rounded-3xl p-6 shadow-lg"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-semibold py-2 px-4 rounded-xl transition-all duration-200 ${
                    isActive(link.path)
                      ? 'bg-brand-mint text-brand-accent'
                      : 'text-gray-600 hover:bg-brand-mint/30 hover:text-brand-dark'
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <hr className="border-brand-mint/60 my-2" />

              <div className="flex items-center justify-between gap-4 px-4 pt-2">
                <div className="relative flex-grow">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full bg-brand-mint/40 text-xs text-brand-dark pl-9 pr-4 py-2.5 rounded-xl border border-transparent focus:border-brand-accent/20 focus:outline-none"
                  />
                  <Search className="absolute left-3 top-3 h-3.5 w-3.5 text-gray-400" />
                </div>
                <button className="h-10 w-10 flex items-center justify-center rounded-xl bg-brand-mint/40 text-brand-dark border border-brand-mint/60">
                  <User className="h-5 w-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
