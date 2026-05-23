import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Share2, Send, CheckCircle2 } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import ScrollReveal from '../components/ScrollReveal';

const GithubIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.6 6-6.5a5.5 5.5 0 0 0-1.5-3.8 5.5 5.5 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.4 13.4 0 0 0-7 0C6.2 2.8 5 3.2 5 3.2a5.5 5.5 0 0 0-.1 3.8A5.5 5.5 0 0 0 3.4 10.8c0 4.9 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect width="4" height="12" x="2" y="9"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export const Contact = () => {
  const [formData, setFormData] = useState({
    playerName: '',
    commLink: '',
    questObjective: '',
    messageLore: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.playerName || !formData.commLink || !formData.messageLore) {
      alert("Please fill out all required fields to establish connection.");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API request (web3forms/emailJS simulation)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        playerName: '',
        commLink: '',
        questObjective: '',
        messageLore: ''
      });
    }, 1800);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        
        {/* Header */}
        <div className="text-center mb-12 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-brand-accent/5 rounded-full blur-3xl -z-10" />
          <h1 className="text-4xl sm:text-5xl font-extrabold gradient-heading mb-4">
            Ready to Start a Quest?
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base font-semibold text-gray-500 leading-relaxed">
            Whether you have a game idea to bring to life, or just want to chat about the latest engine tech, my inbox is always open. Let's build something extraordinary together.
          </p>
        </div>

        {/* Form and info layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Email Card */}
            <ScrollReveal direction="right" delay={0.1}>
              <div className="bg-brand-cardBg border border-brand-mint/50 rounded-[2rem] p-6 shadow-card flex gap-4 items-center">
                <div className="w-12 h-12 rounded-2xl bg-brand-mint/60 flex items-center justify-center text-brand-accent flex-shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider">Email</span>
                  <a href="mailto:jainvansh178@gmail.com" className="text-sm sm:text-base font-bold text-brand-dark hover:text-brand-accent transition-colors">
                    jainvansh178@gmail.com
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Location/Base Card */}
            <ScrollReveal direction="right" delay={0.2}>
              <div className="bg-brand-cardBg border border-brand-mint/50 rounded-[2rem] p-6 shadow-card flex gap-4 items-center">
                <div className="w-12 h-12 rounded-2xl bg-brand-mint/60 flex items-center justify-center text-brand-accent flex-shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider">Base</span>
                  <span className="text-sm sm:text-base font-bold text-brand-dark">
                    Remote / Hyderabad, India
                  </span>
                </div>
              </div>
            </ScrollReveal>

            {/* Socials Card */}
            <ScrollReveal direction="right" delay={0.3}>
              <div className="bg-brand-cardBg border border-brand-mint/50 rounded-[2rem] p-6 shadow-card">
                <div className="flex gap-4 items-center mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-brand-mint/60 flex items-center justify-center text-brand-accent flex-shrink-0">
                    <Share2 className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider">Socials</span>
                    <span className="text-sm font-bold text-brand-dark">Network Channels</span>
                  </div>
                </div>
                
                {/* Custom round icon buttons matching layout */}
                <div className="flex gap-3 pl-16">
                  <a 
                    href="https://www.linkedin.com/in/vansh-jain-645b67292/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-brand-accent hover:bg-brand-hover text-white flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-200"
                  >
                    <LinkedinIcon className="h-4 w-4" />
                  </a>
                  <a 
                    href="https://github.com/VanshJain609" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-brand-accent hover:bg-brand-hover text-white flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-200"
                  >
                    <GithubIcon className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </ScrollReveal>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-8">
            <ScrollReveal direction="left" delay={0.25}>
              <div className="bg-brand-cardBg border border-brand-mint/50 rounded-[2rem] p-8 sm:p-10 shadow-card">
                
                <AnimatePresence mode="wait">
                  {!submitSuccess ? (
                    <motion.form 
                      key="contact-form"
                      onSubmit={handleSubmit}
                      className="space-y-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      {/* Name & Email inputs in one row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        
                        {/* Name Input */}
                        <div className="flex flex-col gap-2">
                          <label className="text-[10px] font-black text-brand-dark tracking-wider uppercase">
                            Player Name
                          </label>
                          <input 
                            type="text" 
                            name="playerName"
                            value={formData.playerName}
                            onChange={handleInputChange}
                            placeholder="John Doe"
                            required
                            className="bg-transparent border-b border-brand-mint focus:border-brand-accent py-2 text-sm text-brand-dark placeholder-gray-400 focus:outline-none transition-colors"
                          />
                        </div>

                        {/* Email Input */}
                        <div className="flex flex-col gap-2">
                          <label className="text-[10px] font-black text-brand-dark tracking-wider uppercase">
                            Commlink (Email)
                          </label>
                          <input 
                            type="email" 
                            name="commLink"
                            value={formData.commLink}
                            onChange={handleInputChange}
                            placeholder="john@domain.com"
                            required
                            className="bg-transparent border-b border-brand-mint focus:border-brand-accent py-2 text-sm text-brand-dark placeholder-gray-400 focus:outline-none transition-colors"
                          />
                        </div>

                      </div>

                      {/* Dropdown Topic Select */}
                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-black text-brand-dark tracking-wider uppercase">
                          Quest Objective
                        </label>
                        <select 
                          name="questObjective"
                          value={formData.questObjective}
                          onChange={handleInputChange}
                          className="bg-transparent border-b border-brand-mint focus:border-brand-accent py-2 text-sm text-brand-dark focus:outline-none transition-colors cursor-pointer"
                        >
                          <option value="" disabled className="text-gray-400">Select a topic...</option>
                          <option value="freelance" className="bg-white">Hire for Freelance Project</option>
                          <option value="fulltime" className="bg-white">Job Opportunity / Recruitment</option>
                          <option value="collaborate" className="bg-white">Game Jam / Collaboration</option>
                          <option value="hello" className="bg-white">Just Saying Hello</option>
                        </select>
                      </div>

                      {/* Message Input */}
                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-black text-brand-dark tracking-wider uppercase">
                          Message Lore
                        </label>
                        <textarea 
                          rows={4}
                          name="messageLore"
                          value={formData.messageLore}
                          onChange={handleInputChange}
                          placeholder="Tell me about your project..."
                          required
                          className="bg-transparent border-b border-brand-mint focus:border-brand-accent py-2 text-sm text-brand-dark placeholder-gray-400 focus:outline-none transition-colors resize-none"
                        />
                      </div>

                      {/* Submit Button */}
                      <div className="flex justify-end pt-4">
                        <button 
                          type="submit"
                          disabled={isSubmitting}
                          className={`px-8 py-3.5 rounded-full bg-brand-accent hover:bg-brand-hover text-white text-xs font-bold shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2 group animate-pulse-glow ${
                            isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                          }`}
                        >
                          {isSubmitting ? (
                            <>
                              <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                              </svg>
                              TRANSMITTING...
                            </>
                          ) : (
                            <>
                              <Send className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                              INITIATE TRANSMISSION
                            </>
                          )}
                        </button>
                      </div>

                    </motion.form>
                  ) : (
                    <motion.div 
                      key="success-message"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12 space-y-6"
                    >
                      <div className="w-16 h-16 rounded-full bg-brand-mint/60 flex items-center justify-center mx-auto text-brand-accent">
                        <CheckCircle2 className="h-10 w-10" />
                      </div>
                      
                      <div className="space-y-2">
                        <h3 className="font-display font-extrabold text-2xl text-brand-dark">
                          Transmission Established!
                        </h3>
                        <p className="text-sm font-semibold text-gray-500 max-w-md mx-auto">
                          Your signal has been received and logged in the queue. I'll read the message lore and establish communication shortly.
                        </p>
                      </div>

                      <button 
                        onClick={() => setSubmitSuccess(false)}
                        className="px-6 py-2.5 rounded-full border border-brand-mint text-xs font-bold hover:bg-brand-mint/30 transition-colors"
                      >
                        Send Another Signal
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </PageTransition>
  );
};

export default Contact;
