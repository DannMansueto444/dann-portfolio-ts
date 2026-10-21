/**
 * The intro plays once per browser session. Bump the key if the intro changes
 * enough that returning visitors should see the new version once.
 */
export const INTRO_SESSION_KEY = 'dann-portfolio-intro-seen-v1'

export function markIntroSeen(): void {
  try {
    window.sessionStorage.setItem(INTRO_SESSION_KEY, '1')
  } catch {
    // Storage can be unavailable; the current visit still works normally.
  }
}

export function shouldShowIntro(): boolean {
  if (typeof window === 'undefined') return false

  try {
    if (window.sessionStorage.getItem(INTRO_SESSION_KEY) === '1') {
      return false
    }
  } catch {
    // If storage is blocked, fall through and show the intro for this visit.
  }

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    markIntroSeen()
    return false
  }

  return true
}
