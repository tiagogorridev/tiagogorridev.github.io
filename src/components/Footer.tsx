import { ArrowUp } from 'lucide-react'
import { useContent } from '../i18n/useContent'

export function Footer() {
  const { ui, profile } = useContent()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-4 px-6 sm:flex-row lg:px-8">
        <p className="text-sm text-slate-400">
          © {currentYear} {profile.name}.
        </p>

        <a
          href="#inicio"
          className="inline-flex items-center gap-2 rounded-md px-2 py-1 text-sm text-slate-400 transition-colors duration-300 hover:text-accent-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-300"
        >
          <ArrowUp className="h-4 w-4" aria-hidden="true" />
          {ui.backToTop}
        </a>
      </div>
    </footer>
  )
}
