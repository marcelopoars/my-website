import { Metadata } from 'next'

import { AboutMe, Experiences, HeroMarcelo } from '@/components'

export const metadata: Metadata = {
  title: 'o Marcelo',
  description:
    'Desenvolvedor Frontend apaixonado por criar interfaces web incríveis e acessíveis.',
}

export default function Page() {
  return (
    <>
      <HeroMarcelo />
      <AboutMe />
      <Experiences />
    </>
  )
}
