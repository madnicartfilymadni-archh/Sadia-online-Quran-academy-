import React from 'react';
import { MessageCircle, CheckCircle2, PhoneCall, ArrowRight, Sparkles, Globe2, ShieldCheck } from 'lucide-react';
import { ACADEMY_INFO } from '../data/academyData';
import admissionPosterImg from '../assets/images/admission_banner_poster_1790971764501.jpg';
import { ScrollReveal } from './common/ScrollReveal';

export const FreeTrialCTA: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#051F16] text-white relative overflow-hidden border-b border-emerald-950">
      {/* Decorative architectural pattern */}
      <div className="absolute inset-0 bg-islamic-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left: Official Admission Poster Flyer */}
          <div className="lg:col-span-5 flex justify-center">
            <ScrollReveal variant="scale" delayMs={50} className="w-full max-w-md">
              <div className="relative group w-full">
                {/* Soft decorative glow */}
                <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/25 via-teal-500/20 to-amber-500/20 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative rounded-2xl overflow-hidden border border-amber-400/30 shadow-2xl bg-slate-900 transition-transform duration-500 group-hover:scale-[1.015]">
                  <img
                    src={admissionPosterImg}
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = '/admission-poster.jpg';
                    }}
                    alt="Sadia Online Quran Academy & Islamic Center Admission Flyer - Learn Quran Online with Hafiza Sadia"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    width={500}
                    height={500}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Start Free Trial Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left space-y-6">
            <ScrollReveal variant="fade-up" delayMs={100}>
              <div className="space-y-6">
                
                <div className="flex items-center justify-center lg:justify-start gap-2 text-xs font-bold uppercase tracking-widest text-amber-300">
                  <Globe2 className="w-3.5 h-3.5" />
                  <span>Admissions Open Worldwide</span>
                  <span className="text-emerald-700" aria-hidden="true">·</span>
                  <span className="text-emerald-300 font-medium">100% Free Initial Diagnostic Session</span>
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.15]">
                  Begin Your Quranic Journey Today
                </h2>

                <p className="text-base sm:text-lg text-emerald-100/90 leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal">
                  Experience live 1-on-1 Quran distance learning from home with <strong>Hafiza Sadia</strong>. Safe, respectful, and encouraging instruction for children, young girls, and adult sisters worldwide.
                </p>

                {/* 3 Core Assurance Checkmarks */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-xs text-emerald-100">
                  <div className="flex items-center gap-2 justify-center lg:justify-start bg-white/5 p-3 rounded-xl border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Private 1-on-1 Focus</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center lg:justify-start bg-white/5 p-3 rounded-xl border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Flexible Global Slots</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center lg:justify-start bg-white/5 p-3 rounded-xl border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Zero Obligation Trial</span>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
                  <a
                    href={ACADEMY_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-interactive w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] rounded-xl shadow-lg hover:shadow-xl text-center cursor-pointer transition-all"
                  >
                    <MessageCircle className="w-5 h-5 fill-current" />
                    <span>Book Free Assessment on WhatsApp</span>
                  </a>

                  <a
                    href={`tel:${ACADEMY_INFO.phoneRaw}`}
                    className="btn-interactive w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold text-emerald-100 hover:text-white bg-white/10 hover:bg-white/15 border border-white/20 rounded-xl cursor-pointer transition-all font-mono"
                  >
                    <PhoneCall className="w-4 h-4 text-amber-300" />
                    <span>Direct Call: {ACADEMY_INFO.phoneDisplay}</span>
                  </a>
                </div>

                <p className="text-xs text-emerald-300/70 pt-1">
                  Live virtual classroom via Zoom &amp; WhatsApp · Complete beginners &amp; young children warmly supported
                </p>

              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
};
