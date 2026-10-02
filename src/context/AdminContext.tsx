import React, { createContext, useContext, useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/resumeData';

export const AUTHORIZED_EMAILS = [
  'ganeshbarve88@gmail.com',
  'ganibarve@gmail.com',
  'colorfulkanasu@gmail.com',
  'supriyabhide08@gmail.com',
];

export interface ProfileOverrides {
  title?: string;
  tagline?: string;
  location?: string;
  phone?: string;
  secondaryPhone?: string;
  summary?: string;
}

interface AdminContextType {
  currentUser: string | null;
  isAdmin: boolean;
  login: (email: string) => { success: boolean; message: string };
  logout: () => void;
  photoUrl: string;
  updatePhoto: (dataUrl: string) => void;
  resetPhoto: () => void;
  profileData: typeof PERSONAL_INFO;
  updateProfile: (overrides: Partial<ProfileOverrides>) => void;
  resetProfile: () => void;
  isEditModalOpen: boolean;
  setIsEditModalOpen: (open: boolean) => void;
  isLoginModalOpen: boolean;
  setIsLoginModalOpen: (open: boolean) => void;
}

const STORAGE_KEYS = {
  USER: 'ganesh_admin_user_session',
  PHOTO: 'ganesh_admin_saved_photo',
  PROFILE: 'ganesh_admin_saved_profile',
};

const DEFAULT_PHOTO = '/Ganesh_Passport.jpg';

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<string | null>(null);
  const [photoUrl, setPhotoUrl] = useState<string>(DEFAULT_PHOTO);
  const [profileOverrides, setProfileOverrides] = useState<ProfileOverrides>({});
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  // Initialize from localStorage on mount
  useEffect(() => {
    try {
      const savedUser = localStorage.getItem(STORAGE_KEYS.USER);
      if (savedUser && AUTHORIZED_EMAILS.map((e) => e.toLowerCase()).includes(savedUser.toLowerCase())) {
        setCurrentUser(savedUser);
      }

      const savedPhoto = localStorage.getItem(STORAGE_KEYS.PHOTO);
      if (savedPhoto) {
        setPhotoUrl(savedPhoto);
      }

      const savedProfile = localStorage.getItem(STORAGE_KEYS.PROFILE);
      if (savedProfile) {
        setProfileOverrides(JSON.parse(savedProfile));
      }
    } catch (err) {
      console.error('Failed to load admin settings from storage:', err);
    }
  }, []);

  const login = (email: string): { success: boolean; message: string } => {
    const cleanEmail = email.trim().toLowerCase();
    const isAuthorized = AUTHORIZED_EMAILS.some((e) => e.toLowerCase() === cleanEmail);

    if (isAuthorized) {
      setCurrentUser(cleanEmail);
      localStorage.setItem(STORAGE_KEYS.USER, cleanEmail);
      return { success: true, message: `Welcome back! Signed in as ${cleanEmail}` };
    }

    return {
      success: false,
      message: 'Access restricted: Only authorized email addresses can edit this profile.',
    };
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem(STORAGE_KEYS.USER);
    setIsEditModalOpen(false);
  };

  const updatePhoto = (dataUrl: string) => {
    setPhotoUrl(dataUrl);
    try {
      localStorage.setItem(STORAGE_KEYS.PHOTO, dataUrl);
    } catch (e) {
      console.warn('LocalStorage limit reached for photo, holding in memory session', e);
    }
  };

  const resetPhoto = () => {
    setPhotoUrl(DEFAULT_PHOTO);
    localStorage.removeItem(STORAGE_KEYS.PHOTO);
  };

  const updateProfile = (overrides: Partial<ProfileOverrides>) => {
    const updated = { ...profileOverrides, ...overrides };
    setProfileOverrides(updated);
    try {
      localStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(updated));
    } catch (e) {
      console.error('Failed to save profile overrides', e);
    }
  };

  const resetProfile = () => {
    setProfileOverrides({});
    localStorage.removeItem(STORAGE_KEYS.PROFILE);
  };

  const mergedProfile = {
    ...PERSONAL_INFO,
    ...profileOverrides,
  };

  return (
    <AdminContext.Provider
      value={{
        currentUser,
        isAdmin: !!currentUser,
        login,
        logout,
        photoUrl,
        updatePhoto,
        resetPhoto,
        profileData: mergedProfile,
        updateProfile,
        resetProfile,
        isEditModalOpen,
        setIsEditModalOpen,
        isLoginModalOpen,
        setIsLoginModalOpen,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};
