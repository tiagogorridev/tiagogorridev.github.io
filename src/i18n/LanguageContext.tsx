import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import type { Language } from '../types/portfolio'

const STORAGE_KEY = 'portfolio-language'

interface LanguageContextValue {
  language: Language
  setLanguage: (language: Language) => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

function detectInitialLanguage(): Language {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === 'pt' || stored === 'en') return stored
  } catch {
    // localStorage indisponível (ex.: navegação privada): segue para a detecção.
  }
  return navigator.language.toLowerCase().startsWith('pt') ? 'pt' : 'en'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(detectInitialLanguage)

  useEffect(() => {
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en'
  }, [language])

  const setLanguage = useCallback((next: Language) => {
    setLanguageState(next)
    try {
      window.localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // Sem persistência disponível: a escolha vale só para a sessão.
    }
  }, [])

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage deve ser usado dentro de <LanguageProvider>')
  }
  return context
}
