import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Beaker, Plus, Compass } from 'lucide-react';
import { projects } from '../data/projects';
import PageTransition from '../components/PageTransition';

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All Projects');

  const filters = ['All Projects', 'Unity3D', 'Unreal Engine', 'Prototypes'];

  const filteredProjects = activeFilter === 'All Projects'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        
        {/* Header */}
        <div className="text-center mb-10">
          <span className="neon-pill">
            Portfolio Showcase
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold gradient-heading mt-4 mb-3">
            The Quest Log
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base font-semibold text-gray-500 leading-relaxed">
            A curated collection of digital worlds, interactive experiences, and technical explorations built with modern game engines.
          </p>
        </div>

        {/* Filters Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className="relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 focus:outline-none"
            >
              <span className={`relative z-10 ${
                activeFilter === filter ? 'text-brand-accent' : 'text-gray-500 hover:text-brand-dark'
              }`}>
                {filter}
              </span>
              {activeFilter === filter && (
                <motion.div
                  layoutId="active-filter-bg"
                  className="absolute inset-0 bg-brand-mint border border-brand-accent/20 rounded-full"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Bento Grid layout */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              // We style the card sizes based on the design mockup (Image 3)
              // The first featured project spanning columns or taking a large view.
              const isFeaturedMain = project.id === 'dungeon-escape';
              const isVoxel = project.id === 'voxel-engine';

              if (isFeaturedMain) {
                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    className="md:col-span-2 lg:col-span-2 row-span-2 bg-brand-cardBg border border-brand-mint/50 cursor-pointer rounded-[2rem] overflow-hidden shadow-card hover:shadow-card-hover group flex flex-col justify-between h-[500px] relative"
                  >
                    {/* Background floating island concept image */}
                    <div className="absolute inset-0 w-full h-full bg-brand-mint/20">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                      />
                      {/* Gradient Overlay for Text Readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent" />
                    </div>

                    {/* Top Pills */}
                    <div className="relative z-10 p-6 flex flex-wrap gap-2">
                      {project.tags.map((tag, idx) => (
                        <span key={idx} className="bg-white/95 text-brand-dark text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Bottom Content overlay */}
                    <div className="relative z-10 p-6 sm:p-8 text-white max-w-xl">
                      <h3 className="font-display font-bold text-2xl sm:text-3xl mb-3 text-white">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-200/90 leading-relaxed font-semibold mb-6">
                        {project.description}
                      </p>
                      
                      <Link 
                        to={`/projects/${project.id}`}
                        className="px-5 py-3 rounded-2xl bg-brand-accent hover:bg-brand-hover text-white text-xs font-bold transition-all duration-200 inline-flex items-center gap-1.5 shadow-md hover:shadow-lg"
                      >
                        View Project <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </motion.div>
                );
              }

              if (isVoxel) {
                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    className="bg-brand-cardBg border border-brand-mint/50 rounded-[2rem] p-6 shadow-card hover:shadow-card-hover group flex flex-col justify-between h-[238px]"
                  >
                    <div className="flex items-start justify-between">
                      <div className="w-10 h-10 rounded-2xl bg-brand-mint/60 border border-brand-accent/20 flex items-center justify-center">
                        <Compass className="h-5 w-5 text-brand-accent" />
                      </div>
                    </div>

                    <div>
                      <h3 className="font-display font-bold text-lg text-brand-dark mb-2">
                        {project.title}
                      </h3>
                      <p className="text-xs text-gray-500 font-semibold leading-relaxed line-clamp-3">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between border-t border-brand-mint/30 pt-3">
                      <span className="text-[10px] font-bold text-brand-accent tracking-wider uppercase">
                        {project.tags.join(' • ')}
                      </span>
                      <Link to={`/projects/${project.id}`}>
                        <ArrowUpRight className="h-4 w-4 text-gray-400 group-hover:text-brand-accent transition-colors" />
                      </Link>
                    </div>
                  </motion.div>
                );
              }

              // Default medium/small project card layout
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="bg-brand-cardBg border border-brand-mint/50 rounded-[2rem] overflow-hidden shadow-card hover:shadow-card-hover group flex flex-col justify-between h-[238px]"
                >
                  <div className="relative h-28 bg-brand-mint/10 overflow-hidden border-b border-brand-mint/30">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 flex gap-1">
                      {project.tags.slice(0, 3).map((tag, idx) => (
                        <span key={idx} className="bg-white/90 text-brand-dark text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 flex-grow flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-display font-bold text-base text-brand-dark group-hover:text-brand-accent transition-colors">
                          {project.title}
                        </h3>
                        <span className="text-[10px] font-bold text-gray-400 font-display">
                          {project.year}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 font-semibold leading-relaxed line-clamp-2">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex justify-end pt-1">
                      <Link to={`/projects/${project.id}`} className="p-1 rounded-full bg-brand-mint/40 group-hover:bg-brand-mint transition-colors">
                        <ArrowUpRight className="h-3.5 w-3.5 text-brand-dark" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Experimental Lab Card (Always visible at the end) */}
            {activeFilter === 'All Projects' && (
              <motion.div
                key="experimental-lab"
                layout
                className="bg-brand-cardBg border-2 border-dashed border-brand-accent/30 hover:border-brand-accent rounded-[2rem] p-6 shadow-card hover:shadow-card-hover flex flex-col justify-between items-center text-center h-[238px] group transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-brand-mint/60 flex items-center justify-center mt-2">
                  <Beaker className="h-5 w-5 text-brand-accent" />
                </div>

                <div>
                  <h3 className="font-display font-bold text-lg text-brand-dark mb-1">
                    Experimental Lab
                  </h3>
                  <p className="text-xs text-gray-500 font-semibold leading-relaxed max-w-[220px]">
                    Smaller prototypes, shaders, and mechanical tests that didn't make it into full games.
                  </p>
                </div>

                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl border border-brand-accent/30 group-hover:bg-brand-accent group-hover:text-white text-xs font-bold text-brand-dark transition-all duration-200"
                >
                  Explore GitHub
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Load More button */}
        <div className="flex justify-center mt-12">
          <button className="px-6 py-3 rounded-full bg-white border border-brand-mint hover:bg-brand-mint/20 text-brand-dark font-bold text-sm tracking-wide shadow-sm hover:shadow transition-all duration-200 flex items-center gap-2">
            <Plus className="h-4 w-4 text-brand-accent" /> Load More Projects
          </button>
        </div>

      </div>
    </PageTransition>
  );
};

export default Projects;
