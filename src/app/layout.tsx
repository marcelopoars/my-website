import { ThemeProvider, ThemeToggle } from "@/components/_theme";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import {
  IBM_Plex_Mono as FontNono,
  Outfit as FontSans,
} from "next/font/google";

import "../styles/globals.css";
import { Header } from "@/components";

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
          <Header />
          <main className="flex-1">{children}</main>
          <footer>
            <div className="container py-6">&copy; 2024 Marcelo Pereira | Desenvolvedor Full Stack</div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
