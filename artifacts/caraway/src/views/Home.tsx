import { lazy, Suspense } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";

const HomeBelowFold = lazy(() => import("@/views/HomeBelowFold"));

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        <Hero />
        <Suspense
          fallback={
            <div
              className="min-h-[32rem] w-full bg-muted/30"
              role="status"
              aria-live="polite"
              aria-label="Loading page content"
            />
          }
        >
          <HomeBelowFold />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
