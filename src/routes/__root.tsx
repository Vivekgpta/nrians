import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Preloader } from "../components/Preloader";
import { Particles } from "../components/Particles";
import { ScrollProgress } from "../components/ScrollProgress";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-gradient-gold text-8xl font-light">404</h1>
        <h2 className="mt-4 font-display text-xl text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          This memory hasn't been captured yet.
        </p>
        <div className="mt-6">
          <Link to="/" className="btn-gold btn-gold-hover rounded-full px-6 py-3 text-sm uppercase tracking-wider">
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl text-foreground">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">Something went wrong. Try again.</p>
        <div className="mt-6 flex justify-center gap-3">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="btn-gold btn-gold-hover rounded-full px-6 py-3 text-sm uppercase tracking-wider"
          >
            Try again
          </button>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Batch 2022–2026 · A Digital Yearbook" },
      { name: "description", content: "Premium luxury memory archive for B.Tech Batch 2022–2026. Four years, one family, infinite memories." },
      { property: "og:title", content: "Batch 2022–2026 · A Digital Yearbook" },
      { property: "og:description", content: "Premium luxury memory archive for B.Tech Batch 2022–2026. Four years, one family, infinite memories." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Batch 2022–2026 · A Digital Yearbook" },
      { name: "twitter:description", content: "Premium luxury memory archive for B.Tech Batch 2022–2026. Four years, one family, infinite memories." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/bb1c289c-cb29-4a68-a363-f4bd4866c0ce/id-preview-20b12666--5a720fa1-2645-42a4-9f1f-e786dde9827f.lovable.app-1781111559701.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/bb1c289c-cb29-4a68-a363-f4bd4866c0ce/id-preview-20b12666--5a720fa1-2645-42a4-9f1f-e786dde9827f.lovable.app-1781111559701.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Inter:wght@300;400;500;600;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem("batch_loaded")) {
      setLoaded(true);
    }
  }, []);

  const handleDone = () => {
    setLoaded(true);
    if (typeof window !== "undefined") sessionStorage.setItem("batch_loaded", "1");
  };

  return (
    <QueryClientProvider client={queryClient}>
      {!loaded && <Preloader onDone={handleDone} />}
      <Particles count={35} />
      <ScrollProgress />
      <Navbar />
      <main className="pt-20">
        <Outlet />
      </main>
      <Footer />
    </QueryClientProvider>
  );
}
