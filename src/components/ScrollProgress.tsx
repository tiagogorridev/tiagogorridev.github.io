import { useEffect, useRef } from 'react'

/**
 * Barra fina no topo da página indicando o progresso do scroll.
 * Usa apenas transform (GPU) e requestAnimationFrame para não pesar.
 */
export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    let frame = 0

    const update = () => {
      const root = document.documentElement
      const max = root.scrollHeight - root.clientHeight
      const progress = max > 0 ? window.scrollY / max : 0
      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${progress})`
      }
    }

    const schedule = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule, { passive: true })
    return () => {
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div
      ref={barRef}
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left scale-x-0 bg-gradient-to-r from-accent-500 via-accent-400 to-accent-300"
    />
  )
}
