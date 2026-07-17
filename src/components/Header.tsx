import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { sectionIds } from '../data/portfolioData'
import { useContent } from '../i18n/useContent'
import { useActiveSection } from '../hooks/useActiveSection'
import { LanguageToggle } from './LanguageToggle'

const linkBaseClasses =
  'rounded-md px-3 py-2 text-sm font-medium transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-300'

export function Header() {
  const { ui, navLinks } = useContent()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const activeSection = useActiveSection(sectionIds)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || menuOpen
          ? 'border-b border-white/5 bg-background/85 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav
        aria-label={ui.navAriaLabel}
        className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-6 lg:px-8"
      >
        <a
          href="#inicio"
          onClick={closeMenu}
          className="rounded-md text-lg font-bold tracking-tight text-white transition-colors duration-300 hover:text-accent-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-300"
        >
          tiagogorri<span className="text-accent-300">.dev</span>
        </a>

        {/* Navegação desktop */}
        <div className="hidden items-center gap-3 md:flex">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1)
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isActive ? 'true' : undefined}
                    className={`relative ${linkBaseClasses} ${
                      isActive
                        ? 'bg-white/5 text-white'
                        : 'text-slate-400 after:absolute after:bottom-1 after:left-1/2 after:h-px after:w-0 after:-translate-x-1/2 after:rounded-full after:bg-accent-300 after:transition-all after:duration-300 hover:text-white hover:after:w-3/5 motion-reduce:after:transition-none'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>
          <LanguageToggle ariaLabel={ui.languageAriaLabel} />
        </div>

        {/* Idioma + menu mobile */}
        <div className="flex items-center gap-2 md:hidden">
          <LanguageToggle ariaLabel={ui.languageAriaLabel} />
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="menu-mobile"
            aria-label={menuOpen ? ui.closeMenu : ui.openMenu}
            className="rounded-md p-2 text-slate-300 transition-colors duration-300 hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-300"
          >
            {menuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Painel do menu mobile */}
      {menuOpen && (
        <div
          id="menu-mobile"
          className="animate-fade-down border-b border-white/5 bg-background/95 backdrop-blur-md motion-reduce:animate-none md:hidden"
        >
          <ul className="space-y-1 px-6 py-4">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1)
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    aria-current={isActive ? 'true' : undefined}
                    className={`block ${linkBaseClasses} ${
                      isActive
                        ? 'bg-white/5 text-white'
                        : 'text-slate-400 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </header>
  )
}
