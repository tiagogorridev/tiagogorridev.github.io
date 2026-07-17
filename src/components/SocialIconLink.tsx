import type { LucideIcon } from 'lucide-react'

interface SocialIconLinkProps {
  href: string
  icon: LucideIcon
  /** Rótulo acessível já localizado, ex.: 'GitHub (abre em nova aba)'. */
  ariaLabel: string
}

/** Link quadrado com ícone para redes sociais (abre em nova aba). */
export function SocialIconLink({ href, icon: Icon, ariaLabel }: SocialIconLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-500/50 hover:text-accent-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-300"
    >
      <Icon className="h-5 w-5" aria-hidden="true" />
    </a>
  )
}
