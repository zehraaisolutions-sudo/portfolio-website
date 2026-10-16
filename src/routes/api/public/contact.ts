import { createFileRoute } from '@tanstack/react-router';
import { contactSchema } from '@/lib/contact-schema';

export const Route = createFileRoute('/api/public/contact')({ server: { handlers: {
  POST: async ({ request }) => {
    const origin = request.headers.get('origin');
    const target = new URL(request.url);
    if (!origin || new URL(origin).host !== target.host) return Response.json({ error: 'Please submit from this website.' }, { status: 403 });
    if (!request.headers.get('content-type')?.includes('application/json')) return Response.json({ error: 'Invalid request.' }, { status: 415 });
    if (Number(request.headers.get('content-length') ?? '0') > 16000) return Response.json({ error: 'Message is too large.' }, { status: 413 });
    try {
      const text = await request.text();
      if (text.length > 16000) return Response.json({ error: 'Message is too large.' }, { status: 413 });
      const parsed = contactSchema.safeParse(JSON.parse(text));
      if (!parsed.success) return Response.json({ error: 'Please check your name, email, and message.' }, { status: 400 });
      const input = parsed.data;
      const elapsed = Date.now() - input.startedAt;
      if (elapsed < 2000 || elapsed > 86400000) return Response.json({ error: 'Please take a moment and try again.' }, { status: 400 });
      const ip = request.headers.get('cf-connecting-ip') ?? input.email.toLowerCase();
      const hash = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(ip));
      const requestHash = Array.from(new Uint8Array(hash)).map((n) => n.toString(16).padStart(2, '0')).join('');
      const { supabaseAdmin } = await import('@/integrations/supabase/client.server');
      const { data, error } = await supabaseAdmin.rpc('submit_contact', { _name: input.name, _email: input.email, _service: input.service, _message: input.message, _request_hash: requestHash });
      if (error) return Response.json({ error: error.message.includes('CONTACT_RATE_LIMIT') ? 'Too many messages. Please try again in 15 minutes.' : 'Your message could not be saved. Please try again.' }, { status: error.message.includes('CONTACT_RATE_LIMIT') ? 429 : 503 });
      return Response.json({ saved: true, emailed: false, id: data });
    } catch { return Response.json({ error: 'Unable to submit your message. Please try again.' }, { status: 400 }); }
  },
} } });