import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thélio - Desenvolvedor FullStack",
  description: "Desenvolvedor FullStack experiente em React, Node.js e tecnologias web modernas. Entrego soluções de qualidade com código limpo e escalável.",
  openGraph: {
    title: "Thélio - Desenvolvedor FullStack",
    description: "Desenvolvedor FullStack experiente em React, Node.js e tecnologias web modernas. Entrego soluções de qualidade com código limpo e escalável.",
    url: "https://thelio.me",
    images: [
      {
        url: "https://thelio.me/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Thélio - Desenvolvedor FullStack",
      },
    ],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
