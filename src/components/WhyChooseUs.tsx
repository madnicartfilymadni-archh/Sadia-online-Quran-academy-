import React from 'react';
import { UserCheck, Clock, Heart, Sparkles, Monitor, Gift } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/academyData';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'UserCheck':
        return <UserCheck className="w-6 h-6 text-emerald-700" />;
      case 'Clock':
        return <Clock className="w-6 h-6 text-emerald-700" />;
      case 'Heart':
        return <Heart className="w-6 h-6 text-emerald-700" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-emerald-700" />;
      case 'Monitor':
        return <Monitor className="w-6 h-6 text-emerald-700" />;
      case 'Gift':
        return <Gift className="w-6 h-6 text-emerald-700" />;
      default:
        return <UserCheck className="w-6 h-6 text-emerald-700" />;
    }
  };

  return (
    <section id="why-us" className="py-16 md:py-24 bg-[#F8FAF9] border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-bold uppercase tracking-widest text-emerald-800 mb-2">
            Key Academy Advantages
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Why Choose Sadia Online Quran Academy &amp; Islamic Center
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Dedicated one-to-one Islamic learning structured around your comfort, schedule, and individual pace.
          </p>
        </div>

        {/* 6 Clean Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-emerald-300 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                    {getIcon(item.icon)}
                  </div>
                  <span className="text-xs font-bold text-slate-400">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-medium text-emerald-800">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                <span>Dedicated for kids, girls &amp; women</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
