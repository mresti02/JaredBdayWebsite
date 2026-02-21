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
