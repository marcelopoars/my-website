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

  // Falback para evitar layout shift
  if (!isMounted) {
    return (
      <Button
        className=" transition-all duration-200"
        variant="default"
        size="icon"
        disabled
        aria-label="Alternar tema"
      >
        <SunIcon className="size-5" />
      </Button>
    )
  }

  const nextTheme = theme === 'light' ? 'dark' : 'light'
  const ActiveIcon = theme === 'light' ? SunIcon : MoonIcon
  const label = theme === 'light' ? 'Tema claro' : 'Tema escuro'

  return (
    <Button
      className=" transition-all duration-200"
      variant="ghost"
      size="icon"
      onClick={() => setTheme(nextTheme)}
      title={label}
      aria-label={label}
      aria-pressed={true}
    >
      <ActiveIcon className="size-5" />
    </Button>
  )
}
