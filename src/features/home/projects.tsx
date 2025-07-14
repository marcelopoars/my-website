import { lastProjects } from '@lib/my-rojects'
import { ProjectCard } from './_components'

export function Projects() {
  return (
    <section className="pt-12 md:pt-16 lg:pt-32">
      <div className="container">
        <h2 className="text-2xl font-mono font-medium mb-10 md:text-3xl md:text-center">
          Últimos Projetos
        </h2>

        <div className="grid gap-6 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
          {lastProjects.map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
