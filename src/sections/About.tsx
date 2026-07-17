import { Download } from 'lucide-react'
import { Button } from '../components/Button'
import { IconBadge } from '../components/IconBadge'
import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'
import { SectionHeading } from '../components/SectionHeading'
import { useContent } from '../i18n/useContent'

export function About() {
  const { ui, profile, quickFacts } = useContent()

  return (
    <Section id="sobre">
      <Reveal>
        <SectionHeading eyebrow={ui.aboutEyebrow} title={ui.aboutTitle} />
      </Reveal>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-14">
        <Reveal delay={100}>
          <div className="space-y-5 text-center leading-relaxed text-slate-400 md:text-left">
            {profile.aboutParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8 flex justify-center md:justify-start">
            <Button href={profile.resumeUrl} variant="secondary" download>
              <Download className="h-4 w-4" aria-hidden="true" />
              {ui.downloadCv}
            </Button>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <ul className="h-fit space-y-6 rounded-2xl border border-white/5 bg-surface p-6 sm:p-8">
            {quickFacts.map((fact) => (
              <li key={fact.label} className="flex items-start gap-4">
                <IconBadge icon={fact.icon} />
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                    {fact.label}
                  </p>
                  <p className="mt-1 text-sm text-slate-200">{fact.value}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  )
}
