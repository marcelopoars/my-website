import { GithubIcon, LinkedinIcon } from '@shared/components/icons'
import { Button } from '@ui/button'

const socialLinks = [
  {
    href: 'https://github.com/marcelopoars/',
    label: 'GitHub de Marcelo Pereira',
    icon: <GithubIcon />,
  },
  {
    href: 'https://www.linkedin.com/in/marcelopoars/',
    label: 'LinkedIn de Marcelo Pereira',
    icon: <LinkedinIcon />,
  },
]

export function HeroLinks() {
  return (
    <div className="flex items-center gap-4">
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
        {socialLinks.map(({ href, icon, label }) => (
          <Button key={href} variant="outline" size="icon" asChild>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              title={label}
            >
              {icon}
            </a>
          </Button>
        ))}
      </div>
    </div>
  )
}
