import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";

// ── Build-time diagnostics (check Webflow Cloud build logs) ──────────
const envKeys = Object.keys(process.env)
  .filter(k => !k.startsWith('npm_') && !k.startsWith('_') && !k.startsWith('HOME'))
  .sort();
console.log('[astro.config] process.env keys available at build time:', envKeys.join(', '));
console.log('[astro.config] PUBLIC_FLIGHTS =', process.env.PUBLIC_FLIGHTS ?? '(not set)');
console.log('[astro.config] FLIGHTS =', process.env.FLIGHTS ?? '(not set)');

// Update mountPath to match the mount path you configure in Webflow Cloud
// (e.g. "/birthday" if your environment is mounted at mysite.webflow.io/birthday)
// Use "/" if mounting at the root of your Webflow site.
const mountPath = "/Jared30";

export default defineConfig({
  base: mountPath,
  build: {
    assetsPrefix: mountPath,
  },
  output: "server",
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
  vite: {
    define: {
      // Injected at build time — works with any env var name Webflow Cloud exposes
      __FLIGHTS_KEY__: JSON.stringify(
        process.env.PUBLIC_FLIGHTS ?? process.env.FLIGHTS ?? ''
      ),
    },
  },
});
