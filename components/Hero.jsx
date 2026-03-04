'use client'

import { useEffect, useRef } from 'react'
import styles from './Hero.module.css'
import InstallCommand from './InstallCommand'

export default function Hero() {
  const demoRef = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      demoRef.current?.classList.add('visible')
    }, 200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className={styles.hero}>
      <div className={styles.grid} aria-hidden />
      <div className={styles.glow} aria-hidden />
      <div className={styles.kanji} aria-hidden>見</div>

      <div className={styles.badge}>
        <span className={styles.badgeDot} />
        Open source · Free forever
      </div>

      <h1 className={styles.title}>
        Circle to search.<br />
        <span className={styles.titleAccent}>On Linux.</span>
      </h1>

      <p className={styles.sub}>
        Draw a circle around anything on your screen — text, images, products —
        and search it instantly. The Android Circle&#8209;to&#8209;Search experience,
        brought natively to your desktop.
      </p>

      <div className={styles.actions}>
        <a href="#install" className="btn-primary">
          <DownloadIcon />
          Install now
        </a>
        <a
          href="https://github.com/shashwathv/lensix"
          target="_blank"
          rel="noopener"
          className="btn-secondary"
        >
          <GitHubIcon />
          View on GitHub
        </a>
      </div>

      <InstallCommand />

      {/* Demo window */}
      <div ref={demoRef} className={`${styles.demoWrap} fade-up`}>
        <div className={styles.demoWindow}>
          <div className={styles.demoBar}>
            <span className={styles.dot} style={{ background: '#ff5f57' }} />
            <span className={styles.dot} style={{ background: '#febc2e' }} />
            <span className={styles.dot} style={{ background: '#28c840' }} />
          </div>
          <div className={styles.demoScreen}>
            <span className={styles.demoTag}>[ replace with demo video ]</span>

            {/* Placeholder animation */}
            <div className={styles.placeholderRing} />
            <p className={styles.placeholderText}>demo.mp4 — 15s screen recording</p>

            {/* Button pills preview */}
            <div className={styles.pills}>
              {['Search', 'Visual', 'Translate', 'Shopping'].map(label => (
                <div key={label} className={styles.pill}>{label}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function DownloadIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.5">
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}
