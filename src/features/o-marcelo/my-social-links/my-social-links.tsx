import { socialNetworks } from '@utils/social-networks'

export function MySocialLinks() {
  return (
    <nav>
      <h2 className="sr-only">Encontre-me aqui</h2>

      <ul className="flex items-center gap-1" role="list">
        {socialNetworks.map((social) => (
          <li role="listitem" key={social.name}>
            <a
              href={social.url}
              className="inline-block p-1 text-primary lg:hover:text-foreground transition"
              target="_blank"
              rel="noopener noreferrer"
              title={social.name}
              aria-label={`Compartilhar no ${social.name}`}
            >
              {social.icon}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
