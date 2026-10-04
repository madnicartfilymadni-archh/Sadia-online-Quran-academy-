import React from 'react';
import { MessageCircle, Sparkles, CheckCircle, PhoneCall, ArrowRight } from 'lucide-react';
import { ACADEMY_INFO } from '../data/academyData';
import admissionPosterImg from '../assets/images/admission_banner_poster_1790971764501.jpg';
import { ScrollReveal } from './common/ScrollReveal';

export const FreeTrialCTA: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white relative overflow-hidden">
      {/* Decorative subtle texture */}
      <div className="absolute inset-0 bg-islamic-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left / Top: Official Admission Poster Banner Image */}
          <div className="lg:col-span-5 flex justify-center">
            <ScrollReveal variant="scale" delayMs={50} className="w-full max-w-md">
              <div className="relative group w-full">
                {/* Soft decorative glow */}
                <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/30 to-amber-500/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative rounded-2xl overflow-hidden border-2 border-emerald-500/40 shadow-2xl bg-slate-900 transition-transform duration-500 group-hover:scale-[1.015]">
                  <img
                    src={admissionPosterImg}
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = '/admission-poster.jpg';
                    }}
                    alt="Sadia Online Quran Academy & Islamic Center Admission Open Poster Flyer - Learn Quran Online with Hafiza Sadia"
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

          {/* Right / Content: Start Free Trial Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left space-y-6">
            <ScrollReveal variant="fade-up" delayMs={100}>
              <div className="space-y-6">
                
                <div className="inline-flex items-center gap-2 bg-emerald-800/80 border border-emerald-700/60 px-4 py-1.5 rounded-full text-xs font-semibold text-emerald-200 w-fit mx-auto lg:mx-0">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>ADMISSION OPEN • 100% Free Trial Class</span>
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                  Start Your Free Trial
                </h2>

                <p className="text-base sm:text-lg text-emerald-100/90 leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
                  Experience live 1-on-1 Quran learning from home with <strong>Hafiza Sadia</strong>. Special classes for children, girls, and women with customized flexible timings.
                </p>

                {/* Quick Benefits */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs sm:text-sm text-emerald-200/90">
                  <div className="flex items-center gap-2 justify-center lg:justify-start">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>One-to-One Class</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center lg:justify-start">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Flexible Timings</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center lg:justify-start">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>No Commitment</span>
                  </div>
                </div>

                {/* Buttons with smooth hover scale and press interaction */}
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                  <a
                    href={ACADEMY_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-interactive w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-base sm:text-lg font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] rounded-xl shadow-lg hover:shadow-xl text-center cursor-pointer"
                  >
                    <MessageCircle className="w-6 h-6 fill-current" />
                    <span>Book Free Trial on WhatsApp</span>
                  </a>

                  <a
                    href={`tel:${ACADEMY_INFO.phoneRaw}`}
                    className="btn-interactive w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 text-sm sm:text-base font-semibold text-emerald-100 hover:text-white bg-white/10 hover:bg-white/15 border border-white/20 rounded-xl cursor-pointer"
                  >
                    <PhoneCall className="w-4 h-4 text-emerald-300" />
                    <span>Call: {ACADEMY_INFO.phoneDisplay}</span>
                  </a>
                </div>

                <p className="text-xs text-slate-400 pt-1">
                  Live sessions on Zoom &amp; WhatsApp · Beginners are warmly welcome
                </p>

              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
};
