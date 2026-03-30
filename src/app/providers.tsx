"use client";

import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ScrollToTop } from "@/components/ScrollToTop";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <TooltipProvider>
      <ScrollToTop />
      {children}
      <Toaster />
    </TooltipProvider>
  );
}
