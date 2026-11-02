import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/sections/HeroSection';
import { AboutSection } from '@/sections/AboutSection';
import { ConditionsSection } from '@/sections/ConditionsSection';
import { ServicesSection } from '@/sections/ServicesSection';
import { LungHealthScreener } from '@/sections/LungHealthScreener';
import { TestimonialsSection } from '@/sections/TestimonialsSection';
import { FaqSection } from '@/sections/FaqSection';
import { ContactSection } from '@/sections/ContactSection';
import { Footer } from '@/components/Footer';
import { AppointmentModal } from '@/components/AppointmentModal';

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState('General Pulmonary Consultation');

  const handleOpenBooking = (service?: string) => {
    if (service) {
      setSelectedServiceForBooking(service);
    } else {
      setSelectedServiceForBooking('General Pulmonary Consultation');
    }
    setIsBookingOpen(true);
  };

  const handleConditionSelect = (conditionName: string) => {
    setSelectedServiceForBooking(`Consultation for ${conditionName}`);
    setIsBookingOpen(true);
  };

  const handleScreenerBooking = (screenerNote: string) => {
    setSelectedServiceForBooking(`Screener Follow-up: ${screenerNote}`);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans selection:bg-teal-600 selection:text-white transition-colors duration-200">
      {/* Sticky Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection onOpenBooking={() => handleOpenBooking()} />

        {/* About Doctor Section */}
        <AboutSection />

        {/* Conditions Diagnosed & Treated */}
        <ConditionsSection onSelectConditionForBooking={handleConditionSelect} />

        {/* Specialized Procedures & Services */}
        <ServicesSection onBookService={(service) => handleOpenBooking(service)} />

        {/* Interactive Lung Health Screener */}
        <LungHealthScreener onOpenBookingWithNote={handleScreenerBooking} />

        {/* Patient Testimonials & Outcomes */}
        <TestimonialsSection />

        {/* Frequently Asked Questions */}
        <FaqSection />

        {/* Clinic Location, Consultation Hours & Contact */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Appointment Modal */}
      <AppointmentModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        defaultService={selectedServiceForBooking}
      />
    </div>
  );
}
