import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Calendar, 
  Send, 
  ExternalLink, 
  CheckCircle2, 
  MessageCircle,
  Building,
  Navigation,
  Linkedin
} from 'lucide-react';
import { DOCTOR_DATA } from '@/data/doctorData';

export const ContactSection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Pulmonary Function Testing (PFT/Spirometry)',
    preferredTime: 'Morning (10:00 AM - 01:30 PM)',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handleWhatsAppSend = () => {
    const text = encodeURIComponent(
      `Hello TrueMed Clinics,\n\nI want to schedule an appointment with Dr. Srinija Kummaraganti:\n• Name: ${formData.name || 'Patient'}\n• Phone: ${formData.phone}\n• Service: ${formData.service}\n• Timing: ${formData.preferredTime}\n• Note: ${formData.message || 'General consultation'}`
    );
    window.open(`https://wa.me/918008812345?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-900 text-slate-900 dark:text-white relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-100 text-teal-800 dark:bg-teal-500/10 dark:text-teal-400 dark:border dark:border-teal-500/20">
            <Building className="w-3.5 h-3.5" />
            Clinic Location & Hours
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Consultation Hours & Clinic Address
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Visit Dr. Srinija Kummaraganti at TrueMed Diagnostics & Clinics in Kondapur, Hyderabad. Walk-ins and prior bookings welcome.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Clinic Location, Timings, Map */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Address Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-teal-100 text-teal-800 dark:bg-teal-500/20 dark:text-teal-400 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                    {DOCTOR_DATA.clinic.name}
                  </h3>
                  <p className="text-xs font-bold text-teal-800 dark:text-teal-400 mb-2">
                    {DOCTOR_DATA.clinic.center}
                  </p>
                  <address className="not-italic text-sm text-slate-700 dark:text-slate-300 space-y-1">
                    <p>{DOCTOR_DATA.clinic.addressLine1}</p>
                    <p>{DOCTOR_DATA.clinic.addressLine2}</p>
                    <p>{DOCTOR_DATA.clinic.city} – {DOCTOR_DATA.clinic.pincode}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">Landmark: {DOCTOR_DATA.clinic.landmark}</p>
                  </address>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200 dark:border-slate-800/80 flex flex-wrap gap-3">
                <a
                  href={DOCTOR_DATA.clinic.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-teal-50 hover:bg-teal-100 dark:bg-teal-500/10 dark:hover:bg-teal-500/20 text-teal-900 dark:text-teal-300 border border-teal-200 dark:border-teal-500/30 transition whitespace-nowrap"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Google Maps Directions</span>
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>

                <a
                  href={`tel:${DOCTOR_DATA.clinic.phone.replace(/\s+/g, '')}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 transition whitespace-nowrap"
                >
                  <Phone className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 shrink-0" />
                  <span>{DOCTOR_DATA.clinic.phoneFormatted}</span>
                </a>

                <a
                  href={DOCTOR_DATA.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-blue-50 dark:bg-slate-800 hover:bg-blue-100 text-[#0A66C2] border border-blue-200 dark:border-slate-700 transition whitespace-nowrap"
                >
                  <Linkedin className="w-3.5 h-3.5 shrink-0" />
                  <span>LinkedIn Profile</span>
                </a>
              </div>
            </div>

            {/* Timings Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
                <div className="p-2.5 rounded-xl bg-cyan-100 text-cyan-800 dark:bg-cyan-500/20 dark:text-cyan-400">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Consultation Hours</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Regular clinic timings at Kondapur</p>
                </div>
              </div>

              <div className="space-y-4 text-sm">
                {DOCTOR_DATA.clinic.timings.map((time, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 space-y-1 shadow-2xs">
                    <span className="font-bold text-teal-800 dark:text-teal-300 text-xs uppercase tracking-wider block">
                      {time.days}
                    </span>
                    <div className="flex flex-col sm:flex-row sm:justify-between text-xs text-slate-700 dark:text-slate-200 gap-1 font-medium">
                      <span>• Morning: {time.morning}</span>
                      <span>• Evening: {time.evening}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp Quick Connect Banner */}
            <div className="p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-500/30 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-600 text-white shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">Instant WhatsApp Desk</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300">Message for slot confirmation & PFT questions</p>
                </div>
              </div>
              <button
                onClick={handleWhatsAppSend}
                className="px-4 py-2.5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-600/30 transition shrink-0 whitespace-nowrap"
              >
                Chat on WhatsApp
              </button>
            </div>

          </div>

          {/* Right Column: Interactive Appointment Booking Form */}
          <div className="lg:col-span-6">
            <div className="p-6 sm:p-10 rounded-3xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-teal-500/30 shadow-xl space-y-6">
              
              {!formSubmitted ? (
                <>
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-100 text-teal-800 dark:bg-teal-500/10 dark:text-teal-400 dark:border dark:border-teal-500/20 mb-2">
                      <Calendar className="w-3.5 h-3.5" />
                      Direct Booking
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      Request an Appointment with Dr. Srinija
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                      Reserve a priority slot for consultation, PFT spirometry, or allergy testing.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Patient Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ananya Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-2xs"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Contact Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-2xs"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                          Service Needed
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-3 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-2xs"
                        >
                          <option value="Pulmonary Function Testing (PFT/Spirometry)">PFT / Spirometry (By Dr. Srinija)</option>
                          <option value="Asthma & Allergy Evaluation">Asthma & Allergy Evaluation</option>
                          <option value="General Pulmonary Consultation">General Pulmonary Consultation</option>
                          <option value="Chronic Cough Assessment">Chronic Cough Assessment (&gt; 3 Weeks)</option>
                          <option value="Sleep Apnea Evaluation">Sleep Apnea & Snoring Study</option>
                          <option value="COPD & Smoker Lung Review">COPD / Smoker Lung Review</option>
                          <option value="Second Opinion / Bronchoscopy">Second Opinion / Bronchoscopy</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                          Preferred Slot
                        </label>
                        <select
                          value={formData.preferredTime}
                          onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                          className="w-full px-3 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-2xs"
                        >
                          <option value="Morning (10:00 AM - 01:30 PM)">Morning (10:00 AM - 1:30 PM)</option>
                          <option value="Evening (05:30 PM - 08:30 PM)">Evening (5:30 PM - 8:30 PM)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Brief Note on Symptoms (Optional)
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Mention cough duration, wheezing, allergy triggers, or current inhalers..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-2xs"
                      />
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row gap-3">
                      <button
                        type="submit"
                        className="flex-1 py-3 px-5 rounded-xl font-bold text-sm bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 text-white shadow-lg shadow-teal-600/25 transition flex items-center justify-center gap-2"
                      >
                        <Send className="w-4 h-4" />
                        Submit Appointment Request
                      </button>
                    </div>

                    <p className="text-[11px] text-center text-slate-500 dark:text-slate-400">
                      Your medical information is held in strict patient-doctor confidentiality.
                    </p>
                  </form>
                </>
              ) : (
                /* Confirmation Screen */
                <div className="text-center py-8 space-y-5">
                  <div className="w-16 h-16 rounded-full bg-teal-100 text-teal-800 dark:bg-teal-500/20 dark:text-teal-400 border border-teal-200 dark:border-teal-500/40 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Booking Request Sent!</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">
                      Thank you, <span className="font-bold text-slate-900 dark:text-white">{formData.name}</span>. Our desk at TrueMed Clinics will call you shortly on <span className="font-bold text-slate-900 dark:text-white">{formData.phone}</span>.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                    <button
                      onClick={handleWhatsAppSend}
                      className="px-5 py-3 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-600/30 transition flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Confirm Faster on WhatsApp
                    </button>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="px-5 py-3 rounded-xl font-semibold text-sm bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-750 text-slate-800 dark:text-slate-300"
                    >
                      Book Another
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
