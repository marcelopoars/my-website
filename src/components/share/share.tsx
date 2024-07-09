import { IconBrandFacebook, IconBrandX } from '@tabler/icons-react'

export function Share() {
  const canonicalUrl = 'https://www.marcelopereira.dev/'
  const title = 'Marcelo Pereira | Desenvolvedor Frontend'

  const facebookURL = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(canonicalUrl)}&t=${encodeURIComponent(title)}`

  const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(canonicalUrl)}&text=${encodeURIComponent(title)}`

  return (
    <div className="flex items-center gap-1 lg:mt-4">
      <span className="text-muted-foreground">Compartilhar no:</span>
      <ul className="flex">
        <li>
          <a
            className="inline-block p-1 hover:text-primary transition"
            href={facebookURL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Compartilhar no Facebook"
          >
            <IconBrandFacebook />
          </a>
        </li>
        <li>
          <a
            className="inline-block p-1 hover:text-primary transition"
            href={twitterUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Compartilhar no X"
          >
            <IconBrandX />
          </a>
        </li>
      </ul>
    </div>
  )
}
