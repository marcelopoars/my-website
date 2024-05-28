import { Logo } from '../logo'
import { LogoDicaDoNerd } from '../logo-dica-do-nerd'

export function Footer() {
  return (
    <footer className="pt-20">
      <div className="container flex flex-col gap-10 font-mono font-medium py-6 md:flex-row md:justify-between md:pr-20">
        <Logo />

        <aside className="flex gap-10 md:gap-16 lg:gap-32">
          <div className="space-y-6">
            <h4 className="text-xl">Me encontre</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li>
                <a
                  className="hover:text-primary"
                  href="https://linkedin.com/in/marcelopoars/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linkedin
                </a>
              </li>
              <li>
                <a
                  className="hover:text-primary"
                  href="https://github.com/marcelopoars/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  className="hover:text-primary"
                  href="https://api.whatsapp.com/send?phone=5551981838118&text=Ol%C3%A1!"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <div>
              <LogoDicaDoNerd />
            </div>

            <ul className="space-y-4 text-muted-foreground">
              <li>
                <a
                  className="hover:text-dica-do-nerd"
                  href="https://youtube.com/DicaDoNerd/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Youtube
                </a>
              </li>
              <li>
                <a
                  className="hover:text-dica-do-nerd"
                  href="https://instagram.com/dicadonerd/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  className="hover:text-dica-do-nerd"
                  href="https://t.me/dicadonerd/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Telegram
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </div>

      <div className="container py-6">
        <p className="text-sm text-muted-foreground text-center">
          &copy; 2024 | Desenvolvido com ❤️ por{' '}
          <a className="font-sans hover:text-primary" href="/">
            Marcelo Pereira
          </a>
          .
        </p>
      </div>
    </footer>
  )
}
