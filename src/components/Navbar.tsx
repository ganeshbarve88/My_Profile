import React from 'react';
import { FileText, Sun, Moon, ShieldCheck, Lock } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useAdmin } from '../context/AdminContext';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const { theme, toggleTheme } = useTheme();
  const { isAdmin, currentUser, setIsEditModalOpen, setIsLoginModalOpen } = useAdmin();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/90 dark:border-slate-800/80 dark:bg-slate-950/90 backdrop-blur-md transition-colors duration-200">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Brand */}
        <a 
          href="#" 
          className="text-base font-bold tracking-tight text-slate-900 dark:text-white hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
        >
          Ganesh Barve
        </a>

        {/* Clean nav links & controls */}
        <nav className="flex items-center gap-3 sm:gap-5 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300">
          <a href="#experience" className="hidden sm:inline-block hover:text-slate-950 dark:hover:text-white transition-colors">
            Experience
          </a>
          <a href="#skills" className="hidden sm:inline-block hover:text-slate-950 dark:hover:text-white transition-colors">
            Skills
          </a>
          <a href="#education" className="hidden sm:inline-block hover:text-slate-950 dark:hover:text-white transition-colors">
            Education
          </a>
          <a href="#certifications" className="hidden sm:inline-block hover:text-slate-950 dark:hover:text-white transition-colors">
            Certifications
          </a>
          <a href="#social" className="hidden sm:inline-block hover:text-slate-950 dark:hover:text-white transition-colors">
            Profiles & Blog
          </a>
          <a href="#contact" className="hover:text-slate-950 dark:hover:text-white transition-colors">
            Contact
          </a>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center rounded-md border border-slate-300 bg-slate-100 p-1.5 text-slate-700 hover:bg-slate-200 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-slate-500 dark:hover:text-white transition-colors cursor-pointer"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? (
              <Sun className="h-4 w-4 text-amber-400" />
            ) : (
              <Moon className="h-4 w-4 text-slate-700" />
            )}
          </button>

          {/* Resume Modal Trigger */}
          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 rounded-md border border-slate-300 bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-800 hover:bg-slate-200 hover:text-slate-950 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-slate-500 dark:hover:text-white transition-colors cursor-pointer"
          >
            <FileText className="h-3.5 w-3.5 text-sky-600 dark:text-sky-400" />
            <span>Resume</span>
          </button>

          {/* Admin Edit Trigger */}
          {isAdmin ? (
            <button
              onClick={() => setIsEditModalOpen(true)}
              className="flex items-center gap-1.5 rounded-md border border-emerald-500/50 bg-emerald-500/10 px-2.5 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-400 hover:bg-emerald-500/20 transition-colors cursor-pointer"
              title={`Logged in as ${currentUser}. Click to edit photo and profile.`}
            >
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Edit</span>
            </button>
          ) : (
            <button
              onClick={() => setIsLoginModalOpen(true)}
              className="flex items-center gap-1 rounded-md border border-slate-200 dark:border-slate-800 p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors cursor-pointer"
              title="Admin Login (Ganesh Barve & Authorized Access)"
            >
              <Lock className="h-3.5 w-3.5" />
            </button>
          )}
        </nav>

      </div>
    </header>
  );
};
