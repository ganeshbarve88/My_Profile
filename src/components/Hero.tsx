import React, { useState } from 'react';
import { SKILL_CATEGORIES, CERTIFICATIONS, AWARDS } from '../data/resumeData';
import { getExactExperience } from '../utils/experience';
import { useAdmin } from '../context/AdminContext';
import { MapPin, Mail, Phone, FileText, Camera, Edit3 } from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenContact }) => {
  const [imgError, setImgError] = useState(false);
  const { 
    photoUrl, 
    profileData, 
    isAdmin, 
    setIsEditModalOpen, 
    setIsLoginModalOpen 
  } = useAdmin();

  const exactExp = getExactExperience();
  const totalCertsCount = CERTIFICATIONS.length;
  const totalAwardsCount = AWARDS.reduce((acc, award) => acc + (award.count || 1), 0);

  const handleEditPhotoClick = () => {
    if (isAdmin) {
      setIsEditModalOpen(true);
    } else {
      setIsLoginModalOpen(true);
    }
  };

  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 border-b border-slate-200/80 dark:border-slate-800/60 bg-white dark:bg-slate-950 transition-colors duration-200">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse items-center gap-10 md:flex-row md:items-center md:justify-between md:gap-14">
          
          {/* Left Text Intro */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-600 dark:text-sky-400 mb-3 tracking-wide">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
              <span>{profileData.title}</span>
              <span className="text-slate-300 dark:text-slate-600">·</span>
              <span className="text-amber-600 dark:text-amber-400">2X GCP Certified</span>
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl leading-tight">
              {profileData.name}
            </h1>

            <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              {profileData.summary}
            </p>

            {/* Quiet metadata with both phone numbers */}
            <div className="mt-5 flex flex-wrap items-center justify-center md:justify-start gap-y-2 gap-x-4 text-xs text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-sky-600 dark:text-sky-400" />
                <span>{profileData.location}</span>
              </span>
              <span className="text-slate-300 dark:text-slate-700">·</span>
              <a href={`mailto:${profileData.email}`} className="hover:text-slate-900 dark:hover:text-white transition-colors">
                {profileData.email}
              </a>
              <span className="text-slate-300 dark:text-slate-700">·</span>
              <span className="flex items-center gap-1.5">
                <Phone className="h-3.5 w-3.5 text-sky-600 dark:text-sky-400" />
                <a href={`tel:${profileData.phone}`} className="hover:text-slate-900 dark:hover:text-white transition-colors tabular-nums">
                  {profileData.phone}
                </a>
                <span className="text-slate-400 dark:text-slate-600">/</span>
                <a href={`tel:${profileData.secondaryPhone}`} className="hover:text-slate-900 dark:hover:text-white transition-colors tabular-nums">
                  {profileData.secondaryPhone}
                </a>
              </span>
            </div>

            {/* Quick Actions */}
            <div className="mt-8 flex flex-wrap items-center justify-center md:justify-start gap-3">
              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 rounded-lg bg-sky-500 hover:bg-sky-400 dark:bg-sky-500 dark:hover:bg-sky-400 px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-950 transition-colors cursor-pointer shadow-sm"
              >
                <FileText className="h-4 w-4" />
                <span>View Full Resume</span>
              </button>

              <button
                onClick={onOpenContact}
                className="flex items-center gap-2 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-slate-500 dark:hover:text-white px-5 py-2.5 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
              >
                <Mail className="h-4 w-4 text-slate-500 dark:text-slate-400" />
                <span>Get in Touch</span>
              </button>

              {isAdmin && (
                <button
                  onClick={() => setIsEditModalOpen(true)}
                  className="flex items-center gap-1.5 rounded-lg border border-emerald-500/40 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 dark:bg-emerald-500/10 dark:hover:bg-emerald-500/20 dark:text-emerald-300 px-4 py-2.5 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                  title="Edit Profile & Photo"
                >
                  <Edit3 className="h-4 w-4" />
                  <span>Edit Profile</span>
                </button>
              )}
            </div>

            {/* Key Executive Metrics */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 border-t border-slate-200 dark:border-slate-800/80 pt-6 max-w-xl mx-auto md:mx-0">
              <div title={`Exact career experience from March 2016 to today: ${exactExp.formattedText}`}>
                <p className="font-mono text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tabular-nums">
                  {exactExp.displayDecimalStat}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Experience <span className="font-mono text-[10px] text-sky-600 dark:text-sky-400">({exactExp.displayStat})</span>
                </p>
              </div>

              <div>
                <p className="font-mono text-xl sm:text-2xl font-bold text-sky-600 dark:text-sky-400 tabular-nums">
                  23+
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Technologies Worked
                </p>
              </div>

              <div>
                <p className="font-mono text-xl sm:text-2xl font-bold text-amber-600 dark:text-amber-400 tabular-nums">
                  {totalCertsCount}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Certifications
                </p>
              </div>

              <div>
                <p className="font-mono text-xl sm:text-2xl font-bold text-emerald-600 dark:text-emerald-400 tabular-nums">
                  {totalAwardsCount}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Awards Received
                </p>
              </div>
            </div>
          </div>

          {/* Right Photo Presentation */}
          <div className="w-48 sm:w-56 md:w-64 shrink-0">
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 shadow-xl group">
              {!imgError ? (
                <img
                  src={photoUrl}
                  alt={profileData.name}
                  className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-102"
                  referrerPolicy="no-referrer"
                  onError={() => {
                    setImgError(true);
                  }}
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center bg-slate-100 dark:bg-slate-900 p-4 text-center">
                  <div className="h-24 w-24 rounded-full border-2 border-sky-400/30 overflow-hidden mb-2">
                    <svg className="h-full w-full" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="80" cy="80" r="80" fill="#0f233f"/>
                      <path d="M15 160C15 125 45 110 80 110C115 110 145 125 145 160H15Z" fill="#111827"/>
                      <path d="M48 160L72 112L80 135L88 112L112 160H48Z" fill="#090d16"/>
                      <path d="M68 112L80 138L92 112H68Z" fill="#f8fafc"/>
                      <path d="M77 122L80 160L83 122L80 119L77 122Z" fill="#020617"/>
                      <path d="M72 90H88V115H72V90Z" fill="#c48866"/>
                      <path d="M56 68C56 90 66 104 80 104C94 104 104 90 104 68C104 50 94 38 80 38C66 38 56 50 56 68Z" fill="#d99875"/>
                      <path d="M52 56C50 40 60 26 80 26C100 26 110 40 108 56C104 46 96 36 80 36C64 36 56 46 52 56Z" fill="#18181b"/>
                    </svg>
                  </div>
                  <p className="text-xs font-semibold text-slate-800 dark:text-white">{profileData.name}</p>
                </div>
              )}

              {/* Edit Photo Overlay Button */}
              <button
                onClick={handleEditPhotoClick}
                title={isAdmin ? "Edit / Update Photo" : "Admin Login to Change Photo"}
                className="absolute bottom-2 right-2 flex items-center gap-1 rounded-lg bg-slate-950/75 hover:bg-slate-950 text-white px-2.5 py-1 text-[11px] font-medium backdrop-blur-md transition-all shadow-md cursor-pointer border border-white/20"
              >
                <Camera className="h-3 w-3 text-sky-400" />
                <span>{isAdmin ? "Change Photo" : "Edit Photo"}</span>
              </button>
            </div>
            <p className="mt-2 text-center text-[11px] text-slate-500">
              Senior Lead @ ANZ Bank
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
