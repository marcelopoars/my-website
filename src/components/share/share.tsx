import { ShareDesktop } from './share-desktop'
import { ShareMobile } from './share-mobile'

const canonicalUrl = 'https://www.marcelopereira.com.br/'
const titleSite = 'Marcelo Pereira | Desenvolvedor Frontend'

export function Share() {
  return (
    <>
      <ShareMobile canonicalUrl={canonicalUrl} titleSite={titleSite} />
      <ShareDesktop canonicalUrl={canonicalUrl} titleSite={titleSite} />
    </>
  )
}
