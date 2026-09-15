"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function Hero() {
  return (
    <section className="relative pt-18 md:pt-28 md:pb-15 pb-0 z-10 min-h-[100vh] flex flex-col items-center text-center overflow-hidden">
      
      {/* --- TOP SECTION: Text & Headline Hierarchy --- */}
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center relative z-10">
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={fadeUp} 
          transition={{ delay: 0.1 }}
          className="flex flex-col items-center gap-1"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-[1.1] tracking-tight max-w-6xl mx-auto">
            Helping Students & Professionals
          </h1>
          
          <h2 className="text-2xl md:text-[44px] font-semibold text-white leading-[1.2] tracking-tight max-w-4xl mx-auto">
            Master AI + Digital Marketing Course
          </h2>
          
          <div className="flex items-center justify-center gap-2 mt-2 md:mt-2">
            <span className="text-3xl md:text-5xl font-bold text-[var(--color-brand-orange)] -translate-y-1 md:-translate-y-2">
              @
            </span>
            <h2 className="text-6xl md:text-[80px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-orange)] via-[#ff8a47] to-[var(--color-brand-blue)] leading-none tracking-tighter drop-shadow-sm">
              ₹9999
            </h2>
          </div>
        </motion.div>
      </div>

      {/* --- BOTTOM SECTION: Image & Floating Badges --- */}
      <div className="relative w-full max-w-6xl mx-auto -mt-4 md:-mt-5 flex-1 flex justify-center items-end min-h-[450px] z-20 pointer-events-none">     
        
        {/* Center Portrait Image with PERFECT TRANSPARENT FADE */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, delay: 0.2 }}
          className="relative w-[85%] md:w-[560px] flex flex-col items-center justify-end"
        >
          <img 
            src="/images/Profile.png" 
            alt="Coach Nitesh" 
            className="w-full h-auto object-contain relative z-10"
            style={{ 
              WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)',
              maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)'
            }}
          />

          {/* 🌟 LOGO ADDED HERE - MOVED FURTHER DOWN 🌟 */}
          <div className="absolute -bottom-1 md:bottom-2 z-30 pointer-events-auto flex justify-center w-full">
            <Image 
              src="/images/Logo.png" 
              alt="CoachNitesh Logo" 
              width={300} 
              height={100} 
              className="w-auto h-3 md:h-4 object-contain scale-[1.8] md:scale-[2.2] origin-center cursor-pointer drop-shadow-2xl opacity-100 hover:opacity-100 transition-opacity" 
              priority 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
            />
          </div>
        </motion.div>

        {/* Floating Left: Stats */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8, delay: 0.5 }}
          className="hidden md:block absolute left-[5%] top-[25%] text-left z-20 pointer-events-auto"
        >
          <div className="text-[var(--color-brand-orange)] font-bold text-4xl tracking-tight">20,000+</div>
          <div className="text-white/80 text-[14px] font-medium mt-1 uppercase tracking-widest">Students Taught</div>
        </motion.div>

        {/* Floating Left Bottom: Description */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8, delay: 0.6 }}
          className="hidden md:block absolute left-[5%] bottom-[30%] text-left max-w-[260px] z-20 pointer-events-auto"
        >
          <p className="text-white/80 text-[15px] leading-relaxed font-medium">
            Learn digital marketing live. Now updated with GEO, GA4, and AI-native workflows.
          </p>
        </motion.div>

        {/* Floating Right: Reviews Badge */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8, delay: 0.7 }}
          className="hidden md:flex absolute right-[5%] top-[35%] items-center gap-4 bg-[#0a0f18]/60 border border-white/10 backdrop-blur-md p-4 rounded-2xl shadow-2xl z-20 pointer-events-auto"
        >
          <div className="flex -space-x-3">
            <div className="w-10 h-10 rounded-full bg-gray-700 border-2 border-[#07080a]"></div>
            <div className="w-10 h-10 rounded-full bg-gray-600 border-2 border-[#07080a]"></div>
            <div className="w-10 h-10 rounded-full bg-gray-500 border-2 border-[#07080a]"></div>
          </div>
          <div>
            <div className="text-[#F4C06B] text-[13px] tracking-widest">★★★★★</div>
            <div className="text-white/80 text-[12px] mt-1 font-semibold">4.9 Based on 500+ reviews</div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}