'use server';

import axios, { AxiosRequestConfig } from 'axios';
import { getCookiesJWT } from '@/libs/helper/auth.helper';
import { ResponseAPI } from '@/libs/interfaces/http.interface';

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const initialConfigHttp: AxiosRequestConfig = {
  headers: {
    'api-key': API_KEY,
  },
  baseURL: BASE_URL,
  timeout: 2500,
  validateStatus(status) {
    return status >= 200 && status < 500; // default response
  },
};

let configHttp: any = { ...initialConfigHttp };

function resetConfig() {
  configHttp = { ...initialConfigHttp };
}

export async function Get<T>(
  path: string,
  query: any = undefined,
): Promise<ResponseAPI<T>> {
  Object.assign(configHttp, {
    url: path, // this is endpoint not base url
    method: 'GET',
  });

  if (query) {
    Object.assign(configHttp, {
      params: query,
    });
  }

  console.log('options GET', configHttp);

  return await httpRequestSend<T>();
}

export async function Post<T>(
  path: string,
  body: any,
): Promise<ResponseAPI<T>> {
  Object.assign(configHttp, {
    url: path, // this is endpoint not base url
    data: body,
    method: 'POST',
  });

  return await httpRequestSend<T>();
}

export async function Put<T>(path: string, body: any): Promise<any> {
  Object.assign(configHttp, {
    url: path, // this is endpoint not base url
    data: body,
    method: 'PUT',
  });

  console.log('options PUT', configHttp);

  return await httpRequestSend<T>();
}

export async function Delete<T>(path: string): Promise<any> {
  Object.assign(configHttp, {
    url: path, // this is endpoint not base url
    method: 'DELETE',
  });

  // if (authorization) {
  //   Object.assign(configHttp.headers, {Authorization: authorization});
  // }
  console.log('options DELETE', configHttp);

  return await httpRequestSend<T>();
}

async function httpRequestSend<T>(): Promise<ResponseAPI<T>> {
  try {
    const auth: any = await getCookiesJWT();

    Object.assign(configHttp.headers, { Authorization: auth });

    const requestData = await axios.request(configHttp);

    resetConfig();

    return requestData.data;
  } catch (error: any) {
    console.error('error axios req', error);
    throw new Error('Failed Request');
  }
}
