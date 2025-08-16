'use client'

import { useCarousel } from '@shared/components'
import { useEffect, useState } from 'react'

export function CarouselBullets() {
  const { api } = useCarousel()
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [slideCount, setSlideCount] = useState(0)

  useEffect(() => {
    if (!api) return
    setSlideCount(api.slideNodes().length)
    setSelectedIndex(api.selectedScrollSnap())
    const onSelect = () => setSelectedIndex(api.selectedScrollSnap())
    const onReInit = () => setSlideCount(api.slideNodes().length)
    api.on('select', onSelect)
    api.on('reInit', onReInit)
    return () => {
      api.off('select', onSelect)
      api.off('reInit', onReInit)
    }
  }, [api])

  if (slideCount <= 1) return null

  return (
    <div className="flex justify-center gap-2 mt-10">
      {Array.from({ length: slideCount }).map((_, idx) => (
        <button
          key={idx}
          className={
            idx === selectedIndex
              ? 'size-2 rounded-full bg-primary transition-all'
              : 'size-2 rounded-full bg-muted-foreground/20 transition-all'
          }
          aria-label={`Ir para o slide ${idx + 1}`}
          onClick={() => api?.scrollTo(idx)}
        />
      ))}
    </div>
  )
}
