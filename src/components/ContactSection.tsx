import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/resumeData';
import { Mail, Phone, MapPin, Check, Copy } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-16 md:py-20 bg-white dark:bg-slate-950 transition-colors duration-200">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        
        <p className="text-xs font-semibold text-sky-600 dark:text-sky-400 uppercase tracking-wider">Contact</p>
        <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Let&apos;s Connect</h2>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto">
          Open to Senior Lead and Principal Data Engineering roles, enterprise cloud migrations, and technical advisory.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="flex items-center gap-2 rounded-lg bg-sky-500 hover:bg-sky-400 px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-950 transition-colors shadow-sm"
          >
            <Mail className="h-4 w-4" />
            <span>Send Email</span>
          </a>

          <button
            onClick={handleCopyEmail}
            className="flex items-center gap-2 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-slate-500 dark:hover:text-white px-4 py-2.5 text-xs sm:text-sm font-medium transition-colors cursor-pointer shadow-xs"
          >
            {copiedEmail ? <Check className="h-4 w-4 text-emerald-600 dark:text-emerald-400" /> : <Copy className="h-4 w-4 text-slate-500 dark:text-slate-400" />}
            <span>{copiedEmail ? 'Email Copied' : PERSONAL_INFO.email}</span>
          </button>

          <a
            href={`tel:${PERSONAL_INFO.phone}`}
            className="flex items-center gap-2 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-300 dark:hover:text-white px-4 py-2.5 text-xs sm:text-sm transition-colors tabular-nums shadow-xs"
          >
            <Phone className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
            <span>{PERSONAL_INFO.phone}</span>
          </a>

          <a
            href={`tel:${PERSONAL_INFO.secondaryPhone}`}
            className="flex items-center gap-2 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-300 dark:hover:text-white px-4 py-2.5 text-xs sm:text-sm transition-colors tabular-nums shadow-xs"
          >
            <Phone className="h-4 w-4 text-sky-600 dark:text-sky-400" />
            <span>{PERSONAL_INFO.secondaryPhone}</span>
          </a>
        </div>

        <p className="mt-6 text-xs text-slate-500 dark:text-slate-400 flex items-center justify-center gap-1.5">
          <MapPin className="h-3.5 w-3.5 text-slate-400 dark:text-slate-500" />
          <span>Based in {PERSONAL_INFO.location}</span>
        </p>

      </div>
    </section>
  );
};
