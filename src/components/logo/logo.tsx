import Image from 'next/image'
import Link from 'next/link'

export function Logo() {
  return (
    <Link href="/">
      <Image
        className="hidden dark:block w-[107px] lg:w-[198px]"
        src="/logo-marcelo-pereira-frontend-developer-dark.svg"
        alt="Logo Marcelo Pereira"
        width={196}
        height={49}
        priority
      />
      <Image
        className="block dark:hidden w-[107px] lg:w-[198px]"
        src="/logo-marcelo-pereira-frontend-developer-light.svg"
        alt="Logo Marcelo Pereira"
        width={196}
        height={49}
        priority
      />
    </Link>
  )
}
