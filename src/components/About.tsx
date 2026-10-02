import React from 'react';
import { 
  Home, 
  UserCheck, 
  Clock, 
  Sparkles, 
  Users2, 
  Video,
  ArrowRight,
  MessageCircle,
  CheckCircle
} from 'lucide-react';
import { ACADEMY_INFO } from '../data/academyData';

interface AboutProps {
  onOpenTrialModal: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenTrialModal }) => {
  const points = [
    {
      title: 'One-to-one online classes',
      desc: 'Direct, focused private lessons with dedicated time and individual attention.',
      icon: UserCheck
    },
    {
      title: 'Personal attention',
      desc: 'Each student learns at their comfortable speed with continuous feedback and encouragement.',
      icon: Sparkles
    },
    {
      title: 'Flexible schedule',
      desc: 'Choose convenient morning, afternoon, or evening class slots that fit your routine.',
      icon: Clock
    },
    {
      title: 'Suitable for beginners',
      desc: 'Starting from the basics of Arabic letters (Qaida) to fluent Quran recitation with Tajweed.',
      icon: Home
    },
    {
      title: 'Classes for children, girls and women',
      desc: 'A safe, respectful, and encouraging Islamic environment under a female teacher.',
      icon: Users2
    },
    {
      title: 'Online learning through Zoom / WhatsApp',
      desc: 'Easy live video/audio access from anywhere without travel hassles or complex setups.',
      icon: Video
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-[#F8FAF9] border-y border-slate-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image Asset */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              
              {/* Soft decorative halo */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-emerald-600/10 to-teal-500/10 rounded-3xl blur-lg" />
              
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-white">
                <img
                  src="/src/assets/images/academy_study_desk_1790968352808.jpg"
                  alt="Online Quran study desk setup with Holy Quran and tablet for one-to-one learning with Hafiza Sadia"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  width={600}
                  height={450}
                  className="w-full h-80 sm:h-96 object-cover"
                />

                <div className="p-5 bg-white border-t border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800 font-bold shrink-0">
                      1:1
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">
                        Live One-to-One Quran Lessons
                      </div>
                      <div className="text-xs text-slate-500">
                        Zoom &amp; WhatsApp Online Classes · Hafiza Sadia
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Key Copy */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            
            <div className="space-y-2">
              <div className="text-xs font-bold uppercase tracking-widest text-emerald-800">
                About The Academy
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                Learn Quran From The Comfort of Your Home
              </h2>
            </div>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              <strong>Sadia Online Quran Academy &amp; Islamic Center</strong> provides personalized, one-to-one Quranic education tailored specifically for young children, girls, and adult women. We remove the barriers of travel, rigid schedules, and crowded classrooms by delivering gentle, authentic Quran teaching directly to your screen.
            </p>

            {/* 6 Key Points Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {points.map((pt, idx) => {
                const IconComponent = pt.icon;
                return (
                  <div 
                    key={idx} 
                    className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs hover:border-emerald-300 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0 text-emerald-700">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-slate-900">
                          {pt.title}
                        </h3>
                        <p className="text-xs text-slate-600 mt-1 leading-normal">
                          {pt.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onOpenTrialModal}
                className="px-6 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-sm shadow-sm transition-colors flex items-center gap-2"
              >
                <span>Book Free Trial Class</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={ACADEMY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-semibold text-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp: {ACADEMY_INFO.phoneDisplay}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
