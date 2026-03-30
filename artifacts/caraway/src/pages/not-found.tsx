import { Card, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SEO } from "@/components/SEO";
import { AlertCircle } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page not found | Caraway"
        description="The page you requested could not be found. Return to Caraway's home page to request a cash offer."
        canonical={`${window.location.origin}${window.location.pathname}`}
      />
      <div className="min-h-screen w-full flex items-center justify-center bg-muted/40 px-4">
        <Card className="w-full max-w-md border-border/60 shadow-sm">
          <CardContent className="pt-8 pb-8">
            <div className="flex mb-4 gap-3">
              <AlertCircle className="h-8 w-8 text-destructive shrink-0" aria-hidden />
              <div>
                <h1 className="text-2xl font-display font-bold text-foreground">Page not found</h1>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  That address doesn&apos;t match anything on our site. Try the home page or use the menu to find cash for cars in your area.
                </p>
              </div>
            </div>
            <Link
              href={import.meta.env.BASE_URL}
              className={cn(buttonVariants({ variant: "default" }), "mt-6 inline-flex w-full sm:w-auto justify-center")}
            >
              Back to home
            </Link>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
