import type { APIRoute } from 'astro';

export const GET: APIRoute = async (context) => {
  // Top-level catch ensures we always return JSON, never an HTML error page
  try {
    const { request, locals } = context;
    const url = new URL(request.url);
    const flight = url.searchParams.get('flight');
    const date = url.searchParams.get('date');

    if (!flight || !date) {
      return new Response(JSON.stringify({ error: 'Missing flight or date' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || !/^[A-Z0-9]{2,8}$/.test(flight)) {
      return new Response(JSON.stringify({ error: 'Invalid parameters' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Read env var safely — try both PUBLIC_FLIGHTS and FLIGHTS since
    // Webflow Cloud may expose it under either name in the Worker runtime
    let apiKey: string | undefined;
    try {
      const env = (locals as any).runtime?.env;
      apiKey = env?.PUBLIC_FLIGHTS || env?.FLIGHTS;
    } catch {
      // runtime context unavailable
    }

    if (!apiKey) {
      return new Response(JSON.stringify({ error: 'API key not configured' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    let apiResp: Response;
    try {
      apiResp = await fetch(
        `https://aerodatabox.p.rapidapi.com/flights/number/${flight}/${date}`,
        {
          headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'aerodatabox.p.rapidapi.com',
          },
        },
      );
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      return new Response(
        JSON.stringify({ error: 'Could not reach AeroDataBox', detail: msg }),
        { status: 200, headers: { 'Content-Type': 'application/json' } },
      );
    }

    if (!apiResp.ok) {
      const text = await apiResp.text().catch(() => '');
      return new Response(
        JSON.stringify({ error: 'AeroDataBox error', status: apiResp.status, detail: text }),
        { status: 200, headers: { 'Content-Type': 'application/json' } },
      );
    }

    const data = await apiResp.json();
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=300',
      },
    });
  } catch (err) {
    // Catch-all: ensures the Worker never returns an HTML 502
    const msg = err instanceof Error ? err.message : String(err);
    return new Response(
      JSON.stringify({ error: 'Internal server error', detail: msg }),
      { status: 500, headers: { 'Content-Type': 'application/json' } },
    );
  }
};
