import { Braces, Server, Wrench } from 'lucide-react'
import type { SkillCategory, SkillIcon } from '../../types/content'

interface SkillCardProps {
  category: SkillCategory
}

const icons: Record<SkillIcon, typeof Braces> = {
  frontend: Braces,
  backend: Server,
  tools: Wrench,
}

export function SkillCard({ category }: SkillCardProps) {
  const Icon = icons[category.icon]

  return (
    <article className="group h-full rounded-3xl border border-border bg-surface/60 p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/30 hover:bg-surface sm:p-7">
      <div className="flex items-center gap-3">
        <span className="flex size-10 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent-text">
          <Icon className="size-5" aria-hidden="true" />
        </span>
        <h3 className="text-lg font-medium tracking-[-0.02em] text-foreground">
          {category.title}
        </h3>
      </div>

      <p className="mt-4 text-sm leading-6 text-muted">
        {category.description}
      </p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <li
            key={skill}
            className="rounded-full border border-border bg-background/40 px-3 py-1.5 text-xs text-foreground/80 transition group-hover:border-border/80"
          >
            {skill}
          </li>
        ))}
      </ul>
    </article>
  )
}
