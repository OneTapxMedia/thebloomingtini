import type { Metadata } from "next";
import { Playfair_Display, Inter, Corinthia } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const corinthia = Corinthia({
  variable: "--font-accent",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Blooming Tini | Mobile Bartending Philadelphia",
  description:
    "Premium mobile bartending services for weddings, corporate events, and private parties in Philadelphia, Bensalem, Bucks County, and surrounding PA/NJ areas. Where Celebrations Bloom.",
  keywords: [
    "mobile bartending Philadelphia",
    "mobile bar Bensalem PA",
    "wedding bartending Philadelphia",
    "private event bartending PA",
    "mobile cocktail bar Philadelphia",
    "Bucks County bartending",
  ],
  authors: [{ name: "The Blooming Tini" }],
  openGraph: {
    title: "The Blooming Tini | Mobile Bartending Philadelphia",
    description:
      "Premium mobile bartending services for weddings, corporate events, and private parties. Where Celebrations Bloom.",
    url: "https://thebloomingini.com",
    siteName: "The Blooming Tini",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Blooming Tini | Mobile Bartending Philadelphia",
    description:
      "Premium mobile bartending services for weddings, corporate events, and private parties. Where Celebrations Bloom.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${corinthia.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
