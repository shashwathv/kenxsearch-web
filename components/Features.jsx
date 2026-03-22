'use client'
import { useRef } from 'react'
import s from './Features.module.css'
import useScrollFade from '../hooks/useScrollFade'

const features = [
  {
    num: '01',
    icon: '🔍',
    iconBg: 'var(--accent-dim)',
    title: 'Smart Text Search',
    desc: 'OCR extracts text using Tesseract + OpenCV preprocessing, then searches Google. Falls back to visual search if no text is found.',
    tag: 'OCR + Search',
    tagColor: 'var(--accent)',
    video: '/text_search.mp4',
  },
  {
    num: '02',
    icon: '📷',
    iconBg: 'var(--violet-dim)',
    title: 'Visual Search',
    desc: 'Uploads your selection directly to Google Lens for visual recognition. Identify products, landmarks, plants, animals — anything visual.',
    tag: 'Google Lens',
    tagColor: 'var(--violet)',
    video: '/visual-search.mp4',
  },
  {
    num: '03',
    icon: '🌐',
    iconBg: 'var(--teal-dim)',
    title: 'Translate',
    desc: 'Opens Google Lens in translate mode with automatic language detection. Supports 100+ languages out of the box.',
    tag: '100+ languages',
    tagColor: 'var(--teal)',
    video: '/translate_search.mp4',
  },
  {
    num: '04',
    icon: '🛒',
    iconBg: 'var(--amber-dim)',
    title: 'Shopping',
    desc: 'Opens Google Lens and switches to the Shopping tab. Find where to buy it, compare prices, and browse similar items.',
    tag: 'Price compare',
    tagColor: 'var(--amber)',
    video: '/shopping_feature.mp4',
  },
]

function FeatureCard({ f }) {
  const vidRef = useRef(null)

  const handleMouseEnter = () => {
    if (vidRef.current) {
      vidRef.current.currentTime = 0
      vidRef.current.play()
    }
  }

  const handleMouseLeave = () => {
    if (vidRef.current) {
      vidRef.current.pause()
    }
  }

  return (
    <div
      className={`${s.card} fade-up`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className={s.num}>{f.num}</span>
      <div className={s.icon} style={{ background: f.iconBg }}>
        {f.icon}
      </div>
      <h3 className={s.title}>{f.title}</h3>
      <p className={s.desc}>{f.desc}</p>

      <div className={s.videoWrap}>
        {f.video ? (
          <video
            ref={vidRef}
            className={s.video}
            src={f.video}
            muted
            playsInline
            loop
            preload="metadata"
          />
        ) : (
          <div className={s.videoPlaceholder}>
            <span className={s.placeholderIcon}>🎬</span>
            <span className={s.placeholderText}>Demo coming soon</span>
          </div>
        )}
      </div>

      <span className={s.tag} style={{ borderColor: f.tagColor, color: f.tagColor }}>
        <span className={s.tagDot} style={{ background: f.tagColor }} />
        {f.tag}
      </span>
    </div>
  )
}

export default function Features() {
  const ref = useScrollFade()

  return (
    <section id="features" className="section-wrap" ref={ref}>
      <div className={s.header}>
        <span className="section-label fade-up">Features</span>
        <h2 className="section-title fade-up">Four modes, one gesture</h2>
        <p className="section-sub fade-up">
          Draw a freehand circle around anything. KenXSearch figures out the rest.
        </p>
      </div>

      <div className={s.grid}>
        {features.map((f) => (
          <FeatureCard key={f.num} f={f} />
        ))}
      </div>
    </section>
  )
}