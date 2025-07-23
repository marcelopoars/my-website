# 🚀 Marcelo Pereira — Portfólio

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=nextdotjs)
![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Tailwind](https://img.shields.io/badge/TailwindCSS-4.0-06B6D4?logo=tailwindcss)
![Status](https://img.shields.io/badge/Deploy-Online-brightgreen)
![License](https://img.shields.io/badge/license-MIT-green)
![Status](https://img.shields.io/badge/status-em%20desenvolvimento-blue)

> ✨ Meu site pessoal e portfólio como **desenvolvedor front-end sênior**, com foco em **performance**, **acessibilidade**, **arquitetura escalável** e **código limpo**.

🔗 **Acesse em:** [www.marcelopereira.com.br](https://www.marcelopereira.com.br)
📁 **Repositório:** [github.com/marcelopoars/my-website](https://github.com/marcelopoars/my-website)

## Sobre o projeto

Site pessoal e portfólio desenvolvido para apresentar projetos, habilidades e experiências como desenvolvedor front-end sênior. O foco está em performance, acessibilidade, arquitetura escalável e código limpo.

## ⚙️ Tecnologias utilizadas

- **Next.js 15 (App Router)** — SSR, SSG, otimizações e DX moderna
- **React 19** — com recursos como Server Actions e React Compiler
- **Tailwind CSS 4** — com `tailwind-merge` e `cva` para composição elegante
- **shadcn/ui** — Design System baseado em Radix UI
- **TypeScript** — Tipagem estática e segurança em tempo de desenvolvimento
- **ESLint + Prettier** — Base Rocketseat configurada para padronização de código

## 📂 Organização e estrutura do projeto

Este projeto utiliza uma **estrutura modular baseada em features** (feature-based/domain-driven), que agrupa arquivos por funcionalidades ou domínios, e não apenas por tipo. Isso facilita a escalabilidade, manutenção e colaboração em equipe.

**Decisões técnicas principais:**

- **Feature-based structure:** Cada funcionalidade (ex: footer, home, shared, lib) possui sua própria pasta, agrupando componentes, dados e utilitários relacionados.
- **Nomenclatura descritiva e em inglês:** Pastas e arquivos usam nomes claros, em inglês e geralmente em kebab-case (ex: `footer-about.tsx`, `footer-links-list.tsx`).
- **Componentização:** Componentes são extraídos para arquivos próprios, tornando o código mais modular e reutilizável.
- **Facilidade de manutenção:** Novas features podem ser adicionadas sem impactar outras áreas do projeto.

**Estrutura do projeto:**

```
src/
  app/
  assets/
  features/
    home/
      comments/
      dica-do-nerd/
        assets/
      hero-home/
      last-projects/
        assets/
      index.ts
    o-marcelo/
      about-me/
      experiences/
      hero-marcelo/
        assets/
      index.ts
    index.ts
  shared/
    components/
      contact-banner/
      footer/
        footer-links/
      header/
      icons/
      logos/
      share/
      theme-toggle/
      ui/
      index.ts
    providers/
    index.ts
  styles/
  utils/
```

> 🎯 Essa abordagem torna o projeto mais organizado, fácil de entender e pronto para crescer.

## ✨ Diferenciais técnicos

- ♿️ Acessibilidade (ARIA, teclado, contraste)
- 📱 Mobile-first e responsividade
- ⚡️ Server Components e otimizações com Next.js
- 🚀 Deploy profissional via Vercel
- 🔍 SEO (meta tags, OG Image, sitemap.xml, robots.txt)
- 🧠 Arquitetura baseada em features
- 🧪 Scripts de verificação com ESLint, Prettier e TypeScript

## 💻 Como rodar localmente

```bash
git clone https://github.com/marcelopoars/my-website.git
cd my-website
npm install
npm run dev
```

Para verificar a qualidade do projeto:

```bash
npm run check
```

## 🧪 Qualidade de código

Este projeto adota um pipeline de verificação completo para garantir a qualidade e consistência do código:

- ✅ **TypeScript** – verificação de tipos
- ✅ **ESLint** – análise de boas práticas e padronização
- ✅ **Prettier** – formatação automática

### 📜 Scripts disponíveis

```bash
npm run lint         # Analisa o código com ESLint
npm run type-check   # Verifica os tipos com TypeScript
npm run format       # Formata o código com Prettier
npm run format:check # Verifica se o código está formatado
npm run check        # Executa type-check, lint e format:check juntos
```

💡 O comando npm run check é ideal para CI/CD ou pré-pull requests. Ele garante que o código esteja padronizado, sem erros de lint e com os tipos corretos antes de qualquer deploy.

## 🚧 Roadmap

- [x] Refatoração da estrutura do projeto para feature-based
- [x] Melhoria na qualidade e padronização do código
- [x] Configuração de scripts de verificação (type-check, lint, prettier)
- [x] Documentação e organização do README
- [ ] Integração de Husky para pre-commit
- [ ] Testes unitários
- [ ] Testes automatizados
- [ ] Acessibilidade avançada (testes com Axe)
- [ ] Lighthouse score 100/100 em todos os pilares
- [ ] Integração com Google Analytics ou Vercel Analytics
- [ ] Criar animações

## 🙏 Agradecimentos

- [shadcn/ui](https://ui.shadcn.com/)
- [Rocketseat](https://rocketseat.com.br/)
- Comunidade open source

## 📄 Licença

Este projeto está licenciado sob a licença [MIT](LICENSE).

## 👨‍💻 Sobre mim

Desenvolvedor front-end sênior com mais de 15 anos de experiência em aplicações web, especializado em React, Next.js, TypeScript, Tailwind CSS, Shadcn UI e Node.js. Atua com foco em arquitetura escalável, acessibilidade, performance e código limpo, além de liderar tecnicamente projetos e equipes, participando ativamente da definição de soluções, revisão de código e tomada de decisões estratégicas.

- 🌐 **Site**: [www.marcelopereira.com.br](https://www.marcelopereira.com.br)
- 💼 **LinkedIn**: [linkedin.com/in/marcelopoars](https://www.linkedin.com/in/marcelopoars/)
- 📫 **Email**: [marcelo.fatecpoa@gmail.com](mailto:marcelo.fatecpoa@gmail.com)
