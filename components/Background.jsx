"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function Background() {
  return (
    // Base canvas strictly set to near-black #07080a as requested
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#07080a]">

      {/* 1. Subtle SVG feTurbulence Film-Grain */}
      <div className="absolute inset-0 z-20 opacity-[0.12] mix-blend-overlay pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      {/* 2. Light Blades Container with 'Screen' Blend Mode */}
      <div className="absolute inset-0 z-0 mix-blend-screen">
        
        {/* Main Aurora Light-Blade (Bottom-Left to Top-Right Sweep) */}
        <motion.div
          animate={{
            x: ['-2%', '3%', '-2%'],
            y: ['-1%', '2%', '-1%'],
            scale: [1, 1.05, 1],
            opacity: [0.6, 0.9, 0.6],
            rotate: [-35, -33, -35]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          // Height kam rakhi hai (20vw) taaki yeh poori screen par na faile, sirf ek streak lage
          className="absolute top-[20%] left-[-20%] w-[140%] h-[20vw] origin-center blur-[110px]"
          style={{
            background: 'linear-gradient(90deg, rgba(255,47,58,0) 0%, rgba(255,47,58,0.45) 25%, rgba(255,107,74,0.4) 50%, rgba(255,179,71,0.2) 80%, rgba(255,179,71,0) 100%)',
          }}
        />

        {/* Secondary Aurora Light-Blade (Top-Right Area) */}
        <motion.div
          animate={{
            x: ['2%', '-2%', '2%'],
            y: ['2%', '-1%', '2%'],
            scale: [1, 1.03, 1],
            opacity: [0.5, 0.8, 0.5],
            rotate: [-38, -40, -38]
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[-10%] right-[-10%] w-[90%] h-[15vw] origin-center blur-[90px]"
          style={{
            background: 'linear-gradient(90deg, rgba(255,47,58,0) 0%, rgba(255,107,74,0.35) 40%, rgba(255,179,71,0.25) 70%, rgba(255,179,71,0) 100%)',
          }}
        />

      </div>

      {/* 3. Vignette Overlay to maintain high-contrast focus */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_15%,#07080a_110%)]" />

    </div>
  );
}