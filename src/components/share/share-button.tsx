'use client'

import { IconShare3 } from '@tabler/icons-react'
import { Button } from '../ui'

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
    <Button
      className="gap-2"
      variant={'outline'}
      size={'icon'}
      onClick={handleShare}
    >
      <IconShare3 />
    </Button>
  )
}
