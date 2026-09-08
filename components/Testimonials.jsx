"use client";
import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="mb-16 text-center">
          <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[var(--color-text-mute)] text-sm font-mono uppercase tracking-[0.2em] mb-4">
            Student Outcomes
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            What past cohorts say about us.
          </motion.h2>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={containerVariants}
        >
          {[
            { quote: "I'd tried two YouTube-course routes before this and never finished either. Having live sessions with someone who actually answers questions made the difference.", author: "Priya S.", role: "Content Marketer" },
            { quote: "The live project was the whole point for me. I walked into interviews with an actual campaign I'd run, not just a certificate.", author: "Arjun K.", role: "Performance Marketer" },
            { quote: "I run a small D2C brand and just needed to stop guessing on ads. Paid for itself within the first month of applying it.", author: "Meera T.", role: "Founder" }
          ].map((item, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants}
              className="bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[var(--color-brand-orange)]/40 hover:shadow-[0_15px_40px_rgba(0,0,0,0.5)] flex flex-col justify-between"
            >
              <div>
                <div className="text-[var(--color-brand-orange)] text-4xl mb-4 font-serif leading-none">"</div>
                <p className="text-white/90 text-[15px] leading-relaxed mb-6 font-medium">{item.quote}</p>
              </div>
              <div>
                <div className="font-bold text-white">{item.author}</div>
                <div className="text-[var(--color-text-dim)] text-[13px]">{item.role}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}