import { NextRequest, NextResponse } from 'next/server';
import { baseApi } from '@/libs/utils/base.api';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const queryParams = Object.fromEntries(searchParams.entries());
  const stringObject = JSON.stringify(queryParams);
  console.log('string', stringObject);

  const base = baseApi(`/api/v1/client/properties`);

  // // Proxy request ke PokeAPI
  const res = await fetch(base.url, {
    headers: base.headers,
  });

  const data = await res.json();

  return NextResponse.json(data, {
    status: 200,
    headers: { 'Cache-Control': 'public, max-age=60' },
  });
}

// refreshInterval: 1000
