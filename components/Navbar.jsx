"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const icons = {
  Courses: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5A2.5 2.5 0 0 0 6.5 22H20V2H6.5a2.5 2.5 0 0 0-2.5 2.5v15Z",
  Curriculum: "M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01",
  Track: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16zM3.27 6.96L12 12.01l8.73-5.05M12 22.08V12",
  About: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
};

const navItems = [
  { name: "Courses", href: "#courses", icon: icons.Courses },
  { name: "Curriculum", href: "#curriculum", icon: icons.Curriculum },
  { name: "Find my track", href: "#recommend", icon: icons.Track },
  { name: "About", href: "#about", icon: icons.About },
];

export default function Navbar() {
  const [isDockAtTop, setIsDockAtTop] = useState(false);

  // 1. SMART SCROLL LOGIC (Sticky Memory / Hysteresis)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.innerHeight + window.scrollY;
      const pageHeight = document.documentElement.scrollHeight;
      
      // condition A: User reached the bottom of the page
      const reachedBottom = currentScrollPosition >= pageHeight - 100;
      // condition B: User reached back to the top (Hero section)
      const reachedTop = window.scrollY < 150; 

      if (reachedBottom) {
        setIsDockAtTop(true);  // Move to top when hitting the footer
      } else if (reachedTop) {
        setIsDockAtTop(false); // Reset to bottom when hitting the hero section
      }
      // Note: If somewhere in the middle, we do NOTHING. It stays where it currently is!
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. SMOOTH SCROLL CLICK HANDLER
  const handleNavClick = (e, href) => {
    e.preventDefault(); 
    if (href.startsWith('#')) {
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        // Offset to prevent the section from hiding under the top dock
        const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <>
      {/* 1. STATIC LOGO: Always at Top Left */}
      <div className="fixed top-0 left-0 w-full z-50 pointer-events-none">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-5 flex items-center pointer-events-auto">
          <Image 
            src="/images/Logo.png" 
            alt="CoachNitesh Logo" 
            width={300} 
            height={100} 
            className="w-auto h-1 md:h-2 object-contain scale-[1.8] md:scale-[2.2] origin-left cursor-pointer" 
            priority 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} // Click logo to go to top
          />
        </div>
      </div>

      {/* 2. DYNAMIC FLOATING NAV */}
      <motion.div 
        layout
        transition={{ type: "spring", stiffness: 80, damping: 20 }} 
        className={`fixed z-40 pointer-events-auto flex items-center w-full max-w-6xl left-1/2 -translate-x-1/2 px-4 md:px-6 ${
          isDockAtTop 
            ? 'top-4 md:top-6 justify-end gap-4 md:gap-6' // TOP STATE
            : 'bottom-8 md:bottom-10 justify-center'      // BOTTOM STATE
        }`}
      >
        
        {/* Inner Glass Pill */}
        <motion.div 
          layout
          className={`flex items-center transition-all duration-300 ${
            isDockAtTop 
              ? 'hidden md:flex bg-[#07080a]/80 backdrop-blur-xl border border-white/10 px-7 py-2.5 rounded-full shadow-lg' 
              : 'bg-[#07080a]/90 backdrop-blur-xl border border-white/10 p-1.5 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.5)]'
          }`}
        >
          {/* Nav Items */}
          <motion.div layout className={`flex items-center ${isDockAtTop ? 'gap-7' : 'gap-1 px-2'}`}>
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)} // Applied click handler
                title={item.name}
                className={`flex items-center justify-center transition-colors cursor-pointer ${
                  isDockAtTop 
                    ? 'text-[14px] text-[var(--color-text-mute)] hover:text-white font-medium' 
                    : 'w-10 h-10 text-[var(--color-text-mute)] hover:text-white hover:bg-white/10 rounded-full'
                }`}
              >
                {isDockAtTop ? (
                  <span className="whitespace-nowrap">{item.name}</span>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={item.icon} />
                  </svg>
                )}
              </a>
            ))}
          </motion.div>

          {/* ATTACHED BUTTON */}
          {!isDockAtTop && (
            <motion.div layoutId="magic-enroll-button">
              <a href="#courses" onClick={(e) => handleNavClick(e, "#courses")} className="btn-premium px-6 py-2.5 rounded-full font-bold text-[14px] ml-1 whitespace-nowrap cursor-pointer">
                Enroll now
              </a>
            </motion.div>
          )}
        </motion.div>

        {/* DETACHED BUTTON */}
        {isDockAtTop && (
          <motion.div layoutId="magic-enroll-button">
            <a href="#courses" onClick={(e) => handleNavClick(e, "#courses")} className="btn-premium px-6 py-2.5 rounded-full font-bold text-[14px] whitespace-nowrap cursor-pointer">
              Enroll now
            </a>
          </motion.div>
        )}

      </motion.div>
    </>
  );
}