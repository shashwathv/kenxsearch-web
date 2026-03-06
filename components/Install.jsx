'use client'
import s from './Install.module.css'
import InstallCommand from './InstallCommand'
import useScrollFade from '../hooks/useScrollFade'

const distros = [
  { name: 'Arch', color: '#1793d1' },
  { name: 'Fedora', color: '#3c6eb4' },
  { name: 'Ubuntu', color: '#e95420' },
  { name: 'Debian', color: '#a80030' },
]

export default function Install() {
  const ref = useScrollFade()

  return (
    <section id="install" className="section-wrap" ref={ref}>
      <div className={`${s.card} fade-up`}>
        <div className={s.glow} />

        <span className="section-label" style={{ justifyContent: 'center' }}>Install</span>
        <h2 className="section-title" style={{ textAlign: 'center' }}>One command. That&apos;s it.</h2>
        <p className="section-sub" style={{ textAlign: 'center', margin: '0 auto 32px' }}>
          The installer clones the repo, installs system deps, sets up a Python venv, and gets Playwright ready.
        </p>

        <InstallCommand centered />

        <p className={s.note}>
          Prerequisites: git, curl · Installs: tesseract-ocr, python3, PyQt6, Playwright
        </p>

        <div className={s.distros}>
          {distros.map((d) => (
            <span key={d.name} className={s.distroTag}>
              <span className={s.distroDot} style={{ background: d.color }} />
              {d.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}