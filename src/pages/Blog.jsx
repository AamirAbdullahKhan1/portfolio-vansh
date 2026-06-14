import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { blogs } from '../data/blogs';

const categories = ["All Posts", "Engine Architecture", "Graphics Programming", "Gameplay Mechanics", "Research"];

export const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All Posts");

  const filteredBlogs = blogs.filter(blog =>
    activeCategory === "All Posts" ? true : blog.category.toLowerCase().includes(activeCategory.toLowerCase().replace(" programming", "").replace(" posts", ""))
  );

  const featuredBlog = filteredBlogs.find(b => b.featured) || filteredBlogs[0];
  const regularBlogs = filteredBlogs.filter(b => b.id !== featuredBlog?.id);

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 min-h-screen relative">
        {/* Ambient Background */}
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 bg-gradient-to-br from-[#e6f4f1]/80 via-transparent to-transparent" />

        {/* Header */}
        <div className="max-w-3xl mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-extrabold text-[#06242c] mb-6 font-display tracking-tight"
          >
            Dev Diary
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl font-medium text-gray-500 leading-relaxed"
          >
            Research logs, engine updates, and technical deep-dives from the frontier of interactive real-time experiences.
          </motion.p>
        </div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap items-center gap-4 mb-12"
        >
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                activeCategory === cat
                  ? 'bg-[#046c4e] text-white shadow-md'
                  : 'bg-white/50 text-gray-500 hover:bg-white hover:text-[#06242c] border border-gray-200/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Featured Post */}
          {featuredBlog && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-2 group"
            >
              <Link to={`/blog/${featuredBlog.id}`} className="block h-full">
                <div className="bg-white rounded-[2rem] overflow-hidden flex flex-col md:flex-row h-full border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(4,108,78,0.08)] transition-all duration-300">
                  <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
                    <img
                      src={featuredBlog.image}
                      alt={featuredBlog.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-[10px] font-bold text-[#046c4e] uppercase tracking-widest bg-[#e6f4f1] px-3 py-1 rounded-full">
                        {featuredBlog.category}
                      </span>
                      <span className="text-xs font-semibold text-gray-400">
                        {featuredBlog.date}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold font-display text-[#06242c] mb-4 group-hover:text-[#046c4e] transition-colors leading-tight">
                      {featuredBlog.title}
                    </h2>
                    <p className="text-gray-500 font-medium leading-relaxed mb-8 line-clamp-3">
                      {featuredBlog.description}
                    </p>
                    <div className="mt-auto flex items-center gap-2 text-sm font-bold text-[#046c4e] group-hover:gap-3 transition-all">
                      Read Technical Log <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}

          {/* Regular Posts */}
          {regularBlogs.map((blog, idx) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + idx * 0.1 }}
              className="h-full"
            >
              <Link to={`/blog/${blog.id}`} className="block h-full group">
                <div className="bg-white rounded-[2rem] p-8 h-full flex flex-col border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(4,108,78,0.06)] transition-all duration-300">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-[10px] font-bold text-[#046c4e] uppercase tracking-widest bg-[#e6f4f1] px-3 py-1 rounded-full">
                      {blog.category}
                    </span>
                    <span className="text-xs font-semibold text-gray-400">
                      {blog.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold font-display text-[#06242c] mb-4 group-hover:text-[#046c4e] transition-colors leading-snug">
                    {blog.title}
                  </h3>
                  <p className="text-gray-500 font-medium leading-relaxed mb-8 text-sm line-clamp-3">
                    {blog.description}
                  </p>
                  <div className="mt-auto flex items-center gap-2 text-sm font-bold text-[#046c4e] group-hover:gap-3 transition-all">
                    Details <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        {/* 
        <div className="flex items-center justify-center gap-6 mt-20">
          <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#06242c] hover:border-[#06242c] transition-colors bg-white">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="text-sm font-bold text-gray-500">
            Page 1 of 4
          </span>
          <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#06242c] hover:border-[#06242c] transition-colors bg-white">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      */}  
      </div>
    </PageTransition>
  );
};

export default Blog;
