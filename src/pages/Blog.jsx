import React from 'react';
import { motion } from 'framer-motion';
import { Pickaxe, Sparkles, Clock, Rocket } from 'lucide-react';
import PageTransition from '../components/PageTransition';

export const Blog = () => {
  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 min-h-[80vh] flex flex-col items-center justify-center text-center relative overflow-hidden">
        
        {/* Background decorative elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] bg-brand-mint/20 rounded-full blur-3xl -z-10 animate-pulse" />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative z-10"
        >
          {/* Animated Icon */}
          <div className="relative w-32 h-32 mx-auto mb-10">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-2 border-dashed border-brand-accent/40 rounded-full"
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="absolute inset-2 border border-brand-mint/60 rounded-full"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-white rounded-full border border-brand-mint/40 shadow-[0_8px_30px_rgb(4,108,78,0.15)] z-10">
              <Pickaxe className="w-12 h-12 text-brand-accent" />
            </div>
            
            {/* Floating particles */}
            <motion.div
              animate={{ y: [-10, -25, -10], x: [-10, -25, -10], opacity: [0, 1, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -left-4 z-20"
            >
              <Sparkles className="w-6 h-6 text-emerald-400" />
            </motion.div>
            <motion.div
              animate={{ y: [10, 25, 10], x: [10, 25, 10], opacity: [0, 1, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, delay: 1, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-4 z-20"
            >
              <Rocket className="w-6 h-6 text-emerald-500" />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#06242c] via-[#046c4e] to-[#06242c] mb-6 font-display tracking-tight leading-tight">
              Crafting<br/>Something Special
            </h1>
            
            <p className="max-w-xl mx-auto text-base sm:text-lg md:text-xl font-medium text-gray-500 leading-relaxed mb-12 px-4">
              The Dev Diary is currently undergoing maintenance. I'm brewing some technical logs, engine updates, and deep-dives. Stay tuned!
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <div className="flex items-center gap-2 px-6 py-3 bg-white border border-brand-mint/50 rounded-full text-brand-dark font-bold shadow-sm hover:shadow-md transition-shadow">
                <Clock className="w-5 h-5 text-brand-accent" />
                <span>ETA: Coming Real Soon</span>
              </div>
              <div className="h-1 w-8 sm:w-12 bg-brand-mint/50 rounded-full hidden sm:block" />
              <div className="flex items-center gap-2 text-sm font-bold text-gray-500 bg-[#e6f4f1]/50 px-4 py-2 rounded-full">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                Work in progress
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Background ambient light */}
      <div className="fixed top-0 left-0 w-full h-screen pointer-events-none -z-10 bg-gradient-to-br from-[#e6f4f1]/80 via-transparent to-transparent" />
    </PageTransition>
  );
};

export default Blog;
