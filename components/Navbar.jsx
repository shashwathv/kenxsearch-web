'use client'

import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a href="#" className={styles.logo}>
        <div className={styles.logoIcon}>K</div>
        kenxsearch
      </a>

      <ul className={styles.links}>
        <li><a href="#features">Features</a></li>
        <li><a href="#how">How it works</a></li>
        <li><a href="#install">Install</a></li>
        <li>
          <a href="https://github.com/shashwathv/lensix" target="_blank" rel="noopener">
            GitHub
          </a>
        </li>
        <li>
          <a href="#install" className={styles.cta}>Get Started</a>
        </li>
      </ul>

      {/* Mobile hamburger */}
      <button
        className={styles.hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={menuOpen ? styles.open : ''} />
        <span className={menuOpen ? styles.open : ''} />
        <span className={menuOpen ? styles.open : ''} />
      </button>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          <a href="#features" onClick={() => setMenuOpen(false)}>Features</a>
          <a href="#how" onClick={() => setMenuOpen(false)}>How it works</a>
          <a href="#install" onClick={() => setMenuOpen(false)}>Install</a>
          <a href="https://github.com/shashwathv/lensix" target="_blank" rel="noopener">GitHub</a>
          <a href="#install" className={styles.cta} onClick={() => setMenuOpen(false)}>Get Started</a>
        </div>
      )}
    </nav>
  )
}
