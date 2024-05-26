import { ThemeProvider, ThemeToggle } from "@/components/_theme";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import {
  IBM_Plex_Mono as FontNono,
  Outfit as FontSans,
} from "next/font/google";
import Image from "next/image";

import "../styles/globals.css";
import Link from "next/link";

const fontSans = FontSans({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontNono = FontNono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Marcelo Pereira",
  description: "Frontend Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={cn(fontSans.variable, fontNono.variable)}>
        <ThemeProvider attribute="class" defaultTheme="system">
          <header>
            <div className="container flex items-center justify-between pt-20">
              <Link href="/">
                <Image
                  className="hidden dark:block"
                  src="/logo-marcelo-pereira-frontend-developer-dark.svg"
                  alt="Logo Marcelo Pereira"
                  width={196}
                  height={49}
                  priority
                />
                <Image
                  className="block dark:hidden"
                  src="/logo-marcelo-pereira-frontend-developer-light.svg"
                  alt="Logo Marcelo Pereira"
                  width={196}
                  height={49}
                  priority
                />
              </Link>
              <ThemeToggle />
            </div>
          </header>
          <main className="flex min-h-screen flex-col gap-12 p-12">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
