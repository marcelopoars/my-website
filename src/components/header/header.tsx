'use client'

import {
  Button,
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  ThemeToggle,
} from '@/components'
import { IconMenuDeep } from '@tabler/icons-react'
import Link from 'next/link'
import { LogoMarceloPereira } from '../logos'
import { useState } from 'react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header>
      <div className="container flex items-center justify-between pt-12 lg:pt-20">
        <div className="flex-1">
          <LogoMarceloPereira />
        </div>

        <nav className="hidden flex-1 md:block">
          <Button asChild variant={'link'}>
            <Link href="/">home</Link>
          </Button>

          <Button asChild variant={'link'}>
            <Link href="/o-marcelo">o Marcelo</Link>
          </Button>
        </nav>

        <div className="flex-1 flex items-center justify-end gap-4 font-mono font-semibold">
          <Button variant={'secondary'} className="hidden md:block" asChild>
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

        {/* MENU MOBILE */}
        <nav className="md:hidden flex ml-3">
          <Sheet open={true} onOpenChange={setIsOpen}>
            <SheetTrigger className="p-2">
              <IconMenuDeep />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="text-left">Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col justify-between py-8 space-y-3 h-full">
                <div className="flex flex-col space-y-3 text-left">
                  <Button
                    asChild
                    variant={'link'}
                    onClick={() => setIsOpen(false)}
                    className="justify-start pl-0"
                  >
                    <Link href="/">home</Link>
                  </Button>

                  <Button
                    asChild
                    variant={'link'}
                    onClick={() => setIsOpen(false)}
                    className="justify-start pl-0"
                  >
                    <Link href="/o-marcelo">o Marcelo</Link>
                  </Button>
                </div>

                <Button variant={'secondary'} className="w-full" asChild>
                  <a
                    href="https://api.whatsapp.com/send?phone=5551981838118&text=Ol%C3%A1!"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    contato
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  )
}
