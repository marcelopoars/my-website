import { Button, GithubIcon, LinkedinIcon } from '@/shared'

export function HeroLinks() {
  return (
    <aside className="flex items-center gap-4">
      <Button asChild>
        <a
          href="https://api.whatsapp.com/send?phone=5551981838118&text=Ol%C3%A1!"
          target="_blank"
          rel="noopener noreferrer"
        >
          Agendar uma conversa
        </a>
      </Button>

      <div className="flex items-center gap-2">
        <Button variant="outline" size="icon" asChild>
          <a
            href="https://github.com/marcelopoars/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon />
          </a>
        </Button>

        <Button variant="outline" size="icon" asChild>
          <a
            href="https://www.linkedin.com/in/marcelopoars/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinIcon />
          </a>
        </Button>
      </div>
    </aside>
  )
}
