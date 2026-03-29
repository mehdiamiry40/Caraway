import { defineConfig } from "vite";
import type { Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

/** LCP hero images are rendered by React; preloads in initial HTML satisfy Lighthouse "discoverable in document". */
function lcpImagePreload(): Plugin {
  let base = "/";
  return {
    name: "lcp-image-preload",
    configResolved(config) {
      base = config.base.endsWith("/") ? config.base : `${config.base}/`;
    },
    transformIndexHtml() {
      const href = (p: string) => `${base}${p}`.replace(/([^:]\/)\/+/g, "$1");
      return {
        tags: [
          {
            tag: "link",
            attrs: {
              rel: "preload",
              as: "image",
              href: href("images/tow-truck-hero.webp"),
              imagesrcset: `${href("images/tow-truck-hero-sm.webp")} 600w, ${href("images/tow-truck-hero.webp")} 1200w`,
              imagesizes: "(max-width: 1024px) 100vw, 54vw",
              fetchpriority: "high",
            },
            injectTo: "head-prepend",
          },
        ],
      };
    },
  };
}

const rawPort = process.env.PORT ?? "5173";
const port = Number(rawPort);

if (Number.isNaN(port) || port <= 0) {
  throw new Error(`Invalid PORT value: "${rawPort}"`);
}

const basePath = process.env.BASE_PATH ?? "/";

export default defineConfig(async ({ mode }) => ({
  base: basePath,
  plugins: [
    lcpImagePreload(),
    react(),
    tailwindcss(),
    ...(mode === "development" ? [runtimeErrorOverlay()] : []),
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer({
              root: path.resolve(import.meta.dirname, ".."),
            }),
          ),
          await import("@replit/vite-plugin-dev-banner").then((m) =>
            m.devBanner(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
      "@assets": path.resolve(import.meta.dirname, "..", "..", "attached_assets"),
    },
    dedupe: ["react", "react-dom"],
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return;
          if (id.includes("@radix-ui")) return "radix";
          if (id.includes("lucide-react")) return "icons";
          if (id.includes("wouter")) return "router";
          if (
            /node_modules\/react-dom\//.test(id) ||
            /node_modules\/react\//.test(id)
          ) {
            return "vendor";
          }
        },
      },
    },
    target: "es2022",
    cssMinify: true,
  },
  server: {
    port,
    host: "0.0.0.0",
    allowedHosts: true,
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
  preview: {
    port,
    host: "0.0.0.0",
    allowedHosts: true,
  },
}));
