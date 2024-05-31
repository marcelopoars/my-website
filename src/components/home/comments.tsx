import { comments } from '@/lib'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui'
import { CommentIcon } from './_components'

export function Comments() {
  return (
    <section className="lg:pt-28">
      <div className="container text-center bg-radial-gradient">
        <hr className="bg-foreground/30 h-px" />
        <Carousel className="pt-20">
          <CarouselContent>
            {comments.map(({ client, content, role }) => (
              <CarouselItem key={client} className="flex flex-col items-center">
                <CommentIcon />
                <p className="text-balance mt-10 mb-4 lg:max-w-[880px] lg:text-2xl lg:leading-normal">
                  {content}
                </p>
                <span className="font-mono font-medium text-muted-foreground mb-10">
                  <span className="text-primary">{client}</span> | {role}
                </span>
                <CommentIcon className="rotate-180" />
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
