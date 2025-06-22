type Stack =
  | 'AWS'
  | 'CSS'
  | 'HTML'
  | 'Next.Js'
  | 'PHP'
  | 'JavaScript'
  | 'React.js'
  | 'SEO'
  | 'Styled-components'
  | 'Tailwind CSS'
  | 'TypeScript'
  | 'Solução de Problemas Técnicos'
  | 'Manutenção de Computadores'
  | 'Suporte ao Usuário'
  | 'Manutenção Preventiva'

interface Experiences {
  company: string
  role: string
  description: string
  stack: Stack[]
}

export const experiences: Experiences[] = [
  {
    company: 'Grupo RBS',
    role: 'Desenvolvedor Front-End Sênior',
    description:
      'Atuando como Desenvolvedor Frontend nos projetos digitais de GZH.',
    stack: [
      'React.js',
      'Next.Js',
      'TypeScript',
      'JavaScript',
      'Tailwind CSS',
      'HTML',
      'CSS',
      'SEO',
    ],
  },
  {
    company: 'DBC Company',
    role: 'Desenvolvedor Front-End',
    description:
      'Atuei como Desenvolvedor Frontend no cliente PagoNxt, uma empresa do grupo Santander em um projeto global de backoffice de alta complexidade onde tive a oportunidade de trabalhar com modernas tecnologias para front-end.',
    stack: [
      'React.js',
      'TypeScript',
      'JavaScript',
      'HTML',
      'CSS',
      'Styled-components',
      'AWS',
    ],
  },
  {
    company: 'Axur',
    role: 'Desenvolvedor Front-End',
    description:
      'Atuei no time de Marketing como Desenvolvedor Frontend responsável pelo desenvolvimento e manutenção do site intitucional da empresa, bem como desenvolvimento de Landing Pages e testes A/B.',
    stack: [
      'React.js',
      'TypeScript',
      'JavaScript',
      'HTML',
      'CSS',
      'Styled-components',
      'AWS',
      'SEO',
    ],
  },
  {
    company: 'Hospital Moinhos de Vento',
    role: 'Desenvolvedor Front-End',
    description:
      'Atuei como Desenvolvedor Frontend no projeto PROADI - Educação, Pesquisa e Responsabilidade Social do Hospital Moinhos de Vento. Responsável por propor e implementar identidades visuais e padrões de design para criação e manutenção de sites, recursos educacionais, sistemas e aplicações, bem como acompanhar o desenvolvimento de projetos e fazer a interface com fornecedores, garantindo os prazos, qualidade e custos.',
    stack: ['JavaScript', 'HTML', 'CSS'],
  },
  {
    company: 'Cell in Case',
    role: 'Cofundador',
    description:
      'Como pequeno empreeendedor tinha várias funções na empresa como, atender clientes, fornecedores e parceiros. Era responsável pelo Marketing, site e redes sociais da empresa. Atuei como Desenvolvedor Frontend desenvolvendo e dando manutenção no site da empresa. Atuei como Designer Gráfico onde fui responsável pelo desenvolvimento da marca e criação de peças para campanhas de marketing online e off-line.',
    stack: ['JavaScript', 'HTML', 'CSS'],
  },
  {
    company: 'Santa Casa de Misericórdia de Porto Alegre',
    role: 'Analista de Desenvolvimento Web',
    description:
      'Atuei como Analista de Desenvolvimento Web no Centro Histórico-Cultural e no Marketing da Santa Casa de Porto Alegre apoiando historiadores e equipes de marketing na criação de campanhas e eventos da instituição. Fui responsável pelo desenvolvimento e manutenção de sites, landing pages e intranet da empresa. Também atuei como designer gráfico diagramando banners, livros e peças publicitárias para redes sociais.',
    stack: ['JavaScript', 'HTML', 'CSS', 'PHP', 'SEO'],
  },
  {
    company: 'Santa Casa de Misericórdia de Porto Alegre',
    role: 'Técnico em Informática',
    description:
      'Autei como Técnico em Informática atendendo aos chamados abertos pelos usuários/colaboradores da empresa. Responsável por realizar ações de manutenção preventiva, instalação de impressoras, realizar análises de viabilidade de melhorias, upgrades de hardware e aquisições de novos equipamentos.',
    stack: [
      'Solução de Problemas Técnicos',
      'Manutenção de Computadores',
      'Suporte ao Usuário',
      'Manutenção Preventiva',
    ],
  },
]
