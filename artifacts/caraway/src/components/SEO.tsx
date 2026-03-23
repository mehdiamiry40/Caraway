import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  schema?: Record<string, unknown>[];
}

const SITE_URL = "https://caraway.com.au";
const DEFAULT_OG_IMAGE = `${SITE_URL}/images/tow-truck-hero.png`;

const NAP = {
  name: "Caraway — Cash for Cars Brisbane",
  phone: "+611800227293",
  phoneDisplay: "1800 227 293",
  email: "info@caraway.com.au",
  streetAddress: "123 Boundary Street",
  addressLocality: "Brisbane",
  addressRegion: "QLD",
  postalCode: "4000",
  addressCountry: "AU",
  latitude: -27.4698,
  longitude: 153.0251,
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "AutoDealer"],
  "@id": `${SITE_URL}/#business`,
  "name": NAP.name,
  "url": SITE_URL,
  "logo": `${SITE_URL}/images/logo.png`,
  "image": `${SITE_URL}/images/tow-truck-hero.png`,
  "telephone": NAP.phone,
  "email": NAP.email,
  "priceRange": "$$",
  "description": "Brisbane's most trusted cash for cars service. We buy all makes and models in any condition. Free towing, same-day payment across Greater Brisbane.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": NAP.streetAddress,
    "addressLocality": NAP.addressLocality,
    "addressRegion": NAP.addressRegion,
    "postalCode": NAP.postalCode,
    "addressCountry": NAP.addressCountry
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": NAP.latitude,
    "longitude": NAP.longitude
  },
  "areaServed": [
    { "@type": "City", "name": "Brisbane" },
    { "@type": "City", "name": "Ipswich" },
    { "@type": "City", "name": "Logan" },
    { "@type": "City", "name": "Redland Bay" },
    { "@type": "City", "name": "Moreton Bay" }
  ],
  "openingHoursSpecification": [{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    "opens": "07:00",
    "closes": "19:00"
  }],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1247",
    "bestRating": "5",
    "worstRating": "1"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Cash for Cars Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cash for Cars Brisbane" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Free Car Removal Brisbane" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Scrap Car Buyers Brisbane" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Damaged Car Buyers Brisbane" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Unwanted Car Removal Brisbane" } }
    ]
  },
  "sameAs": [
    "https://www.facebook.com/carawaybrisbane",
    "https://www.google.com/maps?q=Caraway+Cash+for+Cars+Brisbane"
  ]
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  "name": NAP.name,
  "url": SITE_URL,
  "logo": {
    "@type": "ImageObject",
    "url": `${SITE_URL}/images/logo.png`
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": NAP.phone,
    "contactType": "customer service",
    "areaServed": "AU",
    "availableLanguage": "English"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": NAP.streetAddress,
    "addressLocality": NAP.addressLocality,
    "addressRegion": NAP.addressRegion,
    "postalCode": NAP.postalCode,
    "addressCountry": NAP.addressCountry
  },
  "sameAs": [
    "https://www.facebook.com/carawaybrisbane"
  ]
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  "name": "Caraway",
  "url": SITE_URL,
  "publisher": { "@id": `${SITE_URL}/#organization` },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${SITE_URL}/?s={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  }
};

export function SEO({ title, description, canonical, ogImage, ogType, schema }: SEOProps) {
  useEffect(() => {
    document.title = title;

    const setMeta = (selector: string, attr: string, value: string) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        const [attrName, attrVal] = selector.replace('meta[', '').replace(']', '').split('="');
        el.setAttribute(attrName, attrVal.replace('"', ''));
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:type"]', 'content', ogType || 'website');
    setMeta('meta[property="og:image"]', 'content', ogImage || DEFAULT_OG_IMAGE);
    setMeta('meta[property="og:site_name"]', 'content', 'Caraway');
    setMeta('meta[property="og:locale"]', 'content', 'en_AU');
    setMeta('meta[name="geo.region"]', 'content', 'AU-QLD');
    setMeta('meta[name="geo.placename"]', 'content', 'Brisbane');

    let canonicalEl = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalEl) {
      canonicalEl = document.createElement('link');
      canonicalEl.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute('href', canonical || SITE_URL);

    document.querySelectorAll('script[data-seo-schema]').forEach(el => el.remove());

    const injectSchema = (data: Record<string, unknown>) => {
      const script = document.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      script.setAttribute('data-seo-schema', 'true');
      const hasContext = '@context' in data;
      script.textContent = JSON.stringify(hasContext ? data : { "@context": "https://schema.org", ...data });
      document.head.appendChild(script);
    };

    injectSchema(localBusinessSchema);
    injectSchema(organizationSchema);
    injectSchema(websiteSchema);

    if (schema) {
      schema.forEach(s => injectSchema(s));
    }
  }, [title, description, canonical, ogImage, ogType, schema]);

  return null;
}
