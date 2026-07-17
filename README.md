# Portfólio - Tiago Kasprzak Gorri

Site de portfólio profissional (SPA) construído com **React 19**, **TypeScript**, **Vite** e **Tailwind CSS**, com suporte a **dois idiomas (pt-BR e EN)**.

## Rodando localmente

```bash
npm install
npm run dev      # servidor de desenvolvimento
npm run build    # type-check + build de produção (gera /dist)
npm run preview  # serve o build de produção localmente
```

## Deploy na Vercel

Basta importar o repositório na Vercel: o preset **Vite** é detectado automaticamente
(build: `npm run build`, output: `dist`). Nenhuma configuração extra é necessária.

## Estrutura

```
src/
├── components/   # Peças reutilizáveis (Header, Footer, Button, Section, IconBadge,
│                 # SocialIconLink, LanguageToggle, Avatar, Reveal, SectionHeading, Tag)
├── sections/     # Seções da página (Hero, About, Experience, Education, Skills, Contact)
├── data/         # Conteúdo do site nos dois idiomas (portfolioData.ts)
├── i18n/         # LanguageContext (estado do idioma) e useContent (conteúdo ativo)
├── hooks/        # useInView (animações de scroll) e useActiveSection (scroll spy)
└── types/        # Tipos TypeScript do domínio
```

## Idiomas (pt-BR / EN)

- O botão **PT / EN** no header troca o idioma do site inteiro.
- A escolha fica salva no `localStorage`; na primeira visita, o idioma do navegador decide.
- Todo o conteúdo bilíngue vive em [`src/data/portfolioData.ts`](src/data/portfolioData.ts),
  nos objetos `pt` e `en` - para editar textos, altere os dois.

## Arquivos em `public/`

| Arquivo      | Uso                                          |
| ------------ | -------------------------------------------- |
| `avatar.png` | Memoji exibido no hero                       |
| `cv-pt.pdf`  | Currículo baixado no botão "Baixar CV" (PT)  |
| `cv-en.pdf`  | Resume baixado no botão "Download Resume" (EN) |

## Adicionando certificações

As certificações ficam agrupadas por emissor em `certificationGroups` (nos dois idiomas).
Para adicionar uma nova (Udemy, Alura etc.), inclua o item no grupo do emissor:

```ts
{
  issuer: 'Udemy',
  certifications: [
    {
      title: 'Nome do curso',
      date: 'Jun 2026',                        // opcional
      credentialId: 'UC-...',                  // opcional
      url: 'https://udemy.com/certificate/x',  // opcional (vira card clicável)
      featured: true,                          // opcional (aparece na visão resumida)
    },
  ],
}
```

## Paleta de cores

| Uso                  | Cor       |
| -------------------- | --------- |
| Fundo principal      | `#11071F` |
| Cards / superfícies  | `#1A0B2E` |
| Superfície de apoio  | `#2D005A` |
| Botões / destaques   | `#6C4988` |
