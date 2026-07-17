import { useEffect, useState } from 'react'

interface TypewriterOptions {
  typeMs?: number
  deleteMs?: number
  holdMs?: number
}

/**
 * Efeito de "máquina de escrever" ciclando entre palavras.
 * Com `prefers-reduced-motion`, desativa o efeito (`reduced: true`).
 */
export function useTypewriter(
  words: string[],
  { typeMs = 90, deleteMs = 45, holdMs = 1600 }: TypewriterOptions = {},
) {
  const [reduced] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (reduced || words.length === 0) return

    const word = words[wordIndex % words.length]
    let timeout: number

    if (!deleting) {
      if (text.length < word.length) {
        timeout = window.setTimeout(() => setText(word.slice(0, text.length + 1)), typeMs)
      } else {
        timeout = window.setTimeout(() => setDeleting(true), holdMs)
      }
    } else if (text.length > 0) {
      timeout = window.setTimeout(() => setText(text.slice(0, -1)), deleteMs)
    } else {
      setDeleting(false)
      setWordIndex((index) => index + 1)
      return
    }

    return () => window.clearTimeout(timeout)
  }, [text, deleting, wordIndex, words, reduced, typeMs, deleteMs, holdMs])

  return { text, reduced }
}
