import Link from "next/link";
import { services } from "@/data/services";
import { suburbs } from "@/data/suburbs";

interface InternalLinksProps {
  currentSlug?: string;
}

export function InternalLinks({ currentSlug }: InternalLinksProps) {
  const topServices = services.filter(s => s.slug !== currentSlug).slice(0, 6);
  const topSuburbs = suburbs.filter(s => s.slug !== currentSlug).slice(0, 8);

  return (
    <section className="py-16 bg-muted/50 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-lg font-display font-bold text-foreground mb-4">Our Services</h2>
            <ul className="space-y-2">
              {topServices.map(s => (
                <li key={s.slug}>
                  <Link
                    href={`/${s.slug}`}
                    className="text-sm text-primary hover:text-accent transition-colors hover:underline"
                  >
                    {s.h1}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-display font-bold text-foreground mb-4">Areas We Service</h2>
            <ul className="space-y-2">
              {topSuburbs.map(s => (
                <li key={s.slug}>
                  <Link
                    href={`/locations/${s.slug}`}
                    className="text-sm text-primary hover:text-accent transition-colors hover:underline"
                  >
                    {s.h1}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/locations"
                  className="text-sm text-accent font-semibold hover:underline"
                >
                  View all locations →
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
