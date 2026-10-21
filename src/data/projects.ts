import type { Project } from '../types/project'

export const projects: Project[] = [
  {
    id: 'fleet-management-system',
    title: 'Fleet & Transportation Management System',
    subtitle:
      'Predictive fleet monitoring for PrimePower Manpower Services',
    description:
      'A capstone system that centralizes vehicle and driver management, transportation requests, trip and route monitoring, fuel management, transportation-cost analysis, incident reporting, and predictive fleet monitoring for PrimePower Manpower Services.',
    context: 'Capstone · Team project',
    image: '/images/projects/fleet-management-cover.svg',
    imageAlt:
      'Abstract dashboard illustration with route lines and fleet monitoring panels',
    tech: [
      'Laravel PHP',
      'PostgreSQL',
      'Sanctum',
      'Spatie Permission',
      'React JS',
      'Vite',
      'Tailwind CSS v4',
      'React Native',
      'Expo Router',
    ],
    githubUrl:
      'https://github.com/Alexander-Arcel/fleet-management-system.git',
  },
]
