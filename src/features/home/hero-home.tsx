import { HeroLinks } from './_components'

export function HeroHome() {
  return (
    <section
      className="pt-14 lg:pt-28"
      aria-label="Seção principal com apresentação de Marcelo Pereira"
    >
      <div className="container">
        <h1 className="block text-muted-foreground lg:text-3xl font-mono font-medium mb-2">
          desenvolvimento de software
        </h1>
        <p className="block text-[32px] leading-tight sm:leading-tight sm:text-6xl lg:text-[100px] lg:leading-tight mb-10">
          Tecnologia e expertise <br /> para seu projeto.
        </p>

        <HeroLinks />
      </div>
    </section>
  )
}
