import { ArrowUp } from 'lucide-react'
import { Container } from './Container'
import { SocialLinks } from '../common/SocialLinks'
import { profile } from '../../data/profile'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border/70">
      <Container className="flex flex-col gap-8 py-10 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-sm">
          <a
            href="#home"
            className="inline-flex items-center gap-3 rounded-lg"
            aria-label="Back to the top"
          >
            <span className="flex size-9 items-center justify-center rounded-xl bg-accent-gradient text-[12px] font-semibold tracking-[-0.02em] text-accent-ink">
              DM
            </span>
            <span className="text-sm font-medium text-foreground">
              {profile.name}
            </span>
          </a>
          <p className="mt-4 text-sm leading-6 text-muted">
            Full-stack web developer building modern, responsive applications
            from interface to database.
          </p>
        </div>

        <div className="flex flex-col gap-5 sm:items-end">
          <SocialLinks />
          <p className="text-xs text-muted">
            © {year} {profile.name}. All rights reserved.
          </p>
        </div>
      </Container>

      <Container className="flex flex-col gap-3 border-t border-border/60 py-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>Built with React, TypeScript, Vite & Tailwind CSS.</p>
        <a
          href="#home"
          className="inline-flex items-center gap-1.5 self-start rounded text-muted transition hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:self-auto"
        >
          Back to top
          <ArrowUp className="size-3.5" aria-hidden="true" />
        </a>
      </Container>
    </footer>
  )
}
