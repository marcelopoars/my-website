import Image from 'next/image'

import { IconExternalLink } from '@tabler/icons-react'
import { dicaDoNerdVideos } from '@lib/dica-do-nerd-videos'
import { LogoDicaDoNerdVertical } from '@shared/components/logos'

export function DicaDoNerd() {
  return (
    <section>
      <h2 className="sr-only">Dica do Nerd</h2>

      <div className="container pt-16 lg:pt-28">
        <hr className="bg-foreground/30 h-px" />

        <div className="lg:flex lg:justify-between items-start pt-20">
          <div className="mb-6 lg:mb-0">
            <LogoDicaDoNerdVertical />

            <div className="max-w-[815px] text-balance font-medium leading-normal pt-8 lg:text-2xl lg:pt-16">
              <p>
                Criei o canal <strong>Dica do Nerd</strong> com o objetivo de
                compartilhar dicas e boas práticas sobre o desenvolvimento
                frontend. O canal aborda temas como: HTML e sua semântica, CSS,
                animações CSS, JavaScript, performance, acessibilidade na web,
                entre outros temas relevantes ao mundo do desenvolvimento web.
              </p>
            </div>
          </div>

          <div className="lg:flex lg:items-end lg:h-[61px]">
            <a
              className="flex items-center gap-2 font-mono font-medium text-lg text-dica-do-nerd underline underline-offset-4 hover:text-muted-foreground"
              href="https://youtube.com/DicaDoNerd/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Acessar canal
              <IconExternalLink />
            </a>
          </div>
        </div>
      </div>

      <div className="container pt-8 lg:pt-16">
        <ul className="grid gap-6 lg:grid-cols-3">
          {dicaDoNerdVideos.map(({ title, thumb, link }) => (
            <li key={title}>
              <a
                className="group"
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                title={title}
              >
                <Image
                  className="group-hover:opacity-100 group-hover:scale-105 group-hover:shadow-[6px_6px_0px_0px_rgba(219,58,52,1)] transition"
                  src={thumb}
                  width={1280}
                  height={720}
                  quality={100}
                  alt={title}
                  placeholder="blur"
                />
                <h3 className="text-xl font-medium line-clamp-2 mt-6 group-hover:text-dica-do-nerd lg:mt-10 transition">
                  {title}
                </h3>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
