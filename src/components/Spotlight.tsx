import { useEffect, useRef } from 'react'

/**
 * Assinatura visual do site: um brilho roxo sutil que segue o cursor
 * pelo fundo escuro. Só em dispositivos com mouse (pointer: fine) e
 * atualizado via requestAnimationFrame para custo mínimo.
 */
export function Spotlight() {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return

    let frame = 0
    const handleMove = (event: MouseEvent) => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        ref.current?.style.setProperty('--spot-x', `${event.clientX}px`)
        ref.current?.style.setProperty('--spot-y', `${event.clientY}px`)
      })
    }

    window.addEventListener('mousemove', handleMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', handleMove)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-30 hidden lg:block"
      style={{
        background:
          'radial-gradient(600px circle at var(--spot-x, 70%) var(--spot-y, 30%), rgba(108, 73, 136, 0.14), transparent 80%)',
      }}
    />
  )
}
