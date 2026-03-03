import type { APIRoute } from 'astro';

/**
 * Diagnostic endpoint — hit /Jared30/api/ping to check:
 *   1. Does the Cloudflare Worker handle API routes at all?
 *   2. Is locals.runtime available (Worker bindings)?
 *   3. Which env vars are visible at runtime?
 */
export const GET: APIRoute = async ({ locals }) => {
  try {
    let runtime = false;
    let envKeys: string[] = [];
    let hasFlights = false;

    try {
      const rt = (locals as any).runtime;
      if (rt) {
        runtime = true;
        envKeys = Object.keys(rt.env || {});
        hasFlights = !!rt.env?.FLIGHTS;
      }
    } catch {}

    return new Response(
      JSON.stringify({ ok: true, runtime, envKeys, hasFlights }, null, 2),
      { status: 200, headers: { 'Content-Type': 'application/json' } },
    );
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    return new Response(
      JSON.stringify({ ok: false, error: msg }),
      { status: 500, headers: { 'Content-Type': 'application/json' } },
    );
  }
};
