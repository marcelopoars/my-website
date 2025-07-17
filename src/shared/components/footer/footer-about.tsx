import { footerAboutLinks } from '@lib/footer'
import { FooterLinksList } from './footer-links-list'

export function FooterAbout() {
  return (
    <nav className="space-y-6" aria-labelledby="footer-sobre-heading">
      <h3 id="footer-sobre-heading" className="text-xl">
        Sobre
      </h3>
      <FooterLinksList items={footerAboutLinks} />
    </nav>
  )
}
