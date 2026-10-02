import React from 'react';
import { CERTIFICATIONS, AWARDS } from '../data/resumeData';
import { Cloud, Sparkles, Award, GraduationCap, CheckCircle2 } from 'lucide-react';

export const CertificationsAndAwards: React.FC = () => {
  const getCertIcon = (type: string) => {
    switch (type) {
      case 'gcp':
        return <Cloud className="h-4 w-4 text-sky-600 dark:text-sky-400" />;
      case 'genai':
        return <Sparkles className="h-4 w-4 text-amber-600 dark:text-amber-400" />;
      case 'salesforce':
        return <CheckCircle2 className="h-4 w-4 text-blue-600 dark:text-blue-400" />;
      case 'degree':
        return <GraduationCap className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />;
      default:
        return <CheckCircle2 className="h-4 w-4 text-sky-600 dark:text-sky-400" />;
    }
  };

  return (
    <section id="certifications" className="py-16 md:py-20 border-b border-slate-200/80 dark:border-slate-800/60 bg-white dark:bg-slate-950 transition-colors duration-200">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        <div className="mb-10">
          <p className="text-xs font-semibold text-sky-600 dark:text-sky-400 uppercase tracking-wider">Recognition</p>
          <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Certifications & Honors</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Certifications List */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4">
              Professional Certifications
            </h3>

            <div className="space-y-3">
              {CERTIFICATIONS.map((cert, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50/70 dark:border-slate-800 dark:bg-slate-900/40 p-3.5"
                >
                  <div className="mt-0.5 rounded bg-white dark:bg-slate-800 p-1.5 shrink-0 shadow-xs border border-slate-200/60 dark:border-transparent">
                    {getCertIcon(cert.iconType)}
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-sky-600 dark:text-sky-400 font-mono mt-0.5">
                      {cert.validity} · <span className="text-slate-500 dark:text-slate-400 font-sans">{cert.issuer}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Awards List */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4">
              Awards & Recognition
            </h3>

            <div className="space-y-3">
              {AWARDS.map((award, idx) => (
                <div
                  key={idx}
                  className="rounded-lg border border-slate-200 bg-slate-50/70 dark:border-slate-800 dark:bg-slate-900/40 p-3.5"
                >
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-amber-600 dark:text-amber-400 shrink-0" />
                    <h4 className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                      {award.title}
                    </h4>
                    {award.count && (
                      <span className="rounded bg-amber-100 text-amber-800 dark:bg-amber-400/20 dark:text-amber-300 px-1.5 py-0.2 font-mono text-[10px]">
                        {award.count}x
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 pl-6">
                    {award.reason}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
