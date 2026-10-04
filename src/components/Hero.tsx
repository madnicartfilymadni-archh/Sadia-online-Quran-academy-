import React from 'react';
import { MessageCircle, ArrowRight, ShieldCheck, UserCheck, Clock, Video, Award, CheckCircle2, Globe2 } from 'lucide-react';
import { ACADEMY_INFO } from '../data/academyData';
import heroQuranImg from '../assets/images/hero_quran_learning_1790968330783.jpg';

interface HeroProps {
  onOpenTrialModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTrialModal }) => {
  return (
    <section id="home" className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden bg-gradient-to-b from-[#F5F8F6] via-[#FAFBF9] to-white border-b border-slate-200/70">
      {/* Subtle architectural background texture */}
      <div className="absolute inset-0 bg-islamic-pattern opacity-40 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Academic Positioning & Authority */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            
            {/* Sacred Ayah Calligraphy & Citation */}
            <div className="flex flex-wrap items-center gap-3 animate-fade-in-up">
              <span className="font-arabic text-xl sm:text-2xl text-emerald-900 font-bold select-none tracking-wide">
                بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
              </span>
              <span className="text-slate-300 hidden sm:inline" aria-hidden="true">|</span>
              <span className="font-arabic text-sm text-emerald-800 font-semibold select-none hidden sm:inline">
                «وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا»
              </span>
            </div>

            {/* Academic Division Kicker */}
            <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-emerald-800 uppercase animate-fade-in-up delay-100">
              <Globe2 className="w-3.5 h-3.5 text-emerald-700" />
              <span>International Distance Learning Division</span>
              <span className="text-slate-300" aria-hidden="true">·</span>
              <span className="text-slate-600 font-medium">Head Teacher: {ACADEMY_INFO.teacher}</span>
            </div>

            {/* Primary Academic H1 Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-slate-900 tracking-tight leading-[1.12] text-balance animate-fade-in-up delay-150">
              Premier 1-on-1 Online Quran &amp; Islamic Studies for Children, Girls &amp; Women
            </h1>

            {/* Academic Subtitle */}
            <p className="text-lg sm:text-xl font-semibold text-emerald-800 tracking-tight leading-snug animate-fade-in-up delay-200">
              Master Noorani Qaida, Fluent Nazra, Classical Tajweed &amp; Hifz from the comfort and safety of your home.
            </p>

            {/* Institutional Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl animate-fade-in-up delay-300">
              <strong>Sadia Online Quran Academy &amp; Islamic Center</strong> provides structured, patient, one-to-one Quranic education designed exclusively for young learners, teenage girls, and adult sisters worldwide. Tailored flexible schedules for students across the UK, USA, Gulf, Europe, and Pakistan with dedicated personal mentorship.
            </p>

            {/* 4 Core Academic Guarantees */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs text-slate-700 animate-fade-in-up delay-400">
              <div className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                <div className="flex items-center gap-1.5 text-emerald-800 font-bold mb-0.5">
                  <UserCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>1-on-1 Dedicated</span>
                </div>
                <p className="text-[11px] text-slate-500">Zero crowded batches</p>
              </div>

              <div className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                <div className="flex items-center gap-1.5 text-emerald-800 font-bold mb-0.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>100% Female Faculty</span>
                </div>
                <p className="text-[11px] text-slate-500">Safe for sisters &amp; kids</p>
              </div>

              <div className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                <div className="flex items-center gap-1.5 text-emerald-800 font-bold mb-0.5">
                  <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Global Timings</span>
                </div>
                <p className="text-[11px] text-slate-500">UK / US / Gulf / PK</p>
              </div>

              <div className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                <div className="flex items-center gap-1.5 text-emerald-800 font-bold mb-0.5">
                  <Award className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Certified Tajweed</span>
                </div>
                <p className="text-[11px] text-slate-500">Authentic Makharij rules</p>
              </div>
            </div>

            {/* Call To Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-3 animate-fade-in-up delay-500">
              {/* Primary Assessment Button */}
              <button
                onClick={onOpenTrialModal}
                className="btn-interactive inline-flex items-center justify-center gap-2.5 px-7 py-4 text-base font-bold text-white bg-emerald-800 hover:bg-emerald-900 border border-emerald-900 rounded-xl shadow-md hover:shadow-lg text-center cursor-pointer transition-all"
              >
                <span>Book Free Placement Class</span>
                <ArrowRight className="w-4 h-4 text-amber-300" />
              </button>

              {/* Direct WhatsApp Admissions CTA */}
              <a
                href={ACADEMY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-interactive inline-flex items-center justify-center gap-2.5 px-7 py-4 text-base font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] rounded-xl shadow-md hover:shadow-lg text-center cursor-pointer transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Admissions on WhatsApp ({ACADEMY_INFO.phoneDisplay})</span>
              </a>
            </div>

            {/* Trust and Policy Note */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 pt-1 animate-fade-in-up delay-600">
              <span className="flex items-center gap-1 text-emerald-700 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>100% Free Initial Diagnostic Session</span>
              </span>
              <span className="text-slate-300" aria-hidden="true">·</span>
              <span>Flat Tuition: {ACADEMY_INFO.monthlyFee}</span>
              <span className="text-slate-300" aria-hidden="true">·</span>
              <span>Zoom &amp; WhatsApp Live Virtual Classroom</span>
            </div>

          </div>

          {/* Right Column: Visual Academy Card */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0 animate-fade-in-scale delay-200">
            <div className="relative mx-auto max-w-md lg:max-w-none animate-float-gentle">
              
              {/* Soft decorative glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-emerald-600/15 via-teal-600/10 to-amber-500/10 rounded-3xl blur-2xl" />
              
              {/* Main Visual Frame */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-200/90 shadow-2xl bg-white group">
                <img
                  src={heroQuranImg}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = '/hero-quran.jpg';
                  }}
                  alt="Holy Quran on carved wooden rehal stand for Sadia Online Quran Academy & Islamic Center one-to-one classes"
                  referrerPolicy="no-referrer"
                  fetchPriority="high"
                  width={600}
                  height={450}
                  className="w-full h-84 sm:h-96 object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />

                {/* Top Badge: Live Virtual Classroom */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <div className="inline-flex items-center gap-2 bg-[#051F16]/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-amber-500/30 text-xs font-semibold text-white shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span>Live 1:1 Interactive Class</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-bold text-slate-800 shadow-sm">
                    <Video className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Zoom &amp; WhatsApp</span>
                  </div>
                </div>

                {/* Bottom Academic Descriptor */}
                <div className="p-5 bg-gradient-to-t from-slate-950 via-slate-900/90 to-transparent absolute bottom-0 inset-x-0 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-base font-bold text-amber-200">
                        Sadia Online Quran Academy &amp; Islamic Center
                      </p>
                      <p className="text-xs text-slate-300 mt-0.5">
                        Head Teacher: Hafiza Sadia · Certified Tajweed &amp; Qira’at
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Lower floating trust card */}
              <div className="mt-4 p-4 rounded-xl bg-white border border-slate-200/90 shadow-md flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-800 font-bold shrink-0">
                    1:1
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">Personalized Student Syllabus</div>
                    <div className="text-[11px] text-slate-500">Every lesson is private &amp; tailored</div>
                  </div>
                </div>
                <button
                  onClick={onOpenTrialModal}
                  className="btn-interactive text-xs font-bold text-emerald-800 hover:text-emerald-950 underline underline-offset-2 shrink-0 cursor-pointer"
                >
                  Book Free Class
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
