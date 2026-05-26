import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Shield, Trophy, MapPin, Briefcase, Zap, GitPullRequest, CircleDot, Terminal } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import ScrollReveal from '../components/ScrollReveal';

export const About = () => {
  const [konamiStep, setKonamiStep] = useState(0);
  const [easterEggActive, setEasterEggActive] = useState(false);

  // Konami Code listener easter egg
  const konamiCode = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'
  ];

  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key;
      if (key.toLowerCase() === konamiCode[konamiStep].toLowerCase()) {
        if (konamiStep === konamiCode.length - 1) {
          setEasterEggActive(true);
          setKonamiStep(0);
          // Play a small arcade beep if browser supports it
          try {
            const context = new (window.AudioContext || window.webkitAudioContext)();
            const osc = context.createOscillator();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(440, context.currentTime); // A4
            osc.frequency.setValueAtTime(880, context.currentTime + 0.1); // A5
            osc.connect(context.destination);
            osc.start();
            osc.stop(context.currentTime + 0.35);
          } catch (err) {}
        } else {
          setKonamiStep(prev => prev + 1);
        }
      } else {
        setKonamiStep(0);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [konamiStep]);

  const skillTree = [
    {
      category: "Unreal Engine 5",
      level: 70,
      skills: ["Gameplay Programming", "Multiplayer Systems", "UI (UMG)", "AI Systems", "Problem Solving"]
    },
    {
      category: "C++",
      level: 60,
      skills: ["OOPS", "Debugging", "Gameplay Systems"]
    },
    {
      category: "Networking",
      level: 50,
      skills: ["Online Subsystem", "Session Management", "Client-Server Architecture"]
    },
    {
      category: "Tools",
      level: 70,
      skills: ["JetBrains Rider", "GitHub", "Version Control"]
    }
  ];

  const experience = [
    {
      role: "Senior Systems Engineer",
      company: "Polyhaven Studios",
      period: "2022 - Present",
      description: "Spearheaded the development of a custom procedural terrain generation toolset using compute shaders, reducing environment artist iteration time by 40%. Architected the core networking infrastructure for an upcoming co-op survival title."
    },
    {
      role: "Gameplay Programmer",
      company: "Nebula Interactive",
      period: "2019 - 2022",
      description: "Implemented complex enemy AI behaviors using custom utility AI systems. Optimized rendering pipelines for mobile platforms ensuring consistent 60fps across mid-tier devices."
    },
    {
      role: "Junior Developer",
      company: "Indie Co-op",
      period: "2018 - 2019",
      description: "Assisted in prototyping core mechanics for various indie titles. Managed version control and CI/CD pipelines for small remote teams."
    }
  ];

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold gradient-heading mb-4">
            Player Data
          </h1>
          <p className="max-w-3xl mx-auto text-base sm:text-lg font-medium text-gray-500 leading-relaxed">
            Game Developer specializing in systems architecture and rendering pipelines.<br />
            Currently exploring procedural generation and narrative mechanics.
          </p>
        </div>

        {/* Easter Egg Overlay */}
        {easterEggActive && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-8 p-6 bg-emerald-950 text-emerald-400 border border-emerald-500 rounded-3xl text-center shadow-lg relative"
          >
            <div className="absolute top-3 right-3">
              <button 
                onClick={() => setEasterEggActive(false)} 
                className="text-xs border border-emerald-500 px-2 py-0.5 rounded hover:bg-emerald-900 transition-colors"
              >
                CLOSE [ESC]
              </button>
            </div>
            <h3 className="font-display font-extrabold text-2xl mb-2 animate-pulse">
              ⚡ GOD MODE ACTIVATED ⚡
            </h3>
            <p className="text-sm font-semibold max-w-xl mx-auto">
              You entered the Konami Code! Vansh's Stats have been boosted to maximum. Unlimited mana and 100% pathfinding success rates unlocked.
            </p>
          </motion.div>
        )}

        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Player Stats Card */}
          <div className="lg:col-span-4">
            <ScrollReveal direction="right" delay={0.1}>
              <div className="bg-brand-cardBg border border-brand-mint/50 rounded-[2rem] p-8 shadow-card flex flex-col items-center">
                {/* Profile Image with status ring */}
                <div className="relative w-40 h-40 rounded-full p-1 border-4 border-brand-accent/30 bg-brand-light flex items-center justify-center overflow-hidden mb-6 shadow-inner">
                  <img 
                    src="/images/profile.png" 
                    alt="Vansh Jain profile avatar" 
                    className="w-[90%] h-[90%] rounded-full object-cover"
                  />
                  <div className="absolute inset-0 border border-brand-accent rounded-full animate-ping opacity-10" />
                </div>

                <h2 className="text-2xl font-bold font-display text-brand-dark mb-1">
                  Vansh Jain
                </h2>
                <p className="text-sm font-bold text-brand-accent mb-6 font-display">
                  Systems Architect & Developer
                </p>

                {/* Stats Table */}
                <div className="w-full space-y-4 mb-8">
                  <div className="flex items-center justify-between text-sm py-2 border-b border-brand-mint/40">
                    <span className="font-bold text-gray-400 flex items-center gap-2">
                      <MapPin className="h-4 w-4" /> BASE
                    </span>
                    <span className="font-semibold text-brand-dark">Hyderabad, India</span>
                  </div>
                  <div className="flex items-center justify-between text-sm py-2 border-b border-brand-mint/40">
                    <span className="font-bold text-gray-400 flex items-center gap-2">
                      <Briefcase className="h-4 w-4" /> GUILD
                    </span>
                    <span className="font-semibold text-brand-dark">Independent</span>
                  </div>
                  <div className="flex items-center justify-between text-sm py-2 border-b border-brand-mint/40">
                    <span className="font-bold text-gray-400 flex items-center gap-2">
                      <Zap className="h-4 w-4" /> XP
                    </span>
                    <span className="font-semibold text-brand-dark">2+ Years</span>
                  </div>
                </div>

                {/* Download Resume Button */}
                <a 
                  href="/images/Vansh_jain_Resume.pdf"
                  download="Vansh_jain_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-2xl bg-brand-accent hover:bg-brand-hover text-white font-bold text-sm shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <Download className="h-4 w-4" /> Download Resume
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Summary & Skill Tree Panel */}
          <div className="lg:col-span-8">
            <ScrollReveal direction="left" delay={0.2}>
              <div className="bg-brand-cardBg border border-brand-mint/50 rounded-[2rem] p-8 shadow-card">
                
                {/* Developer Summary Section */}
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-6">
                    <Terminal className="h-6 w-6 text-brand-accent" />
                    <h2 className="text-2xl font-bold font-display text-brand-dark">
                      Overview
                    </h2>
                  </div>
                  <div className="space-y-4 text-sm sm:text-base text-gray-600 font-medium leading-relaxed">
                    <p>
                      Unreal Engine developer with hands-on experience in C++ gameplay programming, multiplayer systems, and gameplay feature development. Developed projects involving AI systems, UI implementation, and multiplayer session management in Unreal Engine 5. Passionate about gameplay programming, solving technical challenges, and creating interactive player experiences, while continuously expanding knowledge in networking, game systems, and game development workflows.
                    </p>
                    
                  </div>
                </div>

                <hr className="border-brand-mint/40 mb-10" />

                <div className="flex items-center gap-3 mb-8">
                  <GitPullRequest className="h-6 w-6 text-brand-accent" />
                  <h2 className="text-2xl font-bold font-display text-brand-dark">
                    Skill Tree
                  </h2>
                </div>

                {/* Skill Nodes */}
                <div className="space-y-8">
                  {skillTree.map((node, index) => (
                    <div key={index} className="flex flex-col gap-3">
                      <div className="flex items-center justify-between text-sm sm:text-base">
                        <span className="font-bold text-brand-dark font-display">{node.category}</span>
                        <span className="font-semibold text-brand-accent font-display">Lvl {easterEggActive ? 100 : node.level}</span>
                      </div>
                      
                      {/* Animated Progress Bar */}
                      <div className="w-full h-3 bg-brand-mint/50 rounded-full overflow-hidden border border-brand-mint/20">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-brand-accent to-emerald-400 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${easterEggActive ? 100 : node.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, ease: "easeOut", delay: index * 0.15 }}
                        />
                      </div>

                      {/* Skill Tags */}
                      <div className="flex flex-wrap gap-2 mt-1">
                        {node.skills.map((skill, sIdx) => (
                          <span 
                            key={sIdx}
                            className="px-3 py-1 rounded-xl text-xs font-semibold bg-brand-light border border-brand-mint/60 text-brand-dark shadow-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>

        

      </div>
    </PageTransition>
  );
};

export default About;
