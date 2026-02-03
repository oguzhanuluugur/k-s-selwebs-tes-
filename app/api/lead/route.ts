import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();

  if (!body?.email || !body?.name || !body?.message) {
    return NextResponse.json({ error: 'Eksik alanlar var.' }, { status: 400 });
  }

  // TODO: reCAPTCHA doğrulaması ve CRM (HubSpot, Salesforce vb.) entegrasyonu.
  // Bu endpoint, CRM webhooklarına veri göndermek için hazırdır.

  return NextResponse.json({ success: true });
}
