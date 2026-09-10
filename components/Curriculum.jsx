"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const modules = [
  {t: "Digital Marketing Foundations", d: "How marketing works today, customer journeys, funnels, and setting up your brand's core digital presence."},
  {t: "SEO in the AI Era", d: "Traditional SEO plus GEO — optimizing content to show up in AI Overviews, ChatGPT, and Perplexity answers, not just Google's blue links."},
  {t: "Content & Social Media Marketing", d: "Content strategy, calendars, and responsible AI-assisted content creation across Instagram, LinkedIn, and YouTube Shorts."},
  {t: "Paid Advertising", d: "Google Ads including Performance Max, and the current Meta Ads Manager — budgeting, targeting, and retargeting."},
  {t: "Analytics & Data", d: "GA4 from the ground up, reading dashboards, and using AI tools to speed up reporting and insights."},
  {t: "Email & Automation", d: "Email marketing fundamentals, basic automation flows, and WhatsApp marketing for the Indian SMB market."},
  {t: "Live Client Project", d: "Work a real brand campaign end-to-end and present results the way you would to an actual client or employer."},
  {t: "Career & Job Assistance", d: "Resume and LinkedIn optimization, mock interviews, and portfolio building from your live project work."}
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function Curriculum() {
  const [openIndex, setOpenIndex] = useState(0); // Pehla open rakhte hain for better UX

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="curriculum" className="py-24 relative z-10">
      <div className="max-w-4xl mx-auto px-6">
        
        <div className="mb-12 text-center md:text-center">
          <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[var(--color-text-mute)] text-sm font-mono uppercase tracking-[0.2em] mb-4">
            Curriculum
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            What you'll actually learn, <br className="hidden md:block"/> module by module.
          </motion.h2>
        </div>

        <motion.div 
          className="space-y-4"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={containerVariants}
        >
          {modules.map((mod, i) => (
            <motion.div 
              key={i} 
              variants={itemVariants}
              className={`border rounded-2xl overflow-hidden backdrop-blur-md transition-all duration-300 ${openIndex === i ? 'border-[var(--color-brand-orange)]/40 bg-[var(--color-brand-orange)]/5' : 'border-white/10 bg-white/5 hover:bg-white/10'}`}
            >
              <div className="flex justify-between items-center p-5 md:p-6 cursor-pointer" onClick={() => toggleOpen(i)}>
                <div className="flex items-center gap-4 md:gap-6">
                  <span className={`font-mono text-[14px] font-bold ${openIndex === i ? 'text-[var(--color-brand-orange)]' : 'text-white/40'}`}>0{i + 1}</span>
                  <h4 className="text-white font-bold text-[16px] md:text-[18px]">{mod.t}</h4>
                </div>
                <span className={`text-2xl transition-transform duration-300 ${openIndex === i ? 'rotate-45 text-[var(--color-brand-orange)]' : 'text-white/40'}`}>
                  +
                </span>
              </div>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 md:px-6 pb-6 pt-0 pl-[52px] md:pl-[68px] text-[var(--color-text-mute)] text-[15px] leading-relaxed">
                      {mod.d}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}