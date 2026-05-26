import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag, Wrench, BarChart2, ChevronLeft, ChevronRight, X, GitGraph } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';
import PageTransition from '../components/PageTransition';
import ScrollReveal from '../components/ScrollReveal';

export const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const projectIndex = projects.findIndex(p => p.id === id);
  const project = projects[projectIndex];
  const [selectedImage, setSelectedImage] = useState(null);

  // Auto redirect if project not found
  useEffect(() => {
    if (!project) {
      navigate('/projects');
    }
  }, [project, navigate]);

  if (!project) return null;

  const nextProject = projects[(projectIndex + 1) % projects.length];
  const prevProject = projects[(projectIndex - 1 + projects.length) % projects.length];

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        
        {/* Back Link */}
        <div className="mb-8">
          <Link 
            to="/projects" 
            className="inline-flex items-center gap-2 text-sm font-bold text-brand-dark hover:text-brand-accent transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Quest Log
          </Link>
        </div>

        {/* Hero Section */}
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-dark mb-4 font-display">
            {project.title}
          </h1>
          <p className="text-lg font-medium text-gray-500 max-w-4xl">
            {project.tagline}
          </p>
        </div>

        {/* Project Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Main Content Area */}
          <div className="lg:col-span-8 space-y-8">
            {/* Banner Media */}
            <ScrollReveal direction="scale">
              <div className="h-[300px] sm:h-[450px] w-full rounded-[2rem] overflow-hidden border border-brand-mint/60 shadow-md bg-brand-mint/20">
                {project.video ? (
                  <video 
                    src={project.video} 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            </ScrollReveal>

            {/* Project Case Study Description */}
            <div className="interactive-card p-8 sm:p-10 space-y-6">
              <h2 className="text-2xl font-bold font-display text-brand-dark border-b border-brand-mint/40 pb-3">
                Quest Overview & Case Study
              </h2>
              
              <div className="prose prose-emerald max-w-none text-sm sm:text-base text-gray-600 font-medium leading-relaxed space-y-6">
                <p>{project.description}</p>
                
                {/* Dynamically parsing bullet sections from longDescription */}
                {project.longDescription.split('\n\n').map((paragraph, pIdx) => {
                  if (paragraph.startsWith('###')) {
                    return (
                      <h3 key={pIdx} className="text-lg font-bold font-display text-brand-dark mt-6 mb-2">
                        {paragraph.replace('###', '').trim()}
                      </h3>
                    );
                  }
                  if (paragraph.startsWith('- ') || paragraph.startsWith('1. ')) {
                    return (
                      <ul key={pIdx} className="list-disc pl-5 space-y-2 mt-2">
                        {paragraph.split('\n').map((li, lIdx) => (
                          <li key={lIdx}>
                            {li.replace(/^[-*]\s+|\d+\.\s+/, '').trim()}
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  return <p key={pIdx}>{paragraph}</p>;
                })}
              </div>
            </div>

            {/* Mini Gallery */}
            {project.gallery && project.gallery.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.gallery.map((img, idx) => (
                  <div 
                    key={idx} 
                    className="h-48 rounded-2xl overflow-hidden border border-brand-mint/40 bg-brand-mint/10 cursor-pointer group relative"
                    onClick={() => setSelectedImage(img)}
                  >
                    <img src={img} alt={`Gallery screenshot ${idx}`} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-brand-accent/0 group-hover:bg-brand-accent/10 transition-colors duration-300" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar Area */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Meta Details Card */}
            <ScrollReveal direction="left" delay={0.15}>
              <div className="bg-brand-cardBg border border-brand-mint/50 rounded-[2rem] p-6 sm:p-8 shadow-card space-y-6">
                <h3 className="text-xl font-bold font-display text-brand-dark border-b border-brand-mint/40 pb-3">
                  Quest Details
                </h3>

                <div className="space-y-4">
                  {/* Category */}
                  <div className="flex gap-3">
                    <Tag className="h-5 w-5 text-brand-accent flex-shrink-0" />
                    <div>
                      <span className="block text-xs font-bold text-gray-400 uppercase">Engine Class</span>
                      <span className="text-sm font-semibold text-brand-dark">{project.category}</span>
                    </div>
                  </div>

                  {/* Year */}
                  <div className="flex gap-3">
                    <Calendar className="h-5 w-5 text-brand-accent flex-shrink-0" />
                    <div>
                      <span className="block text-xs font-bold text-gray-400 uppercase">Developed Year</span>
                      <span className="text-sm font-semibold text-brand-dark">{project.year}</span>
                    </div>
                  </div>

                  {/* Tools / Tech Stack */}
                  <div className="flex gap-3">
                    <Wrench className="h-5 w-5 text-brand-accent flex-shrink-0" />
                    <div>
                      <span className="block text-xs font-bold text-gray-400 uppercase">Toolbox</span>
                      <div className="flex flex-wrap gap-1.5 mt-1">
                        {project.tools.map((tool, idx) => (
                          <span key={idx} className="bg-brand-light px-2.5 py-1 rounded-lg text-xs font-semibold text-brand-dark border border-brand-mint/40">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Performance Stats Card */}
            <ScrollReveal direction="left" delay={0.25}>
              <div className="bg-brand-cardBg border border-brand-mint/50 rounded-[2rem] p-6 sm:p-8 shadow-card space-y-6">
                <h3 className="text-xl font-bold font-display text-brand-dark border-b border-brand-mint/40 pb-3 flex items-center gap-2">
                  <BarChart2 className="h-5 w-5 text-brand-accent" /> Telemetry / Stats
                </h3>

                <div className="space-y-4">
                  {Object.entries(project.stats).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center py-2 border-b border-brand-mint/30 last:border-0 text-sm">
                      <span className="font-bold text-gray-400 uppercase tracking-wide text-xs">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </span>
                      <span className="font-semibold text-brand-dark">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>

                <a 
                  href={project.github || "https://github.com"} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-2xl bg-brand-dark hover:bg-black text-white font-bold text-sm shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <GitGraph className="h-4 w-4" /> View Source Code
                </a>
              </div>
            </ScrollReveal>

          </div>

        </div>

        {/* Bottom Project Navigator */}
        <hr className="border-brand-mint/40 mb-8" />
        <div className="flex justify-between items-center gap-4">
          <Link 
            to={`/projects/${prevProject.id}`}
            className="flex items-center gap-2 text-sm font-bold text-brand-dark hover:text-brand-accent transition-colors group"
          >
            <ChevronLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
            <div className="text-left hidden sm:block">
              <span className="block text-[10px] text-gray-400 uppercase font-bold">Prev Quest</span>
              <span className="text-xs text-brand-dark font-bold">{prevProject.title}</span>
            </div>
          </Link>

          <Link 
            to={`/projects/${nextProject.id}`}
            className="flex items-center gap-2 text-sm font-bold text-brand-dark hover:text-brand-accent transition-colors group"
          >
            <div className="text-right hidden sm:block">
              <span className="block text-[10px] text-gray-400 uppercase font-bold">Next Quest</span>
              <span className="text-xs text-brand-dark font-bold">{nextProject.title}</span>
            </div>
            <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

      </div>

      {/* Full Screen Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-4 right-4 sm:top-8 sm:right-8 text-white p-2 rounded-full bg-black/50 hover:bg-black/80 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X className="h-6 w-6" />
            </button>
            <motion.img 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage} 
              alt="Enlarged gallery view" 
              className="max-w-full max-h-full rounded-2xl object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
};

export default ProjectDetail;
