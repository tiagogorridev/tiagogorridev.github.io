import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { ScrollProgress } from './components/ScrollProgress'
import { Spotlight } from './components/Spotlight'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Experience } from './sections/Experience'
import { Education } from './sections/Education'
import { Skills } from './sections/Skills'
import { Contact } from './sections/Contact'
import { useContent } from './i18n/useContent'

export default function App() {
  const { ui } = useContent()

  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:rounded-lg focus:bg-accent-500 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        {ui.skipToContent}
      </a>

      <Spotlight />
      <ScrollProgress />
      <Header />

      <main id="conteudo">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
