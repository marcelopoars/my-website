'use client'

import { DesktopIcon, MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Button } from '../ui'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <div
      className="w-auto flex items-center justify-center rounded-md border border-input bg-background p-1"
      role="group"
      aria-label="Alternar tema"
    >
      <Button
        variant={theme === 'light' ? 'default' : 'ghost'}
        size="icon"
        onClick={() => setTheme('light')}
        className="h-7 w-7 transition-all duration-200"
        title="Tema claro"
        aria-label="Tema claro"
        disabled={!isMounted}
      >
        <SunIcon className="h-4 w-4" />
      </Button>
      <Button
        variant={theme === 'dark' ? 'default' : 'ghost'}
        size="icon"
        onClick={() => setTheme('dark')}
        className="h-7 w-7 transition-all duration-200"
        title="Tema escuro"
        aria-label="Tema escuro"
        disabled={!isMounted}
      >
        <MoonIcon className="h-4 w-4" />
      </Button>
      <Button
        variant={theme === 'system' ? 'default' : 'ghost'}
        size="icon"
        onClick={() => setTheme('system')}
        className="h-7 w-7 transition-all duration-200"
        title="Tema do sistema"
        aria-label="Tema do sistema"
        disabled={!isMounted}
      >
        <DesktopIcon className="h-4 w-4" />
      </Button>
    </div>
  )
}
