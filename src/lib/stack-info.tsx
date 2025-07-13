import { StyledComponentsIcon } from '@shared/components'
import {
  IconBrandCss3,
  IconBrandGatsby,
  IconBrandGithub,
  IconBrandJavascript,
  IconBrandNextjs,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandTypescript,
  IconBrandVite,
  IconWorldSearch,
} from '@tabler/icons-react'
import { JSX } from 'react'

export interface StackInfo {
  icon: JSX.Element
  label: string
}

export const stackInfoMap: Record<string, StackInfo> = {
  css3: { icon: <IconBrandCss3 />, label: 'CSS3' },
  gatsbyjs: { icon: <IconBrandGatsby />, label: 'Gatsby.js' },
  githubapi: { icon: <IconBrandGithub />, label: 'GitHub' },
  javascript: { icon: <IconBrandJavascript />, label: 'JavaScript' },
  nextjs: { icon: <IconBrandNextjs />, label: 'Next.js' },
  reactjs: { icon: <IconBrandReact />, label: 'React.js' },
  seo: { icon: <IconWorldSearch />, label: 'SEO' },
  styledcomponents: {
    icon: <StyledComponentsIcon />,
    label: 'Styled Components',
  },
  tailwindcss: { icon: <IconBrandTailwind />, label: 'Tailwind CSS' },
  typescript: { icon: <IconBrandTypescript />, label: 'TypeScript' },
  vitejs: { icon: <IconBrandVite />, label: 'Vite.js' },
}
