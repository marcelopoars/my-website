import { footerSocialLinks } from '@lib/footer'
import { FooterLinksList } from './footer-links-list'

export function FooterSocial() {
  return (
    <nav className="space-y-6" aria-labelledby="footer-me-encontre-heading">
      <h3 id="footer-me-encontre-heading" className="text-xl">
        Me encontre
      </h3>
      <FooterLinksList items={footerSocialLinks} />
    </nav>
  )
}
