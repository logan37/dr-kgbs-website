import React, { useState } from 'react';
import { Stethoscope, Award, CheckCircle2, Sparkles, User } from 'lucide-react';
import { DOCTOR_DATA } from '@/data/doctorData';

interface DoctorPhotoPlaceholderProps {
  imageSrc?: string;
  className?: string;
  showBadges?: boolean;
  alt?: string;
}

export const DoctorPhotoPlaceholder: React.FC<DoctorPhotoPlaceholderProps> = ({
  imageSrc,
  className = '',
  showBadges = true,
  alt = DOCTOR_DATA.name
}) => {
  const [imageError, setImageError] = useState(false);

  // If a valid imageSrc is passed and hasn't errored out, render the real photo
  const hasRealPhoto = Boolean(imageSrc && !imageError);

  return (
    <div className={`relative group ${className}`}>
      {/* Outer ambient glow effect */}
      <div className="absolute -inset-2 bg-gradient-to-tr from-teal-500/20 via-cyan-500/25 to-blue-600/20 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition duration-700 pointer-events-none" />

      {/* Main portrait container */}
      <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-950 border-2 border-teal-500/30 shadow-2xl flex flex-col justify-between">
        
        {hasRealPhoto ? (
          <img
            src={imageSrc}
            alt={alt}
            onError={() => setImageError(true)}
            className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-105"
          />
        ) : (
          /* SVG / Stylized Medical Illustration Placeholder */
          <div className="relative w-full h-full flex flex-col justify-between p-6">
            {/* Top status banner */}
            <div className="flex items-center justify-between z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/10 border border-teal-400/30 text-teal-300 backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-teal-400 animate-pulse" />
                Specialist Profile
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-slate-800/80 text-slate-300 border border-slate-700/60 backdrop-blur-md">
                Photo Update Soon
              </span>
            </div>

            {/* Central Artistic Doctor Silhouette & Iconography */}
            <div className="relative my-auto flex flex-col items-center justify-center text-center px-4">
              {/* Outer decorative breathing ring */}
              <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full flex items-center justify-center bg-gradient-to-tr from-teal-500/20 to-cyan-500/10 border-2 border-dashed border-teal-400/40 animate-soft-pulse">
                <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-slate-900/90 border border-teal-500/30 flex items-center justify-center shadow-inner">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-teal-600 to-cyan-700 flex items-center justify-center shadow-lg">
                    <User className="w-12 h-12 md:w-14 md:h-14 text-white/90" />
                  </div>
                </div>
                
                {/* Floating Stethoscope Icon */}
                <div className="absolute -bottom-1 -right-1 p-2.5 rounded-full bg-teal-600 text-white shadow-lg border-2 border-slate-900">
                  <Stethoscope className="w-5 h-5" />
                </div>
              </div>

              {/* Title inside card */}
              <div className="mt-5 space-y-1">
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                  {DOCTOR_DATA.name}
                </h3>
                <p className="text-xs md:text-sm text-teal-400 font-medium">
                  {DOCTOR_DATA.degrees}
                </p>
                <p className="text-xs text-slate-400 max-w-xs mx-auto">
                  Consultant Pulmonologist & Certified Allergy-Asthma Specialist
                </p>
              </div>
            </div>

            {/* Bottom mini credential badge */}
            <div className="relative z-10 pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-300">
              <span className="flex items-center gap-1.5 text-teal-300 font-medium">
                <Award className="w-4 h-4 text-teal-400" />
                CMC Vellore Trained
              </span>
              <span className="flex items-center gap-1 text-slate-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Verified Pulmonologist
              </span>
            </div>
          </div>
        )}

        {/* Floating Trust Pills when showBadges is true */}
        {showBadges && (
          <>
            {/* Left Floating Badge - Experience */}
            <div className="absolute -left-3 md:-left-6 top-1/4 bg-slate-900/95 backdrop-blur-md border border-teal-500/30 shadow-xl rounded-2xl p-3 flex items-center gap-3 animate-bounce [animation-duration:5s]">
              <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center font-bold text-lg">
                8+
              </div>
              <div className="text-left pr-2">
                <p className="text-xs font-semibold text-white">Years Clinical</p>
                <p className="text-[10px] text-slate-400">Respiratory Care</p>
              </div>
            </div>

            {/* Right Floating Badge - Procedures */}
            <div className="absolute -right-3 md:-right-6 bottom-16 bg-slate-900/95 backdrop-blur-md border border-cyan-500/30 shadow-xl rounded-2xl p-3 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center">
                <Stethoscope className="w-5 h-5" />
              </div>
              <div className="text-left pr-2">
                <p className="text-xs font-semibold text-white">1,500+ Procedures</p>
                <p className="text-[10px] text-slate-400">Bronchoscopy & PFT</p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

