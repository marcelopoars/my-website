import { LogoMarceloPereira } from '../logos'
import { DesktopNav } from './desktop-nav'
import { MobileNav } from './mobile-nav'

const navLinks = [
  { label: 'home', href: '/' },
  { label: 'o Marcelo', href: '/o-marcelo' },
]

export function Header() {
  return (
    <header>
      <div className="container pt-12 lg:pt-20">
        <div className="flex items-center justify-between w-full">
          <div className="flex-1 min-w-0">
            <LogoMarceloPereira />
          </div>
          <DesktopNav navLinks={navLinks} />
          <MobileNav navLinks={navLinks} />
        </div>
      </div>
    </header>
  )
}
