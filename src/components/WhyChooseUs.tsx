import React from 'react';
import { UserCheck, Clock, Heart, Sparkles, Monitor, Gift, Star, Quote, Globe2 } from 'lucide-react';
import { WHY_CHOOSE_US, TESTIMONIALS, ACADEMY_INFO } from '../data/academyData';
import { ScrollReveal } from './common/ScrollReveal';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'UserCheck':
        return <UserCheck className="w-5 h-5 text-emerald-800" />;
      case 'Clock':
        return <Clock className="w-5 h-5 text-emerald-800" />;
      case 'Heart':
        return <Heart className="w-5 h-5 text-emerald-800" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-emerald-800" />;
      case 'Monitor':
        return <Monitor className="w-5 h-5 text-emerald-800" />;
      case 'Gift':
        return <Gift className="w-5 h-5 text-emerald-800" />;
      default:
        return <UserCheck className="w-5 h-5 text-emerald-800" />;
    }
  };

  return (
    <section id="why-us" className="py-16 md:py-24 bg-[#F8FAF7] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal variant="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="text-xs font-bold uppercase tracking-widest text-emerald-800 mb-2">
              Institutional Distinction
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Why Families Worldwide Choose Sadia Online Quran Academy
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
              Combining classical Quranic scholarship and Tajweed discipline with modern virtual classroom technology, tailored exclusively for kids, girls, and women.
            </p>
          </div>
        </ScrollReveal>

        {/* 6 Institutional Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {WHY_CHOOSE_US.map((item, idx) => (
            <ScrollReveal
              key={item.id}
              variant="fade-up"
              delayMs={idx * 60}
              className="h-full flex"
            >
              <div className="card-academic rounded-2xl p-6 sm:p-7 flex flex-col justify-between w-full h-full shadow-2xs group relative">
                <div>
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
                      {getIcon(item.icon)}
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-emerald-800 transition-colors">
                      Pillar 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-800 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-emerald-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  <span>Verified Academy Standard</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* International Student & Parent Testimonials (Claim-to-Proof Adjacency) */}
        <ScrollReveal variant="fade-up" delayMs={100}>
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-6 border-b border-slate-100">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-800 mb-1">
                  <Globe2 className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Global Student &amp; Parent Feedback</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                  Experiences from the UK, USA, UAE &amp; Pakistan
                </h3>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-500">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="font-bold text-slate-800 ml-1">5.0 / 5.0</span>
                <span>Verified Class Feedback</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {TESTIMONIALS.map((t) => (
                <div key={t.id} className="p-6 rounded-2xl bg-[#FCFBF8] border border-slate-200/80 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex text-amber-400">
                        {[...Array(t.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current" />
                        ))}
                      </div>
                      <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100">
                        {t.course}
                      </span>
                    </div>

                    <p className="text-sm text-slate-700 leading-relaxed italic mb-4">
                      "{t.review}"
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs">
                    <div>
                      <div className="font-bold text-slate-900">{t.studentOrParent}</div>
                      <div className="text-[11px] text-slate-500">{t.category}</div>
                    </div>
                    <span className="text-slate-400 font-medium">{t.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
