import type { Metadata } from "next";
import Privacy from "@/views/Privacy";

export const metadata: Metadata = {
  title: "Privacy Policy | Caraway",
  description:
    "How Caraway collects, uses, and protects your personal information when you use our website and services in Australia.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    url: "/privacy",
    title: "Privacy Policy | Caraway",
    description:
      "How Caraway collects, uses, and protects your personal information when you use our website and services in Australia.",
    images: [{ url: "/images/tow-truck-hero.webp", width: 1200, height: 800, alt: "Caraway cash for cars Brisbane" }],
  },
  twitter: { card: "summary_large_image" },
};

export default function PrivacyPage() {
  return <Privacy />;
}
