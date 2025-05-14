'use server';

import { NextRequest, NextResponse } from 'next/server';
import { baseApi } from '@/libs/utils/base.api';
// import { IProperty, ResponseAPI } from '@/libs/interfaces';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;

  const base = baseApi(`/api/v1/client/properties/${slug}`);
  console.log('base url', base);

  // Proxy request ke PokeAPI
  const res = await fetch(base.url, {
    headers: base.headers,
  });
  console.log('res', res);

  if (!res.ok) {
    return NextResponse.json({ error: '' }, { status: 404 });
  }

  const data = await res.json();

  // Tambahkan caching: revalidate setiap 60 detik
  return NextResponse.json(data, {
    status: 200,
    headers: { 'Cache-Control': 'public, max-age=5' },
  });
}
