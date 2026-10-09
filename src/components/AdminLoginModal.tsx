import React, { useState, useEffect, useRef } from 'react';
import { useAdmin } from '../context/AdminContext';
import { 
  X, 
  ShieldCheck, 
  Mail, 
  Key, 
  AlertCircle, 
  Lock, 
  Settings, 
  ExternalLink,
  Eye,
  EyeOff,
  Check
} from 'lucide-react';

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
    passwordLogin, 
    setIsEditModalOpen,
    googleClientId,
    setGoogleClientId
  } = useAdmin();

  // Default to password tab for immediate 1-click access without needing prior GCP setup
  const [activeMode, setActiveMode] = useState<'password' | 'google'>('password');
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [showConfig, setShowConfig] = useState(false);
  const [customClientId, setCustomClientId] = useState(googleClientId);
  const [savedClientIdNotice, setSavedClientIdNotice] = useState(false);

  const googleBtnContainerRef = useRef<HTMLDivElement>(null);

  const isValidGoogleClientId = 
    Boolean(googleClientId && googleClientId.includes('.apps.googleusercontent.com') && !googleClientId.includes('dummy'));

  // Initialize Google Identity Services button only when a real client ID is configured
  useEffect(() => {
    if (!isLoginModalOpen || activeMode !== 'google' || !isValidGoogleClientId) return;

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
            shape: 'rectangular',
            width: 320,
          });
        } catch (err) {
          console.warn('Google Identity button could not be initialized:', err);
        }
      }
    }, 150);

    return () => clearTimeout(timer);
  }, [isLoginModalOpen, activeMode, googleClientId, isValidGoogleClientId]);

  if (!isLoginModalOpen) return null;

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!emailInput.trim()) {
      setErrorMsg('Please enter your authorized email address.');
      return;
    }
    if (!passwordInput) {
      setErrorMsg('Please enter your password.');
      return;
    }

    const res = passwordLogin(emailInput, passwordInput);
    if (res.success) {
      setIsLoginModalOpen(false);
      setIsEditModalOpen(true);
      setEmailInput('');
      setPasswordInput('');
    } else {
      setErrorMsg(res.message);
    }
  };

  const handleSaveClientId = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customClientId.trim()) {
      setErrorMsg('Please enter a valid Google OAuth Client ID.');
      return;
    }
    setGoogleClientId(customClientId.trim());
    setSavedClientIdNotice(true);
    setShowConfig(false);
    setErrorMsg('');
    setTimeout(() => setSavedClientIdNotice(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl dark:border-slate-800 dark:bg-slate-900"
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
              <p className="text-xs text-slate-500 dark:text-slate-400">Owner & Profile Verification</p>
            </div>
          </div>
          <button
            onClick={() => setIsLoginModalOpen(false)}
            className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-200 transition-colors cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Authentication Mode Switcher */}
        <div className="mt-4 flex rounded-lg bg-slate-100 dark:bg-slate-950 p-1 text-xs font-semibold">
          <button
            type="button"
            onClick={() => {
              setActiveMode('password');
              setErrorMsg('');
            }}
            className={`flex-1 py-1.5 rounded-md transition-all cursor-pointer ${
              activeMode === 'password'
                ? 'bg-white text-slate-900 shadow-xs dark:bg-slate-800 dark:text-white'
                : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            Email & Password
          </button>
          <button
            type="button"
            onClick={() => {
              setActiveMode('google');
              setErrorMsg('');
            }}
            className={`flex-1 py-1.5 rounded-md transition-all cursor-pointer ${
              activeMode === 'google'
                ? 'bg-white text-slate-900 shadow-xs dark:bg-slate-800 dark:text-white'
                : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            Sign in with Google
          </button>
        </div>

        {/* Body */}
        <div className="mt-5 space-y-4">
          {errorMsg && (
            <div className="flex items-start gap-2 rounded-lg bg-red-50 p-3 text-xs text-red-700 dark:bg-red-500/10 dark:text-red-400 border border-red-200 dark:border-red-900/40">
              <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
              <span>{errorMsg}</span>
            </div>
          )}

          {activeMode === 'password' ? (
            /* Email & Password Form - Immediate Access */
            <form onSubmit={handlePasswordSubmit} className="space-y-4">
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Log in with your authorized email and private admin password.
              </p>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                    <Mail className="h-4 w-4" />
                  </div>
                  <input
                    type="email"
                    value={emailInput}
                    onChange={(e) => {
                      setEmailInput(e.target.value);
                      setErrorMsg('');
                    }}
                    placeholder="ganeshbarve88@gmail.com"
                    className="w-full rounded-lg border border-slate-300 bg-white py-2.5 pl-10 pr-3 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                    autoFocus
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Password / Passkey
                  </label>
                  <span className="text-[10px] text-slate-400" title="Default is Ganesh@ANZ2026 (changeable in settings)">
                    Default: Ganesh@ANZ2026
                  </span>
                </div>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                    <Key className="h-4 w-4" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={passwordInput}
                    onChange={(e) => {
                      setPasswordInput(e.target.value);
                      setErrorMsg('');
                    }}
                    placeholder="••••••••••••"
                    className="w-full rounded-lg border border-slate-300 bg-white py-2.5 pl-10 pr-10 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-end gap-2.5">
                <button
                  type="button"
                  onClick={() => setIsLoginModalOpen(false)}
                  className="rounded-lg border border-slate-300 px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex items-center gap-1.5 rounded-lg bg-sky-600 px-5 py-2 text-xs font-semibold text-white hover:bg-sky-500 transition-colors cursor-pointer shadow-sm"
                >
                  <ShieldCheck className="h-4 w-4" />
                  <span>Authenticate</span>
                </button>
              </div>
            </form>
          ) : (
            /* Google Identity Services Form */
            <div className="space-y-4 text-center">
              {isValidGoogleClientId ? (
                <>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    Authenticate securely using your Google account via Google Identity Services.
                  </p>

                  <div className="flex justify-center pt-2 min-h-[44px]">
                    <div ref={googleBtnContainerRef} className="flex justify-center" />
                  </div>
                </>
              ) : (
                <div className="rounded-xl border border-amber-200 bg-amber-50/60 dark:border-amber-900/50 dark:bg-amber-950/20 p-4 text-left space-y-3">
                  <div className="flex items-center gap-2 text-amber-800 dark:text-amber-300 font-semibold text-xs">
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    <span>Google OAuth Client ID Required</span>
                  </div>
                  <p className="text-xs text-amber-700 dark:text-amber-400/90 leading-relaxed">
                    Google Sign-In requires your own Google Cloud Web Client ID registered for your domain (<code className="font-mono text-[10px] bg-amber-100 dark:bg-amber-900/60 px-1 py-0.5 rounded">github.io</code> or <code className="font-mono text-[10px] bg-amber-100 dark:bg-amber-900/60 px-1 py-0.5 rounded">localhost</code>).
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-2 pt-1">
                    <button
                      type="button"
                      onClick={() => setActiveMode('password')}
                      className="rounded-lg bg-sky-600 px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-sky-500 transition-colors text-center cursor-pointer"
                    >
                      Use Email & Password Instead
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowConfig(!showConfig)}
                      className="rounded-lg border border-amber-300 dark:border-amber-800 bg-white dark:bg-slate-900 px-3 py-1.5 text-xs font-medium text-amber-900 dark:text-amber-300 hover:bg-amber-50 text-center cursor-pointer"
                    >
                      {showConfig ? 'Hide Client ID Setup' : 'Enter Google Client ID'}
                    </button>
                  </div>
                </div>
              )}

              {/* Client ID Configuration Field */}
              {(showConfig || !isValidGoogleClientId) && (
                <form onSubmit={handleSaveClientId} className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 text-left space-y-2.5">
                  <div className="flex items-center justify-between">
                    <label className="block text-[11px] font-semibold text-slate-700 dark:text-slate-300">
                      Google OAuth 2.0 Web Client ID
                    </label>
                    <a
                      href="https://console.cloud.google.com/apis/credentials"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-[10px] text-sky-600 dark:text-sky-400 hover:underline"
                    >
                      <span>Google Cloud Console</span>
                      <ExternalLink className="h-2.5 w-2.5" />
                    </a>
                  </div>

                  <input
                    type="text"
                    value={customClientId}
                    onChange={(e) => setCustomClientId(e.target.value)}
                    placeholder="e.g. 123456789-xyz.apps.googleusercontent.com"
                    className="w-full rounded-md border border-slate-300 bg-white p-2 text-xs font-mono text-slate-900 focus:border-sky-500 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                  />

                  <p className="text-[10px] text-slate-500 leading-tight">
                    In Google Cloud Console &gt; APIs & Services &gt; Credentials, create an OAuth client ID (Web Application) and add your domain as an <em>Authorized JavaScript origin</em>.
                  </p>

                  <div className="flex justify-end pt-1">
                    <button
                      type="submit"
                      className="flex items-center gap-1 rounded-md bg-sky-600 px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-sky-500 cursor-pointer"
                    >
                      <Check className="h-3.5 w-3.5" />
                      <span>Save & Activate Google Sign-In</span>
                    </button>
                  </div>
                </form>
              )}

              {savedClientIdNotice && (
                <div className="flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 justify-center">
                  <Check className="h-3.5 w-3.5" />
                  <span>Google Client ID saved successfully!</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
