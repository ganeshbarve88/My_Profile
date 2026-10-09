export interface RolePromotion {
  title: string;
  period: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  startDate: string;
  endDate: string;
  client?: string;
  badge?: string;
  summary: string;
  roleProgression?: RolePromotion[];
  highlights: {
    title: string;
    description: string;
    tags?: string[];
  }[];
  awards?: string[];
  technologies: string[];
}

export interface SkillCategory {
  category: string;
  skills: {
    name: string;
    experience: string;
    level: 'Expert' | 'Advanced' | 'Proficient';
    enterpriseUse: string;
  }[];
}

export interface EducationItem {
  course: string;
  institution: string;
  universityOrBoard: string;
  passingYear: string;
  aggregate: string;
}

export interface Certification {
  title: string;
  issuer: string;
  validity: string;
  credentialId?: string;
  highlight: string;
  iconType: 'gcp' | 'genai' | 'salesforce' | 'degree';
}

export interface Award {
  title: string;
  organization: string;
  reason: string;
  year?: string;
  count?: number;
}

export interface ArchitectureStep {
  id: string;
  phase: string;
  title: string;
  tech: string[];
  description: string;
  outcomes: string[];
  systemType: 'source' | 'orchestration' | 'storage' | 'warehouse' | 'consumption';
}

export interface SocialLink {
  id: string;
  name: string;
  category: 'Code & Tools' | 'YouTube & Podcasts' | 'Writing & Literature' | 'Professional & Social';
  handle: string;
  url: string;
  tagline: string;
  description: string;
  icon: 'github' | 'linkedin' | 'youtube' | 'convertify' | 'blog' | 'x' | 'threads' | 'instagram' | 'facebook';
  badge: string;
  nativeTitle?: string;
  isApp?: boolean;
}

