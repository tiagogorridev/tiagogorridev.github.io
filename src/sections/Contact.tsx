import { useEffect, useState } from 'react'
import { ArrowUpRight, Check, Copy } from 'lucide-react'
import { Button } from '../components/Button'
import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'
import { SectionHeading } from '../components/SectionHeading'
import { socialLinks } from '../data/portfolioData'
import { useContent } from '../i18n/useContent'

export function Contact() {
  const { ui, profile } = useContent()
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return
    const timeout = window.setTimeout(() => setCopied(false), 2500)
    return () => window.clearTimeout(timeout)
  }, [copied])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
    } catch {
      // Sem permissão/suporte ao clipboard: abre o cliente de e-mail.
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <Section id="contato">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-surface px-6 py-16 text-center sm:px-12">
          {/* Brilho decorativo */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-accent-500/20 blur-3xl"
          />

          <div className="relative">
            <SectionHeading
              align="center"
              eyebrow={ui.contactEyebrow}
              title={ui.contactTitle}
              description={ui.contactDescription}
            />

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <div aria-live="polite" className="w-full sm:w-auto">
                <Button onClick={copyEmail} className="w-full sm:w-auto">
                  {copied ? (
                    <>
                      <Check className="h-4 w-4" aria-hidden="true" />
                      {ui.emailCopied}
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" aria-hidden="true" />
                      {ui.copyEmail}
                    </>
                  )}
                </Button>
              </div>

              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <Button
                    key={social.label}
                    href={social.href}
                    external
                    variant="secondary"
                    className="w-full sm:w-auto"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                    {social.label}
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </Button>
                )
              })}
            </div>

            <p className="mt-8 text-sm text-slate-400">
              {ui.orEmailDirect}{' '}
              <a
                href={`mailto:${profile.email}`}
                className="font-medium text-accent-300 underline-offset-4 transition-colors duration-300 hover:text-accent-200 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-300"
              >
                {profile.email}
              </a>
            </p>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
