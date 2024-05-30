import { Button, ThemeToggle } from '@/components'
import { LogoMarceloPereira } from '../logos'

export function Header() {
  return (
    <header>
      <div className="container flex items-center justify-between pt-12 pb-14 lg:pt-20 lg:pb-28">
        <LogoMarceloPereira />
        <div className="flex gap-4 font-mono font-semibold">
          <Button variant={'secondary'}>contato</Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
