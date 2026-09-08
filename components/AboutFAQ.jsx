"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {q: "Is this beginner-friendly?", a: "Yes — the course assumes no prior experience and starts from the basics before moving into advanced tools and AI platforms."},
  {q: "Do I get a certificate?", a: "Yes, every student receives the CoachNitesh Certified Digital Marketer certificate on completion, and we guide you through free Google/HubSpot certifications too."},
  {q: "What if I miss a live class?", a: "Message on WhatsApp to arrange a catch-up. All live sessions are recorded and provided to students within 24 hours."},
  {q: "Is job placement guaranteed?", a: "No — we provide robust job assistance (resume help, mock interviews, referrals), but placement itself is never guaranteed by any honest program."}
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function AboutFAQ() {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);

  return (
    <>
      {/* About Section */}
      <section id="about" className="py-24 relative z-10">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}>
            
            <span className="font-mono text-[var(--color-text-mute)] text-[13px] uppercase tracking-[0.2em] mb-4 block">About your trainer</span>
            
            <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-10 mt-8 items-start">
              {/* Profile Image/Avatar Box */}
              <div className="w-full aspect-square rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-[var(--color-brand-orange)] text-[80px] font-bold shadow-[0_0_40px_rgba(230,87,12,0.1)] relative overflow-hidden group">
                 {/* Subtle gradient overlay on hover */}
                 <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-brand-orange)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                 N
              </div>
              
              <div>
                <h2 className="text-3xl md:text-4xl text-white mb-6 font-bold tracking-tight">Coach Nitesh</h2>
                <div className="space-y-5 text-[var(--color-text-mute)] text-[16px] leading-relaxed">
                  <p>I started training digital marketers in 2016 and taught over 2,500 students across the next several years — everything from complete beginners to working professionals switching careers.</p>
                  <p>I stepped away from teaching for a few years. In that time, the field changed more than in the decade before it — AI-assisted workflows, GEO, and platform overhauls like GA4 rewrote a lot of what used to be "best practice."</p>
                  <p>This relaunch isn't the same syllabus with an AI chapter bolted on. I rebuilt the curriculum from scratch around how the work actually gets done in 2026 — and I'm teaching it live, the same way I always have.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 relative z-10">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="text-center mb-12">
            <span className="font-mono text-[var(--color-text-mute)] text-[13px] uppercase tracking-[0.2em] mb-4 block">FAQ</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Common questions.</h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={containerVariants} className="space-y-4">
            {faqs.map((f, index) => (
              <motion.div 
                key={index} 
                variants={fadeUp}
                className={`border rounded-2xl overflow-hidden backdrop-blur-md transition-all duration-300 ${openFaq === index ? 'border-[var(--color-brand-orange)]/40 bg-[var(--color-brand-orange)]/5' : 'border-white/10 bg-white/5 hover:bg-white/10'}`}
              >
                <div className="flex justify-between items-center p-5 md:p-6 cursor-pointer gap-4" onClick={() => toggleFaq(index)}>
                  <h4 className="text-white font-bold text-[16px] md:text-[18px]">{f.q}</h4>
                  <span className={`text-[24px] transition-transform duration-300 shrink-0 ${openFaq === index ? 'rotate-45 text-[var(--color-brand-orange)]' : 'text-white/40'}`}>+</span>
                </div>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 md:px-6 pb-6 pt-0 text-[var(--color-text-mute)] text-[15px] leading-relaxed">
                        {f.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA Band */}
      <section className="py-32 relative z-10 text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">Batches are forming now.</h2>
          <p className="text-[var(--color-text-mute)] text-[16px] md:text-[18px]">Live cohorts, taught directly — not a recorded backlog you'll never finish.</p>
          
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="#courses" className="btn-premium px-8 py-4 rounded-full font-bold text-[16px]">
              Enroll in the Cohort
            </a>
            <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer" className="bg-white/5 text-[var(--color-text-mute)] border border-white/10 px-8 py-4 rounded-full font-semibold text-[16px] transition-all hover:text-white hover:bg-white/10 hover:border-white/20 flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.125-.339-.153-.872-.349-1.579-.764-1.55-1.196-2.617-2.735-2.696-2.842-.078-.107-.643-.854-.643-1.63 0-.776.402-1.157.54-1.306.138-.15.299-.187.399-.187.1 0 .2.002.289.006.126.006.273-.021.422.339.15.361.512 1.25.556 1.338.044.089.072.193.022.293-.05.1-.075.161-.15.247-.075.087-.158.193-.223.25-.075.066-.153.136-.067.284.087.147.387.636.83 1.034.57.514 1.05.671 1.197.744.148.073.235.06.323-.039.088-.099.381-.444.484-.596.101-.153.203-.127.337-.078.134.05.845.399.989.471.144.073.24.11.275.172.036.063.036.362-.108.767z" fillRule="evenodd" clipRule="evenodd"/></svg>
              Message on WhatsApp
            </a>
          </div>
        </motion.div>
      </section>
    </>
  );
}