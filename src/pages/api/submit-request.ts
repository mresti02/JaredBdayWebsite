import type { APIRoute } from 'astro';

const WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbx2Wh85cb3dWdQOV5iU3OOA31emxdE_QE8AT_NtFIdLVFhwn6k3_nsjg-mpLddmt_x3/exec';

export const POST: APIRoute = async ({ request }) => {
  const webhookUrl = WEBHOOK_URL;

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

  const params = new URLSearchParams({
    name: name.trim(),
    request: requestText.trim(),
    timestamp: new Date().toISOString(),
  });

  let sheetResp: Response;
  try {
    sheetResp = await fetch(`${webhookUrl}?${params.toString()}`, {
      method: 'GET',
      redirect: 'follow',
    });
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    return new Response(JSON.stringify({ error: 'Could not reach Google Sheets', detail: msg }), {
      status: 502,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  if (!sheetResp.ok) {
    const body = await sheetResp.text().catch(() => '');
    return new Response(
      JSON.stringify({ error: 'Google Sheets returned an error', status: sheetResp.status, detail: body }),
      { status: 502, headers: { 'Content-Type': 'application/json' } },
    );
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
