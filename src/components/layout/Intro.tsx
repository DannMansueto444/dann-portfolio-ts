import { useEffect, useRef, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { profile } from '../../data/profile'
import { cn } from '../../lib/utils'

interface IntroProps {
  onComplete: () => void
}

const HOLD_MS = 1650
const EXIT_MS = 820

const initials = `${profile.firstName.charAt(0)}${profile.lastName.charAt(0)}`

export function Intro({ onComplete }: IntroProps) {
  const [exiting, setExiting] = useState(false)
  const dialogRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    dialogRef.current?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setExiting(true)
    }

    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [])

  useEffect(() => {
    const timer = window.setTimeout(() => setExiting(true), HOLD_MS)
    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!exiting) return

    const timer = window.setTimeout(onComplete, EXIT_MS)
    return () => window.clearTimeout(timer)
  }, [exiting, onComplete])

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="intro-title"
      aria-describedby="intro-role"
      tabIndex={-1}
      className={cn(
        'fixed inset-0 z-[200] flex items-center justify-center overflow-hidden bg-background px-6 text-foreground shadow-[0_30px_90px_rgba(0,0,0,0.45)] outline-none',
        'transition-[translate] duration-[780ms] ease-[cubic-bezier(0.76,0,0.24,1)] will-change-[translate] motion-reduce:transition-none',
        exiting ? '-translate-y-full' : 'translate-y-0',
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]" />
        <div className="absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.08] blur-[110px]" />
        <div className="absolute inset-x-10 bottom-0 h-px bg-linear-to-r from-transparent via-accent/55 to-transparent" />
      </div>

      <div className="relative flex flex-col items-center text-center">
        <div
          className="intro-rise flex size-16 items-center justify-center rounded-2xl bg-accent-gradient text-lg font-semibold tracking-[-0.02em] text-accent-ink shadow-[0_18px_50px_-18px_rgba(254,127,45,0.85)]"
          style={{ animationDelay: '0ms' }}
        >
          {initials}
        </div>

        <p
          id="intro-title"
          className="intro-rise mt-7 text-[clamp(2.5rem,7vw,5rem)] font-medium leading-[0.98] tracking-[-0.06em] text-foreground"
          style={{ animationDelay: '90ms' }}
        >
          {profile.firstName}{' '}
          <span className="text-gradient">{profile.lastName}</span>
        </p>

        <p
          id="intro-role"
          className="intro-rise mt-3 text-[10px] font-medium uppercase tracking-[0.28em] text-muted sm:text-xs"
          style={{ animationDelay: '170ms' }}
        >
          {profile.role}
        </p>

        <div
          aria-hidden="true"
          className="intro-rise mt-9 h-px w-48 overflow-hidden bg-border sm:w-64"
          style={{ animationDelay: '240ms' }}
        >
          <span className="intro-progress-bar block h-full w-full bg-accent-gradient" />
        </div>
      </div>

      <button
        type="button"
        onClick={() => setExiting(true)}
        className="group absolute bottom-6 right-5 z-10 inline-flex min-h-11 items-center gap-2 rounded-full border border-border bg-surface/70 px-4 py-2.5 text-xs font-medium text-muted backdrop-blur transition duration-200 hover:border-accent/45 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:bottom-8 sm:right-8"
      >
        Skip intro
        <ArrowRight
          className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </button>
    </div>
  )
}
