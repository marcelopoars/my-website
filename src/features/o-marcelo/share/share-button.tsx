'use client'

import { IconShare3 } from '@tabler/icons-react'

interface ShareButtonProps {
  canonicalUrl: string
  titleSite: string
  text?: string
}

export function ShareButton({
  canonicalUrl,
  titleSite,
  text,
}: ShareButtonProps) {
  const shareData = {
    url: canonicalUrl,
    title: titleSite,
    text: text ?? undefined,
  }

  const handleShare = () => {
    if (navigator.canShare(shareData)) {
      try {
        navigator.share(shareData)
      } catch (error) {
        console.error('Error sharing the post:', error)
      }
    }
  }

  const isShareSupported = typeof navigator !== 'undefined' && !!navigator.share

  if (!isShareSupported) return null

  return (
    <button
      className="p-1 text-primary lg:hover:text-foreground transition"
      onClick={handleShare}
      title="Ver mais opções"
      aria-label="Compartilhar perfil do Marcelo Pereira"
    >
      <IconShare3 />
    </button>
  )
}
