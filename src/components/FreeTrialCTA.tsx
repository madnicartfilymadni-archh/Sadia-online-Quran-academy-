import React from 'react';
import { MessageCircle, Sparkles, CheckCircle, ArrowRight } from 'lucide-react';
import { ACADEMY_INFO } from '../data/academyData';

export const FreeTrialCTA: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-emerald-900 via-teal-900 to-slate-950 text-white relative overflow-hidden">
      {/* Decorative subtle texture */}
      <div className="absolute inset-0 bg-islamic-pattern opacity-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="inline-flex items-center gap-2 bg-emerald-800/80 border border-emerald-700/60 px-3.5 py-1 rounded-full text-xs font-semibold text-emerald-200 mb-6">
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>Zero Commitment • 100% Free Trial</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
          Start Your Free Trial
        </h2>

        <p className="text-base sm:text-xl text-emerald-100/90 max-w-2xl mx-auto mb-8 font-light">
          Book your free trial class today.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Main Book Free Trial Button opening WhatsApp as requested */}
          <a
            href={ACADEMY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-base sm:text-lg font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-center"
          >
            <MessageCircle className="w-6 h-6 fill-current" />
            <span>Book Free Trial</span>
          </a>

          <a
            href={`tel:${ACADEMY_INFO.phoneRaw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 text-sm sm:text-base font-semibold text-emerald-100 hover:text-white bg-white/10 hover:bg-white/15 border border-white/20 rounded-xl transition-colors"
          >
            <span>Call: {ACADEMY_INFO.phoneDisplay}</span>
          </a>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-emerald-200/80">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            <span>One-to-One Session</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            <span>No Obligation</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            <span>Custom Time Slots</span>
          </div>
        </div>

      </div>
    </section>
  );
};
