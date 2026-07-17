import { MapPin } from 'lucide-react'
import { PeriodBadge } from '../components/PeriodBadge'
import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'
import { SectionHeading } from '../components/SectionHeading'
import { Tag } from '../components/Tag'
import { useContent } from '../i18n/useContent'

export function Experience() {
  const { ui, experiences } = useContent()

  return (
    <Section id="experiencia">
      <Reveal>
        <SectionHeading
          eyebrow={ui.experienceEyebrow}
          title={ui.experienceTitle}
          description={ui.experienceDescription}
        />
      </Reveal>

      <ol className="relative ml-2 mt-14 space-y-10 border-l border-white/10 pl-8 sm:pl-10">
        {experiences.map((experience, index) => (
          <li key={`${experience.role}-${experience.period}`} className="relative">
            {/* Marcador da timeline */}
            <span
              aria-hidden="true"
              className="absolute -left-10 top-2 h-4 w-4 rounded-full border-2 border-accent-400 bg-background sm:-left-12"
            />

            <Reveal delay={index * 120}>
              <article className="rounded-2xl border border-white/5 bg-surface p-6 transition-all duration-300 hover:border-accent-500/40 hover:shadow-glow sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{experience.role}</h3>
                    <p className="mt-1 text-sm font-medium text-accent-300">
                      {experience.company}
                    </p>
                  </div>

                  <div className="flex flex-col items-start gap-2 sm:items-end">
                    <PeriodBadge>{experience.period}</PeriodBadge>
                    <span className="inline-flex items-center gap-1.5 text-xs text-slate-400">
                      <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                      {experience.location}
                    </span>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-slate-400">
                  {experience.description}
                </p>

                <ul className="mt-4 space-y-2.5">
                  {experience.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex gap-3 text-sm leading-relaxed text-slate-400"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400"
                      />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <ul className="mt-6 flex flex-wrap gap-2" aria-label={ui.techUsedAriaLabel}>
                  {experience.stack.map((tech) => (
                    <li key={tech}>
                      <Tag>{tech}</Tag>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  )
}
