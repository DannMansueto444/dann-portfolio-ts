import type { LearningFocus, SkillCategory } from '../types/content'

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    description:
      'Markup, styling, and component-based interfaces for the web.',
    icon: 'frontend',
    skills: ['HTML5', 'CSS3', 'React JS / TS'],
  },
  {
    id: 'backend',
    title: 'Backend & Data',
    description:
      'Server-side development and relational databases for complete systems.',
    icon: 'backend',
    skills: ['Laravel PHP', 'Native PHP', 'MySQL', 'PostgreSQL'],
  },
  {
    id: 'tools',
    title: 'Tools',
    description:
      'The editors, version control, and local environments I use to build and run projects.',
    icon: 'tools',
    skills: [
      'Visual Studio',
      'Git',
      'GitHub',
      'Laragon',
      'pgAdmin 4',
      'XAMPP',
    ],
  },
]

export const currentlyLearning: LearningFocus = {
  title: 'Currently learning',
  description:
    "I'm expanding my knowledge of API integration, system-to-system communication, and AI integration. At the same time, I'm applying what I learn to our capstone project — gaining practical experience in system design, integrating technologies, solving technical challenges, and collaborating with my team to build a functional system for a real-world problem.",
  topics: [
    'API integration',
    'System-to-system communication',
    'AI integration',
    'System design',
    'Technical collaboration',
  ],
}
