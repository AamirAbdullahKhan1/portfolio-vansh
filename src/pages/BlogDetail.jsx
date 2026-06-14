import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react';
import { blogs } from '../data/blogs';
import PageTransition from '../components/PageTransition';
import ScrollReveal from '../components/ScrollReveal';

export const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const projectIndex = blogs.findIndex(p => p.id === id);
  const project = blogs[projectIndex];

  useEffect(() => {
    if (!project) {
      navigate('/blog');
    }
  }, [project, navigate]);

  if (!project) return null;

  // Derive a category for the blog
  const blogCategory = project.stats?.focus === 'Gameplay Programming' ? 'Gameplay Mechanics' : 'Engine Architecture';

  // For continue reading, get the next two projects (or loop)
  const nextProject1 = blogs[(projectIndex + 1) % blogs.length];
  const nextProject2 = blogs[(projectIndex + 2) % blogs.length];
  const relatedPosts = [nextProject1, nextProject2].filter((p, index, self) => 
    index === self.findIndex((t) => (t.id === p.id))
  ).filter(p => p.id !== project.id); // Try to not show same project

  return (
    <PageTransition>
      {/* Background ambient light */}
      <div className="fixed top-0 left-0 w-full h-[50vh] pointer-events-none -z-10 bg-gradient-to-br from-[#e6f4f1] via-[#f8fafc] to-[#f8fafc]" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        
        {/* Back Link */}
        <div className="mb-8">
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-[#046c4e] transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Dev Diary
          </Link>
        </div>

        {/* Header Section */}
        <div className="text-center mb-10 max-w-4xl mx-auto">
          <span className="inline-block bg-[#e6f4f1] text-[#046c4e] text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest mb-6">
            {blogCategory}
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#06242c] mb-6 font-display tracking-tight leading-tight">
            {project.title}
          </h1>
          
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-sm font-semibold text-gray-500">
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" /> {project.date || 'Oct 24, 2024'}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" /> {project.readTime || '12 min read'}
            </span>
            <span className="flex items-center gap-2">
              <User className="h-4 w-4" /> {project.author || 'Vansh Jain'}
            </span>
          </div>
        </div>

        {/* Hero Image */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full h-[300px] sm:h-[450px] md:h-[550px] rounded-[2.5rem] overflow-hidden shadow-2xl mb-16 relative"
        >
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Article Content */}
          <div className="lg:col-span-8 space-y-12">
            
            <div className="prose prose-lg prose-emerald max-w-none text-gray-600 font-medium leading-relaxed space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed font-semibold">
                {project.description}
              </p>
              
              {/* Dynamic rendering of content blocks */}
              {project.contentBlocks ? project.contentBlocks.map((block, pIdx) => {
                if (block.type === 'heading') {
                  return (
                    <h3 key={pIdx} className="text-2xl font-bold font-display text-[#06242c] mt-10 mb-4 tracking-tight">
                      {block.value}
                    </h3>
                  );
                }
                if (block.type === 'image') {
                  return (
                    <div key={pIdx} className="my-10 bg-[#f8fbfb] p-4 sm:p-6 rounded-[2rem] border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.02)]">
                      <img src={block.value} alt={block.caption || 'Blog graphic'} className="w-full h-auto rounded-xl shadow-sm mb-4" />
                      {block.caption && (
                        <p className="text-center text-xs font-bold text-gray-400 italic">
                          {block.caption}
                        </p>
                      )}
                    </div>
                  );
                }
                if (block.type === 'code') {
                  return (
                    <div key={pIdx} className="my-8 rounded-2xl overflow-hidden shadow-lg border border-gray-800 bg-[#0f172a]">
                      <div className="flex items-center justify-between px-4 py-3 bg-[#1e293b] border-b border-gray-700/50">
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{block.language || 'Code Snippet'}</span>
                        <div className="flex gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div>
                        </div>
                      </div>
                      <pre className="p-6 overflow-x-auto">
                        <code className="text-sm font-mono text-blue-300 leading-relaxed whitespace-pre">
                          {block.value}
                        </code>
                      </pre>
                    </div>
                  );
                }
                if (block.type === 'list') {
                  return (
                    <ul key={pIdx} className="list-disc pl-5 space-y-3 mt-4 bg-[#f8fafc] p-6 rounded-2xl border border-gray-100">
                      {block.items?.map((li, lIdx) => (
                        <li key={lIdx} className="text-gray-700">
                          {li}
                        </li>
                      ))}
                    </ul>
                  );
                }
                return <p key={pIdx} className="mt-4">{block.value}</p>;
              }) : (
                /* Fallback for older string-based descriptions */
                project.longDescription?.split('\n\n').map((paragraph, pIdx) => {
                  if (paragraph.startsWith('###')) {
                    return (
                      <h3 key={pIdx} className="text-2xl font-bold font-display text-[#06242c] mt-10 mb-4 tracking-tight">
                        {paragraph.replace('###', '').trim()}
                      </h3>
                    );
                  }
                  if (paragraph.startsWith('- ') || paragraph.startsWith('1. ') || paragraph.startsWith('-->')) {
                    return (
                      <ul key={pIdx} className="list-disc pl-5 space-y-3 mt-4 bg-[#f8fafc] p-6 rounded-2xl border border-gray-100">
                        {paragraph.split('\n').map((li, lIdx) => (
                          <li key={lIdx} className="text-gray-700">
                            {li.replace(/^[-*]\s+|\d+\.\s+|-->\s+/, '').trim()}
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  return <p key={pIdx} className="mt-4">{paragraph}</p>;
                })
              )}
            </div>

            {/* Dev Diary Timeline Section */}
            {project.timeline && project.timeline.length > 0 && (
              <div className="mt-16 pt-12 border-t border-gray-200">
                <div className="flex items-center justify-between mb-10">
                  <h3 className="text-2xl font-bold font-display text-[#06242c] flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#e6f4f1] text-[#046c4e] flex items-center justify-center text-sm">
                      <Clock className="h-4 w-4" />
                    </span>
                    Development Timeline
                  </h3>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    Dev Diary Log
                  </span>
                </div>

                <div className="relative pl-6 sm:pl-8 border-l-2 border-[#e6f4f1] space-y-10">
                  {project.timeline.map((event, idx) => (
                    <ScrollReveal key={idx} direction="up" delay={idx * 0.1}>
                      <div className="relative">
                        {/* Timeline Node */}
                        <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-4 h-4 rounded-full bg-[#046c4e] border-4 border-white shadow-sm" />
                        
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                          <span className="text-[10px] font-bold text-[#046c4e] uppercase tracking-widest block mb-2">
                            {event.date}
                          </span>
                          <h4 className="text-lg font-bold text-[#06242c] mb-2 font-display">
                            {event.title}
                          </h4>
                          <p className="text-sm text-gray-500 font-medium leading-relaxed">
                            {event.description}
                          </p>
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="sticky top-28 space-y-8">
              
              {/* Engine Specifics Card */}
              <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
                <h4 className="text-sm font-bold text-[#046c4e] uppercase tracking-widest mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#046c4e]" /> Engine Specifics
                </h4>
                
                <div className="space-y-5">
                  {Object.entries(project.stats).map(([key, value]) => (
                    <div key={key}>
                      <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </span>
                      <span className="text-sm font-semibold text-[#06242c]">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Used */}
              <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-5">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tools.concat(project.tags).filter((v, i, a) => a.indexOf(v) === i).map((tool, idx) => (
                    <span key={idx} className="bg-[#f1f5f9] text-[#06242c] text-xs font-bold px-3 py-1.5 rounded-full">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Quote Block */}
              <div className="bg-[#046c4e] rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-4 right-6 text-[#108c69] opacity-30 text-8xl font-serif leading-none">
                  "
                </div>
                <p className="text-white font-medium italic relative z-10 text-sm leading-relaxed">
                  "The goal isn't just to render more assets, but to make the world feel alive without sacrificing the precious frame budget."
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* Continue Reading Section */}
        {relatedPosts.length > 0 && (
          <div className="mt-24 pt-16 border-t border-gray-200">
            <h3 className="text-2xl font-bold font-display text-[#06242c] mb-8">
              Continue Reading
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedPosts.map((post) => (
                <Link key={post.id} to={`/blog/${post.id}`} className="block group">
                  <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300">
                    <div className="h-40 w-full overflow-hidden bg-gray-100">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <span className="text-[9px] font-bold text-[#046c4e] uppercase tracking-widest mb-2 block">
                        {post.stats?.focus === 'Gameplay Programming' ? 'Gameplay Mechanics' : 'Engine Architecture'}
                      </span>
                      <h4 className="text-lg font-bold font-display text-[#06242c] mb-2 group-hover:text-[#046c4e] transition-colors">
                        {post.title}
                      </h4>
                      <p className="text-xs text-gray-500 font-medium line-clamp-2">
                        {post.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </PageTransition>
  );
};

export default BlogDetail;
