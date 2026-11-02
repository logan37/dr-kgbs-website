import React from 'react';
import { Calendar, Phone, ShieldCheck, ArrowRight, Sparkles, MapPin, Activity, Linkedin } from 'lucide-react';
import { DOCTOR_DATA } from '@/data/doctorData';
import { DoctorPhotoPlaceholder } from '@/components/DoctorPhotoPlaceholder';

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-slate-900 dark:text-white transition-colors duration-200">
      
      {/* Background Decorative Lighting Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-teal-400/10 via-cyan-400/15 to-blue-400/10 dark:from-teal-500/10 dark:via-cyan-500/15 dark:to-blue-500/10 blur-[130px] pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-teal-400/10 dark:bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-cyan-400/10 dark:bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Doctor Info & High-Impact Headline */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Accreditation Badge & PFT Highlight Pill */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-teal-100 text-teal-800 dark:bg-teal-500/10 dark:border dark:border-teal-500/30 dark:text-teal-300">
                <Sparkles className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 shrink-0" />
                <span>CMC Vellore Trained Allergy & Asthma Specialist</span>
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-cyan-100 text-cyan-800 dark:bg-cyan-500/10 dark:border dark:border-cyan-500/30 dark:text-cyan-300">
                <Activity className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0" />
                <span>PFT & Spirometry Performed In-Clinic</span>
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
              Breathe Freely with Expert Pulmonary & Allergy Care.
            </h1>

            {/* Doctor Subheading with Qualifications */}
            <div className="space-y-1">
              <h2 className="text-xl sm:text-2xl font-bold text-teal-700 dark:text-teal-300">
                {DOCTOR_DATA.name}
              </h2>
              <p className="text-sm sm:text-base font-semibold text-slate-700 dark:text-slate-300">
                {DOCTOR_DATA.degrees}
              </p>
              <p className="text-xs sm:text-sm text-cyan-700 dark:text-cyan-400 font-medium">
                {DOCTOR_DATA.title} • {DOCTOR_DATA.subTitle}
              </p>
            </div>

            {/* Bio summary paragraph */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              Dr. Srinija Kummaraganti provides comprehensive respiratory care in Kondapur, Hyderabad. She personally performs computerized Pulmonary Function Testing (PFT/Spirometry), precision allergy skin prick tests, flexible bronchoscopy, sleep apnea evaluations, and advanced treatment for severe asthma and COPD.
            </p>

            {/* Clinic Location Pill */}
            <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-900/60 p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm w-fit">
              <MapPin className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
              <span>{DOCTOR_DATA.clinic.name}, Madhava Hills, Kondapur, Hyderabad</span>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap gap-3.5 items-center">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-bold bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 text-white shadow-lg shadow-teal-600/20 transition flex items-center gap-2 active:scale-95 whitespace-nowrap shrink-0"
              >
                <Calendar className="w-4 h-4 shrink-0" />
                Book In-Clinic Consultation
              </button>

              <a
                href={`tel:${DOCTOR_DATA.clinic.phone.replace(/\s+/g, '')}`}
                className="px-5 py-3.5 rounded-2xl text-xs sm:text-sm font-bold bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-750 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 shadow-sm transition flex items-center gap-2 whitespace-nowrap shrink-0"
              >
                <Phone className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
                <span>Call: {DOCTOR_DATA.clinic.phoneFormatted}</span>
              </a>

              <a
                href={DOCTOR_DATA.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3.5 rounded-2xl text-xs sm:text-sm font-bold bg-blue-50 dark:bg-slate-800 hover:bg-blue-100 dark:hover:bg-slate-700 text-[#0A66C2] border border-blue-200 dark:border-slate-700 transition flex items-center gap-2 whitespace-nowrap shrink-0"
              >
                <Linkedin className="w-4 h-4 shrink-0" />
                <span>LinkedIn Profile</span>
              </a>

              <a
                href="#screener"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-teal-700 dark:text-teal-400 hover:text-teal-600 dark:hover:text-teal-300 transition underline underline-offset-4"
              >
                Take Free Lung Screener
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Trust Highlights Strip */}
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {DOCTOR_DATA.stats.map((stat, idx) => (
                <div key={idx} className="space-y-0.5">
                  <div className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs font-bold text-teal-700 dark:text-teal-400">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">
                    {stat.detail}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Doctor Portrait Photo / Placeholder Component */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-sm sm:max-w-md">
              <DoctorPhotoPlaceholder showBadges={true} />
              
              {/* Doctor photo instructions for user reference */}
              <div className="mt-4 p-3 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-center shadow-sm">
                <p className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 shrink-0" />
                  <span>Ready for doctor portrait photo replacement anytime</span>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
