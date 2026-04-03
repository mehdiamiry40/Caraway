"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export function Accordion({ items, className }: AccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className={cn("w-full space-y-3", className)}>
      {items.map((item, index) => {
        const isActive = activeIndex === index;
        const triggerId = `accordion-trigger-${index}`;
        const panelId = `accordion-panel-${index}`;
        return (
          <div
            key={item.question}
            className={cn(
              "rounded-2xl bg-white transition-all duration-300",
              isActive
                ? "shadow-lg ring-1 ring-primary/10"
                : "shadow-card hover:shadow-md ring-1 ring-border/60"
            )}
          >
            <button
              type="button"
              id={triggerId}
              onClick={() => setActiveIndex(isActive ? null : index)}
              className="flex w-full items-center justify-between gap-4 p-5 sm:p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-2xl touch-manipulation"
              aria-expanded={isActive}
              aria-controls={panelId}
            >
              <span className="font-display text-base sm:text-lg font-semibold text-foreground leading-snug pr-2">
                {item.question}
              </span>
              <div
                className={cn(
                  "flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full transition-all duration-300",
                  isActive
                    ? "bg-primary text-white rotate-180"
                    : "bg-muted text-muted-foreground"
                )}
              >
                <ChevronDown className="h-4 w-4" aria-hidden="true" />
              </div>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              className={cn(
                "grid transition-all duration-300 ease-in-out",
                isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="overflow-hidden">
                <div className="px-5 pb-5 pt-0 sm:px-6 sm:pb-6 text-muted-foreground text-[15px] leading-relaxed">
                  {item.answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
