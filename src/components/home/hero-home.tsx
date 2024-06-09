import { CurlyBracketsIcon, StackIcon } from '@/components'
import { HeroLinks } from './_components'

export function HeroHome() {
  return (
    <section className="pt-14 lg:pt-28">
      <div className="container">
        <span className="block text-muted-foreground lg:text-3xl font-mono font-medium mb-2">
          desenvolvimento & educação
        </span>

        <h1 className="text-[32px] leading-tight sm:leading-tight sm:text-6xl lg:text-[100px] lg:leading-tight mb-10">
          Tecnologia e expertise <br /> para seu{' '}
          <span className="relative">
            projeto
            <div className="flex absolute -bottom-1 -right-[86px] sm:bottom-4 sm:-right-[130px] lg:-right-[260px]">
              <div className="size-10 sm:size-14 lg:size-28 flex items-center justify-center bg-primary text-primary-foreground rounded-full">
                <StackIcon className="size-3 sm:size-5 lg:size-auto" />
              </div>
              <div className="size-10 sm:size-14 lg:size-28 flex items-center justify-center bg-dica-do-nerd text-dica-do-nerd-foreground rounded-full -ml-2 lg:-ml-5">
                <CurlyBracketsIcon className="size-3 sm:size-5 lg:size-auto" />
              </div>
            </div>
          </span>
        </h1>

        <HeroLinks />
      </div>
    </section>
  )
}
