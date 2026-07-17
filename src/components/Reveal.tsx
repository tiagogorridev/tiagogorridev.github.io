import type { ReactNode } from 'react'
import { useInView } from '../hooks/useInView'

interface RevealProps {
  children: ReactNode
  /** Atraso da transição em milissegundos, para efeito escalonado. */
  delay?: number
  className?: string
}

/**
 * Wrapper de fade-in + slide-up quando o conteúdo entra na viewport.
 * Respeita `prefers-reduced-motion`.
 */
export function Reveal({ children, delay = 0, className = '' }: RevealProps) {
  const { ref, isInView } = useInView<HTMLDivElement>()

  return (
    <div
      ref={ref}
      style={delay > 0 ? { transitionDelay: `${delay}ms` } : undefined}
      className={`transition-all duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none ${
        isInView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      } ${className}`.trim()}
    >
      {children}
    </div>
  )
}
