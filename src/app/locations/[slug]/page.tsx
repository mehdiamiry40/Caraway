import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import SuburbPageTemplate from "@/components/templates/SuburbPageTemplate";
import { getSuburbBySlug, suburbs } from "@/data/suburbs";
import { breadcrumbListSchema } from "@/lib/breadcrumb-schema";
import { SITE_URL } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return suburbs.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const suburb = getSuburbBySlug(slug);
  if (!suburb) {
    return {
      title: "Page not found | Caraway",
      robots: { index: false, follow: false },
    };
  }
  return {
    title: suburb.title,
    description: suburb.metaDescription,
    alternates: { canonical: `/locations/${suburb.slug}` },
    openGraph: {
      title: suburb.title,
      description: suburb.metaDescription,
      url: `/locations/${suburb.slug}`,
    },
  };
}

export default async function SuburbSlugPage({ params }: Props) {
  const { slug } = await params;
  const suburb = getSuburbBySlug(slug);
  if (!suburb) notFound();

  const canonicalUrl = `${SITE_URL}/locations/${suburb.slug}`;
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Locations", href: "/locations" },
    { label: suburb.h1 },
  ];

  const pageStructuredData = [
    {
      "@type": "Service",
      name: `Cash for Cars ${suburb.h1.replace("Cash for Cars ", "")}`,
      description: suburb.metaDescription,
      provider: { "@type": "LocalBusiness", name: "Caraway" },
      areaServed: {
        "@type": "Place",
        name: suburb.h1.replace("Cash for Cars ", ""),
      },
      url: `https://caraway.au/locations/${suburb.slug}`,
    },
    breadcrumbListSchema(breadcrumbs, canonicalUrl),
  ];

  return (
    <>
      <JsonLd data={pageStructuredData} />
      <SuburbPageTemplate suburb={suburb} />
    </>
  );
}
