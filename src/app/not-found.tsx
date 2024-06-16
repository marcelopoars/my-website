import { Metadata } from 'next'
import Link from 'next/link'

import { Button } from '@/components'

export const metadata: Metadata = {
  title: 'Erro 404 | Marcelo Pereira',
  description: 'Ops! Esta página não existe.',
}

export default function NotFound() {
  return (
    <section className="pt-20 pb-20 lg:pt-40">
      <div className="container flex flex-col justify-center items-center">
        <h1 className="text-8xl lg:text-9xl mb-3">404</h1>

        <p className="text-muted-foreground font-mono mb-6 lg:text-xl">
          Ops! Esta página não existe.
        </p>

        <Button asChild>
          <Link href="/">Voltar para a página inicial</Link>
        </Button>
      </div>
    </section>
  )
}
