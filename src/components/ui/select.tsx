import React from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: { value: string; label: string }[];
  placeholder?: string;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, options, placeholder, ...props }, ref) => {
    return (
      <div className="relative">
        <select
          className={cn(
            "flex h-13 w-full appearance-none rounded-xl border border-border bg-white pl-4 pr-12 py-3 text-base text-foreground ring-offset-background transition-all duration-200",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:border-primary",
            "disabled:cursor-not-allowed disabled:opacity-50",
            "hover:border-primary/40 disabled:hover:border-border",
            "aria-[invalid=true]:border-destructive aria-[invalid=true]:focus-visible:ring-destructive/20",
            className
          )}
          defaultValue=""
          ref={ref}
          {...props}
        >
          {placeholder && (
            <option value="" disabled hidden>
              {placeholder}
            </option>
          )}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <ChevronDown aria-hidden="true" className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground/60 pointer-events-none" />
      </div>
    );
  }
);
Select.displayName = "Select";

export { Select };
