import { Fragment } from 'react'
import { Share } from '../share'

const tools = [
  'React.js',
  'Next.js',
  'TypeScript',
  'JavaScript',
  'CSS',
  'HTML',
  'Tailwind CSS',
  'Shadcn UI',
  'React Hook Form',
  'Zod',
  'Jest',
  'React Testing Library',
  'SEO',
  'Acessibilidade',
]

const canonicalUrl = 'https://www.marcelopereira.com.br/'
const titleSite = 'Marcelo Pereira | Tecnologia e Expertise para seu Projeto'

export function AboutMe() {
  return (
    <section>
      <div className="container">
        <hr className="bg-foreground/10 h-px" />

        <div className="flex justify-end mt-4">
          <Share
            canonicalUrl={canonicalUrl}
            titleSite={titleSite}
            text="Desenvolvedor Front-end Sênior com mais de 10 anos de experiência na criação de interfaces web escaláveis, responsivas, acessíveis e de alta performance."
          />
        </div>

        <div className="flex flex-col gap-6 pt-8 md:flex-row md:items-start md:gap-28 lg:pt-20 lg:gap-0">
          <div className="lg:sticky lg:top-12">
            <h2 className="text-primary text-xl whitespace-nowrap font-medium lg:min-w-[420px] lg:text-2xl">
              Quem sou eu?
            </h2>
          </div>

          <div className="max-w-[645px] space-y-6 lg:text-3xl lg:leading-normal lg:space-y-12">
            <p>
              Desenvolvedor Front-end Sênior com mais de 10 anos de experiência
              na criação de interfaces web escaláveis, responsivas, acessíveis e
              de alta performance. Especialista em{' '}
              {tools.map((tool) => (
                <Fragment key={tool}>
                  <span className="text-primary font-medium">{tool}</span>,{' '}
                </Fragment>
              ))}
              entre outras.
            </p>
            <p>
              Atuei em projetos de grande porte para empresas como Grupo RBS,
              DBC Company (Santander), Axur, Hospital Moinhos de Vento e Santa
              Casa de Porto Alegre, contribuindo para sistemas educacionais,
              plataformas corporativas e SaaS. Sou comprometido com código
              limpo, colaboração em times ágeis (Scrum/Kanban) e aprendizado
              contínuo, buscando sempre entregar valor real ao produto e ao
              usuário final.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
