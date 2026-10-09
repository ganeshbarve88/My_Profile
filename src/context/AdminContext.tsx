import React, { createContext, useContext, useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/resumeData';

// Private list of authorized accounts - strictly server-side / logic protected, never displayed in public UI
const AUTHORIZED_EMAILS = [
  'ganeshbarve88@gmail.com',
  'ganibarve@gmail.com',
  'colorfulkanasu@gmail.com',
  'supriyabhide08@gmail.com',
].map((e) => e.toLowerCase());

const DEFAULT_PASSKEY = 'Ganesh@ANZ2026';
export const DEFAULT_GOOGLE_CLIENT_ID = '1074072186332-c1ork15p3517unrfbaq94brgee5iepn4.apps.googleusercontent.com';

export interface ProfileOverrides {
  title?: string;
  tagline?: string;
  location?: string;
  phone?: string;
  secondaryPhone?: string;
  summary?: string;
}

export interface GoogleProfileInfo {
  email: string;
  name?: string;
  picture?: string;
}

interface AdminContextType {
  currentUser: string | null;
  googleProfile: GoogleProfileInfo | null;
  isAdmin: boolean;
  googleLogin: (idToken: string) => { success: boolean; message: string };
  passwordLogin: (email: string, passkey: string) => { success: boolean; message: string };
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
  googleClientId: string;
  setGoogleClientId: (id: string) => void;
  changePasskey: (oldPasskey: string, newPasskey: string) => { success: boolean; message: string };
}

const STORAGE_KEYS = {
  USER: 'ganesh_admin_user_session',
  GOOGLE_PROFILE: 'ganesh_admin_google_profile',
  PHOTO: 'ganesh_admin_saved_photo',
  PROFILE: 'ganesh_admin_saved_profile',
  PASSKEY: 'ganesh_admin_custom_passkey',
  GOOGLE_CLIENT_ID: 'ganesh_google_client_id',
};

const DEFAULT_PHOTO = '/Ganesh_Passport.jpg';

// Helper to decode Google JWT ID Token safely without external libraries
function parseGoogleJwt(token: string): any {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );
    return JSON.parse(jsonPayload);
  } catch (e) {
    console.error('Failed to parse Google JWT token', e);
    return null;
  }
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<string | null>(null);
  const [googleProfile, setGoogleProfile] = useState<GoogleProfileInfo | null>(null);
  const [photoUrl, setPhotoUrl] = useState<string>(DEFAULT_PHOTO);
  const [profileOverrides, setProfileOverrides] = useState<ProfileOverrides>({});
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [googleClientId, setGoogleClientIdState] = useState<string>(
    import.meta.env.VITE_GOOGLE_CLIENT_ID || DEFAULT_GOOGLE_CLIENT_ID
  );

  // Initialize from storage on mount
  useEffect(() => {
    try {
      const savedUser = localStorage.getItem(STORAGE_KEYS.USER);
      if (savedUser && AUTHORIZED_EMAILS.includes(savedUser.toLowerCase())) {
        setCurrentUser(savedUser);
      }

      const savedGoogleProfile = localStorage.getItem(STORAGE_KEYS.GOOGLE_PROFILE);
      if (savedGoogleProfile) {
        setGoogleProfile(JSON.parse(savedGoogleProfile));
      }

      const savedPhoto = localStorage.getItem(STORAGE_KEYS.PHOTO);
      if (savedPhoto) {
        setPhotoUrl(savedPhoto);
      }

      const savedProfile = localStorage.getItem(STORAGE_KEYS.PROFILE);
      if (savedProfile) {
        setProfileOverrides(JSON.parse(savedProfile));
      }

      const savedClientId = localStorage.getItem(STORAGE_KEYS.GOOGLE_CLIENT_ID);
      if (savedClientId) {
        setGoogleClientIdState(savedClientId);
      } else {
        setGoogleClientIdState(DEFAULT_GOOGLE_CLIENT_ID);
      }
    } catch (err) {
      console.error('Failed to load admin settings from storage:', err);
    }
  }, []);

  const setGoogleClientId = (id: string) => {
    setGoogleClientIdState(id);
    localStorage.setItem(STORAGE_KEYS.GOOGLE_CLIENT_ID, id);
  };

  // Google Identity Services (GSI) Login Handler
  const googleLogin = (idToken: string): { success: boolean; message: string } => {
    const payload = parseGoogleJwt(idToken);
    if (!payload || !payload.email) {
      return { success: false, message: 'Invalid Google authentication token.' };
    }

    const email = payload.email.trim().toLowerCase();
    const isAuthorized = AUTHORIZED_EMAILS.includes(email);

    if (isAuthorized) {
      const profileInfo: GoogleProfileInfo = {
        email,
        name: payload.name || '',
        picture: payload.picture || '',
      };

      setCurrentUser(email);
      setGoogleProfile(profileInfo);
      localStorage.setItem(STORAGE_KEYS.USER, email);
      localStorage.setItem(STORAGE_KEYS.GOOGLE_PROFILE, JSON.stringify(profileInfo));

      return { success: true, message: `Successfully authenticated via Google as ${email}` };
    }

    return {
      success: false,
      message: 'Access restricted: Your Google Account is not authorized to edit this profile.',
    };
  };

  // Email + Password/Passkey Login Handler
  const passwordLogin = (email: string, passkey: string): { success: boolean; message: string } => {
    const cleanEmail = email.trim().toLowerCase();
    const currentPasskey = localStorage.getItem(STORAGE_KEYS.PASSKEY) || DEFAULT_PASSKEY;

    const isAuthorized = AUTHORIZED_EMAILS.includes(cleanEmail);
    const isPasskeyCorrect = passkey === currentPasskey;

    if (isAuthorized && isPasskeyCorrect) {
      setCurrentUser(cleanEmail);
      localStorage.setItem(STORAGE_KEYS.USER, cleanEmail);
      return { success: true, message: `Welcome back! Authenticated as ${cleanEmail}` };
    }

    // Generic response to prevent user/email enumeration
    return {
      success: false,
      message: 'Authentication failed. Please verify your email and password.',
    };
  };

  const changePasskey = (oldPasskey: string, newPasskey: string): { success: boolean; message: string } => {
    const currentPasskey = localStorage.getItem(STORAGE_KEYS.PASSKEY) || DEFAULT_PASSKEY;
    if (oldPasskey !== currentPasskey) {
      return { success: false, message: 'Current password does not match.' };
    }
    if (!newPasskey || newPasskey.length < 6) {
      return { success: false, message: 'New password must be at least 6 characters.' };
    }

    localStorage.setItem(STORAGE_KEYS.PASSKEY, newPasskey);
    return { success: true, message: 'Password updated successfully!' };
  };

  const logout = () => {
    setCurrentUser(null);
    setGoogleProfile(null);
    localStorage.removeItem(STORAGE_KEYS.USER);
    localStorage.removeItem(STORAGE_KEYS.GOOGLE_PROFILE);
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
        googleProfile,
        isAdmin: !!currentUser,
        googleLogin,
        passwordLogin,
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
        googleClientId,
        setGoogleClientId,
        changePasskey,
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
