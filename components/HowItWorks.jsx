'use client'

import { useScrollFade } from '../hooks/useScrollFade'
import styles from './HowItWorks.module.css'

const STEPS = [
  {
    num: '01',
    cmd: 'kenxsearch',
    flag: '--start',
    title: 'Trigger',
    desc: 'Press your keyboard shortcut or run kenxsearch from the terminal. The overlay appears instantly over your entire desktop.',
    status: 'overlay: active',
  },
  {
    num: '02',
    cmd: 'draw',
    flag: '--circle',
    title: 'Circle',
    desc: 'Draw a freehand circle around anything on screen. The selection snaps to a clean bounding box with a glowing ring.',
    status: 'selection: captured',
  },
  {
    num: '03',
    cmd: 'search',
    flag: '--mode=auto',
    title: 'Search',
    desc: 'Choose Search, Visual, Translate, or Shopping. Your browser opens with results. Close and the program exits cleanly.',
    status: 'exit: 0',
  },
]

const SCREENSHOTS = [
  {
    label: 'selection-overlay',
    sub: 'Frosted overlay with glowing ring over desktop',
    placeholder: 'overlay.png',
  },
  {
    label: 'action-panel',
    sub: 'GTK-style button panel slides up after selection',
    placeholder: 'panel.png',
  },
  {
    label: 'translate-mode',
    sub: 'Korean, Japanese, Arabic — any script',
    placeholder: 'translate.png',
  },
  {
    label: 'visual-results',
    sub: 'Google Lens results in your system browser',
    placeholder: 'lens.png',
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

      {/* Steps as terminal command blocks */}
      <div ref={stepsRef} className={`${styles.steps} fade-up`}>
        {STEPS.map((s, i) => (
          <div key={s.num} className={styles.step}>
            <div className={styles.stepNum}>{s.num}</div>
            <div className={styles.stepContent}>
              <div className={styles.stepCmd}>
                <span className={styles.prompt}>$</span>
                <span className={styles.cmd}>{s.cmd}</span>
                <span className={styles.flag}>{s.flag}</span>
              </div>
              <h3 className={styles.stepTitle}>{s.title}</h3>
              <p className={styles.stepDesc}>{s.desc}</p>
              <div className={styles.stepStatus}>
                <span className={styles.statusDot} />
                <span>{s.status}</span>
              </div>
            </div>
            {i < STEPS.length - 1 && (
              <div className={styles.connector} aria-hidden>
                <span>│</span>
                <span>│</span>
                <span>▼</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Screenshots grid */}
      <div ref={screenshotsRef} className={`${styles.screenshots} fade-up`}>
        {SCREENSHOTS.map(s => (
          <div key={s.label} className={styles.screenshotCard}>
            <div className={styles.screenshotImg}>
              <div className={styles.imgTermBar}>
                <div className={styles.imgDots}>
                  <span style={{ background: '#ff5f57' }} />
                  <span style={{ background: '#febc2e' }} />
                  <span style={{ background: '#28c840' }} />
                </div>
                <span className={styles.imgTitle}>{s.placeholder}</span>
              </div>
              <div className={styles.imgBody}>
                <div className={styles.imgPlaceholder}>
                  <span className={styles.imgIcon}>⬜</span>
                  <span className={styles.imgNote}>[screenshot pending]</span>
                </div>
              </div>
            </div>
            <div className={styles.screenshotMeta}>
              <span className={styles.screenshotLabel}>{s.label}</span>
              <span className={styles.screenshotSub}>{s.sub}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}