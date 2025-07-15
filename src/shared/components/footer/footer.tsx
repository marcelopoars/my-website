import { LogoMarceloPereira } from '../logos'
import { FooterAbout } from './footer-about'
import { FooterSocial } from './footer-social'
import { FooterDicaDoNerd } from './footer-dica-do-nerd'

export function Footer() {
  return (
    <footer className="pt-12 lg:pt-20" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Rodapé
      </h2>

      <div className="container flex flex-col gap-10 font-mono font-medium py-6 lg:flex-row lg:justify-between">
        <LogoMarceloPereira />

        <div className="grid grid-cols-2 gap-10 lg:grid-cols-3 lg:gap-16">
          <FooterAbout />
          <FooterSocial />
          <FooterDicaDoNerd />
        </div>
      </div>

      <div className="container py-8">
        <hr className="bg-foreground/30 h-px" />

        <p
          className="text-muted-foreground text-center mt-8"
          aria-label="Direitos autorais"
        >
          &copy; {new Date().getFullYear()} | Desenvolvido com ❤️{' '}
          <span className="whitespace-nowrap">
            por{' '}
            <a
              className="font-sans hover:text-primary hover:underline underline-offset-4 py-1"
              href="/"
            >
              <strong>Marcelo Pereira</strong>
            </a>
          </span>
          .
        </p>
      </div>
    </footer>
  )
}
