import React, { useState } from 'react';
import { PERSONAL_INFO, EXPERIENCES, SKILL_CATEGORIES, CERTIFICATIONS, AWARDS, EDUCATION_HISTORY } from '../data/resumeData';
import { X, Printer, Copy, Check, FileText } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const plainText = `
${PERSONAL_INFO.name.toUpperCase()}
${PERSONAL_INFO.title} | ${PERSONAL_INFO.tagline}
${PERSONAL_INFO.location} | ${PERSONAL_INFO.phone} / ${PERSONAL_INFO.secondaryPhone} | ${PERSONAL_INFO.email}

PROFESSIONAL SUMMARY
${PERSONAL_INFO.summary}

TECHNICAL SKILLS
${SKILL_CATEGORIES.map(
  (c) => `• ${c.category}: ${c.skills.map((s) => s.name).join(', ')}`
).join('\n')}

PROFESSIONAL EXPERIENCE
${EXPERIENCES.map(
  (exp) => `
${exp.company} | ${exp.location}
${exp.role}${exp.client ? ` (Client: ${exp.client})` : ''} | ${exp.period}
${exp.roleProgression ? exp.roleProgression.map(r => `  Designation: ${r.title} (${r.period})`).join('\n') + '\n' : ''}${exp.highlights.map((h) => `• ${h.title}: ${h.description}`).join('\n')}
`
).join('\n')}

EDUCATION
${EDUCATION_HISTORY.map((e) => `• ${e.course} | ${e.institution} | ${e.universityOrBoard} | Passing Year: ${e.passingYear} | Aggregate: ${e.aggregate}`).join('\n')}

CERTIFICATIONS
${CERTIFICATIONS.map((c) => `• ${c.title} (${c.validity}) - ${c.issuer}`).join('\n')}

AWARDS
${AWARDS.map((a) => `• ${a.title}: ${a.reason}`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(plainText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 dark:bg-black/80 backdrop-blur-md p-2 sm:p-4 overflow-y-auto">
      <div 
        className="relative flex max-h-[92vh] w-full max-w-4xl flex-col rounded-2xl border border-slate-200 bg-white shadow-2xl overflow-hidden dark:border-slate-700 dark:bg-slate-900 transition-colors"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header Controls (No-Print) */}
        <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-6 py-4 dark:border-slate-800 dark:bg-slate-950 no-print">
          <div className="flex items-center gap-3">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">Ganesh Barve - Executive Curriculum Vitae</h3>
            <span className="rounded bg-sky-100 px-2 py-0.5 text-[11px] font-mono font-medium text-sky-800 border border-sky-300 dark:bg-sky-950 dark:text-sky-400 dark:border-sky-800/60">
              10+ Years Experience
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 dark:hover:text-white transition-colors cursor-pointer"
              title="Copy plain text for ATS"
            >
              {copied ? <Check className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" /> : <Copy className="h-3.5 w-3.5 text-sky-600 dark:text-sky-400" />}
              <span>{copied ? 'Copied!' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 rounded-lg bg-sky-500 hover:bg-sky-400 px-3.5 py-1.5 text-xs font-semibold text-slate-950 transition-colors cursor-pointer"
              title="Print or Save to PDF"
            >
              <Printer className="h-3.5 w-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="rounded-lg p-1.5 text-slate-500 hover:bg-slate-200 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document Body */}
        <div className="flex-1 overflow-y-auto bg-white p-6 sm:p-10 text-slate-800 font-sans dark:bg-slate-950 dark:text-slate-100 print:p-0 print:bg-white print:text-black">
          
          {/* Header section matching exact CV format */}
          <div className="border-b border-slate-200 pb-6 dark:border-slate-800 print:border-neutral-300">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white print:text-black">
              GANESH BARVE
            </h1>
            <p className="mt-1 text-sm font-semibold text-sky-600 dark:text-sky-400 print:text-blue-800">
              Senior Lead Data Engineer | 2X GCP Certified | 10+ Years Experience | Bangalore, India
            </p>
            <div className="mt-2 flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-slate-400 print:text-neutral-600">
              <span>Phone: {PERSONAL_INFO.phone} / {PERSONAL_INFO.secondaryPhone}</span>
              <span>·</span>
              <span>Email: {PERSONAL_INFO.email}</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mt-6">
            <h2 className="text-xs font-bold tracking-wider uppercase text-slate-500 border-b border-slate-200 pb-1 dark:text-slate-400 dark:border-slate-800/80 print:text-neutral-700 print:border-neutral-300">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="mt-2 text-xs leading-relaxed text-slate-700 dark:text-slate-300 print:text-neutral-800">
              {PERSONAL_INFO.summary}
            </p>
          </div>

          {/* Technical Skills */}
          <div className="mt-6">
            <h2 className="text-xs font-bold tracking-wider uppercase text-slate-500 border-b border-slate-200 pb-1 dark:text-slate-400 dark:border-slate-800/80 print:text-neutral-700 print:border-neutral-300">
              TECHNICAL SKILLS
            </h2>
            <ul className="mt-2 space-y-1.5 text-xs text-slate-700 dark:text-slate-300 print:text-neutral-800">
              <li>
                <strong className="text-slate-900 dark:text-white print:text-black">Cloud & Big Data:</strong> GCP BigQuery, Cloud SQL, S3, Starburst, PySpark.
              </li>
              <li>
                <strong className="text-slate-900 dark:text-white print:text-black">Databases & Warehousing:</strong> Teradata, Oracle (PL/SQL), RDBMS, Star Schema, Data Vault Modelling.
              </li>
              <li>
                <strong className="text-slate-900 dark:text-white print:text-black">ETL & Orchestration:</strong> dbt, Airflow DAG, UNIX Shell Scripting, Control-M, Autosys, SSIS, KNIME.
              </li>
              <li>
                <strong className="text-slate-900 dark:text-white print:text-black">DevOps & Tools:</strong> Git, Bitbucket, Bamboo (CI/CD), JIRA, Confluence.
              </li>
              <li>
                <strong className="text-slate-900 dark:text-white print:text-black">Visualization:</strong> Tableau, Qlik, Salesforce, Adobe Analytics.
              </li>
            </ul>
          </div>

          {/* Professional Experience */}
          <div className="mt-6">
            <h2 className="text-xs font-bold tracking-wider uppercase text-slate-500 border-b border-slate-200 pb-1 dark:text-slate-400 dark:border-slate-800/80 print:text-neutral-700 print:border-neutral-300">
              PROFESSIONAL EXPERIENCE
            </h2>

            {/* ANZ */}
            <div className="mt-4">
              <div className="flex flex-wrap justify-between text-xs">
                <span className="font-bold text-slate-900 dark:text-white print:text-black">
                  ANZ Operations and Technology | Bangalore, India
                </span>
                <span className="font-medium text-sky-600 dark:text-sky-400 print:text-neutral-600 font-mono">
                  June 2022 – Present
                </span>
              </div>
              <div className="mt-1 flex flex-wrap gap-x-4 gap-y-0.5 text-[11px] text-slate-600 dark:text-slate-400 print:text-neutral-700">
                <span className="font-medium">• Senior Lead Data Engineer (Jul 2024 – Present)</span>
                <span className="font-medium">• Lead Data Engineer (Jun 2022 – Jun 2024)</span>
              </div>
              <ul className="mt-2 space-y-2 text-xs text-slate-700 dark:text-slate-300 print:text-neutral-800 pl-4 list-disc">
                <li>
                  <strong className="text-slate-900 dark:text-slate-100 print:text-black">Commercial Banking Data Product (GCP BigQuery):</strong> Spearheaded the end-to-end architecture and implementation of the Commercial Banking data product on GCP BigQuery during a critical resource crunch. Conducted in-depth technical analysis to master emerging technologies, collaborating seamlessly across business stakeholders to deliver a scalable, production-grade analytics platform (Honored with the &quot;ANZ brilliANZ Award&quot;, Q1 FY26).
                </li>
                <li>
                  <strong className="text-slate-900 dark:text-slate-100 print:text-black">Cloud Migration & API Architecture:</strong> Led a team of data engineers to migrate the Data Warehouse from Teradata to AWS S3 and GCP BigQuery. Engineered extraction pipelines using Python, DBT, and SQL to stage data in GCS buckets and Cloud SQL, enabling real-time API calls from Salesforce CRM for banker loan processing, fully orchestrated via Airflow Cloud Composer.
                </li>
                <li>
                  <strong className="text-slate-900 dark:text-slate-100 print:text-black">Enterprise Architecture:</strong> Architected and deployed scalable, fault-tolerant data pipelines using Data Vault and Star Schema on Teradata, empowering the Marketing division with high-fidelity campaign performance analytics.
                </li>
                <li>
                  <strong className="text-slate-900 dark:text-slate-100 print:text-black">Strategic Migration:</strong> Orchestrated a high-stakes migration of 50+ mission-critical data entities from legacy Oracle systems to a modern Teradata warehouse, achieving zero downtime and preserving data continuity for downstream reporting.
                </li>
                <li>
                  <strong className="text-slate-900 dark:text-slate-100 print:text-black">Ecosystem Integration:</strong> Engineered a unified data ecosystem by automating complex data flows across Salesforce, GCP BigQuery, Teradata, and visualization tools (Qlik, Tableau), establishing a single source of truth for business metrics.
                </li>
                <li>
                  <strong className="text-slate-900 dark:text-slate-100 print:text-black">Operational Excellence:</strong> Revolutionized job monitoring by implementing Control-M and Skybot scheduling, drastically reducing manual oversight and cutting Mean Time to Recovery (MTTR) for critical data incidents.
                </li>
                <li>
                  <strong className="text-slate-900 dark:text-slate-100 print:text-black">Revenue Enablement:</strong> Designed and implemented a predictive Lead-to-Application conversion model for credit and loan products, delivering actionable insights via Qlik Sense that optimized lead targeting and conversion rates.
                </li>
                <li>
                  <strong className="text-slate-900 dark:text-slate-100 print:text-black">Agile Leadership:</strong> Directed a cross-functional team of engineers and vendors as Scrum Master, driving sprint planning, backlog refinement, and efficient delivery of data products.
                </li>
                <li>
                  <strong className="text-slate-900 dark:text-slate-100 print:text-black">Mentorship & Recognition:</strong> Honored with the &quot;ANZ Individual Excellence (Stellar)&quot; Award for exceptional leadership in mentoring vendor teams and delivering high-value technical solutions.
                </li>
              </ul>
            </div>

            {/* Riskonnect */}
            <div className="mt-5">
              <div className="flex flex-wrap justify-between text-xs">
                <span className="font-bold text-slate-900 dark:text-white print:text-black">
                  RISKONNECT INC. | Mangalore, India
                </span>
                <span className="font-medium text-sky-600 dark:text-sky-400 print:text-neutral-600">
                  Senior Data Engineer | December 2020 – June 2022
                </span>
              </div>
              <ul className="mt-2 space-y-2 text-xs text-slate-700 dark:text-slate-300 print:text-neutral-800 pl-4 list-disc">
                <li>
                  <strong className="text-slate-900 dark:text-slate-100 print:text-black">B2B Data Integration:</strong> Designed and launched a robust End-to-End TPA Support model, serving as a critical data bridge for Fortune 500 clients (e.g., Amazon, Walmart) to process high-volume employee claims efficiently.
                </li>
                <li>
                  <strong className="text-slate-900 dark:text-slate-100 print:text-black">Algorithm Optimization:</strong> Engineered and fine-tuned complex financial algorithms using Oracle Views and Stored Procedures, significantly reducing query execution time and accelerating the claims settlement lifecycle.
                </li>
                <li>
                  <strong className="text-slate-900 dark:text-slate-100 print:text-black">Data Integrity Governance:</strong> Established rigorous data quality frameworks using SSIS and Visual Cron for staging and loading, ensuring 99.9% accuracy and reliability for insured member data.
                </li>
              </ul>
            </div>

            {/* Infosys */}
            <div className="mt-5">
              <div className="flex flex-wrap justify-between text-xs">
                <span className="font-bold text-slate-900 dark:text-white print:text-black">
                  INFOSYS TECHNOLOGIES LTD. | Mangalore, India (Client: Apple Inc.)
                </span>
                <span className="font-medium text-sky-600 dark:text-sky-400 print:text-neutral-600 font-mono">
                  March 2016 – November 2020
                </span>
              </div>
              <div className="mt-1 flex flex-wrap gap-x-3.5 gap-y-0.5 text-[11px] text-slate-600 dark:text-slate-400 print:text-neutral-700">
                <span className="font-medium">• Technology Analyst (Apr 2019 – Nov 2020)</span>
                <span className="font-medium">• Senior Systems Engineer (Apr 2018 – Mar 2019)</span>
                <span className="font-medium">• Systems Engineer (Sep 2016 – Mar 2018)</span>
                <span className="font-medium">• Systems Engineer Trainee (Mar 2016 – Aug 2016)</span>
              </div>
              <ul className="mt-2 space-y-2 text-xs text-slate-700 dark:text-slate-300 print:text-neutral-800 pl-4 list-disc">
                <li>
                  <strong className="text-slate-900 dark:text-slate-100 print:text-black">Big Data ETL:</strong> Developed high-performance UNIX Shell scripts and Teradata ETL processes to ingest and transform massive datasets for the Unica marketing platform, supporting global-scale customer campaigns.
                </li>
                <li>
                  <strong className="text-slate-900 dark:text-slate-100 print:text-black">Workflow Automation:</strong> Spearheaded the automation of daily campaign monitoring using Autosys, reducing manual intervention by ~40% and enabling rapid issue resolution (Received &quot;INFOSYS INSTA&quot; Award).
                </li>
                <li>
                  <strong className="text-slate-900 dark:text-slate-100 print:text-black">Regulatory Compliance:</strong> Architected secure data extraction pipelines to meet strict GDPR requirements, ensuring the timely and compliant delivery of sensitive customer PII.
                </li>
                <li>
                  <strong className="text-slate-900 dark:text-slate-100 print:text-black">Project Delivery:</strong> Managed technical delivery for an 8-member offshore team, acting as the primary technical liaison to translate complex client requirements into executable engineering tasks.
                </li>
              </ul>
            </div>
          </div>

          {/* Education */}
          <div className="mt-6">
            <h2 className="text-xs font-bold tracking-wider uppercase text-slate-500 border-b border-slate-200 pb-1 dark:text-slate-400 dark:border-slate-800/80 print:text-neutral-700 print:border-neutral-300">
              EDUCATION
            </h2>
            <div className="mt-2 space-y-2 text-xs text-slate-700 dark:text-slate-300 print:text-neutral-800">
              {EDUCATION_HISTORY.map((edu, eIdx) => (
                <div key={eIdx} className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 border-b border-slate-100 dark:border-slate-900 pb-1.5 last:border-0">
                  <div>
                    <span className="font-bold text-slate-900 dark:text-white print:text-black">{edu.course}</span>
                    <span className="text-slate-500 dark:text-slate-400"> — {edu.institution} ({edu.universityOrBoard})</span>
                  </div>
                  <div className="font-mono text-[11px] text-slate-600 dark:text-slate-400 shrink-0">
                    <span>Year: {edu.passingYear}</span>
                    <span className="mx-1.5">·</span>
                    <span className="font-bold text-emerald-600 dark:text-emerald-400 print:text-black">Aggregate: {edu.aggregate}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-6">
            <h2 className="text-xs font-bold tracking-wider uppercase text-slate-500 border-b border-slate-200 pb-1 dark:text-slate-400 dark:border-slate-800/80 print:text-neutral-700 print:border-neutral-300">
              CERTIFICATIONS
            </h2>
            <ul className="mt-2 space-y-1 text-xs text-slate-700 dark:text-slate-300 print:text-neutral-800 pl-4 list-disc">
              <li>Google Cloud Certified Associate Cloud Engineer (Valid: Feb 2026 – Feb 2029)</li>
              <li>Google Cloud Certified Generative AI Leader (Valid: Jul 2026 – Jul 2029)</li>
              <li>Salesforce Administration: 2-Month Intensive Program and Certification</li>
            </ul>
          </div>

          {/* Awards */}
          <div className="mt-6">
            <h2 className="text-xs font-bold tracking-wider uppercase text-slate-500 border-b border-slate-200 pb-1 dark:text-slate-400 dark:border-slate-800/80 print:text-neutral-700 print:border-neutral-300">
              AWARDS
            </h2>
            <ul className="mt-2 space-y-1 text-xs text-slate-700 dark:text-slate-300 print:text-neutral-800 pl-4 list-disc">
              <li>
                <strong className="text-slate-900 dark:text-white print:text-black">ANZ brilliANZ Award (Q1 FY26, Oct–Dec 2025):</strong> For outstanding achievement in building the Commercial Banking data product on GCP BigQuery end-to-end through in-depth technical analysis, rapid technology adoption, cross-functional stakeholder collaboration, and resilient delivery during an enterprise resource crunch.
              </li>
              <li>
                <strong className="text-slate-900 dark:text-white print:text-black">ANZ Individual Excellence (Stellar):</strong> For guiding, supporting, and leading vendor teams.
              </li>
              <li>
                <strong className="text-slate-900 dark:text-white print:text-black">ANZ Year End Recognition FY24:</strong> For outstanding contribution and living company purpose.
              </li>
              <li>
                <strong className="text-slate-900 dark:text-white print:text-black">Infosys INSTA Award (x3):</strong> For quick issue resolution and automating UNICA campaign monitoring.
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};
