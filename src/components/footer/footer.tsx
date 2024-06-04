import { LogoDicaDoNerdHorizontal, LogoMarceloPereira } from '../logos'

export function Footer() {
  return (
    <footer className="pt-12 lg:pt-20">
      <div className="container flex flex-col gap-10 font-mono font-medium py-6 md:flex-row md:justify-between md:pr-20">
        <LogoMarceloPereira />

        <aside className="flex gap-10 md:gap-16 lg:gap-32">
          <div className="space-y-6">
            <h4 className="text-xl">Me encontre</h4>
            <ul className="space-y-3 text-muted-foreground">
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
              <li>
                <a
                  className="inline-block hover:text-primary hover:underline underline-offset-4 py-1"
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
              <LogoDicaDoNerdHorizontal />
            </div>

            <ul className="space-y-3 text-muted-foreground">
              <li>
                <a
                  className="inline-block hover:text-dica-do-nerd hover:underline underline-offset-4 py-1"
                  href="https://youtube.com/DicaDoNerd/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Youtube
                </a>
              </li>
              <li>
                <a
                  className="inline-block hover:text-dica-do-nerd hover:underline underline-offset-4 py-1"
                  href="https://instagram.com/dicadonerd/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  className="inline-block hover:text-dica-do-nerd hover:underline underline-offset-4 py-1"
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
