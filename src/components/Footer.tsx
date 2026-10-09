import React from 'react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../data/resumeData';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-950 py-12 text-slate-500 text-xs no-print transition-colors duration-200">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-6">
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-slate-900 dark:text-slate-200 font-bold text-sm">{PERSONAL_INFO.name}</p>
            <p className="mt-0.5 text-slate-500">
              Senior Lead Data Engineer · 2X Google Cloud Certified · Bangalore, India
            </p>
          </div>

          <div className="flex items-center gap-5">
            <button
              onClick={onOpenResume}
              className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer font-medium"
            >
              View Resume
            </button>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="h-3 w-3" />
            </button>
          </div>
        </div>

        {/* Quick Social & Blog Links Strip */}
        <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800/60 flex flex-wrap items-center justify-between gap-3 text-slate-400">
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 font-medium text-[11px]">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <p className="text-[11px] text-slate-400 dark:text-slate-500">
            &copy; {new Date().getFullYear()} Ganesh Barve. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};
