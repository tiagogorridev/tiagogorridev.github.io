import { useState } from 'react'
import {
  Award,
  BadgeCheck,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  GraduationCap,
  Trophy,
} from 'lucide-react'
import { IconBadge } from '../components/IconBadge'
import { PeriodBadge } from '../components/PeriodBadge'
import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'
import { SectionHeading } from '../components/SectionHeading'
import { getFeaturedCertifications } from '../data/portfolioData'
import { useContent } from '../i18n/useContent'
import type { Certification } from '../types/portfolio'

interface CertificationCardProps {
  certification: Certification
  /** Emissor exibido como subtítulo (usado na visão resumida). */
  issuer?: string
  credentialAriaLabel: string
}

function CertificationCard({
  certification,
  issuer,
  credentialAriaLabel,
}: CertificationCardProps) {
  const content = (
    <>
      <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-accent-300" aria-hidden="true" />
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium text-slate-200">{certification.title}</p>
        {issuer && <p className="mt-0.5 text-xs text-slate-400">{issuer}</p>}
      </div>
      {certification.date && (
        <span className="shrink-0 rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-slate-300">
          {certification.date}
        </span>
      )}
      {certification.url && (
        <ExternalLink className="h-4 w-4 shrink-0 text-slate-400" aria-hidden="true" />
      )}
    </>
  )

  const cardClasses =
    'flex h-full items-start gap-4 rounded-xl border border-white/5 bg-background/40 p-4 transition-colors duration-300 hover:border-accent-500/40'

  if (certification.url) {
    return (
      <a
        href={certification.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${certification.title} ${credentialAriaLabel}`}
        className={`${cardClasses} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-300`}
      >
        {content}
      </a>
    )
  }

  return <div className={cardClasses}>{content}</div>
}

export function Education() {
  const { ui, educationList, certificationGroups } = useContent()
  const [expanded, setExpanded] = useState(false)

  const featuredCertifications = getFeaturedCertifications(certificationGroups)
  const totalCertifications = certificationGroups.reduce(
    (total, group) => total + group.certifications.length,
    0,
  )

  return (
    <Section id="educacao">
      <Reveal>
        <SectionHeading
          eyebrow={ui.educationEyebrow}
          title={ui.educationTitle}
          description={ui.educationDescription}
        />
      </Reveal>

      {/* Formação acadêmica */}
      <Reveal delay={100}>
        <div className="mt-12 rounded-2xl border border-white/5 bg-surface p-6 sm:p-8">
          <div className="flex items-center gap-4">
            <IconBadge icon={GraduationCap} size="lg" />
            <h3 className="text-lg font-semibold text-white">{ui.academicBackground}</h3>
          </div>

          <ul className="mt-8 space-y-8">
            {educationList.map((entry) => (
              <li
                key={entry.degree}
                className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between"
              >
                <div>
                  <h4 className="font-semibold text-white">{entry.degree}</h4>
                  <p className="mt-1 text-sm font-medium text-accent-300">{entry.institution}</p>

                  <ul className="mt-4 space-y-2.5">
                    {entry.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-3 text-sm leading-relaxed text-slate-400"
                      >
                        <Trophy
                          className="mt-0.5 h-4 w-4 shrink-0 text-accent-300"
                          aria-hidden="true"
                        />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <PeriodBadge className="shrink-0 self-start">{entry.period}</PeriodBadge>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      {/* Licenças e certificações */}
      <Reveal delay={200}>
        <div className="mt-8 rounded-2xl border border-white/5 bg-surface p-6 sm:p-8">
          <div className="flex items-center gap-4">
            <IconBadge icon={Award} size="lg" />
            <h3 className="text-lg font-semibold text-white">{ui.certificationsTitle}</h3>
          </div>

          {expanded ? (
            <div
              id="todas-certificacoes"
              className="mt-8 animate-fade-down space-y-8 motion-reduce:animate-none"
            >
              {certificationGroups.map((group) => (
                <div key={group.issuer}>
                  <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent-300">
                    {group.issuer}
                    <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs font-medium normal-case tracking-normal text-slate-400">
                      {group.certifications.length}
                    </span>
                  </h4>
                  <ul className="mt-4 grid gap-4 sm:grid-cols-2">
                    {group.certifications.map((certification) => (
                      <li key={certification.title}>
                        <CertificationCard
                          certification={certification}
                          credentialAriaLabel={ui.credentialAriaLabel}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            <ul id="todas-certificacoes" className="mt-8 grid gap-4 sm:grid-cols-2">
              {featuredCertifications.map((certification) => (
                <li key={certification.title}>
                  <CertificationCard
                    certification={certification}
                    issuer={certification.issuer}
                    credentialAriaLabel={ui.credentialAriaLabel}
                  />
                </li>
              ))}
            </ul>
          )}

          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setExpanded((value) => !value)}
              aria-expanded={expanded}
              aria-controls="todas-certificacoes"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-5 py-2.5 text-sm font-medium text-slate-300 transition-all duration-300 hover:border-accent-500/50 hover:text-accent-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-300"
            >
              {expanded ? (
                <>
                  {ui.showLessCertifications}
                  <ChevronUp className="h-4 w-4" aria-hidden="true" />
                </>
              ) : (
                <>
                  {ui.showAllCertifications} ({totalCertifications})
                  <ChevronDown className="h-4 w-4" aria-hidden="true" />
                </>
              )}
            </button>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
