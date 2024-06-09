import Image from 'next/image'
import Link from 'next/link'

export function LogoMarceloPereira() {
  return (
    <Link href="/">
      <Image
        className="hidden dark:block w-[120px] md:w-[140px] lg:w-[198px]"
        src="/logos/logo-marcelo-pereira-frontend-developer-dark.svg"
        alt="Logo Marcelo Pereira Desenvolvedor Frontend"
        width={196}
        height={49}
        quality={100}
        priority
      />
      <Image
        className="block dark:hidden w-[120px] md:w-[140px] lg:w-[198px]"
        src="/logos/logo-marcelo-pereira-frontend-developer-light.svg"
        alt="Logo Marcelo Pereira Desenvolvedor Frontend"
        width={196}
        height={49}
        quality={100}
        priority
      />
    </Link>
  )
}
