import { ArrowRightIcon } from '@radix-ui/react-icons'
import Image from 'next/image'

import { Button } from '../ui'

import laptopImage from '@assets/laptop-image.png'

export function ContactBanner() {
  return (
    <section
      className="bg-primary mt-10 mb-10 md:mt-14 md:mb-20 xl:mt-24 xl:mb-28"
      aria-labelledby="contact-banner-heading"
    >
      <div className="relative container py-10 pb-44 md:py-10 lg:py-20">
        <div>
          <h2
            className="text-white text-4xl md:text-4xl lg:text-6xl xl:text-7xl mb-8"
            id="contact-banner-heading"
          >
            <span className="block">Vamos dar o play</span> no seu projeto?
          </h2>
          <Button variant={'black'} asChild>
            <a
              href="https://api.whatsapp.com/send?phone=5551981838118&text=Ol%C3%A1!"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Fale comigo no WhatsApp"
            >
              Fale comigo no WhatsApp <ArrowRightIcon className="size-6" />
            </a>
          </Button>
        </div>

        <Image
          className="absolute left-1/2 translate-x-[-50%] w-[340px] -bottom-16 md:w-[420px] md:-bottom-20 md:right-0 md:left-auto md:translate-x-0 lg:w-[574px] lg:-bottom-24 xl:w-[660px] xl:-bottom-32 xl:-right-5"
          src={laptopImage}
          width={678}
          height={449}
          quality={100}
          alt=""
          aria-hidden="true"
        />
      </div>
    </section>
  )
}
