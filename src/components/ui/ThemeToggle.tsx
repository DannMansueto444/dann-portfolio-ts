import { Moon, Sun } from '../common/Icon'
import { useTheme } from '../../hooks/useTheme'
import { cn } from '../../lib/utils'

interface ThemeToggleProps {
  className?: string
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme()
  const isLight = theme === 'light'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isLight ? 'dark' : 'light'} theme`}
      aria-pressed={isLight}
      title={`Switch to ${isLight ? 'dark' : 'light'} theme`}
      className={cn(
        'inline-flex size-10 items-center justify-center rounded-full border border-border bg-surface/70 text-muted transition duration-200 hover:border-accent/40 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
        className,
      )}
    >
      {isLight ? (
        <Moon className="size-[18px]" aria-hidden="true" />
      ) : (
        <Sun className="size-[18px]" aria-hidden="true" />
      )}
    </button>
  )
}
