import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import Blog from "@/views/Blog";
import { breadcrumbListSchema } from "@/lib/breadcrumb-schema";
import { SITE_URL } from "@/lib/site";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Blog" },
];

export const metadata: Metadata = {
  title: "Blog | Caraway — Cash for Cars Brisbane",
  description:
    "Tips, guides, and insights about selling your car for cash in Brisbane. Learn how to get the best price, prepare for pickup, and more.",
  alternates: { canonical: "/blog" },
  openGraph: {
    url: "/blog",
    title: "Blog | Caraway — Cash for Cars Brisbane",
    description:
      "Tips, guides, and insights about selling your car for cash in Brisbane.",
    images: [
      {
        url: "/images/tow-truck-hero.webp",
        width: 1200,
        height: 800,
        alt: "Caraway cash for cars Brisbane",
      },
    ],
  },
  twitter: { card: "summary_large_image" },
};

export default function BlogPage() {
  const canonical = `${SITE_URL}/blog`;
  return (
    <>
      <JsonLd data={breadcrumbListSchema(breadcrumbs, canonical)} />
      <Blog />
    </>
  );
}
