import { IconBadge } from '../components/IconBadge'
import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'
import { SectionHeading } from '../components/SectionHeading'
import { Tag } from '../components/Tag'
import { useContent } from '../i18n/useContent'

export function Skills() {
  const { ui, skillCategories } = useContent()

  return (
    <Section id="skills">
      <Reveal>
        <SectionHeading
          eyebrow={ui.skillsEyebrow}
          title={ui.skillsTitle}
          description={ui.skillsDescription}
        />
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {skillCategories.map((category, index) => (
          <Reveal key={category.title} delay={index * 120} className="h-full">
            <div className="h-full rounded-2xl border border-white/5 bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-500/40 hover:shadow-glow">
              <div className="flex items-center gap-4">
                <IconBadge icon={category.icon} size="lg" />
                <h3 className="font-semibold text-white">{category.title}</h3>
              </div>

              <ul className="mt-6 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <li key={skill}>
                    <Tag>{skill}</Tag>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
