import type { MouseEventHandler, ReactNode } from 'react'
import { cn } from '../../lib/utils'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps {
  children: ReactNode
  href?: string
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  disabled?: boolean
  download?: boolean | string
  target?: string
  rel?: string
  type?: 'button' | 'submit' | 'reset'
  title?: string
  'aria-label'?: string
  onClick?: MouseEventHandler<HTMLElement>
}

const base =
  'group inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-[-0.01em] transition duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:pointer-events-none disabled:opacity-50'

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-accent-gradient text-accent-ink shadow-[0_10px_30px_-12px_rgba(254,127,45,0.65)] hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-14px_rgba(254,127,45,0.72)]',
  secondary:
    'border border-border bg-surface/70 text-foreground backdrop-blur-sm hover:-translate-y-0.5 hover:border-accent/45 hover:bg-surface',
  ghost: 'text-muted hover:bg-surface hover:text-foreground',
}

const sizes: Record<ButtonSize, string> = {
  sm: 'h-9 px-4 text-[13px]',
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-6 text-[15px]',
}

export function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className,
  disabled = false,
  download,
  target,
  rel,
  type = 'button',
  title,
  'aria-label': ariaLabel,
  onClick,
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className)

  if (href) {
    if (disabled) {
      return (
        <span
          role="link"
          aria-disabled="true"
          aria-label={ariaLabel}
          title={title}
          className={cn(classes, 'cursor-not-allowed opacity-50')}
        >
          {children}
        </span>
      )
    }

    return (
      <a
        href={href}
        className={classes}
        download={download}
        target={target}
        rel={target === '_blank' ? (rel ?? 'noreferrer noopener') : rel}
        title={title}
        aria-label={ariaLabel}
        onClick={onClick}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      type={type}
      className={cn(classes, disabled && 'cursor-not-allowed opacity-50')}
      disabled={disabled}
      title={title}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
