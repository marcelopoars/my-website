import { footerSocialLinks } from '@lib/footer'
import { FooterLinksList } from './footer-links-list'

export function FooterSocial() {
  return (
    <nav className="space-y-6" aria-labelledby="footer-me-encontre-heading">
      <h3 id="footer-me-encontre-heading" className="text-xl">
        Me encontre
      </h3>
      <ul className="flex flex-col gap-y-3 text-muted-foreground">
        <FooterLinksList items={footerSocialLinks} />
      </ul>
    </nav>
  )
}
