'use client'
import { useEffect, useRef, useState } from 'react'
import s from './Hero.module.css'
import useScrollFade from '../hooks/useScrollFade'
import PixelBlast from './PixelBlast'

const BOOT_LINES = [
  '$ lensix',
  '  ✦ Circle anything to search',
  '',
  '  ↳ overlay engine ready       ✔',
  '  ↳ Playwright browser loaded  ✔',
  '  ↳ waiting for selection      …',
  '',
  '  circle drawn → analyzing ROI',
  '  ✔ 3 results found (0.42s)',
]

export default function Hero() {
  const ref = useScrollFade()
  const [lines, setLines] = useState([])
  const [charIdx, setCharIdx] = useState(0)
  const lineRef = useRef(0)

  useEffect(() => {
    if (lineRef.current >= BOOT_LINES.length) return
    const currentLine = BOOT_LINES[lineRef.current]
    if (charIdx <= currentLine.length) {
      const t = setTimeout(() => {
        setLines(prev => {
          const copy = [...prev]
          copy[lineRef.current] = currentLine.slice(0, charIdx)
          return copy
        })
        setCharIdx(c => c + 1)
      }, currentLine === '' ? 200 : 30)
      return () => clearTimeout(t)
    }
    lineRef.current += 1
    setCharIdx(0)
  }, [charIdx])

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
        On Linux.
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
              lensix — ~/
            </span>
            <div className={s.demoBarControls}>
              <span className={s.winBtn}>─</span>
              <span className={s.winBtn}>□</span>
              <span className={`${s.winBtn} ${s.winClose}`}>✕</span>
            </div>
          </div>
          <div className={s.demoScreen}>
            <div className={s.terminal}>
              {lines.map((line, i) => (
                <div key={i} className={s.termLine}>
                  {line}
                  {i === lineRef.current && <span className={s.cursor}>█</span>}
                </div>
              ))}
              {lineRef.current >= BOOT_LINES.length && (
                <div className={s.termLine}>
                  <span className={s.cursor}>█</span>
                </div>
              )}
            </div>
            <div className={s.demoTag}>[ replace with demo video ]</div>
          </div>
        </div>

        <div className={s.pills}>
          <span className={s.pill}>🔍 Text Search</span>
          <span className={s.pill}>📷 Visual Search</span>
          <span className={s.pill}>🌐 Translate</span>
          <span className={s.pill}>🛒 Shopping</span>
        </div>
      </div>
    </section>
  )
}