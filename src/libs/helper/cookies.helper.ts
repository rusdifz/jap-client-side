'use server';

import {cookies} from 'next/headers';

export async function setCookie(key: string, data: any) {
  try {
    const cookieStore = await cookies();
    cookieStore.set({
      name: key,
      value: data,
      httpOnly: true,
      path: '/',
      maxAge: 60 * 60 * 24,
    });
    return cookieStore;
  } catch (error) {
    console.log('err set cookies', error);
  }
}

export async function getCookie(key: string) {
  const cookieStore = await cookies();
  return cookieStore.get(key)?.value;
}

export async function removeCookie(key: string) {
  return (await cookies()).delete(key);
}
