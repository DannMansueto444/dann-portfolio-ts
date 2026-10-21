import { cn } from '../../lib/utils'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
  titleId: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  titleId,
  align = 'left',
  className,
}: SectionHeadingProps) {
  const centered = align === 'center'

  return (
    <div
      className={cn(
        'flex flex-col',
        centered ? 'items-center text-center' : 'items-start',
        className,
      )}
    >
      <p className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.22em] text-accent-text">
        <span
          aria-hidden="true"
          className="h-px w-7 bg-accent-gradient"
        />
        {eyebrow}
      </p>
      <h2
        id={titleId}
        className="mt-4 max-w-3xl text-3xl font-medium leading-[1.05] tracking-[-0.045em] text-foreground sm:text-4xl lg:text-[2.75rem]"
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            'mt-4 max-w-2xl text-base leading-7 text-muted sm:text-lg',
            centered && 'mx-auto',
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}
