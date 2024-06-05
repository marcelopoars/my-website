import { ThemeProvider } from '@/components/_theme'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { IBM_Plex_Mono as FontNono, Outfit as FontSans } from 'next/font/google'

import { Footer, Header } from '@/components'

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
  applicationName: 'Marcelo Pereira - Website',
  category: 'technology',
  authors: [{ name: 'Marcelo Pereira', url: 'https://marcelopereira.dev/' }],
  creator: 'Marcelo Pereira',
  title: 'Marcelo Pereira | Full Stack Developer',
  description:
    'Projeto e Desenvolvimento de sites, landing pages e aplicações web.',
  metadataBase: new URL('https://marcelopereira.dev/'),
  openGraph: {
    type: 'website',
    countryName: 'Brasil',
    url: 'https://marcelopereira.dev/',
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
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
