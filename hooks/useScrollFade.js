import { useEffect, useRef } from 'react'

/**
 * Attaches an IntersectionObserver to a ref and adds the
 * "visible" class when the element enters the viewport.
 * Combine with the global .fade-up / .fade-up.visible CSS.
 */
export function useScrollFade(delay = 0) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (delay) el.style.transitionDelay = `${delay}s`

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return ref
}
