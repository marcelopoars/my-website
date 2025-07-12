import { Share } from '@shared/components'
import { Fragment } from 'react'

const tools = [
  'React.js',
  'Next.js',
  'TypeScript',
  'JavaScript',
  'HTML',
  'CSS',
  'Styled-components',
  'Tailwind CSS',
  'Shadcn UI',
  'React Hook Form',
  'Zod',
  'Jest',
  'React Testing Library',
  'Axios',
  'SonarQube',
  'Aqua Enterprise',
  'Azure',
  'AWS',
]

export function AboutMe() {
  return (
    <section>
      <div className="container">
        <hr className="bg-foreground/10 h-px" />

        <div className="flex justify-end mt-4">
          <Share />
        </div>

        <div className="flex flex-col gap-6 pt-8 md:flex-row md:items-start md:gap-28 lg:pt-20 lg:gap-0">
          <div className="lg:sticky lg:top-12">
            <h2 className="text-primary text-xl whitespace-nowrap font-medium lg:min-w-[420px] lg:text-2xl">
              Quem sou eu?
            </h2>
          </div>

          <div className="max-w-[645px] space-y-6 lg:text-3xl lg:leading-normal lg:space-y-12">
            <p>
              Gaúcho natural da cidade de Camaquã, atualmente morando em Porto
              Alegre-RS.
            </p>
            <p>
              Desenvolvedor Frontend apaixonado por criar interfaces web
              incríveis e acessíveis. Entusiasta de SEO, acessibilidade e
              inteligência artificial. Minha missão é contribuir para uma web
              mais inclusiva e semântica, garantindo que todas as pessoas tenham
              acesso a uma experiência digital excepcional.
            </p>
            <p>
              Profissional com muita experiência em desenvolvimento de
              interfaces web utilizando tecnologias como{' '}
              {tools.map((tool) => (
                <Fragment key={tool}>
                  <span className="text-primary font-medium">{tool}</span>,{' '}
                </Fragment>
              ))}
              entre outras.
            </p>
            <p>
              Estou constantemente buscando aprimorar meus conhecimentos e
              habilidades, tanto através do aprendizado contínuo quanto
              compartilhando meu conhecimento com a comunidade.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
