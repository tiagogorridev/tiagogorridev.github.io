import { useEffect, useRef, useState } from 'react'

/**
 * Observa quando o elemento entra na viewport (uma única vez),
 * para disparar animações de revelação no scroll.
 */
export function useInView<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -48px 0px' },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return { ref, isInView }
}
