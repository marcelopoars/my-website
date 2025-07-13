import Link from 'next/link'
import { LogoDicaDoNerdHorizontal, LogoMarceloPereira } from '../logos'

export function Footer() {
  return (
    <footer className="pt-12 lg:pt-20">
      <div className="container flex flex-col gap-10 font-mono font-medium py-6 lg:flex-row lg:justify-between">
        <LogoMarceloPereira />

        <div className="grid grid-cols-2 gap-10 lg:grid-cols-3 lg:gap-16">
          <div className="space-y-6">
            <h3 className="text-xl">Sobre</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <Link
                  className="inline-block hover:text-primary hover:underline underline-offset-4 py-1"
                  href="/"
                >
                  home
                </Link>
              </li>
              <li>
                <Link
                  className="inline-block hover:text-primary hover:underline underline-offset-4 py-1"
                  href="/o-marcelo"
                >
                  o Marcelo
                </Link>
              </li>
              <li>
                <a
                  className="inline-block hover:text-primary hover:underline underline-offset-4 py-1"
                  href="https://api.whatsapp.com/send?phone=5551981838118&text=Ol%C3%A1!"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  contato
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl">Me encontre</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <a
                  className="inline-block hover:text-primary hover:underline underline-offset-4 py-1"
                  href="https://instagram.com/marcelopereira.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  className="inline-block hover:text-primary hover:underline underline-offset-4 py-1"
                  href="https://linkedin.com/in/marcelopoars/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linkedin
                </a>
              </li>
              <li>
                <a
                  className="inline-block hover:text-primary hover:underline underline-offset-4 py-1"
                  href="https://github.com/marcelopoars/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <div>
              <LogoDicaDoNerdHorizontal />
            </div>

            <ul className="space-y-3 text-muted-foreground">
              <li>
                <a
                  className="group flex items-center gap-2 hover:text-dica-do-nerd hover:underline underline-offset-4 py-1"
                  href="https://instagram.com/dicadonerd/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  className="group flex items-center gap-2 hover:text-dica-do-nerd hover:underline underline-offset-4 py-1"
                  href="https://youtube.com/DicaDoNerd/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Youtube
                </a>
              </li>
              <li>
                <a
                  className="group flex items-center gap-2 hover:text-dica-do-nerd hover:underline underline-offset-4 py-1"
                  href="https://t.me/dicadonerd/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Telegram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container py-8">
        <hr className="bg-foreground/30 h-px" />

        <p className="text-muted-foreground text-center mt-8">
          &copy; 2024 | Desenvolvido com ❤️{' '}
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
