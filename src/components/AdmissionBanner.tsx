import React from 'react';
import { Globe2, MessageCircle, Clock } from 'lucide-react';
import { ACADEMY_INFO } from '../data/academyData';

export const AdmissionBanner: React.FC = () => {
  return (
    <div className="bg-[#041710] text-emerald-100 text-xs py-2 px-4 border-b border-emerald-900/60 relative z-30 font-medium tracking-normal">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Left: Global Academic Status */}
        <div className="flex items-center gap-2 text-xs">
          <span className="inline-flex items-center gap-1.5 text-amber-300 font-semibold uppercase tracking-wider text-[11px]">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            Admissions Open 2026
          </span>
          <span className="text-emerald-700" aria-hidden="true">·</span>
          <span className="text-slate-300 hidden sm:inline">Live 1-on-1 Distance Learning</span>
          <span className="text-emerald-700 hidden sm:inline" aria-hidden="true">·</span>
          <span className="text-emerald-200">UK, USA, Gulf &amp; Worldwide Timezones</span>
        </div>

        {/* Right: Verified Direct Admission Line */}
        <div className="flex items-center gap-4 text-xs">
          <div className="hidden lg:flex items-center gap-1.5 text-slate-400">
            <Clock className="w-3.5 h-3.5 text-amber-300/80" />
            <span>Flexible Scheduling</span>
          </div>
          <span className="text-emerald-800 hidden lg:inline" aria-hidden="true">|</span>
          <a
            href={ACADEMY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-slate-200 hover:text-white transition-colors cursor-pointer group"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#25D366] group-hover:scale-110 transition-transform" />
            <span>Admissions Desk: <strong className="text-white font-semibold font-mono tracking-tight">{ACADEMY_INFO.phoneDisplay}</strong></span>
          </a>
        </div>
      </div>
    </div>
  );
};


