import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@ui/carousel'
import { CommentIcon } from './comment-icon'
import { commentsData } from './comments-data'

export function Comments() {
  return (
    <section
      className="pt-10 md:pt-20 lg:pt-28"
      aria-labelledby="section-testimonials"
    >
      <h2 id="section-testimonials" className="sr-only">
        Depoimentos de clientes
      </h2>

      <div className="container text-center bg-radial-gradient-top-to-bottom">
        <hr className="bg-foreground/10 h-px" />

        <Carousel
          className="pt-10 lg:pt-20"
          aria-label="Carrossel de depoimentos de clientes"
          aria-roledescription="carrossel"
        >
          <CarouselContent>
            {commentsData.map(({ client, content, role }) => (
              <CarouselItem key={client} className="flex flex-col items-center">
                <CommentIcon aria-hidden="true" />
                <blockquote className="select-none text-balance mt-10 mb-4 lg:max-w-[880px] lg:text-2xl lg:leading-normal">
                  <p>{content}</p>
                </blockquote>
                <footer className="text-base font-mono font-medium text-muted-foreground mb-10">
                  <cite className="not-italic block text-primary lg:inline">
                    {client}
                  </cite>{' '}
                  <span className="hidden lg:inline">|</span> {role}
                </footer>
                <CommentIcon className="rotate-180" aria-hidden="true" />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}
