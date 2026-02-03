import { NextResponse } from 'next/server';
import { readLeads } from '@/lib/leads';

const isAuthorized = (request: Request) => {
  const token = request.headers.get('x-admin-token');
  if (!process.env.ADMIN_TOKEN) {
    return true;
  }
  return token === process.env.ADMIN_TOKEN;
};

export async function GET(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: 'Yetkisiz erişim.' }, { status: 401 });
  }

  const leads = await readLeads();
  return NextResponse.json({ leads });
}
