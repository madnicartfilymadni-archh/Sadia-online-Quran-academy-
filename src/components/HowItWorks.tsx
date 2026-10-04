import React from 'react';
import { MessageCircle, Calendar, PlayCircle, ArrowRight, ClipboardCheck, Video, UserCheck } from 'lucide-react';
import { ACADEMY_INFO } from '../data/academyData';
import { ScrollReveal } from './common/ScrollReveal';

interface HowItWorksProps {
  onOpenTrialModal: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenTrialModal }) => {
  const steps = [
    {
      num: '01',
      title: 'Free Placement Inquiry',
      desc: `Send a quick WhatsApp message to ${ACADEMY_INFO.phoneDisplay} or click Book Free Trial to share the student's name, age, and learning goal.`,
      icon: MessageCircle
    },
    {
      num: '02',
      title: 'Diagnostic Trial Class',
      desc: 'Join a private 1-on-1 live session with Hafiza Sadia. She will gently assess the student’s baseline reading level and Tajweed proficiency.',
      icon: ClipboardCheck
    },
    {
      num: '03',
      title: 'Custom Schedule & Plan',
      desc: 'Choose your preferred class days and convenient timing slots tailored to your timezone (UK, USA, Gulf, or Pakistan).',
      icon: Calendar
    },
    {
      num: '04',
      title: 'Commence Regular Classes',
      desc: 'Begin your weekly live sessions on Zoom or WhatsApp with digital screen sharing, continuous feedback, and steady progress.',
      icon: PlayCircle
    }
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-white relative border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <ScrollReveal variant="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs font-bold uppercase tracking-widest text-emerald-800 mb-2">
              Academic Admissions Pathway
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              4 Simple Steps to Begin Your Quran Journey
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
              Experience the teaching style and verify your compatibility with a 100% free trial assessment before making any monthly commitment.
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <ScrollReveal
                key={step.num}
                variant="fade-up"
                delayMs={idx * 80}
                className="h-full flex"
              >
                <div className="card-academic rounded-2xl p-6 sm:p-7 flex flex-col justify-between w-full h-full shadow-2xs group relative">
                  <div>
                    {/* Top Step Number & Icon */}
                    <div className="flex items-center justify-between mb-5 pb-3 border-b border-slate-100">
                      <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
                        <IconComponent className="w-5 h-5 text-emerald-800" />
                      </div>
                      <span className="text-2xl font-black font-mono text-slate-300 group-hover:text-emerald-800 transition-colors">
                        {step.num}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-800 transition-colors">
                      {step.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                    <span>Phase {step.num}</span>
                    <span className="text-emerald-700 font-semibold">100% Free Assessment</span>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Action Callout */}
        <ScrollReveal variant="fade-up" delayMs={150}>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenTrialModal}
              className="btn-interactive w-full sm:w-auto px-7 py-3.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-sm shadow-xs flex items-center justify-center gap-2 cursor-pointer transition-all"
            >
              <span>Schedule Free Trial Class</span>
              <ArrowRight className="w-4 h-4 text-amber-300" />
            </button>
            
            <a
              href={ACADEMY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-interactive w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-2xs flex items-center justify-center gap-2 cursor-pointer transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Contact Admissions: {ACADEMY_INFO.phoneDisplay}</span>
            </a>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
