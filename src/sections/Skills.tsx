import { Container } from '../components/layout/Container'
import { Reveal } from '../components/ui/Reveal'
import { SectionHeading } from '../components/ui/SectionHeading'
import { SkillCard } from '../components/ui/SkillCard'
import {
  currentlyLearning,
  skillCategories,
} from '../data/skills'

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="scroll-mt-24 border-t border-border/60 py-24 sm:py-32"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            titleId="skills-heading"
            title="A practical toolkit, still growing."
            description="The technologies I'm working with today, grouped by how I use them. No invented proficiency scores — just the stack I'm building with."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <Reveal key={category.id} delay={index * 80}>
              <SkillCard category={category} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={160} className="mt-4">
          <div className="relative overflow-hidden rounded-3xl border border-accent/20 bg-accent/[0.045] p-6 sm:p-8">
            <div
              aria-hidden="true"
              className="absolute -right-24 -top-24 size-64 rounded-full bg-accent/10 blur-3xl"
            />

            <div className="relative grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-start lg:gap-10">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-accent-text">
                  {currentlyLearning.title}
                </p>
                <h3 className="mt-3 text-xl font-medium tracking-[-0.025em] text-foreground sm:text-2xl">
                  Applying new ideas to a real system.
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-muted sm:text-[15px] sm:leading-7">
                  {currentlyLearning.description}
                </p>
              </div>

              <ul className="flex flex-wrap gap-2 lg:justify-end">
                {currentlyLearning.topics.map((topic) => (
                  <li
                    key={topic}
                    className="rounded-full border border-accent/20 bg-background/40 px-3 py-1.5 text-xs text-foreground/80"
                  >
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
