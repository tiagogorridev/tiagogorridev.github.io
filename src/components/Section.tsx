import type { ReactNode } from 'react'

interface SectionProps {
  id: string
  children: ReactNode
  className?: string
}

/** Wrapper padrão de seção: espaçamento vertical + container centralizado. */
export function Section({ id, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`py-24 ${className}`.trim()}>
      <div className="mx-auto w-full max-w-5xl px-6 lg:px-8">{children}</div>
    </section>
  )
}
