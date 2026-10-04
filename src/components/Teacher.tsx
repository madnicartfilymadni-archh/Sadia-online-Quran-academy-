import React from 'react';
import { UserCheck, ShieldCheck, Heart, Sparkles, MessageCircle } from 'lucide-react';
import { ACADEMY_INFO } from '../data/academyData';
import { ScrollReveal } from './common/ScrollReveal';

interface TeacherProps {
  onOpenTrialModal: () => void;
}

export const Teacher: React.FC<TeacherProps> = ({ onOpenTrialModal }) => {
  return (
    <section id="teacher" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-4xl mx-auto">
          
          <ScrollReveal variant="fade-up">
            <div className="text-center mb-12">
              <div className="text-xs font-bold uppercase tracking-widest text-emerald-800 mb-2">
                Dedicated Instructor
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                Meet Your Quran Teacher
              </h2>
              <p className="mt-3 text-base text-slate-600">
                Providing respectful, personalized, and patient one-to-one Quran guidance.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="scale" delayMs={100}>
            <div className="bg-gradient-to-br from-[#F5F9F6] to-[#EFF6F2] rounded-3xl p-8 sm:p-10 border border-emerald-100 shadow-sm relative overflow-hidden transition-all duration-300 hover:shadow-md">
              
              {/* Soft decorative background element */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none" />

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
                
                {/* Teacher Avatar & Badge Lockup with subtle animation */}
                <div className="md:col-span-4 flex flex-col items-center text-center">
                  <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl bg-gradient-to-tr from-emerald-800 via-teal-700 to-emerald-600 p-1 shadow-md mb-4 flex items-center justify-center transition-transform duration-300 hover:scale-105">
                    <div className="w-full h-full bg-emerald-950 rounded-xl flex flex-col items-center justify-center text-white px-3">
                      <span className="font-arabic text-3xl font-bold text-emerald-300">حافظہ</span>
                      <span className="text-xs uppercase tracking-wider text-emerald-200 mt-1 font-semibold">Teacher</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900">
                    {ACADEMY_INFO.teacher}
                  </h3>
                  <p className="text-sm font-semibold text-emerald-800 mt-0.5">
                    {ACADEMY_INFO.role}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Sadia Online Quran Academy &amp; Islamic Center
                  </p>
                </div>

                {/* Teacher Attributes & Description */}
                <div className="md:col-span-8 space-y-4 text-slate-700 text-left">
                  
                  <div className="space-y-3">
                    <p className="text-base text-slate-700 leading-relaxed">
                      <strong>Hafiza Sadia</strong> is a dedicated Quran Teacher offering live one-to-one online classes for children, girls, and women.
                    </p>
                    
                    <p className="text-sm text-slate-600 leading-relaxed">
                      With an emphasis on patient step-by-step instruction, correct Tajweed pronunciation, and personal encouragement, every student is guided at their own individual pace from the comfort of home.
                    </p>
                  </div>

                  {/* Key Teaching Focus Points */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-800 bg-white/80 p-2.5 rounded-lg border border-emerald-100 transition-colors hover:bg-white">
                      <Heart className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Gentle &amp; Patient Teaching Style</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-800 bg-white/80 p-2.5 rounded-lg border border-emerald-100 transition-colors hover:bg-white">
                      <UserCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Specialized for Kids &amp; Sisters</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-800 bg-white/80 p-2.5 rounded-lg border border-emerald-100 transition-colors hover:bg-white">
                      <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Accurate Tajweed Guidance</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-800 bg-white/80 p-2.5 rounded-lg border border-emerald-100 transition-colors hover:bg-white">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Safe Online Zoom / WhatsApp</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-3 pt-3">
                    <button
                      onClick={onOpenTrialModal}
                      className="btn-interactive px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs sm:text-sm shadow-sm cursor-pointer"
                    >
                      Start Free Trial with Hafiza Sadia
                    </button>
                    <a
                      href={ACADEMY_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-interactive inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm shadow-2xs cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                      <span>Message on WhatsApp</span>
                    </a>
                  </div>

                </div>

              </div>

            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
};
