import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@shared/components'
import { experiencesData } from './experiences-data'

export function Experiences() {
  return (
    <section className="relative pt-28 overflow-hidden">
      <div className="absolute top-0 bottom-0 z-10 w-[calc((100vw-1440px+24px)/2)] bg-gradient-to-r from-background to-background/0" />
      <div className="absolute top-0 bottom-0 right-0 z-10 w-[calc((100vw-1440px+24px)/2)] bg-gradient-to-l from-background/100 to-background/0" />

      <div className="container">
        <h2 className="text-2xl font-mono font-medium mb-10">
          Minha experiência profissional
        </h2>
      </div>

      <Carousel className="pl-6 lg:pl-0">
        <CarouselContent className="xl:ml-[calc((100vw-1440px+32px)/2)] pt-2">
          {experiencesData.map(({ company, role, description, stack }) => (
            <CarouselItem
              key={`${company}-${role}`}
              className="relative max-w-[80vw] text-pretty ml-0 pt-10 border-t select-none md:max-w-[420px] lg:pl-0"
            >
              <div className="absolute -top-2 l-0 size-4 bg-primary rounded-full" />

              <header className="mb-4">
                <h3 className="text-2xl font-medium mb-2">{company}</h3>
                <strong className="block text-primary font-mono font-medium">
                  {role}
                </strong>
              </header>

              <div className="md:pr-10">
                <p className="mb-6 leading-normal lg:text-xl">{description}</p>

                <ul className="flex flex-wrap gap-2">
                  {stack.map((item) => (
                    <li key={item}>
                      <span className="inline-block text-sm font-mono font-medium border border-muted-foreground/40 py-1.5 px-4 rounded-full">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="hidden -top-10 z-20 left-[calc((100vw+1040px)/2)] lg:flex" />
        <CarouselNext className="hidden -top-10 right-[calc((100vw-1440px)/2)] lg:flex" />
      </Carousel>
    </section>
  )
}
