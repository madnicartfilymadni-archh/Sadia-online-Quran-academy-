import React from 'react';
import { CheckCircle2, MessageCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { ACADEMY_INFO } from '../data/academyData';
import { ScrollReveal } from './common/ScrollReveal';

interface FeeSectionProps {
  onOpenTrialModal: () => void;
}

export const FeeSection: React.FC<FeeSectionProps> = ({ onOpenTrialModal }) => {
  const feeHighlights = [
    'One-to-one online classes with Hafiza Sadia',
    'Flexible schedule customized to your daily routine',
    'Classes conducted live via Zoom or WhatsApp',
    'Suitable for children, girls, and women',
    'Free trial class included prior to monthly enrollment'
  ];

  return (
    <section id="fee" className="py-16 md:py-24 bg-[#F8FAF9] border-t border-slate-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <ScrollReveal variant="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="text-xs font-bold uppercase tracking-widest text-emerald-800 mb-2">
              Affordable &amp; Transparent
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Simple &amp; Affordable Fee Structure
            </h2>
            <p className="mt-3 text-base text-slate-600">
              High-quality one-to-one Quran education with transparent monthly pricing.
            </p>
          </div>
        </ScrollReveal>

        {/* Pricing Card with Smooth Scale Entrance */}
        <div className="max-w-xl mx-auto">
          <ScrollReveal variant="scale" delayMs={100}>
            <div className="bg-white rounded-3xl p-8 sm:p-10 border-2 border-emerald-600/30 shadow-lg relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-emerald-600/50">
              
              {/* Top Badge */}
              <div className="flex items-center justify-between gap-4 mb-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-50 px-3 py-1 rounded-md border border-emerald-100">
                    Standard Plan
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-2">
                    Monthly Fee
                  </h3>
                </div>
                
                <div className="text-right">
                  <div className="text-3xl sm:text-4xl font-extrabold text-emerald-800 tracking-tight">
                    PKR 2,000
                  </div>
                  <div className="text-xs text-slate-500 font-medium">
                    per month
                  </div>
                </div>
              </div>

              {/* Sub-line */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-xs sm:text-sm font-semibold text-slate-700 text-center mb-6">
                Flexible schedule • One-to-one online classes
              </div>

              {/* Inclusions list */}
              <div className="space-y-3 mb-8">
                {feeHighlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="space-y-3">
                <a
                  href={ACADEMY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-interactive w-full py-4 px-6 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-base flex items-center justify-center gap-2 shadow-sm text-center cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Enroll on WhatsApp (PKR 2,000 / mo)</span>
                </a>

                <button
                  onClick={onOpenTrialModal}
                  className="btn-interactive w-full py-3.5 px-6 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-semibold text-sm text-center cursor-pointer"
                >
                  Book Free Trial Class First
                </button>
              </div>

              <div className="mt-4 text-center">
                <span className="text-xs text-slate-500">
                  Direct communication with Hafiza Sadia • WhatsApp: <strong>{ACADEMY_INFO.phoneDisplay}</strong>
                </span>
              </div>

            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
};
