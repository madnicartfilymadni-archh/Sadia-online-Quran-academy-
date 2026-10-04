import React from 'react';
import { MessageCircle, ArrowRight, ShieldCheck, UserCheck, Clock, Video } from 'lucide-react';
import { ACADEMY_INFO } from '../data/academyData';
import heroQuranImg from '../assets/images/hero_quran_learning_1790968330783.jpg';

interface HeroProps {
  onOpenTrialModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTrialModal }) => {
  return (
    <section id="home" className="relative pt-6 pb-16 md:pt-12 md:pb-24 overflow-hidden bg-gradient-to-b from-[#F3F7F5] via-[#F8FAF9] to-white">
      {/* Subtle decorative Islamic geometry background */}
      <div className="absolute inset-0 bg-islamic-pattern opacity-60 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Academy Value Proposition */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            
            {/* Arabic Bismillah Calligraphy Badge */}
            <div className="inline-flex items-center gap-3 animate-fade-in-up">
              <span className="font-arabic text-xl sm:text-2xl text-emerald-800/90 font-bold select-none tracking-wide">
                بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
              </span>
            </div>

            {/* Brand Kicker */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider text-emerald-800 uppercase animate-fade-in-up delay-100">
              <span>{ACADEMY_INFO.name}</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-600 font-normal">Hafiza Sadia</span>
            </div>

            {/* Main Primary H1 for Homepage SEO */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-slate-900 tracking-tight leading-[1.15] text-balance animate-fade-in-up delay-150">
              Sadia Online Quran Academy &amp; Islamic Center
            </h1>

            {/* Sub-Headline / Tagline */}
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-emerald-800 tracking-tight leading-snug animate-fade-in-up delay-200">
              Learn Quran Online With{' '}
              <span className="text-emerald-700 underline decoration-emerald-300 decoration-wavy decoration-2">
                Ease &amp; Confidence
              </span>
            </p>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl animate-fade-in-up delay-300">
              {ACADEMY_INFO.heroDescription}
            </p>

            {/* Key Value Highlights - Zero Pill Format */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs sm:text-sm text-slate-700 animate-fade-in-up delay-400">
              <div className="flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-medium">1-on-1 Classes</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-medium">Flexible Timings</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-medium">Kids &amp; Women Only</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-4 animate-fade-in-up delay-500">
              {/* Primary Start Free Trial Button */}
              <button
                onClick={onOpenTrialModal}
                className="btn-interactive inline-flex items-center justify-center gap-2.5 px-7 py-4 text-base font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl shadow-md hover:shadow-lg text-center cursor-pointer focus-visible:outline-2 focus-visible:outline-emerald-600"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              {/* Big WhatsApp CTA Button */}
              <a
                href={ACADEMY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-interactive inline-flex items-center justify-center gap-3 px-7 py-4 text-base font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] rounded-xl shadow-md hover:shadow-lg text-center cursor-pointer focus-visible:outline-2 focus-visible:outline-green-500"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Contact on WhatsApp</span>
              </a>
            </div>

            {/* Quick trust note below CTA */}
            <div className="flex items-center gap-2 text-xs text-slate-500 pt-1 animate-fade-in-up delay-600">
              <span>Zoom &amp; WhatsApp Live Sessions</span>
              <span aria-hidden="true">·</span>
              <span>Nominal Fee: PKR 2,000 / Month</span>
              <span aria-hidden="true">·</span>
              <span className="text-emerald-700 font-medium">WhatsApp: {ACADEMY_INFO.phoneDisplay}</span>
            </div>

          </div>

          {/* Right Column: Visual Component */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0 animate-fade-in-scale delay-200">
            
            {/* Framing Container with subtle float effect */}
            <div className="relative mx-auto max-w-md lg:max-w-none animate-float-gentle">
              
              {/* Soft decorative background glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/15 to-teal-500/15 rounded-3xl blur-xl" />
              
              {/* Main Visual Card */}
              <div className="relative rounded-2xl overflow-hidden border border-emerald-900/10 shadow-xl bg-white group">
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
                  className="w-full h-80 sm:h-96 object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />

                {/* Bottom Overlay Label */}
                <div className="p-4 sm:p-5 bg-gradient-to-t from-slate-900/90 via-slate-900/70 to-transparent absolute bottom-0 inset-x-0 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm sm:text-base font-semibold text-emerald-200">
                        Sadia Online Quran Academy
                      </p>
                      <p className="text-xs text-slate-200">
                        Teacher: Hafiza Sadia · 1-on-1 Online Quran Tutoring
                      </p>
                    </div>
                    <div className="hidden sm:flex items-center gap-1.5 bg-emerald-600/90 px-2.5 py-1 rounded text-xs font-semibold shadow-xs">
                      <Video className="w-3.5 h-3.5" />
                      <span>Live 1:1</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Quick Trust Card */}
              <div className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-5 bg-white p-3.5 sm:p-4 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3 transition-transform duration-300 hover:scale-[1.02]">
                <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm">
                  PKR
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Monthly Fee</div>
                  <div className="text-sm sm:text-base font-bold text-slate-900">PKR 2,000 / Month</div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
