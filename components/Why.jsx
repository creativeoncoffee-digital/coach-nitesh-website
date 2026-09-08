"use client";
import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Why() {
  return (
    <section id="why" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="mb-16 md:mb-20 text-center md:text-left">
          <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[var(--color-text-mute)] text-sm font-mono uppercase tracking-[0.2em] mb-4">
            Why train here
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-3xl md:text-5xl font-bold text-white tracking-tight max-w-3xl">
            Built by someone who's already trained a small city's worth of marketers.
          </motion.h2>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={containerVariants}
        >
          {[
            { num: "01", title: "Taught live, by one person", desc: "No handoff to random TAs. Every session is taught directly, with a decade of watching what actually gets students hired." },
            { num: "02", title: "Rebuilt for 2026, not 2016", desc: "GEO, GA4, Performance Max, and AI-assisted workflows are core modules — not a bolted-on 'AI bonus' chapter." },
            { num: "03", title: "You leave with proof", desc: "A live client project and a portfolio piece — something you can actually show in an interview, not just a certificate." }
          ].map((item, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants}
              className="bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[var(--color-brand-orange)]/40 hover:shadow-[0_15px_40px_rgba(230,87,12,0.15)] group"
            >
              <div className="font-mono text-[var(--color-brand-orange)] text-[14px] font-bold mb-4 bg-[var(--color-brand-orange)]/10 inline-block px-3 py-1 rounded-full">{item.num}</div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[var(--color-brand-orange)] transition-colors">{item.title}</h3>
              <p className="text-[var(--color-text-mute)] text-[15px] leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}