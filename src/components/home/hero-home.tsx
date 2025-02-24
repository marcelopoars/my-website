import { HeroLinks } from './_components'

export function HeroHome() {
  return (
    <section className="pt-14 lg:pt-28">
      <div className="container">
        <h1>
          <span className="block text-muted-foreground lg:text-3xl font-mono font-medium mb-2">
            desenvolvimento de software
          </span>

          <span className="block text-[32px] leading-tight sm:leading-tight sm:text-6xl lg:text-[100px] lg:leading-tight mb-10">
            Tecnologia e expertise <br /> para seu projeto.
          </span>
        </h1>

        <HeroLinks />
      </div>
    </section>
  )
}
