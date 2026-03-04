'use client'

import { useScrollFade } from '../hooks/useScrollFade'
import styles from './Features.module.css'

const FEATURES = [
  {
    num: '01',
    icon: '🔎',
    iconBg: 'rgba(74,143,255,0.1)',
    title: 'Text Search',
    desc: 'Circle any text on screen. KenxSearch runs multi-strategy OCR, extracts the words, and opens a Google search — all in under a second.',
    tag: 'Powered by Tesseract OCR',
    tagColor: 'var(--accent)',
    tagBorder: 'rgba(74,143,255,0.2)',
  },
  {
    num: '02',
    icon: '🖼',
    iconBg: 'rgba(77,255,158,0.08)',
    title: 'Visual Search',
    desc: 'Circle any image, logo, or object. Google Lens identifies it visually — no text needed. Find products, landmarks, plants, anything.',
    tag: 'Google Lens powered',
    tagColor: 'var(--green)',
    tagBorder: 'rgba(77,255,158,0.2)',
  },
  {
    num: '03',
    icon: '🌏',
    iconBg: 'rgba(255,209,102,0.08)',
    title: 'Translate',
    desc: 'Circle text in any language — Korean, Japanese, Arabic, Chinese, Hindi. Google Lens translates natively. No language packs required.',
    tag: 'All scripts supported',
    tagColor: 'var(--yellow)',
    tagBorder: 'rgba(255,209,102,0.2)',
  },
  {
    num: '04',
    icon: '🛍',
    iconBg: 'rgba(255,94,94,0.08)',
    title: 'Shopping',
    desc: 'Circle a product, outfit, or object and jump straight to Google Shopping results. Find where to buy anything you see on screen.',
    tag: 'Google Shopping tab',
    tagColor: 'var(--red)',
    tagBorder: 'rgba(255,94,94,0.2)',
  },
]

export default function Features() {
  const headerRef = useScrollFade()
  const gridRef   = useScrollFade(0.1)

  return (
    <section id="features" className="section-wrap">
      <div ref={headerRef} className={`${styles.header} fade-up`}>
        <p className="section-label">Features</p>
        <h2 className="section-title">
          Four ways to search,<br />one gesture.
        </h2>
        <p className="section-sub">
          Circle anything — a word, an object, a product, a foreign script.
          KenxSearch knows what to do with it.
        </p>
      </div>

      <div ref={gridRef} className={`${styles.grid} fade-up`}>
        {FEATURES.map(f => (
          <div key={f.num} className={styles.card}>
            <span className={styles.num}>{f.num}</span>
            <div className={styles.icon} style={{ background: f.iconBg }}>
              {f.icon}
            </div>
            <h3 className={styles.title}>{f.title}</h3>
            <p className={styles.desc}>{f.desc}</p>
            <div
              className={styles.tag}
              style={{ color: f.tagColor, borderColor: f.tagBorder }}
            >
              <span>●</span> {f.tag}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
