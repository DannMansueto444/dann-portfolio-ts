import { useEffect, useRef, useState } from 'react'
import { Check, Copy, Mail } from '../components/common/Icon'
import { Container } from '../components/layout/Container'
import { SocialLinks } from '../components/common/SocialLinks'
import { Button } from '../components/ui/Button'
import { Reveal } from '../components/ui/Reveal'
import { SectionHeading } from '../components/ui/SectionHeading'
import { profile } from '../data/profile'

/**
 * There is intentionally no contact form here: a static site cannot deliver
 * messages on its own. To add one later, connect Formspree, Netlify Forms, or
 * an API endpoint and handle loading, success, and error states explicitly.
 */
export function Contact() {
  const [copied, setCopied] = useState(false)
  const timeoutRef = useRef<number | undefined>(undefined)

  useEffect(() => {
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current)
    }
  }, [])

  const copyEmail = async () => {
    if (!navigator.clipboard) return

    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)

      if (timeoutRef.current) window.clearTimeout(timeoutRef.current)
      timeoutRef.current = window.setTimeout(() => setCopied(false), 2200)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-24 border-t border-border/60 py-24 sm:py-32"
    >
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-surface/60 px-6 py-12 sm:px-10 sm:py-14 lg:px-14">
            <div
              aria-hidden="true"
              className="absolute -right-32 -top-32 size-96 rounded-full bg-accent/10 blur-[90px]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-grid opacity-20 [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_65%)]"
            />

            <div className="relative grid gap-10 lg:grid-cols-[1fr_0.55fr] lg:items-end">
              <div>
                <SectionHeading
                  eyebrow="Contact"
                  titleId="contact-heading"
                  title="Let's build something useful."
                  description="Have a question, a project idea, or an opportunity to discuss? Email is the best way to reach me."
                />

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button href={`mailto:${profile.email}`} size="lg">
                    <Mail className="size-4" aria-hidden="true" />
                    Send an email
                  </Button>

                  <Button
                    variant="secondary"
                    size="lg"
                    onClick={copyEmail}
                    aria-label="Copy email address to clipboard"
                  >
                    {copied ? (
                      <Check
                        className="size-4 text-accent-text"
                        aria-hidden="true"
                      />
                    ) : (
                      <Copy className="size-4" aria-hidden="true" />
                    )}
                    {copied ? 'Copied!' : 'Copy email'}
                  </Button>
                </div>

                <p className="mt-4 break-all text-sm text-muted">
                  {profile.email}
                </p>

                <p aria-live="polite" className="sr-only">
                  {copied ? 'Email address copied to clipboard.' : ''}
                </p>
              </div>

              <div className="border-t border-border/70 pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted">
                  Find me online
                </p>
                <SocialLinks className="mt-4" />
                <p className="mt-4 max-w-xs text-xs leading-5 text-muted">
                  This is a static site with no contact form. Email is the
                  fastest way to reach me.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
