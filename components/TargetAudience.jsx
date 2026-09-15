"use client";
import React from 'react';
import { motion } from 'framer-motion';

const audienceData = [
  {
    title: "Students & Freshers",
    desc: "Learned marketing theory but struggling to land a high-paying agency or brand role?",
    highlight: "₹6–8 LPA",
    subtext: "starting salary potential",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    )
  },
  {
    title: "Early Marketers",
    desc: "Stuck executing basic tasks and ready to move beyond just clicking buttons in ad managers?",
    highlight: "₹12–18 LPA",
    subtext: "senior role salary target",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.896 1.978-1.978 1.978h-12.5c-1.082 0-1.978-.884-1.978-1.978v-4.25m16.456-1.5a5.25 5.25 0 00-5.25-5.25h-5.912a5.25 5.25 0 00-5.25 5.25m16.456 0h-16.456m16.456 0a5.25 5.25 0 015.25 5.25v2.75a5.25 5.25 0 01-5.25 5.25h-16.456a5.25 5.25 0 01-5.25-5.25v-2.75a5.25 5.25 0 015.25-5.25" />
      </svg>
    )
  },
  {
    title: "Freelancers",
    desc: "Tired of competing on price and want to stop working for low-paying, demanding clients?",
    highlight: "$40–$120 / Hr",
    subtext: "premium retainer rates",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    )
  },
  {
    title: "Founders & Owners",
    desc: "Want to take control of your growth and stop burning cash on agencies without transparent ROI?",
    highlight: "4x–6x ROAS",
    subtext: "targeted scaling potential",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6.75h1.5m-1.5 3h1.5m-1.5 3h1.5" />
      </svg>
    )
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function TargetAudience() {
  return (
    <section className="py-18 md:py-15   relative z-10 overflow-hidden">
      
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] max-w-[800px] h-[300px] bg-[var(--color-brand-orange)]/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-20">
        
        {/* Section Header */}
        <div className="mb-12 md:mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            className="text-3xl md:text-5xl font-bold text-white tracking-tight"
          >
            Who Is This <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-orange)] to-[#ff8a47]">For?</span>
          </motion.h2>
        </div>

        {/* Main Glass Panel */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="bg-[#09090a] backdrop-blur-xl border border-white/10 rounded-[32px] p-8 md:p-12 shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-x-16 md:gap-y-12">
            
            {audienceData.map((item, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="flex gap-5 group"
              >
                {/* Icon Box */}
                <div className="shrink-0 w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 group-hover:bg-[var(--color-brand-orange)]/10 group-hover:text-[var(--color-brand-orange)] group-hover:border-[var(--color-brand-orange)]/30 transition-all duration-300">
                  {item.icon}
                </div>

                {/* Content */}
                <div className="flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-[14.5px] text-[var(--color-text-mute)] leading-relaxed mb-4">
                    {item.desc}
                  </p>
                  
                  {/* Highlighted Metric */}
                  <div className="mt-auto">
                    <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-orange)] to-[#ff8a47] tracking-tight">
                      {item.highlight}
                    </div>
                    <div className="text-[12px] font-mono text-[var(--color-text-dim)] uppercase tracking-wider mt-1">
                      {item.subtext}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

          </div>
        </motion.div>

      </div>
    </section>
  );
}