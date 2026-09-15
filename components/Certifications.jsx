"use client";
import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function Certification() {
  return (
    <section className="py-16 md:py-15 relative z-10 overflow-hidden">
      
      {/* Subtle Background Ambient Glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[var(--color-brand-orange)]/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-20">
        
        {/* --- TOP CENTERED HEADINGS --- */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="text-center mb-16 md:mb-24"
        >
          <motion.p variants={fadeUp} className="text-[var(--color-text-mute)] text-sm font-mono uppercase tracking-[0.2em] mb-4">
            Official Recognition
          </motion.p>
          
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.15]">
            Get <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-orange)] to-[#ff8a47]">Certified</span>
          </motion.h2>
        </motion.div>

        {/* --- BOTTOM CONTENT: Skewed Grid Layout for HUGE Image --- */}
        {/* Changed from equal halves to 1fr (Text) and 1.4fr (Image) to give the image way more room */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16 lg:gap-12 items-center">
          
          {/* --- LEFT CONTENT: List & Button --- */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            <motion.ul variants={staggerContainer} className="space-y-6 mb-12">
              <motion.li variants={fadeUp} className="flex items-center gap-5 group cursor-default">
                <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[var(--color-brand-orange)] group-hover:bg-[var(--color-brand-orange)]/10 group-hover:border-[var(--color-brand-orange)]/30 group-hover:scale-110 transition-all duration-300 shadow-lg shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
                </div>
                <span className="text-[17px] text-gray-200 font-medium group-hover:text-white transition-colors">Earn your credential of Expertise</span>
              </motion.li>

              <motion.li variants={fadeUp} className="flex items-center gap-5 group cursor-default">
                <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[var(--color-brand-orange)] group-hover:bg-[var(--color-brand-orange)]/10 group-hover:border-[var(--color-brand-orange)]/30 group-hover:scale-110 transition-all duration-300 shadow-lg shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
                </div>
                <span className="text-[17px] text-gray-200 font-medium group-hover:text-white transition-colors">Share your verified certificate</span>
              </motion.li>

              <motion.li variants={fadeUp} className="flex items-center gap-5 group cursor-default">
                <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[var(--color-brand-orange)] group-hover:bg-[var(--color-brand-orange)]/10 group-hover:border-[var(--color-brand-orange)]/30 group-hover:scale-110 transition-all duration-300 shadow-lg shrink-0">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </div>
                <span className="text-[17px] text-gray-200 font-medium group-hover:text-white transition-colors">Add certificate to your LinkedIn</span>
              </motion.li>
            </motion.ul>

            <motion.div variants={fadeUp}>
              <a href="#courses" className="btn-premium px-10 py-4 rounded-full font-bold text-[16px] inline-block shadow-2xl">
                Enroll Now
              </a>
            </motion.div>
          </motion.div>

          {/* --- RIGHT CONTENT: MASSIVE Certificate Image Mockup --- */}
          {/* Scaled to 1.35 (35% bigger) when fully in view. Adjust scale down if it's TOO huge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotateY: 20 }} 
            whileInView={{ opacity: 1, scale: 1.1, rotateY: 0 }} 
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative perspective-1000 mt-12 lg:mt-0 origin-center lg:origin-left z-10"
          >
            <motion.div 
              animate={{ y: [0, -15, 0] }} 
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative rounded-2xl p-1 md:p-2 bg-gradient-to-br from-white/10 to-transparent border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.7)] backdrop-blur-md"
            >
              <img 
                src="/images/Certificate.png"   
                alt="Course Certificate Mockup" 
                className="w-full h-auto rounded-xl object-cover shadow-inner bg-white"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent rounded-2xl pointer-events-none"></div>
            </motion.div>

            {/* Glowing shadow behind the certificate scaled up to match */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-[var(--color-brand-orange)]/30 blur-[100px] z-[-1] rounded-full pointer-events-none"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}