import marceloImage from '@/assets/foto-marcelo-peraira-frontend-developer.png'
import Image from 'next/image'

export function HeroMarcelo() {
  return (
    <section className="pt-10 lg:pt-14">
      <div className="container flex items-center gap-6 lg:items-start lg:gap-24 lg:pl-28 bg-radial-gradient-bottom-to-top">
        <Image
          className="w-[150px] md:w-[250px] lg:w-[324px] brightness-110"
          src={marceloImage}
          alt="Fot Marcelo Pereira Desenvolvedor Frontend"
          width={324}
          quality={100}
          priority
        />

        <div className="lg:pt-14">
          <h1 className="leading-tight text-3xl mb-3 md:text-6xl md:leading-[1.1] lg:text-[80px] lg:leading-[1.1] lg:mb-4">
            Olá, eu sou
            <br />o Marcelo,
          </h1>
          <span className="text-muted-foreground font-mono md:text-xl lg:text-2xl">
            Muito prazer!
          </span>
        </div>
      </div>
    </section>
  )
}
