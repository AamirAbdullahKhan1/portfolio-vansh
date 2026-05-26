import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Code, Cpu, Terminal, Compass, Map, Blend, MonitorCog,
  Layers, Sparkles, Trophy, Laptop, Trees, X, ChevronLeft, ChevronRight
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import PageTransition from '../components/PageTransition';
import BlurText from '../components/BlurText';
import RotatingText from '../components/RotatingText';
import { projects } from '../data/projects';

export const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15
      }
    },
  };

  const skills = [
    { name: 'Unity', icon: <Compass className="h-4 w-4 text-brand-accent" /> },
    { name: 'C#', icon: <Code className="h-4 w-4 text-brand-accent" /> },
    { name: 'Unreal Engine', icon: <Cpu className="h-4 w-4 text-brand-accent" /> },
    { name: 'Photoshop', icon: <Sparkles className="h-4 w-4 text-brand-accent" /> },
    { name: 'C++', icon: <Terminal className="h-4 w-4 text-brand-accent" /> },
    { name: 'Blueprints', icon: <Map className="h-4 w-4 text-brand-accent" /> },
    { name: 'Multi-Player', icon: <Blend className="h-4 w-4 text-brand-accent" /> },
    { name: 'Subsytems', icon: <MonitorCog className="h-4 w-4 text-brand-accent" /> },
  ];

  // Flatten all project images for the carousel
  const allImages = projects.flatMap(p => p.gallery && p.gallery.length > 0 ? p.gallery : [p.image]).filter(Boolean);
  
  const [carouselOpen, setCarouselOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        
        {/* Name Banner */}
        <div className="mb-8">
          <BlurText
            text="Hi there! I'm Vansh Jain"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-brand-dark tracking-tight"
            as="h1"
          />
        </div>

        {/* Bento Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 lg:grid-cols-12 gap-6"
        >
          
          {/* LEFT SIDE BLOCK (8 Columns on Large Screens) */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            
            {/* Tag Pills Bar */}
            

            {/* Arched Profile Photo Card */}
            <motion.div 
              variants={itemVariants}
              className="bg-brand-cardBg border border-brand-mint/50 rounded-[2rem] p-8 shadow-card flex flex-col items-center justify-center relative overflow-hidden group min-h-[400px] md:min-h-[450px]"
            >
              {/* Background Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-brand-accent/5 rounded-full blur-3xl group-hover:bg-brand-accent/80 transition-all duration-700 opacity-60" />

              {/* Arch Profile Wrapper */}
              <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-t-full rounded-b-3xl border-8 border-brand-mint bg-brand-mint/40 overflow-hidden shadow-inner flex items-end justify-center">
                <img 
                  src="/images/profile.png" 
                  alt="Vansh Jain profile headshot" 
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </motion.div>

            {/* Tagline Card (Left) */}
            <motion.div variants={itemVariants} className="bg-brand-cardBg border border-brand-mint/50 rounded-[2rem] p-8 shadow-card flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mt-0">
              <div className="max-w-md">
                <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-brand-dark mb-3 leading-tight">
                  Immersive Worlds,<br />Engaging Gameplay
                </h2>
                <p className="text-sm font-medium text-gray-500 leading-relaxed">
                  Crafting experiences that captivate players through innovative mechanics and stunning visuals.
                </p>
              </div>

              {/* Mini Icon badges representing game titles */}
              <div className="flex gap-4 md:flex-col lg:flex-row self-stretch md:self-auto justify-around flex-wrap">
                {[
                  { name: 'Shaders Expert', icon: <Trophy className="h-5 w-5 text-indigo-500" /> },
                  { name: 'Physics Engine', icon: <Laptop className="h-5 w-5 text-emerald-500" /> },
                  { name: 'Procedural Art', icon: <Trees className="h-5 w-5 text-amber-500" /> },
                ].map((game, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-2 p-3.5 bg-brand-light border border-brand-mint rounded-2xl w-24 text-center">
                    <div className="p-2 rounded-xl bg-white shadow-sm border border-brand-mint/40">
                      {game.icon}
                    </div>
                    <span className="text-[10px] font-bold text-brand-dark leading-none">
                      {game.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
            
          </div>

          {/* RIGHT SIDE BLOCK (4 Columns on Large Screens) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* Info Box Card */}
            <motion.div 
              variants={itemVariants}
              className="bg-brand-cardBg border border-brand-mint/50 rounded-[2rem] p-6 sm:p-8 shadow-card flex flex-col justify-between h-auto min-h-[220px]"
            >
              <div className="mb-6">
                <h2 className="text-2xl font-bold font-display text-brand-dark leading-snug flex flex-wrap items-center gap-x-2 gap-y-1">
                  Hello, I'm a
                  <RotatingText
                    texts={['Game Developer', 'Designer', 'Sculpter']}
                    staggerFrom="last"
                    initial={{ y: '100%' }}
                    animate={{ y: 0 }}
                    exit={{ y: '-120%' }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden pb-0.5"
                    transition={{ type: 'spring', damping: 30, stiffness: 400 }}
                    rotationInterval={2000}
                    mainClassName="text-brand-accent font-bold"
                  />
                </h2>
              </div>

              {/* Skill List with Icons */}
              <div className="grid grid-cols-2 gap-y-3.5 gap-x-2">
                {skills.map((skill, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm font-semibold text-gray-600">
                    <span className="p-1 rounded bg-brand-mint/40">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Featured Project Card 1: Neon Genesis */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-brand-cardBg border border-brand-mint/50 rounded-[2rem] p-6 shadow-card hover:shadow-card-hover transition-all duration-300 relative overflow-hidden group flex flex-col justify-between"
            >
              <div className="flex gap-4 items-start">
                <div className="flex-1">
                  <h3 className="text-xl font-bold font-display text-brand-accent mb-2">
                    Dungeon Escape
                  </h3>
                  <p className="text-xs text-gray-600 font-medium leading-relaxed mb-4">
                    A first-person puzzle adventure game built in Unreal Engine 5 featuring modular C++ gameplay systems, interactive environmental puzzles, and immersive dungeon exploration.
                  </p>
                  <Link 
                    to="/projects/dungeon-escape" 
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-dark hover:text-brand-accent transition-colors"
                  >
                    View Details <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
                
                {/* Cyberpunk Game Thumbnail */}
                <div className="w-28 h-24 sm:w-32 sm:h-28 rounded-2xl overflow-hidden border border-brand-mint shadow-sm flex-shrink-0 bg-brand-mint/20">
                  <img 
                    src="https://live.staticflickr.com/65535/55286971909_182946cd63_b.jpg" 
                    alt="Dungeon Escape screenshot" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            </motion.div>

            {/* Fantasy Realm Highlight Card */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -5 }}
              onClick={() => setCarouselOpen(true)}
              className="bg-brand-cardBg border border-brand-mint/50 rounded-[2rem] p-6 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col gap-4 overflow-hidden cursor-pointer group"
            >
              {/* Fantasy Village Image */}
              <div className="relative h-32 w-full rounded-2xl overflow-hidden border border-brand-mint bg-brand-mint/20">
                <img 
                  src="https://live.staticflickr.com/65535/55287154867_601b3cf94e_b.jpg" 
                  alt="Fantasy Realm preview" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider text-brand-dark border border-brand-mint/50">
                  Gallery
                </div>
                <div className="absolute inset-0 bg-brand-accent/0 group-hover:bg-brand-accent/20 transition-colors duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 bg-black/60 text-white px-3 py-1.5 rounded-full text-xs font-bold transition-opacity duration-300 backdrop-blur-md">
                    View All Projects
                  </span>
                </div>
              </div>

              {/* Grid of smaller thumbnail icons resembling the design */}
              <div className="grid grid-cols-3 gap-2">
                <div className="h-14 rounded-xl border border-brand-mint/60 overflow-hidden bg-brand-mint/10">
                  <img src="https://live.staticflickr.com/65535/55286971909_182946cd63_b.jpg" className="w-full h-full object-cover" alt="" />
                </div>
                <div className="h-14 rounded-xl border border-brand-mint/60 overflow-hidden bg-brand-mint/10">
                  <img src="https://live.staticflickr.com/65535/55293180437_8cb4626229_b.jpg" className="w-full h-full object-cover" alt="" />
                </div>
                
                <div className="h-14 rounded-xl border border-brand-mint/60 overflow-hidden bg-brand-mint/10">
                  <img src="https://live.staticflickr.com/65535/55288072461_29448cacbe_b.jpg" className="w-full h-full object-cover" alt="" />
                </div>
              </div>
            </motion.div>

            {/* Extra Promo Image / Carousel Link Card (Right) */}
            <motion.div variants={itemVariants} className="bg-brand-cardBg border border-brand-mint/50 rounded-[2rem] p-6 shadow-card flex flex-col justify-center items-center text-center group relative overflow-hidden min-h-[200px] mt-0">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-accent/10 to-transparent group-hover:scale-105 transition-transform duration-500" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-brand-mint flex items-center justify-center mb-4 mx-auto shadow-sm">
                  <Layers className="h-6 w-6 text-brand-accent" />
                </div>
                <h3 className="font-display font-bold text-lg text-brand-dark mb-1">
                  Ready to see all quests?
                </h3>
                <p className="text-xs text-gray-500 font-medium mb-4">
                  Browse the complete list of technical explorations.
                </p>
                <Link 
                  to="/projects" 
                  className="px-5 py-2.5 rounded-full bg-brand-accent hover:bg-brand-hover text-white text-xs font-bold shadow-md hover:shadow-lg transition-all duration-200 inline-flex items-center gap-1"
                >
                  Enter Project Log <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </motion.div>

          </div>

        </motion.div>

      </div>

      {/* Gallery Carousel Modal */}
      <AnimatePresence>
        {carouselOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 sm:p-8"
            onClick={() => setCarouselOpen(false)}
          >
            {/* Close Button */}
            <button 
              className="absolute top-4 right-4 sm:top-8 sm:right-8 text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50"
              onClick={(e) => {
                e.stopPropagation();
                setCarouselOpen(false);
              }}
            >
              <X className="h-6 w-6" />
            </button>

            {/* Left Arrow */}
            <button 
              className="absolute left-4 sm:left-8 text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50"
              onClick={prevImage}
            >
              <ChevronLeft className="h-6 w-6 sm:h-8 sm:w-8" />
            </button>

            {/* Main Image */}
            <div className="w-full h-full max-h-[85vh] flex items-center justify-center relative overflow-hidden px-12 sm:px-24">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={currentImageIndex}
                  initial={{ opacity: 0, x: 50, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -50, scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  src={allImages[currentImageIndex]} 
                  alt={`Gallery view ${currentImageIndex + 1}`} 
                  className="max-w-full max-h-full rounded-2xl object-contain shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                />
              </AnimatePresence>
            </div>

            {/* Right Arrow */}
            <button 
              className="absolute right-4 sm:right-8 text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50"
              onClick={nextImage}
            >
              <ChevronRight className="h-6 w-6 sm:h-8 sm:w-8" />
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 text-white/70 font-medium text-sm bg-black/50 px-4 py-1.5 rounded-full">
              {currentImageIndex + 1} / {allImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
};

export default Home;
