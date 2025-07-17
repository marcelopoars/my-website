'use client'

import { DesktopIcon, MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Button } from '../ui'

const themes = [
  {
    key: 'light',
    label: 'Tema claro',
    icon: SunIcon,
  },
  {
    key: 'dark',
    label: 'Tema escuro',
    icon: MoonIcon,
  },
  {
    key: 'system',
    label: 'Tema do sistema',
    icon: DesktopIcon,
  },
]

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <div
      className="w-auto flex items-center justify-center rounded-md border border-input bg-background p-1"
      role="group"
      aria-label="Alternar tema"
    >
      {themes.map(({ key, label, icon: Icon }) => {
        const isActive = isMounted && theme === key
        return (
          <Button
            key={key}
            className="size-7 transition-all duration-200"
            variant={isActive ? 'default' : 'ghost'}
            size="icon"
            onClick={() => setTheme(key)}
            title={label}
            aria-label={label}
            aria-pressed={isActive}
            disabled={!isMounted}
          >
            <Icon className="size-4" />
          </Button>
        )
      })}
    </div>
  )
}
