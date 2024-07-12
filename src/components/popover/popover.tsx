import { ReactNode } from 'react'
import { PopoverProvider } from './popover-context'

interface PopoverProps {
  children: ReactNode
}

export function Popover({ children }: PopoverProps) {
  return (
    <PopoverProvider>
      <div className="relative inline-block bg-red-950">{children}</div>
    </PopoverProvider>
  )
}
