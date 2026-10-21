import { ArrowUpRight, GraduationCap, Layers, Sparkles } from 'lucide-react'
import { Container } from '../components/layout/Container'
import { Reveal } from '../components/ui/Reveal'
import { SectionHeading } from '../components/ui/SectionHeading'
import { profile } from '../data/profile'

const facts = [
  {
    icon: GraduationCap,
    label: 'Education',
    value: 'BS Information Technology',
    detail: '2023 — 2027',
  },
  {
    icon: Layers,
    label: 'Focus',
    value: 'Full-stack web development',
    detail: 'Frontend · Backend · Data',
  },
  {
    icon: Sparkles,
    label: 'Currently',
    value: 'Capstone development',
    detail: 'API & AI integration',
  },
]

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-24 border-t border-border/60 py-24 sm:py-32"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="About"
            titleId="about-heading"
            title="Learning by building, from interface to database."
            description="A little about my background, what I enjoy working on, and where I'm headed."
          />
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <Reveal className="space-y-5">
            {profile.about.map((paragraph, index) => (
              <p
                key={paragraph}
                className={
                  index === 0
                    ? 'text-base leading-7 text-foreground/90 sm:text-lg sm:leading-8'
                    : 'text-base leading-7 text-muted sm:text-lg sm:leading-8'
                }
              >
                {paragraph}
              </p>
            ))}
          </Reveal>

          <Reveal delay={120}>
            <aside className="rounded-3xl border border-border bg-surface/60 p-6 sm:p-8">
              <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-accent-text">
                Quick facts
              </p>

              <dl className="mt-6 space-y-5">
                {facts.map((fact) => {
                  const Icon = fact.icon

                  return (
                    <div key={fact.label} className="flex gap-3.5">
                      <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg border border-border bg-background/50 text-accent-text">
                        <Icon className="size-4" aria-hidden="true" />
                      </span>
                      <div>
                        <dt className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted">
                          {fact.label}
                        </dt>
                        <dd className="mt-1 text-sm font-medium text-foreground">
                          {fact.value}
                        </dd>
                        <dd className="mt-0.5 text-xs text-muted">
                          {fact.detail}
                        </dd>
                      </div>
                    </div>
                  )
                })}
              </dl>

              <div className="mt-7 border-t border-border/70 pt-6">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded text-sm font-medium text-foreground transition hover:text-accent-text focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  Let&apos;s work together
                  <ArrowUpRight
                    className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </aside>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
