import { CalendarDays, GraduationCap } from 'lucide-react'
import { Container } from '../components/layout/Container'
import { Reveal } from '../components/ui/Reveal'
import { SectionHeading } from '../components/ui/SectionHeading'
import { education } from '../data/education'

export function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="scroll-mt-24 border-t border-border/60 py-24 sm:py-32"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Education"
            titleId="education-heading"
            title="Education & continuous learning."
            description="The formal foundation behind the work, and the coursework that shapes how I approach systems."
          />
        </Reveal>

        <div className="relative mt-12">
          <div
            aria-hidden="true"
            className="absolute bottom-2 left-4 top-2 w-px bg-linear-to-b from-accent via-border to-transparent sm:left-5"
          />

          {education.map((item) => (
            <div key={item.id} className="relative pl-12 sm:pl-16">
              <span className="absolute left-0 top-1 flex size-8 items-center justify-center rounded-full border border-accent/30 bg-background text-accent-text sm:size-10">
                <GraduationCap className="size-4" aria-hidden="true" />
              </span>

              <Reveal>
                <article className="rounded-3xl border border-border bg-surface/60 p-6 sm:p-8">
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="inline-flex rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-accent-text">
                        {item.status}
                      </p>
                      <h3 className="mt-4 text-xl font-medium tracking-[-0.025em] text-foreground sm:text-2xl">
                        {item.degree}
                      </h3>
                      <p className="mt-1.5 text-sm text-muted">
                        {item.institution}
                      </p>
                    </div>

                    <span className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-border bg-background/40 px-3 py-1.5 text-xs text-muted">
                      <CalendarDays className="size-3.5" aria-hidden="true" />
                      {item.start} — {item.end}
                    </span>
                  </div>

                  <div className="mt-6 border-t border-border/70 pt-5">
                    <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted/80">
                      Relevant coursework
                    </p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {item.coursework.map((course) => (
                        <li
                          key={course}
                          className="rounded-full border border-border bg-background/40 px-3 py-1.5 text-xs text-foreground/80"
                        >
                          {course}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {item.note ? (
                    <p className="mt-5 text-sm leading-6 text-muted">
                      {item.note}
                    </p>
                  ) : null}
                </article>
              </Reveal>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
