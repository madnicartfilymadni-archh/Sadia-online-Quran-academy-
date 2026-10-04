import React, { useState } from 'react';
import { Menu, X, BookOpen, MessageCircle } from 'lucide-react';
import { ACADEMY_INFO } from '../data/academyData';
import logoImage from '../assets/images/sadia_academy_logo_1790971288578.jpg';

interface HeaderProps {
  onOpenTrialModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenTrialModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Courses', href: '#courses' },
    { label: 'Teacher', href: '#teacher' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Fee', href: '#fee' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs transition-all animate-fade-in-down">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          
          {/* Zone 1: Brand Wordmark with Official Logo Image */}
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="w-11 h-11 rounded-xl overflow-hidden bg-slate-950 border border-amber-500/30 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform duration-300 shrink-0">
              <img
                src={logoImage}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = '/logo.jpg';
                }}
                alt="Sadia Online Quran Academy & Islamic Center Official Logo"
                className="w-full h-full object-cover"
                width={44}
                height={44}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold text-slate-900 tracking-tight leading-tight group-hover:text-emerald-700 transition-colors duration-200">
                Sadia Online Quran Academy
              </span>
              <span className="text-[11px] text-slate-500 font-medium leading-none">
                &amp; Islamic Center · {ACADEMY_INFO.phoneDisplay}
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
            {navLinks.slice(0, 7).map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="nav-link-animated hover:text-emerald-700 py-1"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="nav-link-animated hover:text-emerald-700 py-1"
            >
              Contact
            </a>
          </nav>

          {/* Zone 3: Primary Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={ACADEMY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-interactive inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg whitespace-nowrap shadow-xs cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>03086804058</span>
            </a>
            
            <button
              onClick={onOpenTrialModal}
              className="btn-interactive px-4 py-2 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg shadow-sm whitespace-nowrap cursor-pointer"
            >
              Start Free Trial
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors duration-200 cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 transition-transform duration-200 rotate-90" /> : <Menu className="w-6 h-6 transition-transform duration-200" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu with smooth slide and fade */}
      <div 
        className={`lg:hidden border-t border-slate-200 bg-white shadow-xl transition-all duration-300 ease-out overflow-hidden ${
          mobileMenuOpen ? 'max-h-[500px] opacity-100 py-4 px-4' : 'max-h-0 opacity-0 py-0 px-4 pointer-events-none'
        }`}
      >
        <div className="flex flex-col space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-base font-medium text-slate-700 hover:text-emerald-700 hover:bg-emerald-50/70 rounded-lg transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
          
          <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
            <a
              href={ACADEMY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-interactive w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm shadow-xs cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp (03086804058)</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTrialModal();
              }}
              className="btn-interactive w-full py-2.5 px-4 rounded-lg bg-slate-900 hover:bg-slate-850 text-white font-medium text-sm text-center shadow-xs cursor-pointer"
            >
              Book Free Trial Class
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
