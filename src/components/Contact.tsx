import React, { useState } from 'react';
import { 
  MessageCircle, 
  PhoneCall, 
  Clock, 
  User, 
  BookOpen, 
  Send, 
  CheckCircle2, 
  ShieldCheck,
  Calendar
} from 'lucide-react';
import { ACADEMY_INFO, COURSES } from '../data/academyData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    category: 'Child (Boy/Girl)',
    course: 'Noorani Qaida',
    timingPreference: 'Evening (5:00 PM - 9:00 PM)',
    phone: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format WhatsApp message with exact inquiry details
    const text = `Assalam-o-Alaikum Hafiza Sadia,
I would like to inquire about online Quran classes at *${ACADEMY_INFO.name}*.

*Inquiry Details:*
- *Student Name:* ${formData.studentName || 'Not specified'}
- *Category:* ${formData.category}
- *Course Selected:* ${formData.course}
- *Preferred Timing:* ${formData.timingPreference}
- *Contact Phone:* ${formData.phone || 'Not specified'}
${formData.message ? `- *Additional Note:* ${formData.message}` : ''}

Looking forward to your guidance for the free trial class. JazakAllah Khair.`;

    const targetUrl = `https://wa.me/923086804050?text=${encodeURIComponent(text)}`;
    setFormSubmitted(true);

    // Open WhatsApp in new tab
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#F8FAF9] border-t border-slate-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-bold uppercase tracking-widest text-emerald-800 mb-2">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Contact Sadia Online Quran Academy &amp; Islamic Center
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Reach out directly on WhatsApp to schedule your trial class or ask any questions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct Academy Details & Big WhatsApp CTA */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
            
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1">
                Official Academy Contact
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                {ACADEMY_INFO.name}
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                Teacher: <strong>{ACADEMY_INFO.teacher}</strong> ({ACADEMY_INFO.role})
              </p>
            </div>

            {/* Big WhatsApp Card & Button */}
            <div className="bg-emerald-50 border border-emerald-200/80 rounded-2xl p-6 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center mx-auto shadow-sm">
                <MessageCircle className="w-6 h-6 fill-current" />
              </div>
              
              <div>
                <div className="text-xs text-slate-500 font-medium">Direct WhatsApp Line</div>
                <div className="text-2xl font-extrabold text-slate-900 tracking-tight mt-0.5">
                  {ACADEMY_INFO.phoneDisplay}
                </div>
              </div>

              <p className="text-xs text-slate-600">
                Available daily for inquiries, timetable scheduling &amp; trial bookings.
              </p>

              {/* Required Big WhatsApp Button */}
              <a
                href={ACADEMY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-base transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Contact on WhatsApp</span>
              </a>
            </div>

            {/* Direct Phone Calling option */}
            <div className="flex items-center justify-between p-4 rounded-xl bg-slate-50 border border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
                  <PhoneCall className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-500">Phone Call</div>
                  <div className="text-sm font-bold text-slate-900">{ACADEMY_INFO.phoneDisplay}</div>
                </div>
              </div>
              <a
                href={`tel:${ACADEMY_INFO.phoneRaw}`}
                className="px-3.5 py-1.5 rounded-lg bg-white border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
              >
                Call Now
              </a>
            </div>

            {/* Trust Points */}
            <div className="space-y-2 pt-2 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Dedicated exclusively for children, girls and women</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-600" />
                <span>Flexible timings arranged upon request</span>
              </div>
            </div>

          </div>

          {/* Right Column: Quick Trial Booking / WhatsApp Message Generator */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
            
            <div className="mb-6">
              <h3 className="text-xl font-bold text-slate-900">
                Quick Trial Booking Form
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Fill in your details below to instantly connect with Hafiza Sadia on WhatsApp.
              </p>
            </div>

            {formSubmitted && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs sm:text-sm flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="font-semibold">WhatsApp Chat Opened!</strong>
                  <p className="mt-0.5 text-emerald-800">
                    If WhatsApp did not open automatically,{' '}
                    <a 
                      href={ACADEMY_INFO.whatsappUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="underline font-bold text-emerald-900"
                    >
                      click here to message 03086804050
                    </a>.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-student-name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Student Name *
                  </label>
                  <input
                    id="contact-student-name"
                    name="studentName"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Enter student name"
                    value={formData.studentName}
                    onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="contact-student-category" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Student Category *
                  </label>
                  <select
                    id="contact-student-category"
                    name="studentCategory"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all"
                  >
                    <option value="Child (Young Boy/Girl)">Child (Young Boy/Girl)</option>
                    <option value="School / College Girl">School / College Girl</option>
                    <option value="Adult Sister / Woman">Adult Sister / Woman</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-course-select" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Select Course *
                  </label>
                  <select
                    id="contact-course-select"
                    name="course"
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all"
                  >
                    {COURSES.map((c) => (
                      <option key={c.id} value={c.title}>
                        {c.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-time-slot" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Preferred Time Slot *
                  </label>
                  <select
                    id="contact-time-slot"
                    name="timingPreference"
                    value={formData.timingPreference}
                    onChange={(e) => setFormData({ ...formData, timingPreference: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all"
                  >
                    <option value="Morning (9:00 AM - 12:00 PM)">Morning (9:00 AM - 12:00 PM)</option>
                    <option value="Afternoon (1:00 PM - 4:00 PM)">Afternoon (1:00 PM - 4:00 PM)</option>
                    <option value="Evening (5:00 PM - 9:00 PM)">Evening (5:00 PM - 9:00 PM)</option>
                    <option value="Night (9:00 PM - 11:00 PM)">Night (9:00 PM - 11:00 PM)</option>
                    <option value="Flexible / Negotiable">Flexible / Any Time</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="contact-phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  WhatsApp / Phone Number *
                </label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  placeholder="e.g. 03001234567"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Message / Special Request (Optional)
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={2}
                  placeholder="Any specific goals or previous Quran experience..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-sm transition-colors flex items-center justify-center gap-2 shadow-xs cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Submit &amp; Open WhatsApp Chat</span>
              </button>

              <p className="text-[11px] text-center text-slate-500">
                Your information will only be used to contact you regarding classes. No spam.
              </p>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
};
