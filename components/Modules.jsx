"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Real Data converted into bullet points for the expanding view
const moduleData = [
  {
    num: "01",
    title: "Digital Marketing Foundations",
    topics: ["What is Performance Marketing", "Customer Journeys & Funnels", "Setting up core digital presence", "Branding vs Performance"]
  },
  {
    num: "02",
    title: "SEO in the AI Era",
    topics: ["Traditional SEO fundamentals", "GEO (Generative Engine Optimization)", "Optimizing for AI Overviews (ChatGPT, Perplexity)", "Technical SEO basics"]
  },
  {
    num: "03",
    title: "Content & Social Media",
    topics: ["Content strategy & calendars", "Responsible AI-assisted creation", "Instagram & LinkedIn growth", "YouTube Shorts algorithms"]
  },
  {
    num: "04",
    title: "Paid Advertising Basics",
    topics: ["How Ad Network Algorithms Work", "Bidding Mechanics & Auctions", "Quality Scores & Trust", "Budget Liquidity & Learning Phase"]
  },
  {
    num: "05",
    title: "Google & Meta Ads",
    topics: ["Google Ads (Search & Display)", "Performance Max campaigns", "Meta Ads Manager deep dive", "Targeting and Retargeting"]
  },
  {
    num: "06",
    title: "Analytics & Data",
    topics: ["GA4 from the ground up", "Reading and building dashboards", "Tracking & Attribution", "AI tools for rapid reporting"]
  },
  {
    num: "07",
    title: "Email & Automation",
    topics: ["Email marketing fundamentals", "Basic automation flows", "WhatsApp marketing for SMBs", "CRM integration basics"]
  },
  {
    num: "08",
    title: "Live Client Project",
    topics: ["End-to-end real brand campaign", "Budget management", "Presenting results to clients", "Building a verifiable portfolio"]
  },
  {
    num: "09",
    title: "Career Assistance",
    topics: ["Resume & LinkedIn optimization", "Mock interviews for DM roles", "Salary negotiation tactics", "Referrals & Networking"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Modules() {
  // Store the index of the currently expanded card. Default is null (all closed)
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="curriculum" className="py-24 md:py-15   relative z-10 overflow-hidden">
      
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[300px] bg-[var(--color-brand-orange)]/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-20">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-20 text-center">
          <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[var(--color-text-mute)] text-sm font-mono uppercase tracking-[0.2em] mb-4">
            The Complete Performance Stack
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
            9 Modules. 30+ Topics. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-orange)] to-[#ff8a47]">One Unified System.</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-[var(--color-text-mute)] text-[16px]">
            What you'll actually learn, module by module.
          </motion.p>
        </div>

        {/* Modules Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={containerVariants}
        >
          {moduleData.map((item, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <motion.div 
                key={index} 
                variants={cardVariants}
                onClick={() => toggleExpand(index)}
                // Use fixed padding to reserve space for the magic border so it doesn't jump when clicked
                className={`group relative flex flex-col justify-start rounded-2xl transition-all duration-300 cursor-pointer overflow-hidden p-[1.5px] ${
                  isExpanded 
                    ? 'shadow-[0_15px_40px_rgba(230,87,12,0.15)] scale-[1.02] z-20' 
                    : 'z-0 hover:scale-[1.01]'
                }`}
              >
                {/* --- MAGIC RUNNING BORDER BACKGROUND --- */}
                {isExpanded ? (
                  // Spinning Gradient for Active State
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_70%,var(--color-brand-orange)_100%)] animate-[spin_3s_linear_infinite] z-0" />
                ) : (
                  // Static Glass Border for Inactive State
                  <div className="absolute inset-0 border border-white/10 rounded-2xl transition-colors duration-300 group-hover:border-white/30 z-0" />
                )}

                {/* --- INNER CONTENT CONTAINER --- */}
                {/* The background goes solid dark when expanded to hide the center of the spinning gradient */}
                <div className={`relative z-10 w-full h-full flex flex-col justify-start rounded-[15px] p-7 transition-all duration-300 ${
                  isExpanded 
                    ? 'bg-[#07080a]' // Match page background color so only the edge glows
                    : 'bg-white/5 backdrop-blur-md group-hover:bg-white/10'
                }`}>
                  
                  {/* Background Ghost Number */}
                  <div className="absolute -bottom-4 -right-2 text-[80px] font-black text-white/[0.03] select-none pointer-events-none font-mono">
                    {item.num}
                  </div>

                  {/* Card Header (Always Visible) */}
                  <div className="flex justify-between items-start mb-4 relative z-10">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[var(--color-brand-orange)] text-[12px] font-bold uppercase tracking-widest bg-[var(--color-brand-orange)]/10 px-3 py-1 rounded-full">
                        Module {item.num}
                      </span>
                    </div>
                    {/* Arrow Icon that rotates when expanded */}
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${isExpanded ? '-rotate-180 bg-[var(--color-brand-orange)]/20 text-[var(--color-brand-orange)]' : 'bg-white/5 text-white/40'}`}>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    </div>
                  </div>

                  <h3 className={`text-xl font-bold mb-4 relative z-10 transition-colors ${isExpanded ? 'text-[var(--color-brand-orange)]' : 'text-white'}`}>
                    {item.title}
                  </h3>
                  
                  <p className={`text-[11px] font-mono tracking-widest uppercase transition-colors relative z-10 ${isExpanded ? 'text-transparent' : 'text-[var(--color-brand-orange)] group-hover:opacity-100 opacity-70'}`}>
                    Click to reveal topics
                  </p>

                  {/* Expanding Content (Topics List) */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="relative z-10 w-full"
                      >
                        {/* Divider */}
                        <div className="w-full h-[1px] bg-white/10 my-4"></div>
                        
                        <ul className="space-y-3 pb-2">
                          {item.topics.map((topic, tIndex) => (
                            <motion.li 
                              key={tIndex}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 + (tIndex * 0.05) }}
                              className="flex items-start gap-2.5 text-[14.5px] text-gray-300"
                            >
                              <svg className="w-4 h-4 text-[var(--color-brand-orange)] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                              <span className="leading-snug">{topic}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}