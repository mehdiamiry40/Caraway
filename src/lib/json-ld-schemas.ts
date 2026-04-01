/** Site-wide JSON-LD objects (same semantics as former SEO.tsx global injection). */

import { SITE_URL } from "@/lib/site";

const NAP = {
  name: "Caraway — Cash for Cars Brisbane",
  phone: "1800 227 293",
  email: "info@caraway.au",
  addressLocality: "Brisbane",
  addressRegion: "QLD",
  addressCountry: "AU",
  latitude: -27.4698,
  longitude: 153.0251,
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "AutoDealer"],
  "@id": `${SITE_URL}/#business`,
  name: NAP.name,
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  image: `${SITE_URL}/images/tow-truck-hero.webp`,
  telephone: NAP.phone,
  email: NAP.email,
  priceRange: "$$",
  description:
    "Cash for cars Brisbane: Caraway pays cash on pickup for any make or condition — up to $9,999. Free towing and same-day service across Greater Brisbane. Call 1800 227 293.",
  address: {
    "@type": "PostalAddress",
    addressLocality: NAP.addressLocality,
    addressRegion: NAP.addressRegion,
    addressCountry: NAP.addressCountry,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: NAP.latitude,
    longitude: NAP.longitude,
  },
  areaServed: [
    { "@type": "City", name: "Brisbane" },
    { "@type": "City", name: "Ipswich" },
    { "@type": "City", name: "Logan" },
    { "@type": "City", name: "Redland Bay" },
    { "@type": "City", name: "Moreton Bay" },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: NAP.phone,
    contactType: "customer service",
    areaServed: "AU",
    availableLanguage: "English",
    hoursAvailable: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "07:00",
      closes: "19:00",
    },
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "07:00",
      closes: "19:00",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Cash for Cars Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cash for Cars Brisbane" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Free Car Removal Brisbane" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Scrap Car Buyers Brisbane" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Damaged Car Buyers Brisbane" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Unwanted Car Removal Brisbane" } },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "5",
    bestRating: "5",
    worstRating: "1",
  },
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: NAP.name,
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/images/logo.png`,
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: NAP.phone,
    contactType: "customer service",
    areaServed: "AU",
    availableLanguage: "English",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: NAP.addressLocality,
    addressRegion: NAP.addressRegion,
    addressCountry: NAP.addressCountry,
  },
  sameAs: [
    // Add your social / GMB profile URLs here as they become available
    // "https://www.google.com/maps/place/...",
    // "https://www.facebook.com/carawayau",
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: "Caraway — Cash for Cars Brisbane",
  alternateName: "Caraway Cash for Cars",
  url: SITE_URL,
  description:
    "Cash for cars Brisbane: free quotes, free removal, and cash paid on pickup. Servicing Greater Brisbane 7 days a week.",
  publisher: { "@id": `${SITE_URL}/#organization` },
};
