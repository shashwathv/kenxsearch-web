'use client'
import { useState } from 'react'
import s from './Hero.module.css'
import useScrollFade from '../hooks/useScrollFade'
import PixelBlast from './PixelBlast'

const MODES = [
  { icon: '🔍', label: 'Text Search', video: '/text_search.mp4' },
  { icon: '📷', label: 'Visual Search', video: '/visual-search.mp4' },
  { icon: '🌐', label: 'Translate', video: '/translate_search.mp4' },
  { icon: '🛒', label: 'Shopping', video: null },
]

export default function Hero() {
  const ref = useScrollFade()
  const [activeIdx, setActiveIdx] = useState(0)
  const activeMode = MODES[activeIdx]

  return (
    <section className={s.hero} ref={ref}>
      <PixelBlast
        variant="circle"
        pixelSize={3}
        color="#7eb4f8"
        speed={0.7}
        patternScale={5}
        patternDensity={0.8}
        enableRipples={true}
        rippleSpeed={0.3}
        rippleThickness={0.12}
        edgeFade={0.3}
        transparent={true}
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          opacity: 0.35,
        }}
      />
      <div className={s.kanji}>見</div>

      <div className={`${s.badge} fade-up`}>
        <span className={s.badgeDot} />
        open-source · linux-native · wayland + x11
      </div>

      <h1 className={`${s.title} fade-up`}>
        <span className={s.titleAccent}>Circle to search.</span>
        <br />
        For all Linux distros.
      </h1>

      <p className={`${s.sub} fade-up`}>
        Draw a freehand circle around anything on your screen and search it
        instantly with Google — text, visual, translate, or shopping.
      </p>

      <div className={`${s.actions} fade-up`}>
        <a href="#install" className="btn-primary">
          ↓ Install Now
        </a>
        <a
          href="https://github.com/shashwathv/KenXSearch"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary"
        >
          ★ GitHub
        </a>
      </div>

      {/* Demo window — Linux-style titlebar */}
      <div className={`${s.demoWrap} fade-up`}>
        <div className={s.demoWindow}>
          <div className={s.demoBar}>
            <span className={s.demoBarTitle}>
              <span className={s.demoBarIcon}>▸</span>
              KenXSearch — ~/
            </span>
            <div className={s.demoBarControls}>
              <span className={s.winBtn}>─</span>
              <span className={s.winBtn}>□</span>
              <span className={`${s.winBtn} ${s.winClose}`}>✕</span>
            </div>
          </div>
          <div className={s.demoScreen}>
            {activeMode.video ? (
              <video
                key={activeMode.video}
                className={s.demoVideo}
                src={activeMode.video}
                autoPlay
                muted
                loop
                playsInline
              />
            ) : (
              <div className={s.demoPlaceholder}>
                <span className={s.demoPlaceholderIcon}>🎬</span>
                <span className={s.demoPlaceholderText}>Demo coming soon</span>
              </div>
            )}
          </div>
        </div>

        <div className={s.pills}>
          {MODES.map((mode, i) => (
            <button
              key={mode.label}
              className={`${s.pill} ${i === activeIdx ? s.pillActive : ''}`}
              onClick={() => setActiveIdx(i)}
            >
              {mode.icon} {mode.label}
            </button>
          ))}
        </div>

        <p className={s.pillHint}>↑ Click a mode above to see it in action</p>
      </div>
    </section>
  )
}