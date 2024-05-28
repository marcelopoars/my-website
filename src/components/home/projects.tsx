import { lastProjects } from '@/lib'
import { ProjectCard } from './_components'

export function Projects() {
  return (
    <section className="pt-32">
      <div className="container">
        <h2 className="text-3xl text-center font-mono font-medium mb-10">
          Projetos
        </h2>

        <div className="grid  gap-8 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
          {lastProjects.map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
