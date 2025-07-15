import { footerAboutLinks } from '@lib/footer'
import { FooterLinksList } from './footer-links-list'

export function FooterAbout() {
  return (
    <nav className="space-y-6" aria-labelledby="footer-sobre-heading">
      <h3 id="footer-sobre-heading" className="text-xl">
        Sobre
      </h3>
      <ul className="flex flex-col gap-y-3 text-muted-foreground">
        <FooterLinksList items={footerAboutLinks} />
      </ul>
    </nav>
  )
}
