import React from 'react';
import { UserCheck, ShieldCheck, Heart, Sparkles, MessageCircle, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import { ACADEMY_INFO } from '../data/academyData';
import { ScrollReveal } from './common/ScrollReveal';

interface TeacherProps {
  onOpenTrialModal: () => void;
}

export const Teacher: React.FC<TeacherProps> = ({ onOpenTrialModal }) => {
  return (
    <section id="teacher" className="py-16 md:py-24 bg-white relative border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-5xl mx-auto">
          
          <ScrollReveal variant="fade-up">
            <div className="text-center mb-12">
              <div className="text-xs font-bold uppercase tracking-widest text-emerald-800 mb-2">
                Faculty Profile &amp; Instruction
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                Meet Your Head Quran &amp; Tajweed Instructor
              </h2>
              <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
                Dedicated one-to-one mentoring characterized by exceptional patience, classical Tajweed precision, and empathetic support.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="scale" delayMs={80}>
            <div className="card-academic rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-md relative overflow-hidden bg-gradient-to-br from-white via-[#FAFBF8] to-[#F5F8F4]">
              
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
                
                {/* Teacher Crest & Visual Badge */}
                <div className="md:col-span-5 flex flex-col items-center text-center">
                  <div className="relative mb-5 group">
                    <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-3xl bg-[#051F16] border-2 border-amber-400/40 p-2 shadow-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                      <div className="w-full h-full bg-[#08291E] rounded-2xl flex flex-col items-center justify-center text-white px-4 border border-emerald-700/40">
                        <span className="font-arabic text-4xl sm:text-5xl font-bold text-amber-300 drop-shadow-sm select-none">
                          حافظة
                        </span>
                        <span className="text-[11px] uppercase tracking-widest text-emerald-200 mt-2 font-bold font-mono">
                          Certified Hafiza
                        </span>
                      </div>
                    </div>

                    <div className="absolute -bottom-2 inset-x-0 mx-auto w-max px-3 py-1 bg-amber-400 text-slate-950 text-[10px] font-extrabold uppercase tracking-wider rounded-full shadow-sm">
                      Tajweed Specialist
                    </div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                    {ACADEMY_INFO.teacher}
                  </h3>
                  <p className="text-xs sm:text-sm font-bold text-emerald-800 mt-1 uppercase tracking-wide">
                    {ACADEMY_INFO.role}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    {ACADEMY_INFO.name}
                  </p>

                  <div className="mt-4 pt-4 border-t border-slate-200/80 w-full flex items-center justify-center gap-3 text-xs text-slate-600">
                    <span className="flex items-center gap-1 font-semibold text-emerald-800">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      100% Female Tutoring
                    </span>
                    <span className="text-slate-300" aria-hidden="true">·</span>
                    <span>All Ages</span>
                  </div>
                </div>

                {/* Academic Biography & Pedagogical Approach */}
                <div className="md:col-span-7 space-y-5 text-slate-700 text-left">
                  
                  <div className="space-y-3">
                    <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-medium">
                      <strong>Hafiza Sadia</strong> is a certified Quran teacher with extensive experience teaching children, young girls, and adult women across the UK, USA, Canada, UAE, Saudi Arabia, and Pakistan.
                    </p>
                    
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Her pedagogical approach is founded upon gentleness, slow systematic repetition, and positive reinforcement. Rather than rushing through pages, she ensures that every student masters the precise tongue and throat articulation points (Makharij) and understands correct Quranic pauses.
                    </p>
                  </div>

                  {/* 4 Professional Pillars */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                      <Heart className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-bold text-slate-900">Gentle &amp; Patient</div>
                        <div className="text-[11px] text-slate-500">Zero pressure, encouraging feedback</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                      <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-bold text-slate-900">Modesty &amp; Privacy</div>
                        <div className="text-[11px] text-slate-500">100% comfortable for sisters &amp; daughters</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                      <Award className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-bold text-slate-900">Accredited Tajweed</div>
                        <div className="text-[11px] text-slate-500">Classical rules of Qira’at</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                      <UserCheck className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-bold text-slate-900">One-to-One Private</div>
                        <div className="text-[11px] text-slate-500">Undivided individual focus</div>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-3 pt-3">
                    <button
                      onClick={onOpenTrialModal}
                      className="btn-interactive px-5 py-3 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs sm:text-sm shadow-xs cursor-pointer transition-all flex items-center gap-2"
                    >
                      <span>Book Assessment with Hafiza Sadia</span>
                      <ArrowRight className="w-4 h-4 text-amber-300" />
                    </button>
                    
                    <a
                      href={ACADEMY_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-interactive inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm shadow-2xs cursor-pointer transition-all"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                      <span>WhatsApp: {ACADEMY_INFO.phoneDisplay}</span>
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
