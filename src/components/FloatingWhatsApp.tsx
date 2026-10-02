import React from 'react';
import { MessageCircle } from 'lucide-react';
import { ACADEMY_INFO } from '../data/academyData';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-center gap-3">
      {/* Tooltip on desktop */}
      <a
        href={ACADEMY_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Hafiza Sadia on WhatsApp"
        className="group flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95"
      >
        <div className="relative">
          <MessageCircle className="w-7 h-7 sm:w-6 sm:h-6 fill-current" />
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-100 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-300"></span>
          </span>
        </div>
        
        <div className="hidden sm:flex flex-col text-left pr-1">
          <span className="text-[11px] font-medium leading-none text-emerald-950/80">Online Now</span>
          <span className="text-xs font-bold leading-tight">Chat on WhatsApp</span>
        </div>
      </a>
    </div>
  );
};
