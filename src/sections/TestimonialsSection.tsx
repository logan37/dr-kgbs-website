import React from 'react';
import { Star, Quote, CheckCircle2, Sparkles } from 'lucide-react';
import { TESTIMONIALS_DATA } from '@/data/doctorData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-slate-900 text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-100 text-teal-800 dark:bg-teal-500/10 dark:text-teal-400 dark:border dark:border-teal-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            Patient Experiences & Outcomes
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Patient Stories & Restored Breathing
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Read how patients with chronic cough, stubborn allergies, sleep apnea, and asthma regained active, healthy lives under Dr. Srinija Kummaraganti's care.
          </p>

          {/* Average Rating Banner */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 text-xs font-semibold text-slate-700 dark:text-slate-300 mt-2 shadow-2xs">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
              ))}
            </div>
            <span className="font-bold text-slate-900 dark:text-white">4.9 / 5.0</span>
            <span className="text-slate-500 dark:text-slate-400">• Over 340+ Patient Reviews</span>
          </div>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS_DATA.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 hover:border-teal-500/40 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Header Stars & Quote Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-500">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-teal-600/20 dark:text-teal-500/20" />
                </div>

                {/* Condition Tag */}
                <span className="inline-block px-2.5 py-1 rounded-full text-xs font-semibold bg-teal-100 text-teal-800 dark:bg-teal-500/10 dark:text-teal-300 border border-teal-200 dark:border-teal-500/20">
                  {item.condition}
                </span>

                {/* Feedback Text */}
                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 italic leading-relaxed">
                  "{item.feedback}"
                </p>
              </div>

              {/* Patient Identity & Verification */}
              <div className="pt-6 mt-4 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">{item.patientName}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{item.location}</p>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-200 dark:border-emerald-500/20">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Consultation</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
