'use client'
import s from './Install.module.css'
import InstallCommand from './InstallCommand'
import useScrollFade from '../hooks/useScrollFade'

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

        <div className={s.compatibilityBox}>
          <div className={s.warningAlert}>
            <span className={s.warningIcon}>⚠️</span>
            <div className={s.warningText}>
              <strong>GNOME 46+ Wayland — Background Capture Limited:</strong> The overlay background capture may be unavailable. GNOME&apos;s compositor restricts screen capture APIs at the system level. As a result, the overlay appears with a plain dark background.<br/><br/>
              Everything else works normally — drawing, selection, OCR, and all four search modes are fully functional. It&apos;s a cosmetic difference only. Switch to an X11 session to restore full background capture.<br/><br/>
              <em>KDE Plasma, all X11 desktops, and older GNOME versions are fully supported with no limitations.</em>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}