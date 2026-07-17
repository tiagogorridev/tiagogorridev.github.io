import { useEffect, useState } from 'react'

/**
 * Scroll spy: retorna o id da seção atualmente visível no centro
 * da viewport, para destacar o link ativo na navegação.
 *
 * `sectionIds` deve ser uma referência estável (definida em módulo),
 * pois é dependência do efeito.
 */
export function useActiveSection(sectionIds: string[]): string {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? '')

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null)

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        }
      },
      // Faixa estreita no meio da tela: a seção que a cruza é a ativa.
      { rootMargin: '-45% 0px -50% 0px' },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [sectionIds])

  return activeId
}
