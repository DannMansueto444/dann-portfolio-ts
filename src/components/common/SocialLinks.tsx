import type { SocialLink } from '../../types/content'
import { socialLinks } from '../../data/profile'
import { cn } from '../../lib/utils'
import { BrandIcon } from './BrandIcon'

interface SocialLinksProps {
  links?: readonly SocialLink[]
  className?: string
}

export function SocialLinks({
  links = socialLinks,
  className,
}: SocialLinksProps) {
  return (
    <ul className={cn('flex flex-wrap items-center gap-2', className)}>
      {links.map((link) => (
        <li key={link.platform}>
          <a
            href={link.href}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`${link.label} (opens in a new tab)`}
            title={link.label}
            className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-surface/60 text-muted transition duration-200 hover:-translate-y-0.5 hover:border-accent/45 hover:text-accent-text focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <BrandIcon platform={link.platform} className="size-[17px]" />
          </a>
        </li>
      ))}
    </ul>
  )
}
