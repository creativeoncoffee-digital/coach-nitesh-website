import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#0B0C14] py-8 border-t border-white/10 mt-24">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-[13px] md:text-[14px] text-[#6C7286]">
        <div className="grid justify-items-center md:justify-items-start">
          © 2026 coachnitesh.online — Digital marketing, taught live.
        </div>
        <div className="grid justify-items-center md:justify-items-end grid-flow-col auto-cols-max gap-2">
          hello@coachnitesh.online · <a href="#" className="hover:text-[#F4C06B] transition-colors">WhatsApp</a>
        </div>
      </div>
    </footer>
  );
}