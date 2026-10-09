import React, { useState } from 'react';
import { SOCIAL_LINKS } from '../data/resumeData';
import { SocialLink } from '../types';
import { 
  ExternalLink, 
  Copy, 
  Check, 
  BookOpen, 
  Share2, 
  Sparkles,
  ArrowUpRight,
  FileCode2,
  Video,
  Feather,
  Zap
} from 'lucide-react';

// Authentic SVG Icons for each platform
const PlatformIcon: React.FC<{ icon: SocialLink['icon']; className?: string }> = ({ icon, className = "h-5 w-5" }) => {
  switch (icon) {
    case 'github':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
        </svg>
      );
    case 'convertify':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <path d="m9 15 3 3 3-3" />
          <path d="M12 12v6" />
        </svg>
      );
    case 'youtube':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      );
    case 'blog':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.77v8.37H6.46v-8.37M7.85 6.25a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24Z" />
        </svg>
      );
    case 'x':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    case 'threads':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.186 24c-3.524 0-6.388-1.206-8.307-3.498C2.012 18.27 1 15.352 1 11.956 1 8.528 2.054 5.61 4.032 3.42 6.074 1.162 8.932 0 12.35 0c3.486 0 6.326 1.162 8.244 3.373 1.836 2.115 2.802 4.965 2.802 8.286 0 .584-.034 1.156-.104 1.718h-4.336c.036-.368.054-.74.054-1.115 0-4.148-2.678-6.662-6.66-6.662-4.088 0-6.726 2.656-6.726 6.756 0 4.098 2.638 6.756 6.726 6.756 2.378 0 4.128-.846 5.176-2.502l3.472 2.352C23.364 21.758 18.736 24 12.186 24z" />
        </svg>
      );
    case 'instagram':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
        </svg>
      );
    case 'facebook':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      );
    default:
      return null;
  }
};

const getBrandStyles = (icon: SocialLink['icon']) => {
  switch (icon) {
    case 'github':
      return {
        bgLight: 'bg-slate-100 text-slate-800 border-slate-300 dark:bg-slate-900/60 dark:text-slate-200 dark:border-slate-700',
        hoverBorder: 'hover:border-slate-700 dark:hover:border-slate-400',
        iconColor: 'text-slate-900 dark:text-white',
        pillBg: 'bg-slate-900/10 text-slate-900 dark:bg-white/10 dark:text-white',
      };
    case 'convertify':
      return {
        bgLight: 'bg-teal-50 text-teal-800 border-teal-200 dark:bg-teal-950/40 dark:text-teal-300 dark:border-teal-800/60',
        hoverBorder: 'hover:border-teal-500',
        iconColor: 'text-teal-600 dark:text-teal-400',
        pillBg: 'bg-teal-500/15 text-teal-700 dark:bg-teal-500/20 dark:text-teal-300',
      };
    case 'youtube':
      return {
        bgLight: 'bg-red-50 text-red-700 border-red-200 dark:bg-red-950/40 dark:text-red-300 dark:border-red-800/60',
        hoverBorder: 'hover:border-red-500',
        iconColor: 'text-[#FF0000]',
        pillBg: 'bg-[#FF0000]/10 text-[#FF0000] dark:bg-[#FF0000]/20 dark:text-red-300',
      };
    case 'blog':
      return {
        bgLight: 'bg-amber-50 text-amber-900 border-amber-200 dark:bg-amber-950/40 dark:text-amber-200 dark:border-amber-800/60',
        hoverBorder: 'hover:border-amber-500',
        iconColor: 'text-[#D97706]',
        pillBg: 'bg-amber-500/15 text-amber-800 dark:bg-amber-500/20 dark:text-amber-300',
      };
    case 'linkedin':
      return {
        bgLight: 'bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-950/40 dark:text-sky-300 dark:border-sky-800/60',
        hoverBorder: 'hover:border-sky-500',
        iconColor: 'text-[#0A66C2]',
        pillBg: 'bg-[#0A66C2]/10 text-[#0A66C2] dark:bg-[#0A66C2]/20 dark:text-sky-300',
      };
    case 'x':
      return {
        bgLight: 'bg-slate-100 text-slate-800 border-slate-300 dark:bg-slate-900/60 dark:text-slate-200 dark:border-slate-700',
        hoverBorder: 'hover:border-slate-500',
        iconColor: 'text-slate-900 dark:text-white',
        pillBg: 'bg-slate-200 text-slate-800 dark:bg-slate-800 dark:text-slate-200',
      };
    case 'threads':
      return {
        bgLight: 'bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950/40 dark:text-indigo-300 dark:border-indigo-800/60',
        hoverBorder: 'hover:border-indigo-500',
        iconColor: 'text-indigo-600 dark:text-indigo-400',
        pillBg: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300',
      };
    case 'instagram':
      return {
        bgLight: 'bg-pink-50 text-pink-700 border-pink-200 dark:bg-pink-950/40 dark:text-pink-300 dark:border-pink-800/60',
        hoverBorder: 'hover:border-pink-500',
        iconColor: 'text-[#E4405F]',
        pillBg: 'bg-[#E4405F]/10 text-[#E4405F] dark:bg-[#E4405F]/20 dark:text-pink-300',
      };
    case 'facebook':
      return {
        bgLight: 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-800/60',
        hoverBorder: 'hover:border-blue-500',
        iconColor: 'text-[#1877F2]',
        pillBg: 'bg-[#1877F2]/10 text-[#1877F2] dark:bg-[#1877F2]/20 dark:text-blue-300',
      };
  }
};

type FilterCategory = 'All' | 'Code & Tools' | 'YouTube & Podcasts' | 'Writing & Literature' | 'Professional & Social';

export const SocialProfilesSection: React.FC = () => {
  const [filter, setFilter] = useState<FilterCategory>('All');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string, url: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredLinks = SOCIAL_LINKS.filter((item) => {
    if (filter === 'All') return true;
    return item.category === filter;
  });

  const blogItem = SOCIAL_LINKS.find((i) => i.id === 'blog');
  const convertifyItem = SOCIAL_LINKS.find((i) => i.id === 'convertify');

  return (
    <section id="social" className="py-16 md:py-24 border-b border-slate-200/80 dark:border-slate-800/60 bg-slate-50/60 dark:bg-slate-900/30 transition-colors duration-200">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 pb-8 border-b border-slate-200 dark:border-slate-800">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 dark:text-sky-400 uppercase tracking-wider mb-1">
              <Share2 className="h-3.5 w-3.5" />
              <span>Online Presence, Apps & Media</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Connect, Explore Creations & Literature
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-2xl">
              Explore my open-source code, self-developed apps, YouTube channels, podcasts, Kannada literary works, and social networks.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 rounded-lg bg-white dark:bg-slate-900 p-1 border border-slate-200 dark:border-slate-800 self-start md:self-auto text-xs font-semibold shadow-xs">
            {(['All', 'Code & Tools', 'YouTube & Podcasts', 'Writing & Literature', 'Professional & Social'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`rounded-md px-2.5 py-1.5 transition-all cursor-pointer text-[11px] sm:text-xs ${
                  filter === tab
                    ? 'bg-sky-600 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {tab === 'All' ? 'All (10)' : tab}
              </button>
            ))}
          </div>
        </div>

        {/* Dual Spotlights: Convertify App & Kannada Literature */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Spotlight 1: Convertify Document Tool */}
          {convertifyItem && (
            <div className="relative overflow-hidden rounded-2xl border border-teal-300/80 dark:border-teal-800/50 bg-gradient-to-br from-teal-500/10 via-teal-500/5 to-transparent dark:from-teal-950/40 dark:via-teal-950/20 p-6 flex flex-col justify-between shadow-md">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-teal-500/15 dark:bg-teal-500/25 px-3 py-1 text-xs font-semibold text-teal-800 dark:text-teal-300">
                    <Zap className="h-3.5 w-3.5" />
                    <span>Self-Developed Utility App</span>
                  </div>
                  <span className="rounded-md bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 text-[10px] font-mono px-2 py-0.5 border border-emerald-500/20 font-semibold">
                    100% Free & Offline
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span>Convertify</span>
                  <span className="text-xs font-normal text-slate-500 dark:text-slate-400">by Barve Studio</span>
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Fast, secure document conversion tool built with privacy at its core. Converts your files directly in your browser with zero server data storage.
                </p>

                <div className="pt-1 flex items-center gap-2 font-mono text-[11px] text-teal-700 dark:text-teal-400 truncate">
                  <FileCode2 className="h-3.5 w-3.5 shrink-0" />
                  <span className="truncate">barve-studio-convertify.workers.dev</span>
                </div>
              </div>

              <div className="pt-5 flex items-center gap-2.5">
                <a
                  href={convertifyItem.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-teal-600 hover:bg-teal-500 text-white px-4 py-2.5 text-xs font-semibold shadow-sm transition-all hover:scale-101 cursor-pointer"
                >
                  <span>Launch Convertify App</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>

                <button
                  type="button"
                  onClick={(e) => handleCopy('convertify-spotlight', convertifyItem.url, e)}
                  title="Copy Convertify App URL"
                  className="rounded-xl border border-teal-300 dark:border-teal-700 bg-white dark:bg-slate-900 p-2.5 text-teal-800 dark:text-teal-300 hover:bg-teal-50 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  {copiedId === 'convertify-spotlight' ? (
                    <Check className="h-4 w-4 text-emerald-600" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>
          )}

          {/* Spotlight 2: Kannada Literature Blog */}
          {blogItem && (
            <div className="relative overflow-hidden rounded-2xl border border-amber-300/80 dark:border-amber-800/50 bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent dark:from-amber-950/40 dark:via-amber-950/20 p-6 flex flex-col justify-between shadow-md">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/15 dark:bg-amber-500/25 px-3 py-1 text-xs font-semibold text-amber-800 dark:text-amber-300">
                    <Feather className="h-3.5 w-3.5" />
                    <span>ಕನ್ನಡ ಸಾಹಿತ್ಯ · Kannada Literature</span>
                  </div>
                  <span className="rounded-md bg-amber-500/10 text-amber-800 dark:text-amber-300 text-[10px] font-mono px-2 py-0.5 border border-amber-500/20 font-semibold">
                    Original Works
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white font-sans">
                  ಮುಸ್ಸಂಜೆಯಲ್ಲಿ, ಮುಂಜಾವಿನಲ್ಲಿ
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  ಗಣೇಶ್ ಬಾರ್ವೆ ಅವರ ಸ್ವಂತ ಕವನಗಳು, ಲೇಖನಗಳು, ಭಾವಲೋಕದ ಮಾತುಗಳು ಮತ್ತು ಕನ್ನಡ ಸಾಹಿತ್ಯ ಕೃತಿಗಳ ಅನಾವರಣ.
                </p>

                <div className="pt-1 flex items-center gap-2 font-mono text-[11px] text-amber-700 dark:text-amber-400 truncate">
                  <BookOpen className="h-3.5 w-3.5 shrink-0" />
                  <span className="truncate">barveganesh.blogspot.com</span>
                </div>
              </div>

              <div className="pt-5 flex items-center gap-2.5">
                <a
                  href={blogItem.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-white px-4 py-2.5 text-xs font-semibold shadow-sm transition-all hover:scale-101 cursor-pointer"
                >
                  <span>ಓದಿ (Read on Blogspot)</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>

                <button
                  type="button"
                  onClick={(e) => handleCopy('kannada-blog-spotlight', blogItem.url, e)}
                  title="Copy Blog URL"
                  className="rounded-xl border border-amber-300 dark:border-amber-700 bg-white dark:bg-slate-900 p-2.5 text-amber-800 dark:text-amber-300 hover:bg-amber-50 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  {copiedId === 'kannada-blog-spotlight' ? (
                    <Check className="h-4 w-4 text-emerald-600" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Profiles Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredLinks.map((item) => {
            const styles = getBrandStyles(item.icon);
            const isCopied = copiedId === item.id;

            return (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative flex flex-col justify-between rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${styles.hoverBorder}`}
              >
                <div>
                  {/* Top Bar: Icon & Category */}
                  <div className="flex items-center justify-between pb-3.5">
                    <div className={`flex h-11 w-11 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 ${styles.pillBg}`}>
                      <PlatformIcon icon={item.icon} className={`h-5 w-5 ${styles.iconColor}`} />
                    </div>

                    <div className="flex items-center gap-1.5">
                      <span className="rounded-md bg-slate-100 dark:bg-slate-800 px-2 py-0.5 text-[10px] font-semibold text-slate-600 dark:text-slate-300">
                        {item.category}
                      </span>
                      <button
                        type="button"
                        onClick={(e) => handleCopy(item.id, item.url, e)}
                        title="Copy URL"
                        className="rounded-md p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-800 dark:hover:text-slate-200 transition-colors cursor-pointer"
                      >
                        {isCopied ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
                      </button>
                    </div>
                  </div>

                  {/* Title & Handle */}
                  <div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-1.5 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                      <span>{item.name}</span>
                      <ArrowUpRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h4>
                    <p className="font-mono text-xs text-sky-600 dark:text-sky-400 mt-0.5 truncate">
                      {item.handle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="mt-2.5 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Card Footer Button */}
                <div className="mt-4 pt-3.5 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                    {item.badge}
                  </span>
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                    <ExternalLink className="h-3 w-3" />
                  </div>
                </div>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
};
