import { ArrowRight, ChevronDown } from 'lucide-react'
import { Avatar } from '../components/Avatar'
import { Button } from '../components/Button'
import { Reveal } from '../components/Reveal'
import { SocialIconLink } from '../components/SocialIconLink'
import { socialLinks } from '../data/portfolioData'
import { useContent } from '../i18n/useContent'
import { useTypewriter } from '../hooks/useTypewriter'

export function Hero() {
  const { ui, profile } = useContent()
  const { text: typedSpecialty, reduced } = useTypewriter(profile.specialties)

  return (
    <section id="inicio" className="relative flex min-h-screen items-center overflow-hidden">
      {/* Brilhos decorativos de fundo */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 right-[-15%] h-[28rem] w-[28rem] rounded-full bg-accent-500/20 blur-3xl" />
        <div className="absolute bottom-[-20%] left-[-15%] h-[30rem] w-[30rem] rounded-full bg-surface-strong/50 blur-3xl" />
      </div>

      <div className="relative mx-auto grid w-full max-w-5xl items-center gap-12 px-6 pb-24 pt-28 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8 lg:px-8">
        <div className="text-center lg:text-left">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent-300">
              {ui.heroGreeting}
            </p>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {profile.name}
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-5 text-xl font-medium text-slate-200 sm:text-2xl">
              {profile.role}
              <span aria-hidden="true" className="mx-3 text-accent-400">
                |
              </span>
              <span className="text-accent-200">
                {reduced ? (
                  profile.specialties.join(' • ')
                ) : (
                  <>
                    <span className="sr-only">{profile.specialties.join(' • ')}</span>
                    <span aria-hidden="true" className="inline-block min-w-[5ch] text-left">
                      {typedSpecialty}
                      <span className="animate-blink text-accent-400">|</span>
                    </span>
                  </>
                )}
              </span>
            </p>
          </Reveal>

          <Reveal delay={300}>
            <p className="mx-auto mt-6 max-w-xl leading-relaxed text-slate-400 lg:mx-0">
              {profile.tagline}
            </p>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
              <Button href="#experiencia">
                {ui.viewExperiences}
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Button>

              <Button href="#contato" variant="secondary">
                {ui.getInTouch}
              </Button>

              <div className="flex items-center justify-center gap-3 sm:ml-2">
                {socialLinks.map((social) => (
                  <SocialIconLink
                    key={social.label}
                    href={social.href}
                    icon={social.icon}
                    ariaLabel={`${social.label} ${ui.opensInNewTab}`}
                  />
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Avatar */}
        <Reveal delay={200} className="order-first justify-self-center lg:order-none lg:justify-self-end">
          <div className="relative animate-float motion-reduce:animate-none">
            <div
              aria-hidden="true"
              className="absolute -inset-6 rounded-full bg-accent-500/20 blur-2xl"
            />
            <div className="relative rounded-full bg-gradient-to-br from-accent-400/70 via-accent-500/25 to-surface-strong/70 p-1.5">
              <div className="overflow-hidden rounded-full border border-white/10 bg-gradient-to-b from-surface-strong/60 to-surface">
                <Avatar
                  alt={ui.avatarAlt}
                  className="h-40 w-40 sm:h-48 sm:w-48 lg:h-72 lg:w-72"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <a
        href="#sobre"
        aria-label={ui.scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 rounded-full p-2 text-slate-400 transition-colors duration-300 hover:text-accent-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-300"
      >
        <ChevronDown className="h-6 w-6 animate-bounce motion-reduce:animate-none" aria-hidden="true" />
      </a>
    </section>
  )
}
