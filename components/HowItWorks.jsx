'use client'
import s from './HowItWorks.module.css'
import useScrollFade from '../hooks/useScrollFade'

const steps = [
  {
    num: '01',
    title: 'Install with one command',
    desc: 'Run the bootstrap script — it clones the repo, installs system deps (tesseract, Python, etc.), sets up a venv, and gets Playwright ready.',
  },
  {
    num: '02',
    title: 'Launch the overlay',
    desc: 'Run KenXSearch from your terminal. A full-screen transparent overlay appears with a hint: "✦ Circle anything to search."',
  },
  {
    num: '03',
    title: 'Circle and search',
    desc: 'Draw a freehand circle. The selection morphs into a rounded rectangle with a pulsing glow. Pick a mode — Search, Visual, Translate, or Shopping.',
  },
]

const screenshots = [
  { icon: '◎', label: 'Full-screen overlay', sub: 'Transparent overlay with PyQt6 — draw anywhere' },
  { icon: '⧉', label: 'Selection glow', sub: 'Freehand circle morphs into rounded rect with pulse' },
  { icon: '🔍', label: 'Search results', sub: 'Google Lens results via Playwright browser automation' },
  { icon: '🌐', label: 'Translate mode', sub: 'Automatic language detection with Google Translate' },
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
              <span className={s.screenshotIcon}>{sc.icon}</span>
              <span className={s.screenshotPlaceholder}>[screenshot placeholder]</span>
            </div>
            <div className={s.screenshotLabel}>{sc.label}</div>
            <div className={s.screenshotSub}>{sc.sub}</div>
          </div>
        ))}
      </div>
    </section>
  )
}