import React from 'react';
import { EDUCATION_HISTORY } from '../data/resumeData';
import { GraduationCap, Award, Calendar, Building2 } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-16 md:py-20 border-b border-slate-200/80 dark:border-slate-800/60 bg-white dark:bg-slate-950 transition-colors duration-200">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-10">
          <p className="text-xs font-semibold text-sky-600 dark:text-sky-400 uppercase tracking-wider">Academic Record</p>
          <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Education</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Formal engineering degree and pre-university academic credentials.
          </p>
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block overflow-hidden rounded-xl border border-slate-200 bg-slate-50/50 dark:border-slate-800 dark:bg-slate-900/40">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="border-b border-slate-200 bg-slate-100/80 dark:border-slate-800 dark:bg-slate-900/90 text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">
              <tr>
                <th className="px-5 py-3.5">Course / Degree</th>
                <th className="px-5 py-3.5">Institution</th>
                <th className="px-5 py-3.5">University / Board</th>
                <th className="px-4 py-3.5 text-center">Year</th>
                <th className="px-4 py-3.5 text-right">Aggregate</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800/80">
              {EDUCATION_HISTORY.map((item, idx) => (
                <tr 
                  key={idx}
                  className="hover:bg-slate-100/60 dark:hover:bg-slate-800/40 transition-colors"
                >
                  <td className="px-5 py-4 font-bold text-slate-900 dark:text-white">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-sky-600 dark:text-sky-400 shrink-0" />
                      <span>{item.course}</span>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-slate-700 dark:text-slate-300">
                    {item.institution}
                  </td>
                  <td className="px-5 py-4 text-slate-500 dark:text-slate-400 text-xs">
                    {item.universityOrBoard}
                  </td>
                  <td className="px-4 py-4 text-center font-mono font-medium text-slate-600 dark:text-slate-300 tabular-nums">
                    {item.passingYear}
                  </td>
                  <td className="px-4 py-4 text-right">
                    <span className="inline-block rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200/80 dark:bg-emerald-950/60 dark:text-emerald-400 dark:border-emerald-800/60 px-2.5 py-1 text-xs font-mono font-bold tabular-nums">
                      {item.aggregate}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards View */}
        <div className="md:hidden space-y-4">
          {EDUCATION_HISTORY.map((item, idx) => (
            <div 
              key={idx}
              className="rounded-xl border border-slate-200 bg-slate-50/70 dark:border-slate-800 dark:bg-slate-900/50 p-4"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2">
                  <div className="rounded-md bg-sky-100 dark:bg-sky-950 p-1.5 text-sky-600 dark:text-sky-400 shrink-0">
                    <GraduationCap className="h-4 w-4" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    {item.course}
                  </h3>
                </div>
                <span className="rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950 dark:text-emerald-400 dark:border-emerald-800 px-2 py-0.5 text-xs font-mono font-bold tabular-nums">
                  {item.aggregate}
                </span>
              </div>

              <div className="mt-3 space-y-1.5 text-xs">
                <div className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                  <Building2 className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                  <span>{item.institution}</span>
                </div>
                <p className="text-slate-500 dark:text-slate-400 pl-5 text-[11px]">
                  {item.universityOrBoard}
                </p>
                <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 pt-1">
                  <Calendar className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                  <span className="font-mono tabular-nums">Passing Year: {item.passingYear}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
