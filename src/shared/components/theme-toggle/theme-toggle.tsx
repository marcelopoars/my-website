'use client'

import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Button } from '../ui'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Enquanto não está montado, mostra o ícone do Sol e desabilita o botão
  if (!isMounted) {
    return (
      <div
        className="w-auto flex items-center justify-center"
        role="group"
        aria-label="Alternar tema"
      >
        <Button
          className="size-7 transition-all duration-200"
          variant="default"
          size="icon"
          disabled
          aria-label="Alternar tema"
        >
          <SunIcon className="size-4" />
        </Button>
      </div>
    )
  }

  const nextTheme = theme === 'light' ? 'dark' : 'light'
  const ActiveIcon = theme === 'light' ? SunIcon : MoonIcon
  const label = theme === 'light' ? 'Tema claro' : 'Tema escuro'

  return (
    <div
      className="w-auto flex items-center justify-center"
      role="group"
      aria-label="Alternar tema"
    >
      <Button
        className="size-7 transition-all duration-200"
        variant="default"
        size="icon"
        onClick={() => setTheme(nextTheme)}
        title={label}
        aria-label={label}
        aria-pressed={true}
      >
        <ActiveIcon className="size-4" />
      </Button>
    </div>
  )
}
