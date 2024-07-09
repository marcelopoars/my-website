'use client'

import { IconBrandFacebook, IconBrandX, IconShare3 } from '@tabler/icons-react'
import { Button } from '../ui'

export async function Share() {
  const canonicalUrl = 'https://www.marcelopereira.dev/'
  const title = 'Marcelo Pereira | Desenvolvedor Frontend'

  const facebookURL = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(canonicalUrl)}&t=${encodeURIComponent(title)}`

  const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(canonicalUrl)}&text=${encodeURIComponent(title)}`

  const shareData = {
    url: canonicalUrl,
    title,
  }

  const handleShare = async () => {
    if (navigator.canShare(shareData)) {
      try {
        navigator.share(shareData)
        console.log('Post shared successfully')
      } catch (error) {
        console.error('Error sharing the post:', error)
      }
    }
  }

  return (
    <>
      <div className="flex items-center gap-2 mt-4 lg:hidden">
        Compartilhar
        <Button variant={'outline'} size={'icon'} onClick={handleShare}>
          <IconShare3 />
        </Button>
      </div>

      <div className="hidden lg:flex items-center gap-1 lg:mt-4">
        <span className="text-muted-foreground">Compartilhar no:</span>
        <ul className="flex">
          <li>
            <a
              className="inline-block p-1 hover:text-primary transition"
              href={facebookURL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Compartilhar no Facebook"
            >
              <IconBrandFacebook />
            </a>
          </li>
          <li>
            <a
              className="inline-block p-1 hover:text-primary transition"
              href={twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Compartilhar no X"
            >
              <IconBrandX />
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}
