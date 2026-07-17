import { useLanguage } from '../i18n/LanguageContext'
import type { Language } from '../types/portfolio'

const options: Array<{ value: Language; label: string }> = [
  { value: 'pt', label: 'PT' },
  { value: 'en', label: 'EN' },
]

interface LanguageToggleProps {
  ariaLabel: string
}

/** Alternador de idioma (PT/EN) em formato de controle segmentado. */
export function LanguageToggle({ ariaLabel }: LanguageToggleProps) {
  const { language, setLanguage } = useLanguage()

  return (
    <div
      role="group"
      aria-label={ariaLabel}
      className="flex items-center gap-0.5 rounded-full border border-white/10 bg-white/5 p-0.5 text-xs font-semibold"
    >
      {options.map((option) => {
        const isActive = language === option.value
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => setLanguage(option.value)}
            aria-pressed={isActive}
            className={`rounded-full px-2.5 py-1 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-300 ${
              isActive
                ? 'bg-accent-500 text-white'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            {option.label}
          </button>
        )
      })}
    </div>
  )
}
