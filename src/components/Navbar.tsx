import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar, Wind, Sun, Moon, Linkedin } from 'lucide-react';
import { DOCTOR_DATA } from '@/data/doctorData';
import { useTheme } from '@/context/ThemeContext';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'PFT & Services', href: '#services' },
    { label: 'Conditions', href: '#conditions' },
    { label: 'Lung Screener', href: '#screener' },
    { label: 'Reviews', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact & Clinic', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-slate-200/80 dark:border-teal-500/20 py-2.5 shadow-sm dark:shadow-black/20'
          : 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-sm py-4 border-b border-slate-200/50 dark:border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo & Doctor Title */}
          <a href="#" className="flex items-center gap-3 shrink-0 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-600 to-cyan-600 flex items-center justify-center text-white shadow-md shadow-teal-600/20 group-hover:scale-105 transition">
              <Wind className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-base sm:text-lg font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-teal-600 dark:group-hover:text-teal-400 transition leading-tight">
                {DOCTOR_DATA.name}
              </span>
              <span className="block text-[11px] sm:text-xs font-semibold text-teal-700 dark:text-teal-400">
                Pulmonologist & Allergy Specialist • Kondapur
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-semibold text-slate-600 hover:text-teal-600 dark:text-slate-300 dark:hover:text-teal-400 transition whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 transition"
            >
              {theme === 'light' ? (
                <Moon className="w-4 h-4 text-slate-700" />
              ) : (
                <Sun className="w-4 h-4 text-amber-400" />
              )}
            </button>

            {/* LinkedIn Profile Icon */}
            <a
              href={DOCTOR_DATA.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Dr. Srinija Kummaraganti LinkedIn Profile"
              title="View LinkedIn Profile"
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-[#0A66C2] dark:hover:text-[#0A66C2] bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 transition"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            {/* Phone Button: Guaranteed Single Line with whitespace-nowrap & shrink-0 */}
            <a
              href={`tel:${DOCTOR_DATA.clinic.phone.replace(/\s+/g, '')}`}
              className="hidden md:inline-flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-200 hover:text-teal-600 dark:hover:text-white bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700 transition whitespace-nowrap shrink-0"
            >
              <Phone className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 shrink-0" />
              <span className="whitespace-nowrap tracking-wide">{DOCTOR_DATA.clinic.phoneFormatted}</span>
            </a>

            {/* Appointment Booking CTA */}
            <button
              onClick={onOpenBooking}
              className="hidden sm:inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 text-white shadow-md shadow-teal-600/20 transition active:scale-95 whitespace-nowrap shrink-0"
            >
              <Calendar className="w-3.5 h-3.5 shrink-0" />
              <span>Book Appointment</span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 xl:hidden transition shrink-0"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white/98 dark:bg-slate-950/98 backdrop-blur-xl border-b border-slate-200 dark:border-teal-500/20 px-6 py-5 animate-fade-in shadow-xl">
          <nav className="flex flex-col gap-2.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-teal-600 dark:hover:text-teal-400 py-1.5 border-b border-slate-100 dark:border-slate-800/60 transition"
              >
                {link.label}
              </a>
            ))}
            
            <div className="pt-3 flex flex-col gap-2.5">
              {/* Phone call pill */}
              <a
                href={`tel:${DOCTOR_DATA.clinic.phone.replace(/\s+/g, '')}`}
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold text-slate-800 dark:text-white bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
                <span>Call Clinic: {DOCTOR_DATA.clinic.phoneFormatted}</span>
              </a>

              {/* LinkedIn pill */}
              <a
                href={DOCTOR_DATA.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold text-[#0A66C2] bg-blue-50 dark:bg-slate-800 border border-blue-200 dark:border-slate-700 whitespace-nowrap"
              >
                <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                <span>View LinkedIn Profile</span>
              </a>

              {/* Theme toggle row in drawer */}
              <button
                onClick={toggleTheme}
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
              >
                {theme === 'light' ? (
                  <>
                    <Moon className="w-4 h-4 text-slate-700" />
                    <span>Switch to Dark Theme</span>
                  </>
                ) : (
                  <>
                    <Sun className="w-4 h-4 text-amber-400" />
                    <span>Switch to Light Theme</span>
                  </>
                )}
              </button>

              {/* Book Appointment CTA */}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-xl font-bold text-xs bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-lg shadow-teal-600/25"
              >
                Book In-Clinic Consultation
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
