import React from 'react';
import { FileText, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/90 dark:border-slate-800/80 dark:bg-slate-950/90 backdrop-blur-md transition-colors duration-200">
      <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Brand */}
        <a 
          href="#" 
          className="text-base font-bold tracking-tight text-slate-900 dark:text-white hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
        >
          Ganesh Barve
        </a>

        {/* Clean nav links & controls */}
        <nav className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300">
          <a href="#experience" className="hover:text-slate-950 dark:hover:text-white transition-colors">
            Experience
          </a>
          <a href="#skills" className="hover:text-slate-950 dark:hover:text-white transition-colors">
            Skills
          </a>
          <a href="#education" className="hover:text-slate-950 dark:hover:text-white transition-colors">
            Education
          </a>
          <a href="#certifications" className="hover:text-slate-950 dark:hover:text-white transition-colors">
            Certifications
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
        </nav>

      </div>
    </header>
  );
};
