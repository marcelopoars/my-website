import { ThemeProvider } from '@/components/_theme'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { IBM_Plex_Mono as FontNono, Outfit as FontSans } from 'next/font/google'

import { CtaBanner, Footer, Header } from '@/components'

import '../styles/globals.css'

const fontSans = FontSans({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-sans',
})

const fontNono = FontNono({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  generator: 'Next.js',
  applicationName: 'Marcelo Pereira | Website',
  category: 'technology',
  authors: [{ name: 'Marcelo Pereira', url: 'https://marcelopereira.com.br/' }],
  creator: 'Marcelo Pereira | Desenvolvimento de Software',
  title: {
    template: '%s | Marcelo Pereira | Desenvolvimento de Software',
    default: 'Marcelo Pereira | Desenvolvimento de Software',
  },
  description:
    'Desenvolvemos software, SaaS, sites e landing pages. Tecnologia e expertise para seu projeto.',
  metadataBase: new URL('https://marcelopereira.com.br/'),
  openGraph: {
    type: 'website',
    countryName: 'Brasil',
    url: 'https://marcelopereira.com.br/',
    locale: 'pt_br',
  },
  manifest: '/site.webmanifest',
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={cn(fontSans.variable, fontNono.variable)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-1">
            {children}

            <CtaBanner />
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
