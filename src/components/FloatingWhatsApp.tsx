import React from 'react';
import { MessageCircle } from 'lucide-react';
import { ACADEMY_INFO } from '../data/academyData';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside className="fixed bottom-5 right-5 z-40 flex items-center gap-3 animate-fade-in-up delay-500 pointer-events-auto">
      {/* WhatsApp Floating Button */}
      <a
        href={ACADEMY_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Hafiza Sadia on WhatsApp"
        className="group flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer"
      >
        <div className="relative">
          <MessageCircle className="w-7 h-7 sm:w-6 sm:h-6 fill-current transition-transform duration-300 group-hover:scale-110" />
          {/* Calm, non-flashing active status dot */}
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-300 border-2 border-[#25D366]"></span>
          </span>
        </div>
        
        <div className="hidden sm:flex flex-col text-left pr-1">
          <span className="text-[11px] font-medium leading-none text-emerald-950/80">Online Now</span>
          <span className="text-xs font-bold leading-tight">Chat on WhatsApp</span>
        </div>
      </a>
    </aside>
  );
};
