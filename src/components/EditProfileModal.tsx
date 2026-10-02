import React, { useState } from 'react';
import { useAdmin } from '../context/AdminContext';
import { 
  X, 
  Upload, 
  Download, 
  RotateCcw, 
  Check, 
  Camera, 
  User, 
  FileText, 
  LogOut,
  Sparkles,
  Link as LinkIcon
} from 'lucide-react';

export const EditProfileModal: React.FC = () => {
  const { 
    isEditModalOpen, 
    setIsEditModalOpen, 
    currentUser, 
    logout, 
    photoUrl, 
    updatePhoto, 
    resetPhoto,
    profileData,
    updateProfile,
    resetProfile
  } = useAdmin();

  const [activeTab, setActiveTab] = useState<'photo' | 'details'>('photo');
  const [tempPhotoUrl, setTempPhotoUrl] = useState(photoUrl);
  const [photoSavedNotice, setPhotoSavedNotice] = useState(false);
  const [urlInput, setUrlInput] = useState('');

  // Editable Profile fields
  const [title, setTitle] = useState(profileData.title);
  const [tagline, setTagline] = useState(profileData.tagline);
  const [location, setLocation] = useState(profileData.location);
  const [phone, setPhone] = useState(profileData.phone);
  const [secondaryPhone, setSecondaryPhone] = useState(profileData.secondaryPhone);
  const [summary, setSummary] = useState(profileData.summary);
  const [detailsSavedNotice, setDetailsSavedNotice] = useState(false);

  if (!isEditModalOpen) return null;

  // Compress & convert uploaded file to clean base64 data URL
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        // Create canvas to resize to crisp passport dimensions (600x600)
        const canvas = document.createElement('canvas');
        const maxDim = 800;
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > maxDim) {
            height = Math.round((height * maxDim) / width);
            width = maxDim;
          }
        } else {
          if (height > maxDim) {
            width = Math.round((width * maxDim) / height);
            height = maxDim;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(img, 0, 0, width, height);
          const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.88);
          setTempPhotoUrl(compressedDataUrl);
          updatePhoto(compressedDataUrl);
          setPhotoSavedNotice(true);
          setTimeout(() => setPhotoSavedNotice(false), 3000);
        }
      };
      img.src = event.target?.result as string;
    };
    reader.readAsDataURL(file);
  };

  const handleApplyUrl = () => {
    if (urlInput.trim()) {
      setTempPhotoUrl(urlInput.trim());
      updatePhoto(urlInput.trim());
      setPhotoSavedNotice(true);
      setTimeout(() => setPhotoSavedNotice(false), 3000);
      setUrlInput('');
    }
  };

  const handleDownloadPhoto = () => {
    const link = document.createElement('a');
    link.href = tempPhotoUrl || photoUrl;
    link.download = 'Ganesh_Passport.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSaveDetails = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile({
      title,
      tagline,
      location,
      phone,
      secondaryPhone,
      summary,
    });
    setDetailsSavedNotice(true);
    setTimeout(() => setDetailsSavedNotice(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="w-full max-w-2xl rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-900 max-h-[92vh] flex flex-col overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Admin Profile Editor</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Logged in as: <span className="font-mono text-sky-600 dark:text-sky-400 font-semibold">{currentUser}</span>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={logout}
              title="Sign Out of Admin"
              className="flex items-center gap-1 rounded-lg border border-slate-200 px-2.5 py-1.5 text-xs text-slate-600 hover:bg-slate-100 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-800 transition-colors"
            >
              <LogOut className="h-3.5 w-3.5" />
              <span>Logout</span>
            </button>
            <button
              onClick={() => setIsEditModalOpen(false)}
              className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-200 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-100 dark:border-slate-800 px-6 gap-4 bg-slate-50/50 dark:bg-slate-950/40">
          <button
            onClick={() => setActiveTab('photo')}
            className={`flex items-center gap-2 py-3 text-xs sm:text-sm font-semibold border-b-2 transition-colors cursor-pointer ${
              activeTab === 'photo'
                ? 'border-sky-500 text-sky-600 dark:text-sky-400'
                : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Camera className="h-4 w-4" />
            <span>Profile Photo</span>
          </button>
          <button
            onClick={() => setActiveTab('details')}
            className={`flex items-center gap-2 py-3 text-xs sm:text-sm font-semibold border-b-2 transition-colors cursor-pointer ${
              activeTab === 'details'
                ? 'border-sky-500 text-sky-600 dark:text-sky-400'
                : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <User className="h-4 w-4" />
            <span>Executive Details</span>
          </button>
        </div>

        {/* Modal Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {activeTab === 'photo' ? (
            <div className="space-y-6">
              {/* Photo preview block */}
              <div className="flex flex-col sm:flex-row items-center gap-6 p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50">
                <div className="relative aspect-square w-36 sm:w-44 rounded-2xl overflow-hidden border-2 border-sky-500 shadow-md shrink-0 bg-slate-200 dark:bg-slate-800">
                  <img
                    src={tempPhotoUrl || photoUrl}
                    alt="Ganesh Barve Preview"
                    className="h-full w-full object-cover object-top"
                  />
                  <div className="absolute bottom-1 right-1 rounded-md bg-slate-950/80 px-1.5 py-0.5 text-[10px] text-white backdrop-blur-xs">
                    Current
                  </div>
                </div>

                <div className="space-y-3 flex-1 text-center sm:text-left">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">Profile Photo Controls</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    Uploaded photos are <strong>automatically saved in browser storage</strong> and will remain active across page refreshes.
                  </p>

                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-1">
                    {/* Upload button */}
                    <label className="flex items-center gap-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white px-3.5 py-2 text-xs font-semibold cursor-pointer shadow-sm transition-colors">
                      <Upload className="h-4 w-4" />
                      <span>Upload New Image</span>
                      <input
                        type="file"
                        accept="image/png, image/jpeg, image/jpg, image/webp"
                        className="hidden"
                        onChange={handleFileUpload}
                      />
                    </label>

                    {/* Download button */}
                    <button
                      type="button"
                      onClick={handleDownloadPhoto}
                      title="Download as Ganesh_Passport.jpg to put in your GitHub repo public/ directory"
                      className="flex items-center gap-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 hover:bg-slate-100 text-slate-700 dark:text-slate-300 px-3.5 py-2 text-xs font-semibold cursor-pointer transition-colors"
                    >
                      <Download className="h-4 w-4" />
                      <span>Download File</span>
                    </button>

                    {/* Reset button */}
                    <button
                      type="button"
                      onClick={() => {
                        resetPhoto();
                        setTempPhotoUrl('/Ganesh_Passport.jpg');
                        setPhotoSavedNotice(true);
                        setTimeout(() => setPhotoSavedNotice(false), 3000);
                      }}
                      className="flex items-center gap-1.5 rounded-lg border border-red-200 dark:border-red-900/50 bg-red-50 dark:bg-red-950/30 hover:bg-red-100 text-red-700 dark:text-red-400 px-3 py-2 text-xs font-semibold cursor-pointer transition-colors"
                    >
                      <RotateCcw className="h-3.5 w-3.5" />
                      <span>Revert to Default</span>
                    </button>
                  </div>
                </div>
              </div>

              {photoSavedNotice && (
                <div className="flex items-center gap-2 rounded-lg bg-emerald-50 border border-emerald-200 p-3 text-xs text-emerald-800 dark:bg-emerald-950/40 dark:border-emerald-800 dark:text-emerald-300 animate-in fade-in">
                  <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Photo saved! It will now persist across page refreshes and browser reloads.</span>
                </div>
              )}

              {/* Direct URL input option */}
              <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Or load image from direct web URL:
                </label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                      <LinkIcon className="h-3.5 w-3.5" />
                    </div>
                    <input
                      type="url"
                      value={urlInput}
                      onChange={(e) => setUrlInput(e.target.value)}
                      placeholder="https://example.com/ganesh-photo.jpg"
                      className="w-full rounded-lg border border-slate-300 bg-white py-2 pl-9 pr-3 text-xs text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={handleApplyUrl}
                    disabled={!urlInput.trim()}
                    className="rounded-lg bg-slate-900 dark:bg-slate-800 px-3.5 py-2 text-xs font-semibold text-white hover:bg-slate-800 dark:hover:bg-slate-700 disabled:opacity-50 cursor-pointer transition-colors"
                  >
                    Apply URL
                  </button>
                </div>
              </div>

              {/* GitHub Pages Permanent Tip */}
              <div className="rounded-xl border border-sky-200 bg-sky-50/60 dark:border-sky-900/40 dark:bg-sky-950/30 p-4">
                <div className="flex items-center gap-2 text-xs font-bold text-sky-800 dark:text-sky-300 mb-1">
                  <Sparkles className="h-4 w-4" />
                  <span>GitHub Pages Permanent Deployment Tip</span>
                </div>
                <p className="text-xs text-sky-700 dark:text-sky-300/90 leading-relaxed">
                  To ensure <em>all external visitors worldwide</em> see your updated photo on your live GitHub Pages site:
                  Click <strong>&quot;Download File&quot;</strong> above, save it into your GitHub repository&apos;s <code className="bg-sky-100 dark:bg-sky-900/60 px-1 py-0.5 rounded font-mono text-[11px]">public/Ganesh_Passport.jpg</code> path, and commit/push to GitHub.
                </p>
              </div>
            </div>
          ) : (
            /* Executive Details Tab */
            <form onSubmit={handleSaveDetails} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Designation / Title
                  </label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full rounded-lg border border-slate-300 bg-white p-2.5 text-xs text-slate-900 focus:border-sky-500 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Header Tagline
                  </label>
                  <input
                    type="text"
                    value={tagline}
                    onChange={(e) => setTagline(e.target.value)}
                    className="w-full rounded-lg border border-slate-300 bg-white p-2.5 text-xs text-slate-900 focus:border-sky-500 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Location
                  </label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full rounded-lg border border-slate-300 bg-white p-2.5 text-xs text-slate-900 focus:border-sky-500 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Primary Phone
                  </label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full rounded-lg border border-slate-300 bg-white p-2.5 text-xs text-slate-900 focus:border-sky-500 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Secondary Phone
                  </label>
                  <input
                    type="text"
                    value={secondaryPhone}
                    onChange={(e) => setSecondaryPhone(e.target.value)}
                    className="w-full rounded-lg border border-slate-300 bg-white p-2.5 text-xs text-slate-900 focus:border-sky-500 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Executive Summary
                </label>
                <textarea
                  rows={4}
                  value={summary}
                  onChange={(e) => setSummary(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 bg-white p-2.5 text-xs text-slate-900 focus:border-sky-500 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-white leading-relaxed"
                />
              </div>

              {detailsSavedNotice && (
                <div className="flex items-center gap-2 rounded-lg bg-emerald-50 border border-emerald-200 p-3 text-xs text-emerald-800 dark:bg-emerald-950/40 dark:border-emerald-800 dark:text-emerald-300 animate-in fade-in">
                  <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Profile details updated and saved successfully!</span>
                </div>
              )}

              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  onClick={() => {
                    resetProfile();
                    setTitle(profileData.title);
                    setTagline(profileData.tagline);
                    setLocation(profileData.location);
                    setPhone(profileData.phone);
                    setSecondaryPhone(profileData.secondaryPhone);
                    setSummary(profileData.summary);
                  }}
                  className="text-xs text-slate-500 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                >
                  Reset All to Defaults
                </button>

                <button
                  type="submit"
                  className="flex items-center gap-1.5 rounded-lg bg-sky-600 px-5 py-2 text-xs font-semibold text-white hover:bg-sky-500 transition-colors cursor-pointer shadow-sm"
                >
                  <Check className="h-4 w-4" />
                  <span>Save Changes</span>
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end px-6 py-3 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/40">
          <button
            onClick={() => setIsEditModalOpen(false)}
            className="rounded-lg bg-slate-200 dark:bg-slate-800 px-4 py-2 text-xs font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
