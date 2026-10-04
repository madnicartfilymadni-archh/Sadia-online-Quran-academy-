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
  Calendar,
  Globe2
} from 'lucide-react';
import { ACADEMY_INFO, COURSES } from '../data/academyData';
import { ScrollReveal } from './common/ScrollReveal';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    category: 'Child (Young Boy/Girl)',
    course: 'Noorani Qaida',
    timingPreference: 'Evening (5:00 PM - 9:00 PM PKT / UK After-school)',
    phone: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format WhatsApp message with structured inquiry details
    const text = `Assalam-o-Alaikum Hafiza Sadia,
I would like to book a *Free Placement / Trial Class* at *${ACADEMY_INFO.name}*.

*Admissions Intake Details:*
- *Student Name:* ${formData.studentName || 'Not specified'}
- *Category:* ${formData.category}
- *Course of Interest:* ${formData.course}
- *Preferred Timing / Timezone:* ${formData.timingPreference}
- *Contact WhatsApp Number:* ${formData.phone || 'Not specified'}
${formData.message ? `- *Additional Goals / Notes:* ${formData.message}` : ''}

Please let me know your available timeslot for the initial diagnostic class. JazakAllah Khair.`;

    const targetUrl = `https://wa.me/923086804058?text=${encodeURIComponent(text)}`;
    setFormSubmitted(true);

    // Open WhatsApp in new tab
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#FBF9F5] border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal variant="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="text-xs font-bold uppercase tracking-widest text-emerald-800 mb-2">
              Admissions &amp; Consultation
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Contact Admissions &amp; Book Your Assessment
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
              Connect directly with Hafiza Sadia on WhatsApp for personalized class schedules, course consultations, or trial bookings.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct Academy Details & WhatsApp Line */}
          <div className="lg:col-span-5">
            <ScrollReveal variant="fade-up" delayMs={50}>
              <div className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-md space-y-6">
                
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1">
                    Official Admissions Desk
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                    {ACADEMY_INFO.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Head Instructor: <strong className="text-slate-800">{ACADEMY_INFO.teacher}</strong> ({ACADEMY_INFO.role})
                  </p>
                </div>

                {/* Big WhatsApp Card & Button */}
                <div className="bg-[#FAFBF8] border border-emerald-200/80 rounded-2xl p-6 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center mx-auto shadow-sm">
                    <MessageCircle className="w-6 h-6 fill-current" />
                  </div>
                  
                  <div>
                    <div className="text-xs text-slate-500 font-medium">Direct WhatsApp Hotline</div>
                    <div className="text-2xl font-extrabold text-slate-900 font-mono tracking-tight mt-0.5">
                      {ACADEMY_INFO.phoneDisplay}
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    Available daily for global inquiries, timetable adjustments &amp; trial bookings.
                  </p>

                  <a
                    href={ACADEMY_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-interactive w-full py-3.5 px-6 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-xs cursor-pointer transition-all"
                  >
                    <MessageCircle className="w-5 h-5 fill-current" />
                    <span>Chat on WhatsApp Directly</span>
                  </a>
                </div>

                {/* Direct Telephone Call Option */}
                <div className="flex items-center justify-between p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-emerald-50 border border-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                      <PhoneCall className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-500 font-medium">Direct Phone Line</div>
                      <div className="text-sm font-bold text-slate-900 font-mono">{ACADEMY_INFO.phoneDisplay}</div>
                    </div>
                  </div>
                  <a
                    href={`tel:${ACADEMY_INFO.phoneRaw}`}
                    className="btn-interactive px-3.5 py-1.5 rounded-lg bg-white border border-slate-300 text-xs font-bold text-slate-800 hover:bg-slate-50 cursor-pointer shadow-2xs"
                  >
                    Call Now
                  </a>
                </div>

                {/* Institutional Assurances */}
                <div className="space-y-2.5 pt-2 border-t border-slate-100 text-xs text-slate-600">
                  <div className="flex items-center gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span>Dedicated solely for young children, girls, and adult sisters</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span>Flexible timezones: UK, USA, Gulf, Europe, and Pakistan</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Globe2 className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span>Distance Learning via Zoom &amp; WhatsApp Live Classroom</span>
                  </div>
                </div>

              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Quick Trial Booking Form */}
          <div className="lg:col-span-7">
            <ScrollReveal variant="fade-up" delayMs={100}>
              <div className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-200/90 shadow-md">
                
                <div className="mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    Quick Trial Booking &amp; Inquiry Form
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Fill in your details below to instantly format and send your placement request to Hafiza Sadia on WhatsApp.
                  </p>
                </div>

                {formSubmitted && (
                  <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 text-xs sm:text-sm flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-semibold">WhatsApp Message Prepared!</strong>
                      <p className="mt-0.5 text-emerald-800">
                        If WhatsApp did not open automatically,{' '}
                        <a 
                          href={ACADEMY_INFO.whatsappUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="underline font-bold text-emerald-900"
                        >
                          click here to message {ACADEMY_INFO.phoneDisplay}
                        </a>.
                      </p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-student-name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Student Full Name *
                      </label>
                      <input
                        id="contact-student-name"
                        name="studentName"
                        type="text"
                        required
                        autoComplete="name"
                        placeholder="e.g. Fatima / Ahmed"
                        value={formData.studentName}
                        onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-transparent transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-category" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Audience Category *
                      </label>
                      <select
                        id="contact-category"
                        name="category"
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-transparent transition-all"
                      >
                        <option value="Child (Young Boy/Girl)">Child (Young Boy/Girl)</option>
                        <option value="School / College Girl">School / College Girl</option>
                        <option value="Adult Sister / Woman">Adult Sister / Woman</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-course" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Course of Interest *
                      </label>
                      <select
                        id="contact-course"
                        name="course"
                        value={formData.course}
                        onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-transparent transition-all"
                      >
                        {COURSES.map((c) => (
                          <option key={c.id} value={c.title}>
                            {c.title} ({c.level})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="contact-timing" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Preferred Timing / Timezone *
                      </label>
                      <select
                        id="contact-timing"
                        name="timingPreference"
                        value={formData.timingPreference}
                        onChange={(e) => setFormData({ ...formData, timingPreference: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-transparent transition-all"
                      >
                        <option value="Morning (9:00 AM - 12:00 PM)">Morning (9:00 AM - 12:00 PM PKT)</option>
                        <option value="Afternoon (1:00 PM - 4:00 PM)">Afternoon (1:00 PM - 4:00 PM PKT)</option>
                        <option value="Evening (5:00 PM - 9:00 PM)">Evening (5:00 PM - 9:00 PM PKT / UK Evening)</option>
                        <option value="Night (9:00 PM - 11:00 PM)">Night (9:00 PM - 11:00 PM PKT / US Morning)</option>
                        <option value="Flexible / Negotiable">Flexible / Worldwide Timezone</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Your WhatsApp / Phone Number *
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      placeholder="e.g. +44 7123 456789 or 0300 1234567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-transparent transition-all font-mono"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Special Request or Background Experience (Optional)
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={2}
                      placeholder="Any specific goals, prior Arabic knowledge, or scheduling notes..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-transparent transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-interactive w-full py-4 px-6 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-sm cursor-pointer transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit &amp; Open WhatsApp Assessment Chat</span>
                  </button>

                  <p className="text-[11px] text-center text-slate-500 pt-1">
                    Your details are treated with strict privacy and solely used to arrange Quran tutoring. No marketing spam.
                  </p>

                </form>

              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
};
