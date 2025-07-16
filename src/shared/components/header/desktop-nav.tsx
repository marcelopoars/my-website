import Link from 'next/link'
import { ThemeToggle } from '../theme'
import { Button } from '../ui'

import type { NavLink } from './nav-link.types'

interface DesktopNavProps {
  navLinks: NavLink[]
}

export function DesktopNav({ navLinks }: DesktopNavProps) {
  return (
    <nav
      className="hidden md:flex items-center justify-end gap-4 font-mono font-semibold flex-1"
      aria-label="Navegação principal"
    >
      {navLinks.map((link) => (
        <Button asChild variant="link" key={link.href}>
          <Link href={link.href}>{link.label}</Link>
        </Button>
      ))}
      <Button variant="secondary" className="hidden md:block" asChild>
        <a
          href="https://api.whatsapp.com/send?phone=5551981838118&text=Ol%C3%A1!"
          target="_blank"
          rel="noopener noreferrer"
        >
          contato
        </a>
      </Button>
      <ThemeToggle />
    </nav>
  )
}
