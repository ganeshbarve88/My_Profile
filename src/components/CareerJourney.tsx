import React from 'react';
import { EXPERIENCES } from '../data/resumeData';
import { Award } from 'lucide-react';

export const CareerJourney: React.FC = () => {
  return (
    <section id="experience" className="py-16 md:py-20 border-b border-slate-200/80 dark:border-slate-800/60 bg-white dark:bg-slate-950 transition-colors duration-200">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-12">
          <p className="text-xs font-semibold text-sky-600 dark:text-sky-400 uppercase tracking-wider">Career Journey</p>
          <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Professional Experience</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            A decade of engineering leadership delivering mission-critical data pipelines and cloud migrations.
          </p>
        </div>

        {/* Clean Timeline */}
        <div className="space-y-12">
          {EXPERIENCES.map((exp) => (
            <div key={exp.id} className="relative pl-6 border-l border-slate-200 dark:border-slate-800">
              {/* Timeline marker */}
              <div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-sky-500 ring-4 ring-white dark:ring-slate-950"></div>

              {/* Title & Metadata */}
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {exp.role}
                  </h3>
                  <p className="text-sm font-semibold text-sky-600 dark:text-sky-400">
                    {exp.company}
                    {exp.client && (
                      <span className="text-slate-600 dark:text-slate-300 font-normal"> (Client: {exp.client})</span>
                    )}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
                  <span>{exp.period}</span>
                  <span>·</span>
                  <span>{exp.location}</span>
                </div>
              </div>

              {/* Role Progression / Promotions Timeline */}
              {exp.roleProgression && exp.roleProgression.length > 0 && (
                <div className="mt-3.5 rounded-lg border border-slate-200/90 bg-slate-50/80 dark:border-slate-800/80 dark:bg-slate-900/50 p-3">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                    Designation & Career Progression
                  </p>
                  <div className="space-y-1.5">
                    {exp.roleProgression.map((prog, pIdx) => (
                      <div key={pIdx} className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs gap-0.5">
                        <span className="font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-sky-500 shrink-0"></span>
                          {prog.title}
                        </span>
                        <span className="font-mono text-[11px] text-slate-500 dark:text-slate-400 tabular-nums sm:text-right">
                          {prog.period}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Summary */}
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {exp.summary}
              </p>

              {/* Core Accomplishments */}
              <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 list-disc pl-4 marker:text-sky-500">
                {exp.highlights.map((h, hIdx) => (
                  <li key={hIdx} className="leading-relaxed">
                    <strong className="text-slate-900 dark:text-white font-medium">{h.title}:</strong> {h.description}
                  </li>
                ))}
              </ul>

              {/* Awards if any */}
              {exp.awards && exp.awards.length > 0 && (
                <div className="mt-4 rounded-lg bg-amber-50 border border-amber-200 dark:bg-amber-500/10 dark:border-amber-500/20 p-3">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-700 dark:text-amber-400 mb-1">
                    <Award className="h-3.5 w-3.5" />
                    <span>Recognition:</span>
                  </div>
                  {exp.awards.map((award, aIdx) => (
                    <p key={aIdx} className="text-xs text-amber-900 dark:text-amber-200/90 leading-relaxed">
                      {award}
                    </p>
                  ))}
                </div>
              )}

              {/* Tech Stack List */}
              <div className="mt-4 flex flex-wrap items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                <span className="text-slate-400 dark:text-slate-500 font-medium">Stack:</span>
                {exp.technologies.map((t, tIdx) => (
                  <span
                    key={tIdx}
                    className="rounded bg-slate-100 text-slate-700 border border-slate-200 dark:bg-slate-900 dark:text-slate-300 dark:border-slate-800 px-2 py-0.5 text-[11px]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
