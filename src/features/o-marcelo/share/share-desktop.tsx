import { socialNetworks } from '@utils/social-networks'
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
  const shareOptions = socialNetworks.map((network) => ({
    href: network.getUrl({ canonicalUrl, titleSite, text }),
    title: `Compartilhar no ${network.name}`,
    ariaLabel: `Compartilhar no ${network.name}`,
    icon: network.icon,
  }))
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
