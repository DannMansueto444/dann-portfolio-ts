import { ArrowDownRight, Download } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { Container } from '../components/layout/Container'
import { SocialLinks } from '../components/common/SocialLinks'
import { profile } from '../data/profile'

export function Hero() {
  const hasResume = Boolean(profile.resumeUrl)

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -top-48 left-1/2 h-[38rem] w-[64rem] -translate-x-1/2 rounded-full bg-accent/[0.07] blur-[130px]" />
        <div className="absolute inset-0 bg-grid opacity-50 [mask-image:radial-gradient(ellipse_at_top,black,transparent_72%)]" />
      </div>

      <Container className="grid items-center gap-14 py-16 sm:py-20 lg:min-h-[calc(100svh-4.5rem)] lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:py-20">
        <div className="relative z-10 max-w-2xl">
          <p
            className="hero-enter inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-muted backdrop-blur-sm"
          >
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:hidden" />
              <span className="relative inline-flex size-1.5 rounded-full bg-accent" />
            </span>
            {profile.role}
          </p>

          <h1
            id="hero-title"
            className="hero-enter mt-6 text-[clamp(2.9rem,7.5vw,5.75rem)] font-medium leading-[0.95] tracking-[-0.065em] text-foreground"
            style={{ animationDelay: '80ms' }}
          >
            {profile.firstName}{' '}
            <span className="text-gradient">{profile.lastName}</span>
          </h1>

          <p
            className="hero-enter mt-5 max-w-xl text-xl font-medium leading-snug tracking-[-0.025em] text-foreground sm:text-2xl"
            style={{ animationDelay: '150ms' }}
          >
            {profile.tagline}
          </p>

          <p
            className="hero-enter mt-4 max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8"
            style={{ animationDelay: '210ms' }}
          >
            {profile.intro}
          </p>

          <div
            className="hero-enter mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={{ animationDelay: '280ms' }}
          >
            <Button href="#projects" size="lg">
              View projects
              <ArrowDownRight
                className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                aria-hidden="true"
              />
            </Button>

            <Button
              href={profile.resumeUrl ?? undefined}
              download={hasResume ? 'Dann-Mansueto-Resume.pdf' : undefined}
              disabled={!hasResume}
              variant="secondary"
              size="lg"
              title={hasResume ? undefined : 'Résumé PDF coming soon'}
            >
              <Download className="size-4" aria-hidden="true" />
              {hasResume ? 'Download résumé' : 'Résumé coming soon'}
            </Button>
          </div>

          <div
            className="hero-enter mt-9 flex flex-col gap-3 border-t border-border/60 pt-6 sm:flex-row sm:items-center sm:justify-between"
            style={{ animationDelay: '340ms' }}
          >
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted">
              Find me online
            </p>
            <SocialLinks />
          </div>
        </div>

        <div
          className="hero-enter relative mx-auto w-full max-w-[26rem] lg:max-w-none"
          style={{ animationDelay: '220ms' }}
        >
          <div
            aria-hidden="true"
            className="absolute -inset-6 -z-10 rounded-[3rem] bg-accent/10 blur-[50px]"
          />

          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border bg-surface">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-linear-to-b from-accent/20 via-surface to-background"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-grid opacity-30"
            />
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-[75%] w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/25 blur-[70px]"
            />

            {profile.photo ? (
              <img
                src={profile.photo}
                alt={profile.photoAlt}
                width={617}
                height={723}
                fetchPriority="high"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover object-bottom drop-shadow-[0_24px_48px_rgba(0,0,0,0.45)]"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-gradient text-8xl font-medium tracking-[-0.08em]">
                  DM
                </span>
              </div>
            )}

            <div
              aria-hidden="true"
              className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent"
            />

            <span
              aria-hidden="true"
              className="absolute left-5 top-5 h-10 w-px bg-linear-to-b from-accent to-transparent"
            />
            <span
              aria-hidden="true"
              className="absolute left-5 top-5 h-px w-10 bg-linear-to-r from-accent to-transparent"
            />
            <span
              aria-hidden="true"
              className="absolute bottom-5 right-5 h-10 w-px bg-linear-to-t from-accent to-transparent"
            />
            <span
              aria-hidden="true"
              className="absolute bottom-5 right-5 h-px w-10 bg-linear-to-l from-accent to-transparent"
            />
          </div>

          <div className="absolute -bottom-5 right-4 hidden items-center gap-3 rounded-2xl border border-border bg-background/90 px-4 py-3 backdrop-blur sm:flex lg:-right-4">
            <span className="flex size-2 rounded-full bg-accent" />
            <div>
              <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-muted">
                Currently
              </p>
              <p className="mt-0.5 text-xs font-medium text-foreground">
                BSIT · Expected 2027
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
