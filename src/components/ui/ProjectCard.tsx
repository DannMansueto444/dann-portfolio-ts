import { ArrowUpRight, Code2 } from '../common/Icon'
import type { Project } from '../../types/project'
import { cn } from '../../lib/utils'
import { BrandIcon } from '../common/BrandIcon'
import { Button } from './Button'

interface ProjectCardProps {
  project: Project
  featured?: boolean
  className?: string
}

export function ProjectCard({
  project,
  featured = false,
  className,
}: ProjectCardProps) {
  const hasLinks = Boolean(project.githubUrl || project.demoUrl)

  return (
    <article
      className={cn(
        'group overflow-hidden rounded-[2rem] border border-border bg-surface/60 transition duration-300 hover:border-accent/30 hover:bg-surface',
        className,
      )}
    >
      <div className="relative overflow-hidden border-b border-border bg-background/40">
        <div className="relative aspect-[16/10] w-full">
          {project.image ? (
            <img
              src={project.image}
              alt={project.imageAlt ?? `${project.title} preview`}
              width={1200}
              height={750}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.01]"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-linear-to-br from-accent/15 via-surface to-background">
              <div className="text-center">
                <Code2
                  className="mx-auto size-7 text-accent-text"
                  aria-hidden="true"
                />
                <p className="mt-3 text-xs uppercase tracking-[0.2em] text-muted">
                  Project preview
                </p>
              </div>
            </div>
          )}

          <div
            aria-hidden="true"
            className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent"
          />

          {project.isPlaceholder ? (
            <span className="absolute left-4 top-4 rounded-full border border-accent/30 bg-background/80 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-accent-text backdrop-blur">
              Sample
            </span>
          ) : null}
        </div>
      </div>

      <div className={cn('p-6 sm:p-8', featured && 'lg:p-10')}>
        <div
          className={cn(
            featured && 'grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end',
          )}
        >
          <div>
            {project.context ? (
              <div>
                <span className="inline-flex rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-accent-text">
                  {project.context}
                </span>
              </div>
            ) : null}

            <h3 className="mt-5 text-2xl font-medium leading-tight tracking-[-0.03em] text-foreground sm:text-[1.9rem]">
              {project.title}
            </h3>

            {project.subtitle ? (
              <p className="mt-2 text-sm font-medium text-accent-text">
                {project.subtitle}
              </p>
            ) : null}

            <p className="mt-4 max-w-2xl text-sm leading-6 text-muted sm:text-[15px] sm:leading-7">
              {project.description}
            </p>
          </div>

          <div className={cn(featured && 'lg:pb-1')}>
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted/80">
                Built with
              </p>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {project.tech.map((technology) => (
                  <li
                    key={technology}
                    className="rounded-md border border-border bg-background/50 px-2.5 py-1 text-[11px] text-foreground/75"
                  >
                    {technology}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              {project.githubUrl ? (
                <Button
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  variant="secondary"
                  size="sm"
                  aria-label={`View the ${project.title} repository on GitHub`}
                >
                  <BrandIcon platform="github" className="size-4" />
                  View repository
                  <ArrowUpRight
                    className="size-3.5 text-muted transition group-hover:text-accent-text"
                    aria-hidden="true"
                  />
                </Button>
              ) : null}

              {project.demoUrl ? (
                <Button
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  size="sm"
                  aria-label={`Open the live demo of ${project.title}`}
                >
                  Live demo
                  <ArrowUpRight className="size-3.5" aria-hidden="true" />
                </Button>
              ) : null}

              {!hasLinks ? (
                <p className="text-sm text-muted">
                  Repository link coming soon.
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
