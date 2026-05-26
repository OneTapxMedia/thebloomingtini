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
    "matcha bar wellness event",
    "custom labeled cocktails",
    "the Bloom Bar",
  ],
  authors: [{ name: "The Blooming Tini" }],
  creator: "The Blooming Tini",
  publisher: "The Blooming Tini",
  alternates: { canonical: SITE_URL },
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
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "Mobile Bartending Service",
};

const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "FoodEstablishment"],
  "@id": SITE_URL,
  name: "The Blooming Tini",
  legalName: "The Blooming Tini Mobile Bar Co.",
  alternateName: "The Blooming Tini Mobile Bar",
  slogan: "Where Celebrations Bloom",
  image: `${SITE_URL}/opengraph-image.png`,
  logo: `${SITE_URL}/icon.png`,
  url: SITE_URL,
  telephone: "+1-215-555-0123",
  email: "hello@thebloomingtini.com",
  priceRange: "$$",
  servesCuisine: ["Cocktails", "Mocktails", "Matcha", "Brunch Cocktails"],
  description:
    "Premium mobile bartending serving Philadelphia, Bensalem, Bucks County, and surrounding PA/NJ areas. Custom-labeled cocktails, the Bloom Bar mobile setup, and matcha bars for wellness events.",
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
    { "@type": "AdministrativeArea", name: "South Jersey" },
  ],
  sameAs: ["https://instagram.com/thebloomingtini"],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "47",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Mobile Bartending Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wedding Bartending", url: `${SITE_URL}/services/weddings` } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bridal Shower Bartending", url: `${SITE_URL}/services/bridal-showers` } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Baby Shower Mocktails", url: `${SITE_URL}/services/baby-showers` } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Corporate Event Bartending", url: `${SITE_URL}/services/corporate` } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Birthday Party Bartending", url: `${SITE_URL}/services/birthdays` } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wellness & Pilates Matcha Bar", url: `${SITE_URL}/services/wellness` } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Engagement Party Bartending", url: `${SITE_URL}/services/engagement` } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Backyard Party Bartending", url: `${SITE_URL}/services/backyard` } },
    ],
  },
  potentialAction: {
    "@type": "ReserveAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/contact`,
      inLanguage: "en-US",
      actionPlatform: [
        "https://schema.org/DesktopWebPlatform",
        "https://schema.org/MobileWebPlatform",
      ],
    },
    result: { "@type": "Reservation", name: "Mobile Bar Reservation" },
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}#website`,
  url: SITE_URL,
  name: "The Blooming Tini",
  publisher: { "@id": SITE_URL },
  inLanguage: "en-US",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}#organization`,
  name: "The Blooming Tini",
  url: SITE_URL,
  logo: `${SITE_URL}/icon.png`,
  sameAs: ["https://instagram.com/thebloomingtini"],
  founder: [
    { "@type": "Person", name: "Founder 1" },
    { "@type": "Person", name: "Founder 2" },
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(businessJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
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
