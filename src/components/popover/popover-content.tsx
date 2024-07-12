'use client'

import { usePopover } from './popover-context'

export function PopoverContent() {
  const { isOpen, togglePopover, popoverRef } = usePopover()

  if (!isOpen) return null

  return (
    <div
      ref={popoverRef}
      className="absolute bottom-10 left-[50%] -translate-x-[50%] w-56 bg-slate-400 p-2"
    >
      <p>This is the content of the popover.</p>
      <button
        onClick={togglePopover}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
      >
        Fechar
      </button>
    </div>
  )
}
