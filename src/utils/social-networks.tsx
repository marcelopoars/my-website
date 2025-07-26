import {
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconBrandGithub,
} from '@tabler/icons-react'
import { ReactNode } from 'react'

export interface SocialNetwork {
  name: string
  url: string
  icon: ReactNode
}

export const socialNetworks: SocialNetwork[] = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/marcelopoars/',
    icon: <IconBrandLinkedin />,
  },
  {
    name: 'GitHub',
    url: 'https://github.com/marcelopoars',
    icon: <IconBrandGithub />,
  },
  {
    name: 'WhatsApp',
    url: 'https://api.whatsapp.com/send?phone=5551981838118&text=Ol%C3%A1!',
    icon: <IconBrandWhatsapp />,
  },
]
