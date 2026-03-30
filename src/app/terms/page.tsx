import type { Metadata } from "next";
import Terms from "@/views/Terms";

export const metadata: Metadata = {
  title: "Terms of Service | Caraway",
  description:
    "Terms governing use of the Caraway website and our vehicle purchase and removal services in Queensland.",
  alternates: { canonical: "/terms" },
  openGraph: {
    url: "/terms",
    title: "Terms of Service | Caraway",
    description:
      "Terms governing use of the Caraway website and our vehicle purchase and removal services in Queensland.",
  },
};

export default function TermsPage() {
  return <Terms />;
}
