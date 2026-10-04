import React from 'react';
import { X, CheckCircle2, MessageCircle, ArrowRight, UserCheck } from 'lucide-react';
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
    `Assalam-o-Alaikum, I want to enroll / book a free trial class for the course: "${course.title}" at Sadia Online Quran Academy.`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl max-w-xl w-full shadow-2xl border border-slate-200 overflow-hidden relative max-h-[90vh] flex flex-col animate-fade-in-scale"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-emerald-800 to-teal-900 p-6 text-white relative">
          <button
            onClick={onClose}
            className="btn-interactive absolute top-4 right-4 p-2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-2 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-1">
            <span>Course Syllabus &amp; Overview</span>
            {course.arabicTitle && (
              <>
                <span>·</span>
                <span className="font-arabic text-sm text-emerald-200">{course.arabicTitle}</span>
              </>
            )}
          </div>
          <h3 className="text-2xl font-bold text-white">{course.title}</h3>
          <p className="text-emerald-100/90 text-sm mt-1">{course.description}</p>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-5 text-slate-700">
          
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
              Who This Course Is For
            </h4>
            <p className="text-sm bg-slate-50 p-3 rounded-lg border border-slate-100 text-slate-700 font-medium">
              {course.suitableFor}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              What You Will Learn
            </h4>
            <ul className="space-y-2.5">
              {course.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Academy Details */}
          <div className="bg-emerald-50/70 border border-emerald-100 rounded-xl p-4 text-xs space-y-1.5 text-emerald-950">
            <div className="font-semibold text-emerald-900 flex items-center gap-1.5">
              <UserCheck className="w-4 h-4 text-emerald-700" />
              <span>Personal 1-on-1 Online Sessions</span>
            </div>
            <p className="text-emerald-800">
              Classes are conducted one-to-one via Zoom or WhatsApp with teacher Hafiza Sadia. Flexible morning &amp; evening timing slots available.
            </p>
            <div className="font-bold text-emerald-900 pt-1">
              Monthly Fee: PKR 2,000 / Month
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3">
          <button
            onClick={() => {
              onClose();
              onBookTrial(course.title);
            }}
            className="btn-interactive px-5 py-2.5 rounded-xl border border-slate-300 hover:bg-white text-slate-700 font-semibold text-sm text-center cursor-pointer"
          >
            Fill Trial Form
          </button>
          
          <a
            href={whatsappEnrollUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-interactive px-6 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-sm cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Enroll on WhatsApp</span>
          </a>
        </div>

      </div>
    </div>
  );
};
