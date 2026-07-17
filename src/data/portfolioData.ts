import {
  Briefcase,
  Database,
  Github,
  GraduationCap,
  Languages,
  Linkedin,
  MapPin,
  Monitor,
  Server,
} from 'lucide-react'
import type {
  Certification,
  CertificationGroup,
  Language,
  PortfolioContent,
  SocialLink,
} from '../types/portfolio'

/* ------------------------------------------------------------------ */
/* Dados independentes de idioma                                       */
/* ------------------------------------------------------------------ */

export const socialLinks: SocialLink[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/tiagogorridev',
    icon: Github,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/tiagogorridev/',
    icon: Linkedin,
  },
]

/* ------------------------------------------------------------------ */
/* Conteúdo em Português (pt-BR)                                       */
/* ------------------------------------------------------------------ */

const pt: PortfolioContent = {
  ui: {
    skipToContent: 'Pular para o conteúdo',
    navAriaLabel: 'Navegação principal',
    languageAriaLabel: 'Idioma do site',
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
    heroGreeting: 'Olá, eu sou o',
    viewExperiences: 'Ver Experiências',
    getInTouch: 'Entrar em Contato',
    scrollToAbout: 'Rolar para a seção Sobre mim',
    avatarAlt: 'Memoji de Tiago Kasprzak Gorri',
    aboutEyebrow: 'Sobre mim',
    aboutTitle: 'Quem está por trás do código',
    downloadCv: 'Baixar CV',
    experienceEyebrow: 'Experiência',
    experienceTitle: 'Minha trajetória profissional',
    experienceDescription:
      'Do programa de trainee ao desenvolvimento de um sistema em produção, evoluindo como desenvolvedor full stack na Wise Systems.',
    techUsedAriaLabel: 'Tecnologias utilizadas',
    educationEyebrow: 'Educação',
    educationTitle: 'Formação e certificações',
    educationDescription:
      'Base acadêmica sólida em Engenharia de Software, complementada por licenças e certificações em cloud, redes e computação.',
    academicBackground: 'Formação Acadêmica',
    certificationsTitle: 'Licenças e Certificações',
    showAllCertifications: 'Ver todas as certificações',
    showLessCertifications: 'Mostrar menos',
    credentialAriaLabel: '(credencial em nova aba)',
    skillsEyebrow: 'Skills',
    skillsTitle: 'Tecnologias e ferramentas',
    skillsDescription:
      'Stack com que trabalho no dia a dia e tecnologias que utilizo para construir aplicações completas, do banco de dados à interface.',
    contactEyebrow: 'Contato',
    contactTitle: 'Vamos construir algo juntos?',
    contactDescription:
      'Estou sempre aberto a novas conexões, projetos e boas conversas sobre tecnologia. Me chame em qualquer um dos canais abaixo.',
    copyEmail: 'E-mail',
    emailCopied: 'E-mail copiado!',
    orEmailDirect: 'Ou envie um e-mail direto para',
    backToTop: 'Voltar ao topo',
    opensInNewTab: '(abre em nova aba)',
  },
  profile: {
    name: 'Tiago Kasprzak Gorri',
    role: 'Full Stack Developer',
    specialties: ['Java', 'React', 'Cloud'],
    tagline:
      'Gosto de resolver problemas reais com software bem feito. Trabalho o produto inteiro: do backend em Java e Spring Boot à interface em React, com a nuvem sustentando tudo.',
    location: 'Curitiba, PR - Brasil',
    email: 'tiagogorridev@gmail.com',
    resumeUrl: '/cv-pt.pdf',
    aboutParagraphs: [
      'Desenvolvedor Full Stack com experiência profissional em Java, Spring Boot, React e TypeScript, atualmente na Wise Systems trabalhando em aplicações web escaláveis. Sou estudante de Engenharia de Software na PUCPR (6º período), com forte interesse em desenvolvimento backend e computação em nuvem.',
      'Tenho experiência com APIs REST, SQL e desenvolvimento full stack, além de tecnologias como Angular, Python, Go, Microsoft Azure e AWS. Sou certificado Microsoft Azure Fundamentals (AZ-900) e AWS Certified AI Practitioner (AIF-C01).',
      'Falo inglês fluentemente, após 10 anos de formação na Wizard. Busco sempre evoluir tecnicamente e contribuir com soluções de qualidade, código bem estruturado e trabalho em equipe.',
    ],
  },
  navLinks: [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Experiência', href: '#experiencia' },
    { label: 'Educação', href: '#educacao' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contato', href: '#contato' },
  ],
  quickFacts: [
    {
      label: 'Localização',
      value: 'Curitiba, PR - Brasil',
      icon: MapPin,
    },
    {
      label: 'Formação',
      value: 'Eng. de Software - PUCPR (6º período)',
      icon: GraduationCap,
    },
    {
      label: 'Atualmente',
      value: 'Dev Full Stack Júnior na Wise Systems',
      icon: Briefcase,
    },
    {
      label: 'Idiomas',
      value: 'Português (nativo) · Inglês (fluente)',
      icon: Languages,
    },
  ],
  experiences: [
    {
      company: 'Wise Systems',
      role: 'Junior Software Developer',
      period: 'Abr 2025 - Presente',
      location: 'Curitiba, PR',
      description:
        'Atuação no time responsável por um sistema de gestão de passagens aéreas, participando de todo o ciclo de desenvolvimento, do backend ao frontend.',
      highlights: [
        'Manutenção e evolução de um sistema de gestão de passagens aéreas.',
        'Desenvolvimento de APIs REST com Java e Spring Boot.',
        'Construção de interfaces web responsivas com React, TypeScript e Tailwind CSS.',
      ],
      stack: ['Java', 'Spring Boot', 'React', 'TypeScript', 'Tailwind CSS'],
    },
    {
      company: 'Wise Systems',
      role: 'Trainee',
      period: 'Jan 2025 - Mar 2025',
      location: 'Curitiba, PR',
      description:
        'Programa de formação em desenvolvimento full stack, concluído com a entrega de um projeto completo de ponta a ponta.',
      highlights: [
        'Desenvolvimento de um aplicativo full stack de time tracking (controle de horas).',
        'Backend com Java e Spring Boot, frontend com Angular e persistência com SQL.',
      ],
      stack: ['Java', 'Spring Boot', 'Angular', 'SQL'],
    },
  ],
  educationList: [
    {
      institution: 'PUCPR - Pontifícia Universidade Católica do Paraná',
      degree: 'Bacharelado em Engenharia de Software',
      period: 'Fev 2024 - Dez 2027',
      highlights: ['Projeto "MyWallet" - 1º lugar no Voto Popular.'],
    },
    {
      institution: 'Wizard by Pearson',
      degree: 'Curso de Inglês - Certificado de Proficiência',
      period: 'Ago 2012 - Ago 2022',
      highlights: [
        '10 anos de formação formal, alcançando fluência em inglês falado e escrito (nível C1).',
      ],
    },
  ],
  certificationGroups: [
    {
      issuer: 'Amazon Web Services (AWS)',
      certifications: [
        {
          title: 'AWS Certified AI Practitioner (AIF-C01)',
          date: 'Jul 2026',
          credentialId: 'eed7eb4f-4784-47d3-97b8-7cdb83d25292',
          featured: true,
        },
      ],
    },
    {
      issuer: 'Microsoft',
      certifications: [
        {
          title: 'Microsoft Certified: Azure Fundamentals (AZ-900)',
          date: 'Jul 2025',
          credentialId: '8BE6F2307CB5A7D4',
          featured: true,
        },
      ],
    },
    {
      issuer: 'Cisco Networking Academy',
      certifications: [
        {
          title: 'Linux Unhatched',
          date: 'Jun 2025',
          credentialId: 'e1729ed3-94b4-4552-a127-0393e9effea2',
          featured: true,
        },
        {
          title: 'Defesa de Rede',
          date: 'Abr 2025',
          credentialId: 'a9a19474-3988-4029-9dd0-8d6eb9da0f91',
          featured: true,
        },
      ],
    },
    {
      issuer: 'Harvard University',
      certifications: [
        {
          title: 'CS50: Introduction to Computer Science (via Fundação Estudar)',
          date: 'Jul 2025',
          featured: true,
        },
      ],
    },
    {
      issuer: 'PUCPR',
      certifications: [
        {
          title:
            '1º Lugar no Voto Popular | Experiência Criativa: Projetando Soluções Computacionais',
          date: 'Jun 2025',
          featured: true,
        },
      ],
    },
    {
      issuer: 'Udemy',
      certifications: [
        {
          title: 'Curso Preparatório AZ-900',
          date: 'Jun 2025',
          credentialId: 'UC-816db5ba-fef1-4771-b7c2-c71faad14f36',
        },
        {
          title: 'Curso React e TypeScript',
          date: 'Jun 2025',
          credentialId: 'UC-13f3212e-e2c9-473f-bf1c-69648089b40c',
        },
        {
          title: 'Curso Java Spring Boot',
          date: 'Jan 2025',
          credentialId: 'UC-b407e218-8f90-4758-8523-5d7457d64a2e',
        },
        {
          title: 'Curso Java',
          date: 'Jan 2025',
          credentialId: 'UC-96cbf31d-1ff8-4374-8cfb-5dbf1d91f788',
        },
        {
          title: 'Curso Angular 17',
          date: 'Jan 2025',
          credentialId: 'UC-1378ebd7-7afb-4e7a-b958-a664c1aacbe9',
        },
        {
          title: 'Curso HTML5 e CSS3',
          date: 'Jan 2025',
          credentialId: 'UC-0f9d0a3e-8978-4971-898c-228dd7a5e7fa',
        },
        {
          title: 'Curso JavaScript (com Node.js)',
          date: 'Jan 2025',
          credentialId: 'UC-40969c09-92ac-4a64-ac6b-88aecbf6d4a6',
        },
        {
          title: 'Curso Git e GitHub',
          date: 'Jan 2025',
          credentialId: 'UC-f35cc10e-ee28-441c-bcad-2350a4f23d7d',
        },
      ],
    },
  ],
  skillCategories: [
    {
      title: 'Front-end',
      icon: Monitor,
      skills: [
        'React',
        'TypeScript',
        'Tailwind CSS',
        'HTML5',
        'CSS3',
        'JavaScript',
        'Angular',
      ],
    },
    {
      title: 'Back-end & Cloud',
      icon: Server,
      skills: [
        'Java',
        'Spring Boot',
        'Python',
        'Go',
        'Node.js',
        'AWS',
        'Microsoft Azure',
        'Linux',
      ],
    },
    {
      title: 'Ferramentas & Banco de Dados',
      icon: Database,
      skills: ['SQL', 'Git', 'GitHub', 'Metodologias Ágeis'],
    },
  ],
}

/* ------------------------------------------------------------------ */
/* Conteúdo em Inglês (en)                                             */
/* ------------------------------------------------------------------ */

const en: PortfolioContent = {
  ui: {
    skipToContent: 'Skip to content',
    navAriaLabel: 'Main navigation',
    languageAriaLabel: 'Site language',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    heroGreeting: "Hi, I'm",
    viewExperiences: 'View Experience',
    getInTouch: 'Get in Touch',
    scrollToAbout: 'Scroll to the About section',
    avatarAlt: 'Memoji of Tiago Kasprzak Gorri',
    aboutEyebrow: 'About me',
    aboutTitle: 'Who is behind the code',
    downloadCv: 'Download Resume',
    experienceEyebrow: 'Experience',
    experienceTitle: 'My professional journey',
    experienceDescription:
      'From the trainee program to working on a production system, growing as a full stack developer at Wise Systems.',
    techUsedAriaLabel: 'Technologies used',
    educationEyebrow: 'Education',
    educationTitle: 'Education and certifications',
    educationDescription:
      'Solid academic background in Software Engineering, complemented by licenses and certifications in cloud, networking and computer science.',
    academicBackground: 'Academic Background',
    certificationsTitle: 'Licenses & Certifications',
    showAllCertifications: 'Show all certifications',
    showLessCertifications: 'Show less',
    credentialAriaLabel: '(credential in a new tab)',
    skillsEyebrow: 'Skills',
    skillsTitle: 'Technologies and tools',
    skillsDescription:
      'The stack I work with every day and the technologies I use to build complete applications, from the database to the interface.',
    contactEyebrow: 'Contact',
    contactTitle: "Let's build something together",
    contactDescription:
      "I'm always open to new connections, projects and good conversations about technology. Reach out on any of the channels below.",
    copyEmail: 'Email',
    emailCopied: 'Email copied!',
    orEmailDirect: 'Or email me directly at',
    backToTop: 'Back to top',
    opensInNewTab: '(opens in a new tab)',
  },
  profile: {
    name: 'Tiago Kasprzak Gorri',
    role: 'Full Stack Developer',
    specialties: ['Java', 'React', 'Cloud'],
    tagline:
      'I like solving real problems with well-crafted software. I work across the whole product: from Java and Spring Boot on the backend to React on the front, with the cloud holding it all together.',
    location: 'Curitiba, PR - Brazil',
    email: 'tiagogorridev@gmail.com',
    resumeUrl: '/cv-en.pdf',
    aboutParagraphs: [
      "Full Stack Developer with professional experience in Java, Spring Boot, React and TypeScript, currently at Wise Systems working on scalable web applications. I'm a Software Engineering student at PUCPR (6th semester), with a strong interest in backend development and cloud computing.",
      "I'm experienced in REST APIs, SQL and full stack development, as well as technologies such as Angular, Python, Go, Microsoft Azure and AWS. I hold the Microsoft Certified: Azure Fundamentals (AZ-900) and AWS Certified AI Practitioner (AIF-C01) certifications.",
      "I'm fluent in English after 10 years of formal studies at Wizard, always looking to grow technically and contribute with high-quality solutions, well-structured code and collaborative teamwork.",
    ],
  },
  navLinks: [
    { label: 'Home', href: '#inicio' },
    { label: 'About', href: '#sobre' },
    { label: 'Experience', href: '#experiencia' },
    { label: 'Education', href: '#educacao' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contato' },
  ],
  quickFacts: [
    {
      label: 'Location',
      value: 'Curitiba, PR - Brazil',
      icon: MapPin,
    },
    {
      label: 'Education',
      value: 'Software Eng. - PUCPR (6th semester)',
      icon: GraduationCap,
    },
    {
      label: 'Currently',
      value: 'Junior Full Stack Dev at Wise Systems',
      icon: Briefcase,
    },
    {
      label: 'Languages',
      value: 'Portuguese (native) · English (fluent)',
      icon: Languages,
    },
  ],
  experiences: [
    {
      company: 'Wise Systems',
      role: 'Junior Software Developer',
      period: 'Apr 2025 - Present',
      location: 'Curitiba, Brazil',
      description:
        'Working on the team responsible for an airline ticket management system, taking part in the whole development cycle, from backend to frontend.',
      highlights: [
        'Maintenance and evolution of an airline ticket management system.',
        'Development of REST APIs with Java and Spring Boot.',
        'Building responsive web interfaces with React, TypeScript and Tailwind CSS.',
      ],
      stack: ['Java', 'Spring Boot', 'React', 'TypeScript', 'Tailwind CSS'],
    },
    {
      company: 'Wise Systems',
      role: 'Trainee',
      period: 'Jan 2025 - Mar 2025',
      location: 'Curitiba, Brazil',
      description:
        'Full stack development training program, completed with the delivery of an end-to-end project.',
      highlights: [
        'Development of a full stack time tracking application.',
        'Backend with Java and Spring Boot, frontend with Angular and SQL persistence.',
      ],
      stack: ['Java', 'Spring Boot', 'Angular', 'SQL'],
    },
  ],
  educationList: [
    {
      institution: 'PUCPR - Pontifical Catholic University of Paraná',
      degree: "Bachelor's Degree in Software Engineering",
      period: 'Feb 2024 - Dec 2027',
      highlights: ['"MyWallet" project - 1st place in the Popular Vote.'],
    },
    {
      institution: 'Wizard by Pearson',
      degree: 'English Course - Proficiency Certificate',
      period: 'Aug 2012 - Aug 2022',
      highlights: [
        '10-year formal program, achieving fluency in spoken and written English (C1 level).',
      ],
    },
  ],
  certificationGroups: [
    {
      issuer: 'Amazon Web Services (AWS)',
      certifications: [
        {
          title: 'AWS Certified AI Practitioner (AIF-C01)',
          date: 'Jul 2026',
          credentialId: 'eed7eb4f-4784-47d3-97b8-7cdb83d25292',
          featured: true,
        },
      ],
    },
    {
      issuer: 'Microsoft',
      certifications: [
        {
          title: 'Microsoft Certified: Azure Fundamentals (AZ-900)',
          date: 'Jul 2025',
          credentialId: '8BE6F2307CB5A7D4',
          featured: true,
        },
      ],
    },
    {
      issuer: 'Cisco Networking Academy',
      certifications: [
        {
          title: 'Linux Unhatched',
          date: 'Jun 2025',
          credentialId: 'e1729ed3-94b4-4552-a127-0393e9effea2',
          featured: true,
        },
        {
          title: 'Network Defense',
          date: 'Apr 2025',
          credentialId: 'a9a19474-3988-4029-9dd0-8d6eb9da0f91',
          featured: true,
        },
      ],
    },
    {
      issuer: 'Harvard University',
      certifications: [
        {
          title: 'CS50: Introduction to Computer Science (via Fundação Estudar)',
          date: 'Jul 2025',
          featured: true,
        },
      ],
    },
    {
      issuer: 'PUCPR',
      certifications: [
        {
          title:
            '1st Place in the Popular Vote | Creative Experience: Designing Computational Solutions',
          date: 'Jun 2025',
          featured: true,
        },
      ],
    },
    {
      issuer: 'Udemy',
      certifications: [
        {
          title: 'AZ-900 Preparation Course',
          date: 'Jun 2025',
          credentialId: 'UC-816db5ba-fef1-4771-b7c2-c71faad14f36',
        },
        {
          title: 'React and TypeScript Course',
          date: 'Jun 2025',
          credentialId: 'UC-13f3212e-e2c9-473f-bf1c-69648089b40c',
        },
        {
          title: 'Java Spring Boot Course',
          date: 'Jan 2025',
          credentialId: 'UC-b407e218-8f90-4758-8523-5d7457d64a2e',
        },
        {
          title: 'Java Course',
          date: 'Jan 2025',
          credentialId: 'UC-96cbf31d-1ff8-4374-8cfb-5dbf1d91f788',
        },
        {
          title: 'Angular 17 Course',
          date: 'Jan 2025',
          credentialId: 'UC-1378ebd7-7afb-4e7a-b958-a664c1aacbe9',
        },
        {
          title: 'HTML5 and CSS3 Course',
          date: 'Jan 2025',
          credentialId: 'UC-0f9d0a3e-8978-4971-898c-228dd7a5e7fa',
        },
        {
          title: 'JavaScript Course (with Node.js)',
          date: 'Jan 2025',
          credentialId: 'UC-40969c09-92ac-4a64-ac6b-88aecbf6d4a6',
        },
        {
          title: 'Git and GitHub Course',
          date: 'Jan 2025',
          credentialId: 'UC-f35cc10e-ee28-441c-bcad-2350a4f23d7d',
        },
      ],
    },
  ],
  skillCategories: [
    {
      title: 'Front-end',
      icon: Monitor,
      skills: [
        'React',
        'TypeScript',
        'Tailwind CSS',
        'HTML5',
        'CSS3',
        'JavaScript',
        'Angular',
      ],
    },
    {
      title: 'Back-end & Cloud',
      icon: Server,
      skills: [
        'Java',
        'Spring Boot',
        'Python',
        'Go',
        'Node.js',
        'AWS',
        'Microsoft Azure',
        'Linux',
      ],
    },
    {
      title: 'Tools & Databases',
      icon: Database,
      skills: ['SQL', 'Git', 'GitHub', 'Agile Methodologies'],
    },
  ],
}

/* ------------------------------------------------------------------ */
/* Exports                                                             */
/* ------------------------------------------------------------------ */

export const content: Record<Language, PortfolioContent> = { pt, en }

/** Ids das seções (iguais nos dois idiomas), usados pelo scroll spy. */
export const sectionIds: string[] = pt.navLinks.map((link) => link.href.slice(1))

/** Certificações em destaque (visão resumida), com o emissor de cada uma. */
export function getFeaturedCertifications(
  groups: CertificationGroup[],
): Array<Certification & { issuer: string }> {
  return groups.flatMap((group) =>
    group.certifications
      .filter((certification) => certification.featured)
      .map((certification) => ({ ...certification, issuer: group.issuer })),
  )
}
