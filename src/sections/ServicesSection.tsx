import React, { useState } from 'react';
import { 
  Activity, 
  ShieldAlert, 
  Stethoscope, 
  Moon, 
  HeartPulse, 
  Layers, 
  CheckCircle2, 
  Clock, 
  Info,
  Calendar,
  UserCheck
} from 'lucide-react';
import { SERVICES_DATA, type ServiceItem } from '@/data/doctorData';

interface ServicesSectionProps {
  onBookService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onBookService }) => {
  const [activeTab, setActiveTab] = useState<'All' | 'Diagnostic' | 'Interventional' | 'Therapeutic' | 'Specialized Clinic'>('All');
  const [selectedServiceForDetails, setSelectedServiceForDetails] = useState<ServiceItem | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Activity':
        return <Activity className="w-6 h-6 text-teal-600 dark:text-teal-400" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-6 h-6 text-amber-600 dark:text-amber-400" />;
      case 'Stethoscope':
        return <Stethoscope className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />;
      case 'Moon':
        return <Moon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />;
      case 'HeartPulse':
        return <HeartPulse className="w-6 h-6 text-rose-600 dark:text-rose-400" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      default:
        return <Activity className="w-6 h-6 text-teal-600 dark:text-teal-400" />;
    }
  };

  const filteredServices = activeTab === 'All'
    ? SERVICES_DATA
    : SERVICES_DATA.filter(s => s.category === activeTab);

  return (
    <section id="services" className="py-20 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-100 text-teal-800 dark:bg-cyan-500/10 dark:text-cyan-400 dark:border dark:border-cyan-500/20">
            <Stethoscope className="w-3.5 h-3.5" />
            Clinical Expertise & Advanced Diagnostics
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Specialized Pulmonology Services & PFT
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Featuring in-clinic Pulmonary Function Testing (PFT/Spirometry) conducted directly by Dr. Srinija Kummaraganti, along with allergy testing and interventional bronchoscopy at TrueMed Diagnostics & Clinics.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {(['All', 'Diagnostic', 'Interventional', 'Therapeutic', 'Specialized Clinic'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-md shadow-teal-600/25'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className={`rounded-3xl bg-white dark:bg-slate-950/70 border ${
                service.id === 'pft-spirometry'
                  ? 'border-teal-500/60 ring-2 ring-teal-500/20 shadow-lg'
                  : 'border-slate-200 dark:border-slate-800 hover:border-teal-500/40 shadow-sm hover:shadow-md'
              } p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 group`}
            >
              <div className="space-y-4">
                {/* Header Icon & Category Badge */}
                <div className="flex items-center justify-between gap-2">
                  <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700/70 group-hover:scale-110 transition duration-300 shadow-xs">
                    {getServiceIcon(service.iconName)}
                  </div>
                  
                  <div className="flex items-center gap-1.5 flex-wrap justify-end">
                    {service.isDoctorPerformed && (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-teal-100 text-teal-800 dark:bg-teal-500/20 dark:text-teal-300 border border-teal-200 dark:border-teal-500/30 flex items-center gap-1">
                        <UserCheck className="w-3 h-3" />
                        By Dr. Srinija
                      </span>
                    )}
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                      {service.category}
                    </span>
                  </div>
                </div>

                {/* Service Title */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-teal-700 dark:group-hover:text-teal-300 transition">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Key Benefits */}
                <div className="pt-2">
                  <h4 className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                    Key Highlights:
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                    {service.keyBenefits.slice(0, 3).map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Procedure Time Pill */}
                {service.procedureTime && (
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                    <Clock className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                    <span>Duration: {service.procedureTime}</span>
                  </div>
                )}
              </div>

              {/* Bottom Actions */}
              <div className="pt-6 mt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-3">
                <button
                  onClick={() => setSelectedServiceForDetails(service)}
                  className="flex-1 py-2.5 px-3 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition flex items-center justify-center gap-1.5"
                >
                  <Info className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                  <span>Learn More</span>
                </button>

                <button
                  onClick={() => onBookService(service.title)}
                  className="flex-1 py-2.5 px-3 rounded-xl text-xs font-bold bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 text-white shadow-md shadow-teal-600/20 transition flex items-center justify-center gap-1.5 whitespace-nowrap"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Test</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Detailed Service Dialog / Modal */}
      {selectedServiceForDetails && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-teal-500/30 rounded-3xl shadow-2xl p-6 md:p-8 overflow-y-auto max-h-[90vh] text-slate-900 dark:text-white">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-teal-100 text-teal-800 dark:bg-teal-500/10 dark:text-teal-400 dark:border dark:border-teal-500/20 mb-2 inline-block">
                  {selectedServiceForDetails.category}
                </span>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {selectedServiceForDetails.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedServiceForDetails(null)}
                className="p-2 rounded-full text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              >
                ✕
              </button>
            </div>

            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
              {selectedServiceForDetails.fullDesc}
            </p>

            <div className="space-y-4 mb-6">
              <h4 className="text-xs font-bold text-teal-800 dark:text-teal-300 uppercase tracking-wider">
                Full Clinical Advantages:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedServiceForDetails.keyBenefits.map((benefit, i) => (
                  <div key={i} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 text-xs text-slate-800 dark:text-slate-200 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2 mb-6 p-4 rounded-2xl bg-slate-100 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
              <h4 className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                Recommended For Patients Experiencing:
              </h4>
              <div className="flex flex-wrap gap-2 pt-1">
                {selectedServiceForDetails.recommendedFor.map((item, i) => (
                  <span key={i} className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white dark:bg-slate-800 text-teal-800 dark:text-teal-300 border border-slate-200 dark:border-slate-700 shadow-2xs">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  const title = selectedServiceForDetails.title;
                  setSelectedServiceForDetails(null);
                  onBookService(title);
                }}
                className="flex-1 py-3 px-5 rounded-xl text-sm font-bold bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 text-white shadow-lg shadow-teal-600/25"
              >
                Schedule {selectedServiceForDetails.title}
              </button>
              <button
                onClick={() => setSelectedServiceForDetails(null)}
                className="py-3 px-5 rounded-xl text-sm font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
