import React from 'react';
import { MessageCircle, Calendar, PlayCircle, ArrowRight } from 'lucide-react';
import { HOW_IT_WORKS_STEPS, ACADEMY_INFO } from '../data/academyData';
import { ScrollReveal } from './common/ScrollReveal';

interface HowItWorksProps {
  onOpenTrialModal: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenTrialModal }) => {
  const getStepIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <MessageCircle className="w-6 h-6 text-white transition-transform duration-300 group-hover:scale-110" />;
      case 1:
        return <Calendar className="w-6 h-6 text-white transition-transform duration-300 group-hover:scale-110" />;
      case 2:
        return <PlayCircle className="w-6 h-6 text-white transition-transform duration-300 group-hover:scale-110" />;
      default:
        return <MessageCircle className="w-6 h-6 text-white transition-transform duration-300 group-hover:scale-110" />;
    }
  };

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <ScrollReveal variant="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs font-bold uppercase tracking-widest text-emerald-800 mb-2">
              Easy Enrollment Process
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              How Our Online Quran Classes Work
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600">
              Getting started with your personalized one-to-one Quran classes is quick and straightforward.
            </p>
          </div>
        </ScrollReveal>

        {/* 3 Steps with Progress Connector */}
        <div className="relative">
          
          {/* Subtle Connecting Progress Line on Desktop */}
          <div 
            className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-200 z-0 pointer-events-none"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {HOW_IT_WORKS_STEPS.map((step, idx) => (
              <ScrollReveal
                key={step.stepNumber}
                variant="fade-up"
                delayMs={idx * 140}
                className="h-full"
              >
                <div
                  className="group relative bg-[#FBFDFB] hover:bg-white rounded-2xl p-7 border border-slate-200/90 shadow-2xs hover:border-emerald-400 hover:shadow-md transition-all duration-300 ease-out hover:-translate-y-1.5 flex flex-col justify-between h-full"
                >
                  <div>
                    {/* Step Badge & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-emerald-700 flex items-center justify-center shadow-xs transition-colors duration-300 group-hover:bg-emerald-800">
                        {getStepIcon(idx)}
                      </div>
                      <span className="text-3xl font-black text-slate-200 group-hover:text-emerald-300/80 transition-colors duration-300">
                        {step.stepNumber}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-800 transition-colors duration-200">
                      {step.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span>Step {step.stepNumber}</span>
                    <span className="text-emerald-700 font-semibold">1-on-1 Personalized</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>

        {/* CTA Bar */}
        <ScrollReveal variant="fade-up" delayMs={200}>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenTrialModal}
              className="btn-interactive w-full sm:w-auto px-7 py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-sm shadow-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Book Your Free Trial Now</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
            
            <a
              href={ACADEMY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-interactive w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Chat on WhatsApp: {ACADEMY_INFO.phoneDisplay}</span>
            </a>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
