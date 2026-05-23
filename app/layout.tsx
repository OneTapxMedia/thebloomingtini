import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, Corinthia } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";

const GA_ID = "G-0WXLNFBE06";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
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

const SITE_URL = "https://thebloomingtini.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "The Blooming Tini | Mobile Bartending Philadelphia",
    template: "%s | The Blooming Tini",
  },
  description:
    "Premium mobile bartending for weddings, corporate events, and private parties in Philadelphia, Bensalem, Bucks County, and surrounding PA/NJ areas. Where Celebrations Bloom.",
  keywords: [
    "mobile bartending Philadelphia",
    "mobile bar Bensalem PA",
    "wedding bartending Philadelphia",
    "private event bartending PA",
    "mobile cocktail bar Philadelphia",
    "Bucks County bartending",
  ],
  authors: [{ name: "The Blooming Tini" }],
  creator: "The Blooming Tini",
  openGraph: {
    title: "The Blooming Tini | Mobile Bartending Philadelphia",
    description:
      "Premium mobile bartending services for weddings, corporate events, and private parties. Where Celebrations Bloom.",
    url: SITE_URL,
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

const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": SITE_URL,
  name: "The Blooming Tini",
  image: `${SITE_URL}/og-image.jpg`,
  url: SITE_URL,
  telephone: "+1-215-555-0123",
  email: "hello@thebloomingtini.com",
  priceRange: "$$",
  description:
    "Premium mobile bartending serving Philadelphia, Bensalem, Bucks County, and surrounding PA/NJ areas.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bensalem",
    addressRegion: "PA",
    postalCode: "19020",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "Philadelphia" },
    { "@type": "City", name: "Bensalem" },
    { "@type": "AdministrativeArea", name: "Bucks County" },
    { "@type": "AdministrativeArea", name: "Montgomery County" },
    { "@type": "AdministrativeArea", name: "Delaware County" },
  ],
  sameAs: ["https://instagram.com/thebloomingtini"],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "47",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} ${corinthia.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(businessJsonLd),
          }}
        />
      </head>
      <body className="antialiased">
        {/* Google Analytics — gtag.js */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>

        <Header />
        <main>{children}</main>
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
