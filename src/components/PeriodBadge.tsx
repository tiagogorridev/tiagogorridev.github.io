import { Calendar } from 'lucide-react'
import type { ReactNode } from 'react'

interface PeriodBadgeProps {
  children: ReactNode
  className?: string
}

/** Pill com ícone de calendário para períodos e datas. */
export function PeriodBadge({ children, className = '' }: PeriodBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300 ${className}`.trim()}
    >
      <Calendar className="h-3.5 w-3.5 text-accent-300" aria-hidden="true" />
      {children}
    </span>
  )
}
