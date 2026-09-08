"use client";
import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    num: 1,
    title: "Attend Live Classes",
    description: "Learn core concepts of GA4, GEO, and AI workflows in interactive, structured live sessions.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    )
  },
  {
    num: 2,
    title: "Build Campaigns",
    description: "Apply what you learn instantly. Create real marketing campaigns using advanced AI tools.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    )
  },
  {
    num: 3,
    title: "Get Live Feedback",
    description: "Get your work reviewed instantly. Clear your doubts and lock in your practical knowledge.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    )
  },
  {
    num: 4,
    title: "Earn Certification",
    description: "Graduate with a proven portfolio and a premium certificate to stand out to employers.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function HowItWorks() {
  return (
    /* Changed bg-[var(--color-bg-0)] to bg-transparent so it inherits the page's background */
    <section className="py-24 md:py-32 bg-transparent relative z-10">
      
      {/* Subtle background grid/glow to match theme (kept opacity very low at 5%) */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-5 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-20">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-16 md:mb-24">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[var(--color-text-mute)] text-sm font-mono uppercase tracking-[0.2em] mb-4"
          >
            How it works?
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4"
          >
            4 steps from beginner to <br className="hidden md:block" /> AI-powered marketer
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-[15px] md:text-lg max-w-2xl mx-auto"
          >
            We're not promising overnight success.<br className="hidden md:block"/>
            We are promising a clear, proven path—if you're ready to put in the work.
          </motion.p>
        </div>

        {/* --- STEPS WORKFLOW --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Connecting Horizontal Line (Desktop only) -> Exact center of 72px icons is top-9 */}
          <div className="hidden md:block absolute top-9 left-[12%] right-[12%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6">
            {steps.map((step, index) => (
              <motion.div key={step.num} variants={itemVariants} className="flex flex-col items-center text-center relative z-10">
                
                {/* Icon Box with Number Badge */}
                <div className="relative mb-6">
                  {/* The Glass Icon Container */}
                  <div className="w-[72px] h-[72px] rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.3)] flex items-center justify-center transition-transform hover:scale-105 hover:border-[var(--color-brand-orange)]/40 duration-300">
                    {step.icon}
                  </div>   
                  
                  {/* Upgraded Number Badge: Positioned mathematically at top-0 right-0 for a circle, with a gradient and glass border */}
                  <div className="absolute top-0 right-0 w-6 h-6 rounded-full bg-gradient-to-br from-[var(--color-brand-orange)] to-[#cc4a04] text-white text-[12px] font-bold flex items-center justify-center shadow-lg border border-white/20">
                    {step.num}
                  </div>
                </div>

                {/* Text Content */}
                <h3 className="text-white text-lg font-semibold mb-2">
                  {step.title}
                </h3>
                <p className="text-[var(--color-text-mute)] text-[14px] leading-relaxed max-w-[240px]">
                  {step.description}
                </p>
                
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}