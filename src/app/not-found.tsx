import type { Metadata } from "next";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found | Caraway",
  description:
    "The page you requested could not be found. Return to Caraway's home page to request a cash offer.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md text-center">
        <div className="text-6xl font-display font-bold text-primary/15 mb-4">404</div>
        <h1 className="text-2xl font-display font-bold text-foreground mb-3">
          Page not found
        </h1>
        <p className="text-muted-foreground leading-relaxed mb-8">
          That address doesn&apos;t match anything on our site. Try the
          home page or use the menu to find cash for cars in your area.
        </p>
        <Link
          href="/"
          className={cn(
            buttonVariants({ variant: "default", size: "lg" }),
            "shadow-lg",
          )}
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
