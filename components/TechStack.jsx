"use client";
import React from 'react';
import { motion } from 'framer-motion';

// Row 1 Tools
const topRowTools = [
  { name: "Google Analytics 4", short: "GA4" },
  { name: "Meta Ads", short: "META" },
  { name: "Google Ads", short: "ADS" },
  { name: "Shopify", short: "SHOP" },
  { name: "ChatGPT", short: "GPT" },
  { name: "Looker Studio", short: "LKR" },
  { name: "TikTok Ads", short: "TOK" },
];

// Row 2 Tools
const bottomRowTools = [
  { name: "n8n Automation", short: "n8n" },
  { name: "Gemini AI", short: "GMNI" },
  { name: "Google Tag Manager", short: "GTM" },
  { name: "LinkedIn Ads", short: "IN" },
  { name: "WordPress", short: "WP" },
  { name: "WhatsApp API", short: "WA" },
  { name: "Claude AI", short: "CLD" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

// Reusable Tool Card Component
const ToolCard = ({ tool }) => (
  <div className="w-[140px] md:w-[150px] h-[130px] md:h-[140px] shrink-0 bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:border-[var(--color-brand-orange)]/50 hover:bg-gradient-to-b hover:from-[var(--color-brand-orange)]/10 hover:to-transparent hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(230,87,12,0.2)] group cursor-pointer">
    
    <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-black/40 border border-white/5 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300">
      <span className="font-mono text-white/50 group-hover:text-[var(--color-brand-orange)] text-[16px] md:text-[18px] font-bold transition-colors">
        {tool.short}
      </span>
    </div>

    <span className="text-[12px] md:text-[13px] font-medium text-gray-200 group-hover:text-white transition-colors text-center px-2">
      {tool.name}
    </span>
  </div>
);

export default function TechStack() {
  return (
    <section className="py-18 md:py-12 relative z-10 overflow-hidden">
      
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] max-w-[800px] h-[300px] bg-[var(--color-brand-orange)]/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-20 mb-8 md:mb-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="text-center">
          <span className="font-mono text-[var(--color-text-mute)] text-[13px] uppercase tracking-[0.2em] mb-4 block">
            Tools & Platforms
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            The Performance <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-orange)] to-[#ff8a47]">Tech Stack</span>
          </h2>
          <p className="text-[var(--color-text-mute)] mt-4 text-[15px] md:text-[17px] max-w-2xl mx-auto">
            Master the exact platforms and AI tools used by top 1% performance marketers today.
          </p>
        </motion.div>
      </div>

      {/* --- CENTERED INFINITE SCROLLING MARQUEE SECTION --- */}
      {/* 
        Key Fix: Added 'max-w-6xl mx-auto px-6' so it doesn't bleed to the extreme edges 
        of ultra-wide monitors, matching the rest of the layout perfectly.
      */}
      <div 
        className="relative z-20 w-full max-w-6xl mx-auto px-6 flex flex-col gap-6 md:gap-8 py-10 overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
        }}
      >
        
        {/* ROW 1: Scrolling Left to Right */}
        <div className="w-full overflow-visible flex">
          <motion.div
            className="flex w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          >
            {/* Set 1 */}
            <div className="flex gap-6 md:gap-8 pr-6 md:pr-8">
              {topRowTools.map((tool, index) => <ToolCard key={`top1-${index}`} tool={tool} />)}
            </div>
            {/* Set 2 (Exact Duplicate for perfect math loop) */}
            <div className="flex gap-6 md:gap-8 pr-6 md:pr-8">
              {topRowTools.map((tool, index) => <ToolCard key={`top2-${index}`} tool={tool} />)}
            </div>
          </motion.div>
        </div>

        {/* ROW 2: Scrolling Right to Left */}
        <div className="w-full overflow-visible flex">
          <motion.div
            className="flex w-max"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          >
            {/* Set 1 */}
            <div className="flex gap-6 md:gap-8 pr-6 md:pr-8">
              {bottomRowTools.map((tool, index) => <ToolCard key={`bottom1-${index}`} tool={tool} />)}
            </div>
            {/* Set 2 (Exact Duplicate for perfect math loop) */}
            <div className="flex gap-6 md:gap-8 pr-6 md:pr-8">
              {bottomRowTools.map((tool, index) => <ToolCard key={`bottom2-${index}`} tool={tool} />)}
            </div>
          </motion.div>
        </div>

      </div>

      {/* Call to Action Button */}
      <div className="relative z-20 mt-6 flex justify-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <a href="#courses" className="btn-premium px-8 py-4 rounded-full font-bold text-[15px] md:text-[16px] inline-flex items-center gap-2 shadow-2xl">
            Master These Tools Now
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </a>
        </motion.div>
      </div>

    </section>
  );
}