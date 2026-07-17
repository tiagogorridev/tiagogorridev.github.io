import type { ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary'

interface CommonProps {
  variant?: ButtonVariant
  className?: string
  children: ReactNode
}

interface ButtonAsLink extends CommonProps {
  href: string
  /** Abre em nova aba com rel de segurança. */
  external?: boolean
  /** Força download do recurso (ex.: CV em PDF). */
  download?: boolean
  onClick?: never
}

interface ButtonAsButton extends CommonProps {
  href?: never
  external?: never
  download?: never
  onClick: () => void
}

type ButtonProps = ButtonAsLink | ButtonAsButton

const baseClasses =
  'group inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-300 focus-visible:ring-offset-2 focus-visible:ring-offset-background'

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-accent-500 text-white shadow-glow hover:bg-accent-400',
  secondary:
    'border border-accent-500/50 text-accent-200 hover:border-accent-400 hover:bg-accent-500/10',
}

/**
 * Botão padrão do site. Com `href` renderiza um link (`<a>`);
 * com `onClick` renderiza um `<button>`.
 */
export function Button(props: ButtonProps) {
  const { variant = 'primary', className = '', children } = props
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`.trim()

  if (props.href !== undefined) {
    return (
      <a
        href={props.href}
        download={props.download}
        {...(props.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        className={classes}
      >
        {children}
      </a>
    )
  }

  return (
    <button type="button" onClick={props.onClick} className={classes}>
      {children}
    </button>
  )
}
