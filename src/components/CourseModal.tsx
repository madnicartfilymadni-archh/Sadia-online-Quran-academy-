import React from 'react';
import { X, CheckCircle2, MessageCircle, ArrowRight, UserCheck, Clock, Award, BookOpen } from 'lucide-react';
import { Course } from '../types';
import { ACADEMY_INFO } from '../data/academyData';

interface CourseModalProps {
  course: Course | null;
  onClose: () => void;
  onBookTrial: (courseTitle: string) => void;
}

export const CourseModal: React.FC<CourseModalProps> = ({ course, onClose, onBookTrial }) => {
  if (!course) return null;

  const whatsappEnrollUrl = `https://wa.me/923086804058?text=${encodeURIComponent(
    `Assalam-o-Alaikum Hafiza Sadia, I would like to enroll / book a free trial class for "${course.title}" (${course.level}) at Sadia Online Quran Academy.`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden relative max-h-[92vh] flex flex-col animate-fade-in-scale"
        role="dialog"
        aria-modal="true"
      >
        {/* Academic Modal Header */}
        <div className="bg-[#051F16] p-6 sm:p-7 text-white relative border-b border-amber-500/20">
          <button
            onClick={onClose}
            className="btn-interactive absolute top-4 right-4 p-2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full cursor-pointer transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex flex-wrap items-center gap-2 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2">
            <span>{course.level}</span>
            {course.duration && (
              <>
                <span className="text-emerald-700" aria-hidden="true">·</span>
                <span className="text-emerald-300">{course.duration}</span>
              </>
            )}
          </div>

          <div className="flex items-center justify-between gap-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {course.title}
            </h3>
            {course.arabicTitle && (
              <span className="font-arabic text-2xl sm:text-3xl text-amber-200 font-bold select-none shrink-0">
                {course.arabicTitle}
              </span>
            )}
          </div>
          <p className="text-emerald-100/90 text-sm mt-2 leading-relaxed">
            {course.description}
          </p>
        </div>

        {/* Modal Body: Academic Syllabus Details */}
        <div className="p-6 sm:p-7 overflow-y-auto space-y-6 text-slate-700 text-left">
          
          {/* Target Audience & Prerequisites */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Target Audience
              </span>
              <p className="text-xs sm:text-sm font-semibold text-slate-800">
                {course.suitableFor}
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Prerequisites
              </span>
              <p className="text-xs sm:text-sm font-semibold text-slate-800">
                {course.prerequisites || 'None — Suitable for complete beginners.'}
              </p>
            </div>
          </div>

          {/* Core Curriculum Highlights */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              Curriculum &amp; Syllabus Modules
            </h4>
            <div className="space-y-2.5">
              {course.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-slate-800 bg-white p-2.5 rounded-xl border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Expected Learning Outcomes */}
          {course.learningOutcomes && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Expected Learning Outcomes
              </h4>
              <div className="space-y-2">
                {course.learningOutcomes.map((outcome, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <Award className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span>{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Instructional Standards Notice */}
          <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-2xl p-4.5 text-xs space-y-2 text-emerald-950">
            <div className="font-bold text-emerald-900 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-emerald-700" />
                <span>One-to-One Private Tuition by Hafiza Sadia</span>
              </div>
              <span className="font-mono text-sm font-extrabold text-emerald-900">{ACADEMY_INFO.monthlyFee}</span>
            </div>
            <p className="text-emerald-800 leading-relaxed">
              Classes are conducted privately on Zoom or WhatsApp with live digital Qaida and Mushaf screen sharing. Schedule is flexible and agreed directly to suit your school, work, or domestic routine.
            </p>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200/80 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="text-xs text-slate-500 text-center sm:text-left">
            <span>Direct Admissions WhatsApp: </span>
            <strong className="text-slate-900 font-mono">{ACADEMY_INFO.phoneDisplay}</strong>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                onClose();
                onBookTrial(course.title);
              }}
              className="btn-interactive flex-1 sm:flex-initial px-5 py-2.5 rounded-xl border border-slate-300 hover:bg-white text-slate-800 font-bold text-xs text-center cursor-pointer shadow-2xs"
            >
              Book Placement Class
            </button>
            
            <a
              href={whatsappEnrollUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-interactive flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Enroll on WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
