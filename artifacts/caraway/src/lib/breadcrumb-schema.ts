const SITE = "https://caraway.com.au";

export type BreadcrumbItem = { label: string; href?: string };

/** BreadcrumbList JSON-LD: last crumb must have a URL (Schema.org expects `item` on every ListItem). */
export function breadcrumbListSchema(items: BreadcrumbItem[], currentPageUrl: string) {
  return {
    "@type": "BreadcrumbList" as const,
    itemListElement: items.map((bc, i) => ({
      "@type": "ListItem" as const,
      position: i + 1,
      name: bc.label,
      item: bc.href ? `${SITE}${bc.href}` : currentPageUrl,
    })),
  };
}
