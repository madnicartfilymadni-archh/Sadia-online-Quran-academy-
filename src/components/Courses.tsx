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
  CheckCircle2,
  Clock,
  UserCheck,
  Award,
  Layers
} from 'lucide-react';
import { COURSES, ACADEMY_INFO } from '../data/academyData';
import { Course } from '../types';
import { CourseModal } from './CourseModal';
import { ScrollReveal } from './common/ScrollReveal';

interface CoursesProps {
  onOpenTrialModalWithCourse?: (courseTitle: string) => void;
}

export const Courses: React.FC<CoursesProps> = ({ onOpenTrialModalWithCourse }) => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const getCourseIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen':
        return <BookOpen className="w-5 h-5 text-emerald-800" />;
      case 'BookMarked':
        return <BookMarked className="w-5 h-5 text-emerald-800" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-emerald-800" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-emerald-800" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-emerald-800" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-emerald-800" />;
      default:
        return <BookOpen className="w-5 h-5 text-emerald-800" />;
    }
  };

  const categories = [
    { id: 'all', label: 'All Curriculum (6)' },
    { id: 'foundation', label: 'Foundation' },
    { id: 'recitation', label: 'Recitation' },
    { id: 'tajweed', label: 'Tajweed' },
    { id: 'hifz', label: 'Hifz Program' },
    { id: 'islamic-studies', label: 'Islamic Studies' },
  ];

  const filteredCourses = activeCategory === 'all' 
    ? COURSES 
    : COURSES.filter(c => c.category === activeCategory);

  const handleBookTrial = (courseTitle: string) => {
    if (onOpenTrialModalWithCourse) {
      onOpenTrialModalWithCourse(courseTitle);
    }
  };

  return (
    <section id="courses" className="py-16 md:py-24 bg-[#FCFBF8] border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Academic Section Header */}
        <ScrollReveal variant="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="text-xs font-bold uppercase tracking-widest text-emerald-800 mb-2">
              Academic Curriculum &amp; Syllabi
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Comprehensive Quranic &amp; Islamic Studies Programs
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
              Every course is taught one-to-one with dedicated private mentoring by Hafiza Sadia. Tailored progression adapted to each student’s age, baseline level, and schedule.
            </p>
          </div>
        </ScrollReveal>

        {/* Interactive Academic Filter Tabs */}
        <ScrollReveal variant="fade-up" delayMs={50}>
          <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`btn-interactive px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-emerald-900 text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200/80 hover:border-slate-300'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Courses Prospectus Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {filteredCourses.map((course, index) => {
            const courseWhatsAppUrl = `https://wa.me/923086804058?text=${encodeURIComponent(
              `Assalam-o-Alaikum Hafiza Sadia, I would like to inquire / book a free trial for the course "${course.title}" at Sadia Online Quran Academy.`
            )}`;

            return (
              <ScrollReveal
                key={course.id}
                variant="fade-up"
                delayMs={index * 60}
                className="h-full flex"
              >
                <div className="card-academic rounded-2xl p-6 sm:p-7 flex flex-col justify-between w-full h-full shadow-2xs group relative">
                  
                  <div>
                    {/* Top Academic Tag & Arabic Calligraphy */}
                    <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-100">
                      <div className="flex items-center gap-2">
                        <div className="w-9 h-9 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
                          {getCourseIcon(course.icon)}
                        </div>
                        <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wide">
                          {course.level}
                        </span>
                      </div>
                      {course.arabicTitle && (
                        <span className="font-arabic text-xl font-bold text-emerald-900/80 select-none">
                          {course.arabicTitle}
                        </span>
                      )}
                    </div>

                    {/* Course Title & Duration */}
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">
                      {course.title}
                    </h3>

                    {/* Unboxed Metadata (Zero-pill discipline) */}
                    <div className="flex items-center gap-2 text-xs text-slate-500 mt-1 mb-3">
                      <span>{course.duration || 'Pace Adaptive'}</span>
                      <span aria-hidden="true">·</span>
                      <span>1-on-1 Mentorship</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-emerald-700 font-medium">Zoom / WhatsApp</span>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                      {course.description}
                    </p>

                    {/* Key Syllabus Modules */}
                    <div className="space-y-2 mb-6 pt-3 border-t border-slate-100">
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                        Key Learning Focus
                      </div>
                      {course.highlights.slice(0, 3).map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom: Tuition & Academic Actions */}
                  <div className="pt-4 border-t border-slate-100 space-y-3 mt-auto">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-500">Monthly Tuition:</span>
                      <span className="font-extrabold text-slate-900 font-mono text-sm">
                        {ACADEMY_INFO.monthlyFee}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => setSelectedCourse(course)}
                        className="btn-interactive w-full py-2.5 px-3 text-xs font-bold text-slate-700 hover:text-emerald-900 bg-slate-100 hover:bg-emerald-50 rounded-xl text-center cursor-pointer transition-all border border-slate-200/70"
                      >
                        View Syllabus
                      </button>

                      <button
                        onClick={() => handleBookTrial(course.title)}
                        className="btn-interactive w-full py-2.5 px-3 text-xs font-bold text-white bg-emerald-800 hover:bg-emerald-900 rounded-xl text-center cursor-pointer transition-all shadow-2xs"
                      >
                        Book Free Trial
                      </button>
                    </div>

                    <a
                      href={courseWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-1.5 text-[11px] font-semibold text-emerald-800 hover:text-emerald-950 transition-colors pt-0.5 cursor-pointer"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                      <span>Inquire about this course on WhatsApp</span>
                    </a>
                  </div>

                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Global Guidance Callout */}
        <ScrollReveal variant="fade-up" delayMs={100}>
          <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                Academic Placement Assistance
              </div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">
                Unsure which program is right for your child or yourself?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
                Book a 100% free diagnostic assessment class with Hafiza Sadia. She will evaluate your current reading baseline and recommend the ideal starting syllabus.
              </p>
            </div>
            
            <a
              href={ACADEMY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-interactive inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shrink-0 cursor-pointer shadow-xs"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>Free Consultation: {ACADEMY_INFO.phoneDisplay}</span>
            </a>
          </div>
        </ScrollReveal>

      </div>

      {/* Course Detail Syllabus Modal */}
      <CourseModal
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
        onBookTrial={(courseTitle) => handleBookTrial(courseTitle)}
      />
    </section>
  );
};
