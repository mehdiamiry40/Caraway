"use client";

import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ScrollToTop } from "@/components/ScrollToTop";
import { BackToTopButton } from "@/components/BackToTopButton";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <TooltipProvider>
      <ScrollToTop />
      {children}
      <BackToTopButton />
      <Toaster />
    </TooltipProvider>
  );
}
