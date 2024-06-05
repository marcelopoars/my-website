import { StyledComponentsIcon } from '@/components/icons'
import {
  IconBrandGatsby,
  IconBrandGithub,
  IconBrandJavascript,
  IconBrandNextjs,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandTypescript,
  IconBrandVite,
  IconWorldSearch,
} from '@tabler/icons-react'
import Image from 'next/image'

interface ProjectCardProps {
  name: string
  projectType: string
  thumb: string
  githubLink: string
  previewLink: string
  stack: string[]
}

const stackIconsMap: Record<string, JSX.Element> = {
  gatsbyjs: <IconBrandGatsby />,
  javascript: <IconBrandJavascript />,
  nextjs: <IconBrandNextjs />,
  reactjs: <IconBrandReact />,
  seo: <IconWorldSearch />,
  styledcomponents: <StyledComponentsIcon />,
  tailwindcss: <IconBrandTailwind />,
  typescript: <IconBrandTypescript />,
  vitejs: <IconBrandVite />,
}

export function ProjectCard({
  name,
  thumb,
  projectType,
  previewLink,
  githubLink,
  stack,
}: ProjectCardProps) {
  return (
    <article className="group">
      <header className="mb-4">
        <div className="relative">
          <Image
            className="dark:opacity-85 dark:border dark:border-muted-foreground/30 group-hover:opacity-100 group-hover:shadow-[6px_6px_0px_0px_rgba(116,70,254,1)] group-hover:scale-105 transition"
            src={thumb}
            width={1366}
            height={768}
            quality={100}
            alt="Screenshot da aplicação"
            placeholder="blur"
          />

          <ul className="absolute bottom-2 right-2 flex justify-end items-center gap-2">
            {stack.map((item) => (
              <li
                key={item}
                className="size-8 flex justify-center items-center bg-white text-[#1E1E1E] rounded-full"
              >
                {stackIconsMap[item] || null}
              </li>
            ))}
          </ul>
        </div>

        <h3 className="text-2xl mt-5">{name}</h3>
        <span className="block text-muted-foreground">{projectType}</span>
      </header>

      <footer>
        <aside className="flex justify-between font-mono font-medium">
          <a
            className="text-primary hover:text-foreground/80 hover:underline underline-offset-4"
            href={previewLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Acessar o site
          </a>

          {githubLink && (
            <a
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground/80 hover:underline underline-offset-4"
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconBrandGithub size={20} />
              Github
            </a>
          )}
        </aside>
      </footer>
    </article>
  )
}
