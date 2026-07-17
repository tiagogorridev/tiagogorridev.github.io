import type { LucideIcon } from 'lucide-react'

interface IconBadgeProps {
  icon: LucideIcon
  size?: 'md' | 'lg'
}

const sizeClasses = {
  md: { badge: 'h-10 w-10 rounded-lg', icon: 'h-5 w-5' },
  lg: { badge: 'h-11 w-11 rounded-xl', icon: 'h-6 w-6' },
} as const

/** Ícone decorativo dentro de um quadrado arredondado, no tom de destaque. */
export function IconBadge({ icon: Icon, size = 'md' }: IconBadgeProps) {
  const { badge, icon } = sizeClasses[size]

  return (
    <span
      className={`flex shrink-0 items-center justify-center bg-surface-strong/60 text-accent-300 ${badge}`}
    >
      <Icon className={icon} aria-hidden="true" />
    </span>
  )
}
