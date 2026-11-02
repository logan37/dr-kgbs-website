import React, { useState } from 'react';
import { HelpCircle, CheckCircle, ArrowRight, RotateCcw, AlertTriangle, Calendar, Sparkles } from 'lucide-react';
import { LUNG_SCREENER_QUESTIONS } from '@/data/doctorData';

interface LungHealthScreenerProps {
  onOpenBookingWithNote: (screenerNote: string) => void;
}

export const LungHealthScreener: React.FC<LungHealthScreenerProps> = ({ onOpenBookingWithNote }) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [isFinished, setIsFinished] = useState<boolean>(false);

  const handleSelectOption = (score: number) => {
    const updated = [...selectedAnswers];
    updated[currentStep] = score;
    setSelectedAnswers(updated);

    if (currentStep < LUNG_SCREENER_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setSelectedAnswers([]);
    setIsFinished(false);
  };

  const totalScore = selectedAnswers.reduce((acc, curr) => acc + curr, 0);

  const getAssessmentOutcome = () => {
    if (totalScore <= 2) {
      return {
        level: 'Low Risk / Normal Airway Health',
        badgeColor: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-500/20 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-500/40',
        icon: <CheckCircle className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />,
        recommendation: 'Your symptoms appear mild or temporary (typical of seasonal viral changes). Maintain good hydration, indoor air quality, and monitor your symptoms.',
        actionPrompt: 'If cough persists beyond 2-3 weeks, an objective Spirometry / PFT check is advised.'
      };
    } else if (totalScore <= 6) {
      return {
        level: 'Moderate Respiratory & Allergy Symptoms',
        badgeColor: 'bg-amber-100 text-amber-800 dark:bg-amber-500/20 dark:text-amber-300 border border-amber-200 dark:border-amber-500/40',
        icon: <HelpCircle className="w-8 h-8 text-amber-600 dark:text-amber-400" />,
        recommendation: 'Your symptoms suggest underlying airway inflammation, allergic rhinitis, or early asthma. Prolonged exposure without treatment can lead to recurrent flare-ups.',
        actionPrompt: 'A formal Pulmonary Function Test (PFT / Spirometry) and Allergy Skin Prick assessment with Dr. Srinija Kummaraganti is strongly recommended.'
      };
    } else {
      return {
        level: 'High Risk / Clinical Evaluation Advised',
        badgeColor: 'bg-rose-100 text-rose-800 dark:bg-rose-500/20 dark:text-rose-300 border border-rose-200 dark:border-rose-500/40',
        icon: <AlertTriangle className="w-8 h-8 text-rose-600 dark:text-rose-400" />,
        recommendation: 'You have indicated significant signs of chronic respiratory obstruction, severe asthma, sleep apnea, or persistent lung distress that should not be ignored.',
        actionPrompt: 'We recommend scheduling an in-clinic consultation with Dr. Srinija at TrueMed Clinics promptly for complete diagnostic testing.'
      };
    }
  };

  const outcome = getAssessmentOutcome();

  return (
    <section id="screener" className="py-20 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white relative transition-colors duration-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Screener Header */}
        <div className="text-center mb-10 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-100 text-teal-800 dark:bg-teal-500/10 dark:text-teal-400 dark:border dark:border-teal-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            Interactive Health Screener
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Lung Health & Asthma Screener
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-xl mx-auto">
            Take this confidential 60-second assessment to understand whether your cough, wheezing, or breathing symptoms warrant specialist evaluation and PFT testing.
          </p>
        </div>

        {/* Screener Card Container */}
        <div className="p-6 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-teal-500/30 shadow-xl relative overflow-hidden">
          
          {!isFinished ? (
            <div className="space-y-6">
              
              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-medium text-slate-500 dark:text-slate-400">
                  <span>Question {currentStep + 1} of {LUNG_SCREENER_QUESTIONS.length}</span>
                  <span>{Math.round(((currentStep + 1) / LUNG_SCREENER_QUESTIONS.length) * 100)}% Completed</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-teal-600 to-cyan-600 dark:from-teal-500 dark:to-cyan-500 transition-all duration-300"
                    style={{ width: `${((currentStep + 1) / LUNG_SCREENER_QUESTIONS.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Question Text */}
              <div className="py-4">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white leading-snug">
                  {LUNG_SCREENER_QUESTIONS[currentStep].question}
                </h3>
              </div>

              {/* Options */}
              <div className="space-y-3">
                {LUNG_SCREENER_QUESTIONS[currentStep].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleSelectOption(option.score)}
                    className="w-full text-left p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 hover:bg-teal-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700/80 hover:border-teal-400/50 transition flex items-center justify-between group active:scale-[0.99] shadow-2xs"
                  >
                    <span className="text-sm sm:text-base text-slate-800 dark:text-slate-200 group-hover:text-teal-900 dark:group-hover:text-white font-medium">
                      {option.text}
                    </span>
                    <ArrowRight className="w-4 h-4 text-slate-400 dark:text-slate-500 group-hover:text-teal-600 dark:group-hover:text-teal-400 group-hover:translate-x-1 transition shrink-0" />
                  </button>
                ))}
              </div>

              {/* Back / Navigation Helper */}
              {currentStep > 0 && (
                <div className="pt-2">
                  <button
                    onClick={() => setCurrentStep(currentStep - 1)}
                    className="text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-white underline underline-offset-4"
                  >
                    ← Previous Question
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* Result Assessment View */
            <div className="space-y-6 text-center py-4">
              <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center mx-auto shadow-sm">
                {outcome.icon}
              </div>

              <div>
                <span className={`inline-block px-3.5 py-1 rounded-full text-xs font-bold mb-2 ${outcome.badgeColor}`}>
                  {outcome.level}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                  Assessment Completed
                </h3>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 text-left space-y-3">
                <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                  {outcome.recommendation}
                </p>
                <div className="p-3 rounded-xl bg-teal-50 dark:bg-teal-500/10 border border-teal-200 dark:border-teal-500/20 text-xs text-teal-900 dark:text-teal-300 font-semibold">
                  {outcome.actionPrompt}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                <button
                  onClick={() => onOpenBookingWithNote(`Screener Result: ${outcome.level} (Score: ${totalScore})`)}
                  className="px-6 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 text-white shadow-lg shadow-teal-600/25 transition flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  Book Consultation with Dr. Srinija
                </button>

                <button
                  onClick={handleReset}
                  className="px-5 py-3.5 rounded-xl font-bold text-sm bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 transition flex items-center justify-center gap-2"
                >
                  <RotateCcw className="w-4 h-4" />
                  Retake Screener
                </button>
              </div>

              <p className="text-[11px] text-slate-500">
                * Note: This screener is for educational awareness and does not replace formal clinical consultation or diagnostic spirometry.
              </p>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};
