'use client'

import { usePopover } from './popover-context'

export function PopoverTrigger() {
  const { isOpen, togglePopover } = usePopover()

  return (
    <button
      onClick={togglePopover}
      className="px-4 py-2 bg-primary rounded disabled:opacity-75"
      disabled={isOpen}
    >
      Compartilhar
    </button>
  )
}
