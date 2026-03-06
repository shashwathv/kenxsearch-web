import { useEffect, useRef } from 'react'

/**
 * Attaches an IntersectionObserver to the ref element AND
 * all .fade-up children within it, adding the "visible" class
 * when each enters the viewport.
 */
export default function useScrollFade() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Observe ALL .fade-up elements inside the section
    const targets = el.querySelectorAll('.fade-up')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    )

    targets.forEach((t) => observer.observe(t))

    return () => observer.disconnect()
  }, [])

  return ref
}