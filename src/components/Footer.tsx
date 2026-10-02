import React from 'react';
import { PERSONAL_INFO } from '../data/resumeData';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-950 py-10 text-slate-500 text-xs no-print transition-colors duration-200">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <div>
          <p className="text-slate-900 dark:text-slate-300 font-medium">{PERSONAL_INFO.name}</p>
          <p className="mt-0.5 text-slate-500">
            Senior Lead Data Engineer · 2X Google Cloud Certified
          </p>
        </div>

        <div className="flex items-center gap-5">
          <button
            onClick={onOpenResume}
            className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
          >
            View Resume
          </button>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
          >
            <span>Top</span>
            <ArrowUp className="h-3 w-3" />
          </button>
        </div>

      </div>
    </footer>
  );
};
