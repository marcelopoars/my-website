'use client'

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
  useRef,
} from 'react'

interface PopoverContextProps {
  isOpen: boolean
  togglePopover: () => void
  popoverRef: React.RefObject<HTMLDivElement>
}

const PopoverContext = createContext<PopoverContextProps | undefined>(undefined)

interface PopoverProviderProps {
  children: ReactNode
}

const PopoverProvider: React.FC<PopoverProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const popoverRef = useRef<HTMLDivElement>(null)

  const togglePopover = () => {
    setIsOpen((state) => !state)
  }

  const closePopoverOnEsc = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsOpen(false)
    }
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (
      popoverRef.current &&
      !popoverRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', closePopoverOnEsc)
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      window.removeEventListener('keydown', closePopoverOnEsc)
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      window.removeEventListener('keydown', closePopoverOnEsc)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  return (
    <PopoverContext.Provider value={{ isOpen, togglePopover, popoverRef }}>
      {children}
    </PopoverContext.Provider>
  )
}

const usePopover = () => {
  const context = useContext(PopoverContext)
  if (!context) {
    throw new Error('usePopover must be used within a PopoverProvider')
  }
  return context
}

export { PopoverProvider, usePopover }
