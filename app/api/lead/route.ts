import { NextResponse } from 'next/server';
import { appendLead } from '@/lib/leads';

export async function POST(request: Request) {
  const body = await request.json();

  if (!body?.email || !body?.name || !body?.message || !body?.company) {
    return NextResponse.json({ error: 'Eksik alanlar var.' }, { status: 400 });
  }

  const lead = {
    id: crypto.randomUUID(),
    name: body.name,
    email: body.email,
    company: body.company,
    message: body.message,
    createdAt: new Date().toISOString()
  };

  await appendLead(lead);

  if (process.env.CRM_WEBHOOK_URL) {
    await fetch(process.env.CRM_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...lead,
        recaptchaToken: body.recaptchaToken ?? null
      })
    });
  }

  // TODO: reCAPTCHA doğrulaması ve CRM (HubSpot, Salesforce vb.) ek doğrulama adımları.

  return NextResponse.json({ success: true });
}
