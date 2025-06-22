import {
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconBrandX,
} from '@tabler/icons-react'
import { ShareButton } from './share-button'
import { ShareLink } from './share-link'

interface ShareDesktopProps {
  canonicalUrl: string
  titleSite: string
}

export function ShareDesktop({ canonicalUrl, titleSite }: ShareDesktopProps) {
  const whatsAppUrl = `https://api.whatsapp.com/send?text=${canonicalUrl}`
  const linkedinShareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${canonicalUrl}&title=${titleSite}`
  const facebookURL = `https://www.facebook.com/sharer/sharer.php?u=${canonicalUrl}&t=${titleSite}`
  const twitterUrl = `https://twitter.com/intent/tweet?url=${canonicalUrl}&text=${titleSite}`

  return (
    <div className="hidden lg:flex items-center gap-1">
      <span className="text-muted-foreground">Compartilhar:</span>
      <ul className="flex items-center">
        <li>
          <ShareLink
            href={linkedinShareUrl}
            title="Compartilhar no LinkedIn"
            aria-label="Compartilhar no LinkedIn"
          >
            <IconBrandLinkedin />
          </ShareLink>
        </li>
        <li>
          <ShareLink
            href={whatsAppUrl}
            title="Compartilhar no WhatsApp"
            aria-label="Compartilhar no WhatsApp"
          >
            <IconBrandWhatsapp />
          </ShareLink>
        </li>
        <li>
          <ShareLink
            href={facebookURL}
            title="Compartilhar no Facebook"
            aria-label="Compartilhar no Facebook"
          >
            <IconBrandFacebook />
          </ShareLink>
        </li>
        <li>
          <ShareLink
            href={twitterUrl}
            title="Compartilhar no X"
            aria-label="Compartilhar no X"
          >
            <IconBrandX />
          </ShareLink>
        </li>
        <li>
          <ShareButton canonicalUrl={canonicalUrl} titleSite={titleSite} />
        </li>
      </ul>
    </div>
  )
}
