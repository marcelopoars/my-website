import { ShareDesktop } from './share-desktop'
import { ShareMobile } from './share-mobile'

interface ShareProps {
  canonicalUrl: string
  titleSite: string
  text?: string
}

export function Share({ canonicalUrl, titleSite, text }: ShareProps) {
  return (
    <>
      <ShareMobile
        canonicalUrl={canonicalUrl}
        titleSite={titleSite}
        text={text}
      />
      <ShareDesktop
        canonicalUrl={canonicalUrl}
        titleSite={titleSite}
        text={text}
      />
    </>
  )
}
