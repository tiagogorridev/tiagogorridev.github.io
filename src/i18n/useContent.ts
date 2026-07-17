import { content } from '../data/portfolioData'
import type { PortfolioContent } from '../types/portfolio'
import { useLanguage } from './LanguageContext'

/** Retorna todo o conteúdo do site no idioma ativo. */
export function useContent(): PortfolioContent {
  const { language } = useLanguage()
  return content[language]
}
