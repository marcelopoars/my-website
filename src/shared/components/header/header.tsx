'use client'

import { IconMenuDeep } from '@tabler/icons-react'
import Link from 'next/link'
import { LogoMarceloPereira } from '../logos'
import { useState } from 'react'
import {
  Button,
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui'
import { ThemeToggle } from '../theme'
const navLinks = [
  { label: 'home', href: '/' },
  { label: 'o Marcelo', href: '/o-marcelo' },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header>
      <div className="container pt-12 lg:pt-20">
        <div className="flex items-center justify-between w-full">
          <div className="flex-1 min-w-0">
            <LogoMarceloPereira />
          </div>

          {/* Desktop Navigation */}
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

          {/* Mobile Navigation */}
          <nav className="flex md:hidden ml-3">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger
                className="p-2"
                aria-label="Abrir menu de navegação"
              >
                <IconMenuDeep />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle className="text-left">Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col justify-between py-8 gap-3 h-full">
                  <div className="flex flex-col gap-3 text-left">
                    {navLinks.map((link) => (
                      <Button
                        asChild
                        variant="link"
                        onClick={() => setIsOpen(false)}
                        className="justify-start pl-0"
                        key={link.href}
                      >
                        <Link href={link.href}>{link.label}</Link>
                      </Button>
                    ))}
                  </div>
                  <div className="flex flex-col gap-3 mt-4">
                    <div className="flex items-center gap-2">
                      <ThemeToggle />
                      <span className="text-sm text-muted-foreground">
                        Alternar tema
                      </span>
                    </div>
                    <Button variant="secondary" className="w-full" asChild>
                      <a
                        href="https://api.whatsapp.com/send?phone=5551981838118&text=Ol%C3%A1!"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        contato
                      </a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </nav>
        </div>
      </div>
    </header>
  )
}
