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
  },
};

export default function PrivacyPage() {
  return <Privacy />;
}
