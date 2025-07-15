import { footerDicaDoNerdLinks } from '@lib/footer'
import { LogoDicaDoNerdHorizontal } from '../logos'
import { FooterLinksList } from './footer-links-list'

export function FooterDicaDoNerd() {
  return (
    <nav className="space-y-6" aria-labelledby="footer-dica-do-nerd-heading">
      <h3 id="footer-dica-do-nerd-heading" className="sr-only">
        Dica do Nerd
      </h3>
      <LogoDicaDoNerdHorizontal />
      <ul className="flex flex-col gap-y-3 text-muted-foreground">
        <FooterLinksList items={footerDicaDoNerdLinks} />
      </ul>
    </nav>
  )
}
