import Image from 'next/image'

interface ProjectCardProps {
  name: string
  projectType: string
  thumb: string
  githubLink: string
  previewLink: string
  stack: string[]
}

export function ProjectCard({
  name,
  thumb,
  projectType,
  previewLink,
  githubLink,
}: ProjectCardProps) {
  return (
    <article className="group">
      <header className="mb-4">
        <Image
          className="dark:opacity-85 dark:border dark:border-muted-foreground/30 group-hover:opacity-100 group-hover:shadow-[6px_6px_0px_0px_rgba(116,70,254,1)] group-hover:scale-105 transition"
          src={thumb}
          width={1366}
          height={7680}
          quality={100}
          alt="Screenshot da aplicação"
        />

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
              className="text-muted-foreground hover:text-foreground/80 hover:underline underline-offset-4"
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          )}
        </aside>
      </footer>
    </article>
  )
}
