import React, { useState } from 'react';
import { ChevronDown, MessageCircle, HelpCircle } from 'lucide-react';
import { FAQS, ACADEMY_INFO } from '../data/academyData';
import { ScrollReveal } from './common/ScrollReveal';

export const FAQ: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-white relative border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal variant="fade-up">
          <div className="text-center mb-14">
            <div className="text-xs font-bold uppercase tracking-widest text-emerald-800 mb-2">
              Academic Inquiries &amp; Guidance
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
              Clear answers regarding our virtual classroom format, worldwide scheduling, teacher credentials, and free placement classes.
            </p>
          </div>
        </ScrollReveal>

        {/* FAQ Accordion List with Smooth CSS Grid Expansion */}
        <div className="space-y-3.5">
          {FAQS.map((faq, index) => {
            const isOpen = openFaq === faq.id;
            return (
              <ScrollReveal
                key={faq.id}
                variant="fade-up"
                delayMs={index * 40}
              >
                <div
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'border-emerald-800/40 bg-[#FAFBF8] shadow-xs'
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full py-4.5 px-6 text-left flex items-center justify-between gap-4 cursor-pointer group"
                    aria-expanded={isOpen}
                  >
                    <span className={`text-base sm:text-lg font-bold transition-colors ${
                      isOpen ? 'text-emerald-900' : 'text-slate-900 group-hover:text-emerald-800'
                    }`}>
                      {faq.question}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-all duration-200 ${
                        isOpen ? 'bg-emerald-800 text-white rotate-180 shadow-2xs' : 'bg-slate-100 text-slate-600 group-hover:bg-slate-200'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {/* Smooth height expand & collapse animation via CSS grid */}
                  <div
                    className={`grid transition-all duration-200 ease-in-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 pb-5 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-200/60">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Additional Help Link */}
        <ScrollReveal variant="fade-up" delayMs={100}>
          <div className="mt-10 text-center p-6 bg-[#FAF8F4] rounded-2xl border border-slate-200/90 shadow-2xs">
            <h4 className="text-base font-bold text-slate-900">
              Have a specific question about your child's placement?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-lg mx-auto">
              Hafiza Sadia is available daily on WhatsApp to discuss your goals, explain syllabus options, and arrange a trial slot.
            </p>
            <div className="mt-4">
              <a
                href={ACADEMY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-interactive inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm shadow-2xs cursor-pointer transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Message Hafiza Sadia on WhatsApp ({ACADEMY_INFO.phoneDisplay})</span>
              </a>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
