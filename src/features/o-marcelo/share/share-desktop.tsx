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

  const shareOptions = [
    {
      href: linkedinShareUrl,
      title: 'Compartilhar no LinkedIn',
      ariaLabel: 'Compartilhar no LinkedIn',
      icon: <IconBrandLinkedin aria-hidden="true" focusable="false" />,
    },
    {
      href: whatsAppUrl,
      title: 'Compartilhar no WhatsApp',
      ariaLabel: 'Compartilhar no WhatsApp',
      icon: <IconBrandWhatsapp aria-hidden="true" focusable="false" />,
    },
    {
      href: facebookURL,
      title: 'Compartilhar no Facebook',
      ariaLabel: 'Compartilhar no Facebook',
      icon: <IconBrandFacebook aria-hidden="true" focusable="false" />,
    },
    {
      href: twitterUrl,
      title: 'Compartilhar no X',
      ariaLabel: 'Compartilhar no X',
      icon: <IconBrandX aria-hidden="true" focusable="false" />,
    },
  ]
  return (
    <nav className="hidden lg:flex items-center gap-1">
      <h2 className="sr-only">Compartilhar esta página</h2>

      <span className="text-muted-foreground">Compartilhar:</span>

      <ul className="flex items-center" role="list">
        {shareOptions.map((option) => (
          <li role="listitem" key={option.title}>
            <ShareLink
              href={option.href}
              title={option.title}
              aria-label={option.ariaLabel}
            >
              {option.icon}
            </ShareLink>
          </li>
        ))}
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
