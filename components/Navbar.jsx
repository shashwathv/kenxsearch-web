'use client'
import { useState, useEffect } from 'react'
import s from './Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${s.nav} ${scrolled ? s.scrolled : ''}`}>
      <a href="#" className={s.logo}>
        <span className={s.logoIcon}>K</span>
        <span className={s.logoText}>KenXSearch</span>
      </a>

      <ul className={s.links}>
        <li><a href="#features">Features</a></li>
        <li><a href="#how-it-works">How it works</a></li>
        <li><a href="#install">Install</a></li>
        <li><a href="https://github.com/shashwathv/KenXSearch" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        <li><a href="#install" className={s.cta}>Get Started</a></li>
      </ul>

      <button className={s.hamburger} onClick={() => setOpen(!open)} aria-label="Menu">
        <span /><span /><span />
      </button>

      {open && (
        <div className={s.mobileMenu}>
          <a href="#features" onClick={() => setOpen(false)}>Features</a>
          <a href="#how-it-works" onClick={() => setOpen(false)}>How it works</a>
          <a href="#install" onClick={() => setOpen(false)}>Install</a>
          <a href="https://github.com/shashwathv/KenXSearch" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>GitHub</a>
          <a href="#install" className={s.ctaMobile} onClick={() => setOpen(false)}>Get Started</a>
        </div>
      )}
    </nav>
  )
}