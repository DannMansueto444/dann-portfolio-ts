export interface Project {
  id: string
  title: string
  subtitle?: string
  description: string
  context?: string
  image?: string
  imageAlt?: string
  tech: string[]
  githubUrl?: string
  demoUrl?: string
  isPlaceholder?: boolean
}
