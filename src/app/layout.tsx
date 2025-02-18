import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import '../styles/globals.css';
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Connecting Points",
  description: "Especializados em desenvolvimento web, redes, infraestrutura e design gráfico, oferecemos soluções completas para impulsionar a presença digital da sua empresa. Nosso foco principal é o desenvolvimento web, criando websites modernos, funcionais e personalizados para destacar seu negócio online. Conte com uma equipe dedicada para transformar ideias em resultados eficientes e inovadores.p",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <Head>
        {/* <meta charSet="utf-8" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta
          name="keywords"
          content="Connecting Points, desenvolvimento web, design gráfico, redes, infraestrutura de TI, criação de sites, soluções digitais, Funchal, Madeira, Portugal, websites personalizados, agência digital, empresa de TI, desenvolvimento de software, serviços de TI Funchal, transformação digital, presença online"
        />

        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:url" content="https://connectingpoints.pt" />
        <meta property="og:title" content="Connecting Points" />
        <meta
          property="og:description"
          content="Especializados em desenvolvimento web, redes, infraestrutura e design gráfico, oferecemos soluções completas para impulsionar a presença digital da sua empresa. Nosso foco principal é o desenvolvimento web, criando websites modernos, funcionais e personalizados para destacar seu negócio online. Conte com uma equipe dedicada para transformar ideias em resultados eficientes e inovadores."
        />
        <meta
          property="og:image"
          content="/images/logos/ConnectingPoints-Background-white-text-dark.png"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Connecting Points" />
        <meta
          name="twitter:description"
          content="Especializados em desenvolvimento web..."
        />
        <meta
          name="twitter:image"
          content="/images/logos/ConnectingPoints-Background-white-text-dark.png"
        />

        {/* Favicons (opcional) */}
        {/* <link
          rel="icon"
          type="image/png"
          href="/favicons/favicon-96x96.png"
          sizes="96x96"
        /> */}
        {/* <link  rel="shortcut icon" type="image/svg+xml" href="./favicons/favicon.svg" /> */}
        <link rel="shortcut icon" href="/favicon.ico" />
        {/* <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        /> */}
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
