import React from 'react';
import { Calendar, MessageCircle, ArrowRight, ShieldCheck, Globe2, Sparkles, CheckCircle2 } from 'lucide-react';
import { ACADEMY_INFO, GLOBAL_METRICS } from '../data/academyData';
import { ScrollReveal } from './common/ScrollReveal';

interface AdmissionNoticeProps {
  onOpenTrialModal: () => void;
}

export const AdmissionNotice: React.FC<AdmissionNoticeProps> = ({ onOpenTrialModal }) => {
  return (
    <section className="py-6 bg-[#041710] text-white relative overflow-hidden border-b border-emerald-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal variant="fade-up">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-2 items-center">
            {GLOBAL_METRICS.map((metric, idx) => (
              <div key={idx} className="flex flex-col text-left border-l border-emerald-800/60 pl-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl sm:text-3xl font-extrabold text-amber-300 font-mono tracking-tight">
                    {metric.value}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-white tracking-tight">
                    {metric.label}
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-emerald-200/70 mt-0.5 leading-snug">
                  {metric.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-emerald-900/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-300">
            <div className="flex items-center gap-2 text-center sm:text-left">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Admissions Active for 2026 Academic Term · Zoom &amp; WhatsApp Distance Learning</span>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={onOpenTrialModal}
                className="btn-interactive inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 hover:text-amber-200 transition-colors cursor-pointer"
              >
                <span>Request Free Evaluation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <span className="text-emerald-800" aria-hidden="true">|</span>
              <a
                href={ACADEMY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-emerald-300 transition-colors cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                <span>WhatsApp: {ACADEMY_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
