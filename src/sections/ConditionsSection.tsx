import React, { useState } from 'react';
import { ArrowRight, Wind, AlertTriangle, Sparkles } from 'lucide-react';
import { CONDITIONS_DATA } from '@/data/doctorData';

interface ConditionsSectionProps {
  onSelectConditionForBooking: (conditionName: string) => void;
}

export const ConditionsSection: React.FC<ConditionsSectionProps> = ({ onSelectConditionForBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Airway & Asthma',
    'Infections & Pleural',
    'Chronic & Interstitial',
    'Sleep & Lifestyle'
  ];

  const filteredConditions = selectedCategory === 'All'
    ? CONDITIONS_DATA
    : CONDITIONS_DATA.filter(item => item.category === selectedCategory);

  return (
    <section id="conditions" className="py-20 bg-white dark:bg-slate-950 text-slate-900 dark:text-white relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-100 text-teal-800 dark:bg-teal-500/10 dark:text-teal-400 dark:border dark:border-teal-500/20">
            <Wind className="w-3.5 h-3.5" />
            Respiratory & Chest Disorders
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Conditions We Diagnose & Manage
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            From childhood and adult asthma to complex lung fibrosis and chronic cough, early and accurate diagnosis ensures timely intervention and healthy lung longevity.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition ${
                selectedCategory === cat
                  ? 'bg-teal-600 text-white shadow-md shadow-teal-600/30'
                  : 'bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Conditions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredConditions.map((cond) => (
            <div
              key={cond.id}
              className="rounded-3xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-teal-500/40 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md"
            >
              <div className="space-y-4">
                {/* Card Top Badges */}
                <div className="flex items-center justify-between gap-2">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-white dark:bg-slate-800 text-teal-800 dark:text-teal-300 border border-slate-200 dark:border-slate-700 shadow-2xs">
                    {cond.category}
                  </span>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                    cond.severity === 'Urgent'
                      ? 'bg-rose-100 text-rose-800 dark:bg-rose-500/20 dark:text-rose-300 border border-rose-200 dark:border-rose-500/40'
                      : cond.severity === 'Chronic'
                      ? 'bg-amber-100 text-amber-800 dark:bg-amber-500/20 dark:text-amber-300 border border-amber-200 dark:border-amber-500/40'
                      : 'bg-teal-100 text-teal-800 dark:bg-teal-500/20 dark:text-teal-300 border border-teal-200 dark:border-teal-500/40'
                  }`}>
                    {cond.severity}
                  </span>
                </div>

                {/* Title & Short Description */}
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-teal-700 dark:group-hover:text-teal-300 transition">
                    {cond.name}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                    {cond.shortDesc}
                  </p>
                </div>

                {/* Key Symptoms Tag List */}
                <div>
                  <h4 className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                    Common Symptoms:
                  </h4>
                  <ul className="space-y-1 text-xs text-slate-700 dark:text-slate-300">
                    {cond.symptoms.slice(0, 3).map((sym, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-600 dark:bg-teal-400 mt-1.5 shrink-0" />
                        <span>{sym}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Doctor's Approach snippet */}
                <div className="pt-3 border-t border-slate-200 dark:border-slate-800/80">
                  <h4 className="text-[11px] font-bold text-teal-800 dark:text-teal-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-teal-600 dark:text-teal-400" />
                    Dr. Srinija's Treatment Approach:
                  </h4>
                  <p className="text-xs text-slate-700 dark:text-slate-300 line-clamp-3">
                    {cond.treatmentApproach}
                  </p>
                </div>
              </div>

              {/* Card Footer CTA */}
              <div className="pt-5 mt-4 border-t border-slate-200 dark:border-slate-800/60">
                <button
                  onClick={() => onSelectConditionForBooking(cond.name)}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-bold bg-white dark:bg-slate-800 hover:bg-teal-50 dark:hover:bg-teal-500/20 text-teal-800 dark:text-teal-300 border border-slate-200 dark:border-slate-700 transition flex items-center justify-center gap-2 group shadow-xs"
                >
                  <span>Consult Dr. Srinija for {cond.name.split(' ')[0]}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Warning / Emergency guidance box */}
        <div className="mt-14 p-6 rounded-3xl bg-rose-50 dark:bg-gradient-to-r dark:from-rose-950/40 dark:via-slate-900 dark:to-amber-950/30 border border-rose-200 dark:border-rose-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-rose-100 text-rose-800 dark:bg-rose-500/20 dark:text-rose-300 shrink-0">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                When Is It a Pulmonary Emergency?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                Seek immediate emergency medical attention if you experience sudden severe breathlessness at rest, coughing fresh blood, bluish discoloration of lips/fingertips, or severe chest pain.
              </p>
            </div>
          </div>
          <a
            href="tel:108"
            className="px-5 py-3 rounded-xl text-xs font-bold bg-rose-600 hover:bg-rose-500 text-white shrink-0 shadow-md shadow-rose-600/20 transition whitespace-nowrap"
          >
            Emergency Dial 108
          </a>
        </div>

      </div>
    </section>
  );
};
