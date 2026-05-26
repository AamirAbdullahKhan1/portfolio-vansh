import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { projects } from '../data/projects';
import PageTransition from '../components/PageTransition';
import ScrollReveal from '../components/ScrollReveal';

export const Blog = () => {
  const [activeFilter, setActiveFilter] = useState('All Posts');

  // Filters matching Image 1
  const filters = ['All Posts', 'Engine Architecture', 'Graphics Programming', 'Gameplay Mechanics', 'Research'];

  // Map our projects as dev diaries. We can use the project's category or just 'Engine Architecture' as a fallback
  const allPosts = projects.map(p => ({
    ...p,
    blogCategory: p.stats?.focus === 'Gameplay Programming' ? 'Gameplay Mechanics' : 'Engine Architecture',
  }));

  const filteredPosts = activeFilter === 'All Posts'
    ? allPosts
    : allPosts.filter(p => p.blogCategory === activeFilter);

  // Take the first featured project as the main featured post, rest as regular posts
  const featuredPost = filteredPosts.find(p => p.featured) || filteredPosts[0];
  const regularPosts = filteredPosts.filter(p => p.id !== featuredPost?.id);

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        
        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#06242c] mb-4 font-display tracking-tight">
            Dev Diary
          </h1>
          <p className="text-base sm:text-lg font-medium text-gray-500 leading-relaxed">
            Research logs, engine updates, and technical deep-dives from the frontier of interactive real-time experiences.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`relative px-5 py-2 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 focus:outline-none ${
                activeFilter === filter 
                  ? 'bg-[#046c4e] text-white shadow-md' 
                  : 'bg-white text-gray-500 hover:bg-[#e6f4f1] hover:text-[#046c4e]'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="space-y-8">
          <AnimatePresence mode="popLayout">
            {/* Featured Post */}
            {featuredPost && (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
              >
                <Link to={`/blog/${featuredPost.id}`} className="block group">
                  <div className="bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(4,108,78,0.1)] border border-brand-mint/40 transition-all duration-300 flex flex-col md:flex-row h-auto md:h-[400px]">
                    
                    {/* Left: Image */}
                    <div className="w-full md:w-1/2 h-64 md:h-full relative overflow-hidden bg-brand-mint/20">
                      <img 
                        src={featuredPost.image} 
                        alt={featuredPost.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    
                    {/* Right: Content */}
                    <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="bg-[#e6f4f1] text-[#046c4e] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                          {featuredPost.blogCategory}
                        </span>
                        <span className="text-[11px] font-bold text-gray-400">
                          {featuredPost.date || "Oct 24, 2024"}
                        </span>
                      </div>
                      
                      <h2 className="text-3xl md:text-4xl font-bold font-display text-[#06242c] mb-4 leading-tight group-hover:text-[#046c4e] transition-colors">
                        {featuredPost.title}
                      </h2>
                      
                      <p className="text-gray-500 font-medium text-sm md:text-base leading-relaxed mb-8 line-clamp-3">
                        {featuredPost.description}
                      </p>
                      
                      <div className="flex items-center text-[#046c4e] font-bold text-sm">
                        Read Technical Log <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )}

            {/* Grid of Regular Posts */}
            {regularPosts.length > 0 && (
              <motion.div 
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {regularPosts.map((post, idx) => (
                  <motion.div
                    key={post.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                  >
                    <Link to={`/blog/${post.id}`} className="block group h-full">
                      <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(4,108,78,0.1)] border border-brand-mint/40 transition-all duration-300 h-full flex flex-col">
                        
                        <div className="flex items-center gap-3 mb-4">
                          <span className="bg-[#e6f4f1] text-[#046c4e] text-[9px] font-bold px-2 py-1 rounded-full uppercase tracking-widest">
                            {post.blogCategory}
                          </span>
                          <span className="text-[10px] font-bold text-gray-400">
                            {post.date || "Sep 28, 2024"}
                          </span>
                        </div>
                        
                        <h3 className="text-xl font-bold font-display text-[#06242c] mb-3 leading-snug group-hover:text-[#046c4e] transition-colors">
                          {post.title}
                        </h3>
                        
                        <p className="text-gray-500 font-medium text-sm leading-relaxed mb-6 flex-grow line-clamp-4">
                          {post.description}
                        </p>
                        
                        <div className="flex items-center text-[#046c4e] font-bold text-sm mt-auto">
                          Details <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Pagination (Visual Only) */}
        <div className="flex justify-center items-center gap-4 mt-16">
          <button className="h-10 w-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-[#046c4e] hover:text-[#046c4e] transition-colors">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <span className="text-sm font-bold text-gray-600">Page 1 of 4</span>
          <button className="h-10 w-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:border-[#046c4e] hover:text-[#046c4e] transition-colors">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

      </div>
      
      {/* Background ambient light */}
      <div className="fixed top-0 left-0 w-full h-screen pointer-events-none -z-10 bg-gradient-to-br from-[#e6f4f1]/60 via-transparent to-transparent" />
    </PageTransition>
  );
};

export default Blog;
