'use client'
import s from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.inner}>
        <div className={s.brand}>
          <span className={s.logo}>KenXSearch</span>
          <span className={s.tagline}>Circle to Search, for Linux.</span>
        </div>

        <ul className={s.links}>
          <li><a href="https://github.com/shashwathv/KenXSearch" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href="https://github.com/shashwathv/KenXSearch/issues" target="_blank" rel="noopener noreferrer">Issues</a></li>
          <li><a href="https://github.com/shashwathv/KenXSearch/blob/main/LICENSE" target="_blank" rel="noopener noreferrer">License</a></li>
        </ul>

        <span className={s.copy}>
          © {new Date().getFullYear()} KenXSearch · 見 - Ken: To See
        </span>
      </div>
    </footer>
  )
}