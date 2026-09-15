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

const fadeRight = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function AboutFAQ() {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);

  return (
    <>
      {/* About Section */}
      <section id="about" className="py-20  relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={containerVariants}>
            
            <motion.span variants={fadeUp} className="font-mono text-[var(--color-text-mute)] text-[13px] uppercase tracking-[0.2em] mb-4 block text-center md:text-center">
              About your trainer
            </motion.span>
            
            {/* Grid updated to items-start instead of items-end to prevent the image from sinking to the bottom */}
            <div className="grid grid-cols-1 lg:grid-cols-[500px_1fr] gap-12 lg:gap-16 mt-8 items-start">
              
              {/* Profile Image - Applied negative margin (-mt-[60px] = ~ -mt-15) to pull the image up */}
              <motion.div variants={fadeRight} className="w-full flex justify-center relative group -mt-6 md:mt-[30px]">
                 <img 
                   src="/images/Profile.png" 
                   alt="Coach Nitesh Giri" 
                   className="w-full max-w-[500px] h-auto object-contain relative z-10 transition-transform duration-700 group-hover:scale-105 origin-bottom"
                   style={{ 
                     WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)',
                     maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)'
                   }} 
                 />
              </motion.div>
              
              {/* Profile Text Data */}
              <motion.div variants={containerVariants} className="flex flex-col justify-center py-4 lg:pb-8">
                <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl text-white mb-2 font-bold tracking-tight">
                  Nitesh Giri
                </motion.h2>
                <motion.div variants={fadeUp} className="text-[var(--color-brand-orange)] font-mono uppercase tracking-widest text-[13px] mb-8 font-semibold">
                  Digital Marketing Professional & Trainer
                </motion.div>

                <div className="space-y-3 text-[var(--color-text-mute)] text-[16px] md:text-[17px] leading-relaxed">
                  <motion.p variants={fadeUp}>
                    I am Nitesh Giri, a Digital Marketing professional, entrepreneur, and trainer with experience in Digital Marketing, AI, Branding, Performance Marketing, SEO, Social Media Marketing, and Web Development.
                  </motion.p>
                  <motion.p variants={fadeUp}>
                    Training and mentoring have been an important part of my professional journey. I enjoy helping students, working professionals, entrepreneurs, and business owners understand digital marketing through practical, real-world examples.
                  </motion.p>
                  <motion.p variants={fadeUp}>
                    My training focuses on making complex topics simple and actionable, with a strong emphasis on practical learning, AI tools, digital strategies, and business applications. Along with training, I run <span className="text-white font-semibold">Creative on Coffee</span>, where I work with brands on digital marketing, branding, performance, AI, and web development.
                  </motion.p>
                </div>

                {/* Animated LinkedIn Button */}
                <motion.div variants={fadeUp} className="mt-10">
                  <a 
                    href="https://www.linkedin.com/in/niteshgiri/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#0A66C2] border border-[#0A66C2]/30 text-white  transition-all duration-300 font-semibold shadow-lg hover:shadow-[#0A66C2]/20 group"
                  >
                    <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    Connect on LinkedIn
                  </a>
                </motion.div>
              </motion.div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-0 relative z-10">
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
      <section className="py-20 relative z-10 text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">Batches are forming now.</h2>
          <p className="text-[var(--color-text-mute)] text-[16px] md:text-[18px]">Live Training, taught directly — not a recorded backlog you'll never finish.</p>
          
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="#courses" className="btn-premium px-8 py-4 rounded-full font-bold text-[16px]">
              Enroll in the Live Training
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