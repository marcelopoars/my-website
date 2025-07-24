import { stackInfoMap } from './stack-info'
import { IconBrandGithub } from '@tabler/icons-react'
import Image, { StaticImageData } from 'next/image'

interface ProjectCardProps {
  name: string
  projectType: string
  screenshot: StaticImageData
  githubLink: string
  previewLink: string
  stack: string[]
}

export function ProjectCard({
  name,
  screenshot,
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
            className="dark:border dark:border-muted-foreground/30 group-hover:opacity-100 group-hover:shadow-[6px_6px_0px_0px_rgba(116,70,254,1)] group-hover:scale-105 transition"
            src={screenshot}
            width={1366}
            height={768}
            quality={100}
            alt={`Screenshot do projeto ${name}`}
            aria-describedby={`project-type-${name}`}
            placeholder="blur"
            loading="lazy"
          />

          <ul className="absolute bottom-2 right-2 flex justify-end items-center gap-2">
            {stack
              .filter((item) => !!stackInfoMap[item])
              .map((item) => (
                <li
                  key={item}
                  className="size-8 flex justify-center items-center bg-white text-[#1E1E1E] rounded-full"
                  aria-label={`Tecnologia ${stackInfoMap[item].label}`}
                  title={stackInfoMap[item].label}
                >
                  {stackInfoMap[item].icon}
                </li>
              ))}
          </ul>
        </div>

        <h3 className="text-xl mt-5 lg:text-2xl">{name}</h3>
        <p className="block text-muted-foreground" id={`project-type-${name}`}>
          {projectType}
        </p>
      </header>

      <footer className="flex justify-between font-mono font-medium">
        <a
          className="text-primary-light hover:text-foreground/80 hover:underline underline-offset-4"
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
      </footer>
    </article>
  )
}
