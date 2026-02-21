import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request, locals }) => {
  // Cloudflare Workers env is surfaced via locals.runtime.env
  const webhookUrl = (locals as any).runtime?.env?.GOOGLE_SHEETS_WEBHOOK_URL as string | undefined;

  if (!webhookUrl) {
    return new Response(JSON.stringify({ error: 'Service not configured' }), {
      status: 503,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  let body: { name?: string; request?: string };
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const { name, request: requestText } = body;

  if (!name?.trim() || !requestText?.trim()) {
    return new Response(JSON.stringify({ error: 'Missing name or request' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const sheetResp = await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: name.trim(),
      request: requestText.trim(),
      timestamp: new Date().toISOString(),
    }),
  });

  if (!sheetResp.ok) {
    return new Response(JSON.stringify({ error: 'Failed to write to sheet' }), {
      status: 502,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
