import React, { useState } from 'react';
import { X, Calendar, Clock, Phone, User, MessageSquare, CheckCircle, Send, Sparkles } from 'lucide-react';
import { DOCTOR_DATA } from '@/data/doctorData';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  defaultService = 'General Pulmonary Consultation'
}) => {
  const [patientName, setPatientName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedService, setSelectedService] = useState(defaultService);
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredSlot, setPreferredSlot] = useState('Morning (10:00 AM - 01:30 PM)');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      `Hello Dr. Srinija Kummaraganti's Clinic (TrueMed Kondapur),\n\nI would like to book an appointment with Dr. Srinija:\n• Patient Name: ${patientName || 'Patient'}\n• Phone: ${phoneNumber}\n• Service: ${selectedService}\n• Preferred Date: ${preferredDate || 'Earliest available'}\n• Preferred Slot: ${preferredSlot}\n• Symptoms / Note: ${notes || 'None'}\n\nPlease confirm availability. Thank you!`
    );
    window.open(`https://wa.me/918008812345?text=${text}`, '_blank');
  };

  const resetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-teal-500/30 rounded-3xl shadow-2xl overflow-hidden p-6 md:p-8 text-slate-900 dark:text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={resetAndClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-100 text-teal-800 dark:bg-teal-500/10 dark:text-teal-400 dark:border dark:border-teal-500/20 mb-2">
                <Sparkles className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                TrueMed Clinics Kondapur
              </span>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                Book Consultation with Dr. Srinija
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                Fill in your details for prompt scheduling or direct WhatsApp confirmation.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Kumar"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  Consultation / Service Type
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  <option value="Pulmonary Function Testing (PFT/Spirometry) - By Dr. Srinija">Pulmonary Function Testing (PFT/Spirometry) - By Dr. Srinija</option>
                  <option value="Asthma & Allergy Evaluation">Asthma & Allergy Evaluation (Skin Prick Test)</option>
                  <option value="General Pulmonary Consultation">General Pulmonary Consultation</option>
                  <option value="Chronic Cough Assessment">Chronic Cough Assessment (&gt; 3 Weeks)</option>
                  <option value="COPD & Smoker Lung Screening">COPD & Smoker's Lung Screening</option>
                  <option value="Sleep Apnea & Snoring Study">Sleep Apnea & Snoring Study</option>
                  <option value="Bronchoscopy / Interventional Opinion">Bronchoscopy / Interventional Second Opinion</option>
                  <option value="Post-COVID / ILD Review">Post-COVID / ILD Review</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                  Preferred Time Slot
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setPreferredSlot('Morning (10:00 AM - 01:30 PM)')}
                    className={`px-3 py-2 rounded-xl text-xs font-semibold border text-left transition ${
                      preferredSlot.includes('Morning')
                        ? 'bg-teal-50 dark:bg-teal-500/20 border-teal-600 dark:border-teal-500 text-teal-900 dark:text-teal-300'
                        : 'bg-slate-50 dark:bg-slate-800/60 border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-slate-400'
                    }`}
                  >
                    Morning (10 AM - 1:30 PM)
                  </button>
                  <button
                    type="button"
                    onClick={() => setPreferredSlot('Evening (05:30 PM - 08:30 PM)')}
                    className={`px-3 py-2 rounded-xl text-xs font-semibold border text-left transition ${
                      preferredSlot.includes('Evening')
                        ? 'bg-teal-50 dark:bg-teal-500/20 border-teal-600 dark:border-teal-500 text-teal-900 dark:text-teal-300'
                        : 'bg-slate-50 dark:bg-slate-800/60 border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-slate-400'
                    }`}
                  >
                    Evening (5:30 PM - 8:30 PM)
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5 flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                  Current Symptoms / Previous Diagnosis (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Nighttime wheezing, dry cough for 3 weeks, PFT inquiry..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 py-3 px-5 rounded-xl font-bold text-sm bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 text-white shadow-lg shadow-teal-600/25 transition flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Confirm Request
                </button>
                <button
                  type="button"
                  onClick={handleWhatsAppRedirect}
                  className="py-3 px-5 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/25 transition flex items-center justify-center gap-2"
                >
                  Book via WhatsApp
                </button>
              </div>

              <p className="text-[11px] text-center text-slate-500 dark:text-slate-400">
                TrueMed Clinics, Plot 141, Madhava Hills, Kondapur, Hyderabad
              </p>
            </form>
          </div>
        ) : (
          /* Confirmation Screen */
          <div className="text-center py-6 space-y-5">
            <div className="w-16 h-16 rounded-full bg-teal-100 text-teal-800 dark:bg-teal-500/20 dark:text-teal-400 border border-teal-200 dark:border-teal-500/40 flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Appointment Request Received!</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 max-w-sm mx-auto">
                Thank you, <span className="font-bold text-slate-900 dark:text-white">{patientName}</span>. Our clinic care coordinator will call you back on <span className="font-bold text-slate-900 dark:text-white">{phoneNumber}</span> to confirm your slot.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-left text-xs space-y-1.5 text-slate-700 dark:text-slate-300">
              <p><span className="text-slate-500 dark:text-slate-400">Doctor:</span> {DOCTOR_DATA.name}</p>
              <p><span className="text-slate-500 dark:text-slate-400">Service:</span> {selectedService}</p>
              <p><span className="text-slate-500 dark:text-slate-400">Slot:</span> {preferredSlot}</p>
              <p><span className="text-slate-500 dark:text-slate-400">Location:</span> {DOCTOR_DATA.clinic.name}, Kondapur</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="button"
                onClick={handleWhatsAppRedirect}
                className="flex-1 py-3 px-4 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center gap-2"
              >
                Send to WhatsApp Desk
              </button>
              <button
                type="button"
                onClick={resetAndClose}
                className="py-3 px-5 rounded-xl font-semibold text-sm bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-white"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
