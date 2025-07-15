import Link from 'next/link'

interface LinkItem {
  label: string
  href: string
  ariaLabel?: string
  external?: boolean
}

interface FooterLinksListProps {
  items: LinkItem[]
}

export function FooterLinksList({ items }: FooterLinksListProps) {
  return (
    <ul className="space-y-3 text-muted-foreground">
      {items.map(({ label, href, ariaLabel, external }) => {
        const commonProps = {
          href,
          ...(ariaLabel && { 'aria-label': ariaLabel }),
        }

        return (
          <li
            key={label}
            className="hover:text-primary hover:underline underline-offset-4 py-1"
          >
            {external ? (
              <a {...commonProps} target="_blank" rel="noopener noreferrer">
                {label}
              </a>
            ) : (
              <Link {...commonProps}>{label}</Link>
            )}
          </li>
        )
      })}
    </ul>
  )
}
