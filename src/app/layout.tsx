import type { Metadata } from "next";
import { Outfit, IBM_Plex_Mono } from "next/font/google";

import "./globals.css";

const outfit = Outfit({
  weight: ["400", "500"],
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
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
      <body className={outfit.className}>{children}</body>
    </html>
  );
}
