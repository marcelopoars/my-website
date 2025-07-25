import {
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconBrandX,
} from '@tabler/icons-react'

import { ReactNode } from 'react'

export interface ShareParams {
  canonicalUrl: string
  titleSite?: string
  text?: string
}

export interface SocialNetwork {
  name: string
  getUrl: (params: ShareParams) => string
  icon: ReactNode
}

export const socialUrlPrefixes = {
  linkedin: 'https://www.linkedin.com/shareArticle?mini=true&url=',
  whatsapp: 'https://api.whatsapp.com/send?text=',
  facebook: 'https://www.facebook.com/sharer/sharer.php?u=',
  x: 'https://twitter.com/intent/tweet?text=',
}

export const socialNetworks: SocialNetwork[] = [
  {
    name: 'LinkedIn',
    getUrl: ({ canonicalUrl, titleSite, text }) =>
      `${socialUrlPrefixes.linkedin}${encodeURIComponent(canonicalUrl)}&title=${encodeURIComponent(titleSite ?? '')}${text ? `&summary=${encodeURIComponent(text ?? '')}` : ''}`,
    icon: <IconBrandLinkedin aria-hidden="true" focusable="false" />,
  },
  {
    name: 'WhatsApp',
    getUrl: ({ canonicalUrl, titleSite, text }) =>
      `${socialUrlPrefixes.whatsapp}${encodeURIComponent((text ?? titleSite ?? '') + ' ' + canonicalUrl)}`,
    icon: <IconBrandWhatsapp aria-hidden="true" focusable="false" />,
  },
  {
    name: 'Facebook',
    getUrl: ({ canonicalUrl }) =>
      `${socialUrlPrefixes.facebook}${encodeURIComponent(canonicalUrl)}`,
    icon: <IconBrandFacebook aria-hidden="true" focusable="false" />,
  },
  {
    name: 'X',
    getUrl: ({ canonicalUrl, titleSite, text }) =>
      `${socialUrlPrefixes.x}${encodeURIComponent(text ?? titleSite ?? '')}&url=${encodeURIComponent(canonicalUrl)}`,
    icon: <IconBrandX aria-hidden="true" focusable="false" />,
  },
]
