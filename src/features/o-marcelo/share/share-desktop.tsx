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
  text?: string
}

export function ShareDesktop({
  canonicalUrl,
  titleSite,
  text,
}: ShareDesktopProps) {
  const whatsAppUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent((text ?? titleSite) + ' ' + canonicalUrl)}`
  const linkedinShareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(canonicalUrl)}&title=${encodeURIComponent(titleSite)}${text ? `&summary=${encodeURIComponent(text)}` : ''}`
  const facebookURL = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(canonicalUrl)}` // Facebook ignora o parâmetro t
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text ?? titleSite)}&url=${encodeURIComponent(canonicalUrl)}`

  return (
    <nav className="hidden lg:flex items-center gap-1">
      <h2 className="sr-only">Compartilhar esta página</h2>
      <span className="text-muted-foreground">Compartilhar:</span>
      <ul className="flex items-center" role="list">
        <li role="listitem">
          <ShareLink
            href={linkedinShareUrl}
            title="Compartilhar no LinkedIn"
            aria-label="Compartilhar no LinkedIn"
          >
            <IconBrandLinkedin aria-hidden="true" focusable="false" />
          </ShareLink>
        </li>
        <li role="listitem">
          <ShareLink
            href={whatsAppUrl}
            title="Compartilhar no WhatsApp"
            aria-label="Compartilhar no WhatsApp"
          >
            <IconBrandWhatsapp aria-hidden="true" focusable="false" />
          </ShareLink>
        </li>
        <li role="listitem">
          <ShareLink
            href={facebookURL}
            title="Compartilhar no Facebook"
            aria-label="Compartilhar no Facebook"
          >
            <IconBrandFacebook aria-hidden="true" focusable="false" />
          </ShareLink>
        </li>
        <li role="listitem">
          <ShareLink
            href={twitterUrl}
            title="Compartilhar no X"
            aria-label="Compartilhar no X"
          >
            <IconBrandX aria-hidden="true" focusable="false" />
          </ShareLink>
        </li>
        <li role="listitem">
          <ShareButton
            canonicalUrl={canonicalUrl}
            titleSite={titleSite}
            text={text}
          />
        </li>
      </ul>
    </nav>
  )
}
