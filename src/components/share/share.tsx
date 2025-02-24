import { ShareDesktop } from './share-desktop'
import { ShareMobile } from './share-mobile'

const canonicalUrl = 'https://www.marcelopereira.com.br/'
const titleSite = 'Marcelo Pereira | Tecnologia e Expertise para seu Projeto'

export function Share() {
  return (
    <>
      <ShareMobile canonicalUrl={canonicalUrl} titleSite={titleSite} />
      <ShareDesktop canonicalUrl={canonicalUrl} titleSite={titleSite} />
    </>
  )
}
