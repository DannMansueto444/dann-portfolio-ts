import type { Profile, SocialLink } from '../types/content'

export const profile: Profile = {
  name: 'Dann Mansueto',
  firstName: 'Dann',
  lastName: 'Mansueto',
  headline:
    'Full-Stack Web Developer | Building Modern Designs and Applications',
  role: 'Full-Stack Web Developer',
  tagline: 'Building modern designs and applications.',
  intro:
    "I'm a full-stack web developer passionate about building modern, responsive web applications. I enjoy turning ideas into working products with frontend and backend technologies.",
  about: [
    "I'm a graduating Bachelor of Science in Information Technology student and an aspiring full-stack developer focused on learning and improving my skills across frontend and backend development.",
    "I'm interested in creating clean user interfaces, building reliable backend systems, and working with databases. I also enjoy understanding how complete systems fit together — from the first screen to the data behind it.",
    "Right now, I'm expanding my knowledge of API integration, system-to-system communication, and AI integration while applying what I learn to our capstone project. My goal is to grow into a developer who can design, build, and maintain practical systems that solve real-world problems.",
  ],
  email: 'mansuetofrancisdanieldibel@gmail.com',
  photo: '/images/profile.webp',
  photoAlt: 'Portrait of Dann Mansueto',
  // Résumé PDF lives in public/dann-resume.pdf.
  resumeUrl: '/dann-resume.pdf',
}

export const socialLinks: SocialLink[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/DannMansueto444',
    platform: 'github',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/francis-daniel-mansueto-6267283a8',
    platform: 'linkedin',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/_hyodannski/',
    platform: 'instagram',
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/francisdaniel.d.mansueto/',
    platform: 'facebook',
  },
  {
    label: 'X',
    href: 'https://x.com/dannskirudw',
    platform: 'x',
  },
]
