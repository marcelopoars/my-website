'use client'

import { IconShare3 } from '@tabler/icons-react'

interface ShareButtonProps {
  canonicalUrl: string
  titleSite: string
}

export function ShareButton({ canonicalUrl, titleSite }: ShareButtonProps) {
  const shareData = {
    url: canonicalUrl,
    title: titleSite,
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

  return (
    <button className="p-1 hover:text-primary transition" onClick={handleShare}>
      <IconShare3 />
    </button>
  )
}
