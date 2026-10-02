import React, { useState } from 'react';
import { 
  BookOpen, 
  BookMarked, 
  Sparkles, 
  GraduationCap, 
  Compass, 
  HeartHandshake, 
  ArrowRight, 
  MessageCircle,
  CheckCircle2
} from 'lucide-react';
import { COURSES, ACADEMY_INFO } from '../data/academyData';
import { Course } from '../types';
import { CourseModal } from './CourseModal';

interface CoursesProps {
  onOpenTrialModalWithCourse?: (courseTitle: string) => void;
}

export const Courses: React.FC<CoursesProps> = ({ onOpenTrialModalWithCourse }) => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const getCourseIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen':
        return <BookOpen className="w-6 h-6 text-emerald-700" />;
      case 'BookMarked':
        return <BookMarked className="w-6 h-6 text-emerald-700" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-emerald-700" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-emerald-700" />;
      case 'Compass':
        return <Compass className="w-6 h-6 text-emerald-700" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-emerald-700" />;
      default:
        return <BookOpen className="w-6 h-6 text-emerald-700" />;
    }
  };

  const handleBookTrial = (courseTitle: string) => {
    if (onOpenTrialModalWithCourse) {
      onOpenTrialModalWithCourse(courseTitle);
    }
  };

  return (
    <section id="courses" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-bold uppercase tracking-widest text-emerald-800 mb-2">
            Structured Islamic Learning
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Our Quran &amp; Islamic Courses
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            All courses are taught one-to-one online by Hafiza Sadia. Designed specifically for children, young girls, and women with customized learning pace.
          </p>
        </div>

        {/* 6 Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {COURSES.map((course, index) => {
            const courseWhatsAppUrl = `https://wa.me/923086804050?text=${encodeURIComponent(
              `Assalam-o-Alaikum, I am interested in enrolling in the "${course.title}" course at Sadia Online Quran Academy.`
            )}`;

            return (
              <div
                key={course.id}
                className="group relative bg-[#FBFDFB] hover:bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 hover:border-emerald-500/50 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Row: Icon & Arabic Title */}
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                      {getCourseIcon(course.icon)}
                    </div>
                    {course.arabicTitle && (
                      <span className="font-arabic text-xl font-bold text-emerald-900/80 group-hover:text-emerald-800 transition-colors">
                        {course.arabicTitle}
                      </span>
                    )}
                  </div>

                  {/* Course Title */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold text-emerald-800/70">
                      0{index + 1}.
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">
                      {course.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {course.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-1.5 mb-6 pt-2 border-t border-slate-100">
                    {course.highlights.slice(0, 3).map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-slate-100 space-y-2.5">
                  <div className="flex items-center justify-between text-xs text-slate-500 pb-1">
                    <span>1-on-1 Sessions</span>
                    <span className="font-semibold text-emerald-800">PKR 2,000 / mo</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setSelectedCourse(course)}
                      className="w-full py-2.5 px-3 text-xs font-semibold text-slate-700 hover:text-emerald-800 bg-slate-100 hover:bg-emerald-50 rounded-lg transition-colors text-center"
                    >
                      Course Details
                    </button>

                    <a
                      href={courseWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-3 text-xs font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-2xs text-center"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-current" />
                      <span>Enroll</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <div className="mt-12 text-center p-6 bg-emerald-50/60 rounded-2xl border border-emerald-100/80 max-w-2xl mx-auto">
          <p className="text-sm font-medium text-emerald-950">
            Need guidance on which course is right for your child or yourself?
          </p>
          <a
            href={ACADEMY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-3 text-xs sm:text-sm font-bold text-emerald-800 hover:text-emerald-900 underline underline-offset-4"
          >
            <MessageCircle className="w-4 h-4 text-emerald-700" />
            <span>Speak directly with Hafiza Sadia on WhatsApp (03086804050)</span>
          </a>
        </div>

      </div>

      {/* Course Detail Modal */}
      <CourseModal
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
        onBookTrial={handleBookTrial}
      />
    </section>
  );
};
