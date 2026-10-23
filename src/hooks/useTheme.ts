import { useEffect, useState } from 'react'

export type Theme = 'dark' | 'light'

const STORAGE_KEY = 'dann-portfolio-theme'

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'light'

  let stored: string | null = null

  try {
    stored = window.localStorage.getItem(STORAGE_KEY)
  } catch {
    // Fall through to the operating system preference.
  }

  if (stored === 'light' || stored === 'dark') return stored

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('light', theme === 'light')
    root.style.colorScheme = theme
    root.style.backgroundColor = theme === 'dark' ? '#0c0c0f' : '#ffffff'

    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', theme === 'dark' ? '#0c0c0f' : '#ffffff')
  }, [theme])

  const toggleTheme = () => {
    setTheme((current) => {
      const next = current === 'dark' ? 'light' : 'dark'

      try {
        window.localStorage.setItem(STORAGE_KEY, next)
      } catch {
        // The theme still applies for the current visit if storage is blocked.
      }

      return next
    })
  }

  return { theme, toggleTheme }
}
