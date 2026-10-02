/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { AdminProvider } from './context/AdminContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CareerJourney } from './components/CareerJourney';
import { TechStackMatrix } from './components/TechStackMatrix';
import { EducationSection } from './components/EducationSection';
import { CertificationsAndAwards } from './components/CertificationsAndAwards';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { AdminLoginModal } from './components/AdminLoginModal';
import { EditProfileModal } from './components/EditProfileModal';

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const handleOpenResume = () => {
    setIsResumeModalOpen(true);
  };

  const handleCloseResume = () => {
    setIsResumeModalOpen(false);
  };

  const handleScrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ThemeProvider>
      <AdminProvider>
        <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100 font-sans antialiased selection:bg-sky-500 selection:text-white transition-colors duration-200">
          {/* Navigation Header with Theme Toggle */}
          <Navbar onOpenResume={handleOpenResume} />

          {/* Main Content Sections */}
          <main>
            {/* Executive Hero with Live Experience Calculator */}
            <Hero 
              onOpenResume={handleOpenResume} 
              onOpenContact={handleScrollToContact} 
            />

            {/* Clean Chronological Timeline */}
            <CareerJourney />

            {/* Technical Skills & Stack */}
            <TechStackMatrix />

            {/* Dedicated Education Section */}
            <EducationSection />

            {/* Certifications & Corporate Honors */}
            <CertificationsAndAwards />

            {/* Direct Contact */}
            <ContactSection />
          </main>

          {/* Clean Footer */}
          <Footer onOpenResume={handleOpenResume} />

          {/* Full Resume View Modal */}
          <ResumeModal 
            isOpen={isResumeModalOpen} 
            onClose={handleCloseResume} 
          />

          {/* Admin Authentication & Profile Editing Modals */}
          <AdminLoginModal />
          <EditProfileModal />
        </div>
      </AdminProvider>
    </ThemeProvider>
  );
}
