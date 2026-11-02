import React from 'react';
import { Wind, Phone, Mail, MapPin, ArrowUp, Shield, Linkedin } from 'lucide-react';
import { DOCTOR_DATA } from '@/data/doctorData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-slate-400 text-xs border-t border-slate-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Col 1: Doctor Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-500 to-cyan-500 flex items-center justify-center text-white shadow-md shadow-teal-500/20">
                <Wind className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white tracking-tight">
                  {DOCTOR_DATA.name}
                </h3>
                <p className="text-[11px] text-teal-400 font-semibold">
                  {DOCTOR_DATA.degrees}
                </p>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed text-xs">
              Consultant Pulmonologist, Interventional Specialist & Certified Allergy & Asthma Doctor at TrueMed Diagnostics & Clinics, Kondapur, Hyderabad.
            </p>

            <div className="pt-1">
              <a
                href={DOCTOR_DATA.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition"
              >
                <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                <span className="font-semibold text-xs">Connect on LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-teal-400 transition">About Dr. Srinija</a></li>
              <li><a href="#services" className="hover:text-teal-400 transition">PFT & Clinical Services</a></li>
              <li><a href="#conditions" className="hover:text-teal-400 transition">Conditions Treated</a></li>
              <li><a href="#screener" className="hover:text-teal-400 transition">Lung Health Screener</a></li>
              <li><a href="#testimonials" className="hover:text-teal-400 transition">Patient Reviews</a></li>
              <li><a href="#faq" className="hover:text-teal-400 transition">Frequently Asked Questions</a></li>
              <li><a href="#contact" className="hover:text-teal-400 transition">Clinic Hours & Contact</a></li>
            </ul>
          </div>

          {/* Col 3: Key Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Clinical Specialities
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>• Pulmonary Function Test (PFT / Spirometry)</li>
              <li>• Allergy Skin Prick Testing (CMC Vellore)</li>
              <li>• Diagnostic & Therapeutic Bronchoscopy</li>
              <li>• Severe Asthma & Biologics Clinic</li>
              <li>• Sleep Apnea & Polysomnography</li>
              <li>• COPD & Pulmonary Rehabilitation</li>
              <li>• Ultrasound-Guided Pleural Drainage</li>
            </ul>
          </div>

          {/* Col 4: Clinic Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Clinic Location
            </h4>
            <address className="not-italic space-y-2 leading-relaxed">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>
                  {DOCTOR_DATA.clinic.name}, 1st Floor, Plot No. 141, Madhava Hills, Kondapur, Hyderabad - 500084
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <span className="whitespace-nowrap">{DOCTOR_DATA.clinic.phoneFormatted}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <span>{DOCTOR_DATA.clinic.email}</span>
              </p>
            </address>
          </div>

        </div>

        {/* Medical Advice Disclaimer */}
        <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 text-[11px] text-slate-400 leading-relaxed mb-8">
          <div className="flex items-start gap-2">
            <Shield className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
            <p>
              <strong className="text-slate-300">Medical Notice:</strong> The information contained on this website is for educational and appointment scheduling purposes only. It is not intended as a substitute for professional medical advice, diagnosis, or clinical treatment. If you are experiencing an acute medical emergency such as severe sudden breathing failure, please call emergency services (108 in India) or visit the nearest hospital emergency department immediately.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <p>© {new Date().getFullYear()} {DOCTOR_DATA.name}. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-teal-400 border border-slate-700 transition"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
