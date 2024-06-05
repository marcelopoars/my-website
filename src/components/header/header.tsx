import { Button, ThemeToggle } from '@/components'
import { LogoMarceloPereira } from '../logos'

export function Header() {
  return (
    <header>
      <div className="container flex items-center justify-between pt-12 pb-14 lg:pt-20 lg:pb-28">
        <LogoMarceloPereira />
        <div className="flex items-center gap-4 font-mono font-semibold">
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
