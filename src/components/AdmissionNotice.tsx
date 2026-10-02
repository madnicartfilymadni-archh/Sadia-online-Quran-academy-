import React from 'react';
import { Sparkles, Calendar, MessageCircle, ArrowRight } from 'lucide-react';
import { ACADEMY_INFO } from '../data/academyData';

interface AdmissionNoticeProps {
  onOpenTrialModal: () => void;
}

export const AdmissionNotice: React.FC<AdmissionNoticeProps> = ({ onOpenTrialModal }) => {
  return (
    <section className="py-6 bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle emerald texture */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 via-slate-900 to-teal-950 opacity-90" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-600/30 border border-emerald-500/30 flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6 text-emerald-400 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                  ADMISSION OPEN
                </span>
                <span className="text-slate-400 hidden sm:inline">·</span>
                <span className="text-xs text-emerald-300 font-medium">Limited Slots Available</span>
              </div>
              <p className="text-lg sm:text-xl font-bold text-white tracking-tight">
                Free Trial Class Available – Enroll Today
              </p>
              <p className="text-xs sm:text-sm text-slate-300">
                Children, girls &amp; women can start learning with Hafiza Sadia. Flexible morning &amp; evening schedules.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-center">
            <button
              onClick={onOpenTrialModal}
              className="px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-sm transition-colors flex items-center gap-2 whitespace-nowrap"
            >
              <span>Book Free Trial</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={ACADEMY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-sm shadow-sm transition-colors flex items-center gap-2 whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp Now</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
