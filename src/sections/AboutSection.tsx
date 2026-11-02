import React from 'react';
import { Award, GraduationCap, CheckCircle2, HeartHandshake, Shield, Sparkles, BookOpen, Linkedin, Activity } from 'lucide-react';
import { DOCTOR_DATA } from '@/data/doctorData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900 text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-200">
      
      {/* Decorative gradient accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-100 text-teal-800 dark:bg-teal-500/10 dark:text-teal-400 dark:border dark:border-teal-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            Specialist Profile & Credentials
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            About {DOCTOR_DATA.name}
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Consultant Pulmonologist & Interventional Specialist committed to accurate diagnostic evaluation, in-clinic lung testing, and patient-centered respiratory care.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Biography & Ethos */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
              {DOCTOR_DATA.aboutText.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Doctor-Conducted PFT Spotlight Card */}
            <div className="p-5 rounded-2xl bg-teal-50 dark:bg-teal-950/40 border-l-4 border-teal-600 dark:border-teal-400 border border-teal-200 dark:border-teal-500/20 shadow-sm flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-teal-600 text-white shrink-0">
                <Activity className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-teal-900 dark:text-teal-300">
                  Doctor-Performed Pulmonary Function Testing (PFT)
                </h4>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  Unlike diagnostics where lung function tests are handled solely by technicians, Dr. Srinija personally oversees your PFT and computerized spirometry maneuvers to verify optimal respiratory effort, test bronchodilator reversibility, and interpret findings on the spot.
                </p>
              </div>
            </div>

            {/* Clinical Philosophy Quote */}
            <div className="p-6 rounded-2xl bg-slate-100 dark:bg-gradient-to-r dark:from-teal-950/60 dark:to-slate-800/80 border-l-4 border-teal-600 dark:border-teal-400 border border-slate-200 dark:border-teal-500/20 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-teal-600/10 text-teal-700 dark:bg-teal-500/20 dark:text-teal-300 shrink-0">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-teal-800 dark:text-teal-300 uppercase tracking-wider mb-1">
                    Clinical Philosophy
                  </h3>
                  <p className="text-slate-800 dark:text-slate-200 text-sm italic">
                    "{DOCTOR_DATA.philosophy}"
                  </p>
                </div>
              </div>
            </div>

            {/* Core Values 4-Pillar Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 shadow-sm">
                <div className="flex items-center gap-2.5 text-teal-800 dark:text-teal-300 font-bold text-sm mb-1">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
                  <span>Precision Allergy Testing</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Standardized CMC Vellore protocols to pinpoint specific inhalant and food allergens accurately.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 shadow-sm">
                <div className="flex items-center gap-2.5 text-teal-800 dark:text-teal-300 font-bold text-sm mb-1">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
                  <span>Advanced Interventions</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Hands-on expertise in flexible video bronchoscopy, pleural drainage, and airway evaluations.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 shadow-sm">
                <div className="flex items-center gap-2.5 text-teal-800 dark:text-teal-300 font-bold text-sm mb-1">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
                  <span>Tailored Asthma Plans</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Step-down medication strategies aiming for zero acute flare-ups and optimal inhaler technique.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 shadow-sm">
                <div className="flex items-center gap-2.5 text-teal-800 dark:text-teal-300 font-bold text-sm mb-1">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
                  <span>Empathetic Consultations</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Focused consultation sessions where patients are listened to, thoroughly examined, and informed.
                </p>
              </div>
            </div>

            {/* LinkedIn Connect Box */}
            <div className="p-4 rounded-2xl bg-blue-50/80 dark:bg-slate-800/70 border border-blue-200 dark:border-slate-700 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#0A66C2] text-white">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                    Professional LinkedIn Profile
                  </h4>
                  <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-300">
                    Connect with Dr. Srinija Kummaraganti for academic updates & professional credentials.
                  </p>
                </div>
              </div>
              <a
                href={DOCTOR_DATA.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl text-xs font-bold bg-[#0A66C2] hover:bg-[#004182] text-white shadow-sm transition whitespace-nowrap shrink-0"
              >
                View LinkedIn
              </a>
            </div>

          </div>

          {/* Right Column: Formal Education & Fellowships Timeline */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Academic Credentials Card */}
            <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700/70 shadow-sm space-y-5">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-200 dark:border-slate-700">
                <div className="p-2.5 rounded-xl bg-teal-100 text-teal-800 dark:bg-teal-500/20 dark:text-teal-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Academic Qualifications</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Medical training & specialist degrees</p>
                </div>
              </div>

              <div className="space-y-4">
                {DOCTOR_DATA.qualifications.map((qual, idx) => (
                  <div key={idx} className="relative pl-6 pb-2 border-l border-teal-500/40 last:border-0 last:pb-0">
                    <div className="absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-teal-600 dark:bg-teal-400 ring-4 ring-white dark:ring-slate-900" />
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">{qual.degree}</h4>
                    <p className="text-xs text-teal-800 dark:text-teal-300 font-semibold">{qual.institution}</p>
                    {qual.note && (
                      <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-0.5">{qual.note}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Special Fellowships Card */}
            <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-800/70 border border-teal-200 dark:border-teal-500/30 shadow-sm space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-200 dark:border-slate-700">
                <div className="p-2.5 rounded-xl bg-cyan-100 text-cyan-800 dark:bg-cyan-500/20 dark:text-cyan-400">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Fellowships & Special Training</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Super-speciality credentials</p>
                </div>
              </div>

              <div className="space-y-3">
                {DOCTOR_DATA.fellowships.map((fellow, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/70 shadow-xs">
                    <span className="text-xs font-bold text-teal-800 dark:text-teal-300 block">{fellow.title}</span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 block mb-1">{fellow.institution}</span>
                    <p className="text-xs text-slate-700 dark:text-slate-300">{fellow.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Clinical Research Publications Card */}
            <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700/70 shadow-sm space-y-3">
              <div className="flex items-center gap-3 pb-2 border-b border-slate-200 dark:border-slate-700">
                <div className="p-2.5 rounded-xl bg-indigo-100 text-indigo-800 dark:bg-indigo-500/20 dark:text-indigo-400">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">Published Clinical Research</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Peer-reviewed medical contributions</p>
                </div>
              </div>

              {DOCTOR_DATA.research.map((res, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/60">
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white mb-0.5">{res.title}</h4>
                  <p className="text-[11px] font-semibold text-teal-700 dark:text-teal-400 mb-1">{res.journal}</p>
                  <p className="text-xs text-slate-600 dark:text-slate-300">{res.description}</p>
                </div>
              ))}
            </div>

            {/* Professional Memberships */}
            <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50">
              <h4 className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                Professional Memberships
              </h4>
              <div className="flex flex-wrap gap-2">
                {DOCTOR_DATA.memberships.map((membership, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-300 border border-slate-200 dark:border-slate-700 shadow-2xs"
                  >
                    {membership}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
