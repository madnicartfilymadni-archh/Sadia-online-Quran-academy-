import React from 'react';
import { Sparkles, PhoneCall } from 'lucide-react';
import { ACADEMY_INFO } from '../data/academyData';

export const AdmissionBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-emerald-950 text-white text-xs sm:text-sm py-2 px-4 shadow-sm border-b border-emerald-800/40">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 font-semibold uppercase tracking-wider text-emerald-300 bg-emerald-800/60 px-2 py-0.5 rounded text-[11px]">
            <Sparkles className="w-3 h-3 animate-pulse text-amber-300" />
            ADMISSION OPEN
          </span>
          <span className="text-emerald-100 hidden sm:inline">|</span>
          <span className="text-emerald-50 font-medium">Free Trial Class Available</span>
          <span className="text-emerald-300/70 hidden md:inline">· For Children, Girls &amp; Women</span>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={ACADEMY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-emerald-200 hover:text-white font-medium transition-colors text-xs"
          >
            <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
            <span>WhatsApp: <strong className="text-white font-semibold">{ACADEMY_INFO.phoneDisplay}</strong></span>
          </a>
        </div>
      </div>
    </div>
  );
};

