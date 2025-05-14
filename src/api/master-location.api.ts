'use server';

import { ResponseAPI } from '@/libs/interfaces/http.interface';

import { Get } from './base.api';

export async function fetchApiMasterLocation(): Promise<ResponseAPI<any[]>> {
  try {
    return await Get<any[]>('/api/v1/client/popular-location');
  } catch (error: any) {
    console.log('error fetch from api popular location', error);
    throw new Error(error);
  }
}
