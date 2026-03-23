import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
}

export function SEO({ title, description }: SEOProps) {
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

    // LocalBusiness + AggregateRating structured data
    let scriptTag = document.querySelector('script[type="application/ld+json"]');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://caraway.com.au/",
      "name": "Caraway — Cash for Cars Brisbane",
      "url": "https://caraway.com.au/",
      "logo": "https://caraway.com.au/images/logo.png",
      "image": "https://caraway.com.au/images/logo.png",
      "telephone": "+611800227293",
      "email": "info@caraway.com.au",
      "priceRange": "$$",
      "description": "Brisbane's most trusted cash for cars service. We buy all makes and models in any condition. Free towing, same-day payment across Greater Brisbane.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Brisbane",
        "addressRegion": "QLD",
        "postalCode": "4000",
        "addressCountry": "AU"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -27.4698,
        "longitude": 153.0251
      },
      "areaServed": [
        { "@type": "City", "name": "Brisbane" },
        { "@type": "City", "name": "Ipswich" },
        { "@type": "City", "name": "Logan" },
        { "@type": "City", "name": "Redland Bay" },
        { "@type": "City", "name": "Moreton Bay" }
      ],
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
          "opens": "07:00",
          "closes": "19:00"
        }
      ],
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

    scriptTag.textContent = JSON.stringify(structuredData, null, 2);
  }, [title, description]);

  return null;
}
