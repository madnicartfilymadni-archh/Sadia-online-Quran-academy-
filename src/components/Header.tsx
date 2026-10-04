import React, { useState } from 'react';
import { Menu, X, MessageCircle, ArrowRight } from 'lucide-react';
import { ACADEMY_INFO } from '../data/academyData';
import logoImage from '../assets/images/sadia_academy_logo_1790971288578.jpg';

interface HeaderProps {
  onOpenTrialModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenTrialModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Programs', href: '#courses' },
    { label: 'Methodology', href: '#about' },
    { label: 'Faculty', href: '#teacher' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Enrollment', href: '#how-it-works' },
    { label: 'Tuition', href: '#fee' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-2xs transition-all animate-fade-in-down">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Zone 1: Institutional Wordmark with Crest Logo */}
          <a href="#home" className="flex items-center gap-3 group focus:outline-none">
            <div className="w-12 h-12 rounded-xl overflow-hidden bg-[#051F16] border border-amber-500/30 flex items-center justify-center shadow-xs group-hover:border-amber-400/60 transition-all duration-300 shrink-0">
              <img
                src={logoImage}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = '/logo.jpg';
                }}
                alt="Sadia Online Quran Academy & Islamic Center Crest"
                className="w-full h-full object-cover"
                width={48}
                height={48}
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-base sm:text-lg font-bold text-slate-900 tracking-tight leading-none group-hover:text-emerald-800 transition-colors">
                  Sadia Online Quran Academy
                </span>
              </div>
              <span className="text-[11px] text-slate-500 font-medium tracking-normal mt-1 flex items-center gap-1.5">
                <span>Islamic Center</span>
                <span className="text-slate-300" aria-hidden="true">·</span>
                <span className="text-emerald-700 font-semibold">1-on-1 Global Distance Learning</span>
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links (Clean typography, no pills) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
            {navLinks.slice(0, 6).map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="nav-link-animated hover:text-emerald-900 py-1 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="nav-link-animated hover:text-emerald-900 py-1 transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Zone 3: Primary Actions (WhatsApp Line + Assessment CTA) */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={ACADEMY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Direct WhatsApp line 03086804058"
              className="btn-interactive inline-flex items-center gap-2 px-3.5 py-2.5 text-xs font-semibold text-slate-700 hover:text-emerald-900 bg-slate-50 hover:bg-emerald-50/60 border border-slate-200/90 rounded-xl whitespace-nowrap shadow-2xs cursor-pointer transition-all"
            >
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span className="font-mono text-slate-800 font-bold">{ACADEMY_INFO.phoneDisplay}</span>
            </a>
            
            <button
              onClick={onOpenTrialModal}
              className="btn-interactive inline-flex items-center gap-2 px-4.5 py-2.5 text-xs font-bold text-white bg-emerald-800 hover:bg-emerald-900 border border-emerald-900 rounded-xl shadow-xs whitespace-nowrap cursor-pointer transition-all"
            >
              <span>Book Free Trial</span>
              <ArrowRight className="w-3.5 h-3.5 text-amber-300" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 rotate-90 transition-transform duration-200" /> : <Menu className="w-6 h-6 transition-transform duration-200" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div 
        className={`lg:hidden border-t border-slate-200 bg-white/98 shadow-xl transition-all duration-300 ease-out overflow-hidden ${
          mobileMenuOpen ? 'max-h-[550px] opacity-100 py-4 px-4' : 'max-h-0 opacity-0 py-0 px-4 pointer-events-none'
        }`}
      >
        <div className="flex flex-col space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 text-sm font-semibold text-slate-700 hover:text-emerald-800 hover:bg-emerald-50/60 rounded-xl transition-colors"
            >
              {link.label}
            </a>
          ))}
          
          <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
            <a
              href={ACADEMY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-interactive w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-xs cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp Admission ({ACADEMY_INFO.phoneDisplay})</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTrialModal();
              }}
              className="btn-interactive w-full py-3 px-4 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-sm text-center shadow-xs cursor-pointer"
            >
              Book Free Trial Assessment
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

