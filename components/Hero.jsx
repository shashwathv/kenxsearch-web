'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './Hero.module.css'
import InstallCommand from './InstallCommand'

const TYPEWRITER_LINES = [
  '> initializing kenxsearch...',
  '> loading OCR engine [tesseract]... done',
  '> binding keyboard shortcut... done',
  '> overlay ready',
  '> draw a circle to search',
]

export default function Hero() {
  const [lines, setLines]     = useState([])
  const [ready, setReady]     = useState(false)
  const demoRef               = useRef(null)

  useEffect(() => {
    let i = 0
    const addLine = () => {
      if (i < TYPEWRITER_LINES.length) {
        setLines(prev => [...prev, TYPEWRITER_LINES[i]])
        i++
        setTimeout(addLine, i === TYPEWRITER_LINES.length ? 0 : 400 + Math.random() * 200)
      } else {
        setTimeout(() => setReady(true), 300)
      }
    }
    const start = setTimeout(addLine, 400)
    return () => clearTimeout(start)
  }, [])

  useEffect(() => {
    const t = setTimeout(() => demoRef.current?.classList.add('visible'), 800)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className={styles.hero}>
      {/* CRT dot matrix background */}
      <div className={styles.dotGrid} aria-hidden />
      <div className={styles.glow} aria-hidden />

      {/* Left: headline content */}
      <div className={styles.content}>
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          <span>open-source</span>
          <span className={styles.badgeSep}>·</span>
          <span>free forever</span>
          <span className={styles.badgeSep}>·</span>
          <span>linux-native</span>
        </div>

        <h1 className={styles.title}>
          Circle<br />
          to search.<br />
          <span className={styles.titleAccent}>On Linux.</span>
        </h1>

        <p className={styles.sub}>
          Draw a circle around anything on your screen — text, images,
          products — and search it instantly. The Android Circle‑to‑Search
          experience, brought natively to your desktop.
        </p>

        <div className={styles.actions}>
          <a href="#install" className="btn-primary">
            <DownloadIcon /> install
          </a>
          <a
            href="https://github.com/shashwathv/lensix"
            target="_blank"
            rel="noopener"
            className="btn-secondary"
          >
            <GitHubIcon /> github
          </a>
        </div>

        <InstallCommand />
      </div>

      {/* Right: terminal window */}
      <div ref={demoRef} className={`${styles.terminal} fade-up`}>
        <div className={styles.termBar}>
          <div className={styles.termDots}>
            <span style={{ background: '#ff5f57' }} />
            <span style={{ background: '#febc2e' }} />
            <span style={{ background: '#28c840' }} />
          </div>
          <span className={styles.termTitle}>kenxsearch — bash — 80×24</span>
          <div style={{ width: 52 }} />
        </div>

        <div className={styles.termBody}>
          {/* Typewriter output */}
          <div className={styles.termOutput}>
            {lines.map((line, i) => (
              <div key={i} className={styles.termLine}>
                <span className={i === lines.length - 1 && !ready ? styles.activeLine : styles.doneLine}>
                  {line}
                </span>
              </div>
            ))}
            {ready && (
              <div className={styles.termLine}>
                <span className={styles.promptGreen}>●</span>
                <span className={styles.promptReady}> system ready</span>
                <span className={styles.cursor}>█</span>
              </div>
            )}
          </div>

          {/* Mode selector tiles — Linux window-like */}
          <div className={styles.modeTiles}>
            {[
              { label: 'Search',    key: 'F1', color: 'var(--green)',  icon: '🔎' },
              { label: 'Visual',    key: 'F2', color: 'var(--cyan)',   icon: '🖼' },
              { label: 'Translate', key: 'F3', color: 'var(--amber)',  icon: '🌏' },
              { label: 'Shopping',  key: 'F4', color: 'var(--red)',    icon: '🛍' },
            ].map((m) => (
              <div key={m.label} className={styles.modeTile} style={{ '--mode-color': m.color }}>
                <span className={styles.modeKey}>{m.key}</span>
                <span className={styles.modeIcon}>{m.icon}</span>
                <span className={styles.modeLabel}>{m.label}</span>
              </div>
            ))}
          </div>

          {/* Circle animation */}
          <div className={styles.circleWrap}>
            <div className={styles.circleRing} />
            <div className={styles.circleRingOuter} />
            <span className={styles.circleLabel}>selection active</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function DownloadIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.5">
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}