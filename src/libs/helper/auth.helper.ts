'use server';

// import {cookies} from 'next/headers';
import {redirect} from 'next/navigation';

import {setCookie, getCookie, removeCookie} from './cookies.helper';

export async function setCookieJWT(jwtData: string) {
  try {
    // const cookieStore = await cookies();
    // cookieStore.set({
    //   name: 'jwt',
    //   value: jwtData,
    //   httpOnly: true,
    //   path: '/',
    //   maxAge: 60 * 60 * 24,
    // });
    // return cookieStore;
    return await setCookie('jwt', jwtData);
  } catch (error) {
    console.log('err set cookies', error);
  }
}

export async function getCookiesJWT() {
  // const cookieStore = await cookies();
  // return cookieStore.get('jwt')?.value;
  return await getCookie('jwt');
}

export async function protectRoute() {
  const jwtData = await getCookiesJWT();

  if (!jwtData) {
    redirect('/signin');
  }

  return true;
}

export async function removeCookiesJWT() {
  return await removeCookie('jwt');
}
