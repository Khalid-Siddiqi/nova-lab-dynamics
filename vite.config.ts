import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";

// Build a fully static site (every page prerendered to HTML in dist/client)
// with STATIC=1, and always on Cloudflare: Workers Builds sets WORKERS_CI=1 and
// Pages sets CF_PAGES=1. Other static hosts (Netlify, GitHub Pages) need STATIC=1.
const isStatic = ["STATIC", "WORKERS_CI", "CF_PAGES"].some((v) => process.env[v] === "1");

export default defineConfig(({ command }) => ({
  plugins: [
    tailwindcss(),
    tanstackStart({
      // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
      server: { entry: "server" },
      // Keep server-only code out of the client bundle.
      importProtection: {
        behavior: "error",
        client: {
          files: ["**/server/**"],
          specifiers: ["server-only"],
        },
      },
      ...(isStatic && { prerender: { enabled: true, crawlLinks: true, failOnError: true } }),
    }),
    viteReact(),
    // Production server build. Nitro detects Vercel when building there and
    // falls back to a plain Node server locally.
    command === "build" && !isStatic && nitro(),
  ],
  // Use Lightning CSS in dev as well as build, so the dev preview matches the built CSS.
  css: { transformer: "lightningcss" },
  resolve: {
    tsconfigPaths: true,
    dedupe: [
      "react",
      "react-dom",
      "react/jsx-runtime",
      "react/jsx-dev-runtime",
      "@tanstack/react-query",
      "@tanstack/query-core",
    ],
  },
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react-dom/client",
      "react/jsx-runtime",
      "react/jsx-dev-runtime",
    ],
  },
  server: { host: "::", port: 8080 },
}));
