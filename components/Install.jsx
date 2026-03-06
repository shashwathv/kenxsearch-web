'use client'

import { useScrollFade } from '../hooks/useScrollFade'
import InstallCommand from './InstallCommand'
import styles from './Install.module.css'

const DISTROS = [
  { name: 'Ubuntu',     color: '#e95420' },
  { name: 'Fedora',     color: '#51a2da' },
  { name: 'Arch',       color: '#1793d1' },
  { name: 'Debian',     color: '#d70a53' },
  { name: 'openSUSE',   color: '#73ba25' },
  { name: 'KDE Plasma', color: '#1d99f3' },
  { name: 'GNOME',      color: '#4a86cf' },
]

const REQS = [
  { key: 'git',        val: 'required' },
  { key: 'python',     val: '3.8+' },
  { key: 'pkg-mgr',   val: 'auto-detected' },
  { key: 'playwright', val: 'auto-installed' },
]

export default function Install() {
  const ref = useScrollFade()

  return (
    <section id="install" className="section-wrap">
      <div ref={ref} className={`${styles.card} fade-up`}>
        <div className={styles.glow} aria-hidden />

        {/* Terminal title bar */}
        <div className={styles.termBar}>
          <div className={styles.termDots}>
            <span style={{ background: '#ff5f57' }} />
            <span style={{ background: '#febc2e' }} />
            <span style={{ background: '#28c840' }} />
          </div>
          <span className={styles.termTitle}>bootstrap.sh — kenxsearch installer</span>
          <div className={styles.termBadge}>
            <span className={styles.termBadgeDot} />
            running
          </div>
        </div>

        <div className={styles.body}>
          <div className={styles.meta}>
            <p className="section-label">Install</p>
            <h2 className={`section-title ${styles.title}`}>
              One command.<br />That&apos;s it.
            </h2>
            <p className={`section-sub ${styles.sub}`}>
              No manual chmod. No cloning. Paste this into your terminal —
              KenxSearch installs itself, sets up a venv, and adds itself to your PATH.
            </p>
          </div>

          <div className={styles.cmdBlock}>
            <InstallCommand />
            <div className={styles.reqs}>
              {REQS.map(r => (
                <div key={r.key} className={styles.req}>
                  <span className={styles.reqKey}>{r.key}</span>
                  <span className={styles.reqDots}>············</span>
                  <span className={styles.reqVal}>{r.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Distro compatibility */}
        <div className={styles.distros}>
          <span className={styles.distrosLabel}>tested on</span>
          <div className={styles.distroList}>
            {DISTROS.map(d => (
              <div key={d.name} className={styles.distroTag}>
                <span className={styles.distroDot} style={{ background: d.color }} />
                {d.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}