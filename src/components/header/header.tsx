import { Button, ThemeToggle } from '@/components'
import { LogoMarceloPereira } from '../logos'
import Link from 'next/link'

export function Header() {
  return (
    <header>
      <div className="container flex items-center justify-between pt-12 lg:pt-20">
        <div className="flex-1">
          <LogoMarceloPereira />
        </div>

        <nav className="hidden flex-1 lg:block">
          <Button asChild variant={'link'}>
            <Link href="/">home</Link>
          </Button>

          <Button asChild variant={'link'}>
            <Link href="/o-marcelo">o Marcelo</Link>
          </Button>
        </nav>

        <div className="flex-1 flex items-center justify-end gap-4 font-mono font-semibold">
          <Button variant={'secondary'} asChild>
            <a
              href="https://api.whatsapp.com/send?phone=5551981838118&text=Ol%C3%A1!"
              target="_blank"
              rel="noopener noreferrer"
            >
              contato
            </a>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
