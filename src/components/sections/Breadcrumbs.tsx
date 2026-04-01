import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  light?: boolean;
}

export function Breadcrumbs({ items, light }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className="flex items-center gap-1 flex-wrap">
        {items.map((item, i) => (
          <li key={item.href || item.label} className="flex items-center gap-1">
            {i > 0 && (
              <ChevronRight aria-hidden="true" className={cn("h-3 w-3", light ? "text-white/40" : "text-muted-foreground/50")} />
            )}
            {item.href ? (
              <Link
                href={item.href}
                className={cn(
                  "hover:underline transition-colors rounded-sm focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none",
                  light ? "text-white/60 hover:text-white" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className={cn(light ? "text-white/90 font-medium" : "text-foreground font-medium")}>
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
