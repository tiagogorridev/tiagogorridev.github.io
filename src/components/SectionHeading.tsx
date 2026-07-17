interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

/**
 * Cabeçalho padrão das seções: rótulo pequeno em destaque (eyebrow),
 * título e descrição opcional. No mobile fica centralizado; a partir
 * de `md`, segue o alinhamento pedido.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  const isCentered = align === 'center'

  return (
    <div className={isCentered ? 'text-center' : 'text-center md:text-left'}>
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent-300">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 max-w-2xl leading-relaxed text-slate-400 ${
            isCentered ? 'mx-auto' : 'mx-auto md:mx-0'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  )
}
