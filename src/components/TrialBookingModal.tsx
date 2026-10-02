import React, { useState, useEffect } from 'react';
import { X, Sparkles, Send, CheckCircle2, MessageCircle } from 'lucide-react';
import { ACADEMY_INFO, COURSES } from '../data/academyData';

interface TrialBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCourse?: string;
}

export const TrialBookingModal: React.FC<TrialBookingModalProps> = ({
  isOpen,
  onClose,
  defaultCourse
}) => {
  const [studentName, setStudentName] = useState('');
  const [studentCategory, setStudentCategory] = useState('Child (Boy/Girl)');
  const [selectedCourse, setSelectedCourse] = useState(defaultCourse || 'Noorani Qaida');
  const [preferredTime, setPreferredTime] = useState('Evening (5:00 PM - 9:00 PM)');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (defaultCourse) {
      setSelectedCourse(defaultCourse);
    }
  }, [defaultCourse]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const text = `Assalam-o-Alaikum Hafiza Sadia,
I would like to book a *Free Trial Class* at *${ACADEMY_INFO.name}*.

*Trial Request Details:*
- *Student Name:* ${studentName}
- *Category:* ${studentCategory}
- *Course:* ${selectedCourse}
- *Preferred Time:* ${preferredTime}
- *Contact Number:* ${phone}

Please let me know the available time for the trial class. JazakAllah Khair.`;

    const url = `https://wa.me/923086804050?text=${encodeURIComponent(text)}`;
    setSubmitted(true);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div 
        className="bg-white rounded-3xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden relative max-h-[95vh] flex flex-col"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-emerald-800 to-teal-900 p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 bg-emerald-700/80 text-emerald-200 text-xs font-semibold px-2.5 py-0.5 rounded-full mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>100% Free Trial Class</span>
          </div>

          <h3 className="text-2xl font-bold text-white">
            Book Your Free Trial Class
          </h3>
          <p className="text-emerald-100 text-xs sm:text-sm mt-1">
            Experience 1-on-1 Quran teaching with Hafiza Sadia before enrolling.
          </p>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">
                Opening WhatsApp Chat...
              </h4>
              <p className="text-sm text-slate-600 max-w-sm mx-auto">
                Your trial request details have been prepared for Hafiza Sadia. If the chat didn't open automatically:
              </p>
              <a
                href={ACADEMY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-white font-bold text-sm shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Open WhatsApp (03086804050)</span>
              </a>
              <div className="pt-2">
                <button
                  onClick={onClose}
                  className="text-xs text-slate-500 hover:text-slate-700 underline"
                >
                  Close this window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="modal-student-name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Student Full Name *
                </label>
                <input
                  id="modal-student-name"
                  name="studentName"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="e.g. Fatima / Ahmed"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="modal-audience-category" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Audience Category *
                  </label>
                  <select
                    id="modal-audience-category"
                    name="studentCategory"
                    value={studentCategory}
                    onChange={(e) => setStudentCategory(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all"
                  >
                    <option value="Child (Young Boy/Girl)">Child (Young Boy/Girl)</option>
                    <option value="School / College Girl">School / College Girl</option>
                    <option value="Adult Sister / Woman">Adult Sister / Woman</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="modal-course-select" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Course of Interest *
                  </label>
                  <select
                    id="modal-course-select"
                    name="course"
                    value={selectedCourse}
                    onChange={(e) => setSelectedCourse(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all"
                  >
                    {COURSES.map((c) => (
                      <option key={c.id} value={c.title}>
                        {c.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="modal-preferred-time" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Preferred Time Slot *
                </label>
                <select
                  id="modal-preferred-time"
                  name="preferredTime"
                  value={preferredTime}
                  onChange={(e) => setPreferredTime(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all"
                >
                  <option value="Morning (9:00 AM - 12:00 PM)">Morning (9:00 AM - 12:00 PM)</option>
                  <option value="Afternoon (1:00 PM - 4:00 PM)">Afternoon (1:00 PM - 4:00 PM)</option>
                  <option value="Evening (5:00 PM - 9:00 PM)">Evening (5:00 PM - 9:00 PM)</option>
                  <option value="Night (9:00 PM - 11:00 PM)">Night (9:00 PM - 11:00 PM)</option>
                  <option value="Flexible / Negotiable">Flexible / Any Time</option>
                </select>
              </div>

              <div>
                <label htmlFor="modal-phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  WhatsApp / Phone Number *
                </label>
                <input
                  id="modal-phone"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  placeholder="03001234567"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Request &amp; Open WhatsApp</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 pt-1">
                <span>Teacher: Hafiza Sadia</span>
                <span aria-hidden="true">·</span>
                <span>Zoom &amp; WhatsApp Live</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
