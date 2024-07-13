import { ShareButton } from './share-button'

interface ShareMobileProps {
  canonicalUrl: string
  titleSite: string
}

export function ShareMobile({ canonicalUrl, titleSite }: ShareMobileProps) {
  return (
    <div className="lg:hidden flex items-center gap-1">
      <span className="text-sm text-muted-foreground">Compartilhar:</span>
      <ShareButton canonicalUrl={canonicalUrl} titleSite={titleSite} />
    </div>
  )
}
