import React, { useState, useEffect, useRef } from 'react';
import { useAdmin } from '../context/AdminContext';
import { X, Lock, AlertCircle, ShieldCheck } from 'lucide-react';

declare global {
  interface Window {
    google?: {
      accounts: {
        id: {
          initialize: (config: {
            client_id: string;
            callback: (response: { credential: string }) => void;
            auto_select?: boolean;
            cancel_on_tap_outside?: boolean;
          }) => void;
          renderButton: (
            parent: HTMLElement,
            options: {
              type?: 'standard' | 'icon';
              theme?: 'outline' | 'filled_blue' | 'filled_black';
              size?: 'large' | 'medium' | 'small';
              text?: 'signin_with' | 'signup_with' | 'continue_with' | 'signin';
              shape?: 'rectangular' | 'pill' | 'circle' | 'square';
              logo_alignment?: 'left' | 'center';
              width?: string | number;
            }
          ) => void;
          prompt?: () => void;
        };
      };
    };
  }
}

export const AdminLoginModal: React.FC = () => {
  const { 
    isLoginModalOpen, 
    setIsLoginModalOpen, 
    googleLogin, 
    setIsEditModalOpen,
    googleClientId
  } = useAdmin();

  const [errorMsg, setErrorMsg] = useState('');
  const googleBtnContainerRef = useRef<HTMLDivElement>(null);

  // Initialize official Google Identity Services button
  useEffect(() => {
    if (!isLoginModalOpen || !googleClientId) return;

    const timer = setTimeout(() => {
      if (window.google?.accounts?.id && googleBtnContainerRef.current) {
        googleBtnContainerRef.current.innerHTML = '';

        try {
          window.google.accounts.id.initialize({
            client_id: googleClientId.trim(),
            callback: (res: { credential: string }) => {
              const result = googleLogin(res.credential);
              if (result.success) {
                setIsLoginModalOpen(false);
                setIsEditModalOpen(true);
                setErrorMsg('');
              } else {
                setErrorMsg(result.message);
              }
            },
          });

          window.google.accounts.id.renderButton(googleBtnContainerRef.current, {
            theme: 'outline',
            size: 'large',
            text: 'continue_with',
            shape: 'pill',
            width: 280,
          });
        } catch (err) {
          console.warn('Google Identity button could not be initialized:', err);
        }
      }
    }, 150);

    return () => clearTimeout(timer);
  }, [isLoginModalOpen, googleClientId, googleLogin, setIsLoginModalOpen, setIsEditModalOpen]);

  if (!isLoginModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl dark:border-slate-800 dark:bg-slate-900"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-50 text-sky-600 dark:bg-sky-500/10 dark:text-sky-400">
              <Lock className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Admin Authentication</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">Profile & Photo Management</p>
            </div>
          </div>
          <button
            onClick={() => setIsLoginModalOpen(false)}
            className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-200 transition-colors cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal Body: Google Login Only */}
        <div className="mt-6 space-y-5 text-center">
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            Sign in with your authorized Gmail account to edit your executive profile and update your photo.
          </p>

          {errorMsg && (
            <div className="flex items-start gap-2 rounded-lg bg-red-50 p-3 text-xs text-red-700 dark:bg-red-500/10 dark:text-red-400 border border-red-200 dark:border-red-900/40 text-left">
              <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Official Google Sign-In Button */}
          <div className="flex justify-center pt-2 min-h-[46px]">
            <div ref={googleBtnContainerRef} className="flex justify-center" />
          </div>

          <div className="flex items-center justify-center gap-1.5 pt-2 text-[11px] text-slate-400 dark:text-slate-500">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
            <span>Protected by Google Identity Services</span>
          </div>

          {/* Cancel button */}
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80">
            <button
              type="button"
              onClick={() => setIsLoginModalOpen(false)}
              className="w-full rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-2 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
