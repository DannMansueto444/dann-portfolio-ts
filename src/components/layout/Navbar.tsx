import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Container } from './Container'
import { ThemeToggle } from '../ui/ThemeToggle'
import { SocialLinks } from '../common/SocialLinks'
import { navigation, sectionIds } from '../../data/navigation'
import { profile } from '../../data/profile'
import { useActiveSection } from '../../hooks/useActiveSection'
import { cn } from '../../lib/utils'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const active = useActiveSection(sectionIds)

  useEffect(() => {
    if (!open) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false)
    }

    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between gap-4 sm:h-[4.5rem]">
        <a
          href="#home"
          aria-label="Dann Mansueto — home"
          className="group flex shrink-0 items-center gap-3 rounded-lg"
        >
          <span className="flex size-9 items-center justify-center rounded-xl bg-accent-gradient text-[12px] font-semibold tracking-[-0.02em] text-accent-ink shadow-[0_6px_20px_-8px_rgba(254,127,45,0.8)]">
            DM
          </span>
          <span className="hidden text-sm font-medium tracking-[-0.01em] text-foreground transition group-hover:text-accent-text sm:block">
            {profile.name}
          </span>
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navigation.map((item) => {
              const section = item.href.slice(1)
              const isActive = active === section

              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={isActive ? 'location' : undefined}
                    className={cn(
                      'relative rounded-full px-3.5 py-2 text-sm transition-colors duration-200',
                      isActive
                        ? 'text-foreground'
                        : 'text-muted hover:text-foreground',
                    )}
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={cn(
                        'absolute inset-x-3.5 -bottom-px h-px origin-left bg-accent-gradient transition-transform duration-300',
                        isActive ? 'scale-x-100' : 'scale-x-0',
                      )}
                    />
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-surface/70 text-muted transition hover:border-accent/40 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent lg:hidden"
          >
            {open ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </Container>

      {open ? (
        <div
          id="mobile-navigation"
          className="hero-enter max-h-[calc(100svh-4rem)] overflow-y-auto border-t border-border/70 bg-background/95 backdrop-blur-xl lg:hidden"
          style={{ animationDuration: '300ms' }}
        >
          <Container className="py-5">
            <nav aria-label="Mobile primary">
              <ul className="flex flex-col gap-1">
                {navigation.map((item) => {
                  const section = item.href.slice(1)
                  const isActive = active === section

                  return (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        onClick={() => setOpen(false)}
                        aria-current={isActive ? 'location' : undefined}
                        className={cn(
                          'flex items-center justify-between rounded-xl px-3.5 py-3 text-base transition',
                          isActive
                            ? 'bg-accent/10 text-accent-text'
                            : 'text-muted hover:bg-surface hover:text-foreground',
                        )}
                      >
                        {item.label}
                        <span
                          aria-hidden="true"
                          className={cn(
                            'size-1.5 rounded-full bg-accent transition-opacity',
                            isActive ? 'opacity-100' : 'opacity-0',
                          )}
                        />
                      </a>
                    </li>
                  )
                })}
              </ul>
            </nav>

            <div className="mt-5 flex items-center justify-between gap-4 border-t border-border/70 pt-5">
              <p className="text-xs uppercase tracking-[0.18em] text-muted">
                Connect
              </p>
              <SocialLinks />
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  )
}
