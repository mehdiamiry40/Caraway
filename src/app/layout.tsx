import type { Metadata } from "next";
import { Nunito_Sans, Source_Sans_3 } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import {
  localBusinessSchema,
  organizationSchema,
  websiteSchema,
} from "@/lib/json-ld-schemas";
import { Providers } from "./providers";
import "./globals.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans-body",
  display: "swap",
});

const nunito = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-display-heading",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://caraway.au"),
  title: "Cash for Cars Brisbane | Caraway — Same-Day Cash & Free Towing",
  description:
    "Cash for cars Brisbane: fair quotes, free removal, and payment on pickup. Caraway buys any make or condition — up to $9,999. Greater Brisbane, 7 days. Call 1800 227 293 for a free quote.",
  keywords: [
    "cash for cars Brisbane",
    "cash for cars brisbane today",
    "sell car for cash Brisbane",
    "car removal Brisbane",
    "sell my car Brisbane",
    "scrap car buyers Brisbane",
    "cash for cars",
    "car buyers Brisbane",
    "junk car removal Brisbane",
    "free car removal Brisbane",
    "unwanted car removal Brisbane",
    "cash for old cars Brisbane",
    "cash for damaged cars Brisbane",
  ],
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: "Caraway",
    images: [
      {
        url: "/images/tow-truck-hero.webp",
        width: 1200,
        height: 800,
        alt: "Caraway tow truck — cash for cars Brisbane",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  other: {
    "geo.region": "AU-QLD",
    "geo.placename": "Brisbane",
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
      className={`${sourceSans.variable} ${nunito.variable}`}
    >
      <body className="min-h-screen">
        <JsonLd
          data={[localBusinessSchema, organizationSchema, websiteSchema]}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
