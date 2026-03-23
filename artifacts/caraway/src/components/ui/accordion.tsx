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
    <div className={cn("w-full space-y-4", className)}>
      {items.map((item, index) => {
        const isActive = activeIndex === index;
        return (
          <div 
            key={index} 
            className="border border-border/60 bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:border-primary/30"
          >
            <button
              onClick={() => setActiveIndex(isActive ? null : index)}
              className="flex w-full items-center justify-between p-6 text-left focus:outline-none"
              aria-expanded={isActive}
            >
              <span className="font-display text-lg font-medium text-foreground">
                {item.question}
              </span>
              <div
                className={cn(
                  "flex-shrink-0 ml-4 flex items-center justify-center h-8 w-8 rounded-full bg-muted/50 text-primary transition-transform duration-300",
                  isActive && "rotate-180"
                )}
              >
                <ChevronDown className="h-5 w-5" />
              </div>
            </button>
            <div
              className={cn(
                "grid transition-all duration-300 ease-in-out",
                isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-6 pt-0 text-muted-foreground leading-relaxed">
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
