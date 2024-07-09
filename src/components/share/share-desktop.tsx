import {
  IconBrandFacebook,
  IconBrandWhatsapp,
  IconBrandX,
} from '@tabler/icons-react'
import { ShareButton } from './share-button'

interface ShareDesktopProps {
  canonicalUrl: string
  titleSite: string
}

export function ShareDesktop({ canonicalUrl, titleSite }: ShareDesktopProps) {
  const facebookURL = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(canonicalUrl)}&t=${encodeURIComponent(titleSite)}`
  const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(canonicalUrl)}&text=${encodeURIComponent(titleSite)}`
  const whatsAppUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(canonicalUrl)}`

  return (
    <div className="hidden lg:flex items-center gap-1 lg:mt-4">
      <span className="text-muted-foreground">Compartilhar:</span>
      <ul className="flex items-center">
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
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Compartilhar no WhatsApp"
          >
            <IconBrandWhatsapp />
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
        <li>
          <ShareButton canonicalUrl={canonicalUrl} titleSite={titleSite} />
        </li>
      </ul>
    </div>
  )
}
