"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function Courses() {
  return (
    <section id="courses" className="py-24 md:py-32 relative z-10">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Animated Headings */}
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-[var(--color-text-mute)] text-sm font-mono uppercase tracking-[0.2em] mb-4"
          >
            Pricing & Enrollment
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white tracking-tight"
          >
            One complete track to master <br className="hidden md:block" /> AI & Digital Marketing.
          </motion.h2>
        </div>

        {/* SINGLE PREMIUM CARD WITH MAGIC RUNNING BORDER */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative rounded-3xl overflow-hidden p-[2px] group mx-auto max-w-2xl shadow-[0_0_50px_rgba(230,87,12,0.15)]"
        >
          {/* Spinning Conic Gradient (The Magic Border) */}
          <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_70%,var(--color-brand-orange)_100%)] animate-[spin_4s_linear_infinite] z-0 opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Inner Card Content */}
          <div className="relative z-10 bg-[#07080a]/95 backdrop-blur-3xl border border-white/5 rounded-[22px] p-8 md:p-12 flex flex-col">
            
            <div className="absolute -top-4 right-8 bg-gradient-to-br from-[var(--color-brand-orange)] to-[#cc4a04] text-white text-[12px] font-bold px-4 py-1.5 rounded-full font-mono shadow-lg border border-white/20">
              Live Cohort Entry
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Advanced Masterclass</h3>
            <div className="font-mono text-[13px] text-[var(--color-text-mute)] mb-6">12–14 weeks · Job assistance included</div>
            
            <div className="flex items-baseline gap-2 mb-8">
              <span className="text-5xl md:text-[64px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-orange)] to-[var(--color-brand-blue)] leading-none">
                ₹9,999
              </span>
              <span className="text-[15px] text-[var(--color-text-dim)] font-medium">one-time</span>
            </div>
            
            <div className="w-full h-[1px] bg-white/10 mb-8"></div>
            
            <ul className="flex flex-col gap-4 mb-10">
              {[
                "Digital marketing fundamentals & deep-dive funnels", 
                "SEO + GEO (Generative Engine Optimization)", 
                "Google & Meta Ads + Performance Max mastery", 
                "Live client project — real campaign, real budget",
                "Resume & LinkedIn optimization + Mock interviews"
              ].map((item, i) => (
                <li key={i} className="text-[15px] md:text-[16px] text-gray-300 flex items-start gap-3 leading-relaxed">
                  <span className="text-[var(--color-brand-orange)] font-bold shrink-0 mt-0.5">✓</span> {item}
                </li>
              ))}
            </ul>

            {/* Using your global .btn-premium class for the button */}
            <a href="#enroll" className="btn-premium w-full py-4 rounded-full font-bold text-[16px] text-center shadow-2xl">
              Enroll in the Cohort Now
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}