export interface NavItem {
  label: string
  href: string
}

export type SocialPlatform =
  | 'github'
  | 'linkedin'
  | 'instagram'
  | 'facebook'
  | 'x'

export interface SocialLink {
  label: string
  href: string
  platform: SocialPlatform
}

export interface Profile {
  name: string
  firstName: string
  lastName: string
  headline: string
  role: string
  tagline: string
  intro: string
  about: string[]
  email: string
  photo?: string
  photoAlt: string
  resumeUrl?: string | null
}

export type SkillIcon = 'frontend' | 'backend' | 'tools'

export interface SkillCategory {
  id: string
  title: string
  description: string
  icon: SkillIcon
  skills: string[]
}

export interface LearningFocus {
  title: string
  description: string
  topics: string[]
}

export interface EducationItem {
  id: string
  degree: string
  institution: string
  start: string
  end: string
  status: string
  coursework: string[]
  note?: string
}
