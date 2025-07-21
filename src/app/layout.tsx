import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Açaí Blessed - Delivery de Açaí Fresquinho | Peça Agora",
  description: "O melhor açaí da região com entrega rápida. Monte do seu jeito com mais de 10 acompanhamentos. Peça agora pelo WhatsApp! Região CSA.",
  keywords: "açaí, delivery, açaí fresquinho, acompanhamentos, entrega rápida, CSA, milkshake, sorvete",
  authors: [{ name: "Açaí Blessed" }],
  creator: "Açaí Blessed",
  publisher: "Açaí Blessed",
  robots: "index, follow",
  openGraph: {
    title: "Açaí Blessed - O Melhor Açaí da Região",
    description: "Açaí fresquinho com mais de 10 acompanhamentos. Entrega rápida na região CSA.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Açaí Blessed - O Melhor Açaí da Região",
    description: "Açaí fresquinho com mais de 10 acompanhamentos. Entrega rápida na região CSA.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${poppins.variable} ${inter.variable} antialiased font-inter`}
      >
        {children}
      </body>
    </html>
  );
}
