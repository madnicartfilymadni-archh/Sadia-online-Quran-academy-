import React from 'react';
import { BookOpen, MessageCircle, PhoneCall, Heart } from 'lucide-react';
import { ACADEMY_INFO, COURSES } from '../data/academyData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Col 1: Brand & Tagline with Official Logo */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl overflow-hidden bg-slate-900 border border-amber-500/30 flex items-center justify-center shadow-sm shrink-0">
                <img
                  src="/src/assets/images/sadia_academy_logo_1790971288578.jpg"
                  alt="Sadia Online Quran Academy & Islamic Center Logo"
                  className="w-full h-full object-cover"
                  width={48}
                  height={48}
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white tracking-tight leading-tight">
                  {ACADEMY_INFO.name}
                </span>
                <span className="text-xs text-amber-300 font-medium">
                  &amp; Islamic Center
                </span>
              </div>
            </div>

            <p className="text-emerald-400 font-medium text-base">
              "{ACADEMY_INFO.tagline}"
            </p>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Online one-to-one Quran classes for children, girls and women with flexible timings and personal attention by Hafiza Sadia.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={ACADEMY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp: {ACADEMY_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="hover:text-emerald-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-emerald-400 transition-colors">
                  About Academy
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-emerald-400 transition-colors">
                  Courses
                </a>
              </li>
              <li>
                <a href="#teacher" className="hover:text-emerald-400 transition-colors">
                  Meet Hafiza Sadia
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-emerald-400 transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-emerald-400 transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#fee" className="hover:text-emerald-400 transition-colors">
                  Fee Structure
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-emerald-400 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-emerald-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Courses */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Courses
            </h4>
            <ul className="space-y-2 text-sm">
              {COURSES.map((course) => (
                <li key={course.id}>
                  <a
                    href="#courses"
                    className="hover:text-emerald-400 transition-colors flex items-center justify-between group"
                  >
                    <span>{course.title}</span>
                    <span className="text-xs text-slate-500 group-hover:text-emerald-400">
                      1-on-1
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-slate-800">
              <h5 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">
                Contact &amp; Admissions
              </h5>
              <p className="text-xs text-slate-400">
                Teacher: Hafiza Sadia
              </p>
              <p className="text-xs text-slate-300 font-semibold mt-0.5">
                WhatsApp: {ACADEMY_INFO.phoneDisplay}
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
            <span className="text-slate-400">Providing genuine Quran education for kids, girls &amp; women</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
