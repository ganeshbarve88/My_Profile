import React from 'react';
import { SKILL_CATEGORIES } from '../data/resumeData';

export const TechStackMatrix: React.FC = () => {
  return (
    <section id="skills" className="py-16 md:py-20 border-b border-slate-200/80 dark:border-slate-800/60 bg-white dark:bg-slate-950 transition-colors duration-200">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        <div className="mb-10">
          <p className="text-xs font-semibold text-sky-600 dark:text-sky-400 uppercase tracking-wider">Expertise</p>
          <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Technical Skills & Stack</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Core technologies and tools utilized across production cloud platforms and high-volume data warehouses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div key={idx} className="rounded-xl border border-slate-200 bg-slate-50/70 dark:border-slate-800 dark:bg-slate-900/40 p-5">
              <h3 className="text-sm font-bold text-sky-600 dark:text-sky-400 mb-3">
                {cat.category}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="rounded-lg bg-white text-slate-800 border border-slate-200/80 dark:bg-slate-900 dark:text-slate-200 dark:border-slate-800 px-3 py-1.5 text-xs shadow-xs"
                  >
                    <span className="font-semibold text-slate-900 dark:text-white">{skill.name}</span>
                    <span className="text-slate-400 dark:text-slate-500 ml-1.5 font-mono text-[10px]">{skill.experience}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
