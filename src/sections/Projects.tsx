import { ArrowUpRight } from '../components/common/Icon'
import { Container } from '../components/layout/Container'
import { BrandIcon } from '../components/common/BrandIcon'
import { Button } from '../components/ui/Button'
import { ProjectCard } from '../components/ui/ProjectCard'
import { Reveal } from '../components/ui/Reveal'
import { SectionHeading } from '../components/ui/SectionHeading'
import { projects } from '../data/projects'
import { socialLinks } from '../data/profile'

export function Projects() {
  const githubUrl = socialLinks.find(
    (link) => link.platform === 'github',
  )?.href

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="scroll-mt-24 border-t border-border/60 py-24 sm:py-32"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Projects"
            titleId="projects-heading"
            title="Selected work."
            description="A capstone project built with a team, plus the experiments and repositories I'm working on next."
          />
        </Reveal>

        <div className="mt-12 space-y-6">
          {projects.length > 0 ? (
            projects.map((project, index) => (
              <Reveal key={project.id} delay={index * 80}>
                <ProjectCard project={project} featured />
              </Reveal>
            ))
          ) : (
            <Reveal>
              <div className="rounded-3xl border border-dashed border-border bg-surface/30 p-10 text-center">
                <p className="text-lg font-medium text-foreground">
                  Projects are being prepared.
                </p>
                <p className="mt-2 text-sm text-muted">
                  Check back soon, or explore my repositories on GitHub.
                </p>
              </div>
            </Reveal>
          )}

          {githubUrl ? (
            <Reveal delay={120}>
              <div className="flex flex-col gap-5 rounded-3xl border border-dashed border-border bg-surface/30 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
                <div>
                  <h3 className="text-lg font-medium tracking-[-0.02em] text-foreground">
                    More work is on the way.
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-6 text-muted">
                    I&apos;m focused on the capstone right now. My other
                    experiments and repositories live on GitHub.
                  </p>
                </div>
                <Button
                  href={githubUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  variant="secondary"
                  className="shrink-0 self-start sm:self-auto"
                >
                  <BrandIcon platform="github" className="size-4" />
                  Visit GitHub
                  <ArrowUpRight className="size-3.5" aria-hidden="true" />
                </Button>
              </div>
            </Reveal>
          ) : null}
        </div>
      </Container>
    </section>
  )
}
