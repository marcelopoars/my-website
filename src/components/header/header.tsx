import Image from 'next/image'
import Link from 'next/link'

import { Button, ThemeToggle } from '@/components'

export function Header() {
  return (
    <header>
      <div className="container flex items-center justify-between pt-20 pb-28">
        <Link href="/">
          <Image
            className="hidden dark:block"
            src="/logo-marcelo-pereira-frontend-developer-dark.svg"
            alt="Logo Marcelo Pereira"
            width={196}
            height={49}
            priority
          />
          <Image
            className="block dark:hidden"
            src="/logo-marcelo-pereira-frontend-developer-light.svg"
            alt="Logo Marcelo Pereira"
            width={196}
            height={49}
            priority
          />
        </Link>
        <div className="flex gap-4 font-mono font-semibold">
          <Button variant={'secondary'}>contato</Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
