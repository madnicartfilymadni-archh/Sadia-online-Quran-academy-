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
  CheckCircle2,
  ShieldCheck,
  Award,
  Globe2
} from 'lucide-react';
import { ACADEMY_INFO } from '../data/academyData';
import studyDeskImg from '../assets/images/academy_study_desk_1790968352808.jpg';
import { ScrollReveal } from './common/ScrollReveal';

interface AboutProps {
  onOpenTrialModal: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenTrialModal }) => {
  const pedagogicalStandards = [
    {
      title: 'Dedicated One-to-One Focus',
      desc: 'No shared classroom time or group distractions. 100% of the teacher’s attention is focused solely on your recitation.',
      icon: UserCheck
    },
    {
      title: 'Worldwide Timezone Flexibility',
      desc: 'Seamlessly schedule classes across UK (GMT), North America (EST/CST/PST), Gulf (GST), and Pakistan Standard Time.',
      icon: Clock
    },
    {
      title: 'Safeguarded Sisters & Kids Environment',
      desc: 'Taught by a verified female teacher in the safety, comfort, and modesty of your home with zero commute.',
      icon: ShieldCheck
    },
    {
      title: 'Gentle, Encouraging Pedagogy',
      desc: 'Patience-first methodology designed especially to build confidence in young beginners and hesitant adult sisters.',
      icon: Sparkles
    },
    {
      title: 'Interactive HD Digital Classroom',
      desc: 'Crystal-clear audio and live screen sharing of color-coded Tajweed Mushaf and Noorani Qaida on Zoom or WhatsApp.',
      icon: Video
    },
    {
      title: 'Continuous Progress Tracking',
      desc: 'Regular oral evaluations and feedback to ensure steady mastery before advancing to subsequent chapters.',
      icon: Award
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-[#F8FAF7] border-y border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image Frame & Live Environment Proof */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <ScrollReveal variant="scale" delayMs={50}>
              <div className="relative group">
                
                {/* Decorative Halo */}
                <div className="absolute -inset-2 bg-gradient-to-tr from-emerald-600/10 to-amber-500/10 rounded-3xl blur-xl" />
                
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-white">
                  <img
                    src={studyDeskImg}
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = '/academy-desk.jpg';
                    }}
                    alt="Online Quran study desk setup with Holy Quran and tablet for one-to-one learning with Hafiza Sadia"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    width={600}
                    height={450}
                    className="w-full h-84 sm:h-96 object-cover transition-transform duration-500 group-hover:scale-[1.01]"
                  />

                  {/* Virtual Classroom Feature Strip */}
                  <div className="p-5 bg-white border-t border-slate-100">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-800 font-bold shrink-0">
                          1:1
                        </div>
                        <div>
                          <div className="text-sm font-bold text-slate-900">
                            Private Virtual Classroom
                          </div>
                          <div className="text-xs text-slate-500">
                            Zoom &amp; WhatsApp Live · Head Instructor Hafiza Sadia
                          </div>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-emerald-700 font-mono">
                        PKR 2,000 / mo
                      </span>
                    </div>
                  </div>
                </div>

                {/* International Distance Learning Note */}
                <div className="mt-4 p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs flex items-center gap-3 text-xs text-slate-600">
                  <Globe2 className="w-5 h-5 text-emerald-700 shrink-0" />
                  <span>Welcoming overseas students from the UK, USA, Canada, UAE, Europe, and Pakistan.</span>
                </div>

              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Academic Philosophy & Standards */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <ScrollReveal variant="fade-up" delayMs={100}>
              <div className="space-y-6 text-left">
                
                <div className="space-y-2">
                  <div className="text-xs font-bold uppercase tracking-widest text-emerald-800">
                    Academic Mission &amp; Methodology
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                    An Authentic, Modern Approach to Quranic Distance Education
                  </h2>
                </div>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  <strong>Sadia Online Quran Academy &amp; Islamic Center</strong> was established to provide children, young girls, and adult women with prestigious, personal Quranic instruction without the barriers of commute, rigid classroom timings, or crowded group madrasas.
                </p>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Under the direct instruction of <strong>Hafiza Sadia</strong>, every lesson is delivered with precision in Arabic Makharij (articulation), patient repetition, and classical Tajweed rules, fostering genuine love and reverence for the Words of Allah SWT.
                </p>

                {/* 6 Standards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {pedagogicalStandards.map((item, idx) => {
                    const IconComponent = item.icon;
                    return (
                      <div 
                        key={idx} 
                        className="card-academic p-4 rounded-xl shadow-2xs flex items-start gap-3"
                      >
                        <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0 text-emerald-800 mt-0.5">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <div>
                          <h3 className="text-sm font-bold text-slate-900">
                            {item.title}
                          </h3>
                          <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Admissions CTAs */}
                <div className="flex flex-wrap items-center gap-4 pt-3">
                  <button
                    onClick={onOpenTrialModal}
                    className="btn-interactive px-6 py-3.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-sm shadow-xs flex items-center gap-2 cursor-pointer transition-all"
                  >
                    <span>Book Your Free Placement Session</span>
                    <ArrowRight className="w-4 h-4 text-amber-300" />
                  </button>

                  <a
                    href={ACADEMY_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-interactive inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-2xs cursor-pointer transition-all"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Inquire on WhatsApp ({ACADEMY_INFO.phoneDisplay})</span>
                  </a>
                </div>

              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
};
