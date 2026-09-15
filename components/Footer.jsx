"use client";
import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function Footer() {
  return (
    // bg-transparent ensures it blends with the main site background, no solid black box.
    <footer className="relative pt-10 pb-28 md:pb-12 z-10 bg-transparent overflow-hidden">
      
      {/* Background ambient glow (subtle) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[150px] bg-[var(--color-brand-orange)]/5 blur-[100px] rounded-full pointer-events-none z-0"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-20 flex flex-col items-center">
        
        {/* Zigzag Top Divider (SaaS style subtle line) */}
        <div className="w-full max-w-2xl overflow-hidden flex justify-center mb-8 opacity-30">
          <svg width="100%" height="8" preserveAspectRatio="none" viewBox="0 0 1000 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 4L10 0L20 4L30 0L40 4L50 0L60 4L70 0L80 4L90 0L100 4L110 0L120 4L130 0L140 4L150 0L160 4L170 0L180 4L190 0L200 4L210 0L220 4L230 0L240 4L250 0L260 4L270 0L280 4L290 0L300 4L310 0L320 4L330 0L340 4L350 0L360 4L370 0L380 4L390 0L400 4L410 0L420 4L430 0L440 4L450 0L460 4L470 0L480 4L490 0L500 4L510 0L520 4L530 0L540 4L550 0L560 4L570 0L580 4L590 0L600 4L610 0L620 4L630 0L640 4L650 0L660 4L670 0L680 4L690 0L700 4L710 0L720 4L730 0L740 4L750 0L760 4L770 0L780 4L790 0L800 4L810 0L820 4L830 0L840 4L850 0L860 4L870 0L880 4L890 0L900 4L910 0L920 4L930 0L940 4L950 0L960 4L970 0L980 4L990 0L1000 4" stroke="white" strokeWidth="1" strokeLinejoin="round"/>
          </svg>
        </div>

        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-50px" }} 
          variants={fadeUp}
          className="flex flex-col items-center w-full"
        >
          {/* Logo */}
          <div className="mb-5">
            <img src="/images/Logo.png" alt="CoachNitesh Logo" className="h-5 md:h-6 object-contain" />
          </div>
          
          <div className="flex items-center  mb-4 justify-center gap-4 text-gray-400 text-[12px] font-medium">
            <span>
              Design And Developed by{" "}
              <a
                href="https://creativeoncoffee.com"
                target="_blank"
                rel="noopener"
                className="text-[#e6570c] hover:text-white transition-colors duration-300 font-bold"
              >
                Creative On Coffee
              </a>
            </span>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-8 text-[14px] md:text-[15px] text-[var(--color-text-mute)] font-medium">
            <a href="/privacy" className="hover:text-white transition-colors relative group">
              Privacy Policy
              <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[var(--color-brand-orange)] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="/terms" className="hover:text-white transition-colors relative group">
              Terms of use
              <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[var(--color-brand-orange)] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="/refund" className="hover:text-white transition-colors relative group">
              Refund Policy
              <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[var(--color-brand-orange)] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-4 mb-10">
            {[
              { name: "Facebook", icon: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
              { name: "Instagram", icon: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 6.5h11A5 5 0 0122.5 11.5v11a5 5 0 01-5 5h-11a5 5 0 01-5-5v-11a5 5 0 015-5z" },
              { name: "Twitter", icon: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" },
              { name: "LinkedIn", icon: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 2a2 2 0 100 4 2 2 0 000-4z" },
              { name: "YouTube", icon: "M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33 2.78 2.78 0 001.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.33 29 29 0 00-.46-5.33zM9.75 15.02V8.48l6.5 3.27-6.5 3.27z" }
            ].map((social, idx) => (
              <a 
                key={idx}
                href="#" 
                title={social.name}
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-[var(--color-brand-orange)]/20 hover:border-[var(--color-brand-orange)] hover:text-[var(--color-brand-orange)] transition-all duration-300 hover:scale-110"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d={social.icon} />
                </svg>
              </a>
            ))}
          </div>

          {/* Copyright text */}
          <div className="text-[13px] text-white/40">
            Copyright © 2026 CoachNitesh. All rights reserved
          </div>
        </motion.div>
        
      </div>
    </footer>
  );
}