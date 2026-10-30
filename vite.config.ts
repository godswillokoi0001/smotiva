import react from "@vitejs/plugin-react";
import { defineConfig, type Plugin } from "vite";

type MiddlewareRequest = { url?: string };

/**
 * Serve index.html for any path that is not a real file, so deep links like
 * /about work on a full page load or refresh in dev and preview. Static hosts
 * need the same rewrite; see the routing notes in README.md.
 */
const rewriteToIndex = (
  req: MiddlewareRequest,
  _res: unknown,
  next: () => void,
) => {
  const pathname = (req.url ?? "/").split("?")[0];
  const looksLikeFile = /\.[a-zA-Z0-9]+$/.test(pathname);
  // Vite's virtual modules (/@vite/client, /@react-refresh, etc.) must reach
  // Vite unchanged. Rewriting them to index.html makes those requests fail
  // with a 500 before the React app can even load.
  const isViteInternalRequest = pathname.startsWith("/@");
  if (!looksLikeFile && pathname !== "/" && !isViteInternalRequest) {
    req.url = "/index.html";
  }
  next();
};

const spaFallback = (): Plugin => ({
  name: "smotiva-spa-fallback",
  configureServer(server) {
    server.middlewares.use(rewriteToIndex);
  },
  configurePreviewServer(server) {
    server.middlewares.use(rewriteToIndex);
  },
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), spaFallback()],
  base: "./",
  server: {
    host: "0.0.0.0",
    port: 3000,
    watch: {
      usePolling: true,
    },
  },
  preview: {
    host: "0.0.0.0",
    port: 3000,
  },
});
