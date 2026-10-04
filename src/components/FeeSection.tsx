import React, { useState } from 'react';
import { CheckCircle2, MessageCircle, ArrowRight, ShieldCheck, HelpCircle, Sparkles, Award } from 'lucide-react';
import { ACADEMY_INFO } from '../data/academyData';
import { ScrollReveal } from './common/ScrollReveal';

interface FeeSectionProps {
  onOpenTrialModal: () => void;
}

export const FeeSection: React.FC<FeeSectionProps> = ({ onOpenTrialModal }) => {
  const [selectedStudentType, setSelectedStudentType] = useState<'child' | 'girl' | 'woman'>('child');

  const feeHighlights = [
    'Private 1-on-1 dedicated instruction with Hafiza Sadia',
    'Customized weekly schedule adapted to your domestic timezone',
    'Interactive live video/audio sessions via Zoom or WhatsApp',
    'Digital screen-sharing of color-coded Tajweed Mushaf & Qaida',
    'Continuous oral feedback, Makharij evaluation & progress reports',
    '100% Free diagnostic placement session before monthly commitment',
    'Zero admission or registration fee — cancel or pause anytime'
  ];

  const recommendations = {
    child: {
      title: 'Young Child Track (Boys & Girls)',
      startingPoint: 'Noorani Qaida & Daily Masnoon Duas',
      pace: '3 to 5 sessions per week · 30 mins each',
      focus: 'Gentle phonetics, Makharij recognition & basic Salah'
    },
    girl: {
      title: 'School / College Girl Track',
      startingPoint: 'Nazra Quran with Tajweed & Basic Islamic Fiqh',
      pace: 'Flexible evening or weekend slots',
      focus: 'Recitation fluency, Tajweed rules & personal Islamic manners'
    },
    woman: {
      title: 'Adult Sister Track',
      startingPoint: 'Tajweed Mastery, Nazra, or Surah Memorization',
      pace: 'Morning, afternoon, or evening flexible slots',
      focus: 'Safe, private 1-on-1 sister-to-sister mentorship'
    }
  };

  return (
    <section id="fee" className="py-16 md:py-24 bg-[#FBF9F5] border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal variant="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="text-xs font-bold uppercase tracking-widest text-emerald-800 mb-2">
              Transparent Tuition &amp; Value
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Simple, Affordable Tuition with Complete Transparency
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
              We believe authentic Quranic education should be accessible to every family. High-standard private tutoring with zero hidden fees.
            </p>
          </div>
        </ScrollReveal>

        {/* Pricing Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto mb-12">
          
          {/* Main Tuition Card */}
          <div className="lg:col-span-7">
            <ScrollReveal variant="scale" delayMs={60}>
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-md relative overflow-hidden">
                
                {/* Header Row */}
                <div className="flex items-start justify-between gap-4 pb-6 border-b border-slate-100">
                  <div>
                    <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block mb-1">
                      Academic Session 2026
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                      1-on-1 Monthly Tuition Plan
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Applicable for all courses (Qaida, Nazra, Tajweed, Hifz, Islamic Studies)
                    </p>
                  </div>
                  
                  <div className="text-right shrink-0">
                    <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-mono tracking-tight">
                      PKR 2,000
                    </div>
                    <div className="text-xs text-slate-500 font-medium">
                      per month flat
                    </div>
                  </div>
                </div>

                {/* Sub-note for overseas students */}
                <div className="mt-4 p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-100 text-xs text-emerald-950 flex items-center justify-between">
                  <span>Overseas students (UK, US, UAE, Europe): Highly affordable currency equivalent</span>
                  <span className="font-bold text-emerald-900 hidden sm:inline">Zero Admission Fee</span>
                </div>

                {/* Inclusions List */}
                <div className="space-y-3 my-6">
                  {feeHighlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="space-y-3 pt-2">
                  <a
                    href={ACADEMY_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-interactive w-full py-4 px-6 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-xs cursor-pointer transition-all"
                  >
                    <MessageCircle className="w-5 h-5 fill-current" />
                    <span>Enroll Directly on WhatsApp ({ACADEMY_INFO.phoneDisplay})</span>
                  </a>

                  <button
                    onClick={onOpenTrialModal}
                    className="btn-interactive w-full py-3.5 px-6 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs sm:text-sm text-center cursor-pointer transition-all shadow-xs"
                  >
                    Book 100% Free Placement Session First
                  </button>
                </div>

              </div>
            </ScrollReveal>
          </div>

          {/* Interactive Program & Schedule Matcher Widget */}
          <div className="lg:col-span-5">
            <ScrollReveal variant="fade-up" delayMs={100}>
              <div className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm space-y-5">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1">
                    Academic Advisor
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Find Your Recommended Path
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Select learner category to see customized pace &amp; syllabus focus:
                  </p>
                </div>

                {/* Student Type Selector Tabs */}
                <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-100 rounded-xl">
                  <button
                    onClick={() => setSelectedStudentType('child')}
                    className={`py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                      selectedStudentType === 'child'
                        ? 'bg-white text-slate-900 shadow-2xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Child
                  </button>
                  <button
                    onClick={() => setSelectedStudentType('girl')}
                    className={`py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                      selectedStudentType === 'girl'
                        ? 'bg-white text-slate-900 shadow-2xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Teen Girl
                  </button>
                  <button
                    onClick={() => setSelectedStudentType('woman')}
                    className={`py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                      selectedStudentType === 'woman'
                        ? 'bg-white text-slate-900 shadow-2xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Sister / Woman
                  </button>
                </div>

                {/* Recommended Blueprint */}
                <div className="p-4 rounded-2xl bg-[#F8FAF7] border border-emerald-100 space-y-3 text-xs">
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      Recommended Curriculum
                    </span>
                    <p className="text-sm font-bold text-slate-900 mt-0.5">
                      {recommendations[selectedStudentType].startingPoint}
                    </p>
                  </div>

                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      Class Frequency &amp; Timings
                    </span>
                    <p className="font-semibold text-slate-800 mt-0.5">
                      {recommendations[selectedStudentType].pace}
                    </p>
                  </div>

                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      Pedagogical Focus
                    </span>
                    <p className="text-slate-600 mt-0.5 leading-relaxed">
                      {recommendations[selectedStudentType].focus}
                    </p>
                  </div>
                </div>

                <button
                  onClick={onOpenTrialModal}
                  className="btn-interactive w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>Request Assessment for this Track</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-300" />
                </button>
              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
};
