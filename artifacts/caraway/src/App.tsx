import { lazy, Suspense, useEffect } from "react";
import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

const Home = lazy(() => import("@/pages/Home"));
const NotFound = lazy(() => import("@/pages/not-found"));
const About = lazy(() => import("@/pages/About"));
const Contact = lazy(() => import("@/pages/Contact"));
const FAQPage = lazy(() => import("@/pages/FAQPage"));
const Locations = lazy(() => import("@/pages/Locations"));
const ServicePageTemplate = lazy(
  () => import("@/components/templates/ServicePageTemplate"),
);
const SuburbPageTemplate = lazy(
  () => import("@/components/templates/SuburbPageTemplate"),
);

function PageFallback() {
  return (
    <div
      className="flex min-h-[40vh] w-full items-center justify-center bg-background"
      role="status"
      aria-live="polite"
    >
      <span className="sr-only">Loading page</span>
      <div
        className="size-8 animate-spin rounded-full border-2 border-primary border-t-transparent"
        aria-hidden
      />
    </div>
  );
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    }
  }
});

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<PageFallback />}>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/faq" component={FAQPage} />
          <Route path="/locations" component={Locations} />
          <Route path="/locations/:slug" component={SuburbPageTemplate} />
          <Route path="/:slug" component={ServicePageTemplate} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
