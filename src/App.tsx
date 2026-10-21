import { useCallback, useEffect, useRef, useState } from 'react'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Intro } from './components/layout/Intro'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Skills } from './sections/Skills'
import { Projects } from './sections/Projects'
import { Education } from './sections/Education'
import { Contact } from './sections/Contact'
import { markIntroSeen, shouldShowIntro } from './lib/intro'

function App() {
  const [showIntro, setShowIntro] = useState(shouldShowIntro)
  const mainRef = useRef<HTMLElement>(null)
  const introWasShown = useRef(showIntro)

  useEffect(() => {
    if (showIntro) markIntroSeen()
  }, [showIntro])

  useEffect(() => {
    if (introWasShown.current && !showIntro) {
      mainRef.current?.focus({ preventScroll: true })
    }
  }, [showIntro])

  const completeIntro = useCallback(() => {
    markIntroSeen()
    setShowIntro(false)
  }, [])

  return (
    <>
      <div
        className="relative min-h-svh"
        inert={showIntro}
        aria-hidden={showIntro || undefined}
      >
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-ink transition focus:translate-y-0"
        >
          Skip to content
        </a>

        <Navbar />

        <main
          id="main-content"
          ref={mainRef}
          tabIndex={-1}
          className="outline-none"
        >
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Contact />
        </main>

        <Footer />
      </div>

      {showIntro ? <Intro onComplete={completeIntro} /> : null}
    </>
  )
}

export default App
