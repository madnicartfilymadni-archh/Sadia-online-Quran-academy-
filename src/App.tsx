import React, { useState } from 'react';
import { AdmissionBanner } from './components/AdmissionBanner';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AdmissionNotice } from './components/AdmissionNotice';
import { Courses } from './components/Courses';
import { About } from './components/About';
import { Teacher } from './components/Teacher';
import { WhyChooseUs } from './components/WhyChooseUs';
import { HowItWorks } from './components/HowItWorks';
import { FeeSection } from './components/FeeSection';
import { FreeTrialCTA } from './components/FreeTrialCTA';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { TrialBookingModal } from './components/TrialBookingModal';

export default function App() {
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);
  const [selectedCourseForModal, setSelectedCourseForModal] = useState<string>('Noorani Qaida');

  const handleOpenTrialModal = (courseName?: string) => {
    if (courseName) {
      setSelectedCourseForModal(courseName);
    }
    setIsTrialModalOpen(true);
  };

  const handleCloseTrialModal = () => {
    setIsTrialModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFBF9] text-slate-800 selection:bg-emerald-100 selection:text-emerald-900 overflow-x-clip relative">
      {/* Subtle, non-blocking page load top progress transition */}
      <div 
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-emerald-500 via-teal-400 to-amber-400 z-50 animate-page-bar origin-left pointer-events-none" 
        aria-hidden="true" 
      />

      {/* 1. Admission Announcement Banner */}
      <AdmissionBanner />

      {/* 2. Top Header Navigation */}
      <Header onOpenTrialModal={() => handleOpenTrialModal()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 3. Hero Section */}
        <Hero onOpenTrialModal={() => handleOpenTrialModal()} />

        {/* 4. Admission Open Highlight Bar */}
        <AdmissionNotice onOpenTrialModal={() => handleOpenTrialModal()} />

        {/* 5. Courses Section */}
        <Courses onOpenTrialModalWithCourse={(courseTitle) => handleOpenTrialModal(courseTitle)} />

        {/* 6. About Section */}
        <About onOpenTrialModal={() => handleOpenTrialModal()} />

        {/* 7. Teacher Section */}
        <Teacher onOpenTrialModal={() => handleOpenTrialModal()} />

        {/* 8. Why Choose Us */}
        <WhyChooseUs />

        {/* 9. How It Works */}
        <HowItWorks onOpenTrialModal={() => handleOpenTrialModal()} />

        {/* 10. Fee Section */}
        <FeeSection onOpenTrialModal={() => handleOpenTrialModal()} />

        {/* 11. Free Trial CTA Banner */}
        <FreeTrialCTA />

        {/* 12. FAQ Section */}
        <FAQ />

        {/* 13. Contact Section */}
        <Contact />
      </main>

      {/* 14. Footer */}
      <Footer />

      {/* 15. Fixed Floating WhatsApp Button */}
      <FloatingWhatsApp />

      {/* 16. Free Trial Modal */}
      <TrialBookingModal
        isOpen={isTrialModalOpen}
        onClose={handleCloseTrialModal}
        defaultCourse={selectedCourseForModal}
      />
    </div>
  );
}
