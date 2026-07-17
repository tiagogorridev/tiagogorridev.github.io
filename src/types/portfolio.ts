import type { LucideIcon } from 'lucide-react'

export type Language = 'pt' | 'en'

export interface Profile {
  name: string
  role: string
  specialties: string[]
  tagline: string
  location: string
  email: string
  resumeUrl: string
  aboutParagraphs: string[]
}

export interface NavLink {
  label: string
  href: string
}

export interface SocialLink {
  label: string
  href: string
  icon: LucideIcon
}

export interface QuickFact {
  label: string
  value: string
  icon: LucideIcon
}

export interface Experience {
  company: string
  role: string
  period: string
  location: string
  description: string
  highlights: string[]
  stack: string[]
}

export interface EducationEntry {
  institution: string
  degree: string
  period: string
  highlights: string[]
}

export interface Certification {
  title: string
  /** Data de emissão ou período (ex.: 'Jun 2025'). */
  date?: string
  /** Código da credencial (opcional). */
  credentialId?: string
  /** Link da credencial (opcional). */
  url?: string
  /** Aparece na visão resumida, antes de expandir. */
  featured?: boolean
}

/** Certificações agrupadas por emissor (Microsoft, Cisco, Udemy etc.). */
export interface CertificationGroup {
  issuer: string
  certifications: Certification[]
}

export interface SkillCategory {
  title: string
  icon: LucideIcon
  skills: string[]
}

/** Textos de interface que mudam conforme o idioma. */
export interface UIStrings {
  skipToContent: string
  navAriaLabel: string
  languageAriaLabel: string
  openMenu: string
  closeMenu: string
  heroGreeting: string
  viewExperiences: string
  getInTouch: string
  scrollToAbout: string
  avatarAlt: string
  aboutEyebrow: string
  aboutTitle: string
  downloadCv: string
  experienceEyebrow: string
  experienceTitle: string
  experienceDescription: string
  techUsedAriaLabel: string
  educationEyebrow: string
  educationTitle: string
  educationDescription: string
  academicBackground: string
  certificationsTitle: string
  showAllCertifications: string
  showLessCertifications: string
  credentialAriaLabel: string
  skillsEyebrow: string
  skillsTitle: string
  skillsDescription: string
  contactEyebrow: string
  contactTitle: string
  contactDescription: string
  copyEmail: string
  emailCopied: string
  orEmailDirect: string
  backToTop: string
  opensInNewTab: string
}

/** Todo o conteúdo do site em um idioma. */
export interface PortfolioContent {
  ui: UIStrings
  profile: Profile
  navLinks: NavLink[]
  quickFacts: QuickFact[]
  experiences: Experience[]
  educationList: EducationEntry[]
  certificationGroups: CertificationGroup[]
  skillCategories: SkillCategory[]
}
