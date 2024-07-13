import { ComponentProps } from 'react'

type ShareLinkProps = ComponentProps<'a'>

export function ShareLink(props: ShareLinkProps) {
  return (
    <a
      className="inline-block p-1 text-primary lg:hover:text-foreground transition"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  )
}
