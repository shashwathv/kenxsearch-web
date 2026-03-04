'use client'

import { useScrollFade } from '../hooks/useScrollFade'
import InstallCommand from './InstallCommand'
import styles from './Install.module.css'

const DISTROS = [
  'Fedora', 'Ubuntu', 'Arch', 'Debian', 'openSUSE', 'KDE Plasma', 'GNOME',
]

export default function Install() {
  const ref = useScrollFade()

  return (
    <section id="install" className="section-wrap">
      <div ref={ref} className={`${styles.card} fade-up`}>
        <div className={styles.glow} aria-hidden />

        <p className="section-label" style={{ justifyContent: 'center' }}>
          Install
        </p>
        <h2 className={`section-title ${styles.centered}`}>
          One command.<br />That&apos;s it.
        </h2>
        <p className={`section-sub ${styles.centeredSub}`}>
          No manual chmod. No cloning. Paste this into your terminal and
          KenxSearch installs itself, sets up a venv, and adds itself to your PATH.
        </p>

        <InstallCommand centered />

        <p className={styles.note}>
          Requires git · Auto-detects your package manager · Installs Playwright browsers
        </p>

        <div className={styles.distros}>
          {DISTROS.map(d => (
            <div key={d} className={styles.distroTag}>
              <span className={styles.distroDot} />
              {d}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
