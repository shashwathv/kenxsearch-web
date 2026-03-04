'use client'

import { useScrollFade } from '../hooks/useScrollFade'
import styles from './HowItWorks.module.css'

const STEPS = [
  {
    num: '01',
    title: 'Trigger',
    desc: 'Press your keyboard shortcut or run kenxsearch from the terminal. The overlay appears instantly over your entire desktop.',
    code: 'kenxsearch',
  },
  {
    num: '02',
    title: 'Circle',
    desc: 'Draw a freehand circle around anything on screen. The selection snaps to a clean bounding box with a glowing blue ring.',
    code: null,
  },
  {
    num: '03',
    title: 'Search',
    desc: 'Choose Search, Visual, Translate, or Shopping. Your browser opens with results. Close the browser and the program exits cleanly.',
    code: null,
  },
]

const SCREENSHOTS = [
  {
    label: 'Selection overlay',
    sub: 'The frosted glass overlay with glowing electric blue ring',
    placeholder: '[screenshot: overlay with selection ring]',
  },
  {
    label: 'Action panel',
    sub: 'iOS-style frosted glass pill buttons slide up after selection',
    placeholder: '[screenshot: search buttons]',
  },
  {
    label: 'Translate',
    sub: 'Korean, Japanese, Arabic — any script, no language packs',
    placeholder: '[screenshot: translate mode — Korean]',
  },
  {
    label: 'Visual results',
    sub: 'Google Lens results open in your system browser',
    placeholder: '[screenshot: Google Lens results]',
  },
]

export default function HowItWorks() {
  const headerRef      = useScrollFade()
  const stepsRef       = useScrollFade(0.1)
  const screenshotsRef = useScrollFade(0.1)

  return (
    <section id="how" className="section-wrap" style={{ paddingTop: 0 }}>
      <div ref={headerRef} className="fade-up">
        <p className="section-label">How it works</p>
        <h2 className="section-title">
          Three steps.<br />Zero friction.
        </h2>
      </div>

      {/* Steps */}
      <div ref={stepsRef} className={`${styles.steps} fade-up`}>
        {STEPS.map(s => (
          <div key={s.num} className={styles.step}>
            <div className={styles.stepNum}>{s.num}</div>
            <h3 className={styles.stepTitle}>{s.title}</h3>
            <p className={styles.stepDesc}>
              {s.code
                ? <>
                    Press your keyboard shortcut or run{' '}
                    <code className={styles.code}>{s.code}</code>{' '}
                    from the terminal. The overlay appears instantly over your entire desktop.
                  </>
                : s.desc
              }
            </p>
          </div>
        ))}
      </div>

      {/* Screenshots */}
      <div ref={screenshotsRef} className={`${styles.screenshots} fade-up`}>
        {SCREENSHOTS.map(s => (
          <div key={s.label} className={styles.screenshotCard}>
            <div className={styles.screenshotImg}>
              <div className={styles.screenshotIcon}>⬜</div>
              <span className={styles.screenshotPlaceholder}>{s.placeholder}</span>
            </div>
            <div className={styles.screenshotLabel}>{s.label}</div>
            <div className={styles.screenshotSub}>{s.sub}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
