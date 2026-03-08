'use client'
import s from './HowItWorks.module.css'
import useScrollFade from '../hooks/useScrollFade'

const steps = [
  {
    num: '01',
    title: 'Install with one command',
    desc: 'Run the bootstrap script — it clones the repo to ~/.local/share/KenXSearch, installs system deps, creates a Python venv, and sets up Playwright Chromium.',
  },
  {
    num: '02',
    title: 'Launch the overlay',
    desc: 'Run KenXSearch from your terminal. A full-screen HUD overlay appears: "TERMINAL INITIALIZED // CIRCLE AREA TO ANALYZE."',
  },
  {
    num: '03',
    title: 'Draw and search',
    desc: 'Draw a circle (or any shape) around anything on screen. The selection snaps into a rectangle with corner brackets and a scanning line. Pick a mode — Search, Visual, Translate, or Shopping.',
  },
]

const screenshots = [
  { icon: '◎', label: 'HUD overlay', sub: 'Full-screen transparent overlay with tech-style HUD elements', image: '/images/user_interface.png' },
  { icon: '⧉', label: 'Selection brackets', sub: 'Selection snaps into a rectangle with corner brackets and scanning line', image: '/images/image_selection.png' },
  { icon: '🔍', label: 'Search results', sub: 'OCR extracts text → Google search, falls back to visual if no text found', image: '/images/visual_search_result.png' },
  { icon: '🌐', label: 'Translate mode', sub: 'Google Lens translate mode with automatic language detection', image: '/images/translate_result.png' },
]

export default function HowItWorks() {
  const ref = useScrollFade()

  return (
    <section id="how-it-works" className="section-wrap" ref={ref}>
      <span className="section-label fade-up">How it works</span>
      <h2 className="section-title fade-up">Three steps. Zero config.</h2>
      <p className="section-sub fade-up">
        From install to first search in under a minute.
      </p>

      <div className={s.steps}>
        {steps.map((step) => (
          <div key={step.num} className={`${s.step} fade-up`}>
            <span className={s.stepNum}>{step.num}</span>
            <h3 className={s.stepTitle}>{step.title}</h3>
            <p className={s.stepDesc}>{step.desc}</p>
          </div>
        ))}
      </div>

      <div className={s.screenshots}>
        {screenshots.map((sc, i) => (
          <div key={i} className={`${s.screenshotCard} fade-up`}>
            <div className={s.screenshotImg}>
              {sc.image ? (
                <img src={sc.image} alt={sc.label} className={s.image} />
              ) : (
                <>
                  <span className={s.screenshotIcon}>{sc.icon}</span>
                  <span className={s.screenshotPlaceholder}>[screenshot placeholder]</span>
                </>
              )}
            </div>
            <div className={s.screenshotLabel}>{sc.label}</div>
            <div className={s.screenshotSub}>{sc.sub}</div>
          </div>
        ))}
      </div>
    </section>
  )
}