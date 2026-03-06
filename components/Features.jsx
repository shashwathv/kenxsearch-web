'use client'

import { useScrollFade } from '../hooks/useScrollFade'
import styles from './Features.module.css'

const FEATURES = [
  {
    num: '01',
    icon: '🔎',
    proc: 'tesseract-ocr',
    pid: '1042',
    title: 'Text Search',
    desc: 'Circle any text on screen. KenxSearch runs multi-strategy OCR, extracts the words, and opens a Google search — all in under a second.',
    tag: 'tesseract v5.x',
    color: 'var(--green)',
    colorDim: 'rgba(57,211,83,0.08)',
  },
  {
    num: '02',
    icon: '🖼',
    proc: 'google-lens',
    pid: '1043',
    title: 'Visual Search',
    desc: 'Circle any image, logo, or object. Google Lens identifies it visually — no text needed. Find products, landmarks, plants, anything.',
    tag: 'google-lens',
    color: 'var(--cyan)',
    colorDim: 'rgba(45,212,191,0.08)',
  },
  {
    num: '03',
    icon: '🌏',
    proc: 'translate-mode',
    pid: '1044',
    title: 'Translate',
    desc: 'Circle text in any language — Korean, Japanese, Arabic, Chinese, Hindi. Google Lens translates natively. No language packs required.',
    tag: 'all scripts',
    color: 'var(--amber)',
    colorDim: 'rgba(229,165,10,0.08)',
  },
  {
    num: '04',
    icon: '🛍',
    proc: 'shopping-mode',
    pid: '1045',
    title: 'Shopping',
    desc: 'Circle a product, outfit, or object and jump straight to Google Shopping results. Find where to buy anything you see on screen.',
    tag: 'google-shopping',
    color: 'var(--red)',
    colorDim: 'rgba(255,92,92,0.08)',
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
          Four modes.<br />One gesture.
        </h2>
        <p className="section-sub">
          Circle anything — a word, an object, a product, a foreign script.
          KenxSearch knows what to do.
        </p>
      </div>

      <div ref={gridRef} className={`${styles.grid} fade-up`}>
        {FEATURES.map(f => (
          <div key={f.num} className={styles.card} style={{ '--card-color': f.color, '--card-dim': f.colorDim }}>
            {/* Window titlebar */}
            <div className={styles.cardBar}>
              <div className={styles.cardBarLeft}>
                <span className={styles.cardBarDot} style={{ background: f.color }} />
                <span className={styles.cardBarProc}>{f.proc}</span>
                <span className={styles.cardBarPid}>PID {f.pid}</span>
              </div>
              <span className={styles.cardNum}>{f.num}</span>
            </div>

            <div className={styles.cardBody}>
              <div className={styles.iconWrap} style={{ background: f.colorDim }}>
                <span className={styles.icon}>{f.icon}</span>
              </div>
              <h3 className={styles.title}>{f.title}</h3>
              <p className={styles.desc}>{f.desc}</p>
              <div className={styles.tag} style={{ color: f.color, borderColor: f.color + '33' }}>
                <span className={styles.tagDot} style={{ background: f.color }} />
                {f.tag}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}