import type { ReactNode } from 'react'

interface TagProps {
  children: ReactNode
}

/** Pill para tecnologias e habilidades. */
export function Tag({ children }: TagProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-accent-500/30 bg-accent-500/10 px-3 py-1 text-xs font-medium text-accent-200 transition-colors duration-300 hover:border-accent-400/60 hover:bg-accent-500/20">
      {children}
    </span>
  )
}
