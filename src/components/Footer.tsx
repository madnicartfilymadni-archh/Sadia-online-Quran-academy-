import React from 'react';
import { BookOpen, MessageCircle, PhoneCall, Heart, Globe2, ShieldCheck } from 'lucide-react';
import { ACADEMY_INFO, COURSES } from '../data/academyData';
import logoImage from '../assets/images/sadia_academy_logo_1790971288578.jpg';
import { ScrollReveal } from './common/ScrollReveal';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#03130D] text-slate-300 pt-16 pb-12 border-t border-emerald-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <ScrollReveal variant="fade-up">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-emerald-900/60">
            
            {/* Col 1: Brand & Tagline with Official Logo */}
            <div className="lg:col-span-5 space-y-4 text-left">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl overflow-hidden bg-[#051F16] border border-amber-500/40 flex items-center justify-center shadow-sm shrink-0">
                  <img
                    src={logoImage}
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = '/logo.jpg';
                    }}
                    alt="Sadia Online Quran Academy & Islamic Center Crest"
                    className="w-full h-full object-cover"
                    width={48}
                    height={48}
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-white tracking-tight leading-tight">
                    {ACADEMY_INFO.name}
                  </span>
                  <span className="text-xs text-amber-300 font-semibold tracking-wide">
                    Islamic Center · Global Distance Learning
                  </span>
                </div>
              </div>

              <p className="text-emerald-400 font-medium text-sm leading-relaxed">
                "{ACADEMY_INFO.tagline}"
              </p>

              <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
                Live one-to-one distance learning for children, young girls, and adult women with flexible worldwide schedules under the guidance of Hafiza Sadia.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={ACADEMY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-interactive inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold shadow-xs cursor-pointer transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>WhatsApp: {ACADEMY_INFO.phoneDisplay}</span>
                </a>
              </div>
            </div>

            {/* Col 2: Institutional Navigation */}
            <div className="lg:col-span-3 space-y-3 text-left">
              <h4 className="text-xs font-bold uppercase tracking-widest text-amber-300/90">
                Academy Navigation
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
                <li>
                  <a href="#home" className="hover:text-emerald-400 transition-colors">
                    Home &amp; Overview
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-emerald-400 transition-colors">
                    Methodology &amp; Standards
                  </a>
                </li>
                <li>
                  <a href="#courses" className="hover:text-emerald-400 transition-colors">
                    Programs &amp; Curriculum
                  </a>
                </li>
                <li>
                  <a href="#teacher" className="hover:text-emerald-400 transition-colors">
                    Faculty: Hafiza Sadia
                  </a>
                </li>
                <li>
                  <a href="#why-us" className="hover:text-emerald-400 transition-colors">
                    Institutional Pillars
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="hover:text-emerald-400 transition-colors">
                    Admissions Pathway
                  </a>
                </li>
                <li>
                  <a href="#fee" className="hover:text-emerald-400 transition-colors">
                    Tuition &amp; Fees (PKR 2,000)
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-emerald-400 transition-colors">
                    Admissions FAQ
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-emerald-400 transition-colors">
                    Contact Admissions
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: Academic Programs */}
            <div className="lg:col-span-4 space-y-3 text-left">
              <h4 className="text-xs font-bold uppercase tracking-widest text-amber-300/90">
                Curriculum Syllabi
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
                {COURSES.map((course) => (
                  <li key={course.id}>
                    <a
                      href="#courses"
                      className="hover:text-emerald-400 transition-colors flex items-center justify-between group"
                    >
                      <span>{course.title}</span>
                      <span className="text-[11px] text-slate-500 font-mono group-hover:text-amber-300">
                        {course.level.split(':')[0]}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-emerald-950/80">
                <h5 className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-1">
                  Admissions Office &amp; Support
                </h5>
                <p className="text-xs text-slate-400">
                  Head Instructor: Hafiza Sadia
                </p>
                <p className="text-xs text-emerald-300 font-mono font-semibold mt-0.5">
                  Direct WhatsApp: {ACADEMY_INFO.phoneDisplay}
                </p>
              </div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
            <div>
              © 2026 Sadia Online Quran Academy &amp; Islamic Center. All rights reserved.
            </div>
            <div className="flex items-center gap-4">
              <span className="text-slate-400">Dedicated 1-on-1 Distance Education for Kids, Girls &amp; Women</span>
            </div>
          </div>

        </ScrollReveal>
      </div>
    </footer>
  );
};
