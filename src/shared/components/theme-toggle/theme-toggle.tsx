'use client'

import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Button } from '../ui'

type ThemeToggleProps = {
  showLabelOnMobile?: boolean
}

export function ThemeToggle({ showLabelOnMobile = false }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => setIsMounted(true), [])

  const buttonProps = {
    className: 'transition-all duration-200',
    variant: 'ghost' as const,
    size: showLabelOnMobile ? ('default' as const) : ('icon' as const),
    'aria-label': 'Alternar tema',
  }

  if (!isMounted) {
    return (
      <Button {...buttonProps} disabled>
        <SunIcon className="size-5" />
      </Button>
    )
  }

  const nextTheme = theme === 'light' ? 'dark' : 'light'
  const ActiveIcon = theme === 'light' ? SunIcon : MoonIcon
  const label = theme === 'light' ? 'Tema claro' : 'Tema escuro'

  return (
    <Button
      {...buttonProps}
      onClick={() => setTheme(nextTheme)}
      title={label}
      aria-pressed={true}
    >
      <ActiveIcon className="size-5" />
      {showLabelOnMobile && (
        <span className="text-muted-foreground ml-2 md:hidden">
          Alternar tema
        </span>
      )}
    </Button>
  )
}
