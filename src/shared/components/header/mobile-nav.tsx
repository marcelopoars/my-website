'use client'

import { IconMenuDeep } from '@tabler/icons-react'
import Link from 'next/link'
import { useState } from 'react'
import { ThemeToggle } from '../theme-toggle'
import {
  Button,
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui'

import type { NavLink } from './nav-link.types'

interface MobileNavProps {
  navLinks: NavLink[]
}

export function MobileNav({ navLinks }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="flex md:hidden ml-3">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger className="p-2" aria-label="Abrir menu de navegação">
          <IconMenuDeep size={24} className="-mr-3" />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="text-left">Menu</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col justify-between px-4 py-8 gap-3 h-full">
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
            <div className="flex flex-col gap-6 mt-4 items-center">
              <ThemeToggle showLabelOnMobile />
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
  )
}
