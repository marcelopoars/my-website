import { ShareButton } from './share-button'
import { ShareDesktop } from './share-desktop'

const canonicalUrl = 'https://www.marcelopereira.dev/'
const titleSite = 'Marcelo Pereira | Desenvolvedor Frontend'

export function Share() {
  return (
    <>
      <div className="lg:hidden flex items-center gap-2">
        <span className="text-sm text-muted-foreground">Compartilhar:</span>
        <ShareButton canonicalUrl={canonicalUrl} titleSite={titleSite} />
      </div>

      <ShareDesktop canonicalUrl={canonicalUrl} titleSite={titleSite} />
    </>
  )
}
